"use client"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-3xl font-bold mb-4 md:mb-0 text-orange-500">Noura.ai</div>
          <nav className="space-x-4 text-sm flex items-center relative">
            <div
              className="relative"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <Link href="#" className="hover:text-orange-500">
                Products
              </Link>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-gray-600 border rounded-[8px] border-orange-500 text-white p-2 rounded-md shadow-lg">
                  <Link href="/demo" className="block px-4 py-2 hover:text-orange-500">
                    Demo
                  </Link>
                </div>
              )}
            </div>
            <Link href="#" className="hover:text-orange-500">
              Solutions
            </Link>

            {/* Contact Number Section */}
            <div className="ml-4 px-4 py-2 border border-orange-500 text-sm rounded-[2rem]">
              <span className="text-white">+1 (800) 123-4567</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
