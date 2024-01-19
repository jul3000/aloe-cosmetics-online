import { useEffect, useState, useRef } from "react";
import { data } from "./data";
import Products from "./Products";
import Buttons from "./Buttons";
import { gsap } from "gsap";

function Home() {

  const [products, setProducts] = useState(data);
  const oneRef = useRef(null);
  const twoRef = useRef(null);

  useEffect (() => {
    gsap.fromTo(oneRef.current, {opacity:0 }, {opacity: 1 , duration: 3, delay:1 })
    gsap.fromTo(twoRef.current, {opacity:0 }, {opacity: 1, duration:3, ease: "power2.inOut", x: 80, delay: 2})
  }, []) 

  const chosenProducts = (searchTerm) => {
    const newProducts = data.filter (element => element.searchTerm === searchTerm);
    setProducts(newProducts);
  }

  return (<div>
    <div className="background">
        <div className="background-container">
            <p className="back">Free shipping for orders over 40 euros</p>
            <h2 ref={oneRef}>Best cosmetic quality made in Germany <img src="https://cdn.glitch.global/ac9d64dd-b114-43b4-925f-496de557b57e/German-flag.png?v=1704983703919" alt="German flag" width="60px"/> </h2>
            <p className="company-name" ref={twoRef}>by Sanct Bernhard</p>
        </div>    
    </div>

      <Buttons filteredProducts = {chosenProducts} setProducts = {setProducts}/>
      <Products itemsForSale={products}/>
      </div>
  );
}

export default Home;
