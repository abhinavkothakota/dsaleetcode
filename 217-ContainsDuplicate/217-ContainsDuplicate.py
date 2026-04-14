# Last updated: 4/14/2026, 12:48:43 PM
class Solution:
    def containsDuplicate(self, nums: List [int]) -> bool:
        s_nums = set(nums)

        if len(s_nums) == len(nums):
            return False
        else:
            return True



        