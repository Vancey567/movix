import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const {url} = useSelector((state) => state.home);
    const {data, loading} = useFetch("/movie/upcoming");

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 20); // everytime we receive only 20 data so get the image from that 20 data only
        const randomBackGroundImage = url.backdrop + data?.results?.[randomNumber]?.backdrop_path; // get a a random background image, url.backdrop is the baseUrl + imgsize
        setBackground(randomBackGroundImage);
    }, [data])

    const searchHandler = (e) => {
        if(e.key === 'Enter' && query.length > 0) {
            navigate(`/search/${query}`);
        }
    }

  return (
    <div className="heroBanner">
        {!loading && (
            <div className="backdrop-img">
                <Img src={background} />
            </div>
        )}
        <div className="merge-opacity-layer"></div>
        <ContentWrapper>
            <div className="heroBannerContent">
                {/* <span className="title">Welcome</span> */}
                <span className="subTitle">Millions of movies, TV shows and people to discover. Explore now</span>
                <div className="searchInput">
                    <input type="text" onChange={(e) => setQuery(e.target.value)} onKeyUp={searchHandler} className="" placeholder="Search for a movie or tv show..." />
                    <button>Search</button>
                </div>
            </div>
        </ContentWrapper>
    </div>
  )
}

export default HeroBanner