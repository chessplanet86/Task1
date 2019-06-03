    new Vue({
        el: "#app",
        data() {
            return {
                num_1: 0.1,
                num_2: 0.2,
                result: null,
                num: 15 // число знаков после запятой
            }
        },
        methods: {
            sum() {
                
                var accuracy = Math.pow(10, this.num); // переменная, отвечающая за точность вычисления
                this.result = Math.round((this.num_1 + this.num_2) * accuracy) /accuracy;
                alert('Результат: ' + this.result);
            }
        }
    })
