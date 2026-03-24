
import { Suspense } from 'react';
import './App.css'
import Banners from './componets/Banners';

import Navbar from './componets/Navbar';
import Players from './componets/players/Players';


const feachPlayer = async()=>{
  const res = await fetch("/public/Data.json");
   return res.json();
}


function App() {
  const playersPromise = feachPlayer();

  return (
    <>

<Navbar></Navbar>
<Banners></Banners>
<Suspense fallback={<span className="loading loading-spinner loading-xl text-white flex mx-auto mt-4"></span>}>
  <Players playersPromise={playersPromise}></Players>
</Suspense>
    </>
  )
}

export default App
