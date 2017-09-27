export default {
    name: 'add-comment',
    props: ['addComment'],
    methods: {
        openModal: function () {
                    if (this.$root.modal.show === false) {
                        this.$root.modal.show = true;
                        $('html').css({
                            'overflow': 'hidden',
                            'margin-right': '17px'
                        });
            }
        },
    }
}