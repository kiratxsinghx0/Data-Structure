/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0] ;
    let profit = 0 
    for(let i =1 ; i < prices.length ; i++){
        if(profit < prices[i] - buy){
            profit = prices[i] - buy
        }
        else if(buy > prices[i]) {
            buy = prices[i] ;
        }
    }
    return profit ;
};
