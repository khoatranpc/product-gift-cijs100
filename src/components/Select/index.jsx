import { useContext } from 'react';
import { Store } from '../../store';
import './styles.css';

const Select = () => {
    // nghĩ cách: component Select sẽ cần thay đổi được filterByType từ Store
    const store = useContext(Store);

    return (
        <select className='selectComponent' value={store.filterByType} onChange={(e)=>{
            store.setFilterByType(e.target.value)
        }}>
            <option value="ALL">Tất cả</option>
            <option value="SMALL">Nhỏ</option>
            <option value="MIDDLE">Vừa</option>
            <option value="LARGE">Lớn</option>
        </select>
    )
}

export default Select;