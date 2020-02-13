import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib as mpl
from collections import Counter


def filter_names(data):
    res = []
    for item in data:
        if item[2] == '奥丹姆奇兵':
            res.append(item[1])
    return res

def format_xy(l):
    x = []
    y = []
    for item in l:
        x.append(item[0])
        y.append(item[1])
    return [x,y]


# 解决中文乱码问题
#sans-serif就是无衬线字体，是一种通用字体族。
#常见的无衬线字体有 Trebuchet MS, Tahoma, Verdana, Arial, Helvetica, 中文的幼圆、隶书等等。
mpl.rcParams['font.sans-serif']=['SimHei'] #指定默认字体 SimHei为黑体
mpl.rcParams['axes.unicode_minus']=False #用来正常显示负号

'''
data = pd.read_csv('../files/watcher.csv')
# print(data.values)
# 转置
data2 = data.T
y = data2.values[2]
x = data2.values[0]
plt.plot(x,y,'o')
# plt.hist(y)
plt.show()
'''
data = pd.read_csv('../files/decks.csv')
data = filter_names(data.values)
count = Counter(data)
sorted_count = sorted(count.items(),key=lambda x: x[1],reverse = True)

xy = format_xy(sorted_count)
x = xy[0]
y = xy[1]
plt.plot(x,y,'o')
plt.show()



