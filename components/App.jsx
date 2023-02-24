import { useState } from "react"
import { Button, OutlineButton } from "./Utils"
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
                    <p className="text-white text-3xl">End-to-end encrypted inbox and messages</p>
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
                    <div className="border border-borderColor rounded-[10px] p-4 mb-4">
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
                    <div className="border border-borderColor rounded-[10px] p-4 mb-4">
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
                <div className="col-span-2 border rounded-[6px] flex flex-col justify-center relative border-borderColor py-6 px-7">
                    <div className="absolute top-4 right-6 bg-[#41E88D] h-[118px] w-[118px] rounded-[50%] blur-[125px]"></div>
                    <div className="absolute bottom-4 left-6 bg-[#7214FF] h-[118px] w-[118px] rounded-[50%] blur-[125px]"></div>
                    <img src="/images/phone.png" className="block w-[200px] mx-auto" alt="" />
                    <p className="text-white text-xl mt-8 mb-4 font-[500]">Mobile applications</p>
                    <p className="text-sm">Prem ipsum dolor sit amet consectetur. Viverra sed dignissim risus aliquet condimentum. Vulputate varius feugiat egestas congue </p>
                </div>
                <div className="col-span-3 pt-6 px-7 border border-borderColor relative">
                    <div className="absolute bottom-4 -left-2 bg-[#2D55FB] h-[118px] w-[118px] rounded-[50%] blur-[125px]"></div>
                    <div className="absolute top-7 right-6 bg-[#7214FF] h-[118px] w-[118px] rounded-[50%] blur-[125px]"></div>
                    <p className="text-white font-[500] text-2xl">Upload, share and preview any file</p>
                    <p className="mt-4">Tellus et adipiscing sit sit mauris pharetra bibendum. Ligula massa netus nulla ultricies purus.</p>
                    <div className="border border-borderColor pt-4 pl-4 pr-3 mt-7 relative">
                        <div className="grid grid-cols-10 border-b pb-4 mb-5 border-borderColor">
                            <div className="col-span-4 flex items-center">
                                <CheckBox />
                                <p className="ml-4 mr-2">Name</p>
                                <svg className="mt-[2px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 12.6667V3.33337" stroke="#474E70" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3.33334 8.00004L8.00001 3.33337L12.6667 8.00004" stroke="#474E70" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className="col-span-3 text-center">Type</p>
                            <p className="col-span-3 text-right">Size</p>
                        </div>
                        <div className="grid grid-cols-10 items-center border-b pb-4 mb-5 border-borderColor">
                            <div className="col-span-4 flex items-center">
                                <CheckBox />
                                <div className="ml-4 mr-3 p-3 rounded-md border-[2px] border-borderColor">
                                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.4925 0.666626C14.0667 0.666626 15.5 2.14996 15.5 4.69163V13.3C15.5 15.8833 14.0667 17.3333 11.4925 17.3333H4.50833C1.975 17.3333 0.5 15.8833 0.5 13.3V4.69163C0.5 2.14996 1.975 0.666626 4.50833 0.666626H11.4925ZM4.73333 12.1166C4.48333 12.0916 4.24167 12.2083 4.10833 12.425C3.975 12.6333 3.975 12.9083 4.10833 13.125C4.24167 13.3333 4.48333 13.4583 4.73333 13.425H11.2667C11.5992 13.3916 11.85 13.1075 11.85 12.775C11.85 12.4333 11.5992 12.15 11.2667 12.1166H4.73333ZM11.2667 8.31579H4.73333C4.37417 8.31579 4.08333 8.60829 4.08333 8.96663C4.08333 9.32496 4.37417 9.61663 4.73333 9.61663H11.2667C11.625 9.61663 11.9167 9.32496 11.9167 8.96663C11.9167 8.60829 11.625 8.31579 11.2667 8.31579ZM7.22417 4.54163H4.73333V4.54996C4.37417 4.54996 4.08333 4.84163 4.08333 5.19996C4.08333 5.55829 4.37417 5.84996 4.73333 5.84996H7.22417C7.58333 5.84996 7.875 5.55829 7.875 5.19079C7.875 4.83329 7.58333 4.54163 7.22417 4.54163Z" fill="#32CAFD" />
                                    </svg>

                                </div>
                                <p className="text-sm">Q1 overview</p>
                            </div>
                            <p className="text-center text-sm col-span-3">Files</p>
                            <p className="text-right text-sm col-span-3">110 KB</p>
                        </div>
                        <div className="grid grid-cols-10 items-center border-b pb-4 mb-5 border-borderColor">
                            <div className="col-span-4 flex items-center">
                                <CheckBox />
                                <div className="ml-4 mr-3 p-3 rounded-md border-[2px] border-borderColor">
                                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.36484 0.333252C9.63563 0.333252 9.85565 0.546992 9.85565 0.810841V2.81515C9.85565 3.13615 10.1297 3.40235 10.4601 3.40235C10.7986 3.40235 11.0645 3.13615 11.0645 2.81515V0.810841C11.0645 0.546992 11.2846 0.333252 11.5562 0.333252H14.1835C15.9243 0.333252 17.3347 1.70338 17.3347 3.39452V5.36751C17.3347 5.52409 17.2702 5.67285 17.1574 5.78246C17.0446 5.89207 16.8914 5.9547 16.7302 5.9547C16.1339 5.9547 15.6503 6.42446 15.6503 6.996C15.6503 7.57146 16.1282 8.03887 16.719 8.04513C17.0518 8.04826 17.3347 8.27375 17.3347 8.5971V10.6053C17.3347 12.2957 15.9243 13.6666 14.1835 13.6666H11.5562C11.2846 13.6666 11.0645 13.4528 11.0645 13.189V11.4979C11.0645 11.169 10.7986 10.9107 10.4601 10.9107C10.1297 10.9107 9.85565 11.169 9.85565 11.4979V13.189C9.85565 13.4528 9.63563 13.6666 9.36484 13.6666H3.81922C2.08647 13.6666 0.66803 12.2965 0.66803 10.6053V8.5971C0.66803 8.27375 0.950912 8.04826 1.28376 8.04513C1.87532 8.03887 2.35243 7.57146 2.35243 6.996C2.35243 6.44012 1.88499 6.01734 1.27248 6.01734C1.11129 6.01734 0.958165 5.9547 0.845335 5.84509C0.732504 5.73548 0.66803 5.58673 0.66803 5.43014V3.40235C0.66803 1.71434 2.08969 0.333252 3.82728 0.333252H9.36484ZM10.4601 5.08565C10.1297 5.08565 9.85565 5.35185 9.85565 5.67285V8.80458C9.85565 9.12558 10.1297 9.39178 10.4601 9.39178C10.7986 9.39178 11.0645 9.12558 11.0645 8.80458V5.67285C11.0645 5.35185 10.7986 5.08565 10.4601 5.08565Z" fill="#2D55FB" />
                                    </svg>

                                </div>
                                <p className="text-sm">Team Review</p>
                            </div>
                            <p className="text-center text-sm col-span-3">Docx</p>
                            <p className="text-right text-sm col-span-3">11.5 MB</p>
                        </div>
                        <div className="grid grid-cols-10 items-center border-b pb-4 mb-5 border-borderColor">
                            <div className="col-span-4 flex items-center">
                                <CheckBox />
                                <div className="ml-4 mr-3 p-3 rounded-md border-[2px] border-borderColor">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.54169 0.666763C7.31752 0.658572 8.04169 1.01691 8.51669 1.62524L9.25002 2.60024C9.48335 2.89191 9.83335 3.06691 10.2084 3.06691H12.7667C15.8417 3.06691 17.3417 4.70857 17.3334 8.07524V12.1336C17.3334 15.3502 15.35 17.3336 12.125 17.3336H5.86669C2.65835 17.3336 0.666687 15.3502 0.666687 12.1252V5.86691C0.666687 2.41691 2.20002 0.666763 5.22502 0.666763H6.54169ZM12.8584 10.4919H5.14169C4.79169 10.4919 4.51669 10.7669 4.51669 11.1169C4.51669 11.4586 4.79169 11.7419 5.14169 11.7419H12.8584C13.2 11.7419 13.475 11.4586 13.475 11.1169C13.475 10.7669 13.2 10.4919 12.8584 10.4919Z" fill="#B756FE" />
                                    </svg>
                                </div>
                                <p className="text-sm">Fetch table.py</p>
                            </div>
                            <p className="text-center text-sm col-span-3">Code</p>
                            <p className="text-right text-sm col-span-3">10.5 GB</p>
                        </div>
                        <div className="grid grid-cols-10 items-center border-b pb-4 border-borderColor">
                            <div className="col-span-4 flex items-center">
                                <CheckBox />
                                <div className="ml-4 mr-3 p-3 rounded-md border-[2px] border-borderColor">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.44435 12.1869L10.4898 12.1992C10.7421 12.2001 10.9463 12.4114 10.9463 12.6703V14.9462C10.9463 15.206 10.7987 15.4411 10.5688 15.5498L6.89651 17.2742C6.81071 17.314 6.71976 17.3334 6.62882 17.3334C6.50784 17.3334 6.38686 17.2981 6.28133 17.2282C6.09686 17.1063 5.98532 16.8959 5.98532 16.6705V12.6579C5.98532 12.3972 6.19124 12.186 6.44435 12.1869ZM15.2708 0.666748C16.2506 0.666748 17.0443 1.48429 17.0443 2.49363V3.76988C17.0443 4.25952 16.8529 4.72972 16.5132 5.07265L11.0923 10.5559C10.9988 10.6514 10.8718 10.7044 10.7405 10.7035L6.2017 10.6894C6.06357 10.6894 5.93229 10.6302 5.83791 10.5268L0.856358 5.0479C0.548336 4.70939 0.377594 4.26217 0.377594 3.79816V2.49451C0.377594 1.48518 1.17124 0.666748 2.15108 0.666748H15.2708Z" fill="#DF2DB1" />
                                    </svg>
                                </div>
                                <p className="text-sm">Cap table.xls</p>
                            </div>
                            <p className="text-center text-sm col-span-3">XLS</p>
                            <p className="text-right text-sm col-span-3">20 MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-16 justify-center gap-x-7">
                <Button>Get Started</Button>
                <OutlineButton>Browse all feature</OutlineButton>
            </div>
        </section>
    )
}

export default AppSection

const CheckBox = () => {
    const [checked, setChecked] = useState(false)
    return (
        <div className={`cursor-pointer border-2 w-5 rounded-[3px] h-5 flex items-center justify-center border-borderColor ${checked && 'border-primary'}`} onClick={() => setChecked(!checked)}>
            {checked &&
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L3.5 6.5L1 4" stroke="#7214FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            }
        </div>
    )
}