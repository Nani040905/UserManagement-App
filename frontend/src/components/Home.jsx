import React from 'react'
import { useNavigate } from 'react-router'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center">
      <div className="mb-4">
        <span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-semibold text-gray-500 uppercase tracking-wider">
          User Management Simplified
        </span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
        Manage your community with ease.
      </h1>
      
      <p className="max-w-xl mx-auto text-lg text-text-muted mb-10 leading-relaxed">
        A clean and efficient way to track your user base. 
        Add, view, and manage profiles without the clutter.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
        <button 
          onClick={() => navigate('/add-user')}
          className="btn-primary"
        >
          Add New User
        </button>
        <button 
          onClick={() => navigate('/users-list')}
          className="btn-outline"
        >
          View Users List
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="card-simple p-6">
          <div className="w-8 h-8 bg-gray-50 rounded flex items-center justify-center mb-4">
            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Centralized Directory</h3>
          <p className="text-sm text-text-muted">A single place to manage all your user data effectively.</p>
        </div>
        
        <div className="card-simple p-6">
          <div className="w-8 h-8 bg-gray-50 rounded flex items-center justify-center mb-4">
            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Efficient Workflow</h3>
          <p className="text-sm text-text-muted">Streamlined processes for adding and updating user information.</p>
        </div>

        <div className="card-simple p-6">
          <div className="w-8 h-8 bg-gray-50 rounded flex items-center justify-center mb-4">
            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Reliable Storage</h3>
          <p className="text-sm text-text-muted">Built on a solid backend to ensure data integrity and accessibility.</p>
        </div>
      </div>
    </div>
  )
}

export default Home