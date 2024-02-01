import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import banner from "/banner.png"
import download from "/banner.jpg"

export default function Home() {

    const [fetchedData, setFetchedData] = useState()

    useEffect(() => {
        const getFetchedData = async () => {
            let response = await fetch('https://api.tvmaze.com/search/shows?q=all')
            response.json().then(shows => setFetchedData(shows))
        }
        getFetchedData()
    },[])

    let navigate = useNavigate()
    const handleSummary = (id) => {
      navigate('/Summary', {state: id})
    }

  return (
    <>
      <img src={download} alt=""
      style={{ height: "600px", width: "100vw", objectFit: "cover"}} />
      <div className='flex flex-wrap mx-20 justify-center'>
      {fetchedData && fetchedData.slice(1).map(showData => {
          return (
             <div key={crypto.randomUUID()} className='my-10 mx-4 
             transition ease-in-out delay-25 hover:-translate-y-1 hover:scale-105 duration-300 bg-gray-300 hover:shadow-lg
              hover:shadow-sky-500 border-b border-black cursor-pointer rounded-t-3xl rounded-b-3xl'>
                <img src={showData.show.image ? showData.show.image.original : 'https://rb.gy/iu492l'} 
                alt={showData.show.image && showData.show.name}
                className='w-80 rounded-xl' />
                <p>{showData.show.name}</p>
                <button className='bg-sky-600 rounded-xl p-2'
                onClick={() => handleSummary(showData.show.id)}>
                   For More Details </button>
            </div>
          )
        } ) }
      </div>
    </>
  )
}
