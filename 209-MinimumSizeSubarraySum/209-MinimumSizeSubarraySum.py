# Last updated: 4/14/2026, 12:48:45 PM
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        l=0
        total=0
        result=float('inf')

        for r in range(len(nums)):
            total +=nums[r]

            while total>=target:
                result=min(result,r-l+1)
                total-=nums[l]
                l +=1
        if result==float('inf'):
            return 0
        else:
            return result

#abhi