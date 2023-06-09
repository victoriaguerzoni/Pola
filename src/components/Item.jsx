import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({id,pictureURL,title,price}) => {
   
  return (
    <div key={id}>
        <div className="card alinearCards mt-3">
            <img src={pictureURL} className="card-img-top ImgCardRender" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
                <Link to={`/item/${id}`} className="btn btn-primary"style={{display:"flex",justifyContent:"center"}}>Ver detalle</Link>
            </div>
        </div>
    </div>
  )
}

export default Item