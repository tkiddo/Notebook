import urllib.request
import urllib.parse
import urllib.error
import re
'''
# 存到本地
urllib.request.urlretrieve('http://www.hellobi.com',filename='./files/1.html')
# 清缓存
urllib.request.urlcleanup()

file = urllib.request.urlopen('http://www.hellobi.com',timeout=1)
print(file.info())
# 状态码
file.getcode()
# url
file.geturl()
'''

'''
for i in range(1,100):
    try:
        file = urllib.request.urlopen('http://www.hellobi.com',timeout=1)
        data = file.read()
        print(len(data))
    except Exception as e:
        print('error')
'''
'''
# 模拟http get请求
keyword = 'python'
# 中文编码
keyword = urllib.request.quote('中文')
# 默认不爬https
url = 'http://www.baidu.com/s?wd=' + keyword
req = urllib.request.Request(url)
data = urllib.request.urlopen(req).read()
file = open('./files/2.html','wb')
file.write(data)
file.close()
'''

'''
# post
url = 'https://www.iqianyue.com/mypost/'
# 表单信息
myData = urllib.parse.urlencode({
    'name':'1234',
    'pass':'5678'
}).encode('utf-8')

req = urllib.request.Request(url,myData)
data = urllib.request.urlopen(req).read()
file = open('./files/3.html','wb')
file.write(data)
file.close()
'''


'''
# urlError,httpError是urlError的子类

try:
    data = urllib.request.urlopen('https://www.bilibili.com/')
    print(len(data.read()))
except urllib.error.URLError as e:
    if hasattr(e,'code'):
        print(e.code)
    if hasattr(e,'reason'):
        print(e.reason)

'''

'''
# 伪装浏览器
url = 'https://www.bilibili.com/'
headers = ('User-Agent','Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1')
opener = urllib.request.build_opener()
opener.addheaders = [headers]
data = opener.open(url).read()
file = open('./files/4.html','wb')
file.write(data)
file.close()
'''

# 新闻爬虫实战

data = urllib.request.urlopen('http://news.sina.com.cn/').read()
data2 = data.decode('utf-8','ignore')
pat = 'href="(http://news.sina.com.cn/.*?)"'
allurl = re.compile(pat).findall(data2)
for i in range(0,len(allurl)):
    try:
        thisurl = allurl[i]
        file = './files/sinanews/'+str(i)+'.html'
        urllib.request.urlretrieve(thisurl,file)
    except urllib.error.URLError as e:
        if hasattr(e,'code'):
            print(e.code)
        if hasattr(e,'reason'):
            print(e.reason) 