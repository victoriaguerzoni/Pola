import React from 'react';

const Item = ({id,pictureURL,title,price}) => {
   
  return (
    <div key={id}>
        <div className="card">
            <img src={pictureURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
                <a href="#" className="btn btn-primary">Ver detalle</a>
            </div>
        </div>
    </div>
  )
}

export default Item