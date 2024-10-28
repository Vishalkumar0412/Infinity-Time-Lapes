import React from 'react';
import PostCard from './PostCard';
import Learn from './Learn';
import postcardText from '../../Content/Content';

function LearnArticleDiv() {
 
  const truncateContent = (text,range) => {
    const words = text.split(' ');
    return words.slice(0, range).join(' ') + (words.length > 9 ? '...' : '');
  };

  return (
    <div
      id="articleDiv"
      className="grid grid-cols-2 md:grid-cols-4 md:gap-4 overflow-x-auto px-2"
      style={{ width: '100%' }}
    >
      {postcardText.slice(0, 4).map((text, index) => (
        <PostCard key={index}  content={ <>
            {/* 9-word version for mobile */}
            <span className="block md:hidden">
              {truncateContent(text.content, 9)}
            </span>
            {/* 20-word version for medium screens and above */}
            <span className="hidden md:block">
              {truncateContent(text.content, 20)}
            </span>
          </>} heading={text.heading} />
      ))}
    </div>
  );
}

export default LearnArticleDiv;
