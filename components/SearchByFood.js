import Image from "next/image";
import React from "react";
import rightArrow from "@/assets/svg/yellow_arrow.svg";
import rounded_right from "@/assets/svg/rounded_right.svg";
import rounded_left from "@/assets/svg/rounded_left.svg";
import Slider from "react-slick";
import food1 from "@/assets/images/food1.png";
import food2 from "@/assets/images/food2.png";
import food3 from "@/assets/images/food3.png";
import food4 from "@/assets/images/food4.png";
import food5 from "@/assets/images/food5.png";
import food6 from "@/assets/images/food6.png";

const SearchByFood = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        arrows: false,
    };

    return (
        <section className="search_by_food_Section">
            <div className="container">
                <div className="search_food_section_header">
                    <h2>Search By Food</h2>
                    <div className="right_section">
                        <span>
                            View All <Image src={rightArrow} alt="right" />
                        </span>
                    </div>
                </div>
                <div className="list_section">
                    <Slider {...settings}>
                        <div className="item_card">
                            <Image src={food1} alt="food1" />
                            <p>Pizza</p>
                        </div>
                        <div className="item_card">
                            <Image src={food2} alt="food1" />
                            <p>Burger</p>
                        </div>
                        <div className="item_card">
                            <Image src={food3} alt="food1" />
                            <p>Noodles</p>
                        </div>
                        <div className="item_card">
                            <Image src={food4} alt="food1" />
                            <p>Sub-sandwich</p>
                        </div>
                        <div className="item_card">
                            <Image src={food5} alt="food1" />
                            <p>Chowmein</p>
                        </div>
                        <div className="item_card">
                            <Image src={food6} alt="food1" />
                            <p>steak</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default SearchByFood;
