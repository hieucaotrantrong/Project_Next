import React from 'react';
import { Link } from 'react-router-dom';

const PopularSearches = () => {
  const searchTerms = [
    
  ];

  return (
    <div className="">
      
      
      <div className="flex flex-wrap gap-2">
        {searchTerms.map((term) => (
          <Link 
            key={term.id} 
            to={term.link}
            
          >
            {term.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularSearches;










