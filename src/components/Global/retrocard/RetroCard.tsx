import React from 'react'
import { ExternalLink, Github, Linkedin } from "lucide-react"
import "./retrocardcss.css"
const RetroCard = () => {
  return (
    <div className="">
      <div className="retro-card  w-full max-w-md p-6 space-y-6">
        <div className="relative aspect-video mb-4 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
            alt="Project Preview"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <h2 className="font-['Press_Start_2P'] text-blue-300 text-lg mb-4 tracking-wider">
          AWESOME PROJECT
        </h2>
        
        <p className="text-blue-300 bg-blue-900/50 p-1.5 border-4 border-[#2F5A99C9]  font-['Press_Start_2P']  text-xs leading-relaxed mb-6">
          A retro-styled gaming project with pixel-perfect execution and old-school vibes.
        </p>
        
        <div className="flex justify-between items-center gap-4">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="retro-btn flex items-center gap-2 px-4 py-2 text-purple1 text-xs font-['Press_Start_2P'] transition-all duration-300"
          >
            <ExternalLink size={14} />
            LAUNCH
          </a>
          
          <div className="flex gap-4">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#00ff00] hover:text-[#00ff00]/80 transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RetroCard
