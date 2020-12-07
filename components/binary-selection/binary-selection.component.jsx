import React from 'react';
import { Button } from 'react-bootstrap';

import { Selection } from './binary-selection.styles';

const BinarySelection = ({ title, titleSize, options}) => {
  return (
    <Selection className='p-4'>
      <h1 className={titleSize}>{title}</h1>
      {
        options.map((data, id) => {
          const { text, color, onClick } = data;
          return (
            <div key={text+id}>
              <Button
                variant={color}
                onClick={onClick}
                style={{width: '250px'}}
                className="m-2"
              >
                {text}
              </Button>
            </div>
          );
        })
      }
    </Selection>
  );
};

export default BinarySelection;