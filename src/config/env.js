const prod = false;

export const config = prod ? {
  api: 'http://admin.tsgcasting.com'
} : {
  api: 'http://localhost:8000'
};
