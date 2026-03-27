import React, { useState } from 'react';
import { FaFlag, FaUser } from "react-icons/fa";
import Image from "../../assets/logo.png";
import { toast } from 'react-toastify';
const AvalilablePlayers = ({data , setCoin , coin , setSelectedPlayers , selectedPlayers}) => {
const [isSelected, setIsSelected ] = useState([]);



const handleChoosePlayer = (player , index)=>  {
let newCoin = coin-player.price;
if(newCoin >= 0 ){
setCoin(coin - player.price);
}else{
  toast.warning('Not enough coin to purchase this player');
  return;
}


setIsSelected([... isSelected,index]);
toast.success(`${player.playerName} is Selected`)
 setSelectedPlayers([... selectedPlayers, player])
}


 return (
        <div className='grid gap-6 items-center md:grid-cols-2 lg:grid-cols-3'>
            {
  data.map((player , index)=>(
          <div key={index} coin={coin} className="card shadow-sm mt-10 gap-4 bg-white text-black ">
  <figure>
   
    <img className='rounded-2xl'
      src={Image} />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser/>{player.playerName}</h2>
    <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
        <FaFlag/>
        <p>{player.playerCountry}</p>
        </div>
        <button className="btn">{player.playerType}</button>
    </div>
     <div className="divider"></div>

<p className="font-bold">{player.rating}</p>
<div className='flex justify-between '>
    <p className='font-bold'>{player.battingType}</p>
    <p className='ml-60'>{player.bowlingType }</p>
</div>
    
    <div className="card-actions justify-between items-center">
        <p className="font-semibold">{player.price}
         
        </p>
      <button className="btn" onClick={() => handleChoosePlayer(player , index) }
        disabled={isSelected .includes(index)
         
        }
        > 
        
       { isSelected .includes(index)  ? "selected" : "Choose Player"}</button>
    </div>
  </div>
 
 
</div> 
  ))  
   }        </div>
    );
};
export default AvalilablePlayers;