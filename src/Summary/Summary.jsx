import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Summary() {
  const [fetchedSummary, setFetchedSummary] = useState();
  let location = useLocation();
  let showId = location.state;

  useEffect(() => {
    const getFetchedSummary = async () => {
      let response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
      response.json().then((summary) => setFetchedSummary(summary));
    };
    getFetchedSummary();
  }, []);

  return (
    <>
      <h1 className="text-4xl ms-16 my-10">Show Summary</h1>
      {fetchedSummary && (
        <div className="ms-16 my-10">
          <div className="flex justify-evenly">
            <img
              src={fetchedSummary.image.original}
              alt={fetchedSummary.name}
              style={{ width: "550px", height: "550px" }}
              className="object-cover rounded-2xl"
            />

            <div className="ms">
              <p className="text-3xl">{fetchedSummary.name}</p>
              <p>IMBD: {fetchedSummary.rating.average}</p>
              <p>Genre: {fetchedSummary.genres}</p>
              <p>Duration: {fetchedSummary.runtime ? `${fetchedSummary.runtime} min` : 'N/A' }</p>
              <p>Premiered: {fetchedSummary.premiered}</p>
              <p>Ended: {fetchedSummary.status === 'Ended' ? fetchedSummary.ended : "Show is Running"}</p>
              <p>Language: {fetchedSummary.language}</p>
              <p>Country: {fetchedSummary.network.country.name}</p>
              <button className="bg-sky-600 p-2 rounded-xl my-5">Buy Tickets</button>
            </div>
          </div>
          <p>
            {fetchedSummary.summary.slice(3, fetchedSummary.summary.length - 4)}
          </p>
        </div>
      )}
    </>
  );
}
