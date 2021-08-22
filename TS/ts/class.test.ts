import rewire from "rewire"
const _class = rewire("./class")
const Person = _class.__get__("Person")

const Web = _class.__get__("Web")
const Animal = _class.__get__("Animal")
const Dog = _class.__get__("Dog")
const Cat = _class.__get__("Cat")
const Dogg = _class.__get__("Dogg")
// @ponicode
describe("run", () => {
    let inst: any

    beforeEach(() => {
        inst = new Person("$dummy_name")
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.run()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("setName", () => {
    let inst: any

    beforeEach(() => {
        inst = new Person("/dummy_name")
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.setName("dummy_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.setName("/dummy_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.setName("DUMMYNAME")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.setName("dummy_name/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.setName("$dummy_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.setName("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("sleep", () => {
    let inst: any

    beforeEach(() => {
        inst = new Person("dummyName")
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.sleep()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("hello", () => {
    let inst: any

    beforeEach(() => {
        inst = new Person("/dummy_name")
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.hello()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("run", () => {
    let inst: any

    beforeEach(() => {
        inst = new Web("dummy_name/")
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.run()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("work", () => {
    let inst: any

    beforeEach(() => {
        inst = new Web("dummy_name")
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.work()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("say", () => {
    let inst: any

    beforeEach(() => {
        inst = new Web("dummy_name/")
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.say()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("eat", () => {
    let inst: any

    beforeEach(() => {
        inst = new Animal("dummy_name")
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.eat()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("eat", () => {
    let inst: any

    beforeEach(() => {
        inst = new Dog("DUMMYNAME")
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.eat()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("eat", () => {
    let inst: any

    beforeEach(() => {
        inst = new Cat("DUMMYNAME")
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.eat()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("eat", () => {
    let inst: any

    beforeEach(() => {
        inst = new Dogg("dummyname")
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.eat()
        }
    
        expect(callFunction).not.toThrow()
    })
})
