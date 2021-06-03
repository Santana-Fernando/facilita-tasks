<template>
  <div id="app">
    <div class="modal_content">
        <i class="fa fa-trash-o"/>
    </div>
  </div>
</template>
<script src="./DeleteTasksController.js"></script>
<style scoped>
    #app {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 10% 30% 30% 30%;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .modal_content {
        background-color: white ;
        width: 660px;
        height: 450px;
        padding: 10px;
    }
    div {
        width: 100%;
        padding: 1rem;
    }
    input[type=text] {
        width: 95%;
        margin-bottom: 15px;
        height: 50px;
        border-radius: 5px;
        border: 2px solid #BFDAEB;
        font-size: 20px;
    }
    textarea {
        width: 95%;
        border-radius: 5px;
        border: 2px solid #BFDAEB;
    }
    #buttons {
        display: flex;
    }
    button {
        width: 118.31px;
        height: 47px;

        background: #A6C1D2;
        border-radius: 4px;
        margin-left: 50%;
    }
</style>