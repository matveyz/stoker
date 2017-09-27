import addComment from '../components/add-comment/add-comment.vue';
import modalAddComment from '../components/modal_add-comment/modal_add-comment.vue';
import Vue from 'vue';

var comments;
comments = new Vue({
    el: '#comments',
    components: {
        'modal_add-comment': modalAddComment,
        'add-comment': addComment,
    },
    data: {
        addComment: {
            leftButton: true,
            name: "add-comment",
            btnName: "Написать комментарий"
        },
        modal: {
            show: false
        }
    },
});
