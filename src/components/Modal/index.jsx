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
const Modal = (props) => {
    const [newComment, setNewComment] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newComment);
    }
    return (
        <div className='modal'>
            <div className="contentModal">
                <div className="header">
                    <button className='btnClose' onClick={props.onClose}><Close /></button>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="image">
                            <img src={props.currentGift.image} alt="" />
                        </div>
                        <div className="overViewProduct">
                            <p className='nameProduct'>{props.currentGift.name}</p>
                            {getRatingStar[props.currentGift.rating]}
                            <p>Giá: {Number(props.currentGift.price).toLocaleString()} VND</p>
                        </div>
                    </div>
                    <div className="row">
                        {props.currentGift.des}
                    </div>
                    <div className="row">
                        <form onSubmit={handleSubmit}>
                            <textarea name='comment' onChange={(e) => {
                                setNewComment(e.target.value);
                            }} />
                            <button>Comment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;