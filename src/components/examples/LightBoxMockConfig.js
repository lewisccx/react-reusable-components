const LightBoxConfig1 = {
  carouselConfig: {
    enableThumbs: false,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    infiniteLoop: false,
    showThumbs: false,
    autoPlay: false,
    stopOnHover: false,
    swipeable: false,
    emulateTouch: true,
    thumbWidth: 100,
    selectedItem: 0,
    interval: 0,
    transitionTime: 0,
  },
};

const LightBoxConfig2 = {
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
    thumbWidth: 100,
    interval: 3000,
    transitionTime: 150,
  },
};
export default { LightBoxConfig1, LightBoxConfig2 };
