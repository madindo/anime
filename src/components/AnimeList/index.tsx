import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function AnimeList(props : any) {
  const { anime } = props;
  return (
    <>
      { anime.map((item: any) => (
        <div key={item.mal_id} className="" style={{ height: '400px' }}>
          <Link className="cursor-pointer" href={`/anime/${item.mal_id}`}>
              <div className="overflow-hidden" style={{ height: '320px' }} >
                <Image
                    unoptimized={true}
                    alt={item.title}
                    loader={() => item.images.webp.image_url} src={item.images.webp.image_url} width={350} height={350}
                  className="w-full min-h-72 object-cover" />
              </div>
              <div className="overflow-hidden" style={{ height: '70px' }} >
                <h3 className="text-md md:text-xl font-bold p-4">{item.title}</h3>
              </div>
            </Link>
        </div>
      )) }
    </>
  )
}
