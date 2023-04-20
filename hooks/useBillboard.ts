import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const useBillboard = () => {
  const { data, error, isLoading } = useSWR("/api/random", fetcher, {
    // Загружаем данные единожды, как только пользователь посетит главную страницу
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  }
}

export default useBillboard;
