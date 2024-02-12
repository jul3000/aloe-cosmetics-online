import { useEffect, useState, useRef } from "react";
import { data } from "./data";
import Products from "./Products";
import Buttons from "./Buttons";
import { gsap } from "gsap";

function Home() {

  const [products, setProducts] = useState(data);

  const chosenProducts = (searchTerm) => {
    const newProducts = data.filter (element => element.searchTerm === searchTerm);
    setProducts(newProducts);
  }

  return (<div>
      <Buttons filteredProducts = {chosenProducts} setProducts = {setProducts}/>
      <Products itemsForSale={products}/>
      </div>
  );
}

export default Home;
