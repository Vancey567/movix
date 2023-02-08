import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv"); // if we select "Movie" then Movie in the api call else send week
    };

    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Top Rated</span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel endPoint={endpoint} data={data?.results} loading={loading} />
        </div>
    );
};

export default TopRated;