import { useEffect, useState } from "react";
import "./CelebSpotlight.css";

function CelebSpotlight() {

  const celebrities = [
    {
      name: "Celebrity 1",
      image: "https://www.charactr.in/cdn/shop/files/Iqlipse_Nova_Desktop.png?v=1784898211&width=2000"
    },
    {
      name: "Celebrity 2",
      image: "https://www.charactr.in/cdn/shop/files/Jitesh_Sharma_Desktop.png?v=1784898213&width=2000"
    },
    {
      name: "Celebrity 3",
      image: "https://www.charactr.in/cdn/shop/files/Gaurav_Khanna_Desktop.png?v=1784898212&width=2000"
    },
  ];

  const [currentCelebrity, setCurrentCelebrity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCelebrity((prev) =>
        prev === celebrities.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="celebritySpotlight">


      <div className="celebrityInfo">
        <h2>CELEBRITY SPOTLIGHT</h2>
      </div>

      <div className="celebrityImage">
        <img
          src={celebrities[currentCelebrity].image}
          alt={celebrities[currentCelebrity].name}
          key={currentCelebrity}
        />
      </div>

    </section>
  );
}

export default CelebSpotlight;