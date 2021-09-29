import {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
const [showListing, setShowListing] = useState([])


useEffect(() =>{
  fetch('http://localhost:6001/listings')
    .then (res => res.json())
    .then ((data) => setShowListing(data))
}, [])

  return (
    <div className="app">
      <Header />
      <ListingsContainer setShowListing={setShowListing} showListing={showListing} />
    </div>
  );
}

export default App;
