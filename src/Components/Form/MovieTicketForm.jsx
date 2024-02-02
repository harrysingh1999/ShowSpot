import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ShowTicketForm() {
  const [fetchedDetails, setfetchedDetails] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numberOfTickets: 1,
  });

  let location = useLocation();
  let showId = location.state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let userDetails = localStorage.getItem('UserDetails');
  let user = userDetails ? JSON.parse(userDetails) : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name == "" || formData.email == "") {
      return;
    }
    user.push(formData) 
    localStorage.setItem('UserDetails', JSON.stringify(user))
    alert('Tickets has been purchased Successfully')
  };

  useEffect(() => {
    const getfetchedDetails = async () => {
      let response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
      response.json().then((summary) => setfetchedDetails(summary));
    };
    getfetchedDetails();
  }, []);

  return (
    <div className="flex mt-20 justify-center">
      <div>
        {fetchedDetails && (
          <div className="flex flex-col items-center border border-b border-gray-400 rounded-xl">
            <img
              src={fetchedDetails.image ? fetchedDetails.image.original
                : "https://rb.gy/hlcvlw"}
              alt={fetchedDetails.name} 
              className="w-60 rounded-xl"
              style={{minHeight: "350px", maxHeight: "350px" }}
            />  
            <p className="font-semibold">{fetchedDetails.name}</p>
            <p>
              {fetchedDetails.genres ? fetchedDetails.genres.join(", ") : "N/A"}
            </p>
            <p className="mb-4">
             Rating: {fetchedDetails.rating.average
                ? fetchedDetails.rating.average
                : "N/A"}
            </p>
          </div>
        )}
      </div>
      <form
        className="max-w-md bg-white shadow-md rounded px-8 py-10 mb-4"
        style={{minHeight: "440px", maxHeight: "440px" }}
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="numberOfTickets"
          >
            Number of Tickets:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="numberOfTickets"
            type="number"
            name="numberOfTickets"
            value={formData.numberOfTickets}
            onChange={handleChange}
          />
        </div>
        {(formData.name === "" || formData.email == "") && <p className="text-red-500"> * Name and Email is Required !</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Buy Tickets
          </button>
        </div>
      </form>
    </div>
  );
}

