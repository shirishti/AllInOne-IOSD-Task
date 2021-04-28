import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__banner">
        <img src="./images/b11.jpg"></img>
      </div>
      <div className="home__row">
        <Product
          id="1234123"
          title="boAt Bassheads 900 On Ear Wired Headphones(Carbon Black)"
          price={8}
          rating={5}
          image="./images/P2.png"
        />

        <Product
          id="1234326"
          title="Camlin Kokuyo 4426318 Triangular Plastic Crayons with Sharpner and Eraser, 26 Shades (Multicolor)"
          price={2.14}
          rating={5}
          image="./images/P1.jpg"
        />
      
      </div>

      <div className="home__row">
      <Product
             id="1230986"
             title="The Monk Who Sold His Ferrari"
             price={2.04}
             rating={4}
             image="./images/book1.webp"
         />
         <Product
             id="9872345"
             title="The Blue Umbrella"
             price={1.27}
             rating={3}
             image="./images/book2.webp"
         />
         <Product
             id="9992229"
             title="The Theory of Everything: The Origin and Fate of the Universe"
             price={2.97}
             rating={3}
             image="./images/book3.webp"
         />
      </div>

      <div className="home__row">
      <Product
             id="019282"
             title="AmazonBasics 109cm (43 inches) Fire TV Edition 4K Ultra HD Smart LED TV AB43U20PS (Black)"
             price={387.32}
             rating={4}
             image="./images/P7.png"
         />
      </div>
    </div>
  );
}

export default Home;
