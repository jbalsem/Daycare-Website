"use client"

import { useState, useEffect } from "react"
import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Award, Heart, Users, ChevronLeft, ChevronRight } from "lucide-react"

function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      src: "/daycare1.jpg?height=400&width=500",
      alt: "Seattle Blossoms Daycare facility",
    },
    {
      src: "/daycare3.jpg?height=400&width=500",
      alt: "Children playing in our playground",
    },
    {
      src: "/daycare5.jpg?height=400&width=500",
      alt: "Art activities at Seattle Blossoms",
    },
    {
      src: "/daycare5.jpg?height=400&width=500",
      alt: "Our bright and colorful classrooms",
    },
    {
      src: "/daycare6.jpg?height=400&width=500",
      alt: "Our bright and colorful classrooms",
    },
    {
      src: "/daycare7.jpg?height=400&width=500",
      alt: "Our bright and colorful classrooms",
    },
    {
      src: "/daycare9.jpg?height=400&width=500",
      alt: "Our bright and colorful classrooms",
    },
    {
      src: "/daycare12.jpg?height=400&width=500",
      alt: "Our bright and colorful classrooms",
    },
    {
      src: "/daycare13.jpg?height=400&width=500",
      alt: "Our bright and colorful classrooms",
    },
    {
      src: "/daycare14.jpg?height=400&width=500",
      alt: "Our bright and colorful classrooms",
    },
    {
      src: "/daycare16.jpg?height=400&width=500",
      alt: "Our bright and colorful classrooms",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-[400px] w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={image.src || "/placeholder.svg"} fill alt={image.alt} className="object-cover" />
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 text-gray-800"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 text-gray-800"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-700">About Us</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <ImageSlideshow />
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Seattle Blossoms Daycare was recently founded in 2025 by Anga, a passionate educator with a profound love
              for children and early childhood development.
            </p>
            <p className="text-gray-700 mb-4">
              Anga's vision was born from her 15+ years of experience working with children and her belief that every
              child deserves a nurturing, stimulating environment where they can truly blossom into their full
              potential.
            </p>
            <p className="text-gray-700 mb-4">
              With a background in early childhood education and child psychology, Anga designed Seattle Blossoms to be
              more than just a daycare—it's a place where children's curiosity is celebrated, their unique personalities
              are honored, and their development is supported holistically.
            </p>
            <p className="text-gray-700">
              Though we're new to the Seattle community, we're quickly growing and building relationships with families
              who share our commitment to exceptional care, fostering a love of learning, and treating each child as a
              unique individual with unlimited potential.
            </p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Our Philosophy</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <PhilosophyCard
              icon={<Heart className="text-pink-500" size={32} />}
              title="Nurturing Environment"
              description="We create a warm, loving atmosphere where children feel safe, valued, and free to explore and express themselves."
            />
            <PhilosophyCard
              icon={<Users className="text-blue-500" size={32} />}
              title="Community Connection"
              description="We believe in building strong partnerships with families and engaging with our local community to enrich children's experiences."
            />
            <PhilosophyCard
              icon={<Award className="text-purple-500" size={32} />}
              title="Excellence in Education"
              description="We are committed to providing high-quality early childhood education that prepares children for future academic success."
            />
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-green-600 mb-6">Meet Our Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember
              name="Anga Tamam"
              role="Director/Owner"
              description="As the founder and director of Seattle Blossoms Daycare, Anga brings her passion for early childhood education and her vision of creating a nurturing environment where children can truly flourish."
            />
            <TeamMember
              name="Hagar Ayman"
              role="Lead Teacher"
              description="Hagar's creative approach to education and her dedication to child development make her an exceptional lead teacher who inspires both children and colleagues alike."
            />
            <TeamMember
              name="Basmala Ayman"
              role="Infant Care Specialist"
              description="With a gentle touch and deep understanding of infant needs, Bassmallah creates a secure and loving environment for our youngest children during their most formative months."
            />
          </div>
        </div>

        <div className="grid gap-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Our Facility</h2>
            <p className="text-gray-700 mb-4">
              Our purpose-built facility is designed with children in mind. We offer:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• Bright, spacious classrooms filled with age-appropriate learning materials</li>
              <li>• A secure outdoor playground with equipment for all ages</li>
              <li>• A dedicated art studio for creative expression</li>
              <li>• A cozy library corner filled with books</li>
              <li>• A modern kitchen where nutritious meals are prepared daily</li>
            </ul>
            <p className="text-gray-700">
              Safety is our top priority. Our facility includes secure entry systems, regular safety inspections, and
              staff trained in first aid and emergency procedures.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

interface PhilosophyCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function PhilosophyCard({ icon, title, description }: PhilosophyCardProps) {
  return (
    <div className="text-center p-5">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

interface TeamMemberProps {
  name: string
  role: string
  
  description: string
}

function TeamMember({ name, role, description }: TeamMemberProps) {
  return (
    <div className="text-center bg-gradient-to-b from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-bold text-purple-700 mb-2">{name}</h3>
      <p className="text-pink-600 font-medium mb-4">{role}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
