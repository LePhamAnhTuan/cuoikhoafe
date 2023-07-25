export const luuXuongLocal = (ten, data) => {
  const newData = JSON.stringify(data);
  localStorage.setItem(ten, newData);
};
export const layDuLieuLocal = (ten) => {
  const value = localStorage.getItem(ten);
  return JSON.parse(value) ? JSON.parse(value) : null;
};
export const xoaLocal = (ten) => {
  localStorage.removeItem(ten);
};
