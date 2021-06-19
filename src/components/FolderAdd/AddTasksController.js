export default {
    
    data() {
        return {
            name: '',
            description: '',
            urgence: '',
            index: 0 
        }
    },
    props:{
        TaskId: Number,
        TaskName: String, 
        TaskDescription: String,
        TaskUrgence: String
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
        if(this.Task) {
            console.log(this.Task)
        }
        
        if(this.TaskName && this.TaskDescription && this.TaskUrgence){
            console.log(this.TaskId)
            this.index = this.TaskId
            this.name = this.TaskName;
            this.description = this.TaskDescription
            this.urgence = this.TaskUrgence
        }
    },
    methods: {
        fecharModal() {
            this.$emit("FecharModal")
        },
        addTasks(name, description, urgence) {
            localStorage.setItem(this.index, [JSON.stringify({id: this.index, Nome: name, decricao: description, urgencia: urgence})]);
            this.$emit("FecharModalEAlertar")
        }
    }, 
}