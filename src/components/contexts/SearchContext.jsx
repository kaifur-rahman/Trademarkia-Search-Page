import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to deserialize filters from the URL
  const deserializeFilters = (search) => {
    const params = new URLSearchParams(search);
    return {
      input_query: params.get("input_query") || "nike",
      status: params.get("status") ? params.get("status").split(",") : [],
      owners: params.get("owners") ? params.get("owners").split(",") : [],
      attorneys: params.get("attorneys")
        ? params.get("attorneys").split(",")
        : [],
      law_firms: params.get("law_firms")
        ? params.get("law_firms").split(",")
        : [],
    };
  };

  // Initialize filters from URL params instead of default state
  const [filters, setFilters] = useState(() =>
    deserializeFilters(location.search)
  );

  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [attorneyList, setAttorneyList] = useState([]);
  const [ownerList, setOwnerList] = useState([]);
  const [lawFirmList, setLawFirmList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_URL = "https://vit-tm-task.api.trademarkia.app/api/v3/us";

  // Function to update filters on the basis of reset feature
  const updateFilters = (filterType, value, resetOtherFilters = false) => {
    setFilters((prevFilters) => {
      //  reset other filters except the current one
      if (resetOtherFilters) {
        return {
          input_query:
            filterType === "input_query" ? value : prevFilters.input_query,
          status: filterType === "status" ? value : [],
          owners: filterType === "owners" ? value : [],
          attorneys: filterType === "attorneys" ? value : [],
          law_firms: filterType === "law_firms" ? value : [],
        };
      }

      // Otherwise, just update the specific filter
      return {
        ...prevFilters,
        [filterType]: value,
      };
    });
  };

  // Serialize filters to URL parameters
  const serializeFilters = (filters) => {
    const queryParams = new URLSearchParams();
    Object.keys(filters).forEach((key) => {
      if (Array.isArray(filters[key])) {
        queryParams.set(key, filters[key].join(","));
      } else {
        queryParams.set(key, filters[key]);
      }
    });
    return queryParams.toString();
  };

  // Update the URL whenever filters change
  useEffect(() => {
    const currentParams = new URLSearchParams(location.search).toString();
    const serializedFilters = serializeFilters(filters);

    if (serializedFilters !== currentParams) {
      navigate(`${location.pathname}?${serializedFilters}`, { replace: true });
    }
  }, [filters, navigate, location.pathname, location.search]);

  // Fetch data from API based on filters
  const fetchData = async (appliedFilters) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        API_URL,
        {
          ...appliedFilters,
          page: 1,
          rows: 10,
          sort_order: "desc",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json, text/plain, */*",
          },
        }
      );

      if (response.status === 404 || response.data.msg === "not found") {
        setData([]);
        setTotalCount(0);
        setOwnerList([]);
        setLawFirmList([]);
        setAttorneyList([]);
        setError(null);
      } else {
        const responseData = response.data.body.hits.hits;
        const aggregations = response.data.body.aggregations;
        setData(responseData);
        setTotalCount(response.data.body.hits.total.value);

        if (aggregations) {
          setOwnerList(aggregations.current_owners.buckets || []);
          setLawFirmList(aggregations.law_firms.buckets || []);
          setAttorneyList(aggregations.attorneys.buckets || []);
        }
      }
    } catch (error) {
      // Only set error if it's not a 404
      if (error.response?.status !== 404) {
        setError("An error occurred while fetching data.");
      } else {
        setData([]);
        setTotalCount(0);
        setOwnerList([]);
        setLawFirmList([]);
        setAttorneyList([]);
        setError(null);
      }
      console.error(
        "Error fetching data: ",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  // Fetch data whenever filters change, but only after URL filters are applied
  useEffect(() => {
    if (filters) {
      fetchData(filters);
    }
  }, [filters]);

  // Ensure the filters are deserialized from the URL on component mount
  useEffect(() => {
    const initialFilters = deserializeFilters(location.search);
    if (JSON.stringify(initialFilters) !== JSON.stringify(filters)) {
      setFilters(initialFilters); // Only update if different
    }
  }, [location.search]);

  // Dynamic document title updates based on error, results count, and filters
  useEffect(() => {
    if (error) {
      document.title = `No results found for "${filters.input_query}" | Trademarkia`;
    } else if (totalCount > 0) {
      document.title = `${totalCount.toLocaleString()} Trademark results found for "${
        filters.input_query
      }" | Trademarkia`;
    } else {
      document.title = `Search | Trademarkia`;
    }
  }, [filters.input_query, totalCount, error]);

  return (
    <SearchContext.Provider
      value={{
        filters,
        updateFilters,
        data,
        totalCount,
        loading,
        error,
        ownerList,
        lawFirmList,
        attorneyList,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
