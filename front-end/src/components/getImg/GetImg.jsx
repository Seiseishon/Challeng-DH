export function importarImg(img) {
  try {
    return require(`${img}`);
  } catch (error) {
    return null;
  }
};