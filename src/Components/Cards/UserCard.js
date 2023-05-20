import React, { useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import { BsCopy } from 'react-icons/bs';

const CopyCard = () => {
  const linkRef = useRef(null);

  const handleCopyClick = () => {
    linkRef.current.select();
    document.execCommand('copy');
    // You can display a success message or perform any other action after copying
    console.log('Link copied!');
  };

  return (
    <Card style={{ backgroundColor: '#191B20' }}>
      <Card.Body>
        <div style={{ color: '#FFFFFF' }}>
        <h5 style={{ color: '#FFFFFF' }}><img src={process.env.PUBLIC_URL + '/Assets/img19.png'} />&nbsp;&nbsp;12.5% of fee</h5>
          <p>Your Referral Link for xyz</p>
        </div>
        <div className="mt-3">
          <div className="d-flex align-items-center">
            <div className="flex-grow-1 border rounded p-2">
              <input type="text" variant="dark" value="https://example.com"  />
            </div>
            <div className="ms-2">
              <Button variant="Dark" onClick={handleCopyClick}>
              <img src={process.env.PUBLIC_URL + '/Assets/img20.png'} />
              </Button>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CopyCard;
