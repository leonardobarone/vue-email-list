// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue({

    el: "#root",
    
    data: {
        array: [],
    },
    
    methods: {

        aggiungi() {
        
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                
                    this.array.push(response.data)
            
            })

        },

        rimuovi() {
            this.array.splice(this.array.length - 1, 1)
        }

    },

    mounted () {
        
        const self = this;

        for (let i = 1; i <= 10; i++) {
        
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( function(response) {
                
                    self.array.push(response.data)
            
            })
        
        }

    }

});

