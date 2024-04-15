import React from "react";
import "./Footer.css";
import {Typography} from "antd";

function Footer(){
    return(
        <div className="footer">
            <Typography.Link href="tel:+123456789">+123456789</Typography.Link>
            <Typography.Link href="https://www.google.com/" target={"_blank"}>Terms and Conditions</Typography.Link>
            <Typography.Link href="https://www.google.com/" target={"_blank"}>Privacy Policy</Typography.Link>
        </div>
    )
}

export default Footer;