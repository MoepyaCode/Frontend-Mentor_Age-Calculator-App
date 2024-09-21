import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initError: ErrorI = {
    message: null,
    hasError: false
}

const initErrors: ErrorsI = {
    day: initError,
    month: initError,
    year: initError
}

const initValidation: ValidationI = {
    errors: initErrors,
    isValid: null
}

const initAgeState: AgeState = {
    age: null,
    validation: initValidation
}

const ageSlice = createSlice({
    name: 'age',
    initialState: initAgeState,
    reducers: {
        setAge: (state, action: PayloadAction<AgeStateI['age']>) => {
            state.age = action.payload
        },
        setValidation: (state, action: PayloadAction<AgeStateI['validation']>) => {
            state.validation = action.payload
        }
    }
})

export const { setAge, setValidation } = ageSlice.actions
export default ageSlice.reducer