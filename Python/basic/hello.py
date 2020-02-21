print('hello,world');
# name = input('please enter your name:');
# print(name);

#something 

print('I\'m ok')

print('''line1
... line2
... line3''')

age = 30;
if age >= 18:
    print('adult')
else:
    print('teenager')


names = ['michale','bob']
for name in names:
    print(name)


sum = 0
n = 99
while n >0:
    sum = sum+n
    n = n-2
print(sum)


d = {'michale':11}
if 'michale' in d:
    print(d['michale'])


s = set([1,2,3,4,1,2,3,4])
print(s)


def my_abs(x):
    if not isinstance(x,(int,float)):
        raise TypeError('bad type')
    if x >=0:
        return x
    else:
        return -x


print(my_abs('dfd'))

def nop():
    pass