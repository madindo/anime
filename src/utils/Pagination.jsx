import React from 'react'

export default function Pagination({ page, lastPage, setPage }) {

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1);
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1);
    }

    return (
    <>
        <div className="flex">
            {page > 1 && (
                <button onClick={handlePrevPage} className="text-color-primary py-2 px-4 transition-all hover:text-color-accent ">Previous</button>
            )}
                <p className="text-color-primary py-2 px-4 ">{page} of {lastPage}</p>
            { page < lastPage && (
                    <button onClick={handleNextPage} className="text-color-primary py-2 px-4 transition-all hover:text-color-accent ">Next</button>
            )}
        </div>
    </>
  )
}
