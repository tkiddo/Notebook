# for i in range(1,10):
#     for j in range(1,i+1):
#         print(str(i)+'*'+str(j)+'='+str(i*j)+' ',end='');
#     print()


# for k in range(9,0,-1):
#     for l in range (1,k+1):
#         print(str(k)+'*'+str(l)+'='+str(k*l)+' ',end='');
#     print()


import urllib.request
import re
pat = '<em>QQ:(.*?)</em>'
data = urllib.request.urlopen('https://edu.csdn.net/course/play/3904')
res = re.compile(pat).findall(str(data))
print(res)