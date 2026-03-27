
import { Suspense, useState } from 'react';
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

const [coin , setCoin] = useState(10000000);


  return (
    <>

<Navbar coin={coin}></Navbar >
<Banners></Banners>

<Suspense fallback={<span className="loading loading-spinner loading-xl text-white flex mx-auto mt-4"></span>}>
  <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
</Suspense>
    </>
  )
}

export default App
