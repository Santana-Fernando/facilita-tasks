export default {
    
    data() {
        return {
            name: '',
            description: '',
            urgence: []
        }
    },
    methods: {
        fecharModal() {
            this.$emit("FecharModal")
        },
        addTasks(name, description, urgence) {
            localStorage.setItem(name, JSON.stringify({Nome: name, decricao: description, urgencia: urgence}));
        }
    }, 
}