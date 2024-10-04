
import { motion } from "framer-motion"
import VideoPlayer from "../ui/VideoPlayer"

export default function VideoS() {
    return (
        <section className='flex-row padding text-center section video'>
            <div className="relative z-10">
                <div className="h-screen xl:pb-12 flex flex-col justify-center xl:justify-end items-center">
                    <motion.h3
                        initial={{
                            translateY: 100,
                            opacity: 0
                        }}
                        whileInView={{
                            translateY: 0,
                            opacity: 1
                        }}
                        transition={{
                            ease: 'linear',
                            duration: .5
                        }}
                    >
                        Spotlight on creele studios
                    </motion.h3>

                    <VideoPlayer />

                    <motion.p
                        initial={{
                            translateY: 10,
                            opacity: 0
                        }}
                        whileInView={{
                            translateY: 0,
                            opacity: 1
                        }}
                        transition={{
                            ease: 'easeInOut',
                            duration: .5,
                        }}
                        className='text-sm max-w-xs md:max-w-md md:text-base text-pretty mx-auto'>Channels Television Spotlight On Creele Studios Animated Film Based On Yoruba Mythology, ’The Satchel’ </motion.p>
                </div>
            </div>
        </section>
    )
}
