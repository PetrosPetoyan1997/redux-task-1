import React from "react";

import "./Footer.scss";

const Footer = ()=>{
    return (
        <div className="footer">
            <div className="footer-body container">
                <div className="footer-left">
                    <div className="left-line">
                        Copyright © 2022 Audit Platform
                    </div>
                    <div>
                        All Rights Reserved
                    </div>
                </div>
                <div className="footer-right">
                    Developed by <span>MAYRO IT</span>
                </div>
            </div>
        </div>
    )
}
export default Footer;