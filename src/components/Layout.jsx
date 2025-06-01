import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className='flex flex-col bg-heroGreenLight '>
      <Navbar />
      <main className=''>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
