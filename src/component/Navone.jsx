import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


const Navone = () => {
  return (
    <div>
      <Navbar bg="danger" expand="lg">
         <Container className='justify-content-space-between'>
           
                <div className='me-auto'>
                   <Link to="/home" className="text-white ms-3 text-decoration-none">
                      ⛪Home
                   </Link>
                   <Link to="/contact" className="text-white ms-3 text-decoration-none">
                      📞Contacto
                   </Link>
                 </div>
                   <Link to="/home" className="text-white ms-3 text-decoration-none">
                      🐶Happy Cake
                   </Link>   
          </Container>
       </Navbar>
      </div>
  )
}

export default Navone