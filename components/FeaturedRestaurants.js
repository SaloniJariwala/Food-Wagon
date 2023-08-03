import { FeaturedRestaurantsData } from "@/pages/api/FeaturedRestaurants";
import Image from "next/image";
import React from "react";
import star from "@/assets/svg/star.svg";

const FeaturedRestaurants = () => {
    return (
        <section className="featured_restro_section">
            <h2>Featured Restaurants</h2>
            <div className="container">
                <div className="restaurant_list">
                    {FeaturedRestaurantsData?.map((item) => (
                        <div className="restaurant_card" key={item?.id}>
                            <Image src={item?.image} alt={item?.name} />
                            <div className="card_content">
                                <Image src={item?.logo} alt={item?.name} />
                                <div className="inner_content">
                                    <p>{item?.name}</p>
                                    <span>
                                        <Image src={star} alt="star" height={15} width={15} />
                                        <b>{item?.star}</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedRestaurants;
