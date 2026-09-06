import { useState } from "react";
import "./ShopTitles.css";

function ShopTitles() {

    const categories = [
        {
            name: "Denims",
            image: "https://i.pinimg.com/736x/ba/a2/b9/baa2b94d745623e494a9c3b4c9aa6dad.jpg"
        },
        {
            name: "T-Shirts",
            image: "https://i.pinimg.com/736x/68/e7/99/68e79913a2e1786822a14b83c105dde2.jpg"
        },
        {
            name: "New Launches",
            image: "https://i.pinimg.com/736x/91/f4/2a/91f42a775feeadf8fa047d36f02a2e24.jpg"
        },
        {
            name: "Shirts",
            image: "https://i.pinimg.com/736x/1a/81/12/1a8112a55105cf0a636eea0f16bee1d4.jpg"
        },
        {
            name: "Sweatpants",
            image: "https://i.pinimg.com/1200x/60/cf/97/60cf977efd16b98a66aa4bf1d9dd4933.jpg"
        },
        {
            name: "Charactr For Her",
            image: "https://i.pinimg.com/736x/6c/85/35/6c8535c2578ff34e0dea54b9dfb210aa.jpg"
        },
        {
            name: "Winter Wear",
            image: "https://i.pinimg.com/1200x/f4/9d/c6/f49dc6f0d83a81e3a1a1d5089d3237bb.jpg"
        }
    ];

    const [activeCategory, setActiveCategory] = useState(0);

    return (
        <div className="shopCategory">

            <div className="categoryHeader">
                <h2>SHOP BY CATEGORY</h2>
                <span>View all →</span>
            </div>


            <div className="block">

                <div className="categoryList">


                    {categories.map((category, index) => (
                        <div
                            className={`categoryItem ${activeCategory === index ? "active" : ""
                                }`}
                            key={category.name}
                            onMouseEnter={() => setActiveCategory(index)}
                        >
                            <span>{category.name}</span>
                            <span className="categoryArrow">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </span>
                        </div>
                    ))}

                </div>


                <div className="categoryImage">

                    <img
                        src={categories[activeCategory].image}
                        alt={categories[activeCategory].name}
                    />

                    <h2>{categories[activeCategory].name}</h2>

                </div>

            </div>

        </div>
    );
}

export default ShopTitles;