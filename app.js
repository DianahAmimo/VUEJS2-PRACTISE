new Vue({
    el: '#vue-app',

    data: {
        name: 'Dianne',
        job: 'Softwareentwickler'
    },

    methods: {
      greet: function (time) {
          return 'Guten ' + time + ' '+ this.name;
      }
    }
});
