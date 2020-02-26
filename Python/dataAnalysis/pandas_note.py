import pandas as pd
'''
# series
a = pd.Series([8,9,10])
b = pd.Series([8,9,10],index=[3,5,6])

# dataFrame
c = pd.DataFrame([[1,2,3],[4,5,6]])
d = pd.DataFrame([[1,2,3],[4,5,6]],columns=['a','b','c'])
e = pd.DataFrame({
    "one":4,
    "two":[1,2,3]
})
# 头部数据，默认前五行
e.head()
# 尾部数据,默认后五行
e.tail()
'''

i = pd.read_csv('../files/watcher.csv')
# print(i.describe())
j = pd.read_excel('../files/abc.xlsx')
# print(j.describe())
k = pd.read_table('../files/abc.txt')
print(k)