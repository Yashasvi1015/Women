"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function EmergencySOS({ className = "" }) {
  const [isPressed, setIsPressed] = useState(false)
  const [countdown, setCountdown] = useState(3)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleSOSPress = () => {
    setIsPressed(true)

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setIsPressed(false)
          setShowConfirmation(true)
          setTimeout(() => setShowConfirmation(false), 3000)
          return 3
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleSOSRelease = () => {
    if (isPressed) {
      setIsPressed(false)
      setCountdown(3)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <Button
        className={`bg-red-600 hover:bg-red-700 transition-all ${isPressed ? "scale-95" : ""}`}
        onMouseDown={handleSOSPress}
        onMouseUp={handleSOSRelease}
        onMouseLeave={handleSOSRelease}
        onTouchStart={handleSOSPress}
        onTouchEnd={handleSOSRelease}
      >
        <AlertCircle className="mr-2 h-4 w-4" />
        {isPressed ? `Hold (${countdown})` : "SOS"}
      </Button>

      {showConfirmation && (
        <div className="absolute top-full mt-2 right-0 bg-green-100 text-green-800 text-xs p-2 rounded-md whitespace-nowrap">
          Emergency alert sent!
        </div>
      )}
    </div>
  )
}
