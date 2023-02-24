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
                        <p className="text-sm mb-4">Home</p>
                        <p className="text-sm mb-4">About</p>
                        <p className="text-sm mb-4">Contact</p>
                        <p className="text-sm mb-4">Blog</p>
                        <p className="text-sm mb-4">Blog post</p>
                        <p className="text-sm mb-4">Pricing</p>
                        <p className="text-sm mb-4">Pricing single</p>
                    </div>
                    <div className="pt-[62px]">
                        <p className="text-sm mb-4">Features</p>
                        <p className="text-sm mb-4">Careers</p>
                        <p className="text-sm mb-4">Careers single</p>
                        <p className="text-sm mb-4">Request a demo</p>
                        <p className="text-sm mb-4">Login</p>
                        <p className="text-sm mb-4">Sign Up</p>
                    </div>
                    <div>
                        <p className="mb-8 text-lg">Utility Pages</p>
                        <p className="text-sm mb-4">Style guide</p>
                        <p className="text-sm mb-4">Password protected</p>
                        <p className="text-sm mb-4">404 not found</p>
                        <p className="text-sm mb-4">Blog</p>
                        <p className="text-sm mb-4">Licenses</p>
                        <p className="text-sm mb-4">Changelog</p>
                    </div>
                </div>
            </div>
            <div className="h-[1px]  mt-10 mb-8 bg-[#282D45]"></div>
            <div className="flex items-center justify-between">
                <p className="text-[12px]">Copyright © Product | Designed by <span className="text-white text-[12px]"> Webocean LTD </span> - Powered by <span className="text-white text-[12px]">Webflow</span></p>
                <div className="grid grid-cols-4 gap-x-[15px]">
                    <div className="h-[34px] w-[34px] flex items-center justify-center border border-[#282D45] rounded-lg">
                        <FacebookIcon />
                    </div>
                    <div className="h-[34px] w-[34px] flex items-center justify-center border border-[#282D45] rounded-lg">
                        <TwitterIcon />
                    </div>
                    <div className="h-[34px] w-[34px] flex items-center justify-center border border-[#282D45] rounded-lg">
                        <LinkedinIcon />
                    </div>
                    <div className="h-[34px] w-[34px] flex items-center justify-center border border-[#282D45] rounded-lg">
                        <InstagramIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsLetter