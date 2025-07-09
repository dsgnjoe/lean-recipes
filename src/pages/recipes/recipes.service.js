import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetRecipes = () => {
  return useQuery({
    queryKey: ["recipes"],
    queryFn: async () => {
      const response = await api.get("/recipes");
      return response.data;
    },
  });
};
