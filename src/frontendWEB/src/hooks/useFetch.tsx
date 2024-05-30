import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useFetch({ url, params }: { url: string; params?: any }) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      const response = await api.get(url, params);
      setIsPending(false);
      setData(response?.data);
    };
    fetchData();
  }, [url]);

  return { data, isPending };
}
