export const delay = (delay: number) => {
  return new Promise((resolve) => {
    setInterval(resolve, delay);
  });
};
