'use client';

import React, { useState } from 'react'

import Image from 'next/image';
import {Input} from '@/components/ui/input';

const Search = () => {
  const [query, setQuery] = useState('');

  return (
    <div className='search'>
      <div className="search-input-wrapper">
        <Image 
        src="/search.svg"
        alt="Search"
        width={24}
        height={24}
        />
        <Input
        value={query}
        placeholder='Search...'
        className='search-input'
        onChange={(e) => setQuery(e.target.value)}
        />

        <ul className="search-result">
          <li className="flex items-center justify-between">
            <div className="flex cursor-pointer items-center gap-4">
              <p className='subtitle-2 line-clamp-1 text-light-100'>

              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Search
