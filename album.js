new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "f1.jpg",
          img2: "f2.jpg",
          img3: "f3.jpg",
          title: "Friends",
          isOpen: false,
        },
        {
          img1: "f4.jpg",
          img2: "f5.jpg",
          img3: "f6.jpg",
          title: "Friends",
          isOpen: false,
        },
        {
          img1: "f7.jpg",
          img2: "f8.jpg",
          img3: "f9.jpg",
          title: "Friends",
          isOpen: false,
        },
        {
          img1: "f10.jpg",
          img2: "f11.jpg",
          img3: "f12.jpg",
          title: "Friends",
          isOpen: false,
        },
        {
          img1: "f13.jpg",
          img2: "f14.jpg",
          img3: "f15.jpg",
          title: "Friends",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});