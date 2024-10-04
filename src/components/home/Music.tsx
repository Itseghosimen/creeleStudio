
import { HeadingOverlay } from '../ui/HeadingOverlay';
import MusicCarousel from '../ui/MusicCarousel';
import MusisPick from '@/assets/images/music-pick.png';

export default function Music() {
    return (
        <section className='padding items-center music section'>
            <HeadingOverlay label='Our Music' />
            <div className="">
                <div className='relative z-10 text-center'>
                    <MusicCarousel />
                </div>
            </div>
            <img src={MusisPick} alt="Art" className='absolute w-40 md:w-96 left-0 bottom-0' />
        </section>
    )
}
