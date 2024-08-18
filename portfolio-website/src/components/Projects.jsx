import React, {useRef} from 'react'
import Card from './Card'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import mypicture from '../assets/picture.jpg'

const Projects = () => {

    const paragraphRef = useRef(null)

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div id="projects" className='bg-gradient-to-r from-gray-800 to-gray-800' style={{ scrollMarginTop: '60px' }}>
            <h1 className="text-4xl font-bold text-center text-black pt-10">Projects</h1>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={true}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className="h-[650px]"
            >
                <Card
                    title={"Personal Finance Tracker"}
                    description={"Need a description for this"}
                    link={"https://github.com/sagarikagupta/Finance-Tracker"}
                    image={mypicture}
                />
                <Card
                    title={"Testing 2"}
                    description={"Testing description"}
                    link={"https://www.youtube.com"}
                />
                <Card />
                <Card />
                <Card />
            </Carousel>
        </div>
    )
}

export default Projects