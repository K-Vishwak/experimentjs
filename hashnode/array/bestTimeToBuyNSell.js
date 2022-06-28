function maxProfit(prices) {
    let profit = 0;
    let minPrice = Infinity;
    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        profit = Math.max(profit, prices[i] - minPrice);
    }
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));