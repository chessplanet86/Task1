    new Vue({
        el: "#app",
        data() {
            return {
                num_1: 0.1,
                num_2: 0.2,
                result: null
            }
        },
        methods: {
            sum() {
                this.result = Math.round((this.num_1 + this.num_2) * 1000) / 1000;
                alert('Результат: ' + this.result);
            }
        }
    })
