import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 px-6 py-4 mb-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
             <span className="text-white font-bold text-lg">U</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">
            UserHub
          </span>
        </div>
        
        <nav>
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  `transition-colors hover:text-accent ${isActive ? "text-accent" : "text-text-muted"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="add-user" 
                className={({isActive}) => 
                  `transition-colors hover:text-accent ${isActive ? "text-accent" : "text-text-muted"}`
                }
              >
                Add User
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="users-list" 
                className={({isActive}) => 
                  `transition-colors hover:text-accent ${isActive ? "text-accent" : "text-text-muted"}`
                }
              >
                Users List
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header