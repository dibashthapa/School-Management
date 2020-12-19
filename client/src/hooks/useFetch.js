import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = ({ url, method = "GET", data }) => {
  const [response, setResponse] = useState([]);
  const api = "http://127.0.0.1:8000/api";
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios({ method, url: `${api}/${url}`, data });
      setResponse(res.data);
    };
    fetchData();
  }, []);
  return response;
};
