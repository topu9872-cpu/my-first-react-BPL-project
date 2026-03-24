import React from 'react';
import coin from '../assets/coin_432630.png'
const Navbar = () => {
    return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
<div className="indicator gap-4 mr-4 ">
    <ul className='flex gap-10 text-gray-500'>
        <li>Home</li>
        <li>Flxture</li>
        <li>Teams</li>
        <li>Schedules</li>
    </ul>
    
    
        <h3 className='font-bold'>0 coins</h3> <img src ={coin} />
  </div>
</div> 
    );
};

export default Navbar;