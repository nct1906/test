let num=Math.floor(Math.random()*10)
console.log(num)


let form = document.querySelector(".enterNum")
let button= document.querySelector("#submit")

button.addEventListener('click', checkNum);
let count=0;
function checkNum() {

	let number= form.number.value;
        console.log(number)
    
    count++;
    console.log(count)
    if(count<=3&&num==number){
        alert("Bạn đã trúng thưởng!")
    }
    else if(count>=3) {
        
        alert(`Bạn không đoán đúng. Kết quả đúng: ${num}`)
    }

}