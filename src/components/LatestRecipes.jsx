import { useGetLatestRecipes } from "@/pages/home/home.service";
import RecipeCard from "./RecipeCard";
import Spinner from "./Spinner";

const LatestRecipes = () => {
  const {
    data,
    isLoading: isLoadingLatestRecipes,
    error,
  } = useGetLatestRecipes();
  console.log("🚀 ~ LatestRecipes ~ data:", data);
  return (
    <div className="bg-white w-full px-3 md:px-20 py-10 md:py-20">
      <header className="font-bold text-2xl mb-5">Latest Recipes</header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {isLoadingLatestRecipes ? (
          <Spinner />
        ) : (
          data.body.map((recipe, i) => <RecipeCard key={i} recipe={recipe} />)
        )}
      </div>
    </div>
  );
};

export default LatestRecipes;
