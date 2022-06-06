const app = new Vue({
    el: "#app",
    data: {
        email: []
    },
    mounted(){
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (result) {
                const emailAdd = result.data.response;
                this.emailAdd.push(email);
            });
        }
    }

});