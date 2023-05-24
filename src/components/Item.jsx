import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({id,pictureURL,title,price}) => {
   
  return (
    <div key={id}>
        <div style={{display:'flex', flexwrap:'wrap', width: '16rem' }} className="card justify-content-md-center">
            <img src={pictureURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
                <Link to={`/item/${id}`} className="btn btn-primary">Ver detalle</Link>
            </div>
        </div>
    </div>
  )
}

export default Item