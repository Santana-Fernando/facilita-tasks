export default {
    
    data() {
      return {
        emailOuNome: "",
        senha: ""
      }
    },
    methods: {
        login(){
            let nome =  this.emailOuNome
            if(this.senha == "") {
                alert("Digite a senha!!")
                return
            } else {
                this.$router.push({path:'/ListTasks', query: {data: nome}})
            }
        }
    }
}