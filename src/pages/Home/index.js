import React from 'react';

import ScreenWrapper from 'components/helper/ScreenWrapper';
import TextAbout from './TextAbout';
import messages from './messages';

const Home = () => {
  return (
    <ScreenWrapper className='home' title={messages.helmet}>
      <div className='container'>
        <TextAbout />
      </div>
    </ScreenWrapper>
  );
};

export default Home;
