# Last updated: 4/14/2026, 12:48:51 PM
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        l,r=0,1
        maxP=0
        while r!=len(prices):
            if prices[l]<prices[r]:
                prof=prices[r]-prices[l]
                maxP=max(maxP,prof)
            else:
                l=r
            r+=1
        return maxP 
