class Animal(object):
    type = 'animal'
    def run(self):
        print('animal is running')

class Dog(Animal):
    def run(self):
        print('dog is running')

dog = Dog()
dog.run()
print(dog.type)