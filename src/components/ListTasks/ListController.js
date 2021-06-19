import Add from '../FolderAdd/AddTasks'
import Delete from '../FolderDelete/DeleteTasks'
export default {
    
    data() {
      return {
          searchQuery: null,
          tasks: [],
          showModal: false,
          showModalDelete: false,
          taskId: 0,
          taskName: '',
          taskDescription: '',
          urgence: '',
          userName: '',
          totalTasks: 0
      }
    },
    components: {
        Add,
        Delete
    },
    props: {
        Usuario: String,
        QuatidadeDeTarefas: Number,
        TotalTarefas: Number
    },
    created() {
        console.log(this.Usuario)
        this.userName = this.Usuario
        this.totalTasks = this.TotalTarefas
        this.atualizarLista()
        
    },
    computed: {
        resultQuery(){
            if(this.searchQuery){
            return this.tasks.filter((item)=>{
              return this.searchQuery.toLowerCase().split(' ').every(v => item.Nome.toLowerCase().includes(v))
            })
            }else{
              return this.tasks;
            }
        }
    },
    methods: {
        atualizarLista(){
            this.tasks =[]
            let ts = localStorage
            for(let i in ts){
                if(!isNaN(i)){
                    this.tasks.push(JSON.parse(ts[i]))
                }
            }
            
        },
        FecharModalEAlertar() {
            this.showModal = false
            this.tasks =[]
            this.atualizarLista()
            alert("Tarefa atualizada com sucesso!!")
        },
        abrirModalDeEdicao(task){
            this.taskId = task.id
            this.taskName = task.Nome
            this.taskDescription= task.decricao
            this.urgence = task.urgencia
            this.showModal = true
        },
        abrirModalDelete(index) {
            this.taskId = index
            this.showModalDelete = true
        },
        FecharModalDeleteAvisar() {
            this.showModalDelete = false
            this.tasks =[]
            this.atualizarLista()
            this.$emit("Atualizar")
            alert("Tarefa excluidas com sucesso!!")
        },
        fecharModal() {
            this.showModal = false
        },
        FecharModalDelete() {
            this.showModalDelete = false
        },
        
    }
}
