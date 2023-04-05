import React, {useState, useEffect} from 'react'
import randomQuotes from 'random-quotes';

const RandomQuotes = () => {

    const [quote, setQuote] = useState({ body: '', author: ''});

    useEffect (() => {
        setQuote(randomQuotes());
        }, []);

    const handleClick = () => {
        setQuote(randomQuotes());
    }
  return (
    <>
    <div className='bg-gray-800 min-h-screen flex flex-col justify-center items-center'>
        <div className='bg-gray-900 rounded-lg p-8 shadow max-w-lg w-full'>
            <h1 className='text-4xl font-bold text-gray-200 mb-6'>
                Random Quote Generator
            </h1>
            <p className='text-xl font-medium text-gray-400 mb-4'>{quote.body}</p>
            <p className='text-lg text-gray-400 mb-4'>{quote.author}</p>

            <button className='bg-gray-800 hover:bg-gray-900 text-gray-500 font-semibold py-2 px-4 rounded mt-8' onClick={handleClick}>
                Generate New Quote
            </button>
        </div>
    </div>
    </>
  )
}

export default RandomQuotes