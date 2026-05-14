import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function UsersList() {
  let [users, setUsers] = useState([])
  let [error, setError] = useState(null)
  let [loading, setLoading] = useState(false)
  let navigate = useNavigate()

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setLoading(true)
    setError(null)
    async function getUsers() {
      try {
        let res = await fetch(`${API_URL}/users`, {
          method: "GET"
        })
        if (res.status === 200) {
          let userData = await res.json()
          setUsers(userData.payload)
        } else {
          throw new Error("Failed to fetch users")
        }
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    getUsers()
  }, [])

  const gotoUser = (userObj) => {
    navigate("/user", { state: { user: userObj } })
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] gap-3">
        <div className="w-8 h-8 border-2 border-gray-100 border-t-primary rounded-full animate-spin"></div>
        <p className="text-gray-400 text-sm font-medium">Loading users...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto p-4 bg-red-50 border border-red-100 text-red-600 rounded-lg text-center">
        <p className="text-sm font-semibold">Error fetching users</p>
        <p className="text-xs">{error.message}</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-primary">Community</h1>
          <p className="text-text-muted text-sm">{users?.length || 0} active users found.</p>
        </div>
        <button 
          onClick={() => navigate("/add-user")}
          className="btn-primary"
        >
          New User
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {users?.map((userObj) => (
          <div 
            key={userObj.email} 
            className="card-simple p-5 cursor-pointer bg-white hover:border-accent group"
            onClick={() => gotoUser(userObj)}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-gray-50 border border-gray-100 rounded flex items-center justify-center">
                <span className="text-primary font-bold text-sm">{userObj.name.charAt(0).toUpperCase()}</span>
              </div>
              <div className="overflow-hidden">
                <h3 className="text-sm font-bold text-primary truncate group-hover:text-accent transition-colors">{userObj.name}</h3>
                <p className="text-xs text-text-muted truncate">{userObj.email}</p>
              </div>
            </div>
            
            <div className="pt-3 border-t border-gray-50 flex justify-between items-center">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">View Profile</span>
              <svg className="w-3 h-3 text-gray-300 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {users?.length === 0 && (
        <div className="text-center py-16 card-simple bg-gray-50 border-dashed">
          <p className="text-sm text-text-muted">No user records found.</p>
          <button 
            onClick={() => navigate("/add-user")}
            className="text-accent text-xs font-bold mt-2 hover:underline"
          >
            Create first user
          </button>
        </div>
      )}
    </div>
  )
}

export default UsersList