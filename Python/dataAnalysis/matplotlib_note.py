import matplotlib.pylab as plb
import matplotlib as mpl
import numpy as np
import pandas as pd
import csv


# 解决中文乱码问题
#sans-serif就是无衬线字体，是一种通用字体族。
#常见的无衬线字体有 Trebuchet MS, Tahoma, Verdana, Arial, Helvetica, 中文的幼圆、隶书等等。
mpl.rcParams['font.sans-serif']=['SimHei'] #指定默认字体 SimHei为黑体
mpl.rcParams['axes.unicode_minus']=False #用来正常显示负号

# 折线图/散点图plot
# 直方图hist
'''
x=['1s','sdf',3,4]
y=[4,3,6,1]
# plb.plot(x,y,'o')
# plb.show()
'''


'''
csv_file=csv.reader(open("../files/watcher.csv",'r',encoding='UTF-8'))
name = []
votes = []
for row in csv_file:
    name.append(row[0])
    votes.append(row[2])
plb.plot(name,votes)
plb.title('show')
plb.xlabel('name')
plb.ylabel('votes')
plb.show()
'''

'''
data = np.random.normal(10.0,1.0,10000)
plb.hist(data)
'''
'''
data = np.random.random_integers(1,25,1000)
sty = np.arange(2,17,4)
plb.hist(data,sty)
plb.show()
'''
# 子图
plb.subplot(2,2,1)
x = [3,2,6,4,8]
y = [3,2,5,2,5]
plb.plot(x,y)
plb.subplot(2,2,2)
x2 = [3,2,6,4,8]
y2 = [3,2,5,2,5]
plb.plot(x2,y2)
plb.subplot(2,1,2)
x3 = [1,2,6,4,8]
y3 = [3,2,5,2,5]
plb.plot(x3,y3)
plb.show()
