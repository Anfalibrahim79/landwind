import Button from '@/components/Button'
import Image from 'next/image'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

export default function Home() {
  return (
    <>
      {/*Content Section */}
      <section className='mt-6'>
        <div className="min-w-full h-[544px] py-16 flex-col justify-start items-center inline-flex">
          <div className="w-full justify-end items-center flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
              <div className="self-stretch h-[204px] justify-start items-start gap-6">
                <div className='w-[736px]'>
                  <div className="self-stretch text-gray-900 text-[60px] font-black leading-[60px]">Building digital products & brands.</div>
                  <div className="self-stretch text-gray-500 text-[20px] font-normal leading-loose">Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="justify-start items-start gap-4 inline-flex">
                  <Button >Start 30 day free trial</Button>
                  <Button type='secondary' >Pricing & FAQ</Button>
                </div>
              </div>
            </div>
            <div className="w-[448px] flex-col justify-center items-end gap-10 inline-flex">
              <Image width={532} height={416} src={'/Hero-zantec.png'} alt='hero' />
            </div>
          </div>
        </div>
      </section>
      {/*Logos Section */}
      <section className='mt-16'>
        <div className='w-full flex justify-between items-center mb-24'>
          <div><Image src={'/Google.png'} width={128} height={42} alt='Logos' /></div>
          <div><Image src={'/Microsoft.png'} width={150} height={32} alt='Logos' /></div>
          <div><Image src={'/Spotify.png'} width={128} height={40} alt='Logos' /></div>
          <div><Image src={'/Mailchimp.png'} width={136} height={38} alt='Logos' /></div>
          <div><Image src={'/Airbnb.png'} width={110} height={55} alt='Logos' /></div>
          <div><Image src={'/Uber.png'} width={132} height={28} alt='Logos' /></div>
        </div>
      </section>
      {/*Features Section */}
      <section className='h-full'>
        <div className='min-w-full my-24 space-y-20'>
          <div className='flex gap-16'>
            <div className='flex-1'>
              <h2 className='text-4xl font-extrabold leading-[125%] -tracking-[0.36px] mt-[25px] mb-4'>
                Work with tools you already use
              </h2>
              <p className='text-xl font-normal leading-[150%]'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
              <div className='h-[1px] bg-gray-200 my-8 w-full' />
              <div className='space-y-4'>
                <div className='flex gap-2'>
                  <Image src={'/check.png'} width={20} height={20} alt='check' />
                  <p className='text-base font-medium leading-[150%] text-text-primary'>Continuous integration and deployment</p>
                </div>
                <div className='flex gap-2'>
                  <Image src={'/check.png'} width={20} height={20} alt='check' />
                  <p className='text-base font-medium leading-[150%] text-text-primary'>Development workflow</p>
                </div>
                <div className='flex gap-2'>
                  <Image src={'/check.png'} width={20} height={20} alt='check' />
                  <p className='text-base font-medium leading-[150%] text-text-primary'>Knowledge management</p>
                </div>
              </div>
            </div>

            <div className='flex-1'>
              <Image src={'/features1.png'} width={598} height={435} alt='features1' />
            </div>
          </div>
          <div className='flex gap-16'>
            <div className='flex-1'>
              <Image src={'/features2.png'} width={598} height={435} alt='features2' />
            </div>
            <div className='flex-1'>
              <h2 className='text-4xl font-extrabold leading-[125%] -tracking-[0.36px] mt-[25px] mb-4'>
                We invest in the world’s potential
              </h2>
              <p className='text-xl font-normal leading-[150%]'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
              <div className='h-[1px] bg-gray-200 my-8 w-full' />
              <div className='space-y-4'>
                <div className='flex gap-2'>
                  <Image src={'/check.png'} width={20} height={20} alt='check' />
                  <p className='text-base font-medium leading-[150%] text-text-primary'>Dynamic reports and dashboards</p>
                </div>
                <div className='flex gap-2'>
                  <Image src={'/check.png'} width={20} height={20} alt='check' />
                  <p className='text-base font-medium leading-[150%] text-text-primary'>Templates for everyone</p>
                </div>
                <div className='flex gap-2'>
                  <Image src={'/check.png'} width={20} height={20} alt='check' />
                  <p className='text-base font-medium leading-[150%] text-text-primary'>Development workflow</p>
                </div>
                <div className='flex gap-2'>
                  <Image src={'/check.png'} width={20} height={20} alt='check' />
                  <p className='text-base font-medium leading-[150%] text-text-primary'>Limitless business automation</p>
                </div>
                <div className='flex gap-2'>
                  <Image src={'/check.png'} width={20} height={20} alt='check' />
                  <p className='text-base font-medium leading-[150%] text-text-primary'>Knowledge management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Social Proof Section */}
      <section className=''>
        <div className='w-full h-[524px] py-24 flex gap-24'>
          <div className='flex-1'>
            <h3 className='text-lg font-medium leading-[18px] text-purple-600'>
              Trusted Worldwide
            </h3>
            <h2 className='text-4xl font-extrabold leading-[125%] text-text-primary -tracking-[0.36px]'>
              Trusted by over 600 million users and 10,000 teams
            </h2>
            <p className='text-xl font-light leading-[150%] text-text-secondary'>
              Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.
            </p>
            <div className='space-y-4'>
              <div className='h-[1px] bg-gray-200 my-8 w-full' />
              <div className=' text-purple-600 flex gap-2'>
                <h3 className='text-lg font-medium leading-4'>
                  Trusted Worldwide
                </h3>
                <AiOutlineArrowRight />
              </div>
              <div className=' text-purple-600 flex gap-2'>
                <h3 className='text-lg font-medium leading-4'>
                  Trusted Worldwide
                </h3>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className='flex-1 '>
            <div className='min-w-full flex flex-wrap'>
              <div className='w-[256px]'>
                <Image src={'/server.png'} width={48} height={48} alt='icons' className='mb-4' />
                <h3 className='text-2xl font-bold leading-[125%] text-text-primary mb-2'>99.99% uptime</h3>
                <p className='text-base font-light leading-[150%] text-text-secondary'>for Flowbite, with zero maintenance downtime</p>
              </div>
              <div className='w-[256px]'>
                <Image src={'/server.png'} width={48} height={48} alt='icons' className='mb-4' />
                <h3 className='text-2xl font-bold leading-[125%] text-text-primary mb-2'>99.99% uptime</h3>
                <p className='text-base font-light leading-[150%] text-text-secondary'>for Flowbite, with zero maintenance downtime</p>
              </div>
              <div className='w-[256px]'>
                <Image src={'/server.png'} width={48} height={48} alt='icons' className='mb-4' />
                <h3 className='text-2xl font-bold leading-[125%] text-text-primary mb-2'>99.99% uptime</h3>
                <p className='text-base font-light leading-[150%] text-text-secondary'>for Flowbite, with zero maintenance downtime</p>
              </div>
              <div className='w-[256px]'>
                <Image src={'/server.png'} width={48} height={48} alt='icons' className='mb-4' />
                <h3 className='text-2xl font-bold leading-[125%] text-text-primary mb-2'>99.99% uptime</h3>
                <p className='text-base font-light leading-[150%] text-text-secondary'>for Flowbite, with zero maintenance downtime</p>
              </div>


            </div>
          </div>
        </div>
      </section>
      {/*Testimoni Section */}
      <section className='h-[426px]'>
        <div className='w-full my-24 py-24 flex flex-col items-center justify-center text-center'>
          <h3 className='text-2xl font-semibold leading-[162.5%] text-text-primary'>&quot;Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.&quot;</h3>
          <div className='flex gap-2 items-center mt-7'>
            <Image src={'/avatar1.png'} width={24} height={24} alt='avatar1' className='' />
            <h4 className='text-base font-semibold leading-[150%] text-text-primary'>
              Micheal Gough
            </h4>
            <span className='text-base font-semibold leading-[150%] text-text-primary'>/</span>
            <p className='text-sm font-normal leading-[125%]'>CEO at Google</p>
          </div>
        </div>

      </section>
      {/*pricing Section */}
      <section>
        <div className='w-full p-24 h-[920px] space-y-8'>
          <div className='flex flex-col items-center gap-4'>
            <h2 className='text-4xl font-extrabold leading-[125%] -tracking-[0.36px] text-text-primary'>Pay as you grow</h2>
            <p className='text-xl font-normal leading-[150%] text-text-secondary w-[768px] text-center'>Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          </div>
          <div className='w-full flex justify-between gap-10'>
            <div className='w-[400px] border border-gray-200 rounded-lg shadow-md'>
              <div className='p-8'>
                <div className='text-center flex flex-col gap-8'>
                  <div>
                    <h2 className='text-2xl font-semibold leading-[150%] text-text-primary'>Starter</h2>
                    <p className='text-lg font-normal leading-[150%] text-text-secondary'>
                      Great for personal use and for your side projects.
                    </p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <h3 className='text-5xl font-extrabold leading-[48px] text-text-primary'>$49</h3>
                    <span className='text-lg font-medium leading-[150%] text-text-secondary'>/month</span>
                  </div>
                  <div className='space-y-5'>
                    <div className='flex items-center gap-2'>
                      <Image src={'/check1.png'} width={20} height={20} alt='check' />
                      <p className='text-base font-normal leading-[150%] text-text-primary'>
                        Individual configuration
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image src={'/check1.png'} width={20} height={20} alt='check' />
                      <p className='text-base font-normal leading-[150%] text-text-primary'>
                        Individual configuration
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image src={'/check1.png'} width={20} height={20} alt='check' />
                      <p className='text-base font-normal leading-[150%] text-text-primary'>
                        Individual configuration
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image src={'/check1.png'} width={20} height={20} alt='check' />
                      <p className='text-base font-normal leading-[150%] text-text-primary'>
                        Individual configuration
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image src={'/check1.png'} width={20} height={20} alt='check' />
                      <p className='text-base font-normal leading-[150%] text-text-primary'>
                        Individual configuration
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button className='w-full'>Get Started</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[400px] border border-gray-200 rounded-lg shadow-md'>
              <div className='p-8'>
                <div className='text-center flex flex-col gap-8'>
                  <div>
                    <h2 className='text-2xl font-semibold leading-[150%] text-text-primary'>Starter</h2>
                    <p className='text-lg font-normal leading-[150%] text-text-secondary'>
                      Great for personal use and for your side projects.
                    </p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <h3 className='text-5xl font-extrabold leading-[48px] text-text-primary'>$49</h3>
                    <span className='text-lg font-medium leading-[150%] text-text-secondary'>/month</span>
                  </div>
                  <div className='space-y-5'>
                    <div className='flex items-center gap-2'>
                      <Image src={'/check1.png'} width={20} height={20} alt='check' />
                      <p className='text-base font-normal leading-[150%] text-text-primary'>
                        Individual configuration
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image src={'/check1.png'} width={20} height={20} alt='check' />
                      <p className='text-base font-normal leading-[150%] text-text-primary'>
                        Individual configuration
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image src={'/check1.png'} width={20} height={20} alt='check' />
                      <p className='text-base font-normal leading-[150%] text-text-primary'>
                        Individual configuration
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image src={'/check1.png'} width={20} height={20} alt='check' />
                      <p className='text-base font-normal leading-[150%] text-text-primary'>
                        Individual configuration
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image src={'/check1.png'} width={20} height={20} alt='check' />
                      <p className='text-base font-normal leading-[150%] text-text-primary'>
                        Individual configuration
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button className='w-full'>Get Started</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[400px] border border-gray-200 rounded-lg shadow-md'>
              <div className='p-8'>
                <div className='text-center flex flex-col gap-8'>
                  <div>
                    <h2 className='text-2xl font-semibold leading-[150%] text-text-primary'>Starter</h2>
                    <p className='text-lg font-normal leading-[150%] text-text-secondary'>
                      Great for personal use and for your side projects.
                    </p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <h3 className='text-5xl font-extrabold leading-[48px] text-text-primary'>$49</h3>
                    <span className='text-lg font-medium leading-[150%] text-text-secondary'>/month</span>
                  </div>
                  <div className='space-y-5'>
                    <div className='flex items-center gap-2'>
                      <Image src={'/check1.png'} width={20} height={20} alt='check' />
                      <p className='text-base font-normal leading-[150%] text-text-primary'>
                        Individual configuration
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image src={'/check1.png'} width={20} height={20} alt='check' />
                      <p className='text-base font-normal leading-[150%] text-text-primary'>
                        Individual configuration
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image src={'/check1.png'} width={20} height={20} alt='check' />
                      <p className='text-base font-normal leading-[150%] text-text-primary'>
                        Individual configuration
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image src={'/check1.png'} width={20} height={20} alt='check' />
                      <p className='text-base font-normal leading-[150%] text-text-primary'>
                        Individual configuration
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Image src={'/check1.png'} width={20} height={20} alt='check' />
                      <p className='text-base font-normal leading-[150%] text-text-primary'>
                        Individual configuration
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button className='w-full'>Get Started</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*faq Section */}
    </>
  )
}
