import { Server } from "miragejs";

new Server({
  routes() {
    this.get("/api/cards", ()=>{
        return JSON.stringify([
          {
            id: 1,
            title: "1 Adult-only sailing trip to Papagayo with lunch",
            description:
              "Discover the delights of Lanzarote with this full day tour. Enjoy views of this unique with this full day tour ...",
            type: "Outdoor Classes",
            img: "item_picture_01.png",
            isLiked: false,
            ratingVidodo: "4.2",
            ratingGeneral: "4.5",
            duration: "20",
            price: "24.00",
          },
          {
            id: 2,
            title: "2 Adult-only sailing trip to Papagayo with lunch",
            description:
              "Discover the delights of Lanzarote with this full day tour. Enjoy views of this unique with this full day tour ...",
            type: "Outdoor Classes",
            img: "cat.jpg",
            isLiked: false,
            ratingVidodo: "4.2",
            ratingGeneral: "4.5",
            duration: "20",
            price: "25.00",
          },
          {
            id: 3,
            title: "3 Adult-only sailing trip to Papagayo with lunch",
            description:
              "Discover the delights of Lanzarote with this full day tour. Enjoy views of this unique with this full day tour ...",
            type: "Trip",
            img: "item_picture_01.png",
            isLiked: false,
            ratingVidodo: "4.2",
            ratingGeneral: "4.5",
            duration: "90",
            price: "100.00",
          },
          {
            id: 4,
            title: "4 Adult-only sailing trip to Papagayo with lunch",
            description:
              "Discover the delights of Lanzarote with this full day tour. Enjoy views of this unique with this full day tour ...",
            type: "Outdoor Classes",
            img: "item_picture_01.png",
            isLiked: false,
            ratingVidodo: "1.2",
            ratingGeneral: "2.5",
            duration: "40",
            price: "27.00",
          },
          {
            id: 5,
            title: "5 Adult-only sailing trip to Papagayo with lunch",
            description:
              "Discover the delights of Lanzarote with this full day tour. Enjoy views of this unique with this full day tour ...",
            type: "Outdoor Classes",
            img: "item_picture_01.png",
            isLiked: false,
            ratingVidodo: "1.2",
            ratingGeneral: "2.5",
            duration: "40",
            price: "27.00",
          },
          {
            id: 6,
            title: "6 Adult-only sailing trip to Papagayo with lunch",
            description:
              "Discover the delights of Lanzarote with this full day tour. Enjoy views of this unique with this full day tour ...",
            type: "Outdoor Classes",
            img: "item_picture_01.png",
            isLiked: false,
            ratingVidodo: "1.2",
            ratingGeneral: "2.5",
            duration: "40",
            price: "27.00",
          },
          {
            id: 7,
            title: "7 Adult-only sailing trip to Papagayo with lunch",
            description:
              "Discover the delights of Lanzarote with this full day tour. Enjoy views of this unique with this full day tour ...",
            type: "Outdoor Classes",
            img: "item_picture_01.png",
            isLiked: false,
            ratingVidodo: "1.2",
            ratingGeneral: "2.5",
            duration: "40",
            price: "27.00",
          },
        ]);
    })
  },
});
