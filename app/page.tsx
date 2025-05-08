"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, Star, Cloud, Sun } from "lucide-react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Rainbow colors for the title
  const rainbowColors = [
    "text-red-400",
    "text-orange-400",
    "text-yellow-400",
    "text-green-400",
    "text-blue-400",
    "text-indigo-400",
    "text-purple-400",
    "text-pink-400",
  ]

  const titleText = "Seattle Blossoms Daycare"

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-blue-100 relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Shapes */}
        <motion.div
          className="absolute w-20 h-20 text-yellow-300"
          animate={{
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ left: "10%", top: "15%" }}
        >
          <Sun size={80} />
        </motion.div>

        <motion.div
          className="absolute w-16 h-16 text-blue-300"
          animate={{
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ right: "15%", top: "20%" }}
        >
          <Cloud size={64} />
        </motion.div>

        <motion.div
          className="absolute w-12 h-12 text-pink-300"
          animate={{
            x: [0, 12, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ left: "25%", bottom: "25%" }}
        >
          <Heart size={48} />
        </motion.div>

        <motion.div
          className="absolute w-14 h-14 text-purple-300"
          animate={{
            x: [0, -10, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ right: "25%", bottom: "20%" }}
        >
          <Star size={56} />
        </motion.div>

        <motion.div
          className="absolute w-16 h-16 text-green-400"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ left: "40%", top: "30%" }}
        >
          <div className="relative">
            <div className="absolute w-16 h-16 rounded-full bg-green-200 opacity-50"></div>
            <div className="absolute w-12 h-12 rounded-full bg-green-300 opacity-50 top-2 left-2"></div>
            <div className="absolute w-8 h-8 rounded-full bg-green-400 opacity-50 top-4 left-4"></div>
          </div>
        </motion.div>

        <motion.div
          className="absolute w-20 h-20 text-orange-300"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ right: "35%", top: "40%" }}
        >
          <div className="w-20 h-20">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-5 h-5 rounded-full bg-orange-300"
                animate={{
                  x: Math.cos((i * (Math.PI * 2)) / 5) * 30,
                  y: Math.sin((i * (Math.PI * 2)) / 5) * 30,
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="absolute w-24 h-24"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ left: "65%", bottom: "35%" }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: `hsl(${i * 45}, 80%, 70%)`,
                left: Math.cos((i * (Math.PI * 2)) / 8) * 40 + 48,
                top: Math.sin((i * (Math.PI * 2)) / 8) * 40 + 48,
              }}
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          ))}
        </motion.div>

        <motion.div className="absolute" style={{ left: "15%", bottom: "15%" }}>
          <motion.div
            className="w-16 h-16 relative"
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full"
                style={{
                  backgroundColor: i === 0 ? "#f9a8d4" : i === 1 ? "#93c5fd" : "#a5b4fc",
                  left: 32 + Math.cos((i * (Math.PI * 2)) / 3) * 30,
                  top: 32 + Math.sin((i * (Math.PI * 2)) / 3) * 30,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive Elements that follow mouse */}
        <motion.div
          className="absolute w-8 h-8 text-green-300 pointer-events-none"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            rotate: [0, 360],
          }}
          transition={{
            x: { duration: 0.2, ease: "easeOut" },
            y: { duration: 0.2, ease: "easeOut" },
            rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        >
          <Star size={32} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            {titleText.split("").map((char, index) => (
              <span
                key={index}
                className={`${rainbowColors[index % rainbowColors.length]} ${char === " " ? "mr-2" : ""}`}
              >
                {char}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-purple-700 max-w-2xl">
            Where little minds grow, play, and blossom into their brightest potential
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <NavButton href="/" label="Home" color="bg-pink-200 hover:bg-pink-300" />
          <NavButton href="/contact" label="Contact Us" color="bg-blue-200 hover:bg-blue-300" />
          <NavButton href="/services" label="Services" color="bg-green-200 hover:bg-green-300" />
          <NavButton href="/about" label="About Us" color="bg-purple-200 hover:bg-purple-300" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-3xl"
        >
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Welcome to Seattle Blossoms!</h2>
          <p className="text-gray-700 mb-4">
            At Seattle Blossoms Daycare, we provide a nurturing and stimulating environment where children can learn,
            play, and grow. Our dedicated team of early childhood educators is committed to fostering each child's
            unique potential through creative activities, play-based learning, and personalized care.
          </p>
          <p className="text-gray-700">
            We believe that every child is a unique individual with their own strengths, interests, and learning style.
            Our program is designed to celebrate these differences while providing a safe, loving, and enriching
            environment for all children.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

interface NavButtonProps {
  href: string
  label: string
  color: string
}

function NavButton({ href, label, color }: NavButtonProps) {
  return (
    <Link href={href}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${color} text-gray-700 font-medium py-3 px-6 rounded-full text-lg shadow-md transition-all`}
      >
        {label}
      </motion.button>
    </Link>
  )
}
