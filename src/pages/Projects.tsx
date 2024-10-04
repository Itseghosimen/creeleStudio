import Navbar from '@/components/Navbar'
import ReactFullpage from '@fullpage/react-fullpage'
import ProjectImage from '@/assets/images/project_image.png';
import OurProjects from '@/components/project/OurProjects';
import Footer from '@/components/Footer';


export default function Projects() {
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
                            {
                                ProjectContent.map((items, index) => {
                                    return (
                                        <section key={index} className='section pp-line our_projects'>
                                            <OurProjects
                                                type={items.type}
                                                heading={items.heading}
                                                content={items.content}
                                                projectUrl={items.projectUrl}
                                                image={items.image}
                                            />
                                        </section>
                                    )
                                })
                            }
                            <Footer />
                        </ReactFullpage.Wrapper>
                    )
                }
                }
            />
        </>

    )
}

const ProjectContent = [
    {
        type: '3D Short Film',
        heading: 'The satchel',
        content: 'A vigorous and compelling tale of African origin about two brothers fighting for the power to create a world using an all-powerful “Satchel”. A drama-filled, entertaining story sure to leave you at the edge of your screen! Taking you to the mystical lands of “The Satchel”',
        projectUrl: 'satchel',
        image: ProjectImage
    },
    {
        heading: 'SOPO',
        content: 'Lorem ipsum dolor sit amet consectetur. Pharetra nisl vel praesent sit. Nisl lectus pharetra ut venenatis in gravida. Sagittis pellentesque convallis quam scelerisque. Ut nisl adipiscing varius sed fames. Sagittis blandit turpis sit tincidunt nulla tellus enim sit. Consectetur egestas tortor fermentum blandit ',
        projectUrl: 'sopo',
        image: ProjectImage
    },
]