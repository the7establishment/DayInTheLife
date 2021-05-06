import React from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Gif } from '@giphy/react-components'
import { useState } from 'react'
import { useAsync } from 'react-async-hook'

const giphyFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY)

export default function Giphy(props) {
  const [gif, setGif] = useState(null)
  const { query } = props
  useAsync(async () => {
    const random = Math.floor(Math.random() * 50);
    console.log(random)
    const { data } = await giphyFetch.search(query);
    console.log(data)
    setGif(data[random]);
  }, []);
  return gif && <Gif gif={gif} width={200} />;
}