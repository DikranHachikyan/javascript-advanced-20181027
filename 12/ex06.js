const {fork} = require('child_process');

const children = [];
const status   = [];

console.log(`Main PID:${process.pid}`);

//console.log('argv:', process.argv);

for( let i = 0 ; i < 4 ; i++){
    const child = fork('./children/child06.js', ['*', Math.random() * 100 + 500 ]);

    child.on('message', (data)=>{
            let found = false;
            status.find( (el)=> {
                if(el.pid === data.pid ){
                    el.done = data.done;
                    found = true;
                } 
            });
            if(!found){
                status.push(data);
            }
            
            if( data.done === 100 ){
                child.send('quit');
            }

            showOutput();
    });//child on message

    children.push(child);
}

const showOutput = ()=>{

    let output = '';

    status.forEach( (el,index,arr)=>{
        if( el.done === 100 ){
            arr.splice(0,1,el);
        }
        else{
            output += ` Child ${el.pid} ${el.done}`;
        }
    });

    process.stdout.clearScreenDown();
    process.stdout.cursorTo(0);
    process.stdout.write(output);
    output = '';
};


// process.stdin.on('data', (data)=>{
//     if(data === 'stop\n'){
//         children.map((el)=>el.send('quit'));
//     }
// })