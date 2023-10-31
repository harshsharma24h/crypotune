import React, { useEffect,useState } from 'react'
import Coinpage from './Coinpage'
import './layout.css'
import { useSelector } from 'react-redux'




const Navbar = () => {
 

  const data = useSelector(state=> state.data)
// console.log("from navbar ",data)


const [searchQuery, setSearchQuery] = useState('');
const [filteredCoinData, setFilteredCoinData] = useState([]);



// search function code
useEffect(() => {
  handleSearch();
}, [searchQuery, data]);

const handleSearch = () => {
  if (searchQuery.trim() === '') {
    setFilteredCoinData(Object.values(data));
  } else {
    const filteredData = Object.values(data).filter(
      coin => coin.symbol && coin.name.toUpperCase().includes(searchQuery.toUpperCase())
    );
    setFilteredCoinData(filteredData);
  }
};







// console.log(searchQuery)






  return (
    < >
   <nav className="navbar navbar-expand-lg navbar navbar-dark bootstrap">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Cryptotune</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li className="nav-item">
          {/* <a className="nav-link disabled">Disabled</a> */}
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e=>setSearchQuery(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>




     



    </>
  )
}

export default Navbar