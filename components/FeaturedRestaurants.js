import { FeaturedRestaurantsData } from "@/pages/api/FeaturedRestaurants";
import Image from "next/image";
import React from "react";
import star from "@/assets/svg/star.svg";
import tag from "@/assets/svg/tag.svg";
import clock from "@/assets/svg/clock.svg";
import right_arrow from "@/assets/svg/right_arrow.svg";

const FeaturedRestaurants = () => {
    return (
        <section className="featured_restro_section">
            <div className="container">
                <h2>Featured Restaurants</h2>
                <div className="restaurant_list">
                    {FeaturedRestaurantsData?.map((item) => (
                        <>
                            <div className="restaurant_card" key={item?.id}>
                                <div className="restaurant_card_image">
                                    <Image src={item?.image} alt={item?.name} />
                                </div>
                                <div className="card_content">
                                    <Image src={item?.logo} alt={item?.name} height={15} width={40} />
                                    <div className="inner_content">
                                        <p>{item?.name}</p>
                                        <span>
                                            <Image src={star} alt="star" height={15} width={15} />
                                            <b>{item?.star}</b>
                                        </span>
                                    </div>
                                </div>
                                <div className="tag_Section">
                                    <div className="offer_tag">
                                        <Image src={tag} alt="tag" />
                                        &nbsp; {item?.offer}% off
                                    </div>
                                    <div className="fast_tag">
                                        <Image src={clock} alt="clock" />
                                        &nbsp; Fast
                                    </div>
                                </div>
                                <span className={item?.open === "Open Now" ? "open_now" : "open_tomorrow"}>
                                    {item?.open}
                                </span>
                            </div>
                        </>
                    ))}
                </div>
                <div className="view_all">
                    <a href="#" className="sec_btn">
                        View All <Image src={right_arrow} alt="arrow" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedRestaurants;
