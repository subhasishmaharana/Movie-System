import React from "react";

const MovieItem=props=>{
    const {movie,url,name,ranking,handleRemove}=props
    return (
        <div className='col-md-6'>
            <div className="card text-white bg-secondary mb-3">
                <div className="card-body">
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={url} width='120px' alt={name} height='150px'/>
                        </div>
                        <div className='col-md-6' style={{height: '10rem'}}>
                            <h5 className="card-title">Name : {name} </h5>
                            <p className="card-text">Ranking : {ranking}</p>
                            <button type="button" className="btn btn-danger" onClick={()=>{
                                handleRemove(movie)
                            }}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieItem