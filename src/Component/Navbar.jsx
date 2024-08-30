
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <div className='w-full h-screen justify-center'>
            <nav className='flex justify-center items-center bg-green-800 p-5'>
                <ul className=" flex justify-center gap-10">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Redux">Redux</Link></li>
                    <li><Link to="/About">About</Link></li>
                 
                </ul>
            </nav>
      </div>
    </>
  )
}

export default Navbar
