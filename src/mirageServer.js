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
            img: "item_picture_01.png",
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
    this.get('/api/card/:id', (schema, request)=>{
      const id = request.params.id
      switch (id) {
        case '1':
          return JSON.stringify(
            {
              id: '1',
              title: '2-Hour Surfing Experience for Beginners in Famara',
              price: '15.89',
              type: 'Outdoor Classes',
              ratingVidodo: '4.5',
              reviewsVidodo: '67',
              ratingGeneral: '4.2',
              reviewsGeneral: '25',
              location: 'Puerto del Carmen, Lanzarote',
              photos: [
                "photo_main.png",
                "other 1.jpg",
                "other 2.jpg",
                "other 3.jpeg",
                "other 4.jpg",
                "other 5.jpg",
              ],
              shortDesc: `Spend a fantastic day exploring Lanzarote. Explore the picturesque town
              of Yaisa on the edge of the volcano, before you have the opportunity to
              appreciate the volcanic crater on Mount Timanfaya, or just have a cup of
              coffee with milk (cafe con leche).`,
              about: {
                cancellation: {
                  title: `Cancellation 24 hours before the start of the activity with a
                  full refund`,
                  desc: ''
                },
                duration: {
                  title: 'Duration: 6h',
                  desc: 'Start time 11:30'
                },
                vouchers: {
                  title: 'Paper and mobile vouchers accepted',
                  desc: ''
                },
                tourGuide: {
                  title: 'Tour guide',
                  desc: 'Spanish, English, French, German'
                },
                notSuitable: {
                  title: 'Not suitable for:',
                  desc: 'People in wheelchairs'
                },
                transfer: {
                  title: 'With transfer',
                  desc: `Pick-up at or near your hotel in Lanzarote. Meet at Playa Blanca
                  at 8:40 am. Puerto Calero and Puerto del Carmen at 9:10 am.
                  Arrecife at 9:40 am Costa Teguise at 9:55 am`
                }
              },
              sigths: [
                'Get panoramic views of Lanzarote\'s north coast as you cross La Graciosa',
                'Admire white sand beaches and clear waters',
                'Swimming and snorkeling in the natural marine reserve',
              ],
              fullDesc: `Spend a fantastic day exploring Lanzarote. Explore the picturesque
                town of Yaisa on the edge of the volcano, before you have the
                opportunity to appreciate the volcanic crater on Mount Timanfaya, or
                just have a cup of coffee with milk (cafe con leche). Then head west
                to the imposing rocky shores of Los Hervideros with a unique structure
                formed by volcanic eruptions. Explore Lago Verde, a green lake in the
                middle of El Golfo's black sandy beach. Admire the bay, formed from
                tuff and lava фыв фыв фыв фыв фыв фыв фы вфы вф фвы вфы вфы вфы вфы фы
                вфы вфы вфы в фывфы вфы вфы фы вфыв фы вфы вфы вфыв фыв фы вфы`,
              included: [
                'Visiting volcanoes',
                'Entrance ticket to Jameos del Agud',
                'Travel insurance for the duration of the tour',
                'Guide',
                'Bus transfers',
              ],
              notIncluded: [
                'Camel ride: 6 € for 25 minutes.'
              ],
              importantInfo: [
                `Sail to La Graciosa Island and enjoy the quiet beaches on a 6-hour journey. 
                Swim, kayak and relax in the blue waters of the natural park and marine reserve. 
                Benefit from complimentary drinks and a delicious lunch.`
              ],
              covidInfo: {
                measures:[
                  'Regular cleaning is carried out at all points of interaction with customers',
                  'All participants are required to wear protective masks',
                  'Regular cleaning is carried out at all points of interaction with customers',
                  'All participants are required to wear protective masks',
                ],
                demands:[
                  'Regular cleaning is carried out at all points of interaction with customers',
                  'All participants are required to wear protective masks',
                  'Regular cleaning is carried out at all points of interaction with customers',
                  'All participants are required to wear protective masks',
                ]
              },
              meetingPoint: 'Пожалуйста, обратитесь в кассу Lineas Romero с подтверждением,чтобы забрать посадочный талон за 15 минут до отправления.',
            })
          break;
            
        default:
          return {}
      }
    })
  },
});
