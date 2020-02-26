def f(x):
    return x*x

a = list(map(f,[1,2,3,4]))
print(a)


def add(x,y):
    return x+y

# print(list(reduce(add,[1,2,3])))


def isOdd(x):
    return x%2 == 1

print(list(filter(isOdd,[1,2,3,4,5,6])))