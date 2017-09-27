<template id="modal_add-comment">
    <transition name="modal">
        <div class="modal-mask" @click="closeModal()">
            <div class="modal-container">
                <div class="add-comment-form new-modal-window" id="add-comment-form" @click.stop>
                    <div class="modal-content-wrapper">
                        <div class="modal-content">
                            <div class="modal-header">
                                <div class="modal-title text-header-highest">
                                    Комментарий
                                </div>
                                <div class="modal-desc text-small new-block">
                                    Насколько вы довльны услугами данной компании
                                </div>
                            </div>
                            <div class="like-or-dislike-modal">
                                <button class="like-button">
                                    <svg class="icon icon-clock">
                                        <use xlink:href="svg/svg.svg#icon-like"></use>
                                    </svg>
                                </button>
                                <button class="dislike-button">
                                    <svg class="icon icon-clock">
                                        <use xlink:href="svg/svg.svg#icon-dislike"></use>
                                    </svg>
                                </button>
                            </div>
                            <div class="comment-textarea-block">
                                <textarea name="comment-text" id="comment-text" cols="20" rows="6"
                                          placeholder="Текст сообщения"
                                          style="border: solid 1px #d1d0d0;
                                          -webkit-border-radius: 4px;
                                          -moz-border-radius: 4px;
                                          border-radius: 4px;
                                          width: 100%;
                                          padding: 1em;
                                          margin-top: 1em;
                                          resize: none;"></textarea>
                            </div>
                            <div class="button-send-comment">
                                <button @click="closeModal()" class="btn-bg-secondary">
                                    отправить
                                </button>
                            </div>
                        </div>
                    </div>
                    <button class="modal-close" title="Close (Esc)" @click="closeModal()">X</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script src="./modal_add-comment.js"></script>