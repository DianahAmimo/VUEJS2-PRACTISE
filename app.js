new Vue({
    el: '#vue-app',

    data: {
        name: 'Dianne',
        job: 'Softwareentwickler',
        website: 'https://www.linkedin.com/in/dianah-amimo-4b8036107/',
        websiteTag: '<a href="https://www.linkedin.com/in/dianah-amimo-4b8036107/">My LinkedIn Profile</a>'
    },

    methods: {
      greet: function (time) {
          return 'Guten ' + time + ' '+ this.name;
      }
    }
});
