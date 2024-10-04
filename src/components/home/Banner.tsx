import { IoArrowDownOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import RoundBtn from '@/assets/artifacts/round_btn.png';
import { CiDesktopMouse2 } from "react-icons/ci";
import { fullpageApi } from "@fullpage/react-fullpage";
import { Link } from "react-router-dom";
import ShinyButton from "../ui/shiny-button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";



gsap.registerPlugin(useGSAP);

export default function Banner(props: { route: fullpageApi }) {
    useGSAP(() => {
        gsap.to('.latestNews', {
            translateY: 0,
            opacity: 1,
            delay: 1,
            duration: 0.7,
            stagger: 0.07,
            ease: 'power2.out'
        })
    }, [])


    return (
        <section className='banner px-5 md:px-10 lg:px-20 section'>
            <div className="space-y-4 md:space-y-4 overflow-y-hidden">
                <div className="latestNews opacity-0 translate-y-48">
                    <Link to={'/'}>
                        <ShinyButton className="bg-white/20 backdrop-blur inline-block rounded-xl py-2.5 px-6" >
                            <span>Read the Latest News from Creele Studios</span>
                            <IoArrowForwardCircleOutline className="text-xl md:text-2xl" />
                        </ShinyButton>
                    </Link>
                </div>
                <h1 className="latestNews opacity-0 translate-y-48">
                    Africa Stories, <br /> Global Pulse
                </h1>
                <p className='latestNews opacity-0 translate-y-48 lg:max-w-2xl max-w-xl mx-auto md:text-base text-sm text-pretty'>Creele is a family entertainment and trans-media production studio. Our mission is to magnificently portray the
                    creative brilliance of Africa through breathtaking storytelling of our rich heritage  using animated, interactive entertainment, sound and motion pictures</p>
            </div>
            <div className="absolute bottom-8 left-1/2 animate-bouncing">
                <button
                    onClick={() => props.route.moveSectionDown()}
                    className="relative bb flex items-center justify-center h-[90px] w-[90px] mouse group/mouse">
                    <img
                        src={RoundBtn}
                        alt="Button"
                        sizes="100%"
                        className="btn_designed"
                    />
                    <div className="mouse_down group-hover/mouse:scale-105">
                        <CiDesktopMouse2 className="text-xl" />
                        <IoArrowDownOutline className="md:text-xs text-[10px] mouse_arrow_down" />
                    </div>
                </button>
            </div>
        </section>
    )
}
