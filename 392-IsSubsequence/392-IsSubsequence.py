# Last updated: 4/14/2026, 12:48:30 PM
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        S=list(s)
        T=list(t)
        i,j=0,0
        while i<len(S) and j<len(T):
            if S[i]==T[j]:
                i+=1
            j+=1
        return i==len(S)

                    