# Last updated: 4/14/2026, 12:48:32 PM
class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        num = set(nums)
        n=len(nums)
        count=[]
        for i in range(1,n+1):
            if i not in num:
                count.append(i)
        return count
       
        
    