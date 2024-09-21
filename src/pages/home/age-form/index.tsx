import { useAgeCalculator, useAppDispatch } from '@app-hooks'
import React, { useEffect } from 'react'
import TextInput from './text-input'
import { Wrapper } from '@app-components'
import ArrowIcon from '@app-assets/icon-arrow.svg'
import { setAge, setValidation } from '@app-store'

export default function AgeForm() {
    const dispatch = useAppDispatch()
    const [onSubmit, setOnSubmit] = React.useState(false)
    const {
        age,
        validation,
        calculateAge,
    } = useAgeCalculator()

    const parseNumber = (value: string) => parseInt(value)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const day = parseNumber(formData.get('day') as string)
        const month = parseNumber(formData.get('month') as string)
        const year = parseNumber(formData.get('year') as string)
        const AgeForm = { day, month, year }
        calculateAge(AgeForm)
        console.log('Form Submitted Data:', AgeForm)
        setOnSubmit(true)
    }

    useEffect(() => {

        if (onSubmit) {
            dispatch(setAge(age))
            dispatch(setValidation(validation))
            setOnSubmit(false)
        }

    }, [age, onSubmit, validation, setOnSubmit, dispatch])

    return (
        <form onSubmit={handleSubmit} className='flex flex-col flex-nowrap gap-8 w-full'>
            <Wrapper className='flex flex-row flex-nowrap w-full gap-4 justify-between sm:justify-start'>
                <TextInput title='DAY' name='day' charsLimit={2} error={validation.errors.day} />
                <TextInput title='MONTH' name='month' charsLimit={2} error={validation.errors.month} />
                <TextInput title='YEAR' name='year' charsLimit={4} error={validation.errors.year} />
            </Wrapper>


            <Wrapper className='relative bg-line h-[1px] w-full flex justify-center items-center my-[32px] sm:my-0 sm:justify-end '>
                <button type='submit' className='absolute max-w-[64px] md:max-w-[96px] w-full aspect-square rounded-full bg-purple hover:bg-black grid place-items-center transition-colors ease-in-out duration-300'>
                    <img className='object-contain max-w-[24px] md:max-w-[44px]' src={ArrowIcon} alt="" />
                </button>
            </Wrapper>
        </form>
    )
}
