"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RefreshCcw, Flag, MapPin, Scissors, Briefcase, Award, Landmark } from "lucide-react"
import { gsap } from "gsap"
import { Image } from "astro:assets"

// Preloader component
const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: onComplete,
    })

    timeline
      .fromTo(".flag", {
        scale: 0,
        rotation: 0,
      }, {
        scale: 1.5,
        rotation: 360,
        duration: 1,
        ease: "power4.out",
      })
      .to(".flag", {
        scale: 10, // Scale to fill the screen
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
      }, "-=0.5")
  }, [onComplete])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-green-900 z-50">
      <div className="flag bg-red-500 rounded-full w-30 h-30 flex items-center justify-center">
        <img src="/milorad-dodik-100.jpg" className="rounded-full" alt="Dodo" width={300} height={300} />
      </div>
    </div>
  )
}

const FloatingIcons = () => {
  const icons = [Flag, MapPin, Scissors, Briefcase, Award, Landmark]
  const [iconCount, setIconCount] = useState(15)

  useEffect(() => {
    const updateIconCount = () => {
      setIconCount(window.innerWidth < 768 ? 8 : 15)
    }

    updateIconCount()
    window.addEventListener("resize", updateIconCount)

    return () => window.removeEventListener("resize", updateIconCount)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(iconCount)].map((_, i) => {
        const Icon = icons[Math.floor(Math.random() * icons.length)]
        const size = Math.random() * 30 + 20
        const duration = Math.random() * 20 + 30
        const delay = Math.random() * 10
        const initialX = Math.random() * 100
        const initialY = Math.random() * 100

        return (
          <motion.div
            key={i}
            className="absolute text-green-800/10 dark:text-green-200/10"
            style={{
              top: `${initialY}%`,
              left: `${initialX}%`,
              width: size,
              height: size,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              rotate: [0, Math.random() * 360, Math.random() * -360, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Icon size={size} />
          </motion.div>
        )
      })}
    </div>
  )
}

// Dodik quotes
const dodikQuotes = [
    "Milorad Dodik pokušava odcijepiti RS od BiH kao što ja pokušavam odvojiti se od Begove čorbe – nemoguće i besmisleno.",
    "Dodik je opet najavio referendum. Ovaj put da li da pije rakiju ili da konačno prizna da je BiH njegova država.",
    "Dodik kaže da će se RS odvojiti. Ja kažem da ću prestat’ jesti ćevape. Oboje znamo da se to NIKAD neće desiti.",
    "Dodik je toliko puta najavio odcjepljenje da je i posljednja baklava u Asčinici dosadila sama sebi čekajući.",
    "Dodik: 'Odcijepićemo se!' Sarajevo: 'Hajde prvo pošalji poštom onu ličnu, da te odjavimo iz državnog budžeta.'",
    "Dodik je rekao da će se RS odvojiti čim završi brojanje do beskonačnosti. Trenutno je na broju 'još malo, samo što nije'.",
    "Dodik je bliži tome da postane najbolji prijatelj Bakira Izetbegovića nego RS izlasku iz BiH. Oboje znamo da to ne ide zajedno.",
    "Dodik je opet zaprijetio odcjepljenjem. U drugim vijestima, Baščaršija i dalje prodaje suvenire sa kartom CIJELE BiH.",
    "Dodik je toliko puta najavio odcjepljenje da ga je čak i Google Translate preveo u 'nikad se neće desiti'.",
    "Dodik je rekao da će se RS odvojiti. Isto je rekao i 2006, 2008, 2010, 2012… Ma hajde ba, putuj u svijet fikcije ako možeš!",
  ];

export default function CheckBackLater() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [showContent, setShowContent] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % dodikQuotes.length)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 p-4 overflow-hidden relative">
      <img src="/dodo.jpg" alt="Dodo 2" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-5" />

      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <div className="dark w-full">
          <FloatingIcons />
          <div className="relative z-10 w-full max-w-3xl mx-auto text-center px-4">
            <AnimatePresence mode="wait">
              {showContent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="space-y-8 md:space-y-12"
                >
                  {/* Big NE */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      y: [0, -20, 0],
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      y: {
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        ease: "easeInOut",
                      },
                    }}
                    className="relative"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 blur-3xl bg-red-500 rounded-full opacity-30" />
                      <h1 className="text-[8rem] md:text-[15rem] font-black text-white leading-none relative z-10 drop-shadow-[0_0_30px_rgba(255,0,0,0.5)]">
                        NE
                      </h1>
                    </div>
                  </motion.div>

                  {/* Question */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                      Je li krenuo rat?
                    </h2>
                    <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-green-400 to-emerald-300 mx-auto rounded-full" />
                  </motion.div>

                  {/* Dodik quote */}
                  <motion.div
                    key={currentQuoteIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="backdrop-blur-lg bg-white/10 p-4 md:p-8 rounded-xl border border-white/20 max-w-2xl mx-auto touch-pan-x"
                  >
                    <p className="text-lg md:text-xl text-white/90 italic">
                      "{dodikQuotes[currentQuoteIndex]}"
                    </p>
                  </motion.div>

                  {/* Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <Button
                      onClick={handleNextQuote}
                      className="gap-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-green-200 px-4 py-3 md:px-6 md:py-6 text-base md:text-lg active:scale-95 transition-transform"
                      aria-label="Show next quote"
                    >
                      <RefreshCcw className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="hidden sm:inline">Još Dodikovih pokušaja</span>
                      <span className="sm:hidden">Još Dodikovih izjava</span>
                    </Button>
                  </motion.div>

                  {/* Footer */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-xs md:text-sm text-white/60 mt-8 md:mt-12"
                  >
                    Bosna i Hercegovina: Zajedno od 1992. Usprkos Dodikovim naporima.
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  )
}

