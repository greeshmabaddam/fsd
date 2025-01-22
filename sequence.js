function* fib(){
    let a=0,b=1;
    while(true){
        yield a;
        [a,b]=[b,a+b];
    }
}
function* combineseq(){
    const n=[1,2,3,4];
    const f=fib();
    for(let i=0;i<n.length;i++){
        yield n[i];
        yield f.next().value;
    }
}
const c=combineseq();
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)
