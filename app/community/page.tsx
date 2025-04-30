import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield, ThumbsUp, MessageSquare, Flag, Filter, PlusCircle } from "lucide-react"
import EmergencySOS from "@/components/emergency-sos"

export default function CommunityPage() {
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
            <Link href="/community" className="text-sm font-medium transition-colors text-purple-600">
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
            <h1 className="text-3xl text-purple-600 font-bold tracking-tighter">Community Forum</h1>
            <p className="text-muted-foreground">Connect with others, share experiences, and provide mutual support.</p>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <select className="flex h-9 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="recent">Most Recent</option>
                    <option value="popular">Most Popular</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Post
                </Button>
              </div>
              <div className="space-y-4">
                {/* Community Post 1 */}
                <div className="rounded-lg border p-4">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-purple-100 p-1">
                        <span className="text-xs font-medium text-purple-600">Anonymous</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Posted 2 hours ago</span>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Flag className="h-4 w-4" />
                      <span className="sr-only">Report</span>
                    </Button>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">Harassment at Downtown Bus Stop</h3>
                  <p className="mt-2 text-sm">
                    I experienced verbal harassment while waiting at the downtown bus stop yesterday evening. A group of
                    men were making inappropriate comments and wouldn't leave when asked. I want to warn others who use
                    this route.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      42
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <MessageSquare className="mr-1 h-4 w-4" />
                      12 Comments
                    </Button>
                  </div>
                </div>

                {/* Community Post 2 */}
                <div className="rounded-lg border p-4">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <img src="/placeholder.svg?height=24&width=24" alt="User" className="h-6 w-6 rounded-full" />
                        <span className="text-sm font-medium">Sarah J.</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Posted 1 day ago</span>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Flag className="h-4 w-4" />
                      <span className="sr-only">Report</span>
                    </Button>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">Self-Defense Workshop This Weekend</h3>
                  <p className="mt-2 text-sm">
                    I'm organizing a free self-defense workshop this Saturday at the community center. All women are
                    welcome, no experience necessary. We'll cover basic techniques and safety strategies. Please comment
                    if you're interested!
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      87
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <MessageSquare className="mr-1 h-4 w-4" />
                      34 Comments
                    </Button>
                  </div>
                </div>

                {/* Community Post 3 */}
                <div className="rounded-lg border p-4">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-purple-100 p-1">
                        <span className="text-xs font-medium text-purple-600">Anonymous</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Posted 3 days ago</span>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Flag className="h-4 w-4" />
                      <span className="sr-only">Report</span>
                    </Button>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">Stalking Incident Near University Campus</h3>
                  <p className="mt-2 text-sm">
                    I've noticed the same person following me between classes for the past week. Campus security has
                    been notified, but I wanted to alert other students to be vigilant. He's approximately 6ft tall with
                    dark hair and usually wears a black jacket.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      56
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <MessageSquare className="mr-1 h-4 w-4" />
                      23 Comments
                    </Button>
                  </div>
                </div>

                {/* Community Post 4 - Response from Accused */}
                <div className="rounded-lg border p-4 border-orange-200 bg-orange-50">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-orange-100 p-1">
                        <span className="text-xs font-medium text-orange-600">Response</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Posted 1 day ago</span>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Flag className="h-4 w-4" />
                      <span className="sr-only">Report</span>
                    </Button>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">Response to Incident at Central Park</h3>
                  <p className="mt-2 text-sm">
                    I believe I was wrongfully identified in a post about an incident at Central Park. I was in that
                    area for a photography class, not following anyone. I've provided evidence to the moderators and
                    would like to clear my name.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      12
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <MessageSquare className="mr-1 h-4 w-4" />8 Comments
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button variant="outline">Load More</Button>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <h2 className="text-xl font-semibold">Create a Post</h2>
                <form className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="post-title">Title</Label>
                    <Input id="post-title" placeholder="Enter a title for your post" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="post-content">Content</Label>
                    <Textarea
                      id="post-content"
                      placeholder="Share your experience or information"
                      className="min-h-32"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="post-anonymous" />
                      <Label htmlFor="post-anonymous">Post anonymously</Label>
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Post to Community</Button>
                </form>
              </div>
              <div className="rounded-lg border p-4">
                <h2 className="text-xl font-semibold">Community Guidelines</h2>
                <ul className="mt-4 space-y-2 text-sm">
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
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span>Be respectful and supportive of others</span>
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
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span>Do not share personal identifying information</span>
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
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span>Report incidents truthfully and accurately</span>
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
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span>Flag inappropriate content for moderation</span>
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
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span>Respect the right to respond to accusations</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border p-4 bg-purple-50">
                <h2 className="text-xl font-semibold">Safety Resources</h2>
                <div className="mt-4 space-y-3">
                  <Link href="/helpline" className="flex items-start gap-2 group">
                    <Phone className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm font-medium group-hover:underline">Emergency Helpline</p>
                      <p className="text-xs text-muted-foreground">24/7 support for crisis situations</p>
                    </div>
                  </Link>
                  <Link href="/resources" className="flex items-start gap-2 group">
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
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium group-hover:underline">Safety Guides</p>
                      <p className="text-xs text-muted-foreground">Tips and strategies for staying safe</p>
                    </div>
                  </Link>
                  <Link href="/legal" className="flex items-start gap-2 group">
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
                      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
                      <path d="M12 8v4" />
                      <path d="M12 16h.01" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium group-hover:underline">Legal Resources</p>
                      <p className="text-xs text-muted-foreground">Information on your rights and options</p>
                    </div>
                  </Link>
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

const Checkbox = ({ id }) => {
  return (
    <input type="checkbox" id={id} className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600" />
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

const Phone = ({ className }) => {
  return (
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
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
