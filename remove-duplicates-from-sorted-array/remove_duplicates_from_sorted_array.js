function removeDuplicates(nums) {
    let lastSeen = null
    i = 0
    while (i < nums.length) {
        if (nums[i] === lastSeen) {
            nums.splice(i, 1)
        }
        else {
            lastSeen = nums[i]
            i++
        }
    }
}

nums = [0,0,1,1,1,2,2,3,3,4]

removeDuplicates(nums)