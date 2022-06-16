let counter= document.getElementById('counter-element');

for(i=1; i<=100; i++){
    
    let box= document.createElement('div');
    box.classList.add('col', 'ms_box');
    
    counter.append(box);
    

   if(((i % 3)==0) && ((i % 5)==0)){
        box.innerHTML= 'FizzBuzz';
        console.log('FizzBuzz');
    } else if((i % 3)==0){
        box.innerHTML= 'Fizz';
        console.log('Fizz');
    
    } else if((i % 5)==0){
        box.innerHTML= 'Buzz';
        console.log('Buzz');  
    
    } else{
        box.innerHTML=i;
        console.log(i);
    }
    
}