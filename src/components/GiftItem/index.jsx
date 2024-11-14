import React from 'react';
import Cart from '../../icons/Cart';
import './styles.css';
/**
 * GiftItem nhận đầu vào là một thông tin sản phẩm
 * kích vào sản phẩm tức là kích vào thẻ sản phẩm
 * 
 * tên, giá sản phẩm
 * 
 */
const GiftItem = (props) => {
    const { name, image, price, saleOff } = props.gift;
    const handleClickGift = () => {
        // alert(`${name}, ${Number(price).toLocaleString()} VND`);
    }
    return (
        <div className='giftItem' onClick={handleClickGift}>
            <img src={image} alt="" />
            <div className="itemInfo flex">
                <div className="row flex">
                    <span>{name}</span>
                    <Cart />
                </div>
                <div className="row flex">
                    <span>{Number(price).toLocaleString()} VND</span>
                    <span>-{Number(saleOff) * 100}%</span>
                </div>
            </div>
        </div>
    )
}

export default GiftItem;