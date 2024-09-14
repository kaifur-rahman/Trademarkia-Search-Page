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
            "Access-Control-Allow-Origin": "*", // CORS-related headers
            Accept: "application/json, text/plain, */*",
          },
        }
      );
      setData(response.data.body.hits.hits);
      const aggregations = response.data.body.aggregations;
      setTotalCount(response.data.body.hits.total.value);
      if (aggregations) {
        setOwnerList(aggregations.current_owners.buckets || []);
        setLawFirmList(aggregations.law_firms.buckets || []);
        setAttorneyList(aggregations.attorneys.buckets || []);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data whenever filters change
  useEffect(() => {
    fetchData();
  }, [filters]);

  return (
    <SearchContext.Provider
      value={{
        filters,
        updateFilters,
        data,
        totalCount,
        loading,
        ownerList,
        lawFirmList,
        attorneyList,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
