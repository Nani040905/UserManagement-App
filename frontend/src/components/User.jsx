import React from 'react'
import { useLocation, useNavigate } from 'react-router'

function User() {
  let { state } = useLocation()
  let navigate = useNavigate()
  const user = state?.user

  if (!user) {
    return (
      <div className="text-center py-20">
        <p className="text-sm text-text-muted">No user data available.</p>
        <button onClick={() => navigate("/users-list")} className="btn-primary mt-4">Return to List</button>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto px-6">
      <div className="card-simple overflow-hidden bg-white">
        <div className="h-2 bg-primary"></div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-2xl">{user.name.charAt(0).toUpperCase()}</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">{user.name}</h1>
                <p className="text-sm text-text-muted">{user.email}</p>
              </div>
            </div>
            <button 
              onClick={() => navigate("/users-list")}
              className="text-xs font-semibold text-accent hover:underline"
            >
              Back
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Personal Details</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase">Birth Date</p>
                  <p className="text-sm font-medium text-primary">{user.dateOfBirth || "—"}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase">Mobile</p>
                  <p className="text-sm font-medium text-primary">{user.mobileNumber || "—"}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-50 flex justify-end">
            <button 
              className="text-xs text-gray-400 hover:text-red-500 transition-colors"
              onClick={() => {/* Delete logic if implemented */}}
            >
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User