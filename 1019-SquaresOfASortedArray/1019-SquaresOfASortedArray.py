# Last updated: 4/14/2026, 12:48:24 PM
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        for i in range(len(nums)):
            nums[i] *= nums[i]
        return sorted(nums)