import { useEffect, useState } from "react";
import "./App.css";
import ShopTitles from "./sub/ShopTitles";
import CelebSpotlight from "./sub/CelebSpotlight/CelebSpotlight";
import FeaturedLooks from "./sub/FeaturedLooks/FeaturedLooks";
import Footer from "./assets/components/Footer/Footer";


function App() {
  const ads = [
    {
      text: "Good morning! Check out our latest collection."
    },
    {
      text: "Flat 20% off on selected products."
    },
    {
      text: "Evening special — shop before midnight!"
    },
  ];

  const [currentAd, setCurrentAd] = useState(0);


  // Automatically update when the time changes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) =>
        prev === ads.length - 1 ? 0 : prev + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Previous ad
  const previousAd = () => {
    setCurrentAd((prev) =>
      prev === 0 ? ads.length - 1 : prev - 1
    );
  };

  // Next ad
  const nextAd = () => {
    setCurrentAd((prev) =>
      prev === ads.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="topAds">

        <button
          className="adArrow"
          onClick={previousAd}
        >
          ‹
        </button>

        <p>{ads[currentAd].text}</p>

        <button
          className="adArrow"
          onClick={nextAd}
        >
          ›
        </button>

      </div>

      {/* Your Navbar will go here */}



      <div className="Home_Hero">
        <picture>

          <source
            media="(max-width: 768px)"
            srcSet="https://www.charactr.in/cdn/shop/files/Website_banner_2.png?v=1784703870&width=1100"
          />

          <img
            src="https://www.charactr.in/cdn/shop/files/Website_Banner_Desktop.png?v=1784799743&width=2400"
            alt="Home Hero"
          />

        </picture>
      </div>


      <ShopTitles />

      < CelebSpotlight />

      < FeaturedLooks />

      <video
        className="homeVideo"
        src="https://www.charactr.in/cdn/shop/videos/c/vp/2ae721c1b4884cafa628901715e7fda7/2ae721c1b4884cafa628901715e7fda7.HD-1080p-7.2Mbps-91583708.mp4?v=0"
        autoPlay
        muted
        loop
        playsInline
      />

      < Footer />

    </>
  );
}

export default App;