import React, { useRef } from 'react'
import Card from './Card'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import mypicture from '../assets/image.png'
import gamepicture from '../assets/block game.png'
import P2Ppicture from '../assets/filesharingimage .png'

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
        <div id="projects" className='bg-[oklch(var(--b2))] z-10' style={{ scrollMarginTop: '60px' }}>
            <h1 className="text-6xl font-bold text-center pt-10">My <span style={{ color: "oklch(var(--s))" }}>Projects</span></h1>
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
                    description={"A finance tracker application that allows users to easily log, categorize, and visualize their income and expenses over time."}
                    link={"https://github.com/sagarikagupta/Finance-Tracker"}
                    image={mypicture}
                />
                <Card
                    title={"Breakout Game"}
                    description={"A paddle-and-ball game where the player controls a paddle to prevent the ball from falling while breaking blocks to progress through levels."}
                    link={"https://github.com/sagarikagupta/brick-breaker-game"}
                    image={gamepicture}
                />
                <Card 
                    title={"Peer-to-Peer File Sharing System"}
                    description={"A Peer-to-Peer file-sharing system in Python for decentralized file sharing in chunks for users over a network."}
                    link={"https://github.com/sagarikagupta/Peer-to-peer-File-Sharing-System"}
                    image={P2Ppicture}
                />
            </Carousel>
        </div>
    )
}

export default Projects