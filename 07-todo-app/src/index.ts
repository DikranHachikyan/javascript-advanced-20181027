import TodoListView from './todo-list-view';
namespace app{

    export const init = ():void => {
        const todos$ = document.getElementById('todos');
        const input$ = document.getElementById('todo-input');
        const addButton$ = document.getElementById('add-todo');

        const todoListView =  TodoListView( todos$, 'write 500 words', 'read ts docs');
        todoListView.render();

        addButton$.addEventListener('click', (event)=>{
            console.log('add todo');
        });

        input$.addEventListener('keypress', (event)=>{
            if( event['keyCode'] === 13 ){
                console.log('add todo (keypress)');
            } 

        });
        console.log(`Hello Todo App`);
    };
}

app.init();