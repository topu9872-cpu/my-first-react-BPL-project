import React, { use } from 'react';
import AvalilablePlayers from '../AvailablePlayers/AvalilablePlayers';

const Players = ({playersPromise}) => {
    const data = use(playersPromise);
  
    return (
        <div className='container mx-auto grid grid-rows-3'>
           <AvalilablePlayers data={data}></AvalilablePlayers> 
        </div>
    );
};

export default Players;