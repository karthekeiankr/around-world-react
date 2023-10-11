import React from "react";

import i1 from './img/img-1.jpg'
import i2 from './img/img-2.jpg'
import i3 from './img/img-3.jpg'
import i4 from './img/img-4.jpg'
import i5 from './img/img-5.jpg'
import i6 from './img/img-6.jpg'
import './css/places.css'
function Places() {
    return (
        <div class="places">
            <section class="packages" id="packages">

                <h1 class="heading">popular packages</h1>

                <div class="box-container">

                    <div class="box">
                        <div class="image">
                            <img src={i1} alt=" " />
                        </div>
                        <div class="content">
                            <h3>Manali Package</h3>
                            <p>Kullu Manali Shimla has always been a very popular destination for the old, young travelers as well as newly married couples who look for cheapest Manali tour packages & Manali Honeymoon Packages to experience the perfect solitude and calmness at its best.</p>
                            <div class="price">Rs 5,999 - Rs 8,999</div>
                            <a href="contact.html" class="btn">explore now</a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={i2} alt=" " />
                        </div>
                        <div class="content">
                            <h3>Goa Package</h3>
                            <p>The most popular beach of Goa, Baga is located close to Calangute beach, around 30 Km North of Panaji. Baga is popular for its nightlife with some very famous clubs such as Brittos, Titos and Mambos.There is also a range of water sports that you can try your hands at.</p>
                            <div class="price">Rs 7,999 - Rs 12,999</div>
                            <a href="contact.html" class="btn">explore now</a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={i3} alt="" />
                        </div>
                        <div class="content">
                            <h3>Delhi Package</h3>
                            <p>Boasting cultural diversity and rich heritage, Delhi is home to several temples, tombs, gardens, forts, museums, markets and more. We take you to some of the best spots in the city. Pick the best packages from here and enjoy the tour of Delhi with guide.</p>
                            <div class="price">Rs 2,999 - Rs 8,999</div>
                            <a href="contact.html" class="btn">explore now</a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={i4} alt="" />
                        </div>
                        <div class="content">
                            <h3>Jaipur Package</h3>
                            <p>We organise Jaipur & Rajasthan tours that offer incredible attractions like Forts and Palaces, Deserts, Traditional Villages, colorful cattle fairs, sacred places, camel safaris, beautiful lakes, hill stations and the people. </p>
                            <div class="price">Rs 11,999 - Rs15,999</div>
                            <a href="contact.html" class="btn">explore now</a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={i5} alt="" />
                        </div>
                        <div class="content">
                            <h3>Kerala Package</h3>
                            <p>A trip to Kerala is always an experience through greenery to the hills and its climate. Browse through our hand-picked Kerala tour packages prepared for you. Our experts are also available to prepare customised tourism packages</p>
                            <div class="price">Rs 4,999 - Rs 9,999</div>
                            <a href="contact.html" class="btn">explore now</a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={i6} alt="" />
                        </div>
                        <div class="content">
                            <h3>Darjeeling</h3>
                            <p>A trip to Darjeeling will include a ride on the famous Himalayan Railway, a visit to Tiger Hill, or a tour of the stunning landscaped gardens here. Activities like hiking and boating. Do not miss out on a trip to Darjeeling Is famous Mall Road</p>
                            <div class="price">Rs 20,000 - Rs 25,000</div>
                            <a href="contact.html" class="btn">explore now</a>
                        </div>
                    </div>

                </div>

            </section>
        </div>

    )
}

export default Places