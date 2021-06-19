<template>
  <div id="app">
    <div class="modal_content">
        <i @click="fecharModal()" style="float: right; font-size: 14px; color: black" class="fa fa-times"/>
        <h1>Cadastrar Tarefa</h1>
        <div >
            <input v-model="name" type="text" name="" id="">
            <br>
            <label for="">Descrição:</label>
            <textarea v-model="description" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div id="buttons">
            <input type="radio" id="Urgente" value="Urgente" v-model="urgence">
            <label for="Urgente">Urgente</label>

            <input style="margin-left: 15px" type="radio" id="Importante" value="Importante" v-model="urgence">
            <label for="Importante">Importante</label>

            <button @click="addTasks(name, description, urgence)">Adicionar</button>
        </div>
    </div>
  </div>
</template>
<script src="./AddTasksController.js"></script>
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
        display: block;
        background-color: white ;
        width: 660px;
        height: 450px;
        padding: 10px;
    }
    div {
        width: 95%;
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

    @media (max-width: 952px) {
        #app {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 5% 5% 5% 5%;
            background-color: rgba(0, 0, 0, 0.5);
        }
        .modal_content {
            display: block;
            background-color: white ;
            width: 300px;
            height: 450px;
            padding: 10px;
        }
        button {
            width: 118.31px;
            height: 47px;

            background: #A6C1D2;
            border-radius: 4px;
            margin-left: 5%;
        }

    }
</style>