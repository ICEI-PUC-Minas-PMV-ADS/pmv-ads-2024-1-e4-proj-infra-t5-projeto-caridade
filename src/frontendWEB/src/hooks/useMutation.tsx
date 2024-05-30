import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useMutation({ url, params }) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const mutate = async () => {
      setIsPending(true);
      const response = await api.post(url, params);
      setIsPending(false);
      setData(response);
    };
    mutate();
  }, [url]);

  return { data, isPending };
}
