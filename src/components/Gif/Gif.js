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
    const response = await giphyFetch.search(query);
    const { data } = response
    setGif(data[0]);
  }, []);
  return gif && <Gif gif={gif} width={200} />;
}