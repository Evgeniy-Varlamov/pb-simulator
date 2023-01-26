let bonusBalance = 131;
let afterSaleBonus = 50;
let bonusDailyLoss = 3;

// Покупка раз в два дня
let shoppingRate = 1 / 2;
// 10 дней покупок
let duration = 10;

bonusBalance = bonusBalance + (afterSaleBonus * shoppingRate - bonusDailyLoss) * duration;
console.log('Баланс ' + bonusBalance);