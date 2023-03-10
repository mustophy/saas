import React from 'react'
import { StarIcon } from './svgs'

const Discord = () => {
    return (
        <div className='py-24 bg-[#0E1330] w-[80%] mt-[100px] rounded-[10px] relative'>
            <div className="absolute w-32 h-32 top-0 left-10 bg-[#32CAFD] blur-[225px]"></div>
            <div className="absolute w-32 h-32 bottom-0 left-[50%] -translate-x-[50%] bg-[#5865F2] blur-[225px]"></div>
            <div className="absolute w-32 h-32 top-10 right-10 bg-[#7214FF] blur-[175px]"></div>
            <svg className='mx-auto' width="66" height="50" viewBox="0 0 66 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M55.6946 4.1701C51.4066 2.19641 46.8702 0.794019 42.2054 0C41.6244 1.03342 40.9455 2.42337 40.4773 3.52915C35.4478 2.78518 30.4645 2.78518 25.5275 3.52915C25.0596 2.42362 24.3654 1.03342 23.7789 0C19.1096 0.794385 14.5693 2.20035 10.2793 4.1804C1.74255 16.8711 -0.571712 29.2462 0.58529 41.4462C6.24744 45.6058 11.7346 48.1327 17.1294 49.7862C18.4701 47.9724 19.6553 46.0521 20.6727 44.0452C18.7357 43.3198 16.8684 42.4258 15.093 41.3739C15.5602 41.0332 16.0164 40.6782 16.461 40.3093C27.2193 45.2595 38.9088 45.2595 49.539 40.3093C49.9854 40.6757 50.4415 41.0307 50.9067 41.3739C49.1284 42.4286 47.2576 43.3244 45.3168 44.0505C46.34 46.0656 47.523 47.9877 48.8601 49.7912C54.2599 48.1379 59.7522 45.6111 65.4144 41.4462C66.7721 27.3035 63.0953 15.042 55.6946 4.1701ZM22.1385 33.9435C18.9088 33.9435 16.2602 30.9774 16.2602 27.3656C16.2602 23.7538 18.8524 20.7827 22.1385 20.7827C25.4248 20.7827 28.0731 23.7485 28.0167 27.3656C28.0218 30.9774 25.4248 33.9435 22.1385 33.9435ZM43.8612 33.9435C40.6316 33.9435 37.9832 30.9774 37.9832 27.3656C37.9832 23.7538 40.5751 20.7827 43.8612 20.7827C47.1476 20.7827 49.7959 23.7485 49.7394 27.3656C49.7394 30.9774 47.1476 33.9435 43.8612 33.9435Z" fill="#5865F2" />
            </svg>
            <h3 className='text-white mt-8 mb-4 text-center text-4xl font-[700]'>Join the community</h3>
            <p className='text-[#8F9BB7] w-[485px] text-center mx-auto'>Join our 400,000+ person community and contribute to a more private and decentralized internet. Start for free.</p>
            <button className='py-3 px-6 block mx-auto bg-primary text-white rounded-[36px] mt-7'>Join Discord</button>
            <img src="/images/cloud.png" className='absolute bottom-0' alt="" />
            <img src="/images/cloud2.png" className='absolute left-[10%] top-20' alt="" />
            <img src="/images/cloud3.png" className='absolute left-[5%] bottom-40' alt="" />
            <img src="/images/cloud4.png" className='absolute top-20 right-20' alt="" />
            <StarPositions />
            <img src="/images/cloud5.png" className='absolute bottom-40 right-20' alt="" />
        </div>
    )
}

export default Discord

const StarPositions = () => (
    <>
        <StarIcon className="absolute w-2 top-28 left-40" />
        <StarIcon className="absolute h-3 top-44 right-52" fill='#3F99F2'/>
        <StarIcon className="absolute h-3 bottom-20 right-40" fill='#404EED'/>
        <StarIcon className="absolute h-3 bottom-10 left-28" fill='#FF78B9'/>
        <StarIcon className="absolute h-3 bottom-32 left-40" fill='#B756FE'/>
        <StarIcon className="absolute h-2 bottom-20 left-72" fill='#FFC619'/>
        <StarIcon className="absolute h-1 bottom-8 left-80" fill='#FFC619'/>
        <StarIcon className="absolute h-2 bottom-8 left-[55%]" fill='#91FFAD'/>
    </>
)