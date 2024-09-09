import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get(
          'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        );
        const quotes = response.data.quotes;
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        
        // Fade out current quote
        setFade(false);
        
        // Wait for the fade-out to complete before updating the quote
        setTimeout(() => {
          setQuote(randomQuote.quote);
          setAuthor(randomQuote.author);
          setFade(true);
        }, 500); // Match this duration with the CSS transition duration
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
    const interval = setInterval(fetchQuotes, 10000); // Change quote every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col justify-center items-center font-Raleway">
      <div className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <div className="quote-text text-center text-4xl font-bold py-6 text-[oklch(var(--n))]">
          <i className="fa fa-quote-left text-lg"></i>
          <span>"{quote}"</span>
        </div>
        <div className="quote-author text-right font-bold text-lg pb-6">
          - {author}
        </div>
      </div>
    </div>
  );
};

export default QuoteMachine;
