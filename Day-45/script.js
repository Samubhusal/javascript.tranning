//ASYNCHRONOUS IN JAVASCRIPT
//----allows operations like network requests or file I/O to run in the background without blocking the main thread, keeping the user interface responsive.

//uses settimeout -> code does Not wait

console.log("start");
setTimeout(()=>{
    console.log("This print for 2 seconds")
},2000);
console.log("End");