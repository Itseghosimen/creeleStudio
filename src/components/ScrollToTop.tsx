import { fullpageApi } from "@fullpage/react-fullpage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props: { route: fullpageApi }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (props.route) {
            props.route.moveTo(1);
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;