var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];


function checkFriends(arry) 
{
    let biggestName = "";
    for(let i = 0; i<arry.length; i++)
        {
            if (arry[i].length > biggestName.length)
                {
                    biggestName = arry[i]
                }
        }
    
        return biggestName;

}


console.log(checkFriends(friends))