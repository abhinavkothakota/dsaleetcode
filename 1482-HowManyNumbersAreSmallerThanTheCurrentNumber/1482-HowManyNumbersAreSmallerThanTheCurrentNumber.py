# Last updated: 4/14/2026, 12:48:25 PM
class Solution(object):
    def smallerNumbersThanCurrent(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        temp = sorted(nums)
        d = {}
        ret = []
        for i , v in enumerate(temp):
            if v not in d:
                d[v]=i
        
        for i in nums:
            ret.append(d[i])
        return ret