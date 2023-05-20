import React from 'react'

const Item = ({menu}) => {
   
  return (
    <>
    {menu.map((curr) =>{
 const [id,image,name,category,price,description] = curr;
        return(
            <div className="card-container" key={id}>
            <div className="card ">
              <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author subtle"> {category}</span>
                <h2 className="card-title"> {name} </h2>
                <span className="card-description subtle">
                  {description}
                </span>
                <div className="card-read">Read</div>
              </div>


              <span className="card-tag  subtle">Order Now</span>
            </div>
          </div> 
        );
    }

    )}
       
    </>
  )
}

export default Item;
// /*<img src={image} alt="images" className="card-media" />*/