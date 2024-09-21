import { Wrapper } from '@app-components'
import { useState } from 'react'

type Props = {
    title: string
    name: string
    charsLimit: number
    error: ErrorI
}

export default function TextInput(props: Props) {
    const [value, setValue] = useState('')
    const { title, error } = props
    const { message, hasError } = error

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (props.charsLimit < event.target.value.length) {
            return setValue(value)
        }
        return setValue(event.target.value)
    }

    return (
        <Wrapper className='max-w-[87.67px] sm:max-w-[160px] flex flex-col gap-2 justify-center'>
            <h3 className='heading-mobile sm:heading-small text-grey-normal'>{title}</h3>

            <input value={value} onChange={onChange} className={`border ${hasError ? 'border-red' : 'border-line focus:border-purple'} transition-colors duration-300 ease-in-out outline-none px-4 py-3 sm:px-6 rounded-lg text-black form-text sm:form-desktop [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`} type="number" name={props.name} required />

            <p className={`text-red body-mobile sm:body ${hasError ? 'opacity-100' : 'opacity-0'} transition-all duration-300 ease-in`}>{message}</p>
        </Wrapper>
    )
}
