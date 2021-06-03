import Add from '../FolderAdd/AddTasks'
import List from '../ListTasks/List'
export default {
    
    data() {
      return {
          showModal: false
      }
    },
    components: {
        Add,
        List
    },
    methods: {
        chamarModal() {
            this.$router.push({
                path: "/AddTasks"
            });
        },
        fecharModal() {
            this.showModal = false
        },
        FecharModalEAlertar() {
            this.showModal = false
            alert("Tarefa salva com sucesso, por favor atualize a página para listalas!!")
        }
    }
}
