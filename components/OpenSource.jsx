import { OutlineButton } from "./Utils"

const OpenSource = () => {
    return (
        <div className="px-8 py-[100px] bg-[#0E1330] mt-16">
            <div className="grid grid-cols-2 gap-x-16 items-center">
                <div className="pr-10">
                    <p className="text-white text-3xl font-[500]">Transparent, audited, </p>
                    <p className="gradient-text text-3xl -mt-5">& open source </p>
                    <p className="text-sm mb-7 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio illum totam, doloribus voluptatem magnam hic, aperiam quod assumenda, expedita mollitia voluptates quaerat eveniet nobis beatae velit minus omnis? Dignissimos, vero.</p>
                    <OutlineButton>Browse all features</OutlineButton>
                </div>
                <div className="border-2 border-[#233256] rounded-lg h-[160px] relative">
                    <div className="border-2 border-[#233256] rounded-md absolute bg-[#0E1330] p-4 -top-[80px] -left-[2px] w-[80%] ">
                        <img src="/images/code.png" className="h-full" alt="" />
                    </div>
                    <div className="border-2 border-[#233256] rounded-lg absolute bg-[#0E1330] p-4 -bottom-[80px] -right-[2px] w-[80%]">
                        <p className="text-xs text-[#4C8776]">// recoverySigningPublicKey is the public key component of the keypair used
                            <br /> // to sign SSS shards. Upon share re-combination, spliterati verifies attached
                            <br /> // signatures of each shard to confirm that the shard is correct.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-6 mt-20">
                <div className="px-6 pt-6 bg-[#060B27] rounded-md">
                    <p className="text-2xl font-[500] text-white">Product Mail</p>
                    <p className="text-[#8F9BB7] text-sm mt-2 mb-7">Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.</p>
                    <div className="w-[85%] mx-auto bg-[#0E1330] rounded-t-[10px] pt-[13px] px-5">
                        <p className=" text-white mb-4">New Message</p>
                        <div className="flex items-center pb-3 border-b-2 border-[#282D45]">
                            <p className="mr-4 text-sm">To</p>
                            <div className="flex items-center bg-[#282D45] px-3 py-1 rounded-[30px]">
                                <p className="text-sm mr-2 text-[#F6F6F7]">Sajib H.</p>
                                <svg className="cursor-pointer" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12" stroke="#8F9BB7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4 4L12 12" stroke="#8F9BB7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className="ml-auto text-sm mr-3">CC</p>
                            <p className="text-sm">BCC</p>
                        </div>
                        <div className="flex items-center pb-3 mt-7 border-b-2 border-[#282D45]">
                            <p className="mr-4 text-sm w-16">Subject</p>
                            <p className="text-[#F6F6F7] text-sm">Dacilisis tellus tinc</p>
                        </div>
                        <div className="flex items-center pb-3 mt-7 border-b-2 border-[#282D45]">
                            <p className="mr-4 text-sm w-16">From</p>
                            <p className="text-[#F6F6F7] text-sm">acilisis@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="px-6 pt-6 bg-[#060B27] flex flex-col rounded-md">
                    <p className="text-2xl font-[500] text-white">Product UI</p>
                    <p className="text-[#8F9BB7] text-sm mt-2 mb-7">Honsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.</p>
                    <img src="/images/product-ui.png" className="flex-1" alt="" />
                </div>
            </div>
        </div>
    )
}

export default OpenSource