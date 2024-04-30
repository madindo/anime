"use client"
import React, { useState, useEffect } from 'react'
import Image from "next/image";
export default function AnimeDetail({ params }: { params: string })  {
  const { id: id } = params || {};
  const [anime, setAnime] = useState<any[]>([]);

  const fetchData = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const anime = await response.json();
    setAnime(anime.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="px-4 py-6 max-w-7xl mx-auto space-y-3">
        <h2>Detail Anime</h2>
        <h3 className="text-color-primary text-2xl">{anime?.title} - {anime?.year}</h3>
        <div className='flex'>
          <Image
            unoptimized={true}
            alt={anime?.title}
            loader={() => anime.images?.webp.large_image_url} src={anime.images?.webp.large_image_url} width={600} height={300}
            className="w-3/6" />
          <div className="w-3/6 text-color-primary flex-row space-y-5 px-5">
            <div className="border-color-primary rounded border w-full flex flex-col justify-center items-center">
              <h3>First Aired</h3>
              <p>{anime?.aired?.string}</p>
            </div>
            <div className="border-color-primary rounded border w-full flex flex-col justify-center items-center">
              <h3>Duration</h3>
              <p>{anime?.duration}</p>
            </div>
            <div className="border-color-primary rounded border w-full flex flex-col justify-center items-center">
              <h3>Episode</h3>
              <p>{anime?.episodes}</p>
            </div>
            <div className="border-color-primary rounded border w-full flex flex-col justify-center items-center">
              <h3>Favorites</h3>
              <p>{anime?.favorites}</p>
            </div>
            <div className="border-color-primary rounded border w-full flex flex-col justify-center items-center">
              <h3>Rank</h3>
              <p>{anime?.rank}</p>
            </div>
            <div className="border-color-primary rounded w-full flex flex-col justify-center items-center">
              <h3>Tags</h3>
              <div>{ anime?.genres && anime?.genres.map((item, index) => {
                return (
                  <div key={index} className="px-3 mx-2 inline-block border mb-2">
                    {item.name}
                  </div>
                )
              })}</div>
            </div>
            <div className="flex pt-4 sm:flex-nowrap flex-col sm:flex-row gap-4 text-color-primary">
              <p className="text-justify text-lg">{anime?.synopsis}</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
