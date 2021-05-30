export default {
  actions: {
    async fetchPhotos (ctx) {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=24')
      const photos = await res.json()

      ctx.commit('updatePhotos', photos)
    },
    async fetchPhoto (ctx, id) {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos/' + id)
      const photo = await res.json()

      ctx.commit('updatePhoto', photo)
    }
  },
  mutations: {
    updatePhotos (state, photos) {
      state.photos = photos
    },
    updatePhoto (state, photo) {
      state.photo = photo
    }
  },
  state: {
    photos: [],
    photo: {}
  },
  getters: {
    getPhotos (state) {
      return state.photos
    },
    getPhoto (state) {
      return state.photo
    }
  }
}
