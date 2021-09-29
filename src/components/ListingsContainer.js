//import {useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({showListing, setShowListing}) {

// const [removeItem, setRemoveItem] = useState=(true)

// function handleDeleteButton(){
//   if(removeItem === true){
//     setRemoveItem(false)
//   }else{
//     setRemoveItem(true)
//   }
// }

  return (
    <main>
      <ul className="cards">
        {showListing.map(listing => <ListingCard key={listing.id} description= {listing.description} image={listing.image} location= {listing.location} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
