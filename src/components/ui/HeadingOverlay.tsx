export const HeadingOverlay = (props: { label: string }) => {
    return (
        <div className="absolute z-10 -top-[3%] inset-x-0 mix-blend-overlay bg-blend-overlay">
            <h5 className='xl:text-[170px] text-center leading-none whitespace-nowrap tracking-[0.15em]'>{props.label}</h5>
        </div>
    )
}
