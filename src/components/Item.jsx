import React from 'react';

const Item = ({item}) => {
   
  return (
    <div>
        <div class="card" style="width: 18rem;">
            <img src={item.pictureURL} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">${item.price}</p>
                <a href="#" class="btn btn-primary">Ver detalle</a>
            </div>
        </div>
    </div>
  )
}

export default Item