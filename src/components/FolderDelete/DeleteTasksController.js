export default {
    
    data() {
      return {
          showModal: false
      }
    },
    props: {
        TaskId: Number
    },
    created(){
    },
    methods: {
        fecharModal() {
            this.$emit("FecharModalDelete")
        },
        deleteTasks(){
            localStorage.removeItem(this.TaskId);
            this.$emit("FecharModalDeleteAvisar")
        }
    }
}