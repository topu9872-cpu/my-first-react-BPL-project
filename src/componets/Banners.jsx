import React from 'react';
import BannerImg from '../assets/banner-main.png';
const Banners = () => {
    return (
       <section className=' flex justify-center items-center'>
<div className='flex flex-col items-center gap-y-4 justify-center mx-auto rounded-2xl
 text-center bg-black  bg-[linear-gradient(160deg,red_20%,orange_40%,yellow_60%,green_80%)] 
 w-10/12 min-w-3xl py-10'>
<img src ={BannerImg} className='w-64' />

    <h1 className='text-2xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
    <p>Beyond Boundaries Beyond Limits</p>
    <button className='btn btn-warning w-fit mx-auto'>Claim Free Credit</button>
</div>
       </section>
       
       
    );
};

export default Banners;