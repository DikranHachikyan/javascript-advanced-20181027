import TodoCollection from './todo-collection';
import TodoView from './todo-view';

const todoViewCollection = (el$, ...titleArr:string[]) =>{
    let todoCollection = TodoCollection(...titleArr);

    const render = ():void =>{
        const list$ = todoCollection.get().map( (todo)=>{
            return TodoView(todo).render();
        }).join('');
        el$.innerHTML = `<ul class="list-group">${list$}</ul>`;
        attachEvents();
    };

    const attachEvents = ():void =>{
        const todos$ = el$.querySelectorAll('.list-group-item');

        todos$.forEach( (todo$)=>{
            const id = parseInt(todo$.getAttribute('data-id'));
            const checkbox$ = todo$.querySelector('.toggleCompleted');
            const removeButton$ = todo$.querySelector('.remove');

            checkbox$.addEventListener('click', (event)=>{
                console.log(`toggle Completed task ${id}`);
                action('toggleCompleted', id);
            });

            removeButton$.addEventListener('click', (event)=>{
                console.log(`remove task ${id}`);
                action('remove',id);
            });
        });
    };

    const action = (type:string, ...params:any[]):void=>{
        //за remove
        //todoCollection.remove(...parems);
        todoCollection[type](...params);
        render();
    };

    return {
        render,
        action
    };
};

export default todoViewCollection;