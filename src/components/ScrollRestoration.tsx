import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
    const location = useLocation();
    const windowsY = String(window.scrollY)

    useEffect(() => {
        // Save scroll position before navigating away
        const saveScrollPosition = () => {
            sessionStorage.setItem("scrollPosition", windowsY);
        };

        window.addEventListener("beforeunload", saveScrollPosition);

        return () => {
            window.removeEventListener("beforeunload", saveScrollPosition);
        };
    }, []);

    useEffect(() => {
        // Restore scroll position if available
        const scrollPosition = sessionStorage.getItem("scrollPosition");
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition, 10));
        } else {
            window.scrollTo(0, 0); // Default to top of the page
        }
    }, [location]);

    return null;
};

export default ScrollRestoration;
