<template>
  <div id="app">
    <div id="container">
        
        <h2 style="margin-bottom: 0;">Minhas Tarefas</h2>
        <p class="description" style="margin-top: 0;s">Olá <span style="color:#2693FF">{{userName}}</span>, você tem <span style="color:#2693FF">{{totalTasks}} tarefas</span> pendentes.</p>

        <input placeholder="Buscar Tarefas" v-model="searchQuery" type="search" name="" id="">

        <Add 
            v-bind:Modal=showModal 
            :TaskId="taskId" 
            :TaskName="taskName" 
            :TaskDescription="taskDescription" 
            :TaskUrgence="urgence" 
            @FecharModalEAlertar="FecharModalEAlertar()" 
            @FecharModal="fecharModal()"
            v-if="showModal"
        />
        <Delete 
            v-if="showModalDelete" 
            @FecharModalDeleteAvisar="FecharModalDeleteAvisar()"
            @FecharModalDelete="FecharModalDelete()"
            :TaskId="taskId"
        />

        <div class="taksContainer" v-for="task in resultQuery" :key="task.id">
            <div id="tasks" v-if="task.Nome">
                <input type="checkbox" :name="task.Nome" id="concluido">
                <div id="datas" style="display:flex;width: 100%;">
                    <p class="name">{{task.Nome}}</p>

                    <div class="navbar">
                        <div class="ticketsUrgence">
                            <span v-if="task.urgencia && task.urgencia == 'Urgente'" style="background-color: #FF2E79;" >{{task.urgencia}}</span>
                            <span v-if="task.urgencia && task.urgencia == 'Importante'" style="background-color: #FFC42E;">{{task.urgencia}}</span>
                        </div>


                        <div class="dropdown">
                            <button class="dropbtn">
                                <div id="options">
                                    <i class="fa fa-ellipsis-v"/>
                                </div>
                            </button>
                            <div class="dropdown-content">
                                <p @click="abrirModalDeEdicao(task)">Editar</p>
                                <p @click="abrirModalDelete(task.id)">Excluir</p>
                            </div>
                        </div> 
                    </div>
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
    h2 {
        font-size: 26px;
    }
    .description {
        margin-bottom: 25px;
    }
    .navbar {
      overflow: hidden;
      display: flex;
      background-color: transparent;
      margin-left: auto;
    }
    .ticketsUrgence {
        margin-left: auto;
        margin-top: 15px;
    }
    .ticketsUrgence span {
        border-radius: 40px;
        margin-right: 30px;
        height: 20px;
        font-size: 16px;
        padding: 5px;
    }
    .navbar p {
      float: left;
      font-size: 16px;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    .dropdown {
      float: left;
      overflow: hidden;
    }

    .dropdown .dropbtn {
        margin-right: 5px;
        margin-top: 15px;
        float: right;
        background: transparent;
        border: none;
    }
    .name {
        font-size: 20px;
    }
    .dropbtn i {
        color: black;
        font-size: 25px;
    }
    .navbar p:hover, .dropdown:hover .dropbtn {
      background-color: red;
    }

    #concluido:checked ~ #datas {
        opacity: 0.5;
        text-decoration: line-through;
        pointer-events: none;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }

    .dropdown-content p {
      float: none;
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
    }

    .dropdown-content p:hover {
      background-color: #ddd;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    @media (max-width: 600px) { 
        #app{
            width: 300px;
        }
        #container {
            width: 290px;
            margin-top: 2.5rem;
        }
        input[type=search] {
            width: 280px;
            height: 51px;
            font-size: 25px;
            margin-left: 10px;
        }
        .name {
            font-size: 14px;
        }
        h2 {            
            font-size: 20px;
            margin-left: 10px;
        }
        .description {
            margin-left: 10px;
        }
        #tasks {
            display: flex;
            width: 280px;
        }
    }
</style>