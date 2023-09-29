import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo'; 

type IconsProps = {
  name: string;
};

const Icons = ({ name }: IconsProps) => {
  switch (name) {
    case 'globe':
      return <Entypo name="globe" size={30} color="gold" />;
      default:
        return null;
    }
  };
  
  export default Icons;
  
