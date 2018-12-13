new Vue({
    el: '#vue-app',

    data: {
        name: 'Dianne',
        job: 'Softwareentwickler',
        website: 'https://www.linkedin.com/in/dianah-amimo-4b8036107/',
        websiteTag: '<a href="https://www.linkedin.com/in/dianah-amimo-4b8036107/">My LinkedIn Profile</a>',
        age: 24,
        x: 0,
        y: 0,
        name1: '',
        age1: ''
    },

    methods: {
        greet: function (time) {
            return 'Guten ' + time + ' ' + this.name;
        },

        add: function (inc) {
            this.age += inc;
        },

        subtract: function (dec) {
            this.age -= dec;
        },

        updateXY: function (event) {
          this.x = event.offsetX;
          this.y = event.offsetY;
        },

        click : function () {
            alert('You clicked me!!');
        },

        logName: function () {
            console.log('Sie haben ihren Namen eingegeben');
        },

        logAge: function () {
            console.log('Sie haben ihr alter eingegeben');
        }
    }
});
