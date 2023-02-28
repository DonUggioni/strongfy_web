import React from 'react';
import Text from '../UI/typography/Text';

function NoData({ message }) {
  return (
    <div>
      <Text style={'text-textColor text-center'}>{message}</Text>
    </div>
  );
}

export default NoData;
