import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function AnimeList(props : any) {
  const { anime } = props;
  return (
    <>
      { anime.map((item: any) => (
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
      )) }
    </>
  )
}
