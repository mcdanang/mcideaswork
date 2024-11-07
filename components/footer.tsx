import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Image
                src={"/mcideaswork-logo.svg"}
                alt="logo"
                width={0}
                height={0}
                className="w-[32px] h-auto block"
                priority
              />
              <span className="font-bold text-xl text-gray-100">
                McIdeas Work
              </span>
            </div>
            <p className="text-gray-400">
              Leading digital solutions provider in Indonesia
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-100">
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://teman-sejati.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Teman Sejati
                </a>
              </li>
              <li>
                <a
                  href="https://wrotels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Wrotels
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-100">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Kota Depok 16418, Jawa Barat, Indonesia</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5 text-blue-400" />
                <a
                  href="mailto:support@mcideas.work"
                  className="hover:text-blue-400 transition-colors"
                >
                  support@mcideas.work
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} PT McIdeas Work Digital. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
