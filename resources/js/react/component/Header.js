import React from 'react';

import Biocard from './Biocard.js'; 
import ActionButton from './ActionButton.js';
import ColorGrid from './ColorGrid.js';  

export default function Header(props)
{
  
    return (
        <div className="mt-5">
            <Biocard />
            <ActionButton />
            <ColorGrid />
        </div>
    );
}