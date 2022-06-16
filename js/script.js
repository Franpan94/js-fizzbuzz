//Dichiaro una variabile 
let counter= document.getElementById('counter-element');

// Apro il ciclo for dichiarando un contatore 
for(i=1; i<=100; i++){
    
    // Creo un div 
    let box= document.createElement('div');

    // Aggiungo delle classi al div creato
    box.classList.add('col-2', 'ms_box');
    
    
    // Appendo alla variabile dichiarata all'esterno del ciclo il div-box creato
    counter.append(box);
    
    
   //Dichiaro la condizione che nel caso in cui sia divisibile per 3 e per 5 con resto=0 stampi la voce fizzbuzz 
   if(((i % 3)==0) && ((i % 5)==0)){
        box.classList.add('ms_box2');
        box.innerHTML= 'FizzBuzz';
        console.log('FizzBuzz');
    
     //Dichiaro la condizione che nel caso in cui sia divisibile per 3 con resto=0 stampi la voce fizz 
    } else if((i % 3)==0){
        box.innerHTML= 'Fizz';
        console.log('Fizz');
    
     //Dichiaro la condizione che nel caso in cui sia divisibile per 5 con resto=0 stampi la voce buzz
    } else if((i % 5)==0){
        box.innerHTML= 'Buzz';
        console.log('Buzz');  
    
    // Altrimenti stampa semplicemente i numeri
    } else{
        box.innerHTML=i;
        console.log(i);
    }
    
}