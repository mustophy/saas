import { Button } from "./Utils"
const Hero = () => {
    return (
        <div className="py-[70px] ">
            <h2 className="gradient-text text-[46px]">A CRM dashboard for engineering teams</h2>
            <p className="w-[799px] mx-auto mt-[30px]">Rorem ipsum dolor sit amet consectetur. Gravida convallis orci ultrices non. Ultricies tempor at ut cursus mi. Aliquam sed amet vitae orci ac penatibus consectetur.</p>
            <div className="flex gap-x-[30px] justify-center mt-[30px]">
                <Button>Get a demo</Button>
                <Button style={{ backgroundColor: '#060B27' }} className="border">View pricing</Button>
            </div>
            <div className="mx-auto mt-10">
                <div className="bg-[#282D45] rounded-t-[5px] pl-[15px] py-[10px]">
                    <div className="flex gap-x-[6px]">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#0E1330" />
                        </svg>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#0E1330" />
                        </svg>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="5" fill="#0E1330" />
                        </svg>
                    </div>
                </div>
                <div className="bg-[#0E1330] pt-[31px] pb-[39px] px-10">
                    <div className="flex">
                        <img src="/images/avatar.png" className="w-[53px] h-[53px] bg-yellow-800 rounded-full" />
                        <div className="ml-[15px] mr-auto">
                            <h3 className="text-white mb-[4px] text-[20px] text-left">Hello Sajeeb!</h3>
                            <p className="text-[14px]">We hope you're having a great night.</p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="h-[1px] mt-7 mb-5 bg-slate-400"></div>
                    <div className="grid grid-cols-4 gap-x-4">
                        <div className="bg-[#060B27] px-4 py-[10px] rounded">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4497 3.7803C15.4097 4.0303 15.3897 4.2803 15.3897 4.5303C15.3897 6.7803 17.2097 8.5993 19.4497 8.5993C19.6997 8.5993 19.9397 8.5703 20.1897 8.5303V16.5993C20.1897 19.9903 18.1897 22.0003 14.7897 22.0003H7.40069C3.99969 22.0003 1.99969 19.9903 1.99969 16.5993V9.2003C1.99969 5.8003 3.99969 3.7803 7.40069 3.7803H15.4497ZM15.6507 9.8603C15.3797 9.8303 15.1107 9.9503 14.9497 10.1703L12.5307 13.3003L9.7597 11.1203C9.58969 10.9903 9.38969 10.9393 9.18969 10.9603C8.99069 10.9903 8.81069 11.0993 8.68969 11.2593L5.73069 15.1103L5.66969 15.2003C5.49969 15.5193 5.57969 15.9293 5.87969 16.1503C6.01969 16.2403 6.16969 16.3003 6.33969 16.3003C6.57069 16.3103 6.78969 16.1893 6.92969 16.0003L9.43969 12.7693L12.2897 14.9103L12.3797 14.9693C12.6997 15.1393 13.0997 15.0603 13.3297 14.7593L16.2197 11.0303L16.1797 11.0503C16.3397 10.8303 16.3697 10.5503 16.2597 10.3003C16.1507 10.0503 15.9097 9.8803 15.6507 9.8603ZM19.5898 2C20.9198 2 21.9998 3.08 21.9998 4.41C21.9998 5.74 20.9198 6.82 19.5898 6.82C18.2598 6.82 17.1798 5.74 17.1798 4.41C17.1798 3.08 18.2598 2 19.5898 2Z" fill="#2D55FB" />
                            </svg>
                            <div className="mt-2 mb-[6px] flex items-center gap-x-[8px]">
                                <p className="text-[#F6F6F7] text-[14px]">Total Revenue</p>
                                <span className="text-[#41E88D] text-[12px] px-[10px] py-[3px] bg-[#B7FFC41A]/10 rounded-[20px]">+15%</span>
                            </div>
                            <h2 className="text-3xl text-white font-semibold">$59,158</h2>
                        </div>
                        <div className="bg-[#060B27] px-4 py-[10px] rounded">
                            <svg width="18" height="24" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.191 0C16.28 0 18 1.78 18 4.83V15.16C18 18.26 16.28 20 13.191 20H4.81C1.77 20 0 18.26 0 15.16V4.83C0 1.78 1.77 0 4.81 0H13.191ZM5.08 13.74C4.78 13.71 4.49 13.85 4.33 14.11C4.17 14.36 4.17 14.69 4.33 14.95C4.49 15.2 4.78 15.35 5.08 15.31H12.92C13.319 15.27 13.62 14.929 13.62 14.53C13.62 14.12 13.319 13.78 12.92 13.74H5.08ZM12.92 9.179H5.08C4.649 9.179 4.3 9.53 4.3 9.96C4.3 10.39 4.649 10.74 5.08 10.74H12.92C13.35 10.74 13.7 10.39 13.7 9.96C13.7 9.53 13.35 9.179 12.92 9.179ZM8.069 4.65H5.08V4.66C4.649 4.66 4.3 5.01 4.3 5.44C4.3 5.87 4.649 6.22 5.08 6.22H8.069C8.5 6.22 8.85 5.87 8.85 5.429C8.85 5 8.5 4.65 8.069 4.65Z" fill="#B756FE" />
                            </svg>

                            <div className="mt-2 mb-[6px] flex items-center gap-x-[8px]">
                                <p className="text-[#F6F6F7] text-[14px]">Subscribers</p>
                                <span className="text-[#41E88D] text-[12px] px-[10px] py-[3px] bg-[#B7FFC41A]/10 rounded-[20px]">+11%</span>
                            </div>
                            <h2 className="text-3xl text-white font-semibold">9,158</h2>
                        </div>
                        <div className="bg-[#060B27] px-4 py-[10px] rounded">
                            <svg width="18" height="24" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.3408 0.103698C8.73333 -0.034566 9.16611 -0.034566 9.56871 0.103698L16.2014 2.32867C16.9462 2.57382 17.4495 3.26122 17.4495 4.02608L17.4999 10.6637C17.5099 12.674 16.7751 14.6253 15.4264 16.1561C14.8125 16.8621 14.0174 17.4603 13.0109 17.9996L9.43787 19.9117C9.32715 19.9706 9.20637 20 9.0856 20C8.96482 20 8.83397 19.9706 8.72326 19.9117L5.12005 18.0486C4.1035 17.5191 3.30838 16.9307 2.68436 16.2345C1.31554 14.7244 0.550616 12.773 0.540552 10.7628L0.500144 4.12316C0.490227 3.3583 0.993469 2.67286 1.7282 2.41693L8.3408 0.103698ZM7.63626 7.35913C7.34438 7.07476 6.87133 7.07476 6.56939 7.35913C6.27751 7.65429 6.27751 8.11517 6.56939 8.39954L7.92814 9.72237L6.56939 11.0472C6.27751 11.3315 6.27751 11.8022 6.56939 12.0866C6.72036 12.2337 6.91159 12.3013 7.10282 12.3013C7.30412 12.3013 7.49535 12.2337 7.63626 12.0866L8.99501 10.7628L10.3538 12.0866C10.5047 12.2337 10.696 12.3013 10.8872 12.3013C11.0784 12.3013 11.2797 12.2337 11.4206 12.0866C11.7125 11.8022 11.7125 11.3315 11.4206 11.0472L10.0619 9.72237L11.4206 8.39954C11.7125 8.11517 11.7125 7.65429 11.4206 7.35913C11.1288 7.07476 10.6456 7.07476 10.3538 7.35913L8.99501 8.68392L7.63626 7.35913Z" fill="#32CAFD" />
                            </svg>

                            <div className="mt-2 mb-[6px] flex items-center gap-x-[8px]">
                                <p className="text-[#F6F6F7] text-[14px]">Conversations</p>
                                <span className="text-[#F6285F] text-[12px] px-[10px] py-[3px] bg-[#FFA7BE1A]/10 rounded-[20px]">-5%</span>
                            </div>
                            <h2 className="text-3xl text-white font-semibold">7158</h2>
                        </div>
                        <div className="bg-[#060B27] px-4 py-[10px] rounded">
                            <svg width="20" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6694 0.000396729C18.0704 0.000396729 19.9904 1.9294 20.0004 5.3304V14.6704C20.0004 18.0704 18.0704 20.0004 14.6694 20.0004H5.3304C1.9294 20.0004 0.000396729 18.0704 0.000396729 14.6704V5.3304C0.000396729 1.9294 1.9294 0.000396729 5.3304 0.000396729H14.6694ZM10.5004 4.1304C10.2194 3.9604 9.8794 3.9604 9.6104 4.1304C9.3394 4.2994 9.1904 4.6104 9.2194 4.9204V15.1104C9.2704 15.5404 9.6294 15.8604 10.0494 15.8604C10.4804 15.8604 10.8394 15.5404 10.8794 15.1104V4.9204C10.9194 4.6104 10.7704 4.2994 10.5004 4.1304ZM5.8304 7.4104C5.5604 7.2404 5.2194 7.2404 4.9504 7.4104C4.6794 7.5804 4.5304 7.8894 4.5604 8.2004V15.1104C4.5994 15.5404 4.9594 15.8604 5.3894 15.8604C5.8204 15.8604 6.1794 15.5404 6.2194 15.1104V8.2004C6.2504 7.8894 6.0994 7.5804 5.8304 7.4104ZM15.0894 11.0404C14.8204 10.8704 14.4804 10.8704 14.2004 11.0404C13.9294 11.2104 13.7804 11.5094 13.8204 11.8304V15.1104C13.8604 15.5404 14.2194 15.8604 14.6504 15.8604C15.0704 15.8604 15.4294 15.5404 15.4804 15.1104V11.8304C15.5094 11.5094 15.3604 11.2104 15.0894 11.0404Z" fill="#DF2DB1" />
                            </svg>
                            <div className="mt-2 mb-[6px] flex items-center gap-x-[8px]">
                                <p className="text-[#F6F6F7] text-[14px]">Popup Sales</p>
                                <span className="text-[#41E88D] text-[12px] px-[10px] py-[3px] bg-[#B7FFC41A]/10 rounded-[20px]">+15%</span>
                            </div>
                            <h2 className="text-3xl text-white font-semibold">$158</h2>
                        </div>
                    </div>
                    <div className="py-4 pl-2 pr-4 bg-[#060B27] mt-5 rounded-lg">
                        <div className="flex items-end">
                            <div className="w-10 flex flex-col items-end">
                                <p className="text-xs mb-8">100k</p>
                                <p className="text-xs mb-8">10k</p>
                                <p className="text-xs mb-8">5k</p>
                                <p className="text-xs">0</p>
                            </div>
                            <img src="/images/chart.png" className=" ml-2 flex-1" alt="" />
                        </div>
                        <div className="flex pl-16 justify-between">
                            <p className="text-xs">Sat</p>
                            <p className="text-xs">Sun</p>
                            <p className="text-xs">Mon</p>
                            <p className="text-xs">Tue</p>
                            <p className="text-xs">Wed</p>
                            <p className="text-xs">Thu</p>
                            <p className="text-xs">Fri</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero