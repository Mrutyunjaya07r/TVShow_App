import React from 'react'

function Tvcard({title,rateing,date,poster_path,addWatchlist,tvObj}) {
  return (
    <div>
        <div className="card" style={{width: "14rem",height:"500px",margin:"15px"}}>
     <div className="image" style={{width:"13.8rem",height:"350px",backgroundImage:`url(https://image.tmdb.org/t/p/w500${poster_path})`}}></div>
     <div className="card-body">
      <div className="addwatchlist" onClick={()=>addWatchlist(tvObj)} style={{height:"30px",width:"30px",borderRadius:"1rem",cursor:"pointer"}}>&#128150;</div>
     <p className="card-text">{title}</p>
     <p className="card-text">IMDB: {rateing}</p>
     <p className="card-text">Relese-date:{date}</p>
     </div>
     </div>
    </div>
  )
}

export default Tvcard