import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Checkout = ({ onClick, disabled, loading }) => {
  return (
    <Button
      style={{width: '250px'}}
      onClick={onClick}
      disabled={disabled}
    >
    { loading ? (
      <span>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Please wait...
      </span>
      ) : 
      'Checkout'
    }
    </Button>
  );
};

export default Checkout;