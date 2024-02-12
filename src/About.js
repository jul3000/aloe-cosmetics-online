import {useEffect, useRef} from "react";
import {gsap} from "gsap";

function About() {
    const oneRef = useRef(null);
    const twoRef = useRef(null);

  useEffect (() => {
    gsap.fromTo(oneRef.current, {opacity:0 }, {opacity: 1 , duration: 3, delay:1 })
    gsap.fromTo(twoRef.current, {opacity:0 }, {opacity: 1, duration:3, ease: "power2.inOut", x: 80, delay: 2})
  }, []) 
    
    return(<div className="about">
        <div className="background">
            <div className="background-container">
                <h2 ref={oneRef}>Best cosmetic quality made in Germany <img src="https://cdn.glitch.global/ac9d64dd-b114-43b4-925f-496de557b57e/German-flag.png?v=1704983703919" alt="German flag" width="60px"/> </h2>
                <p className="company-name" ref={twoRef}>by Sanct Bernhard</p>
            </div>    
        </div>

        <div>
            <h1>About Sanct Bernhard</h1>
            <p className="company-name">Tradition since 1903</p>
            <p>Since 1903, the name Sanct Bernhard has stood for high-quality, effective natural remedies, nutritional supplements and personal care products from our own production. Our long experience, qualified employees, state-of-the-art production processes and meticulous controls ensure that all our products meet the highest standards.</p>
            <p>Wherever possible and expedient, our raw materials are of vegetable or mineral origin. We use carefully selected, highly dosed botanical essences, essential oils and active ingredients from nature that give you what you need for natural health, beauty and well-being.</p>    
        </div> 
        
        <div className="about-pictures-container">
            <img className="about-picture" src="https://cdn.glitch.global/ac9d64dd-b114-43b4-925f-496de557b57e/Sanct%20Bernhard.jpg?v=1705056044742" alt="company" width="340px"/>
            <br/>
            <img className="about-picture" src="https://cdn.glitch.global/ac9d64dd-b114-43b4-925f-496de557b57e/garden.jpg?v=1705060547265" alt="company" width="340px"/>
            <br/>
            <img className="about-picture" src="https://cdn.glitch.global/ac9d64dd-b114-43b4-925f-496de557b57e/office%202.jpg?v=1705060569039" alt="company" width="340px"/>
        </div>
    </div>)
}

export default About;
