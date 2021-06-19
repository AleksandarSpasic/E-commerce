import React from 'react';
import FormatMessage from 'i18n/FormatMessage';
import messages from './messages';

const TextAbout = () => 
  <div className='home_about'>
    <h1>
      <FormatMessage>{messages.demo}</FormatMessage> <br />{' '}
      <FormatMessage>{messages.ecommerce}</FormatMessage>
    </h1>
    <p>
      <FormatMessage>{messages.about}</FormatMessage> <br />{' '}
      <FormatMessage>{messages.about2}</FormatMessage>
    </p>
  </div>

export default TextAbout;
