/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-bh2YJTYpLzU6B6JJMGrvhdJsn5svvM.jpeg"
            alt="K-Bemanning"
            width={150}
            height={40}
          />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="https://www.k-bemanning.se" className="text-gray-600 hover:text-gray-900">
                Hem
              </Link>
            </li>
            <li>
              <Link href="https://www.k-bemanning.se/om-oss/" className="text-gray-600 hover:text-gray-900">
                Om oss
              </Link>
            </li>
            <li>
              <Link href="https://www.k-bemanning.se/kontakta-oss/" className="text-gray-600 hover:text-gray-900">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

