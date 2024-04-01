import React, { useEffect, useState } from 'react'
import Tvcard from './Tvcard'
import axios from 'axios';
import Page from './Page';

function Tv({addWatchlist}) {
  const [pageNo,setPageNo]=useState(1);
  let handlePrevious=()=>{
    if(pageNo==1){
      setPageNo(1)
    }
    setPageNo(pageNo-1);
  }
  let handleNext=()=>{
    setPageNo(pageNo+1);
  }
    const [tv,setTv]=useState([]);
    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=d53c6ca01390c512b297e70feb3fe15f&include_adult=false&include_null_first_air_dates=false&language=en-US&page=${pageNo}&sort_by=popularity.desc`).then(function(res){
        console.log(res.data.results);
        setTv(res.data.results)
      })  
    },[pageNo])
  return (
    <div className="container my-4">
        <h1 style={{textAlign:"center"}}>Top TV Shows</h1>
        <div className='row'>
        {tv.map((tvObj)=>{
            return <div className='col-md-3'>
                <Tvcard tvObj={tvObj} key={tvObj.id} title={tvObj.name} rateing={tvObj.vote_average} date={tvObj.first_air_date} poster_path={tvObj.poster_path} addWatchlist={addWatchlist}/>
            </div>
        })}
        </div>
        <Page handlePrevious={handlePrevious} handleNext={handleNext} pageNo={pageNo}/>
       
        

    </div>
  )
}

export default Tv

//https://api.themoviedb.org/3/discover/tv?api_key=d53c6ca01390c512b297e70feb3fe15f&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc