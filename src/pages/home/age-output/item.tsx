
type Props = {
    title: string
    value: number | null
}

export default function AgeItem(props: Props) {
    return (
        <h2 className='flex gap-2 output-mobile sm:heading-large'>
            <span className='text-purple'>{props.value ?? '--'}</span>
            <span className='text-black'>{props.title}</span>
        </h2>
    )
}