
function myFunction(){
    console.log('My function works!');
};

function sayHi(name){
    console.log(`Hello, ${name}!`);
};

function powOfNumber(number){
    console.log(`pow of ${number} is ${number**2}`);
};

function sayHi(name){
    name = name || 'Denis';
    console.log(`Hello, ${name}!`);
};

function pow(n,m = 2){
    console.log(`exponentiation of ${n} is ${n**m}`);
};

function sqrt(n, m){
    if(isNaN(n) && isNaN(m)){
        return
    };
return n**(1/m)
};

