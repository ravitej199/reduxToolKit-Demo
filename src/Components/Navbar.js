import React from 'react'
import { useSelector } from 'react-redux'
function Navbar() {


  const amount = useSelector((state)=> state.amount.amount )


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" >Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex  justify-content-between" id="navbarNav">
        <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">About</a>
        </li>
        </ul>
        </div>
        <div>
        <button disabled={true} className="btn-primary bg-black text-white rounded">Your Balance: {amount}</button>

        </div>
    
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
