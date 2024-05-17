import react from 'react'

import './App.css'

import { Routes ,Route, Outlet} from 'react-router-dom';
import Header from './components/Header/Header';

import Home from './pages/Home/Home';
import TVShows from './pages/Home/TVShows';
import Movies from './pages/Home/Movies';
import NewPopular from './pages/Home/NewPopular';
import MyList from './pages/Home/MyList';
import BrowsebyLanguage from './pages/Home/BrowsebyLanguage';
import Four04 from './pages/Home/Four04';
import Footer from './components/Footer/Footer';
function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/new&popular" element={<NewPopular />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/browsebylanguages" element={<BrowsebyLanguage />} />
        </Route>
        <Route path="*" element={<Four04 />} />
      </Routes>
    </div>
  );
}

export default App
