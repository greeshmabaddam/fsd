const eventemitter=require('events');
const emitter=new eventemitter()
const oncelistener=()=>{
    console.log('only once');
};
emitter.once('first time event',oncelistener)
emitter.emit('first time event')