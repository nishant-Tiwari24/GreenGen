import React from 'react'

const Left = () => {
  return (
    <div className='w-[40vw]'>
      <div className="flex-grow flex-col justify-around items-center space-y-6">
        <h1 className="text-green-300 text-4xl font-bold">Short Term Projects</h1>
        <ul className="list-none text-white text-4xl">
          <li>
            <span className="text-green-400 text-3xl">3 Days</span>
            <ul className='list-disc'>
              <li className='list-disc'>Hands-on Training</li>
            </ul>
          </li>
          <li className='list-disc'>Instrumentation Exposure</li>
          <li className='list-disc'>Laboratory Handling</li>
          <li>
            <span className="text-green-400 text-3xl">2 Weeks</span>
            <ul className='list-disc'>
              <li className='list-disc'>Hands-on Training</li>
            </ul>
          </li>
          <li className='list-disc'>Review Article/Manuscript Writing</li>
          <li className='list-disc'>Lab Techniques</li>
          <li>
            <span className="text-green-400 text-3xl">1 Month</span>
            <ul className='list-disc'>
              <li className='list-disc'>Group/Individual Project</li>
            </ul>
          </li>
          <li className='list-disc'>Guaranteed Paper</li>
          <li className='list-disc'>Lab Techniques</li>
          <li className='list-disc'>Industry Insight</li>
          <li className='list-disc'>Real-world Application</li>
        </ul>
      </div>
    </div>
  )
}

export default Left
