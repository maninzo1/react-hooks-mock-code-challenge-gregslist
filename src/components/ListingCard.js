import {useState} from "react";

function ListingCard({description, image, location}) {

const [star, setStar] = useState(false) 
// const [removeItem, setRemoveItem] = useState=(true)

function handleStarLike(){
  if (star === false) {
    setStar(true)
  }else{
    setStar(false)
  }
}


// function handleDeleteButton(){
//   if(removeItem === true){
//     setRemoveItem(false)
//   }else{
//     setRemoveItem(true)
//   }
// }



  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {/* {true ? ( */}
          <button onClick= {handleStarLike}> {star ? "★" : "☆"} </button>
        )
        <strong>{description}</strong>
        <span> · {location}</span>
        <button> 🗑 </button>
      </div>
    </li>
  );
        }

export default ListingCard;

//onClick={handleDeleteButton}> {removeItem ? null : (image)}