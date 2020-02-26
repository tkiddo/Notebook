#模式r读，w写，wr二进制写
'''
file = open('./files/text1.txt','w')
file.write('hello world')
file.close()
print('done')
'''

fl = open('./files/text1.txt','r')
data1 = fl.read()
print(data1)