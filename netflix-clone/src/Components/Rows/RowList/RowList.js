import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

function RowList() {
  return (
    <>
        <Row 
        title = "NETFLIX ORIGINALS"
        fetchUrl = {requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
        <Row title= "Trending Now" fetchUrl={requests.fetchTrending} 
        isLargeRow={true}
        />
        <Row title= "Top Rated" fetchUrl={requests.fetchTopRatedMovies} 
        isLargeRow={true}
        />
        <Row title= "Action Movies" fetchUrl={requests.fetchActionMovies} 
        isLargeRow={true}
        />
        <Row title= "Comedy Movies" fetchUrl={requests.fetchComedyMovies} 
        isLargeRow={true}
        />
        <Row title= "Horror Movies" fetchUrl={requests.fetchHorrorMovies} 
        isLargeRow={true}
        />
        <Row title= "Romance Movies" fetchUrl={requests.fetchRomanceMovies} 
        isLargeRow={true}
        />
        <Row title= "Documentaries" fetchUrl={requests.fetchDocumentaries} 
        isLargeRow={true}
        />
        <Row title= "Tv Shows" fetchUrl={requests.fetchTvShows} 
        isLargeRow={true}
        />
    </>
  )
}

export default RowList