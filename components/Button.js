import React from 'react'

export default function Button({ type = 'primary', className = '', children, ...props }) {
    return (
        <button className={`rounded-lg font-medium text-sm leading-[150%] py-3 px-5 h-12 ${type === 'primary' ? 'bg-primary border border-primary text-secondary hover:bg-white hover:text-primary' : type === 'secondary' ? 'bg-secondary border border-text-primary text-text-primary hover:bg-text-primary hover:text-white' : 'text-primary'} ${className}`} {...props}>
            {children}
        </button>
    )
}
