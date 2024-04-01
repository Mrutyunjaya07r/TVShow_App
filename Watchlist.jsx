import React from 'react'

function Watchlist({watchlist}) {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Watchlist</h1>

      <table>
        <thead>
          <tr>
            <th>Poster</th>
            <th>Name of Show</th>
            <th>Story</th>
            <th>IMDB-Rateing</th>
            <th>Date of Release</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.map((tvObj)=>{
            return <tr>
            <div className="photo2" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${tvObj.poster_path})`,height:"150px",width:"100px",backgroundSize:"cover",backgroundPosition:"center",border:"2px solid white",borderRadius:"1rem"}}></div>
            <td>{tvObj.name}</td>
            <td>{tvObj.overview}</td>
            <td>{tvObj.vote_average}</td>
            <td>{tvObj.first_air_date}</td>
          </tr>
          })}
          
        </tbody>
      </table>
    </div>
  )
}

export default Watchlist