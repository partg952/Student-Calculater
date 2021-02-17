let sub1 = document.getElementById('Subject1')
let sub2 = document.getElementById('Subject2')
let sub3 = document.getElementById('Subject3')
let sub4 = document.getElementById('Subject4')
let button = document.getElementById('button')
let h1 = document.getElementById('result')



button.addEventListener('click' , function(){
    console.log('clicked')
    
    console.log(2+3)
    var answer = parseInt(sub1.value,10) + parseInt(sub2.value,10) + parseInt(sub3.value,10) + parseInt(sub4.value,10)
    if(sub1.value.length==0||sub2.value.length==0||sub3.value.length==0||sub4.value.length==0){
        console.log('null')
        h1.innerHTML = "Nothing To Calculate"
    }
    else{
        h1.innerHTML = "Your Total Score Out Of 400 is " + answer
        console.log(eval(answer))
        
    }
   
     })