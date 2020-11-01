function calcPhonePrice(money, limit, phonePrice, accessorizePrice, taxRates) {
  let costPrice,
      taxedPrice;

  while(money > 0) {
    if(areOverLimit(limit, phonePrices)) {
      console.log('Недостаточно средств для покупки телефонов нашего магазина :(');
      break;
    }

    for(keys in phonePrice) {
      if(!isOverLimit(limit, phonePrice[keys])) {
        costPrice = calcCostPrice(limit, phonePrice[keys], accessorizePrice);
        taxedPrice = calcTaxedPrice(costPrice, taxRates);
    
        console.log(`Стоимость вашего заказа: ${getCashFormat(taxedPrice)}`);
        
        money -= taxedPrice;
    
        if (money < 0) {
          return console.log('CANCELED: У вас недостаточно средств для покупки');
        } else {
          console.log('Поздравляем с покупкой!', `Остаток на счёте: ${getCashFormat(money)}`);        
        }
      } else {
        console.log(`Вы не можете купить ${keys}, т.к. его стоимость превышает ваш предел трат!`);
      }
    }
  }
    
}

function isOverLimit(limit, phonePrice) {
  return limit < phonePrice;
}

function areOverLimit(limit, prices) {
  for(let key in prices) {
    if(prices[key] < limit) {
      return false;
    }
  }
  return true;
}

function calcCostPrice(limit, phonePrice, accessorizePrice) {
  let spendingLimit = limit;
  limit -= phonePrice;
  console.log(`В корзине телефон стоимостью: ${phonePrice}`);
  let i = 0;

  while(limit > 0) {
    for(value of accessorizePrice) {    
      if(limit - value > 0) {
        limit -= value;

        i++;
      } else {
        console.log(`Аксессуаров в корзине: ${i}`);
        return spendingLimit - limit;
      }
    }    
  }
  
  //return spendingLimit - limit;
}

function calcTaxedPrice(purchase, tax) {
  return purchase + purchase * tax;
}

function getCashFormat(cash) {
  return `$${cash.toFixed(2)}`;
}

let scoreBalance = 800,
    spendingLimit = 350, // лимит одной покупкии: телефон + n аксессуаров
    taxRates = 0.2,
    phonePrices = {
      samsung: 800,
      xiaomi: 200,
      iphone: 900,
    },
    accessorizePrices = [15, 30, 45, 7, 3];


calcPhonePrice(scoreBalance, spendingLimit, phonePrices, accessorizePrices, taxRates);
