function monthlySavings(all_payment_arry, living_cost)
{
    if (!Array.isArray(all_payment_arry)) {
        return "INVALID INPUT";
    }
    total_payment = 0;

    for(let i = 0; i< all_payment_arry.length; i++)
    {
        if(all_payment_arry[i] >= 3000)
        {
            total_payment += (all_payment_arry[i] - (0.20 * all_payment_arry[i]))
        }
        else
        {
            total_payment += all_payment_arry[i];
        }
    }
    
    let saving = total_payment - living_cost

    if(saving >= 0 ){
        return saving;
    }
    else{
        return "earn more";
    }

}


console.log(monthlySavings([1000, 2000, 3000], 5400))
console.log(monthlySavings([1000, 2000, 2500], 5000))
console.log(monthlySavings([1000, 2000, 3400], 10000))
console.log(monthlySavings( 10000, [1000, 2000, 3400]))
