import React from 'react';
import coins from '../assets/coin_432630.png'
import image from '../assets/logo.png'
const Navbar = ({coin}) => {
    return (
      <div className="navbar bg-base-100 shadow-sm ">
  <div className="flex-1 container mx-auto">
   <img src ={image}></img>
  </div>
<div className="indicator gap-4 mr-4 ">
    <ul className='flex gap-10 text-gray-500'>
        <li>Home</li>
        <li>Flxture</li>
        <li>Teams</li>
        <li>Schedules</li>
    </ul>
    
    
        <h3 className='font-bold'>{coin}  coins</h3> <img src ={coins} />
  </div>
</div> 
    );
};

export default Navbar;