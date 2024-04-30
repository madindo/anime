"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef();
    const router = useRouter();

    const handleSearch = (event) => {
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault();
            const keyword = searchRef.current.value;
            return !keyword ? router.push('/') : router.push(`/anime/search/${keyword}`)
        }
    }
    return (
        <div className="flex">
            <input
              className="w-full py-2.5 rounded-md px-2 md:px-4 md:mr-3  text-black"
              placeholder="Find anime"
              ref={searchRef}
              onKeyDown={handleSearch} />

            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleSearch}>
                Find
            </button>
        </div>
    )
}

export default InputSearch