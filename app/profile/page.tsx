import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, User, Phone, Bell, Lock, LogOut } from "lucide-react"
import EmergencySOS from "@/components/emergency-sos"

export default function ProfilePage() {
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
            <Link href="/map" className="text-sm font-medium transition-colors hover:text-purple-600">
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
              <Button variant="ghost" size="icon" className="rounded-full bg-purple-100">
                <User className="h-5 w-5 text-purple-600" />
                <span className="sr-only">Profile</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-12">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="rounded-lg border p-6 shadow-sm">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <img
                        src="/profile.png?height=128&width=128"
                        alt="Profile"
                        className="h-32 w-32 rounded-full"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute bottom-0 right-0 rounded-full bg-purple-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-purple-600"
                        >
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                        </svg>
                        <span className="sr-only">Edit Profile</span>
                      </Button>
                    </div>
                    <h2 className="mt-4 text-xl font-bold">Yashasvi</h2>
                    <p className="text-sm text-muted-foreground">Verified User</p>
                    <div className="mt-6 w-full space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <User className="mr-2 h-4 w-4" />
                        Profile Settings
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Bell className="mr-2 h-4 w-4" />
                        Notifications
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Lock className="mr-2 h-4 w-4" />
                        Privacy & Security
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 space-y-6">
                <div className="rounded-lg border p-6 shadow-sm">
                  <h2 className="text-xl text-purple-500 font-bold">Emergency Contacts</h2>
                  <p className="text-sm text-muted-foreground">
                    These contacts will be notified when you trigger the SOS alert.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-purple-100 p-2">
                          <Phone className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium">Mummy</p>
                          <p className="text-sm text-muted-foreground">(+91) 8053757115</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                          </svg>
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-red-600"
                          >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          </svg>
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-purple-100 p-2">
                          <Phone className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium">Best Friend</p>
                          <p className="text-sm text-muted-foreground">(+91) 9034618661</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                          </svg>
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-red-600"
                          >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          </svg>
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-4 border-dashed">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-purple-100 p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-purple-600"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                          </svg>
                        </div>
                        <p className="font-medium">Add New Contact</p>
                      </div>
                      <Button variant="ghost">Add</Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-6 shadow-sm">
                  <h2 className="text-xl text-purple-500 font-bold">SOS Message Settings</h2>
                  <p className="text-sm text-muted-foreground">
                    Customize the message that will be sent to your emergency contacts.
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="sos-message">Emergency Message</Label>
                      <Textarea
                        id="sos-message"
                        defaultValue="EMERGENCY: I need help. This is an automated alert from SafeGuard. My current location is: [LOCATION]. Please contact me or emergency services immediately."
                        className="min-h-32"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="include-location" defaultChecked />
                        <Label htmlFor="include-location">Include my current location</Label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="call-emergency" defaultChecked />
                        <Label htmlFor="call-emergency">Automatically call emergency services (181)</Label>
                      </div>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">Save Settings</Button>
                  </div>
                </div>
                <div className="rounded-lg border p-6 shadow-sm">
                  <h2 className="text-xl text-purple-500 font-bold">Privacy Settings</h2>
                  <p className="text-sm text-muted-foreground">Control how your information is shared and used.</p>
                  <div className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="community-visibility">Community Visibility</Label>
                          <p className="text-xs text-muted-foreground">
                            Control how you appear to others in the community
                          </p>
                        </div>
                        <select
                          id="community-visibility"
                          className="flex h-9 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="anonymous">Anonymous</option>
                          <option value="username">Username Only</option>
                          <option value="full">Full Profile</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="location-tracking" defaultChecked />
                        <div>
                          <Label htmlFor="location-tracking">Enable location tracking for safety features</Label>
                          <p className="text-xs text-muted-foreground">
                            Required for SOS alerts and safe route navigation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="data-collection" />
                        <div>
                          <Label htmlFor="data-collection">
                            Allow anonymous data collection for safety improvements
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            Helps us identify dangerous areas and improve safety features
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">Save Privacy Settings</Button>
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

const Checkbox = ({ id, defaultChecked }) => {
  return (
    <input
      type="checkbox"
      id={id}
      defaultChecked={defaultChecked}
      className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
    />
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

const Textarea = ({ id, defaultValue, className }) => {
  return (
    <textarea
      id={id}
      defaultValue={defaultValue}
      className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    />
  )
}
