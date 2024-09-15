import React from 'react';
import { FaFileAlt, FaImage, FaLink, FaParagraph, FaSquare } from 'react-icons/fa';
import { BiText } from "react-icons/bi";


export const elementTypes = [
  { type: 'div', icon: <FaSquare /> , name:'Container'},
  // { type: 'a', icon: <FaLink /> ,name:'Link'},
  { type: 'p', icon: <BiText />, name:'Text' },
  // { type: 'span', icon: <FaFileAlt /> ,name:'Inline Text'},
  // { type: 'img', icon: <FaImage /> ,name:'Image'},
];
