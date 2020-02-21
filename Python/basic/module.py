from urllib import request
import function
data1 = request.urlopen('http://www.baidu.com').read()
file = open('text.txt','w')
file.write(str(data1))
print(len(data1))
function.fa()