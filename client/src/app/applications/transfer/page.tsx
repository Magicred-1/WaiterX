import React from 'react';

const page = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        src='https://waiter-x-hyperlane.vercel.app/'
        width='95%'
        height='300px'
        className='rounded-3xl bg-transparent'
        style={{ border: 'none' }}
      >
        {/* Message de secours pour les navigateurs qui ne supportent pas les iframes */}
        <p>Votre navigateur ne supporte pas les iframes.</p>
      </iframe>
    </div>
  );
};

export default page;
