import React from 'react'

function Footer() {
  return (
    <footer className="mt-auto py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-primary tracking-tight">UserHub</span>
          </div>
          
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} UserHub. Minimalist User Management.
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-xs">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-xs">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer