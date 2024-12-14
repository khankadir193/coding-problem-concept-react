import React, { useEffect } from 'react';

const BrowserEvent = () => {
  useEffect(() => {
    const button = document.getElementById('btn');

    const handleClick = () => {
      document.body.style.backgroundColor = 'lightgreen';
      window.history.pushState({}, null, null);
    };

    button.addEventListener('click', handleClick);

    const handlePopState = () => {
      console.log('User clicked back button by Abdul Kadir Khan');
      document.body.style.backgroundColor = 'white';
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      // Cleanup event listeners when the component unmounts
      button.removeEventListener('click', handleClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div>
      <button id="btn">Change Background Color</button>
      {/* Your other React content */}
    </div>
  );
};

export default BrowserEvent;
