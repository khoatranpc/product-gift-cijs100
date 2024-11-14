import React, { useState } from 'react';
import Close from '../../icons/Close';
import RatingStarFill from '../../icons/RatingStarFill';
import RatingStar from '../../icons/RatingStar';
import './styles.css';

const getRatingStar = {
    1: <div>
        <RatingStarFill />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
    </div>,
    2: <div>
        <RatingStarFill />
        <RatingStarFill />
        <RatingStar />
        <RatingStar />
        <RatingStar />
    </div>,
    3: <div>
        <RatingStarFill />
        <RatingStarFill />
        <RatingStarFill />
        <RatingStar />
        <RatingStar />
    </div>,
    4: <div>
        <RatingStarFill />
        <RatingStarFill />
        <RatingStarFill />
        <RatingStarFill />
        <RatingStar />
    </div>,
    5: <div>
        <RatingStarFill />
        <RatingStarFill />
        <RatingStarFill />
        <RatingStarFill />
        <RatingStarFill />
    </div>,
}
const ModalCreateGift = (props) => {
    const { newGift, setNewGift } = props;
    const [watingForSaveGift, setWatingForSaveGift] = useState(false);
    // Viết hàm cập nhật giá trị cho từng 1 trường trong state
    const handleChange = (e) => {
        const inputName = e.target.name;
        const crrvalue = e.target.value;
        newGift[inputName] = crrvalue;
        setNewGift({
            ...newGift
        })
    };
    const handleSubmit = async (e) => {
        setWatingForSaveGift(true);
        e.preventDefault();
        // call api thêm gift lên mockApi
        const response = await fetch('https://67238cde493fac3cf24b5c83.mockapi.io/gifts', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newGift)
        });
        await response.json();
        setWatingForSaveGift(false);
        props.onClose();
    }
    return (
        <div className='modalCreateGift'>
            <div className="contentModal">
                <div className="header">
                    <button className='btnClose' onClick={props.onClose}><Close /></button>
                </div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="item">
                            <label htmlFor="">Tên sản phẩm</label>
                            <input type="text" name='name' value={newGift.name} onChange={handleChange} placeholder='Nhập tên sản phẩm' />
                        </div>
                        <div className="item">
                            <label htmlFor="">Link hình ảnh</label>
                            <input type="text" name="image" value={newGift.image} onChange={handleChange} placeholder='Link hình ảnh' />
                        </div>
                        <div className="item">
                            <label htmlFor="">Giá</label>
                            <input type="number" name='price' value={newGift.price} onChange={handleChange} placeholder='Giá sản phẩm' />
                        </div>
                        <div className="item">
                            <label htmlFor="">Rating</label>
                            <input type="number" name='rating' value={newGift.rating} onChange={handleChange} />
                        </div>
                        <div className="item">
                            <button class="buttonload">
                                {watingForSaveGift && <i class="fa fa-spinner fa-spin"></i>} Lưu
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalCreateGift;