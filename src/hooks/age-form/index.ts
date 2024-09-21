import { useState } from "react"

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

export function useAgeCalculator() {
    const [validation, setValidation] = useState<ValidationI>(initValidation)
    const [age, setAge] = useState<AgeI>(null)

    const calculateAge = (dateOfBirthForm: AgeFormI) => {
        const currentDate = new Date()
        const validation = datesValidation(currentDate, dateOfBirthForm)

        setValidation(validation)
        setAge(null)
        if (!validation.isValid) return false

        const { day, month, year } = dateOfBirthForm
        const dateOfBirth = new Date(year, month - 1, day)
        let years = currentDate.getFullYear() - dateOfBirth.getFullYear()
        let months = currentDate.getMonth() - dateOfBirth.getMonth()
        let days = currentDate.getDate() - dateOfBirth.getDate()

        if (months < 0) {
            years--
            months += 12
        }

        if (days < 0) {
            months--
            days += new Date(year, month - 1, 0).getDate()
        }


        setValidation(validation)
        setAge({ year: years, month: months, day: days })
        return true
    }

    return {
        age,
        validation,
        calculateAge
    }
}

function datesValidation(currentDate: Date, dateOfBirthFormValues: AgeFormI): ValidationI {
    const { day, month, year } = dateOfBirthFormValues
    const dateOfBirth = new Date(year, month - 1, day)
    let errors = initErrors
    let isValid = true

    if (currentDate.getFullYear() <= dateOfBirth.getFullYear()) {
        errors = {
            ...errors,
            'year': {
                message: 'Must be in the past',
                hasError: true
            }
        }
        isValid ? isValid = false : null
    }

    if (month < 1 || month > 12) {
        errors = {
            ...errors,
            'month': {
                message: 'Must be a valid month',
                hasError: true
            }
        }
        isValid ? isValid = false : null
    }

    const daysInMonth = new Date(year, month, 0).getDate()
    if (day < 1 || dateOfBirth.getDate() > daysInMonth || day > 31) {
        errors = {
            ...errors,
            'day': {
                message: 'Must be a valid day',
                hasError: true
            }
        }
        isValid ? isValid = false : null
    }

    return isValid ? { ...initValidation, isValid } : { errors, isValid }
}