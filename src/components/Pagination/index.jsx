import React, { useContext } from 'react'
import ChevronLeft from '../../icons/ChevronLeft';
import { Store } from '../../store';
import './styles.css';
import { useSearchParams } from 'react-router-dom';

const Pagination = () => {
    const listPageNumber = [];
    // phân trang với context
    // để phân trang: cắt vùng dữ liệu
    const store = useContext(Store);
    // tính số lượng trang
    const totalPage = Math.ceil(store.gifts.length / 8);
    for (let i = 0; i < totalPage; i++) {
        listPageNumber.push(i + 1);
    }
    const [_, setSearchParams] = useSearchParams();
    return (
        <div className='pags'>
            <ChevronLeft />
            {listPageNumber.map((page) => {
                return <button key={page} onClick={() => {
                    store.setPage(page);
                    setSearchParams({
                        page
                    });
                }}>{page}</button>
            })}
            <ChevronLeft className="turnRight" />
        </div>
    )
}

export default Pagination;