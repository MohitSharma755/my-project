import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Netflixseries from "./Components/Netflixseries.jsx";
import {Footer} from "./Components/Netflixseries.jsx";
import Form from "./Components/form.jsx";
import './App.css'
import './css/bootstrap.css'
import './js/bootstrap.js'
// import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Netflixseries/>
     
     <Navbar/>
     <Footer/>
     <Form/>
     </>
    
  )
}

export default App
// componenet


const Navbar = () => {
  return (
    <nav className="navbar">
   
      <ul className="nav-links  flex">
        <li><a href="index.html">Home</a></li>
        <li><a href="About.html">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="form.php">form</a></li>
      </ul>
    </nav>
  );
};


// if (age < 18){
//   return(
//     <div>
//     <div>
//     <div>
//       <img src="download.jpeg" alt="" />
//     </div>
//     <h1>Name :{name} </h1>
//     <h3>Rating:{rating}</h3>
//     <p>Summary:
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. At pariatur exercitationem odit voluptatem culpa, laudantium nemo perferendis eius impedit deleniti quaerat earum, commodi nobis odio aut soluta, assumenda ullam corporis!
//       Commodi ipsa nulla soluta repellendus maiores minima quis magni iusto voluptate, earum saepe harum deserunt, debitis amet repudiandae pariatur eaque aspernatur laborum ut vero voluptas! Culpa omnis repellat assumenda suscipit?
       
//     </p>
//     {/* by function  */}
//     <p>Genre:{returneGenre()} </p>
//     <button>not available</button>
//   </div>
 

//    </div>
//   )
// }


// const Netflixseries =() =>{
//   const name="Queen of tears"
//   const rating="8.2"
//   return(
     
//     <div>
//     <div>
//       <img src="download.jpeg" alt="" />
//     </div>
//     <h1>Name :{name} </h1>
//     <h3>Rating:{rating}</h3>
//     <p>Summary:
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. At pariatur exercitationem odit voluptatem culpa, laudantium nemo perferendis eius impedit deleniti quaerat earum, commodi nobis odio aut soluta, assumenda ullam corporis!
//       Commodi ipsa nulla soluta repellendus maiores minima quis magni iusto voluptate, earum saepe harum deserunt, debitis amet repudiandae pariatur eaque aspernatur laborum ut vero voluptas! Culpa omnis repellat assumenda suscipit?
       
//     </p>
//     {/* by function  */}
//     <p>Genre:{returneGenre()} </p>
//     {/* seceond method */}
//     <button>{age >= 18? "Watch now" :"not available"} </button>
//     {/* third method */}
//     <button>{canwatch} </button>
//     {/* by function */}
//     <button>{canWatch ()} </button>
//   </div>
 

    

//   )
// }
