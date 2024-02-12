import { useState } from "react";
import { data } from "./data";
import Products from "./Products";
import Buttons from "./Buttons";

function Home() {
  const [products, setProducts] = useState(data);

  const chosenProducts = (searchTerm) => {
    const newProducts = data.filter (element => element.searchTerm === searchTerm);
    setProducts(newProducts);
  }

  return (<div>
      <p className="back">Free shipping for orders over 40 euros</p>
      <Buttons filteredProducts = {chosenProducts} setProducts = {setProducts}/>
      <Products itemsForSale={products}/>
      </div>
  );
}

export default Home;
