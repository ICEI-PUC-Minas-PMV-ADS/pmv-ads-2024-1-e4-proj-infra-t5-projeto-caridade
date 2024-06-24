import { useEffect, useState } from "react";
import { api, organization } from "../services/api";

export function useFetch({ url, params }: { url: string; params?: any }) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      const response = await organization.get(url, params);
      setIsPending(false);
      console.log("teste", response);
      setData(response?.data);
    };
    fetchData();
  }, [url]);

  return { data, isPending };
}
