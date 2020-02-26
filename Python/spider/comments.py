import urllib.request
import re
import urllib.error
import codecs
headers = ('User-Agent','Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1')
opener = urllib.request.build_opener()
opener.addheaders = [headers]
urllib.request.install_opener(opener)
file = codecs.open('./files/commets.txt','w','utf-8')
comid = '6570141340813171445'
url = 'https://video.coral.qq.com/varticle/3975532667/comment/v2?callback=_varticle3975532667commentv2&orinum=10&oriorder=o&pageflag=1&cursor='+comid+'&scorecursor=0&orirepnum=2&reporder=o&reppageflag=1&source=132&_=1566444266369'
for i in range(0,100):
    data = urllib.request.urlopen(url).read().decode('utf-8','ignore')
    patnext = '"last":"(.*?)"'
    nextid = re.compile(patnext).findall(data)[0]
    patcom = '"content":"(.*?)",'
    comdata = re.compile(patcom).findall(data)
    for j in range (0,len(comdata)):
        # print('---第'+str(i)+str(j)+'条评论内容是：')
        file.write('\n'+eval('u"'+comdata[j]+'"'))
    url = 'https://video.coral.qq.com/varticle/3975532667/comment/v2?callback=_varticle3975532667commentv2&orinum=10&oriorder=o&pageflag=1&cursor='+nextid+'&scorecursor=0&orirepnum=2&reporder=o&reppageflag=1&source=132&_=1566444266369'

file.close()