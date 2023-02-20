const { Button } = require("./Utils")

const Footer = () => {
    return (
        <div>
            <div className="bg-[#0E1330] py-12 flex justify-center items-center gap-x-4">
                <div className="p-4 flex gap-x-4 rounded border border-dashed border-[#9747FF]">
                    <Button className="bg-[#0e1330] border border-[#282D45]">View pricing</Button>
                    <Button className="bg-[#0e1330] border border-[#282D45]">View pricing</Button>
                </div>
                <Button>Get a demo</Button>
            </div>
        </div>
    )
}

export default Footer