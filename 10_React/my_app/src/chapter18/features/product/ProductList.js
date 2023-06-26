import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList, subList } from './productSlice';
import { v4 as uuidv4 } from "uuid";
function ProductList() {
  const listItem = useSelector((state) => state.product.value);
  const dispatch = useDispatch();
  const [pushList, setPushList] = useState('');

  const handleAddList = () => { 
    
    const trimList = pushList.trim()
    if (trimList !=='') {
      dispatch(addList(pushList));
      setPushList('');
    }
  };

  const handleDeleteNote = (index) => {
    const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');
    if (confirmDelete) {
      dispatch(subList(index)); 
    }
  };
  return (
    <>
      <input
        type="text"
        value={pushList}
        onChange={(e) => setPushList(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleAddList()
          }
        }}
      />
      <button type="button" onClick={handleAddList}>
        추가
      </button>

      <ul>
        {listItem.map((item) => (
          <li key={item}>
            <div>{item.text}<button
              type='button'
              onClick={() => handleDeleteNote(item)}
            >
              삭제
            </button></div>
            </li>
          
        ))}
      </ul>
    </>
  );
}
export default ProductList