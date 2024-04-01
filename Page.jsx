import React from 'react'

function Page({handlePrevious,handleNext,pageNo}) {
  return (
    <div>
        <div className="container2" style={{height:"50px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <button type="button" onClick={handlePrevious} className="btn btn-warning" style={{margin:"20px"}}>Previous</button>
        <p className="page" style={{margin:"20px"}}>{pageNo}</p>
        <button type="button" onClick={handleNext}  className="btn btn-warning" style={{margin:"20px"}}>Next</button>

        </div>
    </div>
  )
}

export default Page