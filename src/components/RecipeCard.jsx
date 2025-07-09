import { GoClock } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe, index }) {
  const navigate = useNavigate();

  return (
    <div
      key={index}
      className="rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300 w-full border border-gray-200 pb-2"
      onClick={() => navigate(`/recipe/${recipe.id}`)}
    >
      {/* recipe image */}
      <img
        src={recipe.photoUrl}
        alt={"recipe image"}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      {/* Vegies component */}

      {/* Recipe data */}
      <div className="p-4">
        <span className="bg-green-50 text-green-600 p-1 border border-green-300 rounded-md text-sm">
          Vegetarian
        </span>
        <h2 className="text-xl font-semibold mt-3">{recipe.name}</h2>
        <p className="text-gray-600 mt-1">By Chef Jeffrey Dhama</p>

        <div className="flex justify-between items-center mt-1">
          <span className="text-gray-500 text-sm">
            <GoClock className="inline-block" />
            {recipe.prepTimeMinutes} minutes
          </span>
          <span>
            <IoBookmarkOutline className="font-bold text-xl" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
