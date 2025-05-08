import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BookOpen, Music, Palette, Utensils, Heart, Brain } from "lucide-react"

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-yellow-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-700">Our Services</h1>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Programs for Every Age</h2>
          <p className="text-gray-700 mb-6">
            At Seattle Blossoms Daycare, we offer specialized programs designed to meet the developmental needs of
            children at every stage. Our curriculum is thoughtfully crafted to nurture growth, inspire creativity, and
            foster a love of learning.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <ProgramCard
              title="Infant Care"
              age="6 weeks - 18 months"
              color="bg-pink-100"
              icon={<Heart className="text-pink-500" size={24} />}
            />
            <ProgramCard
              title="Toddler Program"
              age="18 months - 3 years"
              color="bg-blue-100"
              icon={<Brain className="text-blue-500" size={24} />}
            />
            <ProgramCard
              title="Preschool"
              age="3 - 5 years"
              color="bg-purple-100"
              icon={<BookOpen className="text-purple-500" size={24} />}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Enrichment Activities</h2>
            <p className="text-gray-700 mb-6">
              We offer a variety of enrichment activities designed to expose children to new experiences and help them
              discover their passions.
            </p>

            <ul className="space-y-4">
              <ActivityItem
                icon={<Music className="text-purple-500" />}
                title="Music & Movement"
                description="Weekly music classes that introduce children to rhythm, melody, and self-expression through movement."
              />
              <ActivityItem
                icon={<Palette className="text-blue-500" />}
                title="Art Exploration"
                description="Creative art projects that encourage imagination and fine motor skill development."
              />
              <ActivityItem
                icon={<BookOpen className="text-green-500" />}
                title="Early Literacy"
                description="Daily story time and language-rich activities to build strong foundations for reading."
              />
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Additional Services</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center">
                  <Utensils className="text-pink-500 mr-2" size={20} />
                  Nutritious Meals & Snacks
                </h3>
                <p className="text-gray-700">
                  We provide healthy, balanced meals and snacks prepared fresh daily. Our menu accommodates various
                  dietary needs and introduces children to diverse, nutritious foods.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Extended Hours</h3>
                <p className="text-gray-700">
                  We understand that parents have varying schedules. Our extended hours option provides flexibility for
                  early drop-offs and late pick-ups.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Summer Programs</h3>
                <p className="text-gray-700">
                  Our engaging summer programs offer themed weeks, special activities, and outdoor adventures to keep
                  children learning and having fun all summer long.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">Our Approach to Learning</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Children engaged in play-based learning"
                className="rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-pink-600 mb-2">Play-Based Learning</h3>
              <p className="text-gray-700">
                We believe children learn best through play. Our play-based curriculum encourages exploration,
                problem-solving, and social interaction in a supportive environment.
              </p>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Teacher working with children"
                className="rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-green-600 mb-2">Individualized Attention</h3>
              <p className="text-gray-700">
                Every child develops at their own pace. Our low teacher-to-child ratios allow us to provide personalized
                attention and tailor our approach to each child's unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ProgramCardProps {
  title: string
  age: string
  color: string
  icon: React.ReactNode
}

function ProgramCard({ title, age, color, icon }: ProgramCardProps) {
  return (
    <div className={`${color} rounded-xl p-5 shadow-md`}>
      <div className="flex items-center mb-3">
        {icon}
        <h3 className="text-lg font-bold ml-2">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-2">Ages: {age}</p>
      <p className="text-gray-700">
        A nurturing program designed specifically for this developmental stage, focusing on age-appropriate activities
        and milestones.
      </p>
    </div>
  )
}

interface ActivityItemProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ActivityItem({ icon, title, description }: ActivityItemProps) {
  return (
    <li className="flex">
      <div className="mr-3 mt-1">{icon}</div>
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </li>
  )
}
