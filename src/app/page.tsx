"use client"
import { useState, useEffect } from 'react'
import AnimeList from "../components/AnimeList"
import Pagination from "../utils/Pagination"

export default function Home() {

    const [page, setPage] = useState<number>(1);
    const [lastpage, setLastpage] = useState<number>(1);
    const [anime, setAnime] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {

      setIsLoading(true);
      const response = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`,
        {
          cache: 'force-cache',
          next: {
            tags: ["listing"]
          }
        }
      )

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setIsLoading(false);

      setAnime(data.data)
      setLastpage(data.pagination.last_visible_page)
    }

    useEffect(() => {
        fetchData()
    }, [page])

  return (
    <main>
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2>Listing Anime</h2>
        {isLoading && anime  && <p className='text-center'>Loading...</p> }
        { !isLoading && (
          <div>
            <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-2 gap-4">
              <AnimeList anime={anime} />
            </div>
            <Pagination page={page} lastPage={lastpage} setPage={setPage} />
          </div>
        )}
        </div>
    </main>
  );
}
