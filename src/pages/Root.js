import { Outlet } from 'react-router-dom'
import Topbar from '../components/topbar/Topbar'
import Sidebar from '../components/sidebar/Sidebar'

const Root = () => {
  return (
    <>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default Root
