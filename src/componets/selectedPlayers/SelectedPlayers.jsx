import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Image from '../../assets/logo.png'
const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers,coin , setCoin }) => {

const handleDeletePlayer =(player)=>{
const filteredPlayers = selectedPlayers.filter(selectedPlayer => 
    selectedPlayer.playerName !== player.playerName
)
setSelectedPlayers(filteredPlayers);
setCoin(coin + player.price)
}

    return (
        <div className="space-y-5">
            {
               
             selectedPlayers.length ===0 ?
             <div className='flex justify-center items-center flex-col'>
                <h2 className='text-2xl font-semibold'>No players Selected Yet</h2>
                <p>Go to Avalible tab to select players</p>
             </div>
             :   selectedPlayers.map((player, ind) => (
                    <div key={ind} className='flex items-center justify-between p-6 rounded-2xl border mb-4 shadow-sm bg-white'>
                        <div className='flex items-center gap-6'>
                            <div className="w-20 h-20">
                                <img 
                                    className='w-full h-full object-cover rounded-xl' 
                                    src={Image} 
                                    alt={player.playerName} 
                                />
                            </div>
                            <div>
                                <h2 className='text-xl font-bold'><FaUser></FaUser>{player.playerName}</h2>
                                <p className='text-gray-500 font-semibold'>{player.playerType}</p>
                                <p className='text-sm text-gray-400'>Price: ${player.price}</p>
                            </div>
                        </div>

                        {/* ডিলিট বাটন */}
                        <button className='text-red-500 text-3xl hover:scale-110 transition'
                        onClick={()=>handleDeletePlayer(player)}>
                            <MdDelete />
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default SelectedPlayers;