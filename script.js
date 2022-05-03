//https://flynn.boolean.careers/exercises/api/random/mail

const app =new Vue({
    el: '#app',
    data:{
        emails:[]
    },
    methods: {

    },
    created(){
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
                //handle success
                    console.log(res.data.response);
                    this.emails.push(res.data.response);
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
        }
})