import Image from "next/image";
import React from "react";
import Discount from "@/assets/images/discount.png";
import Tracing from "@/assets/images/tracing.png";
import Delivery from "@/assets/images/delivery.png";
import mobiles from "@/assets/images/mobiles.png";

const MobileSection = () => {
    return (
        <section className="mobile_section">
            <div className="container">
                <div className="info_card_section">
                    <div className="info_card_content">
                        <div className="info_box">
                            <Image src={Discount} alt="Daily Discount" />
                            <span>Daily Discounts</span>
                        </div>
                        <div className="info_box">
                            <Image src={Tracing} alt="Live Tracing" />
                            <span>Live Tracing</span>
                        </div>
                        <div className="info_box">
                            <Image src={Delivery} alt="Live Tracing" />
                            <span>Quick Delivery</span>
                        </div>
                    </div>
                    <div className="info_bottom_section">
                        <Image src={mobiles} alt="mobiles" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileSection;
