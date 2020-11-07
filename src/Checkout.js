import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import Subtotal from './Subtotal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Checkout() {
    const [{ basket, user }] = useStateValue();

    const banner_photos = [
        {
            name: 'Photo 1',
            url: 'https://m.media-amazon.com/images/G/15/shazam/01188604-J-J-CSN-CA-r2-980-55-pfbZq._V428473196_.jpg'
        },
        {
            name: 'Photo 2',
            url: 'https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Amazon_Basics/XCM_CUTTLE_1300x90_1220742_1149337_f5193495_5fbe_49af_a9de_b5fc71b3d796_png_LOWER_QL85_._CB434832783_.jpg'
        },
        {
            name: 'Photo 3',
            url: 'https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Office_Products/XCM_Manual_ORIGIN_1227787_1196486_CA_ca_office_products_rfs_3150913_1300x90_2X_en_CA._CB428361924_.jpg'
        },
    ]

    const settings = {
        dots: false,
        fade: true,
        suipe: false,
        touchMove: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1, 
        arrows: false, 
        slidesToScroll: 1, 
        className: 'checkout__ad'
    }

    return (
        <div className='checkout'>
            <div className="checkout__left" style={ basket?.length > 0 ? {width: '80%'} : {width: '100%'} }>              
                <Slider {...settings}>
                    {banner_photos.map((photo) => {
                        return(
                            <img className='checkout__ad' src={photo.url} alt='advertisement'/>
                        )
                    })}
                </Slider> 
                {basket?.length === 0 ? (
                    <div className='checkout__title'>
                        <h3>Hello {user ? user.email : 'Guest'},</h3>
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>You have no items in your basket. To buy items, click "Add to Basket" next to your item.</p>
                    </div>
                ) : (
                    <div>
                        <h2 className='checkout__title'>Your Shopping Basket</h2>

                        {basket?.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                image={item.image}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket?.length > 0 && (
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
// https://m.media-amazon.com/images/G/15/shazam/01188604-J-J-CSN-CA-r2-980-55-pfbZq._V428473196_.jpg