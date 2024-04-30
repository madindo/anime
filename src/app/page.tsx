"use client"
import { useState, useEffect, Component } from 'react'
import AnimeList from "../components/AnimeList";

export default function Home() {

    const [page, setPage] = useState<number>(1);
    const [lastpage, setLastpage] = useState<number>(1);
    const [anime, setAnime] = useState<any[]>([]);

    const fetchData = async () => {
        const response = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`)
        const data = await response.json();
        setAnime(data.data)
        setLastpage(data.pagination.last_visible_page)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1);
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1);
    }

  return (
    <main>
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-2 gap-4">
          <AnimeList anime={anime} />
            <div className="flex justify-center items-center py-8 gap-2">
              {page > 1 && (
                  <button onClick={handlePrevPage} className="text-color-primary py-2 px-4 transition-all hover:text-color-accent">Previous</button>
              )}
              <p className="text-color-primary py-2 px-4">{page} of {lastpage}</p>
              {page < lastpage && (
                  <button onClick={handleNextPage} className="text-color-primary py-2 px-4 transition-all hover:text-color-accent">Next</button>
              )}
          </div>
        </div>
      </div>
    </main>
  );
}
