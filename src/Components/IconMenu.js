import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import { FaHome } from 'react-icons/fa';


const IconMenu = () => {

  return (
    <Navbar  variant="dark" expand="sm" className="flex-column" style={{ backgroundColor: 'black' }}>
      <Navbar.Brand> <img src={process.env.PUBLIC_URL + '/Assets/img15.png'} /> My Sidebar <span>&nbsp;&nbsp; <img src={process.env.PUBLIC_URL + '/Assets/img17.png'} /></span> </Navbar.Brand>
      <Nav className="mr-auto flex-column">
        <Nav.Link href="#">
           <img src={process.env.PUBLIC_URL + '/Assets/img1.png'} /> <span>&nbsp;&nbsp; Home</span>
        </Nav.Link>
        <Nav.Link href="#">
        <img src={process.env.PUBLIC_URL + '/Assets/img2.png'} /> <span>&nbsp;&nbsp; Section 1</span>
        </Nav.Link>
        <Nav.Link href="#">
        <img src={process.env.PUBLIC_URL + '/Assets/img3.png'} /> <span>&nbsp;&nbsp; Section 2</span>
        </Nav.Link>
        <Nav.Link href="#">
        <img src={process.env.PUBLIC_URL + '/Assets/img4.png'} /><span>&nbsp;&nbsp; Section 3</span>
        </Nav.Link>
        <Nav.Link href="#">
        <img src={process.env.PUBLIC_URL + '/Assets/img5.png'} /><span>&nbsp;&nbsp; Section 4</span>
        </Nav.Link>
        <Nav.Link href="#">
        <img src={process.env.PUBLIC_URL + '/Assets/img6.png'} /><span>&nbsp;&nbsp; Section 5</span>
        </Nav.Link>
        <Nav.Link href="#">
        <img src={process.env.PUBLIC_URL + '/Assets/img7.png'} /><span>&nbsp;&nbsp; Section 6</span>
        </Nav.Link>
        <Nav.Link href="#">
        <img src={process.env.PUBLIC_URL + '/Assets/img8.png'} /><span>&nbsp;&nbsp; Section 7</span>  
        </Nav.Link>
        <Nav.Link href="#">
        <Button variant="dark"><img src={process.env.PUBLIC_URL + '/Assets/img9.png'} /><span>&nbsp;&nbsp;Section 8</span></Button>
        </Nav.Link>
        <Nav.Link href="#">
        <img src={process.env.PUBLIC_URL + '/Assets/img10.png'} /> <span>&nbsp;&nbsp; Documentation</span>
        </Nav.Link>
      </Nav> 
      <div className="row mt-5" >
              <div className="col-6">
              <Button variant="dark"><img src={process.env.PUBLIC_URL + '/Assets/img16.png'} /><span>&nbsp;&nbsp;$0.90</span></Button>
              </div>
              <div className="col-6">
              <Button style={{backgroundColor:'#A3E3FF'}}><span>&nbsp;&nbsp;Buy$XYZ</span></Button>
              </div>
       </div>
    </Navbar>
  );

};

export default IconMenu
