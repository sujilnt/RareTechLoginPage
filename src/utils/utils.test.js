const utils = require("./utils")
// @ponicode
describe("utils.default", () => {
    test("0", () => {
        let callFunction = () => {
            utils.default("Chief Product Officer")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.default("Data Scientist")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.default("Marketing")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.default("Sales")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.default("Software Engineer")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
