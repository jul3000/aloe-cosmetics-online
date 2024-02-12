import Carousel from 'react-bootstrap/Carousel';

function Carousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
      className="d-block w-100"
      src="https://cdn.glitch.global/ac9d64dd-b114-43b4-925f-496de557b57e/Sanct%20Bernhard.jpg?v=1705056044742" 
      text="First slide"         
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
      className="d-block w-100"
      src="https://cdn.glitch.global/ac9d64dd-b114-43b4-925f-496de557b57e/Sanct%20Bernhard.jpg?v=1705056044742" 
      text="First slide"         
        />        
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
      className="d-block w-100"
      src="https://cdn.glitch.global/ac9d64dd-b114-43b4-925f-496de557b57e/Sanct%20Bernhard.jpg?v=1705056044742" 
      text="First slide"         
        />        
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel;
