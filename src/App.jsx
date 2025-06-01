import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Recipes from './pages/Recipes'
import Categories from './pages/Categories'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/categories' element={<Categories />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
