const calculate = ()=>{
    let sum = 0;
    //1+2+3+....+ 1e9
    for( let i = 0 ; i <= 1e9; i++){
        sum +=i;
    }
    return sum;
};

process.on('message',(message)=>{
    if(typeof message === 'string' && message.trim() === 'start' ){
        console.log('start calculation');
        const sum = calculate();
        process.send({result:sum});
        console.log('end calculation');
    }
});
