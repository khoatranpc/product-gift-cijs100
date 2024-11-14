import './styles.css';

const LikeNow = () => {
    return <div className="likeNow">
        <h1 className='likeText'>
            Yêu thích ngay
        </h1>
        <div className="imageDes">
            <img src="/human.png" alt="" />
            <p>Thêm ngay vào mục yêu thích để nhận được thông báo mỗi khi sản phẩm có ưu đãi</p>
        </div>
    </div>
}

export default LikeNow;