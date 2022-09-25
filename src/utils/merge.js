import { deepmerge } from '@mui/utils';
import React from 'react';

export const merge = (...obj) => {
  let temp = {};
  obj.forEach((ele) => {
    temp = deepmerge(temp, ele);
  });
  return temp;
};
