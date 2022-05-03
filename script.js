//https://flynn.boolean.careers/exercises/api/random/mail

const app =new Vue({
    el: '#app',
    data:{
        emails:[]
    },
    methods: {

    },
    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
            (response)=>{
                //handle success
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
            })
    }
})