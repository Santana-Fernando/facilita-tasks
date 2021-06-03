export default {
    
    data() {
      return {
          showModal: false
      }
    },
    props: {
        Modal: Boolean
    },
    created(){
        this.showModal = this.Modal
    },
    methods: {
        fecharModal() {
            this.$emit("FecharModal")
        }
    }, 
}