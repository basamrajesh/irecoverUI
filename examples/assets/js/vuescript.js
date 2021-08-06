const app = Vue.createApp({
    // template: ``,
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {
            const response = await fetch('https://randomuser.me/api/')
            const { results } = await response.json()
            console.log(results);

            this.firstName = results[0].name.first,
                this.lastName = results[0].name.last,
                this.email = results[0].email,
                this.gender = results[0].gender,
                this.picture = results[0].picture.large
        },
    },
})
app.mount('#appHello')


// const app2 = Vue.createApp({
//     // template: ``,
//     data() {
//         return {
//             firstName: 'Basam'
//         }
//     },
// })
// app2.mount('#app2')

var baseUrl = 'http://ec2-15-207-108-244.ap-south-1.compute.amazonaws.com:7878/';
fetch(baseUrl + '/api/user/{userId}?userId=5').then(response => console.log(response.json()))