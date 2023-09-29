import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo'; // Import FontAwesome icons

type IconsProps = {
  name: string;
};

const Icons = ({ name }: IconsProps) => {
  switch (name) {
    case 'globe':
      return <Entypo name="globe" size={30} color="gold" />;
      default:
        // Handle the case when 'name' doesn't match any known icon
        return null; // You can return null or any other fallback content
    }
  };
  
  export default Icons;
  
