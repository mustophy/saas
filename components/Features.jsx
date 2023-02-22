import { UserIcon, DealIcon, EmailTrackingIcon, MeetingSchedulingIcon, PipelineIcon, ReportDashboardIcon } from "./svgs"

const Features = () => {
    return (
        <section>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-white font-semibold text-[40px]">Powerful features to help you</h2>
                    <p className="gradient-text text-[40px] text-left -mt-4">manage all your leads</p>
                </div>
                <span className="w-[300px] text-[14px] mt-6">Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet vel.</span>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10">
                {featuresArr.map((feature, index) => (
                    <div key={index} className="py-7 px-4 bg-[#0E1330] rounded border border-[#282D45]">
                        {feature.icon}
                        <h3 className="text-white font-semibold text-[22px] mt-6 mb-3">{feature.name}</h3>
                        <span className="text-[14px]">Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis.</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features

const featuresArr = [
    {
      icon: <DealIcon />,
      name: 'Deal tracking'
    },
    {
      icon: <UserIcon />,
      name: 'User Information'
    },
    {
      icon: <PipelineIcon />,
      name: 'Pipeline Management'
    },
    {
      icon: <ReportDashboardIcon />,
      name: 'Reporting Dashboard'
    },
    {
      icon: <MeetingSchedulingIcon />,
      name: 'Meeting Scheduling'
    },
    {
      icon: <EmailTrackingIcon />,
      name: 'Email Tracking'
    },
]