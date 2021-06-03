<template>
  <div id="app">
    <div id="container">
        <h2 style="margin: 0;">Minhas Mortes</h2>
        <p style="margin: 0; margin-bottom: 20px;">Olá Eduardo Pereira, você tem 4 tarefas pendentes.</p>

        <input placeholder="Buscar Tarefas" type="search" name="" id="">

        <div v-for="task of tasks" :key="task.Nome">
            <div id="tasks" v-if="task.Nome">
                <input type="checkbox" :name="task.Nome" id="concluido">
                <p style="font-size: 20px;">{{task.Nome}}</p>
                <span v-if="task.urgencia && task.urgencia[0] == 'Urgente'" style="background-color: #FF2E79;" >{{task.urgencia[0]}}</span>
                <span v-if="task.urgencia && task.urgencia[0] == 'Importante'" style="background-color: #FFC42E;">{{task.urgencia[0]}}</span>

                <div id="options">
                    <i class="fa fa-ellipsis-v"/>
                </div>
            </div>
        </div>

    </div>
  </div>
</template>
<script src="./ListController.js"></script>
<style scoped>
    #app {
        background-color: transparent;
    }
    #container {
        margin-top: 10rem;
        display: block;
        margin-left: auto;
        margin-right: auto;
        background-color: transparent;
        width: 633px;
        padding: 0.5rem;

    }
    #tasks {
        display: flex;
        width: 633px;
        height: 64px;
        border-radius: 5px;
        font-size: 25px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 20px;
    }
    #tasks input[type=checkbox]{
        width: 33px;
        height: 32px;
        margin-top: 15px;
        border: 2px solid #A6C1D2;
        border-radius: 3px;
    }
    input[type=search] {
        width: 633px;
        height: 51px;
        border-radius: 5px;
        font-size: 25px;
        border: 2px solid #BFDAEB;
        border-radius: 5px;
        margin-bottom: 20px;
        background: transparent;
    }
    span {
        margin-left: 25rem;
        margin-top: 15px;
        border-radius: 40px;
        height: 20px;
        font-size: 16px;
        padding: 5px;
    }
    #options{
        margin-left: auto;
        margin-right: 5px;
        margin-top: 15px;
    }
    #options i {
        color: black;
        font-size: 25px;
    }
    #concluido:checked {
        
    }
</style>