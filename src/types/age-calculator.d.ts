declare type AgeI = AgeFormI | null

declare interface AgeFormI {
    /**
     * @description The day of the birthdate
     */
    day: number
    /**
     * @description The month of the birthdate
     */
    month: number
    /**
     * @description The year of the birthdate
     */
    year: number
}

declare interface ErrorI {
    /**
     * @description The error message
     */
    message: string | null
    /**
     * @description The error status
     */
    hasError: boolean
}

declare type ErrorsI = Record<keyof AgeFormI, ErrorI>

declare interface ValidationI {
    /**
     * @description The errors of the form
     */
    errors: Record<keyof AgeFormI, ErrorI>
    /**
     * @description The validation status
     */
    isValid: boolean | null
}

declare type AgeState = AgeStateI | null

declare interface AgeStateI {
    /**
     * @description The age of the user
     */
    age: AgeI | null
    /**
     * @description The validation status
     */
    validation: ValidationI
}