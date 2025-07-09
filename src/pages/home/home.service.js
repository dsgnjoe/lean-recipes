import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetLatestRecipes = () => {
  return useQuery({
    queryKey: ["latest-recipes"],
    queryFn: async () => {
      const response = await api.get("/recipes/latest");
      return response.data;
    },
  });
};
