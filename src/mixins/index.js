module.exports = {
  'COMMON_ACTION': {
    created () {
      this.get()
    },
    methods: {
      setImages (data) {
        var imagesData = []
        data.forEach(function (v, i) {
          imagesData.push({'src': 'http://www.wdexam.com/' + '/Uploads/' + v.thumb, w: v.width, h: v.height, 'title': v.title, id: v.id})
        })
        this.$store.commit('setImages', imagesData)
      }
    }
  }
}
