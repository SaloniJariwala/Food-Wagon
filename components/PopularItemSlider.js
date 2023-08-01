import { PopularItemsData } from "@/pages/api/PopularItems";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularItemSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <section className="popular_items_section">
            <h2>Popular items</h2>
            <Slider {...settings}>
                {PopularItemsData?.map((item) => (
                    <div key={item?.id} className="popular_item">
                        <Image src={item?.image} alt={item?.title} />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default PopularItemSlider;
