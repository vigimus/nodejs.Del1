const a = 4;
const b = 5; 

//Här säger vi att scriptet ska ta tre sekunder att göra i node.js
//Med kommandot: node script.js
//__dirname ger oss directory namnet 
setTimeout(() =>{
	console.log(a + b);
}, 3000)
