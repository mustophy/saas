const { Button } = require("./Utils")

const Footer = () => {
    return (
        <div>
            <div className="bg-[#0E1330] py-12 flex justify-center items-center gap-x-4">
                <div style={{
                    backgroundImage: 'linear-gradient(to right, black 33%, rgba(255,255,255,0) 0%)',
                    backgroundPosition: 'bottom',
                    backgroundSize: '3px 1px',
                    backgroundRepeat: 'repeat-x'
                }} className="p-4 flex gap-x-4 rounded border border-dashed border-[#9747FF]">
                    <Button style={{backgroundColor: '#282D45'}} className="bg-[#0e1330] border border-[#282D45]">View pricing</Button>
                    <Button style={{backgroundColor: '#282D45'}} className="bg-[#0e1330] border border-[#282D45]">View pricing</Button>
                </div>
                <Button>Get a demo</Button>
            </div>
        </div>
    )
}

export default Footer