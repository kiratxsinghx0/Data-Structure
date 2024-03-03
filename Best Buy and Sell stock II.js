/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
        let maximumProfit = 0 ;
        let buy = prices[0] ;
        for(let i =1; i < prices.length ; i++){
            if(buy > prices[i]){
                buy = prices[i]
            }
            else if(prices[i] - buy >= prices[i + 1] - buy || i == prices.length - 1){
                let margin = prices[i] - buy ;
                maximumProfit = maximumProfit + margin ;
                buy = prices[i] ; 
            }
        }
        return maximumProfit
};  
