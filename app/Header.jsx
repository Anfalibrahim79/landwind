import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../components/Button'

const navLink = ['Company', 'Marketplace', 'Features', 'Team', 'Contact']

export default function Header() {
    return (
        <header className='w-full sticky'>
            <div className='container py-6 flex justify-between items-center'>
                <div className='flex gap-8'>
                    {/*Logo */}
                    <Link href={'/'}>
                        <div className='flex gap-3'>
                            <Image src={'/Zantic.png'} width={30} height={30} alt='logo' />
                            <h1 className='text-2xl font-semibold leading-[150%] text-gray-900'>Landwind</h1>
                        </div>
                    </Link>
                    {/*Nav Link */}
                    <ul className='flex items-center gap-8'>
                        {
                            navLink.map((el, key) => {
                                return (
                                    <li key={key} className='text-base font-medium leading-[150%] text-gray-900'><Link href={`/${el.toLowerCase()}`}>{el}</Link></li>
                                )
                            })
                        }
                        <li><Link href={'/company'}>company</Link></li>
                    </ul>
                </div>
                {/*Button */}
                <div className='space-x-4'>
                    <Button type='secondary'>Login</Button>
                    <Button className='py-2 px-3'>Get Started</Button>
                </div>

            </div>
        </header>
    )
}
