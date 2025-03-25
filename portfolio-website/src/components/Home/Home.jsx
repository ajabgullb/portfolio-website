import React, { useState, useEffect } from 'react'
import axios from "axios"

export default function Home() {
  const [quotation, setQuatation] = useState(null)
  const apiUrl = "https://api.freeapi.app/api/v1/public/quotes/quote/random"

  const randomQuotation = async () => {
    try {
      const res = await axios.get(apiUrl)
      if (res) {
        return res.data
      }
    } catch (error) {
      console.error("Error", error)
      return {success: false, error: error}
    }
  }

  useEffect(() => {
    const fetchQuotation = async () => {
      const data = await randomQuotation()
      if (data) setQuatation(data);
    }

    fetchQuotation()
  }, [apiUrl])

  return (
    <div>
      {quotation && (
          <div className='my-5'>
            <span className='font-bold'>
            {quotation.data.author}
            </span>
            {": "}
            {quotation.data.content}
          </div>
      )}
    </div>
  )
}

