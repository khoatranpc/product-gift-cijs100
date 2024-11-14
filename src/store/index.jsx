import { createContext, useEffect, useState } from "react";
import { listGift } from "../data";
import { useSearchParams } from "react-router-dom";

export const Store = createContext({
    gifts: [],
    setGifts(newGifts) { },
    filterByType: [],
    setFilterByType(newType) { },
    searchValue: '',
    setSearchValue(value) { },
    page: 1,
    setPage(page) { },
    loading: true
});

const StoreProvider = (props) => {
    // context phải chứa giá trị state lọc

    // thực hiện lấy dữ liệu từ API
    const [gifts, setGifts] = useState([]);
    // tạo ra 1 state lọc, thực hiện cung cấp cho các các children
    // Thực hiện viết hàm lấy dữ liệu từ API
    // thực hiện hiển thị loading trong khi load data
    const [filterByType, setFilterByType] = useState('ALL');
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(true);
    // lấy được searchParams
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState(() => {
        return searchParams.get('page') && typeof Number(searchParams.get('page')) === 'number' ? Number(searchParams.get('page')) : 1
    }); // ngầm định là có 8 sản phẩm trên 1 trang

    const handleFetchGifts = async () => {
        setLoading(true);
        // fetch
        const response = await fetch('https://67238cde493fac3cf24b5c83.mockapi.io/gifts');
        const data = await response.json();
        setGifts(data ?? []);
        setLoading(false);
    }

    useEffect(() => {
        handleFetchGifts();
    }, []);

    return <Store.Provider
        value={{
            gifts,
            setGifts,
            filterByType,
            setFilterByType,
            searchValue,
            setSearchValue,
            page,
            setPage,
            loading
        }}
    >
        {props.children}
    </Store.Provider>
}

export default StoreProvider;