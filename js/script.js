let counter= document.getElementById('counter-element');

for(i=1; i<=100; i++){
    
    let box= document.createElement('div');
    box.classList.add('col', 'ms_box');
    
    box.innerHTML=i

    counter.append(box);
    console.log(i);

    if((i % 3)==0){
        box.innerHTML= 'Fizz';
        console.log('Fizz');
    
    } else if((i % 5)==0){
        box.innerHTML= 'Buzz';
        console.log('Buzz');  
    
    }
    
}