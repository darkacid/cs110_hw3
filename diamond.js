const row = function(star_count, space_count)
{
    let space = "";
    let star = "";

    for (let i=0;i<space_count;i++)
        space+=" ";

    for (let i=0;i<star_count;i++)
        star+="*";

    return space+star;
};
const  diamond = function(diamond_size)
{


    if(diamond_size%2==0)
        diamond_size++;

    let j=1;
    for (let  i=1,count=0;count<=(diamond_size-1)/2;i+=2,count++)
    {
        console.log( row(i, (diamond_size-1)/2-count) );
        j=i;
    }

    for (let  i=j,count=(diamond_size-1)/2,j=1;count<=diamond_size;i-=2,count++)
    {
         console.log(row(i-2,j));
        j++;
    }

};
diamond(5);