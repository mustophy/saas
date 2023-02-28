const { Logo } = require("./svgs")

export const Navbar = () => {
    return (
        <div className="flex mx-[100px] py-6">
            <Logo />
            <h3 className="text-white text-3xl font-semibold ml-[10px]">Product</h3>
            <svg width="5" height="5" viewBox="0 0 5 5" className="mt-[25px] ml-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.34572 4.4115C1.66287 4.4115 1.09642 4.20501 0.647199 3.79285C0.215599 3.36229 0 2.83319 0 2.20555C0 1.5779 0.215599 1.0578 0.647199 0.645637C1.09642 0.215077 1.66287 0 2.34572 0C3.01095 0 3.55936 0.215077 3.99055 0.645637C4.42215 1.0578 4.63775 1.5779 4.63775 2.20555C4.63775 2.83319 4.42215 3.36229 3.99055 3.79285C3.55936 4.20501 3.01095 4.4115 2.34572 4.4115Z" fill="#7214FF" />
            </svg>
            <ul className="grid grid-cols-5 mt-2 gap-x-[25px] mx-auto">
                <li className="text-white cursor-pointer h-2 ">Home</li>
                <li className="cursor-pointer hover:border-b-2 hover:text-yellow-50 border-primary pb-2 h-fit">About</li>
                <li className="cursor-pointer hover:border-b-2 hover:text-yellow-50 border-primary pb-2 h-fit">Feature</li>
                <li className="cursor-pointer hover:border-b-2 hover:text-yellow-50 border-primary pb-2 h-fit">Pricing</li>
                <li className="cursor-pointer hover:border-b-2 hover:text-yellow-50 border-primary pb-2 h-fit">Blog</li>
            </ul>
            <button className="px-[25px] py-[15px] text-white bg-[#7214FF] text-[16px] rounded-[36px]">Get a demo</button>
        </div>
    )
}