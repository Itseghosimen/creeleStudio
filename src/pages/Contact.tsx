import Navbar from '@/components/Navbar'
import ReactFullpage from '@fullpage/react-fullpage'
import ContactC from '@/components/contact/Contact';
import Footer from '@/components/Footer';


export default function Contact() {
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
                render={() => {
                    return (
                        <ReactFullpage.Wrapper>
                            <ContactC page={true} />
                            <Footer />
                        </ReactFullpage.Wrapper>
                    )
                }
                }
            />
        </>

    )
}
