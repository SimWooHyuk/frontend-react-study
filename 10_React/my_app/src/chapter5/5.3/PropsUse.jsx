import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";
import Profile from "./Profile";

function PropsUse() {
  return (
    <>
      <Profile 
        // (내가 작명)키-값 쌍의 형태로 컴포넌트에 props를 전달할 수 있음
        // 정수, 변수, 다른 컴포넌트 등 값을 넣을 때는 {}로 감싼다
        // 문자열은 () 생략가능
        name= "우혁"
        introduction= "안녕하세요. 우혁입니다."
        viewCount={1500}
      />

      <Layout 
      // props로 다른 컴포넌트를 넘기는 것도 가능
      width={2560}
      height={1440}
      header={<Header title = "우혁's 블로그"/>}
      footer={<Footer />}
      />

    </>
  )
}


export default PropsUse;