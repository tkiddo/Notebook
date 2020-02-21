import urllib.request
import re
keyname = '美食'
key = urllib.request.quote(keyname)
headers = ('User-Agent','Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1')
opener = urllib.request.build_opener()
opener.addheaders = [headers]
urllib.request.install_opener(opener)
for i in range(0,1):
    url = 'https://s.taobao.com/search?spm=a21bo.2017.201867-main.25.5af911d937VVp5&q='+str(key)+'&imgfile=&js=1&stats_click=search_radio_all%3A1&initiative_id=staobaoz_20180724&ie=utf8&bcoffset=0&ntoffset=6&p4ppushleft=1%2C48&s='+str(i*44)
    data = urllib.request.urlopen(url).read().decode('utf-8','ignore')
    print(str(data))
    pat = '"pic_url":"//(.*?)"'
    imageUrl = re.compile(pat).findall(data)
    print(imageUrl)





'''

'''