import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      headerlists: [
        {
          id: 1,
          name: 'Artwork',
          numbers: 98,
        },
        {
          id: 2,
          name: 'Auction',
          numbers: 12,
        },
        {
          id: 3,
          name: 'Artist',
          numbers: 18,
        },
      ],

      profiles: [
        {
          id: 1,
          name: 'name',
          image: 'https://picsum.photos/id/11/10/6',
          profile: 'https://cdn.vuetifyjs.com/images/john.png',
          rating: '2,333',
          text: '1 to 8',
          icon: 'cards-diamond',
        },
        {
          id: 2,
          name: 'name',
          image: 'https://picsum.photos/id/11/10/7',
          profile: 'https://cdn.vuetifyjs.com/images/john.png',
          rating: '2,333',
          text: '1 to 8',
          icon: 'cards-diamond'
        },
        {
          id: 3,
          name: 'name',
          image: 'https://picsum.photos/id/11/10/8',
          profile: 'https://cdn.vuetifyjs.com/images/john.png',
          rating: '2,333',
          text: '1 to 8',
          icon: 'cards-diamond'
        },
      ],

      lists: [
        {
          id: 1,
          image: 'https://picsum.photos/id/12/10/6',
          icon: 'cards-diamond',
          name: 'name',
          rating: 24.4,
          count: '3,343',
          icon1: 'mdi-check-circle'
        },
        {
          id: 2,
          image: 'https://picsum.photos/id/13/10/6',
          icon: 'cards-diamond',
          name: 'name',
          rating: 24.4,
          count: '3,343'
        },
        {
          id: 3,
          image: 'https://picsum.photos/id/14/10/6',
          icon: 'cards-diamond',
          name: 'name',
          rating: 24.4,
          count: '3,343',
          icon1: 'mdi-check-circle'
        },
        {
          id: 4,
          image: 'https://picsum.photos/id/15/10/6',
          icon: 'cards-diamond',
          name: 'name',
          rating: 24.4,
          count: '3,343'
        },
        {
          id: 5,
          image: 'https://picsum.photos/id/16/10/6',
          icon: 'cards-diamond',
          name: 'name',
          rating: 24.4,
          count: '3,343'
        },

      ],

      introduce: [
        {
          id: 1,
          name: 'name',
          title: 'this is title',
          bg_image: 'https://picsum.photos/id/10/10/6',
          profile_img: 'https://randomuser.me/api/portraits/women/85.jpg',
          text: 'total 54 items',
          images: ['https://picsum.photos/id/9/10/6', 'https://picsum.photos/id/8/10/6', 'https://picsum.photos/id/7/10/6']
        },
        {
          id: 2,
          name: 'name',
          bg_image: 'https://picsum.photos/id/12/10/6',
          title: 'this is title',
          profile_img: 'https://randomuser.me/api/portraits/men/85.jpg',
          text: 'total 54 items',
          images: ['https://picsum.photos/id/6/10/6', 'https://picsum.photos/id/5/10/6', 'https://picsum.photos/id/4/10/6']
        },
        {
          id: 3,
          name: 'name',
          bg_image: 'https://picsum.photos/id/11/10/6',
          title: 'this is title',
          profile_img: 'https://cdn.vuetifyjs.com/images/john.png',
          text: 'total 54 items',
          images: ['https://picsum.photos/id/1/10/6', 'https://picsum.photos/id/2/10/6', 'https://picsum.photos/id/3/10/6']
        },
      ],

      portfolios: [
        {
          id: 1,
          name: 'Artcripto',
          text1: '3h 50min 2s left',
          text2: 'Place a bid',
          detail: '1 of 323',
          rating: '33ETH',
          icon: 'cards-diamond',
          profile: 'https://picsum.photos/id/11/10/6',
          avatars: ['https://randomuser.me/api/portraits/women/85.jpg', 'https://randomuser.me/api/portraits/men/85.jpg', 'https://cdn.vuetifyjs.com/images/john.png']
        },
        {
          id: 2,
          name: 'Artcripto',
          text1: '3h 50min 2s left',
          text2: 'Place a bid',
          detail: '1 of 323',
          rating: '33ETH',
          icon: 'cards-diamond',
          profile: 'https://picsum.photos/id/11/10/7',
          avatars: ['https://randomuser.me/api/portraits/women/85.jpg', 'https://randomuser.me/api/portraits/men/85.jpg', 'https://cdn.vuetifyjs.com/images/john.png']
        },
        {
          id: 3,
          name: 'Artcripto',
          text1: '3h 50min 2s left',
          text2: 'Place a bid',
          detail: '1 of 323',
          rating: '33ETH',
          icon: 'cards-diamond',
          profile: 'https://picsum.photos/id/11/10/8',
          avatars: ['https://randomuser.me/api/portraits/women/85.jpg', 'https://randomuser.me/api/portraits/men/85.jpg', 'https://cdn.vuetifyjs.com/images/john.png']
        },
        {
          id: 4,
          name: 'Artcripto',
          text1: '3h 50min 2s left',
          text2: 'Place a bid',
          detail: '1 of 323',
          rating: '33ETH',
          icon: 'cards-diamond',
          profile: 'https://picsum.photos/id/11/10/9',
          avatars: ['https://randomuser.me/api/portraits/women/85.jpg', 'https://randomuser.me/api/portraits/men/85.jpg', 'https://cdn.vuetifyjs.com/images/john.png']
        },
      ],

      categorys: ['All category', 'Art', 'Celebrities', 'Gaming', 'Sport', 'Music', 'Crypto'],

    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
