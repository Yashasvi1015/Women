import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, MapPin, Navigation, Search, Layers, AlertTriangle } from "lucide-react"
import EmergencySOS from "@/components/emergency-sos"

export default function MapPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-purple-600">
            <Shield className="h-6 w-6" />
            <span>DigiRaksha</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-purple-600">
              Home
            </Link>
            <Link href="/report" className="text-sm font-medium transition-colors hover:text-purple-600">
              Report Incident
            </Link>
            <Link href="/map" className="text-sm font-medium transition-colors text-purple-600">
              Safe Routes
            </Link>
            <Link href="/helpline" className="text-sm font-medium transition-colors hover:text-purple-600">
              Helpline
            </Link>
            <Link href="/community" className="text-sm font-medium transition-colors hover:text-purple-600">
              Community
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <EmergencySOS className="hidden sm:flex" />
            <Link href="/profile">
              <Button variant="ghost" size="icon" className="rounded-full">
                <img src="/profile.png?height=32&width=32" alt="Profile" className="h-8 w-8 rounded-full" />
                <span className="sr-only">Profile</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          <div className="space-y-2">
            <h1 className="text-3xl text-purple-600 font-bold tracking-tighter">Safe Route Navigation</h1>
            <p className="text-muted-foreground">
              Find the safest routes to your destination with real-time safety data.
            </p>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_350px]">
            <div className="relative rounded-lg border overflow-hidden h-[70vh]">
              <div className="absolute inset-0 bg-gray-100">
                {/* This would be replaced with an actual map component in a real application */}
                <img src="/map.png?height=800&width=1200" alt="Map" className="h-full w-full object-cover" />
                <div className="absolute top-4 left-4 right-4 flex gap-2">
                  <Input placeholder="Search for a location" className="bg-white" />
                  <Button size="icon" variant="ghost" className="bg-white">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
                <div className="absolute top-20 left-4 flex flex-col gap-2">
                  <Button size="icon" variant="ghost" className="bg-white">
                    <Layers className="h-5 w-5" />
                    <span className="sr-only">Layers</span>
                  </Button>
                  <Button size="icon" variant="ghost" className="bg-white">
                    <Navigation className="h-5 w-5" />
                    <span className="sr-only">Navigation</span>
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm">
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span className="text-xs">Safe</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <span className="text-xs">Caution</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <span className="text-xs">Alert</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <h2 className="text-xl text-purple-500 font-semibold">Route Options</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="start">Start Location</Label>
                    <Input id="start" placeholder="Current location" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="destination">Destination</Label>
                    <Input id="destination" placeholder="Enter destination" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="transport">Transportation Mode</Label>
                    <select
                      id="transport"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="walking">Walking</option>
                      <option value="public">Public Transport</option>
                      <option value="driving">Driving</option>
                      <option value="rideshare">Rideshare</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="safest" />
                    <Label htmlFor="safest">Prioritize safety over speed</Label>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Find Safe Routes</Button>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <h2 className="text-xl font-semibold">Safety Alerts</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg bg-yellow-50 p-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Caution Area</p>
                      <p className="text-xs text-yellow-700">
                        Recent incidents reported near Central Park. Consider alternative routes after dark.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg bg-red-50 p-3">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm font-medium text-red-800">High Alert</p>
                      <p className="text-xs text-red-700">
                        Multiple incidents reported on Main Street in the last 24 hours. Avoid this area if possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <h2 className="text-xl text-purple-500 font-semibold">Safe Locations Nearby</h2>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm font-medium">City Police Station</p>
                      <p className="text-xs text-muted-foreground">0.5 km away</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm font-medium">Downtown Hospital</p>
                      <p className="text-xs text-muted-foreground">1.2 kms away</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm font-medium">24/7 Convenience Store</p>
                      <p className="text-xs text-muted-foreground">0.3 kms away</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl text-purple-600">
            <Shield className="h-6 w-6" />
            <span>DigiRaksha</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} DigiRaksha. All rights reserved. Privacy is our priority.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </label>
  )
}
