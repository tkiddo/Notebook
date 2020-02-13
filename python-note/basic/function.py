'''
#作用域
i=10;
def fn():
    global j
    j=i+1;
    print(j)
fn()
print(j)
'''

#函数的定义和调用
def fa():
    print('123')