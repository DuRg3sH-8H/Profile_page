import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo'; 

type IconsProps = {
  name: string;
};

const Icons = ({ name }: IconsProps) => {
  switch (name) {
    case 'globe':
      return <Entypo name="globe" size={24} color="#690c23" />;
      default:
        return null;
    }
  };
  
  export default Icons;
  
