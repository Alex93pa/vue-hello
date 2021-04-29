const app = new Vue(
    {
    el: '#vueContainer',
    data: {
        message: " ",
        text: "",
        bg_img: "",
        },
        methods: {
            _img: function() {
                if(!this.bg_img){
                    this.bg_img = "background-image: none"

                } else {
                    this.bg_img = ""
                }
            },
        }
    }
);