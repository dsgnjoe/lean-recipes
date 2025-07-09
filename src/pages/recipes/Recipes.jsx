import RecipeCard from "@/components/RecipeCard";
import Spinner from "@/components/Spinner";
import { useGetRecipes } from "./recipes.service";

const Recipes = () => {
  const { data, isLoading, error } = useGetRecipes();
  console.log("🚀 ~ Recipes ~ data:", data);
  return (
    <div className="bg-white w-full px-3 md:px-20 py-10 md:py-20">
      <header className="font-bold text-2xl mb-5">All Recipes</header>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {data.body.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipes;
