import PlaygroundReducer, { initialState } from "../slices"

// ключ слово дескрайб, принимает 2 аргуманта, название теста и колбек
describe("initial state", () => {
  // внутри одного дескрайб могут быть несколько тестов относящихся к одной группе
  it("chek initial state", () => {
    // внутри теста вызываем редьюсер и смотрим что изначально currentStep должен быть 0,
    // но после вызова редьюсера currentStep уже 1. Если это так то тест успешен
    // создаем константу и в нее вызываем редьюсер
    // в редьюсере 2 аргумента - состояние и экшн
    const state = PlaygroundReducer(undefined, { type: "unknown" })
    console.log(state) // npm run test - чтобы запустить тест

    //state который мы получили должен быть равен initialState
    // для сравнения объектов используется toEqual, для сравнения примитивов используется toBe
    expect(state).toEqual(initialState)
  })
})
