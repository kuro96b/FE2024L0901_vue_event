
new Vue({
    el: '#app',
    date(){
        return {
            count: 0
        };
    },
    methods:{
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        }
    }
});