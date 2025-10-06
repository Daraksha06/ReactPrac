import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link class="nav-link" to="/nhome">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/nshows">Shows</Link>
                </li> 
                    <li class="nav-item">
                        <Link class="nav-link" to="/nmovies">Movies</Link>  
                </li> 
            </ul>
        </div>
    </nav>
      
</div>
  )
}

export default Navbar



//  {/* <a class="nav-link" href="/nmovies">Movies</a>    when we use this anchor tag , page refreshes  hence we will use link*/   }