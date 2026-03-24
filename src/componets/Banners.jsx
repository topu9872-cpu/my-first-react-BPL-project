import React from 'react';
import BannerImg from '../assets/banner-main.png';
const Banners = () => {
    return (
       <section className=' flex justify-center items-center mt-10'>
<div className='flex flex-col items-center gap-y-4 justify-center mx-auto rounded-2xl
 text-center bg-black  bg-[linear-gradient(160deg,red_20%,orange_40%,yellow_60%,green_80%)] 
 w-10/12 min-w-3xl py-10'>
<img src ={BannerImg} className='w-64' />

    <h1 className='text-2xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
    <p className='font-bold'>Beyond Boundaries Beyond Limits</p>
    <button className='btn btn-warning w-fit mx-auto font-bold'>Claim Free Credit</button>
</div>
       </section>
       
       
    );
};

export default Banners;