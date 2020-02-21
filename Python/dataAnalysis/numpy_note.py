'''
import numpy

x = numpy.array(['a','4','3'])
y = numpy.array([[2,3,4],[4,5,6]])

# 排序
x.sort()

# 最大值最小值
y1 = y.max()
y2 = y.min()

# 切片
# array[start:end]包含头，不含尾
x1 = x[0:2]

print(y.shape,y.size)
'''

import numpy as np
a = np.array([2,3,4,3],dtype=np.int32)
print(a.dtype)

arr  =np.array([[1,2,3],[3,2,1]])
print(arr*arr)

