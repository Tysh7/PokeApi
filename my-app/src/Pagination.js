import React from 'react'

// please use pagination provided by UI lib like bootstrap
// you addad react-bootstrap-4-pagination but not using it why?
export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  )
}