console.log('JS OK');

/* 
MILESTONE 1
Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà completed è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco di ogni todo una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/

const app = new Vue ({
    el: '#app',
    data: {
        todos: [
            {
                text: 'fare cose',
                completed: false,
            },
            {
                text: 'fare cose 1',
                completed: true,
            },
            {
                text: 'fare cose 2',
                completed: false,
            },
        ],
        newTodo: '',

        filterActive: false,
    }
})