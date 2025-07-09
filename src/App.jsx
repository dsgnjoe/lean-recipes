import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import AddRecipe from "./pages/AddRecipe";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import SingleRecipe from "./pages/SingleRecipe";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/recipe/:name" element={<SingleRecipe />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
