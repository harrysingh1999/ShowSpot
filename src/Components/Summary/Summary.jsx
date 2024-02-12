import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imdb from "/imdb.png";

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

  let navigate = useNavigate();
  const handleTickets = (id) => {
    navigate("/MovieTicketForm", { state: id });
  };

  return (
    <>
      {fetchedSummary && (
        <div className="flex flex-col md:flex-row mx-6 md:mx-10 mt-10">
         <div className="flex flex-col mb-6"
          style={{ flex: 1 }}>
         <img
            src={
              fetchedSummary.image
                ? fetchedSummary.image.original
                : "https://rb.gy/hlcvlw"
            }
            alt={fetchedSummary.name}
            style={{ width: "550px", height: "550px" }}
            className="object-cover rounded-2xl"
          />
             <button
              className="bg-blue-500 hover:bg-blue-700 text-white w-full px-4 py-2 rounded-xl mt-5"
              onClick={() => handleTickets(fetchedSummary.id)}
              >
               Get Tickets
            </button>
         </div>

          <div className="md:ml-10 " style={{ flex: 2 }}>
            <p className="text-3xl mb-4 ms-4">{fetchedSummary.name}</p>
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <p className="text-lg text-gray-800 mb-2">Details:</p>
              <div className="flex items-center mb-2">
                <img src={imdb} className="w-10 mr-2" alt="IMDb" />
                <p className="text-xl">
                  {fetchedSummary.rating.average
                    ? fetchedSummary.rating.average
                    : "N/A"}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <p className="text-sm font-semibold text-gray-700">Genre:</p>
                <p className="text-sm text-gray-600">
                  {fetchedSummary.genres
                    ? fetchedSummary.genres.join(", ")
                    : "N/A"}
                </p>
                <p className="text-sm font-semibold text-gray-700">Duration:</p>
                <p className="text-sm text-gray-600">
                  {fetchedSummary.runtime
                    ? `${fetchedSummary.runtime} min`
                    : "N/A"}
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  Premiered:
                </p>
                <p className="text-sm text-gray-600">
                  {fetchedSummary.premiered
                    ? fetchedSummary.premiered
                    : "In Development"}
                </p>
                <p className="text-sm font-semibold text-gray-700">Ended:</p>
                <p className="text-sm text-gray-600">
                  {fetchedSummary.status === "Ended"
                    ? fetchedSummary.ended
                    : "Show is Running"}
                </p>
                <p className="text-sm font-semibold text-gray-700">Language:</p>
                <p className="text-sm text-gray-600">
                  {fetchedSummary.language ? fetchedSummary.language : "N/A"}
                </p>
                <p className="text-sm font-semibold text-gray-700">Country:</p>
                <p className="text-sm text-gray-600">
                  {fetchedSummary.network
                    ? fetchedSummary.network.country.name
                    : "N/A"}
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-800 text-md leading-relaxed">
              Storyline: {fetchedSummary.summary.replace(/<\/?p>|<\/?b>/g, "")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
