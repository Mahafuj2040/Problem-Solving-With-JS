function ans(Number){
    if (Number % 3 == 0)
        {
            console.log(`Number -> ${Number} is divisible by 3.`)
        }
    
    else if(Number % 5 == 0)
        {
            console.log(`Number -> ${Number} is divisible by 5.`)
        }
    else{
        console.log(`Number -> ${Number} is not divisible by 3 and 5.`)
    }
}


const num = 50;

for(let i = 1; i<=num; i++)
    {
        ans(i)
    }