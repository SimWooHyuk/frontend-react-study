import './App.css';
import NewsList from './components/NewsList';
import {Route, Routes} from "react-router-dom"
import NewsPage from './pages/NewsPage';

function App() {
  return (
    // <>
    // <NewsList />
    // </>

    <Routes>
      {/* ?는 CATEGORY 값이 선택적이라는 의미
      즉, 있을 수도 있고, 없을 수도 있다는 뜻
       */}
      <Route path="/:category?" element={<NewsPage />}/>
    </Routes>
  )

}

export default App;

// Your API key is: cfa3d8eeb2914b968c070445dbe5571c

// https://newsapi.org/v2/top-headlines?country=kr&apiKey=cfa3d8eeb2914b968c070445dbe5571c