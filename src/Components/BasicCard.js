import React from "react";

import UserCard from "./Cards/UserCard";
import CardFrist from "./Cards/CardFrist";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "./Table";

const BasicCard = () => {
  return (
    <div className="p-0">
      <CardFrist />
      <Card className="mt-1" style={{ backgroundColor: "#ABE8FF", color: "black" }} rounded>
        <Card.Body>
          <Card.Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Card.Text>
          <Button
            variant="primary"
            style={{ backgroundColor: "white", color: "black" }}
          >
            Tutorial
          </Button>
        </Card.Body>
      </Card>
      <Card className="mt-1" style={{ backgroundColor: "#191B20" }}>
        <Card.Body>
          <div className="d-flex align-items-center">
            <div className="me-3">
              <p style={{ color: "White" }}>Your rewards</p>
              <h5 style={{ color: "White" }}>$ 0.26231428</h5>
              <div className="d-flex">
                <Button variant="dark" className="me-2">
                 $40 AVAX
                </Button>
                <Button variant="dark" className="me-2">
                 $10 BNB
                </Button>
                <Button variant="dark" className="me-2">
                 $210 BTC
                </Button>
              </div>
            </div>
            <div className="ms-auto">
              <Button variant="primary"><img src={process.env.PUBLIC_URL + '/Assets/img11.png'} />&nbsp;&nbsp;Custome Link</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      <div className="row mt-2" style={{backgroundColor:'#000000'}}>
        <div className="col-6">
          <UserCard />
        </div>
        <div className="col-6">
          <UserCard />
        </div>
        <div className="col-12"><Table/></div>
      </div>
      {/* <Table/> */}
    </div>
  );
};

export default BasicCard;
