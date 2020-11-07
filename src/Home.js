import React from 'react';
import Product from './Product';
import Slider from 'react-slick';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

function Home() {

    const banner_photos = [
        {
            name: 'Photo 1',
            url: 'https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Events/XCM_Manual_1237913_1255421_CA_OTC20_ca_ca_otu_gw_hero_phase2_ca_en_3237561_3000x1200_2X_en_CA._CB408562911_.jpg'
        },
        {
            name: 'Photo 2',
            url: 'https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/MzgyMjg2ZDEt/MzgyMjg2ZDEt-OTc0YjlhNjct-w3000._CB408087832_.jpg'
        },
        {
            name: 'Photo 3',
            url: (require('./amazon_banner.jpg'))
        },
    ]

    const banner_settings = {
        dots: false,
        fade: false,
        suipe: false,
        touchMove: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1, 
        arrows: false, 
        slidesToScroll: 1, 
        className: 'home__image'
    }

    const product_settings = {
        dots: true,
        fade: false,
        swipe: false,
        touchMove: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 4, 
        arrows: true, 
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        slidesToScroll: 4, 
        centerPadding: '10px',
        className: 'home__slider'
    }

    return (
        <div className='home'>
            <Slider {...banner_settings}>
                {banner_photos.map((photo) => {
                    return(
                        <img src={photo.url} alt={photo.name}/>
                    )
                })}
            </Slider>
            <div className="home__row">
                <Product 
                    id = '110786'
                    title = 'Fitbit Charge 4 Fitness and Activity Tracker'
                    price = {169.99}
                    rating = {4}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/71smqRr0pmL._AC_UL200_SR200,200_.jpg'
                />
                <Product 
                    id = '112472'
                    title = 'Casio FX300ES Plus-BU Engineering/Scientific Calculator'
                    price = {24.99}
                    rating = {5}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/71is94j7DVL._AC_UL200_SR200,200_.jpg'
                />
            </div>
            <div className="home__row">
                <Product 
                    id = '123456'
                    title = 'Samsung 50" Q60T 4K Ultra HD HDR Smart QLED TV'
                    price = {899.99}
                    rating = {5}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/61KLsGIA8LL._AC_SL1500_.jpg'
                />
                <Product 
                    id = '199907'
                    title = 'Amazon Echo Dot 3rd Gen with Alexa'
                    price = {39.99}
                    rating = {4}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/419SVFEiGcL._AC_UL200_SR200,200_.jpg'
                />
                <Product 
                    id = '202009'
                    title = 'Optoma HD146X High Performance Projector'
                    price = {89.99}
                    rating = {3}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/41-E5Ps6HYL._AC_SX368_.jpg'
                />
            </div>
            <Product 
                id = '514721'
                title = 'Samsung Business CH890 Series 34 inch WQHD 3440x1440 Ultrawide Curved Desktop Monitor'
                price = {749.99}
                rating = {4}
                image = 'https://images-na.ssl-images-amazon.com/images/I/71qkzkC7bHL._AC_SL1500_.jpg'
            />
            <div className="home__sliderContainer">
                <h3 className='home__sliderTitle'>Recommended Products</h3>   
                <Slider {...product_settings}>
                    <Product 
                        id = '981108'
                        title = 'Levoit Water Filter Pitcher with 1 Standard Filter'
                        price = {34.99}
                        rating = {5}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/61A9DHnnKRL._AC_SY400_.jpg'
                    />
                    <Product 
                        id = '578609'
                        title = 'Mounting Dream TV Wall Mount for 37-70" TVs, Tilting TV Mount'
                        price = {35.99}
                        rating = {5}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/71VOIPqcJTL._AC_SY400_.jpg'
                    />
                    <Product 
                        id = '647786'
                        title = 'Black & Decker BD2KITCDDI 20V MAX Drill/Driver Impact Combo Kit'
                        price = {110.49}
                        rating = {5}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/61yeedzSsxL._AC_SL1000_.jpg'
                    />
                    <Product 
                        id = '105721'
                        title = 'Mpow Air Pro 2.4G Wireless Gaming Headset 7.1 Surround Sound'
                        price = {84.99}
                        rating = {5}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/41O+0E35NoL._SCLZZZZZZZ___AC_SY400_.jpg'
                    />
                    <Product 
                        id = '279086'
                        title = 'Mpow Car Phone Mount Holder, Car Mount for Dashboard Windshield Air Vent'
                        price = {13.49}
                        rating = {5}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/510ZQH-VwWL._SCLZZZZZZZ___AC_SY400_.jpg'
                    />
                    <Product 
                        id = '173464'
                        title = 'Rolodex Organizer Desk, Wood Tones Desk Organizer 4-1/4"w x 8-3/4"d x 4-1/8"h, 1 Unit, Mahogany'
                        price = {24.99}
                        rating = {5}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/81Log9x7u7L._AC_SY400_.jpg'
                    />
                    <Product 
                        id = '135790'
                        title = 'AmazonBasics Expanding Organizer File Folder, Letter Size - Black/Gray (2-Pack)'
                        price = {14.99}
                        rating = {5}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/81vRquMJUxL._AC_SY400_.jpg'
                    />
                    <Product 
                        id = '210101'
                        title = 'Elchim Classic 2001 Blow Dryer: Professional Salon Ceramic Hair Dryer, 1875 Watt'
                        price = {189.99}
                        rating = {5}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/71vHajZHW8L._AC_SY400_.jpg'
                    />
                    <Product 
                        id = '108072'
                        title = 'HDMI Cable 6.6feet(2meter), 4K HDMI Lead-Snowkids Ultra High Speed 18Gbps HDMI 2.0 Cable 4K@60Hz'
                        price = {12.75}
                        rating = {5}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/61ztDoV5JlL._AC_SY400_.jpg'
                    />
                    <Product 
                        id = '119099'
                        title = 'DEWENWILS Remote Control Outlet Plug Wireless Power Switch, Programmable Remote Light Switch Kit'
                        price = {37.99}
                        rating = {5}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/61f8zRXyqCL._AC_SY400_.jpg'
                    />
                    <Product 
                        id = '002974'
                        title = 'Logitech M325 Wireless Mouse, Black'
                        price = {24.99}
                        rating = {5}
                        image = 'https://images-na.ssl-images-amazon.com/images/I/4194zM6xlyL._AA436_FMwebp_QL65_.jpg'
                    />
                    <Product 
                        id = '086421'
                        title = 'Kasa Smart Light Switch, Dimmer by TP-Link – WiFi Light Switch'
                        price = {29.99}
                        rating = {5}
                        image = 'https://m.media-amazon.com/images/I/41xaTf2lnZL.__AC_SY400_.jpg'
                    />
                </Slider>     
            </div>    
        </div>
    )
}

export default Home
