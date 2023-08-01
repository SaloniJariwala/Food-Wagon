import { HowDoesWorkData } from "@/pages/api/HowDoesWork";
import Image from "next/image";
import React from "react";

const HowDoesWork = () => {
    return (
        <section className="work_wrapper">
            <div className="container work_inner_wrapper">
                <h2>How Does it work</h2>
                <div className="work_list">
                    {HowDoesWorkData?.map((item) => (
                        <div className="work_box">
                            <Image src={item?.image} alt={item?.title} />
                            <div className="work_box_content">
                                <h5>{item?.title}</h5>
                                <p>{item?.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>  
    );
};

export default HowDoesWork;
