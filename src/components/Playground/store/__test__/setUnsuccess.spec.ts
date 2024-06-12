import PlaygroundReducer, {
  initialState,
  setCurrentStep,
  setSteps,
  setUnsuccess,
} from "../slices"

describe("reduser setUnsuccess", () => {
  it("check setUnsuccess", () => {
    const setCurrentStepState = PlaygroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsState = PlaygroundReducer(setCurrentStepState, setSteps())

    const setUnsuccessState = PlaygroundReducer(setStepsState, setUnsuccess())

    // console.log(setUnsuccessState)

    expect(setUnsuccessState.totalUnsuccessful).toBe(1)
    expect(setUnsuccessState.steps[0].success).toBe(false)
  })
})
