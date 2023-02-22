export const Button = ({ className, children, style }) => {
    return (
        <button style={style} className={`rounded-[36px] bg-primary text-center w-fit px-[25px] h-fit text-white py-[15px] ${className}`}>
            {children}
        </button>
    )
}

export const OutlineButton = ({ className, children }) => {
    return (
        <button className={`rounded-[36px] gradient-bg border border-[#282D45] text-center w-fit px-[25px] h-fit text-white py-[15px] ${className}`}>
            {children}
        </button>
    )
}