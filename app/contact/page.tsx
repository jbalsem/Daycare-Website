import Link from "next/link"
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8">
          <ArrowLeft className="mr-2" size={20} />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-700">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-pink-600 mb-6">Get in Touch</h2>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                  placeholder="(206) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                  placeholder="Tell us about your child and any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Information</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-pink-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">Address</h3>
                    <p className="text-gray-600">12027 Meridian Ave N, Seattle, WA 98133</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">Phone</h3>
                    <p className="text-gray-600">(206) 802-4712</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <p className="text-gray-600">anga1969tmam@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Hours of Operation</h2>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday</span>
                  <span>7:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Tuesday</span>
                  <span>7:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Wednesday</span>
                  <span>7:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Thursday</span>
                  <span>7:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Friday</span>
                  <span>7:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Schedule a Tour</h2>
              <p className="text-gray-700 mb-4">
                We'd love to show you around our facility and introduce you to our staff. Contact us to schedule a tour
                at a time that works for you.
              </p>
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Request a Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
