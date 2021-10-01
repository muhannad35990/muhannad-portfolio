export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    tranisition: {
      duration: 2,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,

    transition: { ease: "easeOut", duration: 1 },
  },
};

export const animateFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 2 },
  },
};
export const animateSlideDown = {
  hidden: { y: -100 },
  show: { y: 0, transition: { duration: 2 } },
};
export const animateSlideUp = {
  hidden: { y: 100 },
  show: { y: 0, transition: { duration: 1 } },
};
export const animateSlideLeft = {
  hidden: { x: 100 },
  show: { x: 0, transition: { duration: 2 } },
};
export const animateSlideright = {
  hidden: { x: "-130%" },
  show: { x: "0%", transition: { duration: 1 } },
};
export const animateZoomOut = {
  hidden: { scale: 1.5, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 3 } },
};
export const animateWidth = {
  hidden: { width: 0 },
  show: { width: "100%", transition: { duration: 0.5 } },
};
export const animatePath = {
  hidden: { pathLength: 0, pathOffset: 1 },
  show: { pathLength: 1, pathOffset: 0, transition: { duration: 4 } },
};
export const animateSlider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { type: "tween", ease: "easeOut", duration: 1 },
  },
};

export const animateSliderContainer = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
      duration: 1,
    },
  },
};
