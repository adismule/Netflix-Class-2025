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
        <Row title= "Trending Now" fetchUrl={requests.fetchTrending} />
    </>
  )
}

export default RowList