import { Route, Routes } from "react-router-dom";
import Board from "./component/Board";
import BoardContent from "./component/BoardContent";
import Home from "./component/Home";
import Info from "./component/Info";
import User from "./component/User";
import Header from "./layout/Header";
import MyPage from "./component/MyPage";

function App() {
  /* 
  라우터 적용방법

  1. index.js에서 브라우저라우터로 app을 감싸줌
  2. 각각의 컴포넌트를 만들음
  3. Route를 이용해 주소별로 컴포넌트 연결함

  Link컴포넌트 - a태그를 대체함
  to속성에 "라우터 주소" 적어서 이동하면 됨

  쿼리스트링 ?키=값
  - useLocation()
  - useSearchParams()
  
  쿼리파람
  - 라우터를 설정 /경로:값
  - useParams() 값을 받음
  */
  return (
    <Routes>

      {/* 중첩라우더 - 헤더부분처리 (Header에서 Outlet컴포넌트 표기)*/}
      <Route element={<Header/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>{/* 쿼리스트링 */}
        <Route path="/info/:num" element={<Info/>}/>{/* URL파라미터 */}
      </Route>

      {/* 각각 다른 화면이 보임 */}
      {/* 
      <Route path="/board" element={<Board/>}/>
      <Route path="/board/:num" element={<BoardContent/>}/> 
      */}
    
      {/* 중첩라우터 - 공통부분 처리 (Board에 가서 Oulet컴포넌트 표기) */}
      <Route path="/board" element={<Board/>}>
        <Route path=":num" element={<BoardContent/>}/>
      </Route>

      {/* navigate컴포넌트 */}
      <Route path="/mypage" element={<MyPage/>}/>
    
    </Routes>
  );
}

export default App;
