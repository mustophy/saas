export const Button = ({ className, children, style }) => {
    return (
        <button style={style} className={`rounded-[36px] bg-primary text-center w-fit px-[25px] h-fit text-white py-[15px] ${className}`}>
            {children}
        </button>
    )
}