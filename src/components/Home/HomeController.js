import Add from '../FolderAdd/AddTasks'
import List from '../ListTasks/List'
export default {
    
    data() {
      return {
          showModal: false,
          tarefas: {
              todas: 0,
              importantes: 0,
              urgentes: 0
          },
          userName: ''
      }
    },
    props: {
        nome: String
    },
    components: {
        Add,
        List
    },
    created() {
        console.log(this.$route)
        this.userName = this.$route.query.data
        this.atualizarQuantidadeDeTarefas()
    },
    methods: {
        chamarModal() {
            this.$router.push({
                path: "/AddTasks"
            });
        },
        atualizarQuantidadeDeTarefas() {
            this.tarefas.todas = 0
            this.tarefas.importantes = 0
            this.tarefas.urgentes = 0
           
            let ts = localStorage
            for(let i in ts){
                if(!isNaN(i)){
                    let tarefa = JSON.parse(ts[i]).urgencia
                    this.tarefas.todas = this.tarefas.todas + 1 
                    if(tarefa == "Urgente") this.tarefas.urgentes = this.tarefas.urgentes + 1
                    else if(tarefa == "Importante") this.tarefas.importantes = this.tarefas.importantes + 1
                }
            }
        },
        fecharModal() {
            this.showModal = false
        },
        FecharModalEAlertar() {
            this.showModal = false
            this.atualizarQuantidadeDeTarefas()
            this.$refs.addNewTask.atualizarLista()
            alert("Tarefa salva com sucesso, por favor atualize a página para lista-las!!")
        }
    }
}
