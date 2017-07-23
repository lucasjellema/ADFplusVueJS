function initVue() {
     console.log("Initialize Vue in VueContent.js");
     new Vue({
      el: '#app',
      data: {
        greeting: 'Welcome to your hybrid ADF and Vue.js app!',
        docsURL: 'http://vuejs.org/guide/',
      },
      methods: {
        humanizeURL: function (url) {
          return url
            .replace(/^https?:\/\//, '')
            .replace(/\/$/, '')
        }
      }
      }) /* new Vue */
}