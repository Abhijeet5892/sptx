import React from "react";
import {
  Button,
  Form,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const RightsideDashboard = () => {
  return (
    <div className="p-1">
      <Form>
            <div className="row mt-2">
              <div className="col-md-6" >
                <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-custom">
                  <img src={process.env.PUBLIC_URL + '/Assets/img12.png'} /> Custom Link
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Option 1</Dropdown.Item>
                    <Dropdown.Item href="#">Option 2</Dropdown.Item>
                    <Dropdown.Item href="#">Option 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col-md-6">
                <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-custom">
                  <img src={process.env.PUBLIC_URL + '/Assets/img13.png'} /> Custom Link
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Option 1</Dropdown.Item>
                    <Dropdown.Item href="#">Option 2</Dropdown.Item>
                    <Dropdown.Item href="#">Option 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <br></br>
           <a className="mt-4" style={{color:'white'}}>Custome Link </a><br></br>
           <a className="mt-4" href="/">https://testnet.xyz.xyz/trade?ref=</a>

           <br></br>
            <FormControl 
              style={{ backgroundColor: '#242731' }}
              type="text"
              placeholder="Name"
              className="mt-4"
            />
            <div className="row mt-4">
              <div className="col-7">
              <Button><img src={process.env.PUBLIC_URL + '/Assets/img11.png'} />&nbsp;&nbsp; Custome Link</Button>
              </div>
              <div className="col-5">
              <Button variant="dark"><img src={process.env.PUBLIC_URL + '/Assets/img11.png'} />&nbsp;&nbsp;Cancle </Button>
              </div>
            </div>
            
            
          </Form>
    </div>
  );
};

export default RightsideDashboard;
