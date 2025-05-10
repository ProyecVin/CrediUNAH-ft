"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">UNAH Cursos</Link>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden md:flex space-x-10 text-lg">
            <Link href="/" className="hover:text-gray-300 transition-all">Principal</Link>
            <Link href="#enlaces" className="hover:text-gray-300 transition-all">Enlaces</Link>
            <Link href="#cursos" className="hover:text-gray-300 transition-all">Cursos</Link>
            <Link href="#contacto" className="hover:text-gray-300 transition-all">Contacto</Link>
            <Link href="#login" className="hover:text-gray-300 transition-all">iniciar sesion</Link>
          </nav>

          {/* Call to Action - Desktop */}
          <div className="hidden md:block">
            <Link href="#certificados" className="bg-yellow-400 hover:bg-yellow-500 text-silver font-semibold py-3 px-6 rounded-md shadow transition">
              Mis Certificados
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-silver focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-5 space-y-4">
            <Link href="/" className="block text-lg hover:text-gray-300 transition-all">Principal</Link>
            <Link href="#enlaces" className="block text-lg hover:text-gray-300 transition-all">Enlaces</Link>
            <Link href="#cursos" className="block text-lg hover:text-gray-300 transition-all">Cursos</Link>
            <Link href="#contacto" className="block text-lg hover:text-gray-300 transition-all">Contacto</Link>
            <Link href="#login" className="block text-lg hover:text-gray-300 transition-all">iniciar sesion</Link>
          </div>
        )}
      </div>
    </header>
  );
}
