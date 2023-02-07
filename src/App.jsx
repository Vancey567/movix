import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataFromApi } from './utils/api';
import { getApiConfiguration } from './store/homeSlice';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';

function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state) => state.home)

  useEffect(() => {
    const test = async () => {
      const data = await fetchDataFromApi('/movie/popular')
      console.log(data);
      dispatch(getApiConfiguration(data));
    }
    test();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/:mediaType/:id" element={<Details />}/> {/*mediaType tells it's a movie or a TV series, and id tells the id of that particular movie/series*/}
            <Route path="/search/:query" element={<SearchResult />}/>
            <Route path="/explore/:mediaType" element={<Explore />}/> {/* Inside Explorer it's a movie/tvSeries. We will show content a/c to that*/}
            <Route path="*" element={<PageNotFound />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
