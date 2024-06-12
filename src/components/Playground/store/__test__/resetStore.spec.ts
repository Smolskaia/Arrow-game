import PlaygroundReducer, {
  initialState,
  resetStore,
  setCurrentStep,
} from "../slices"

describe("reduser resetStore", () => {
  it("check resetStore", () => {
    const setCurrentStepState = PlaygroundReducer(
      initialState,
      setCurrentStep(),
    )

    const resetStoreState = PlaygroundReducer(setCurrentStepState, resetStore())

    expect(resetStoreState).toEqual(initialState)
  })
})
