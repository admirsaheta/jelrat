import { PlayCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface NewsCardProps {
  news: {
    id: number
    category: string
    categoryColor: string
    title: string
    image: string
    hasVideo: boolean
    readTime: string
    views: number
    shares: number
  }
  isSecondary?: boolean
  className?: string
}

export default function NewsCard({ news, isSecondary = false, className }: NewsCardProps) {
  return (
    <div className={cn("relative group", className)}>
      <a href="#" className="block">
        <div className="relative">
          <img
            src={news.image || "/dodo.jpg"}
            alt={news.title}
            width={isSecondary ? 300 : 400}
            height={isSecondary ? 200 : 300}
            className="w-full h-auto object-cover rounded-md"
          />
          {news.hasVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-12 h-12 text-white opacity-80" />
            </div>
          )}
        </div>
        <div className="mt-2">
          <span className={cn("text-xs font-bold", news.categoryColor)}>{news.category}</span>
          <h3
            className={cn(
              "font-bold mt-1 group-hover:text-gray-300 transition-colors",
              isSecondary ? "text-base" : "text-xl",
            )}
          >
            {news.title}
          </h3>
          <div className="flex items-center text-gray-500 text-xs mt-2">
            <span>{news.readTime}</span>
            <span className="ml-auto flex items-center">
              <span>{news.views}</span>
              <span className="mx-1">•</span>
              <span>{news.shares}</span>
            </span>
          </div>
        </div>
      </a>
    </div>
  )
}

