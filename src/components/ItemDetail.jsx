import React from 'react';
import ItemCount from './ItemCount';


const ItemDetail = ({id,pictureURL,title,description,stock}) => {
  return (
    <>
          <div key={id}className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={pictureURL} className="" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">{stock}</small></p>
                        <ItemCount inicial={1}stock={5}/>
                    </div>
                </div>
            </div>
          </div>

    </>
  )
}

export default ItemDetail