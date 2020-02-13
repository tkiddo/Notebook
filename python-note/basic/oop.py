class Student(object):
    def __init__(self,name,score):
        # private
        self.__name = name
        # public
        self.score = score

    def print_score(self):
        print('%s:%s' % (self.__name,self.score))

    def get_name(self):
        return self.__name
    
    def set_name(self,name):
        self.__name = name

bart = Student('sra',33)

print(bart.get_name())
bart.set_name('king')
bart.print_score()