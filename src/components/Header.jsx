
  import { Link } from "react-router-dom";
  import images from "../assets/images/logo-OpazD70S.png"
  
  function Header() {
   
  
    return (
      <>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a className="flex title-font font-medium items-center text-gray-900">
                <img
                   src={images}
                   alt="All in One"
                  className="w-24 p-2 rounded-full font-mono"
                />
              </a>
  
             
            </div>
  
            <div
              className={' md:flex md:items-center space-x-6 font-bold gap-4 mt-4 md:mt-0'}
            >
            
  
                <Link to="/admin" className="relative group text-gray-900">
                  admin
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
  
                <Link to="/teacher" className="relative group text-gray-900">
                  teacher
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
  
                <Link to="/student" className="relative group text-gray-900">
                  student
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              
  
                
            </div>
            </div>
          
        </header>
</>        
    );
  }
  
  export default Header;