import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
  return (

    <div className='home'>

      <div className="home__container">

        <img className="home__image" src="https://www.finplus.co.in/wp-content/uploads/2017/05/Sell-products-online-why-should-I-start-selling-online.jpg" alt="" />

        <div className="home__row">

          <Product id="100" title="Pyle PDMIKT100" desc="USB Microphone Podcast Recording Kit for Gaming PS4, Streaming, Podcasting, Studio, Youtube, Works w/ Windows Mac PC" price={5199.95} image="https://images-na.ssl-images-amazon.com/images/I/61Xt7I5ByFL._AC_SL1000_.jpg" rating={5} />

          <Product id="123" title="The Lean startup" desc="How Today's Entrepreneurs Create Successful Businesses by Eric Ries" price={1099} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={3} />

          <Product id="154" title="Zara Summer Clothing" desc="Newborn Baby Clothes Set | Ribbed Outfits Unisex Infant | Solid Cotton Button Short Sleeve Tops Shorts 2PCS" price={799} image="https://images-na.ssl-images-amazon.com/images/I/71B%2B064fS0L._AC_UX522_.jpg" rating={4} />

        </div>

        <div className="home__row">

          <Product id="976" title="Sony X80J 65 Inch TV" desc="4K Ultra HD LED Smart Google TV with Dolby Vision HDR and Alexa Compatibility KD65X80J- 2021 Model" price={98999} image="https://images-na.ssl-images-amazon.com/images/I/91RfzivKmwL._AC_SL1500_.jpg" rating={4} />

          <Product id="365" title="Pigeon By Stovekraft Mio Aluminium Gift Set" desc=" Material: Aluminium | Included components: 1 Tawa, 1 Fry Pan, 4 Kitchen Tool Set, Kadai With Glass Lid | Colour: Red | Warranty: 1 Year | Coating type: Non-Stick | 5 Layer Coating" price={1249} image="https://images-na.ssl-images-amazon.com/images/I/517nDmj1i8L._SL1000_.jpg" rating={4} />

        </div>

        <div className="home__row">

          <Product id="208" title="Skybags Luggage Set" desc="Premium push button Trolley, Retractable top and side handles | Number Lock, Spacious Compartment | 1 Large zippered pocket better organization, 4 Wheels | Extra spacious fully loaded 4 W strolly | Polycarbonate" price={10614} image="https://images-na.ssl-images-amazon.com/images/I/81ymqA1D9lS._SL1500_.jpg" rating={4} />

          <Product id="187" title="Lifestyle Sofa Set" desc="Faux leather right sectional sofa set with storage ottoman and 2 square pillows | Sectional sofa overall dimension: 105 x 76 x 33 | Storage dimension: 35 x 24 x 16" price={23499} image="https://images-na.ssl-images-amazon.com/images/I/81qMA6hTp7L._AC_SL1500_.jpg" rating={5} />

        </div>
      </div>
    </div>
  )
}

export default Home;
