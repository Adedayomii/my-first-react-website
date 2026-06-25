import {products} from './products';
import './heroSection.css';
import { Header } from '../Shared/Header';



export function HeroSection () {
    return (
        <>
            <Header />
            <div className='hero-section'>
                <div className="product-grid">
                    {products.map((item)=> {
                        return (
                            <div className="product-container">
                                <div className="image-container">
                                    <img src={item.image} className='image' />
                                </div>

                                <div className="name-container">
                                    {item.name}
                                </div>
                                <div className="rating-container">
                                    <img src={`images/rate/rating-${item.rating.stars*10}.png`} className='rating'/>
                                    <div>{item.rating.count}</div>
                                </div>
                                <div className="price-container">
                                    ${(item.priceCents)/100}
                                </div>
                                <div className='option'>
                                    <select className='option-box'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>

                                </div>
                                <div className="button-container">
                                    <button className='cart_button'>Add to Cart</button>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </>
    );
}