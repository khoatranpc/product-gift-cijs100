import { useContext } from 'react';
import Bars from '../../icons/Bars';
import SearchIcon from '../../icons/SearchIcon';
import { Store } from '../../store';
import Select from '../Select';
import './styles.css';

// Filter vẫn lấy được cá giá trị trong store
// what is logic?  -> cần phải có biến lọc (chỉ cần lọc theo type)
const Filter = () => {
    const store = useContext(Store);
    return (
        <div className='filterComponent'>
            <h1>Mục yêu thích của bạn.</h1>
            {/* 12p thực hiện search trên ô input */}
            <div className="searchInput">
                <SearchIcon />
                <input value={store.searchValue} onChange={(e) => {
                    store.setSearchValue(e.target.value);
                }} type="text" placeholder='Tìm kiếm' />
            </div>
            <div className="listSelect">
                <Select />
                <Bars />
            </div>
        </div>
    )
}

export default Filter;