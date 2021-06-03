<template>
    <div id="app">
        <div id="logoInterprise">
            <div id="logo">
                <img id="check" src="/public/check.png"><br>
                <img id="logoImage" src="/public/logo.png">
                <p id="title"><span id="facilita">FACILITA</span>TASKS</p>
                <p id="subTitle">Gestão de tarefas pessoais</p>
            </div>
        </div>
        <div id="login">
            <div class="form">
                <h3>Entre com seus dados de acesso.</h3><br>
                <label for="">Nome de usuário ou e-mail:</label><br>
                <input class="input" type="email"><br>
                <label for="">Senha:</label><br>
                <input class="input" type="password"><br>
                <button>Entrar</button>
                <a href="">Esqueci minha senha</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    Name: 'app'
}
</script>
<style scoped>
    #app {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        width: 100%;
    }
    #check {
        margin-bottom: -30px;
        position: relative;
        left: 18%;
    }
    #title {
        font-size: 48px;
        font-weight: normal;
        color: #FFFFFF;
        margin: 0;
    }
    #facilita{
        font-weight:bold;
    }
    #subTitle {
        font-size: 16px;
        color: #FFFFFF;
        margin: 0px;
    }
    #logoInterprise{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #2693FF;
        width: 624px;
        height: 877px;
        margin: 0;
    }
    #login{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
        width: 70%;
        height: 877px;
    }
    .form {
        display: block;
        width: 368px;
    }
    .input{
        width: 368px;
        height: 55px;

        background: #FFFFFF;
        border: 2px solid #2693FF;
        box-sizing: border-box;
        border-radius: 5px;
        margin-bottom: 4%;
        font-size: 20px;
    }
    label {
        color: #4E657B;
    }
    button {
        width: 368px;
        height: 55px;

        background: #1AD18F;
        border-radius: 5px;
        color: #FFFFFF;
        margin-bottom: 15%;
    }

    @media (max-width: 952px) {
        #app {
            display: block;
            width: 100%;
        }
        #logoInterprise{
            display: flex;
            width: 100%;
            height: 80px;
        }
        #check {
            margin-bottom: -8%;
            position: relative;
            height: 20%;
            width: 10%;
            left: 13%;
        }
        #login{
            margin-top: 20%;
            background-color: #FFFFFF;
            width: 100%;
            height: 50%;
        }
        #logoImage {
            height: 50%;
            width: 20%;
        }
        #title {
            font-size: 1rem;
            font-weight: normal;
            color: #FFFFFF;
            margin: 0;
        }
        #facilita{
            font-weight:bold;
        }
        #subTitle {
            font-size: 0.5rem;
            color: #FFFFFF;
            margin: 0px;
        }
        .form {
            display: block;
            width: 100%;
        }
        .input{
            width: 100%;
            height: 55px;

            background: #FFFFFF;
            border: 2px solid #2693FF;
            box-sizing: border-box;
            border-radius: 5px;
            margin-bottom: 4%;
            font-size: 20px;
        }
        label {
            color: #4E657B;
        }
        button {
            width: 100%;
            height: 55px;

            background: #1AD18F;
            border-radius: 5px;
            color: #FFFFFF;
            margin-bottom: 15%;
        }
    }
</style>