import { ARR_ARROW_CODES } from "../../constants"
import PlaygroundReducer, {
  initialState,
  setCurrentStep,
  setEnteredValue,
  setSteps,
} from "../slices"

describe("reducer setEnteredValue", () => {
  it("check setEnteredValue", () => {
    const enteredValue = ARR_ARROW_CODES[0]

    const setCurrentStepState = PlaygroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = PlaygroundReducer(setCurrentStepState, setSteps())

    const setEnteredValueState = PlaygroundReducer(
      setStepsState,
      setEnteredValue(enteredValue),
    )

    // console.log(setEnteredValueState)

    expect(setStepsState.steps[0].enteredValue).toBe(null)
    expect(setEnteredValueState.steps[0].enteredValue).toBe(enteredValue)
  })

  it("check totalSuccessful and totalUnsuccessful", () => {
    const setCurrentStepState = PlaygroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = PlaygroundReducer(setCurrentStepState, setSteps())

    const setEnteredValueState = PlaygroundReducer(
      setStepsState,
      setEnteredValue(setStepsState.steps[0].currentValue),
    )

    expect(setStepsState.totalSuccessful).toBe(0)
    expect(setStepsState.totalUnsuccessful).toBe(0)
    expect(setEnteredValueState.totalSuccessful).toBe(1)
    expect(setEnteredValueState.totalUnsuccessful).toBe(0)
  })
})
