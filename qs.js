

// function twoSum(nums, target) {
//     const numIndices = {};
  
//     for (let i = 0; i < nums.length; i++) {
//       const complement = target - nums[i];
  
//       if (numIndices.hasOwnProperty(complement)) {
        
//         return [numIndices[complement], i];
//       }
  
      
//       numIndices[nums[i]] = i;
//     }
  
    
//     return null;
//   }
  
//   const num = [3,3];
//   const target = 6;
  
//   const result = twoSum(num, target);
  
//   if (result !== null) {
//     const [index1, index2] = result;
//     console.log(`  ${index1}, ${index2}`);
//   } else {
//     console.log(`No such pair found.`);
//   }


let num =[2,7,11,15];
let target = 9
 for(let i=0; i<=4; i++){
 for(let j=1; j<=4; j++){
    if(num[i]+num[j]==target){
        console.log(i,j);
     }
  }
}