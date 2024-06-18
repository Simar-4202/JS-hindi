// Immediately Invoked Function Expressions(IIFE)
// function jo immediately excute ho jaye
//used to prevent global scope pollution in functional scope
//secondly to execute some essentials like Database connectivity

function chai(){
    console.log('DB connected')
}
chai();//problem is global pollution for thaat we use IIFE
// so for that

(function chai2(){
    //named IIFE which has name
    console.log(`DB connected`);
})();

( (name)=> {
    //IIFE which has no name
    console.log(`db Connected two ${name}`);
}) ('hitesh')

//semicolon is very important if writing twoo IIFE