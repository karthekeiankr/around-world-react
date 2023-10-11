import React from 'react'
import './css/home.css'
import hero from './img/hero.png'
import { Link} from 'react-router-dom'

function Home() {
    return (
        <div class='body'>
            <nav class="flex-r container">
                <h1 class="nav-logo">Travel</h1>
                <div class="flex-r ham"></div>
                <div class="flex-c menu">
                    <Link to="/place">Explo</Link>
                </div>
            </nav>
            <main class="flex-r container">
                <div class="flex-c main-text">
                    <h1 class="lg-head">Never Stop to</h1>
                    <h2 class="m-head">Exploring... </h2>
                    <p class="para">
                        India, a land of glorious past and an extraordinary future. The air of India will swing you in each way
                        and make you a part of its soil, in some way or the other. India Tourism holds an odyssey of diverse
                        terrain that starts with snow-covered elevations to tropical delights, satisfies your soul with all the
                        twist, turns and swirls. We’re here to help you sort the best India tourist destinations. This is a gist
                        of what this humongous country has to offer, so get ready to fall in love with India all over again.
                        India is abundantly rich when it comes to culture and rooted traditions. With culture changing
                        tremendously in every state, it is a potpourri of customs, which in the end, are connected as one.
                    </p>
                    <Link to="/place"><button class="btn">Explore</button></Link>
                    <Link to="/contact"><button class="btn">Contact</button></Link>
                </div>

                <div class="flex-r main-img">
                    <img src={hero} alt="" />
                </div>
            </main>
        </div>

    )
}

export default Home