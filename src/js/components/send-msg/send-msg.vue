<template id="send-msg">
  <section :class="sendMsg.name">

    <div class="container">
      <div class="row">
        <div :class="sendMsg.mainClass + ' center'">

          <div v-if="sendMsg.leftButton" class="row">
            <div :class="sendMsg.textClass + ' col-xs-12 left-msg'">
              <div class="send-msg-text">
                {{sendMsg.text}}
              </div>
            </div>
            <div :class="sendMsg.btnClass + ' col-xs-12 vcenter'">
              <button @click="openModal()" type="button" class="send-msg-btn btn-primary">
                {{sendMsg.btnName}}
              </button>
            </div>
          </div>

          <div v-else class="row">
            <div :class="sendMsg.btnClass + ' col-xs-12 vcenter'">
              <button @click="openModal()" type="button" class="send-msg-btn btn-primary">
                {{sendMsg.btnName}}
              </button>
            </div>
            <div :class="sendMsg.textClass + ' col-xs-12 vcenter'">
              <div class="send-msg-text">
                {{sendMsg.text}}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
<script src="./send-msg.js"></script>