"use client"
import React, { useState, useEffect } from 'react'
import AnimeList from "../../../../components/AnimeList"
import Pagination from "../../../../utils/Pagination"

export default function Search({ params }: { params: string}) {

  const { search: search } = params || {};

  const [page, setPage] = useState<number>(1);
  const [lastpage, setLastpage] = useState<number>(1);
  const [anime, setAnime] = useState<any[]>([]);

  const fetchData = async () => {
    const decodedKeyword = decodeURI(search);
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${decodedKeyword}&page=${page}`)
    const data = await response.json();
    setAnime(data.data)
    setLastpage(data.pagination.last_visible_page)
  }

   useEffect(() => {
     fetchData()
   }, [page])

   return (
     <main>
       <div className="container max-w-screen-xl mx-auto px-4">
         <h2>Search Anime</h2>
          <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-2 gap-4">
            <AnimeList anime={anime} />
          </div>
          <Pagination page={page} lastPage={lastpage} setPage={setPage} />
       </div>
     </main>
   )
 }
