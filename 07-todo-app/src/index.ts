import TodoListView from './todo-list-view';
namespace app{

    export const init = ():void => {
        const todos$ = document.getElementById('todos');
        const input$ = document.getElementById('todo-input');
        const addButton$ = document.getElementById('add-todo');

        const todoListView =  TodoListView( todos$, 'write 500 words', 'read ts docs');
        todoListView.render();

        const validateInput = (value:string):boolean =>{
            return typeof value === 'string' && value.trim().length > 0;
        };

        addButton$.addEventListener('click', (event)=>{
            console.log('add todo');
            if( validateInput(input$['value'])){
                todoListView.action('add', input$['value']);
                input$['value'] = '';
            }
        });

        input$.addEventListener('keypress', (event)=>{
            if( event['keyCode'] === 13 && validateInput(input$['value'])) {
                todoListView.action('add', input$['value']);
                input$['value'] = '';
                console.log('add todo (keypress)');
            } 

        });
        console.log(`Hello Todo App`);
    };
}

app.init();