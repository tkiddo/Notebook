
'''
import urllib.request
import re
import urllib.error
import codecs
headers = ('User-Agent','Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1')
opener = urllib.request.build_opener()
opener.addheaders = [headers]
urllib.request.install_opener(opener)
# file = codecs.open('./files/qiushi.txt','w','utf-8')
for i in range(1,3):
    url = 'http://www.qiushibaike.com/text/page/'+str(i)+'/'
    pagedata = urllib.request.urlopen(url).read().decode('utf-8','ignore')
    pat = '<h2>(.*?)</h2>'
    datalist = re.compile(pat,re.S).findall(pagedata)
    print(len(datalist))
    for j in range(0,len(datalist)):
        print(datalist[j])
        # file.write('\n'+eval('u"'+datalist[j]+'"'))

# file.close()
'''

import threading
class A(threading.Thread):
    def __init__(self):
        threading.Thread.__init__(self)
    def run(self):
        for i in range(0,10):
            print('我是线程A')

class B(threading.Thread):
    def __init__(self):
        threading.Thread.__init__(self)
    def run(self):
        for i in range(0,10):
            print('我是线程B')

t1 = A()
t1.start()
t2 = B()
t2.start()

print('done')