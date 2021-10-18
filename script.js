let counterNumber = document.querySelector("#counter-number")
let decreaseBtn = document.querySelector("#decrease-btn")
let resetBtn = document.querySelector("#reset-btn")
let increaseBtn = document.querySelector("#increase-btn")
let primeNumber = 0



function numberColor(){
	if (primeNumber < 0){
		counterNumber.style.color = "red"
	} else if (primeNumber > 0){
		counterNumber.style.color = "green"
	} else if(primeNumber === 0){
		counterNumber.style.color = "black"
	}
}



decreaseBtn.addEventListener("click", function(){
	primeNumber -= 1
	counterNumber.textContent = primeNumber
	numberColor()
})


resetBtn.addEventListener("click", function(){
	primeNumber = 0
	counterNumber.textContent = primeNumber
	numberColor()
})


increaseBtn.addEventListener("click", function(){
	primeNumber += 1
	counterNumber.textContent = primeNumber
	numberColor()
})

