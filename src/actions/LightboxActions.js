import { SET_LIGHTBOX } from './types';

export const setLightbox = (id) => {
  return {
    type: SET_LIGHTBOX,
    payload: id,
  };
};
