const reverse = function(arr)
{
    let  n = arr.length;
    if(n>=0)
    {
        if (n%2==0)
        {
            for (let  i = 0; i < n/2; i++)//swap arr[i] and arr[n-i]
            {
    
                let temp=  arr[n-i-1];
                arr[n-i-1]=arr[i];
                arr[i]=temp;
            }
            return arr;
        }  
        else
        {
            for (let  i = 0; i < (n-1)/2; i++)
            {
                let temp=  arr[n-i-1];
                arr[n-i-1]=arr[i];
                arr[i]=temp;
            }
            return arr;
        }
    }
    else
        return arr;
};


const reversedArray = reverse(['s','e','r','g','e','y']);


/*
even => n/2 times
odd => (n-1)/2 times
*/
console.log(reversedArray)















//YEGRES!