import { Button } from "./Utils"
import { Logo, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./svgs"

const NewsLetter = () => {
    return (
        <div className="w-full pt-14">
            <div className="grid grid-cols-7 gap-x-14">
                <div className="col-span-3">
                    <div className="flex mb-7">
                        <Logo className="h-8" />
                        <h3 className="text-white text-2xl font-semibold ml-[10px]">Product</h3>
                    </div>
                    <div className="rounded-[10px] bg-[#0E1330] p-7 border border-[#282d45]">
                        <h2 className="text-white text-2xl">Subscribe to our newsletter</h2>
                        <input type="email" placeholder="Enter your email" className="py-[10px] px-[27px] w-full mt-[19px] mb-[15px] bg-[#060B27] border border-[#282D45] rounded-[50px] placeholder:text-[#47507A]" />
                        <Button className="w-full">Subscribe</Button>
                    </div>
                </div>
                <div className="col-span-4 grid grid-cols-3">
                    <div>
                        <p className="mb-8 text-lg">Pages</p>
                        <p className="text-sm mb-4 cursor-pointer">Home</p>
                        <p className="text-sm mb-4 cursor-pointer">About</p>
                        <p className="text-sm mb-4 cursor-pointer">Contact</p>
                        <p className="text-sm mb-4 cursor-pointer">Blog</p>
                        <p className="text-sm mb-4 cursor-pointer">Blog post</p>
                        <p className="text-sm mb-4 cursor-pointer">Pricing</p>
                        <p className="text-sm mb-4 cursor-pointer">Pricing single</p>
                    </div>
                    <div className="pt-[62px]">
                        <p className="text-sm mb-4 cursor-pointer">Features</p>
                        <p className="text-sm mb-4 cursor-pointer">Careers</p>
                        <p className="text-sm mb-4 cursor-pointer">Careers single</p>
                        <p className="text-sm mb-4 cursor-pointer">Request a demo</p>
                        <p className="text-sm mb-4 cursor-pointer">Login</p>
                        <p className="text-sm mb-4 cursor-pointer">Sign Up</p>
                    </div>
                    <div>
                        <p className="mb-8 text-lg">Utility Pages</p>
                        <p className="text-sm mb-4 cursor-pointer">Style guide</p>
                        <p className="text-sm mb-4 cursor-pointer">Password protected</p>
                        <p className="text-sm mb-4 cursor-pointer">404 not found</p>
                        <p className="text-sm mb-4 cursor-pointer">Blog</p>
                        <p className="text-sm mb-4 cursor-pointer">Licenses</p>
                        <p className="text-sm mb-4 cursor-pointer">Changelog</p>
                    </div>
                </div>
            </div>
            <div className="h-[1px]  mt-10 mb-8 bg-[#282D45]"></div>
            <div className="flex items-center justify-between">
                <p className="text-[12px]">Copyright © Product | Designed by <span className="text-white text-[12px]"> Webocean LTD </span> - Powered by <span className="text-white text-[12px]">Webflow</span></p>
                <div className="grid grid-cols-4 gap-x-[15px]">
                    <div className="h-[34px] w-[34px] flex items-center justify-center border border-[#282D45] rounded-lg cursor-pointer">
                        <FacebookIcon />
                    </div>
                    <div className="h-[34px] w-[34px] flex items-center justify-center border border-[#282D45] rounded-lg cursor-pointer">
                        <TwitterIcon />
                    </div>
                    <div className="h-[34px] w-[34px] flex items-center justify-center border border-[#282D45] rounded-lg cursor-pointer">
                        <LinkedinIcon />
                    </div>
                    <div className="h-[34px] w-[34px] flex items-center justify-center border border-[#282D45] rounded-lg cursor-pointer">
                        <InstagramIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsLetter