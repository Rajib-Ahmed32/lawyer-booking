import React, { useEffect } from 'react';
import NotFound from '../features/not-found/NotFound';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact';  
  }, []);  

  return (
    <div>
      <NotFound />
    </div>
  );
};

export default Contact;
