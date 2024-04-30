"use client"
import { useState, useEffect } from 'react'
import Image from "next/image";
import Link from "next/link";

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
            {anime.map((item) => (
                <div key={item.mal_id} className="">
                  <Link className="cursor-pointer" href={`/anime/${item.mal_id}`}>
                    <Image
                        unoptimized={true}
                        alt={item.title}
                        loader={() => item.images.webp.image_url} src={item.images.webp.image_url} width={200} height={200}
                        className="w-full max-h-72 object-cover" />
                    <h3 className="text-md md:text-xl font-bold p-4">{item.title}</h3>
                  </Link>
                </div>
            ))}

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
