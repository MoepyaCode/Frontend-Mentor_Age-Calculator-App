import { Wrapper } from '@app-components'
import AgeItem from './item'
import { useAppSelector } from '@app-hooks'


export default function AgeOutput() {
    const AgeState = useAppSelector(state => state.age)
    const { age, validation } = AgeState

    const handleItemValues = (value: number | undefined) => validation.isValid && value ? value : null 

    return (
        <Wrapper className='flex flex-col'>
            {/* Years */}
            <AgeItem title='years' value={handleItemValues(age?.year)} />

            {/* Months */}
            <AgeItem title='months' value={handleItemValues(age?.month)} />

            {/* Days */}
            <AgeItem title='days' value={handleItemValues(age?.day)} />
        </Wrapper>
    )
}
