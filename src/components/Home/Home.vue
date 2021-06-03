<template>
    <div id="app">
        <div id="logoInterprise">
            <div id="logo">
                <img id="check" src="/public/check.png"><br>
                <img id="logoImage" src="/public/logo.png">
            </div>
            <Add v-bind:Modal=showModal @FecharModalEAlertar="FecharModalEAlertar()" @FecharModal="fecharModal()" v-if="showModal"/>
            <div id="links">
                <div class="button">
                    <i class="fa fa-bar-chart"></i>
                    <p>Dashboard</p>
                </div>
                <div class="button">
                    <i class="fa fa-check-circle-o"></i>
                    <p>Tarefas</p>
                </div>
                <div class="button">
                    <i class="fa fas fa-cogs"></i>
                    <p>Configurações</p>
                </div>
            </div>
        </div>
        <div class="tasksAdministration">
            <header>
                <div>
                    <img src="/public/logo.png">
                    <p>
                        Fernando Rodrigues de Santana 
                        <br>
                        <span>Front-End Developer</span>
                    </p>
                </div>
            </header>
            <div id="tasksContainer">
                <div id="categories">
                    <div>
                        <p style="font-size: 17px;">Categorias</p><br>
                        <p><i class="fa fa-chevron-right"/> Todas</p>
                        <p><i class="fa fa-chevron-right"/> Urgentes</p>
                        <p><i class="fa fa-chevron-right"/> Importantes</p>
                        <p><i class="fa fa-chevron-right"/> Outras</p>
                        <p><i class="fa fa-chevron-right"/> Finalizadas</p>
                    </div>
                </div>
                <div id="MyTasks">
                    <List/>
                    <div><button id="add-button" @click="showModal = true"><i class="fa fa-plus"/></button></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./HomeController.js" ></script>
<style>
    #app {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        width: 100%;
    }
    #logoInterprise{
        background-color: #2693FF;
        width: 106px;
        height: 877px;
        margin: 0;
    }
    #check {
        margin-bottom: -17px;
        position: relative;
        left: 64px;
        height: 20px;
        width: 20px;
    }
    #logoImage {
        margin-left: 30px;
        height: 50px;
        width: 50px;
    }
    
    #links {
        margin-top: 15rem;
    }
    .button {
        border: 1px solid #46A3FF;
        box-sizing: border-box;
        padding: 0.5rem;
    }
    .button, i {
        font-size: 40px;
        font-weight: 100;
        color: #FFFFFF;
        text-align: center;
    }
    .button, p {
        font-size: 12px;
        font-weight: bold;;
    }

    .tasksAdministration {
        display: block;
        background-color: gray;
        width: 100%;
    }

    header {
        background-color: #FFFFFF;
        height: 60px;
        width: 98.9%;
        padding: 0.5rem;
    }
    header div {
        display: flex;
        float: right;
        align-items: center;     
    }
    header div img {    
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: blue;
    }    
    header div p {
        margin-left: 10px;
        font-size: 15px;
    }
    header div p span {
        font-size: 12px;
    }

    #tasksContainer {
        display: flex;
        width: 100%;
        background-color: #F4FBFF;
        margin: 0;
    }
    #categories {
        width: 227px;
        height: 807px;
    }
    #categories div {
        display: block;
        margin-top: 15rem;
        margin-left: 2rem;
    }
    #categories div p  {
        font-size: 15px;
        margin: 1.5rem;
    }
    #categories div p i {
        font-size: 15px;        
        color: black;
    }

    #MyTasks {
        display: block;
        background-color: #E2EEF5;
        width: 90%;
        height: 807px;
    }

    #MyTasks div {
        float: right;
    }

    #add-button {
        width: 77px;
        height: 77px;
        background-color: #0ED984;
        border-radius: 50%;
        border: none;
        margin-right: 10px;
    }

    #add-button i {
        font-size: 25px;
    }

    @media (max-width: 600px) {
        #app {
            font-family: Arial, Helvetica, sans-serif;
            display: block;
            width: 100%;
        }
        #logoInterprise{
            display: flex;
            background-color: #2693FF;
            width: 100%;
            height: 87px;
            margin: 0;
        }

        #links {
            display: flex;
            width: 60%;
            margin: 0;
            margin-left: 5%;
        }
        .button {
            width: 70%;
            border: 1px solid #46A3FF;
            box-sizing: border-box;
        }
        .button, i {
            font-size: 40px;
            font-weight: 100;
            color: #FFFFFF;
            text-align: center;
        }
        .button, p {
            font-size: 12px;
            font-weight: bold;;
        }

        #tasksContainer {
            position: fixed;
            width: 100%;
            height: 100vh;
            background: #2c3e50;
            top: 80px;
            left: -100%;
            text-align: center;
            transition: all .5s;
        }
        
    }
</style>