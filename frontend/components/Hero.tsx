import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface HeroProps {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, description, imageSrc }) => {
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-semibold text-gray-100 sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-gray-100 font-extrabold text-7xl">{name}</span>
            <span className="block text-indigo-600">{title}</span>
          </h1>
          <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            {description}
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
            <CallToActionButton href="#contact" primary>
              Chat with Lenda
            </CallToActionButton>
            <CallToActionButton href="#projects" primary={false}>
              Portfolio
            </CallToActionButton>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-end">
          <Image
            src={imageSrc}
            alt={`${name} - ${title}`}
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, 500px"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

// ... rest of the code remains the same

interface CallToActionButtonProps {
  href: string;
  primary: boolean;
  children: React.ReactNode;
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({ href, primary, children }) => {
  const baseClasses = "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
  const primaryClasses = "text-white bg-indigo-600 hover:bg-indigo-700"
  const secondaryClasses = "text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
  
  return (
    <div className={primary ? "rounded-md shadow" : "mt-3 sm:mt-0 sm:ml-3"}>
      <Link href={href} className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}>
        {children}
      </Link>
    </div>
  )
}

export default Hero
