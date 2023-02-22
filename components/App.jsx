import { OutlineButton } from "./Utils"
import { DocumentIcon, EmailIcon, EventIcon, FileIcon } from "./svgs"

const AppSection = () => {
    return (
        <section className="mt-24">
            <h2 className="text-center gradient-text text-3xl">Essential apps that protect your</h2>
            <div className="flex justify-center items-center -mt-6">
                <EmailIcon />
                <span className="ml-[3px] mr-4 gradient-text text-3xl">Email,</span>
                <EventIcon />
                <span className="ml-[3px] mr-4 gradient-text text-3xl">Events,</span>
                <FileIcon />
                <span className="ml-[3px] mr-4 gradient-text text-3xl">Files,</span>
                <DocumentIcon />
                <span className="ml-[3px] gradient-text text-3xl">Documents</span>
            </div>
            <div className="mt-10 p-16 bg-[#0E1330] relative grid items-center grid-cols-2 gap-x-20">
                <div className="absolute w-[187px] h-[223px] bg-primary left-[-57px] -bottom-10 rounded-[50%] blur-[250px]"></div>
                <div className="absolute w-[187px] h-[223px] bg-[#32CAFD] right-[-57px] -top-7 rounded-[50%] blur-[250px]"></div>
                <div>
                    <p className="text-white text-2xl">End-to-end encrypted inbox and messages</p>
                    <p className="text-sm mt-4 mb-9">Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor mauris viverra sed volutpat mauris. Amet nisi amet commodo adipiscing ut imperdiet nunc.</p>
                    <OutlineButton> Learn More</OutlineButton>
                </div>
                <div className="p-4 border border-borderColor rounded-[10px]">
                    <div className="flex">
                        <div className="bg-bgDark w-8 h-8 flex items-center justify-center rounded-md ">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.496 4L4.38574 12" stroke="#8F9BB7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.38574 4L12.496 12" stroke="#8F9BB7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="bg-bgDark w-8 h-8 flex items-center justify-center ml-8 mr-2 rounded-md ">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.35529 3.98792V13.3212" stroke="#8F9BB7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.6859 11.1826L8.32286 14.5L5.28152 11" stroke="#8F9BB7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="bg-bgDark w-8 h-8 flex items-center justify-center mr-auto rounded-md ">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.79614 13.3212L8.79614 3.98783" stroke="#282D45" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.4655 6.12643L8.82857 2.80908L11.8699 6.30908" stroke="#282D45" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div className="bg-[#8F9BB7] h-8 w-8 flex items-center justify-center mr-2 rounded-md ">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.81741 9.47266L2.69241 6.34766L5.81741 3.22266" stroke="#0E1330" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.6924 13.2227V8.84766C12.6924 8.18462 12.429 7.54873 11.9602 7.07989C11.4913 6.61105 10.8555 6.34766 10.1924 6.34766H2.69241" stroke="#0E1330" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="bg-bgDark w-8 h-8 flex items-center justify-center mr-2 rounded-md ">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.44242 8.88936L2.52575 5.9727L5.44242 3.05603" stroke="#8F9BB7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.8591 12.3893V8.30599C11.8591 7.68715 11.6132 7.09366 11.1757 6.65607C10.7381 6.21849 10.1446 5.97266 9.52575 5.97266H2.52575" stroke="#8F9BB7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="bg-bgDark w-8 h-8 flex items-center justify-center rounded-md ">
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.20663 8.16671L12.1233 5.25004L9.20663 2.33337" stroke="#8F9BB7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2.78997 11.6667V7.58333C2.78997 6.96449 3.0358 6.371 3.47338 5.93342C3.91097 5.49583 4.50446 5.25 5.1233 5.25H12.1233" stroke="#8F9BB7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <p className="mt-5 mb-4 text-white text-xl font-semibold">Invitation to present at Bsides</p>
                    <div className="border border-borderColor p-4 mb-4">
                        <div className="flex items-center">
                            <img src="/images/avatar4.png" className="h-8 w-8 rounded-[5px] mr-2" alt="" />
                            <div>
                                <p className="text-white ">R. Baynham</p>
                                <p className="text-xs -mt-[2px]">tranthuy.nute@gmail.com</p>
                            </div>
                            <p className="ml-auto text-xs mb-4">Feb 8, 2023</p>
                        </div>
                        <p className="text-sm leading-[22px] mt-4">Lorem ipsum dolor sit amet consectetur. Non eget facilisis justo euismod ante mauris orci cursus. </p>
                    </div>
                    <div className="border border-borderColor p-4 mb-4">
                        <div className="flex items-center">
                            <img src="/images/avatar5.png" className="h-8 w-8 rounded-[5px] mr-2" alt="" />
                            <div>
                                <p className="text-white ">Cooper Kristin</p>
                                <p className="text-xs -mt-[2px]">tranthuy.nute@gmail.com</p>
                            </div>
                            <p className="ml-auto text-xs mb-4">Jan 10, 2023</p>
                        </div>
                        <p className="text-sm leading-[22px] mt-4">Lorem ipsum dolor sit amet consectetur. Non eget facilisis justo euismod ante mauris orci cursus. </p>
                    </div>

                </div>
            </div>
            <div className="mt-10 grid grid-cols-5 gap-x-7">
                <div className="col-span-2 border rounded-[6px] relative border-borderColor py-6 px-7">
                    <div className="absolute top-4 right-6 bg-[#41E88D] h-[118px] w-[118px] rounded-[50%] blur-[125px]"></div>
                    <div className="absolute bottom-4 left-6 bg-[#7214FF] h-[118px] w-[118px] rounded-[50%] blur-[125px]"></div>
                    <img src="/images/phone.png" className="block w-[200px] mx-auto" alt="" />
                    <p className="text-white text-xl mt-8 mb-4 font-[500]">Mobile applications</p>
                    <p className="text-sm">Prem ipsum dolor sit amet consectetur. Viverra sed dignissim risus aliquet condimentum. Vulputate varius feugiat egestas congue </p>
                </div>
                <div className="col-span-3 pt-6 px-7 border border-borderColor relative">
                <div className="absolute top-7 right-6 bg-[#7214FF] h-[118px] w-[118px] rounded-[50%] blur-[125px]"></div>
                    <p className="text-white font-[500] text-2xl">Upload, share and preview any file</p>
                    <p className="mt-4">Tellus et adipiscing sit sit mauris pharetra bibendum. Ligula massa netus nulla ultricies purus.</p>
                    <div className="border border-borderColor pt-4 pl-3 pr-1">
                        <div className="grid grid-cols-7">
                            <div className="col-span-3"></div>
                            <p className="col-span-2">Type</p>
                            <p className="col-span-2">Size</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppSection