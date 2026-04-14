# Last updated: 4/14/2026, 12:48:44 PM
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        xor = 0
        for i in nums:
            print("num",i)
            xor ^=i
        return xor

            
##