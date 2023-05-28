import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({id,pictureURL,title,price}) => {
   
  return (
    <div key={id}>
        <div className="card col-sm-2 mt-5" style={{width: '18 rem'}}>
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