export const pageAnimation = {
  hidden: {
    y: 400,
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    tranisition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 400,
  },
};
export const animateFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 2 } },
};
export const animateSlideDown = {
  hidden: { y: -50 },
  show: { y: 0, transition: { duration: 1 } },
};
export const animateSlideUp = {
  hidden: { y: 50 },
  show: { y: 0 },
};
export const animateSlideLeft = {
  hidden: { x: 50 },
  show: { x: 0, transition: { duration: 1 } },
};
export const animateSlideright = {
  hidden: { x: -50 },
  show: { x: 0, transition: { duration: 1 } },
};
export const animateZoomOut = {
  hidden: { scale: 1.2 },
  show: { scale: 1, transition: { duration: 2 } },
};
export const animateWidth = {
  hidden: { width: 0 },
  show: { width: "100%", transition: { duration: 0.5 } },
};
