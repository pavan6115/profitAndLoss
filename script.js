console.log('connected!')

const initialPrice = document.querySelector('#initialPrice')
const qtyOfStocks = document.querySelector('#qtyStocks')
const currentPrice = document.querySelector('#currentPrice')
const checkPLBtn = document.querySelector('.checkPL-btn')
const outputMsg = document.querySelector('.outputMsg')


function calculateProfitAndLoss(initial, qty, current){
    if (initial > current) {
        // loss
        let loss = (initial - current) * qty
        let lossPercentage = (loss/initial) * 100

        console.log(`The loss is ${loss} and loss percentage is ${lossPercentage}%`)
    }
    else if (initial === current){
        // same
        console.log('No Profit nor Loss, invest properly!')
    }
    else {
        //profit
        let profit = (current - initial) * qty
        let profitPercentage = (profit/initial) * 100

        console.log(`The profit is ${profit} and profit percentage is ${profitPercentage}%`)
    }
}

function submitHandler() {
    const initialCost = initialPrice.value
    const totalQty = qtyOfStocks.value
    const currentCost = currentPrice.value

    calculateProfitAndLoss(initialCost, totalQty, currentCost)
}

checkPLBtn.addEventListener('click', submitHandler)
