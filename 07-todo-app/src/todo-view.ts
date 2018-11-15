const todoView = (todo)=>{
    const render = ()=>{
        const {id, title, completed } = todo;

        let title$ = (completed)? 
                        `<del class="w-75 text-truncate">${title}</del>`:
                        `<span class="w-75 text-truncate">${title}</span>`;
        return `<li class="list-group-item" data-id=${id}>
                 <input type="checkbox" class="toggleCompleted" ${completed?"checked":""}/>
                 <button class="remove close text-danger">&times;</button>
                 ${title$}
               </li>`;
    };

    return {
        render
    };
};

export default todoView;