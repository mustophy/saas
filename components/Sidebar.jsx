import React from 'react'
import { MdSpaceDashboard} from 'react-icons/md'

const Sidebar = () => {
  return (
    <div>
        <ul className='flex flex-col gap-y-6'>
            {sidebarRoutes.map(route => (
                <li className='cursor-pointer'>
                    hello
                    {route.icon}                  
                    <p>{route.name} </p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar

const sidebarRoutes = [
    {
        name: 'Dashboard',
        icon: <MdSpaceDashboard />
    },
    {
        name: 'Notification'
    },
    {
        name: 'Account'
    },
    {
        name: 'Bill Payment'
    },
    {
        name: 'Transactions'
    },
    {
        name: 'Beneficiary'
    },
    {
        name: 'Profile'
    },
]