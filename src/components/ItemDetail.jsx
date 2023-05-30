import React from 'react';
import ItemCount from './ItemCount';


const ItemDetail = ({id,pictureURL,title,description,price,stock}) => {
  return (
    <>
          <div key={id} className="card mb-2">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={pictureURL} className="card-img-top" alt="..."/>
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <h3 className="card-text">$ {price}</h3>
                        <p className="card-text"><small className="text-muted">stock: {stock}</small></p>
                        <ItemCount inicial={1}stock={5}/>
                    </div>
                </div>
            </div>
          </div>

    </>
  )
}

export default ItemDetail