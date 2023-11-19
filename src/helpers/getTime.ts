export const getTime = (time: number): string => {
  let minutes: number | string = Math.trunc(time / 60);
  let seconds: number | string = time % 60;

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return minutes + ':' + seconds;
};
