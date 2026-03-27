import React, { use } from 'react';
import AvalilablePlayers from '../AvailablePlayers/AvalilablePlayers';
import { useState } from 'react';
import SelectedPlayers from '../selectedPlayers/SelectedPlayers'
const Players = ({playersPromise , setCoin , coin }) => {
    const data = use(playersPromise);
    

const [selectedType , setSelected] = useState("available");
   
  const [selectedPlayers , setSelectedPlayers] = useState([])
    return (
       <>
      
          <div className="flex justify-between mt-10 mx-26">
    { selectedType === 'available' ? (<h1 className='text-2xl font-bold'>Available Players</h1>) 
    : ( <h1 className='text-2xl font-bold'>Selected Players(2/6)</h1> )}
    <div>
      <button 
      onClick={() => setSelected('available')}
      className={`btn ${ selectedType === 'available' ? 'bg-[#E7FE29]' : 'bg-gray-300'} text-black rounded-r-none rounded-l-xl`}>Available</button>
      <button
        onClick={() => setSelected('seleceted')}
      className={`btn ${ selectedType === 'available' ? 'bg-gray-300' : 'bg-[#E7FE29]' } text-black rounded-l-none rounded-r-xl`}>Seleceted (0)</button>
      </div> 
  </div>;

 <div className='container mx-auto grid grid-rows-3'>
   { selectedType === 'available' 
   ? (<AvalilablePlayers data={data} setCoin={setCoin}
     coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></AvalilablePlayers>)
   :<SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers> } 
 </div>

</>
    );
};

export default Players;