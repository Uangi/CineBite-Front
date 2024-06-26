import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import '../styles/Main/Main.css';
import Home from '../components/Main/Home/Home';
import Search from '../components/Main/Search/Search';
import Community from '../components/Main/Community/Community';
import MyPage from '../components/Main/MyPage/MyPage';
import Login from '../components/Main/UserInfo/Login';
import Join from '../components/Main/UserInfo/Join';
import NotFound from '../components/Main/NotFound';
import ReviewWrite from '../components/Main/Review/ReviewWrite';
import MovieInfo from '../components/Main/Review/MovieInfo';
import MovieDetail from '../components/Main/Recommend/MovieDetail';
import MovieList from '../components/Main/Home/MovieList';


function Main() {
  return (
    <div className="main_div">
      <Routes>
        {/* 메인 */}
        <Route path="/" element={<Home />} />

        {/* 로그인,회원가입 */}
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />

        {/* 영화 검색 */}
        <Route path="/search" element={<Search />} />

        {/* 사용자 영화 추천 */}
        <Route path="/recommend" element={<MovieList />} />

        {/* 영화 커뮤니티 */}
        <Route path="/community" element={<Community />} />

        {/* 영화정보 및 리뷰 */}
        <Route path="/review/:movieId" element={<MovieInfo />} />
        <Route path="/api/movie/detail/:movieId" element={<MovieDetail />} />
        <Route path="/review/write/:movieId" element={<ReviewWrite />} />

        {/* 마이페이지 */}
        <Route path="/myPage" element={<MyPage />} />

        {/* 404 페이지 */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Main;
