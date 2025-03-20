
import { Badge } from "@/components/ui/badge"

interface JobListingProps {
  job: {
    title: string
    company: string
    featured?: boolean
  }
}

export default function JobListing({ job }: JobListingProps) {
  return (
    <a href="#" className="block hover:bg-[#252525] p-2 rounded-md transition-colors">
      <h3 className="font-medium">{job.title}</h3>
      <p className="text-gray-400 text-sm mt-1">{job.company}</p>
    
    </a>
  )
}
