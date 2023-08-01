import React, { useState } from "react";
import Background from "@/assets/images/hero.png";
import HeroImage from "@/assets/images/hero_image.png";
import Image from "next/image";
import Delivery from "./svg/Delivery";
import Pickup from "./svg/Pickup";
import Location from "@/assets/svg/Location.svg";
import search from "@/assets/svg/search-white.svg";

const Hero = () => {
    const [option, setOption] = useState("delivery");

    return (
        <>
            <section className="hero_section" style={{ backgroundImage: `url(${Background.src})` }}>
                <div className="container">
                    <div className="banner_content_section">
                        <div className="banner_content">
                            <h1>Are you starving?</h1>
                            <p>Within a few clicks, find meals that are accessible near you</p>
                        </div>
                        <div className="order_card">
                            <div className="delivery_options">
                                <span
                                    className={`order_option ${option === "delivery" ? "active_option" : ""}`}
                                    h
                                    onClick={() => setOption("delivery")}>
                                    <Delivery color={option === "delivery" ? "#F17228" : "#757575"} />{" "}
                                    Delivery
                                </span>
                                <span
                                    className={`order_option ${option === "pickup" ? "active_option" : ""}`}
                                    onClick={() => setOption("pickup")}>
                                    <Pickup color={option === "pickup" ? "#F17228" : "#757575"} /> Pickup
                                </span>
                            </div>
                            <hr />
                            <form className="order_form">
                                <div className="input_location">
                                    <input type="text" placeholder="Enter Your Address" />
                                    <Image src={Location} alt="location" className="location_img" />
                                </div>
                                <button type="submit" className="order_form_submit">
                                    <Image src={search} alt="search" height={15} width={15} /> Find Food
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="banner_image">
                        <Image src={HeroImage} alt="hero_image" width={600} height={500} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
