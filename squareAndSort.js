const nums = [-4,-1,0,3,10]
 let sortedSquares = function(nums) {
    let squaredArr = nums.map(num => {
        return Math.pow(num, 2);
 })

 squaredArr.sort((a, b) => {
    return a - b;
 })

 console.log(squaredArr)
};

sortedSquares(nums)