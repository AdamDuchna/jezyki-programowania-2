function printArray(array)
{
    for ( let i = 0; i < array.length; i++)
    {
        console.log('rząd',i)
        for( let j = 0; j < array.length-1; j++)
        {
           console.log(array[i][j])
        }
    }
}

let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

printArray(a)