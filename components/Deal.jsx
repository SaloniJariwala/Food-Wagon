import Image from "next/image";
import React from "react";
import { FlashDealsData } from "@/pages/api/FlashDeals";

const Deal = () => {
    return (
        <section className="deal_cards_section">
            <div className="container deals_section">
                {FlashDealsData?.map((item) => (
                    <div className="deal_card">
                        <div className="deal_image_section">
                            <Image src={item?.image} alt="deal" />
                            <div className="discount_tag">
                                <span className="offer_count">{item?.discount}</span>
                                <div className="discount_measure">
                                    <span>%</span>
                                    <span>off</span>
                                </div>
                            </div>
                        </div>
                        <div className="deal_description">
                            <p>Greys Vage</p>
                            <span>{item?.remainingDays} Days Remaining</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Deal;
