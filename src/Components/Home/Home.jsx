import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "/banner.png";
import download from "/banner.jpg";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Rating from '@mui/material/Rating';

export default function Home() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const getFetchedData = async () => {
      let response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      response.json().then((shows) => setFetchedData(shows));
    };
    getFetchedData();
  }, []);

  let navigate = useNavigate();
  const handleSummary = (id) => {
    navigate("/Summary", { state: id });
  };

  return (
    <>
      <div className="mb-8">
        <img
          src={download}
          alt="All rise"
          style={{ height: "600px", width: "100vw", objectFit: "cover" }}
        />
        <div className="absolute top-80 ms-6 md:ms-16 p-2 rounded-xl
        transition ease-in-out delay-25 hover:-translate-y-1 hover:scale-105">
              <button className="bg-blue-500 text-white p-2 rounded-xl"
              onClick={() => handleSummary(42181)}>
                 More Details
              </button>
        </div>
      </div>
        <h1 className="text-center text-3xl font-semibold">Popular TV Shows</h1>
      <div className="flex flex-wrap mx-20 justify-center">
        {fetchedData &&
          fetchedData.slice(1).map((showData) => {
            return (
              <div
                key={crypto.randomUUID()}
                className="my-10 mx-4 pb-4 
             transition ease-in-out delay-25 hover:-translate-y-1 hover:scale-105 duration-300 bg-gray-300
               cursor-pointer rounded-t-3xl rounded-b-3xl text-center"
              >
                <img
                  src={
                    showData.show.image
                      ? showData.show.image.original
                      : "https://rb.gy/hlcvlw"
                  }
                  alt={showData.show.image && showData.show.name}
                  className="w-80 h-96 rounded-xl object-cover mb-2"
                  onClick={() => handleSummary(showData.show.id)}
                />
                <p>{showData.show.name}</p>
                 <div className="flex justify-center items-center">
                 <Rating name="half-rating-read" defaultValue={showData.show.rating.average
                   ? showData.show.rating.average/2 : 3} precision={0.1} readOnly />
                 </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
