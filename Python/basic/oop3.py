class Student(object):
    # __slots__ = ('name', 'age')
    @property
    def age(self):
        return self._age

    @age.setter
    def age(self,value):
        self._age = value

s = Student()
s.age = 99
print(s.age)
