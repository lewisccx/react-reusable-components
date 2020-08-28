import { TOUCH_ACTIVATION, MOUSE_ACTIVATION } from "react-image-magnifiers";
const LightBoxConfig1 = {
  magnifierConfig: {
    mouseActivation: MOUSE_ACTIVATION.CLICK,
    touchActivation: TOUCH_ACTIVATION.TAP,
    dragToMove: true,
  },
  carouselConfig: {
    enableThumbs: false,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    infiniteLoop: false,
    autoPlay: false,
    stopOnHover: false,
    swipeable: false,
    emulateTouch: true,
    selectedItem: 0,
    interval: 0,
    transitionTime: 0,
  },
};

const LightBoxConfig2 = {
  magnifierConfig: {
    mouseActivation: MOUSE_ACTIVATION.CLICK,
    touchActivation: TOUCH_ACTIVATION.TAP,
    dragToMove: true,
  },
  itemCarouselConfig: {
    numberOfCards: 3,
    infiniteLoop: false,
    gutter: 12,
    showSlither: false,
    firstAndLastGutter: true,
    activePosition: "center",
    chevronWidth: 60,
    outsideChevron: true,
    alwaysShowChevrons: false,
    slidesToScroll: 1,
    disableSwipe: false,
  },
  carouselConfig: {
    enableThumbs: true,
    showArrows: true,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: false,
    autoPlay: false,
    stopOnHover: false,
    swipeable: true,
    emulateTouch: true,
    interval: 3000,
    transitionTime: 150,
  },
};
export default { LightBoxConfig1, LightBoxConfig2 };
