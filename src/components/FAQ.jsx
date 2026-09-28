import React from 'react'
import { faqData } from '../data'

const FAQ = () => {
  return (
    <section className='bg-pink-700 pb-10 pt-3'>
        <div className='border p-6 mt-10 bg-white shadow'>
          <h2 className='text-3xl font-semibold text-center mb-10'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-6 px-4 lg:mx-15'>
            {faqData.map((data, index) => (
              <details key={index} className='border-b border-gray-300 pb-2'>
                <summary className='cursor-pointer text-md md:text-lg font-medium'>
                  {index + 1}. {data.question}
                </summary>
                <div className='mt-2 text-gray-600 pl2 md:pl-4'>
                  {/* Placeholder answer - update if you have real answers */}
                  {data.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FAQ
