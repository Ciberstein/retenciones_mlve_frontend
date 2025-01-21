import { Switch as HeadlessSwitch } from '@headlessui/react'
import React from 'react'

export const Switch = ({ as = "div", label = "", checked = null, setChecked = null }) => {
  return (
    <HeadlessSwitch.Group as={as} className="flex gap-x-4">
        <div className="flex h-6 items-center">
            <HeadlessSwitch
                checked={checked}
                onChange={setChecked}
                className={`
                ${checked ? 'bg-blue-500' : 'bg-gray-400'}
                    flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                `}
            >
                <span
                    aria-hidden="true"
                    className={`
                        ${checked ? 'translate-x-3.5' : 'translate-x-0'}
                        h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                    `}
                />
            </HeadlessSwitch>
        </div>
        {
            label && 
            <HeadlessSwitch.Label className="text-sm leading-6 text-gray-500">
                {label}
            </HeadlessSwitch.Label>            
        }
    </HeadlessSwitch.Group>
  )
}