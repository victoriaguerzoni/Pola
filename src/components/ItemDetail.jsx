import React from 'react'


const ItemDetail = () => {
  return (
    <>
          <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <ItemCount stock={5}/>
                    </div>
                </div>
            </div>
          </div>

    </>
  )
}

export default ItemDetail