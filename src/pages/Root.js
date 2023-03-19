import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Root = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Root
