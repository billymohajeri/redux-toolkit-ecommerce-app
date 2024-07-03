import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Outlet />
    </div>
  )
}

export default Navbar
