import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";
import Location from "@/assets/svg/Location.svg";
import Search from "@/assets/svg/Search.svg";
import User from "@/assets/svg/User.svg";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header_section">
                    <Link href="#" className="site_logo">
                        <Image src={Logo} alt="Logo" className="logo" />
                    </Link>
                    <div className="header_location">
                        <p>
                            <b>Deliver to:</b>
                            <span>
                                <Image src={Location} alt="Location" /> Current Location{"  "}
                                <b>Mohammadpur Bus Stand, Dhaka</b>
                            </span>
                        </p>
                    </div>
                    <div className="search_login_section">
                        <span className="header_search_section">
                            <Image src={Search} alt="search" /> <b>Search Food</b>
                        </span>
                        <button className="login_button">
                            <Image src={User} alt="User" />
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
