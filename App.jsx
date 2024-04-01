
import { useEffect, useState } from 'react'
import About from './About'
import './App.css'
import Navbar from './Navbar'
import Tv from './Tv'
import Watchlist from './Watchlist'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const [watchlist,setWatchlist]=useState([]);
  let addWatchlist=(tvObj)=>{
    let newWatchlist=[...watchlist,tvObj];
    localStorage.setItem('tvapp',JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  }
  useEffect(()=>{
    let storeinlocal=localStorage.getItem('tvapp');
    if(!storeinlocal){
      return '';
    }
    setWatchlist(JSON.parse(storeinlocal))
  },[]);
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Tv addWatchlist={addWatchlist}/>}></Route>
    <Route path='/Watchlist' element={<Watchlist watchlist={watchlist}/>}></Route>
    <Route path='/About' element={<About/>}></Route>

    </Routes>
    </BrowserRouter>
    
     </>
  )
}

export default App
