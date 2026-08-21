import { useState } from 'react'
import Cards from './Components/Cards'

function App() {
const data = [
  {
    "id": 1,
    "name": "Prince Kyada",
    "role": "Full-Stack Developer",
    "isActive": true,
    "img": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
  },
  {
    "id": 2,
    "name": "Aarav Sharma",
    "role": "Frontend Engineer",
    "isActive": true,
    "img": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
  },
  {
    "id": 3,
    "name": "Neha Patel",
    "role": "Backend Developer",
    "isActive": false,
    "img": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
  },
  {
    "id": 4,
    "name": "Rohan Mehta",
    "role": "UI/UX Designer",
    "isActive": true,
    "img": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80"
  },
  {
    "id": 5,
    "name": "Priya Joshi",
    "role": "Laravel Developer",
    "isActive": false,
    "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80"
  },
  {
    "id": 6,
    "name": "Amit Trivedi",
    "role": "DevOps Engineer",
    "isActive": true,
    "img": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80"
  },
  {
    "id": 7,
    "name": "Ananya Desai",
    "role": "React Native Developer",
    "isActive": false,
    "img": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80"
  }
]

return (
  <div className="min-h-screen">
    {/* Pass the array into the Cards component via the 'users' prop */}
    <Cards users={data} />
  </div>
);
}

export default App
