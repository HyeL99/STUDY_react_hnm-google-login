import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from "react-router-dom";
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';
import NeedLogin from './page/NeedLogin';


//1. 전체 상품 페이지, 로그인 페이지, 상품 디테일 페이지 생성
//1.1 네비게이션 바 생성
//2. 전체 상품 페이지 : 전체 상품 확인 가능
//3. 로그인버튼 : 로그인 페이지, 로그아웃 버튼이 나타남
//4. 로그아웃버튼 : 상품 디테일 페이지의 경우 로그인 페이지가 나타나며 로그인 버튼 생성
//5. 상품디테일 : 로그인X - 로그인 페이지, 로그인O - 상품 디테일 페이지
//6. 상품 검색 가능

function App() {
  const [authenticate, setAuthenticate] = useState(false) //로그인여부
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll authenticate={authenticate}/>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
        {/*<Route path="/login" element={<Login setAuthenticate={setAuthenticate}/> }/>*/}
        <Route path="/no-login" element={<NeedLogin authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
