import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    input_query: "check",
    status: [],
    owners: [],
    attorneys: [],
    law_firms: [],
  });

  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [attorneyList, setAttorneyList] = useState([]);
  const [ownerList, setOwnerList] = useState([]);
  const [lawFirmList, setLawFirmList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "https://vit-tm-task.api.trademarkia.app/api/v3/us";

  // Function to update filters
  const updateFilters = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  // Function to make the API call based on filters
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        API_URL,
        {
          ...filters,
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

      // Check if response status is 404 or no results found
      if (response.status === 404 || response.data.msg === "not found") {
        setError("No results found");
        setData([]);
        setTotalCount(0);
        setOwnerList([]);
        setLawFirmList([]);
        setAttorneyList([]);
      } else {
        setData(response.data.body.hits.hits);
        const aggregations = response.data.body.aggregations;
        setTotalCount(response.data.body.hits.total.value);
        if (aggregations) {
          setOwnerList(aggregations.current_owners.buckets || []);
          setLawFirmList(aggregations.law_firms.buckets || []);
          setAttorneyList(aggregations.attorneys.buckets || []);
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("No results found.");
        setData([]); // Ensure data is reset
        setTotalCount(0);
        setOwnerList([]);
        setLawFirmList([]);
        setAttorneyList([]);
      } else {
        setError("An error occurred while fetching data.");
      }
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data whenever filters change
  useEffect(() => {
    fetchData();
  }, [filters]);

  // Update document title dynamically based on search results and errors
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
