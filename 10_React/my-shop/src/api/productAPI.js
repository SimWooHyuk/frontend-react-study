// 상품과 관련된 api 요청 함수들을 정의
// 가독성도 좋고 여러곳에서 재사용할 수 있도록 함수로 만듦

import axios from "axios";

// 상품 목록 조회
export  const getProducts = async () => {
  try {
  const response = await axios.get('https://my-json-server.typicode.com/SimWooHyuk/dbshop/products')
    console.log(response);
  if (response.status === 200) { // 요청에대한 응답의 상태가 200 OK 일때만 결과를 리턴
    return response.data;

  } else {
    throw new Error(`api error: ${response.status} ${response.statusText}`)
  }
  
} catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을때
  console.log(error);
  throw error;
  
}}

// 특정 상품 조회
export  const getProductById = async (id) => {
  try {
    const response = await axios.get(`https://my-json-server.typicode.com/SimWooHyuk/dbshop/products/${id}`)
  
    if (response.status === 200) { // 요청에대한 응답의 상태가 200 OK 일때만 결과를 리턴
      return response.data
      
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`)
    }
    
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을때
    console.log(error);
    throw error;
    
  }}

  // 만약 서버로 데이터를 보내야 한다면?
  // json-server 이용 시 테스트 가능
  export  const getProduct = async (productId, orderCount) => {
    try {
      const response = await axios.post(`http://localhost:4000/product-order` , {productId, orderCount}) // 열어둔 호스트 예를들어서 4000이라는것 예시임
    
      if (response.status === 200) { // 요청에대한 응답의 상태가 200 OK 일때만 결과를 리턴
        return response.data
        
      } else {
        throw new Error(`api error: ${response.status} ${response.statusText}`)
      }
      
    } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을때
      console.log(error);
      throw error;
      
    }}