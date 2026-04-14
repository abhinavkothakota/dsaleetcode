# Last updated: 4/14/2026, 12:48:18 PM
class Solution:
    def findClosestNumber(self, nums: List[int]) -> int:
        diff = 99999999
        ans = 999999999
        for i in nums:
            if abs(0-i) < diff:
                diff = abs(0-i)
                ans = i
            if diff == abs(0-i):
                diff = abs(0-i)
                ans = max(ans, i)
        return ans

        #Time complexity: O(n)
# Space complexity: O(1)