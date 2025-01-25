import Link from "next/link"
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const footerLinks = [
    { title: "Company", links: ["About", "Careers", "Press", "Blog"] },
    { title: "Product", links: ["Features", "Pricing", "Integrations", "API"] },
    { title: "Resources", links: ["Documentation", "Guides", "Support", "Status"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security", "Accessibility"] },
]

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    {footerLinks.map((column, index) => (
                        <div key={index}>
                            <h3 className="font-bold mb-4">{column.title}</h3>
                            <ul className="space-y-2">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link href="#" className="hover:underline">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-8 pt-8 border-t border-orange-400 flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2025 Noura.ai. All rights reserved.</p>
                    {/* Social Media Icons Section */}
                    <div className="flex justify-center space-x-6">
                        <Link href="#" className="text-white hover:text-orange-500">
                            <FaTwitter size={24} />
                        </Link>
                        <Link href="#" className="text-white hover:text-orange-500">
                            <FaFacebookF size={24} />
                        </Link>
                        <Link href="#" className="text-white hover:text-orange-500">
                            <FaInstagram size={24} />
                        </Link>
                        <Link href="#" className="text-white hover:text-orange-500">
                            <FaLinkedinIn size={24} />
                        </Link>
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="#" className="hover:underline">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:underline">
                            Terms of Service
                        </Link>
                    </div>
                </div>


            </div>
        </footer>
    )
}
