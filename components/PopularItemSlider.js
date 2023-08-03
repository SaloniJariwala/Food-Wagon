import { PopularItemsData } from "@/pages/api/PopularItems";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import location from "@/assets/svg/location.svg";

const PopularItemSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <section className="popular_items_section">
            <h2>Popular items</h2>
            <div className="container">
                <div className="popular_slider_list">
                    <Slider {...settings}>
                        {PopularItemsData?.map((item) => (
                            <div key={item?.id} className="popular_item">
                                <Image src={item?.image} alt={item?.title} />
                                <div className="popular_item_content">
                                    <span>{item?.title}</span>
                                    <div className="popular_item_location">
                                        <Image src={location} alt="location" height={10} width={10} />
                                        <span>{item?.location}</span>
                                    </div>
                                    <span>
                                        <b>{item?.price}</b>
                                    </span>
                                    <button type="button" className="order_btn">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default PopularItemSlider;
