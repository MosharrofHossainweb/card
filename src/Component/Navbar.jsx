
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <div className='w-full justify-center '>
            <nav className='flex justify-center items-center bg-green-800 p-5'>
              <div className="div">
                <h4 className="text-4xl text-yellow-500 mr-40">REdux</h4>
              </div>
                <ul className=" flex justify-center gap-60">
                    <li className="text-yellow-500 hover:text-yellow-300 active:transform scale-[1.3]"><Link to="/">Home</Link></li>
                    <li className="text-yellow-500 hover:text-yellow-300 active:transform scale-[1.3]"><Link to="/Redux">Redux</Link></li>
                    <li className="text-yellow-500 hover:text-yellow-300 active:transform scale-[1.3]"><Link to="/Card">Card</Link></li>
                    <li className="text-yellow-500 hover:text-yellow-300 active:transform scale-[1.3]"><Link to="/About">About</Link></li>
                 
                </ul>
            </nav>
      </div>
    </>
  )
}

export default Navbar
