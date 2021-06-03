export default {
    
    data() {
        return {
            name: '',
            description: '',
            urgence: [],
            index: 0 
        }
    },
    created() {
        let local = localStorage
        let chave = Object.keys(local)
        let novoArray = []
        for(let i in chave){
           if(!isNaN(chave[i])){
               novoArray.push(parseInt(chave[i]))
           }
        }
        let numero = novoArray.reduce(function(a, b) {
            return Math.max(a, b);
        });

          this.index = numero + 1
    },
    methods: {
        fecharModal() {
            this.$emit("FecharModal")
        },
        addTasks(name, description, urgence) {
            localStorage.setItem(this.index, [JSON.stringify({Nome: name, decricao: description, urgencia: urgence})]);
            this.$emit("FecharModalEAlertar")
        }
    }, 
}