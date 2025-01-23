import React, { useState } from "react";
import ArrowUp from '../Typography/ArrowUp'

const Index = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    window && window?.addEventListener("scroll", toggleVisible);

    return (
        <div className="scroll-top-container">
            <ArrowUp
                onClick={scrollToTop}
                style={{ display: visible ? "inline" : "none" }}
            />
        </div>
    );
};

export default Index;