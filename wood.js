/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
 */

function woodQuantity (chairQuantity, tableQuantity, badQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = badQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

const wood = woodQuantity(0, 0, 1);
console.log('wood needed', wood);

/** একটি শাট এর সাথে কি করে আর এর একটি দাম যোগ করতে হই দেখানো হয়েছে 
 * shirt price --> 500
 * pant price --> 300
 * tShirt price --> 900
 */
