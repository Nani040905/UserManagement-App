import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

function AddUser() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  let [loading, setLoading] = useState(false)
  let [error, setError] = useState(null)
  let navigate = useNavigate()

  const API_URL = import.meta.env.VITE_API_URL;

  const onUserCreate = async (newUser) => {
    setLoading(true)
    setError(null)
    try {
      let res = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newUser)
      });
      let result = await res.json()
      if (res.status === 201) {
        navigate("/users-list")
      } else {
        throw new Error(result.message || "Error occurred while creating user")
      }
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto px-6 py-12">
      <div className="card-simple p-8 bg-white">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary mb-1">Add New User</h1>
          <p className="text-sm text-text-muted">Enter details to create a user profile.</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-100 text-red-600 rounded-md text-xs">
            {error.message}
          </div>
        )}

        <form onSubmit={handleSubmit(onUserCreate)} className="space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-600">Full Name</label>
            <input 
              type="text" 
              {...register("name", { required: "Name is required" })} 
              className="input-field" 
              placeholder="John Doe" 
            />
            {errors.name && <span className="text-[10px] text-red-500">{errors.name.message}</span>}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-600">Email Address</label>
            <input 
              type="email" 
              {...register("email", { required: "Email is required" })} 
              className="input-field" 
              placeholder="john@example.com" 
            />
            {errors.email && <span className="text-[10px] text-red-500">{errors.email.message}</span>}
          </div>

          <div className="grid grid-cols-1 gap-5">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-600">Date of Birth</label>
              <input 
                type="date" 
                {...register("dateOfBirth")} 
                className="input-field" 
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-600">Mobile Number</label>
              <input 
                type="number" 
                {...register("mobileNumber")} 
                className="input-field" 
                placeholder="1234567890" 
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="btn-primary w-full mt-4 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Creating...</span>
              </>
            ) : "Save User"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddUser