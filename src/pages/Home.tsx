import ContactC from '@/components/contact/Contact'
import Footer from '@/components/Footer'
import AboutS from '@/components/home/AboutS'
import Banner from '@/components/home/Banner'
import Music from '@/components/home/Music'
import ProjectS from '@/components/home/ProjectS'
import ServiceS from '@/components/home/ServiceS'
import VideoS from '@/components/home/VideoS'
import Navbar from '@/components/Navbar'
import ReactFullpage from '@fullpage/react-fullpage'

export default function Home() {
    return (
        <>
            <Navbar />
            <ReactFullpage
                navigation
                credits={{
                    enabled: false
                }}
                touchSensitivity={5}
                scrollingSpeed={1000}
                render={({ fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <Banner route={fullpageApi} />
                            <AboutS />
                            <VideoS />
                            <ProjectS />
                            <ServiceS />
                            <Music />
                            <ContactC />
                            <Footer />
                        </ReactFullpage.Wrapper>
                    )
                }
                }
            />
        </>


    )
}
