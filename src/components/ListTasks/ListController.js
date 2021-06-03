export default {
    
    data() {
      return {
          tasks: []
      }
    },
    created() {
        let ts = localStorage
        for(let i in ts){
            this.tasks.push(JSON.parse(ts[i]))
        }
        console.log(this.tasks)
        
    },
    methods: {
        
    }
}
