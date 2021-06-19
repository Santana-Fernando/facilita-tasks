<template>
  <div id="app">
    <div class="modal_content">
         <i @click="fecharModal()" style="float: right; font-size: 14px; color: black" class="fa fa-times"/>

        <div class="container_trash">
            <i class="fa fa-trash-o"/>
        </div>
        <div class="waring">
            <p style="font-size: 20px; margin: 0">Tem certeza que deseja excluir esta tarefa?</p> 
            <span style="margin-left: 20%;">Esta ação não poderá ser desfeita.</span>
        </div>
        <div class="buttons">
            <button @click="fecharModal()" style="background-color: #1AD18F;">Cancelar</button>
            <button @click="deleteTasks()" style="background-color: #FF4874; margin-left: 5px;">Confirmar</button>
        </div>
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
        width: 477px;
        height: 345px;
        padding: 10px;
    }
    .container_trash {
        background: #EDF6FC;
        padding: 50px;
        float: left;
        margin-right: 33%;
        margin-top: 10%;
        margin-bottom: 5%;
        border-radius: 50%;
        text-align: center;
        
    }
    .waring{
        margin-right: 6%;
    }
    .container_trash i {
         color: #4A6583;
         /*text-align: center;*/
         font-size: 59px;
    }
    .buttons {
        margin-top: 4%;
        margin-right: 23%;
        justify-content: space-between;
    }
    .buttons button {
        width: 118.31px;
        height: 41px;
        border-radius: 4px;
        font-size: 15px;
        color: #FFFFFF;
        border: none;
    }

    @media (max-width: 952px) {
        #app {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 10% 5% 5% 10%;
            background-color: rgba(0, 0, 0, 0.5);
        }
        .modal_content {
            background-color: white ;
            width: 300px;
            height: 345px;
            padding: 10px;
        }
        .container_trash {
            background: #EDF6FC;
            padding: 50px;
            float: left;
            margin-right: 20%;
            margin-top: 10%;
            margin-bottom: 5%;
            border-radius: 50%;

        }
        .waring {
            margin-right: 2%;
        }
        .waring p {
            text-align: center;
        }
        .waring span {
            font-size: 12px;
            margin-left: 25%;
        }
        .container_trash i {
             color: #4A6583;
             /*text-align: center;*/
             font-size: 59px;
        }
        .buttons {
            margin-top: 4%;
            margin-right: 18%;
            justify-content: space-between;
        }
        .buttons button {
            width: 90px;
            height: 41px;
            border-radius: 4px;
            font-size: 15px;
            color: #FFFFFF;
            border: none;
        }
    }

</style>