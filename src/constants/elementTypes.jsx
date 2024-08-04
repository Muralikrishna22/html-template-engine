import React from 'react';
import { FaFileAlt, FaImage, FaLink, FaParagraph, FaFolder } from 'react-icons/fa';

export const elementTypes = [
  { type: 'div', icon: <FaFolder /> , name:'Container'},
  { type: 'a', icon: <FaLink /> ,name:'Link'},
  { type: 'p', icon: <FaParagraph />, name:'Text' },
  { type: 'span', icon: <FaFileAlt /> ,name:'Inline Text'},
  { type: 'img', icon: <FaImage /> ,name:'Image'},
];
