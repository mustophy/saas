import { Button } from "./Utils"
import { CircleStar, RightArrow } from "./svgs"

const ProductNews = () => {
    return (
        <section className="mt-16">
            <div className="flex items-center justify-between mb-7">
                <p className="gradient-text text-3xl">Product in the news</p>
                <Button>Browse all news</Button>
            </div>
            <div className="grid grid-cols-3 gap-x-6">
                <div className="p-[25px] rounded-[10px] border border-[#282D45] bg-[#0E1330]">
                    <div className="mb-[19px] py-6 bg-[#060B27] flex justify-between items-center pl-4 pr-5 gap-x-4">
                        <img src="/images/product1.png" alt="" className="w- h-24" />

                        <div className="flex flex-col ">
                            <CircleStar />
                            <div className="border border-[#282d45] -rotate-6 bg-[#0E1330] w-fit mt-6 pt-4 pb-2 px-3 rounded-[6px] flex flex-col items-center justify-center">
                                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="19.3285" cy="19.0725" r="19" transform="rotate(-4.11899 19.3285 19.0725)" fill="#32CAFD" />
                                    <path d="M21.7038 12.0341C21.6855 12.2442 21.6839 12.4532 21.6988 12.661C21.8335 14.5312 23.4551 15.9342 25.317 15.8001C25.5248 15.7851 25.7225 15.7467 25.9279 15.6984L26.4109 22.4052C26.6139 25.2238 25.0718 27.0142 22.2458 27.2177L16.1042 27.66C13.2774 27.8635 11.4947 26.3126 11.2917 23.494L10.8488 17.3441C10.6453 14.5181 12.1868 12.7194 15.0136 12.5158L21.7038 12.0341ZM22.2348 17.0756C22.0077 17.0669 21.7913 17.1827 21.6707 17.3752L19.8474 20.1216L17.4137 18.4755C17.2646 18.3776 17.0954 18.3472 16.9304 18.3766C16.7668 18.4135 16.6237 18.5149 16.5327 18.6551L14.3037 22.0331L14.2584 22.1115C14.1362 22.3869 14.2272 22.7229 14.4898 22.8886C14.6116 22.955 14.7398 22.9959 14.8811 22.9857C15.0737 22.9802 15.2485 22.8665 15.3536 22.7011L17.2464 19.8653L19.7435 21.4742L19.8218 21.5179C20.098 21.64 20.4257 21.5504 20.5989 21.2865L22.7778 18.014L22.7457 18.033C22.8655 17.8406 22.8737 17.6061 22.7673 17.4049C22.6618 17.2036 22.4513 17.0767 22.2348 17.0756ZM25.0384 10.3065C26.1439 10.2269 27.1062 11.0599 27.1858 12.1654C27.2654 13.2709 26.4324 14.2332 25.3269 14.3128C24.2214 14.3924 23.2591 13.5594 23.1795 12.4539C23.0999 11.3484 23.9329 10.3861 25.0384 10.3065Z" fill="#060B27" />
                                </svg>
                                <p className="text-lg">85</p>
                                <p className="text-sm">Complete</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-lg text-white">Product Mail is taking on Gmail by staking on privacy</p>
                    <p className="text-[13px] mt-[15px]">Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.</p>
                    <div className="border border-[#282D45] my-5"></div>
                    <div className="flex justify-between">
                        <p>February 8, 2023</p>
                        <div className="flex items-center">
                            <p className="text-white font-semibold ml-1">Read More</p>
                            <RightArrow />
                        </div>
                    </div>
                </div>
                <div className="p-[25px] rounded-[10px] border border-[#282D45] bg-[#0E1330]">
                    <div className="mb-[19px] p-6 bg-[#060B27] flex justify-between items-center gap-x-4">
                        <div className="flex flex-col items-end">
                            <CircleStar fill="#FFC933" />
                            <div className="border border-[#282d45] -rotate-6 bg-[#0E1330] w-fit mt-5 pt-4 pb-2 px-4 rounded-[6px] flex flex-col items-center justify-center">
                                <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20.3285" cy="21.0725" r="19" transform="rotate(-4.11899 20.3285 21.0725)" fill="#7214FF" />
                                    <g clip-path="url(#clip0_309_11)">
                                        <path d="M22.1742 12.0638C24.9529 11.5057 26.8381 12.7667 27.4043 15.5437L28.9368 23.1747C29.4947 25.9526 28.2345 27.8461 25.4559 28.4042L17.8257 29.9365C15.047 30.4946 13.1543 29.2342 12.5964 26.4564L11.0639 18.8254C10.5058 16.0467 11.7654 14.1542 14.544 13.5961L22.1742 12.0638ZM19.4457 16.1221C19.1882 16.0293 18.9104 16.0851 18.7186 16.2682C18.5249 16.4507 18.4542 16.7292 18.5287 16.9778L20.2007 25.3032C20.313 25.6461 20.6588 25.8487 21.0019 25.7798C21.3541 25.709 21.5949 25.3887 21.557 25.0308L19.885 16.7054C19.8668 16.4455 19.694 16.2159 19.4457 16.1221ZM16.1684 19.5682C15.9199 19.4736 15.6413 19.5296 15.4494 19.7126C15.2559 19.896 15.1849 20.1729 15.2604 20.422L16.3942 26.0676C16.4967 26.4126 16.8433 26.6149 17.1946 26.5444C17.5467 26.4737 17.7876 26.1533 17.7497 25.7954L16.6159 20.1498C16.5902 19.8906 16.4161 19.663 16.1684 19.5682ZM24.3288 21.0147C24.0811 20.92 23.8034 20.9758 23.6025 21.1606C23.409 21.344 23.3363 21.6127 23.4216 21.8684L23.9598 24.5482C24.0631 24.893 24.4089 25.0955 24.761 25.0248C25.1042 24.9559 25.345 24.6355 25.3161 24.2759L24.7779 21.596C24.7489 21.329 24.5781 21.1092 24.3288 21.0147Z" fill="#060B27" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_309_11">
                                            <rect width="20" height="20" fill="white" transform="translate(8.22675 13.1646) rotate(-11.3557)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-lg">134</p>
                                <p className="text-sm">Project</p>
                            </div>
                        </div>
                        <img src="/images/product2.png" alt="" className="w- h-32" />
                    </div>
                    <p className="text-lg text-white">Wants You To Sign Out Of Google Workspace Forever</p>
                    <p className="text-[13px] mt-[15px]">Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.</p>
                    <div className="border border-[#282D45] my-5"></div>
                    <div className="flex justify-between">
                        <p>February 8, 2023</p>
                        <div className="flex items-center">
                            <p className="text-white font-semibold ml-1">Read More</p>
                            <RightArrow />
                        </div>
                    </div>
                </div>
                <div className="p-[25px] rounded-[10px] border border-[#282D45] bg-[#0E1330]">
                    <div className="mb-[19px] p-6 bg-[#060B27] flex justify-between items-center">
                        <img src="/images/product3.png" alt="" className="h-28"/>
                        <div className="flex flex-col">
                            <CircleStar fill="#2D55FB" />
                            <div className="border border-[#282d45] -rotate-6 bg-[#0E1330] w-fit mt-6 pt-4 pb-2 px-3 rounded-[6px] flex flex-col items-center justify-center">
                                <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20.3285" cy="21.0725" r="19" transform="rotate(-4.11899 20.3285 21.0725)" fill="#DF2DB1" />
                                    <path d="M20 12.667C24.6083 12.667 28.3333 16.4003 28.3333 21.0003C28.3333 25.6087 24.6083 29.3337 20 29.3337C15.4 29.3337 11.6667 25.6087 11.6667 21.0003C11.6667 16.4003 15.4 12.667 20 12.667ZM19.7083 16.7753C19.3667 16.7753 19.0833 17.0503 19.0833 17.4003V21.6087C19.0833 21.8253 19.2 22.0253 19.3917 22.142L22.6583 24.092C22.7583 24.1503 22.8667 24.1837 22.9833 24.1837C23.1917 24.1837 23.4 24.0753 23.5167 23.8753C23.6917 23.5837 23.6 23.2003 23.3 23.017L20.3333 21.2503V17.4003C20.3333 17.0503 20.05 16.7753 19.7083 16.7753Z" fill="#060B27" />
                                </svg>
                                <p className="">85</p>
                                <p className="text-sm">Complete</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-lg text-white">The Best Email Encryption Services for 2023</p>
                    <p className="text-[13px] mt-[15px]">Dorttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.</p>
                    <div className="border border-[#282D45] my-5"></div>
                    <div className="flex justify-between">
                        <p>February 8, 2023</p>
                        <div className="flex items-center">
                            <p className="text-white font-semibold ml-1">Read More</p>
                            <RightArrow />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductNews