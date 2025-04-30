import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Shield, Upload, Camera, Video } from "lucide-react"
import EmergencySOS from "@/components/emergency-sos"

export default function ReportPage() {
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
            <Link href="/report" className="text-sm font-medium transition-colors text-purple-600">
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
              <Button variant="ghost" size="icon" className="rounded-full">
                <img src="/profile.png?height=32&width=32" alt="Profile" className="h-8 w-8 rounded-full" />
                <span className="sr-only">Profile</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-[#fdf0fe]">
        <div className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl text-purple-600 font-bold tracking-tighter sm:text-4xl md:text-5xl">Report an Incident</h1>
              <p className="text-muted-foreground md:text-xl">
                Your report is confidential and secure. We prioritize your privacy and safety.
              </p>
            </div>
            <div className="rounded-lg border p-8 shadow-sm">
              <form className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Incident Details</h2>
                  <div className="space-y-2">
                    <Label htmlFor="incident-type">Type of Incident</Label>
                    <select
                      id="incident-type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select incident type</option>
                      <option value="harassment">Harassment</option>
                      <option value="assault">Assault</option>
                      <option value="stalking">Stalking</option>
                      <option value="domestic-violence">Domestic Violence</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="incident-date">Date and Time</Label>
                    <Input id="incident-date" type="datetime-local" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="incident-location">Location</Label>
                    <Input id="incident-location" placeholder="Enter the location of the incident" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="incident-description">Description</Label>
                    <Textarea
                      id="incident-description"
                      placeholder="Please describe what happened in as much detail as you feel comfortable sharing"
                      className="min-h-32"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Evidence (Optional)</h2>
                  <p className="text-sm text-muted-foreground">
                    You can upload photos, videos, or other evidence related to the incident. All files are encrypted
                    and stored securely.
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-6 text-center">
                      <div className="mb-4 rounded-full bg-purple-100 p-3">
                        <Upload className="h-5 w-5 text-purple-600" />
                      </div>
                      <p className="mb-2 text-sm font-medium">Upload Files</p>
                      <p className="text-xs text-muted-foreground">Drag and drop or click to upload</p>
                      <Input id="file-upload" type="file" className="hidden" />
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-6 text-center">
                      <div className="mb-4 rounded-full bg-purple-100 p-3">
                        <Camera className="h-5 w-5 text-purple-600" />
                      </div>
                      <p className="mb-2 text-sm font-medium">Take Photo</p>
                      <p className="text-xs text-muted-foreground">Use your camera to capture evidence</p>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-6 text-center">
                      <div className="mb-4 rounded-full bg-purple-100 p-3">
                        <Video className="h-5 w-5 text-purple-600" />
                      </div>
                      <p className="mb-2 text-sm font-medium">Record Video</p>
                      <p className="text-xs text-muted-foreground">Record video evidence directly</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Privacy Options</h2>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="anonymous" />
                      <Label htmlFor="anonymous">Submit anonymously</Label>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Your identity will be hidden in public records, but authorities may still access your information
                      if legally required.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="share-community" />
                      <Label htmlFor="share-community">Share with community (anonymized)</Label>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Your report will be shared with the community to raise awareness, but your identity will remain
                      protected.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="contact-authorities" />
                      <Label htmlFor="contact-authorities">Report to authorities</Label>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      We can forward this report to relevant authorities on your behalf.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">I confirm that this report is truthful to the best of my knowledge</Label>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Submit Report</Button>
                </div>
              </form>
            </div>
            <div className="rounded-lg border p-6 shadow-sm bg-purple-50">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-purple-100 p-3">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Your Privacy Matters</h3>
                  <p className="text-sm text-muted-foreground">
                    All reports are encrypted and stored securely. Your personal information is protected and will never
                    be shared without your consent, except when legally required.
                  </p>
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
