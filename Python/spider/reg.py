import re
pat = 'yueqw'
string = 'fadsdfdsffdyue.com'
res = re.search(pat,string)
print(res)
pat2 = 'yue'
res2 = re.search(pat2,string)
print(res2)

pat3 = '\n'
string3 = '''dsfsdff
fdsfdsfdsfsdfs'''
print(re.search(pat3,string3))


'''
\w匹配任意非特殊字符，字母，数字，下划线，\d任意十进制数,\s任意空白字符,\W除了字母数字下划线外的任意字符，\D,\S一样
'''

pat4 = '\w\dpython\w'
string4 = 'fdsafasf2pythonsdfs'
print(re.search(pat4,string4))

pat5 = 'python[jsz]s'
string5 = 'fdsfafagapythonss'
print(re.search(pat5,string5))

'''
元字符
.匹配除了换行符任意字符
^匹配开始位置
$匹配字符串结束位置
*匹配0，1,多次前面的原子
?匹配0次或1次
+匹配1次或多次
{3}前面原子出现了3次
{6,}至少出现6次
{4,6}至少4次，至多6次
t|s 或者

'''

pat6 = '.python...'
string6 = 'sdfsgagdspythonsdfssdfa'
print(re.search(pat6,string6))

pat7 = 'python|php'
string7 = 'sdfsgagdspythonsdfssdfasdfaphpfsdfa'
print(re.search(pat7,string7))

'''
模式修正符
I忽略大小写
M多行匹配
L本地化识别匹配
U根据Unicode字符解析
S使.匹配换行符
'''

pat8 = 'python'
pat81 = 'python'
string8 = 'sdfsgagdsPythonsdfssdfasdfaphpfsdfa'
print(re.search(pat8,string8))
print(re.search(pat81,string8,re.I))

'''
贪婪模式,尽可能多
懒惰模式，尽可能少
'''

pat9 = 'p.*y'
pat91 = 'p.*?y'
string9 = 'fasdgadgpythonfdsafgpy'
print(re.search(pat9,string9))
print(re.search(pat91,string9))
# 从头开始搜索
print(re.match(pat9,string9))
string91 = 'padfadfysdf'
print(re.match(pat9,string91))

# 全局搜索
print(re.compile(pat9).findall(string9))

# .com .cn
pat10 = '[a-zA-Z]+://[^\s]*[.com|.cn]'


