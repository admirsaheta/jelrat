import { MoonIcon, SearchIcon, UserIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NewsCard from "@/components/news-card";
import JobListing from "@/components/job-listing";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuItemProps {
  title: string;
  bgColor: string;
  url: string;
}

function MenuItem({ title, bgColor, url }: MenuItemProps) {
  return (
    <a
      href={url}
      className="px-2 py-1 text-sm font-medium hover:bg-gray-800 rounded flex items-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span
        className={`inline-block w-3 h-3 ${bgColor} rounded-sm mr-1`}
      ></span>
      {title}
    </a>
  );
}

export default function KlixHero() {
  // No need for the categories array anymore

  const trendingTopics = [
    "RAT U BOSNI?",
    "PROTESTI U SRBIJI?",
    "DONALD TRUMP NA STRANI DODIKA",
    "REFERENDUM",
    "MILORAD DODIK",
    "SIPA",
    "STA CE HRVATI?",
  ];

  const featuredNews = [
    {
      id: 1,
      category: "JELRAT STUDIO",
      categoryColor: "text-red-500",
      title:
        "Dodik najavio nezavisnost, ali nema papir za prijavu: 'Gdje su mi one skripte iz prava?'",
      image: "/dodo.jpg?height=300&width=400",
      hasVideo: true,
      readTime: "1 sat",
      views: 420,
      shares: 690,
    },
    {
      id: 2,
      category: "EKONOMIJA U RS",
      categoryColor: "text-blue-500",
      title:
        "Građani Republike Srpske pred dilemom: Uložiti u obveznice ili kupiti još svijeća?",
      image: "/milorad-dodik-100.jpg?height=300&width=400",
      hasVideo: false,
      readTime: "57 min",
      views: 52,
      shares: 36,
    },
    {
      id: 3,
      category: "REGIONALNA KOMEDIJA",
      categoryColor: "text-red-500",
      title:
        "Dodik sazvao hitnu sjednicu: 'Ako ne možemo u Evropu, osnivamo svoju Uniju!'",
      image: "/dodo1.jpeg?height=300&width=400",
      hasVideo: false,
      readTime: "1 sat",
      views: 232,
      shares: 735,
    },
  ];

  const secondaryNews = [
    {
      id: 4,
      category: "NA RUBU NAUKE",
      categoryColor: "text-red-500",
      title:
        "Dodik tvrdi da je pronašao izlaz iz BiH, ali GPS pokazuje da je i dalje u Laktašima",
      image: "/milorad-dodik-100.jpg?height=300&width=400",
      hasVideo: true,
      readTime: "36 min",
      views: 31,
      shares: 24,
    },
    {
      id: 5,
      category: "KULTURNA REVOLUCIJA",
      categoryColor: "text-purple-500",
      title:
        "Vlasti u RS-u otkrile novu nacionalnu strategiju: Više turbofolka, manje realnosti",
      image: "/dodo.jpg?height=300&width=400",
      hasVideo: true,
      readTime: "8 min",
      views: 11,
      shares: 5,
    },
    {
      id: 6,
      category: "EKSKLUZIVA",
      categoryColor: "text-red-500",
      title:
        "Dodik poslao pismo UN-u: 'Ako nas ne priznate, sami ćemo se priznati!'",
      image: "/dodo1.jpeg?height=300&width=400",
      hasVideo: false,
      readTime: "1 sat",
      views: 140,
      shares: 149,
    },
    {
      id: 7,
      category: "VANJSKA POLITIKA",
      categoryColor: "text-purple-500",
      title:
        "Lukašenko ponudio Dodiku pomoć: 'Ako ti ne daju državu, ja ću ti posuditi jednu na vikend!'",
      image: "/dodo1.jpeg?height=300&width=400",
      hasVideo: false,
      readTime: "1 sat",
      views: 444,
      shares: 390,
    },
  ];

  const jobListings = [
    {
      title: "Radnik na proizvodnoj liniji za njemačke penzionere (m/ž)",
      company: "Bavarian Sausage GmbH, München",
      featured: true,
    },
    {
      title: "Majstor za sve, ali najviše bauštelu (m/ž)",
      company: "BetonBau Deutschland, Frankfurt",
      featured: true,
    },
    {
      title: "Vozač dostavnog kombija, minimalno 200 paketa dnevno (m/ž)",
      company: "DHL Express, Berlin",
      featured: false,
    },
    {
      title: "Pomoćni kuhar za pripremu Wurst-a i piva (m/ž)",
      company: "Biergarten & Co, Hamburg",
      featured: true,
    },
    {
      title: "Inženjer koji će ipak završiti na gradilištu (m/ž)",
      company: "HochBau AG, Stuttgart",
      featured: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <a href="/" className="text-3xl font-bold">
                jel rat?
              </a>
              <nav className="hidden md:flex space-x-1">
                <MenuItem
                  title="Klix"
                  bgColor="bg-red-400"
                  url="https://klix.ba"
                />
                <MenuItem
                  title="Avaz"
                  bgColor="bg-blue-400"
                  url="https://avaz.ba"
                />
                <MenuItem
                  title="N1"
                  bgColor="bg-green-400"
                  url="https://n1info.ba/"
                />
                <MenuItem
                  title="Oslobođenje"
                  bgColor="bg-yellow-400"
                  url="https://oslobodjenje.ba/vijesti/"
                />
                <MenuItem
                  title="Bljesak.info"
                  bgColor="bg-purple-400"
                  url="https://bljesak.info/"
                />
                <MenuItem
                  title="Nezavisne Novine"
                  bgColor="bg-orange-400"
                  url="https://nezavisne.com/"
                />
                <MenuItem
                  title="OLX"
                  bgColor="bg-teal-400"
                  url="https://olx.ba/"
                />
                <MenuItem
                  title="Artinfo"
                  bgColor="bg-pink-400"
                  url="https://artinfo.ba/"
                />
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://de.indeed.com/q-allemagne-jobs.html?&aceid=&kw=adwords_c_4961746700_17336510138_0_0_pmax&sid=de_googcontjspmax-_c__g_9216184_gclid$_Cj0KCQjw-e6-BhDmARIsAOxxlxVqLrkQXHY186LDdvhfW-HoQxqEvbmTLCJ3GRVKbFXrdtco8W-TyokaArYHEALw_wcB&gad_source=1&gclid=Cj0KCQjw-e6-BhDmARIsAOxxlxVqLrkQXHY186LDdvhfW-HoQxqEvbmTLCJ3GRVKbFXrdtco8W-TyokaArYHEALw_wcB&gclsrc=aw.ds"
                target="_blank"
              >
                <Button variant="ghost" size="icon">
                  <SearchIcon className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://sarajewo.diplo.de/" target="_blank">
                <Button variant="ghost" size="icon">
                  <UserIcon className="h-5 w-5" />
                </Button>
              </a>
              <Button variant="ghost" size="icon">
                <MoonIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Secondary Nav */}
      <div className="bg-[#1a1a1a] py-2 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-6 overflow-x-auto scrollbar-hide">
            <a href="#" className="text-sm font-bold whitespace-nowrap">
              JELRAT STUDIO
            </a>
            <a href="#" className="text-sm font-bold whitespace-nowrap">
              JELRAT POSAO
            </a>
            {trendingTopics.map((topic, index) => (
              <a
                key={index}
                href="#"
                className="text-sm text-gray-400 whitespace-nowrap hover:text-white"
              >
                # {topic}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-4">
        <div className="w-full h-1/2 flex flex-col items-center justify-center bg-red-600 p-6 mb-6 shadow-lg text-center relative">
         
          <h1 className="text-white text-3xl font-bold">
            PANIKA ODGOĐENA! (za sada...)
          </h1>
          <h2 className="text-white text-lg font-semibold mt-2">
            Još ništa ne puca, ali drž'te pasoše spremne! Gdje bježati? Koga
            zvati? Sve na <span className="underline">JelRat</span> portalu.
          </h2>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Main News Section - 3 columns */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Featured News */}
              {featuredNews.map((news) => (
                <NewsCard
                  key={news.id}
                  news={news}
                  className={news.id === 2 ? "md:col-span-2" : ""}
                />
              ))}

              {/* Secondary News */}
              {secondaryNews.map((news) => (
                <NewsCard key={news.id} news={news} isSecondary />
              ))}
            </div>

            {/* Sidebar - 1 column */}
            <div className="lg:col-span-1">
              <div className="bg-[#1a1a1a] rounded-md p-4 mb-4">
                <div className="flex items-center mb-4">
                  <h2 className="text-xl font-bold">jelrat</h2>
                  <Badge className="ml-2 bg-pink-600 text-white">POSAO</Badge>
                </div>

                <div className="space-y-4">
                  {jobListings.map((job, index) => (
                    <JobListing key={index} job={job} />
                  ))}
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-md p-4">
                <Tabs defaultValue="najnovije">
                  <TabsList className="grid w-full grid-cols-3 text-white bg-[#252525]">
                    <TabsTrigger value="najnovije">Najnovije</TabsTrigger>
                    <TabsTrigger value="najcitanije">Najčitanije</TabsTrigger>
                    <TabsTrigger value="preporuke">Preporuke</TabsTrigger>
                  </TabsList>
                  <div className="mt-4">
                    <div className="mb-4">
                      <span className="text-amber-500 text-sm font-bold">
                        POSJETITE NJEMCE
                      </span>
                      <h3 className="font-medium mt-1">
                        Njemačka je otvorena za rad!
                      </h3>
                      <div className="flex items-center text-gray-500 text-xs mt-2">
                        <span>1 minut</span>
                        <span className="ml-auto flex items-center">
                          <span>0</span>
                          <span className="mx-1">•</span>
                          <span>0</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
