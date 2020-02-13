import urllib.request
def use_proxy(url,proxyIp):
    proxy = urllib.request.ProxyHandler({'http':proxyIp})
    opener = urllib.request.build_opener(proxy,urllib.request.HTTPHandler)
    urllib.request.install_opener(opener)
    data = urllib.request.urlopen(url).read().decode('utf-8','ignore')
    return data

proxyIp = '163.204.245.9:9999'
url = 'http://www.baidu.com'
data = use_proxy(url,proxyIp)
print(len(data))