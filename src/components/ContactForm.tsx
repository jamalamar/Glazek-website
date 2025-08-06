'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone?: string
  company?: string
  projectType: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      const formData = new FormData()
      formData.append('form-name', 'contact')
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('phone', data.phone || '')
      formData.append('company', data.company || '')
      formData.append('projectType', data.projectType)
      formData.append('message', data.message)

      const response = await fetch('/', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
        
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting the form. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center shadow-lg">
        <div className="mb-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <div className="text-green-600 text-2xl font-bold mb-3">
          Thank you for your inquiry!
        </div>
        <p className="text-green-700 text-lg">
          We'll respond within 24 hours to discuss your glazing project.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-white to-blue-50/30 p-8 rounded-2xl shadow-xl border border-blue-100">
      {/* Hidden form for Netlify detection */}
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="company" />
        <select name="projectType">
          <option value="curtain-wall">Curtain Wall Installation</option>
          <option value="storefront">Storefront Systems</option>
          <option value="commercial-windows">Commercial Windows</option>
          <option value="residential-windows">Residential Windows</option>
          <option value="shower-doors">Shower Doors</option>
          <option value="mirrors">Mirrors Installation</option>
          <option value="canopies">Canopies & Skylights</option>
          <option value="glazing-repair">Glazing Repair & Maintenance</option>
          <option value="consultation">Free Glazing Consultation</option>
          <option value="other">Other Glazing Services</option>
        </select>
        <textarea name="message"></textarea>
      </form>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 text-black transition-all duration-200 hover:border-blue-300 bg-white/80 backdrop-blur-sm"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600 font-medium">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              })}
              className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 text-black transition-all duration-200 hover:border-blue-300 bg-white/80 backdrop-blur-sm"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600 font-medium">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 text-black transition-all duration-200 hover:border-blue-300 bg-white/80 backdrop-blur-sm"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              {...register('company')}
              className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 text-black transition-all duration-200 hover:border-blue-300 bg-white/80 backdrop-blur-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
            Glazing Service *
          </label>
          <select
            id="projectType"
            {...register('projectType', { required: 'Please select a service type' })}
            className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-orange-500 focus:ring-orange-500 px-4 py-3 text-black transition-all duration-200 hover:border-orange-300 bg-white/80 backdrop-blur-sm"
          >
            <option value="">Select Your Glazing Service</option>
            <option value="curtain-wall">Curtain Wall Installation</option>
            <option value="storefront">Storefront Systems</option>
            <option value="commercial-windows">Commercial Windows</option>
            <option value="residential-windows">Residential Windows</option>
            <option value="shower-doors">Shower Doors</option>
            <option value="mirrors">Mirrors Installation</option>
            <option value="canopies">Canopies & Skylights</option>
            <option value="glazing-repair">Glazing Repair & Maintenance</option>
            <option value="consultation">Free Glazing Consultation</option>
            <option value="other">Other Glazing Services</option>
          </select>
          {errors.projectType && (
            <p className="mt-2 text-sm text-red-600 font-medium">{errors.projectType.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message', { required: 'Please provide project details' })}
            className="block w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 text-black transition-all duration-200 hover:border-blue-300 bg-white/80 backdrop-blur-sm resize-none"
            placeholder="Describe your project and requirements"
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-600 font-medium">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:scale-[1.02] min-h-[56px] shadow-lg"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Sending...
            </>
          ) : (
            <>
              Get Free Consultation
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}