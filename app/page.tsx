import Link from "next/link"
import { Shield, MapPin, Phone, Users, Bell, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import EmergencySOS from "@/components/emergency-sos"

export default function Home() {
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
              <Button variant="ghost" size="icon" className="rounded-full">
                <img src="/profile.png?height=32&width=32" alt="Profile" className="h-8 w-8 rounded-full" />
                <span className="sr-only">Profile</span>
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#fdf0fe]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl text-purple-600 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Digital Shield For Women
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Empowering women with the tools they need to feel safe and secure, wherever they go. Our platform detects threats in real-time, offers immediate support,and connects you to the resources you need. Together, we can build a safer world for every woman.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/report">
                    <Button className="bg-purple-600 hover:bg-purple-700">Report an Incident</Button>
                  </Link>
                  <EmergencySOS />
                </div>
              </div>
              <img
                src="frontpage.png"
                alt="Women Safety"

                className="w-80 h-90 max-w-xl mx-auto rounded-2xl object-cover"
              // className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              // width={400}
              // height={1000}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-purple-600 tracking-tighter md:text-4xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Comprehensive tools designed to enhance safety and provide support when you need it most.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-purple-100 p-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Secure Reporting</h3>
                <p className="text-center text-muted-foreground">
                  Report incidents with text, photos, and videos in a secure, private environment.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-purple-100 p-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Safe Routes</h3>
                <p className="text-center text-muted-foreground">
                  Navigate with confidence using our real-time map with safe route recommendations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-purple-100 p-4">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">24/7 Helpline</h3>
                <p className="text-center text-muted-foreground">
                  Access emergency support and resources whenever you need them.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-purple-100 p-4">
                  <Bell className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Emergency SOS</h3>
                <p className="text-center text-muted-foreground">
                  One-tap emergency alert that notifies your contacts and shares your location.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-purple-100 p-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Community Support</h3>
                <p className="text-center text-muted-foreground">
                  Connect with others, share experiences, and provide mutual support.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-purple-100 p-4">
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
                    className="h-6 w-6 text-purple-600"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M9 8h6" />
                    <path d="M9 12h6" />
                    <path d="M9 16h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Anonymous Posting</h3>
                <p className="text-center text-muted-foreground">
                  Share your experiences anonymously while maintaining your privacy.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <img
                src="/Join_Community.png?height=400&width=600"
                alt="Community Support"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                width={600}
                height={400}
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-purple-600 tracking-tighter md:text-4xl">Join Our Community</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Connect with a supportive network of individuals committed to creating safer spaces for women.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
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
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span>Share experiences and insights</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span>Upvote and comment on community posts</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span>Access resources and support</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span>Contribute to a safer environment for all</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/community">
                    <Button className="bg-purple-600 hover:bg-purple-700">Join Community</Button>
                  </Link>
                  <Link href="/helpline">
                    <Button variant="outline">Access Helpline</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
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
