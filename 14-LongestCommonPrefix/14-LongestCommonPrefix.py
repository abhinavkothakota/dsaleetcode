# Last updated: 4/14/2026, 12:48:55 PM
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""
        strs.sort()
        
        first=strs[0]
        last=strs[-1]
        pre=[]
        for i in range(min(len(first), len(last))):
            if first[i]==last[i]:
                pre.append(first[i])
            else:
                break
        return "".join(pre)