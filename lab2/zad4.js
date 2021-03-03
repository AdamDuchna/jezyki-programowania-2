function removeFromArray( array , val1 , val2=0 , val3=0 )
{
    let howManyRemove=val1+val2+val3;
    for (let i = 0; i < howManyRemove; i++)
    {
        array.pop();
    }
    return array

}

console.log(removeFromArray([4, 10, 32, 4, 54, 4, 21, 43, 65, -43, 5],1,3))