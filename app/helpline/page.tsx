import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Phone, Clock, MapPin, MessageSquare } from "lucide-react"
import EmergencySOS from "@/components/emergency-sos"

export default function HelplinePage() {
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
            <Link href="/helpline" className="text-sm font-medium transition-colors text-purple-600">
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
        <div className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter text-purple-600 sm:text-4xl md:text-5xl">24/7 Emergency Helpline</h1>
              <p className="text-muted-foreground md:text-xl">
                Immediate support and resources when you need them most.
              </p>
            </div>
            <div className="rounded-lg border p-8 shadow-sm bg-red-50">
              <div className="flex flex-col items-center gap-4 text-center">
                <Phone className="h-12 w-12 text-red-600" />
                <div>
                  <h2 className="text-2xl font-bold">Emergency Number</h2>
                  <p className="text-lg font-semibold text-red-600">181-SAFE-NOW</p>
                  <p className="text-sm text-muted-foreground">For immediate assistance in crisis situations</p>
                </div>
                <Button className="bg-red-600 hover:bg-red-700">Call Now</Button>
              </div>
            </div>
            {/* <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-100 p-3">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Live Chat Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect with a trained support specialist through our secure chat system.
                    </p>
                    <Button className="mt-4 bg-purple-600 hover:bg-purple-700">Start Chat</Button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-100 p-3">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Schedule a Call</h3>
                    <p className="text-sm text-muted-foreground">
                      Book a time to speak with a counselor or support specialist.
                    </p>
                    <Button className="mt-4 bg-purple-600 hover:bg-purple-700">Schedule</Button>
                  </div>
                </div>
              </div> */}
            {/* </div> */}
            <div className="rounded-lg border p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Support Centers Near You</h2>
              <p className="mt-2 text-muted-foreground">Find local resources and in-person support in your area.</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4 rounded-lg border p-4">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <div>
                    <h3 className="text-lg font-semibold">City Women's Support Center</h3>
                    <p className="text-sm text-muted-foreground">Home Guard Building, Chandigarh Sector 17, Chandigarh - 160017 (Near Bus Stand)</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Counseling
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Legal Aid
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Shelter
                      </span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm">
                        Call
                      </Button>
                      <Button variant="outline" size="sm">
                        Directions
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-4">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <div>
                    <h3 className="text-lg font-semibold">PGI Chandigarh</h3>
                    <p className="text-sm text-muted-foreground">Sector-12, Chandigarh </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        24/7 Support
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Medical Care
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Counseling
                      </span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm">
                        Call
                      </Button>
                      <Button variant="outline" size="sm">
                        Directions
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-4">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Police Station </h3>
                    <p className="text-sm text-muted-foreground">sector 17, Chandigarh</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Support
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Escort Services
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Reporting
                      </span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm">
                        Call
                      </Button>
                      <Button variant="outline" size="sm">
                        Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <Input placeholder="Enter your zip code" />
                  <Button className="bg-purple-600 hover:bg-purple-700">Find More</Button>
                </div>
              </div>
            </div>
            <div className="rounded-lg border p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Additional Resources</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">Legal Resources</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start gap-2">
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <Link href="#" className="text-sm hover:underline">
                        Understanding Restraining Orders
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <Link href="#" className="text-sm hover:underline">
                        Free Legal Consultation Services
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <Link href="#" className="text-sm hover:underline">
                        Victim's Rights Information
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">Mental Health Support</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start gap-2">
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <Link href="#" className="text-sm hover:underline">
                        Trauma Counseling Services
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <Link href="#" className="text-sm hover:underline">
                        Support Groups Directory
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <Link href="#" className="text-sm hover:underline">
                        Self-Care Resources
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">Safety Planning</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start gap-2">
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <Link href="#" className="text-sm hover:underline">
                        Creating a Personal Safety Plan
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <Link href="#" className="text-sm hover:underline">
                        Digital Safety and Privacy
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <Link href="#" className="text-sm hover:underline">
                        Emergency Preparedness Guide
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold">Financial Assistance</h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start gap-2">
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <Link href="#" className="text-sm hover:underline">
                        Victim Compensation Programs
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <Link href="#" className="text-sm hover:underline">
                        Emergency Housing Assistance
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      <Link href="#" className="text-sm hover:underline">
                        Transportation Support Services
                      </Link>
                    </li>
                  </ul>
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
