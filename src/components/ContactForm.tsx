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
      console.log('Form submission:', data)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      reset()
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-green-600 text-xl font-semibold mb-2">
          Thank you for your message!
        </div>
        <p className="text-green-700">
          We&#39;ve received your inquiry and will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border text-base"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border text-base"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border text-base"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            type="text"
            id="company"
            {...register('company')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3 border text-base"
          />
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">
          Project Type *
        </label>
        <select
          id="projectType"
          {...register('projectType', { required: 'Please select a project type' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
        >
          <option value="">Select Project Type</option>
          <option value="commercial">Commercial Construction</option>
          <option value="residential">Residential Construction</option>
          <option value="renovation">Renovation & Remodeling</option>
          <option value="project-management">Project Management</option>
          <option value="consultation">Consultation</option>
          <option value="other">Other</option>
        </select>
        {errors.projectType && (
          <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Project Details *
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message', { required: 'Please provide project details' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 border"
          placeholder="Tell us about your project, timeline, budget range, and any specific requirements..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-h-[48px]"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}