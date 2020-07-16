import React from "react";

function Footer() {
    const dt = new Date();
    const currentYear = dt.getFullYear();

    return (
        <footer>
            <p>Copyright {currentYear}</p>
        </footer>
    );
}

export default Footer;