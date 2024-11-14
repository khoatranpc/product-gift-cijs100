import LikeNow from './components/LikeNow';
import Filter from './components/Filter';
import GiftItem from './components/GiftItem';
import Pagination from './components/Pagination';
import { listGift } from './data';
import Modal from './components/Modal';
import './App.css';
import { useState, useContext } from 'react';
import ModalCreateGift from './components/ModalCreateGift';
import { Store } from './store/index.jsx';

/**
 * 
 * Khi kích vào một sản phẩm bất kỳ, thì sẽ hiển thị modal lên
 * nhận xét-> có sự thay đổi về giao diện -> state boolean true - hiển thị; false - tắt đi
 * 
 * khi kích vào một sản phẩm -> hiển thị thông tin của sản phẩm đó trong modal
 * 
 * tạo 1 state để hứng giá trị sau khi kích vào 1 item
 * 
 * khi modal được mở, truyền giá trị này thông qua prop
 */

/**
 * 
 * Chuyển đổi listGift sang state
 * bấm nút lưu -> thực hiện thêm sản phẩm mới vào state listGift đã tạo
 * 
 * 
 * 
 * localStorage:
 * - tác dụng: lưu trữ cục bộ ngay trên trình duyệt với trang web hiện (domain hiện tại)
 * - cú pháp:
 *  + setItem(key, value)  -> tạo hoặc cập nhật giá trị trong localStorage | JSON.stringify(value) -> đưa value về định dạng string
 *  + getItem(key) -> lấy giá trị key trong localStorage | JSON.parse(value localStorage) -> đưa value về đạng ban đầu
 * 
 * 
 */
function App() {
  const [openModal, setOpenModal] = useState(false);
  // app tạo ra 1 state để lưu trữ thông tin tạo quà tặng -> cung cấp cho modal create gift sử dụng
  const [newGift, setNewGift] = useState({
    name: '',
    image: '',
    rating: 0,
    price: 0
  });
  const [selectedItem, setSelectedItem] = useState({});
  // state mở modal cho modal create gift
  const [modalCreateGift, setModalCreateGift] = useState(false);

  // thay thế bằng store
  const store = useContext(Store);
  const crrStartIndexPage = 8 * (store.page - 1);
  // console.log(store.filterByType);
  // filterByType | ALL -> trả về tất cả, còn khác ALL -> thì mới xét
  const handleOpenModal = (open, gift) => {
    setOpenModal(open);
    setSelectedItem(gift);
  }
  return (
    <div className='container'>
      <LikeNow />
      <Filter />
      {modalCreateGift && <ModalCreateGift setGifts={() => {
        store.gifts.push({
          ...newGift,
          createdAt: new Date()
        });

        localStorage.setItem('gifts', JSON.stringify(store.gifts));
        store.setGifts([...store.gifts]);
      }}
        newGift={newGift} setNewGift={setNewGift} onClose={() => setModalCreateGift(false)} />}
      {openModal && <Modal currentGift={selectedItem} onClose={() => handleOpenModal(false)} />}
      <div className='listGift'>
        <div className='topListGift'>
          <h1>Quà tặng</h1>
          {/* Khi bấm vào nút tạo, sẽ hiển thị modal thêm thông tin sản phẩm với nhũng trường thông tin cơ bản: link hình ảnh, tên sản phẩm, giá, saleOff, id, rating */}
          <button onClick={() => setModalCreateGift(true)}>Tạo</button>
        </div>
        <div className='list'>
          {
            store.loading ? <p>Loading</p> :
              store.gifts.sort((a, b) => {
                return -new Date(a.createdAt).getTime() + new Date(b.createdAt).getTime()
              })
                .filter((gift) => {
                  return (store.filterByType === 'ALL' ? true : store.filterByType === gift.type) && String(gift.name).toLowerCase().includes(store.searchValue.toLowerCase())
                })
                .slice(crrStartIndexPage, crrStartIndexPage + 8).map((gift, index) => {
                  return <div key={gift.id} className={`div${index + 1}`} onClick={() => handleOpenModal(true, gift)}>
                    <GiftItem gift={gift} />
                  </div>
                })
          }
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default App;
