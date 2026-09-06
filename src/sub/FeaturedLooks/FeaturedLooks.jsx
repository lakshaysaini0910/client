import "./FeaturedLooks.css";

function FeaturedLooks() {
  const looks = [
    {
      image: "https://i.pinimg.com/736x/6c/85/35/6c8535c2578ff34e0dea54b9dfb210aa.jpg",
    },
    {
      image: "https://www.zapdress.com/cdn/shop/files/BFW9_V_2_I47_9TK_FW3WU_11ed44d3-5c12-46ca-bb4c-93e50008e4ee.png?v=1772547272&width=1200",
    },
    {
      image: "https://i.pinimg.com/736x/a6/51/eb/a651eb8b0c4c7d5f7c935e9fd8455e6e.jpg",
    },
    {
      image: "https://i.pinimg.com/1200x/87/28/78/8728782a218cb86b9548c8b165db917a.jpg",
    },
    {
      image: "https://i.pinimg.com/736x/b8/67/d9/b867d9524a17cbbec2de2f3ac4576e39.jpg",
    },
    {
      image: "https://i.pinimg.com/736x/1e/3e/06/1e3e066f523167cb837a9fabd000ffbc.jpg",
    },
    {
      image: "https://i.pinimg.com/736x/d0/8d/28/d08d28ed97d6cf03e213dcdb4c4682c5.jpg",
    },
    {
      image: "https://i.pinimg.com/736x/85/b3/c7/85b3c7554d03a09f6e79ef2d47c2f43d.jpg",
    },
    {
      image: "https://i.pinimg.com/736x/cd/69/d1/cd69d174e5342474806547ca4e1efabc.jpg",
    },
    {
      image: "https://i.pinimg.com/736x/32/69/75/326975e28ed6b34323311160860df44a.jpg",
    },
    {
      image: "https://i.pinimg.com/1200x/91/e4/c1/91e4c16e0f7406788857f9587f151444.jpg",
    },
    {
      image: "https://i.pinimg.com/736x/05/5a/ee/055aeedc74275dc96e18f1436c4b643f.jpg",
    },
    {
      image: "https://i.pinimg.com/736x/fa/2d/62/fa2d62da5ddb1e10a2ac6446183b0ac9.jpg",
    },
    {
      image: "https://i.pinimg.com/736x/76/93/d1/7693d128269ca21ae7a2578eb684d451.jpg",
    },
    {
      image: "https://i.pinimg.com/736x/90/ac/c5/90acc58054f3ae5760357dd0208e6def.jpg",
    },
    {
      image: "https://i.pinimg.com/236x/45/31/80/453180d4a3f96f39f5b08733caa401f6.jpg",
    },
    {
      image: "https://i.pinimg.com/1200x/e6/2d/9f/e62d9f42842b9c6a02494958bf66d36e.jpg",
    },
    
  ];

  return (
    <section className="featuredLooks">

      <div className="featuredLooksHeading">
        <p>COMMUNITY</p>
        <h2>FEATURED LOOKS</h2>
      </div>

      <div className="looksContainer">
        {looks.map((look, index) => (
          <div className="lookImage" key={index}>
            <img
              src={look.image}
              alt={`Featured look ${index + 1}`}
            />
          </div>
        ))}
      </div>

    </section>
  );
}

export default FeaturedLooks;