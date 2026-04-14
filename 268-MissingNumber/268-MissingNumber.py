# Last updated: 4/14/2026, 12:48:36 PM
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
       return sum(range(len(nums)+1))-sum(nums)
        
        
        