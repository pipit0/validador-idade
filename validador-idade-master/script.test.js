/** @jest-environment jsdom */

const { validarIdade } = require("./script")

test("caso seja maior de idade +18", function(){
    var idade = validarIdade ('18')
    expect(idade).toBe(true)
})
test ("caso for menor de idade (17)", function(){
    var idade = validarIdade('17')

    expect(idade).toBe(false)
})
