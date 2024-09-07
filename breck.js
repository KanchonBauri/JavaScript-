
// break condition এখানে ৭ এর পরে আর অউতপুট আসবে 
const k = [1,2,3,4,5,6,7,8,9,12,]
for(let i=0; i<k.length; i++){
   if(k[i] === 7){
       break;
   }
   // console.log(k[i]);
}
/**
output:
1
2
3
4
5
6
*/

//continue condition এখানে  শুধু ৭ টা অউতপুট আসবে না 
for(let i=0; i<k.length; i++){
   if(k[i] === 7){
       continue;
   }
//    console.log(k[i]);
}
/**
output:
1
2
3
4
5
6
8
9
12
*/