"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black bg-cover bg-center text-white py-8 md:py-16 font-sans">
      <div className="w-[90%] md:w-[80%] mx-auto mb-10 md:mb-16">
        <div className="border border-white/30 md:border-white/30 overflow-hidden">
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex flex-col items-center justify-center py-6 border-b border-white/30 h-[auto] min-h-[140px] px-4">
              <Image
                src="/images/nim_logo.png"
                alt="NIM Academy - Empowering Future Tech Professionals"
                width={140}
                height={32}
                className="h-10 w-auto object-contain mb-2"
              />
              <p className="text-[10px] text-gray-500 uppercase tracking-widest text-center">
                AI • Full Stack • Data Analytics • Digital Skills Training
              </p>
            </div>
            <div className="p-6 border-b border-[#FFFFFF66]/30">
              <div className="text-center mb-4">
                <p className="text-[21px] font-medium mb-2">Join the NIM Academy Community</p>
                <p className="text-sm text-gray-400 mb-4">Get updates about new programs, workshops, and tech insights.</p>
              </div>
              <div className="w-full">
                <iframe
                  src="https://embeds.beehiiv.com/a086d7f5-5e02-4e85-ae52-9cda825501ed?slim=true"
                  title="NIM Academy newsletter signup"
                  data-test-id="beehiiv-embed"
                  height="52"
                  frameBorder="0"
                  scrolling="no"
                  style={{
                    margin: "0px",
                    borderRadius: "0px",
                    backgroundColor: "transparent",
                    width: "100%",
                  }}
                ></iframe>
              </div>
            </div>
            <div className="p-6 border-b border-[#FFFFFF66]/30">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-3 text-white uppercase tracking-wider">PROGRAMS</h3>
                  <div className="space-y-2">
                    <Link href="#full-stack" className="block text-gray-400 hover:text-white transition-colors text-sm">Full Stack Development</Link>
                    <Link href="#ai" className="block text-gray-400 hover:text-white transition-colors text-sm">Artificial Intelligence</Link>
                    <Link href="#data-analytics" className="block text-gray-400 hover:text-white transition-colors text-sm">Data Analytics</Link>
                    <Link href="#digital-marketing" className="block text-gray-400 hover:text-white transition-colors text-sm">Digital Marketing</Link>
                    <Link href="/internship" className="block text-gray-400 hover:text-white transition-colors text-sm">Internship Program</Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-white uppercase tracking-wider">LEARNING</h3>
                  <div className="space-y-2">
                    <Link href="#live-classes" className="block text-gray-400 hover:text-white transition-colors text-sm">Live Classes</Link>
                    <Link href="#hands-on-projects" className="block text-gray-400 hover:text-white transition-colors text-sm">Hands-on Projects</Link>
                    <Link href="#workshops" className="block text-gray-400 hover:text-white transition-colors text-sm">Workshops & Events</Link>
                    <Link href="#industry-mentorship" className="block text-gray-400 hover:text-white transition-colors text-sm">Industry Mentorship</Link>
                    <Link href="#career-guidance" className="block text-gray-400 hover:text-white transition-colors text-sm">Career Guidance</Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-white uppercase tracking-wider">RESOURCES</h3>
                  <div className="space-y-2">
                    <Link href="#student-projects" className="block text-gray-400 hover:text-white transition-colors text-sm">Student Projects</Link>
                    <Link href="#gallery" className="block text-gray-400 hover:text-white transition-colors text-sm">Gallery</Link>
                    <Link href="#blog" className="block text-gray-400 hover:text-white transition-colors text-sm">Blog</Link>
                    <Link href="#community" className="block text-gray-400 hover:text-white transition-colors text-sm">Community</Link>
                    <Link href="#nim-connect" className="block text-gray-400 hover:text-white transition-colors text-sm">NIM Connect</Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-3 text-white uppercase tracking-wider">COMPANY</h3>
                  <div className="space-y-2">
                    <Link href="#about" className="block text-gray-400 hover:text-white transition-colors text-sm">About NIM Academy</Link>
                    <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link>
                    <Link href="#careers" className="block text-gray-400 hover:text-white transition-colors text-sm">Careers</Link>
                    <Link href="/terms-and-conditions" className="block text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link>
                    <Link href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
                    <Link href="/refund-policy" className="block text-gray-400 hover:text-white transition-colors text-sm">Refund Policy</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 p-6">
              <div className="flex items-center gap-4">
                <a href="https://facebook.com/nimacademy" target="_blank" rel="noopener noreferrer" aria-label="NIM Academy on Facebook" className="bg-black/50 border border-white/20 p-2 rounded opacity-70 hover:opacity-100 hover:bg-white/10 hover:border-white/40 hover:scale-110 transition-all duration-200">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="20" width="20"><path d="M12.461 5.57l-0.309 2.93h-2.342v8.5h-3.518v-8.5h-1.753v-2.93h1.753v-1.764c0-2.383 0.991-3.806 3.808-3.806h2.341v2.93h-1.465c-1.093 0-1.166 0.413-1.166 1.176v1.464h2.651z"></path></svg>
                </a>
                <a href="https://instagram.com/nimacademy" target="_blank" rel="noopener noreferrer" aria-label="NIM Academy on Instagram" className="bg-black/50 border border-[#FFFFFF1A] p-2 rounded opacity-70 hover:opacity-100 hover:bg-white/10 hover:border-white/40 hover:scale-110 transition-all duration-200">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg>
                </a>
                <a href="https://linkedin.com/company/nimacademy" target="_blank" rel="noopener noreferrer" aria-label="NIM Academy on LinkedIn" className="bg-black/50 border border-[#FFFFFF1A] p-2 rounded opacity-70 hover:opacity-100 hover:bg-white/10 hover:border-white/40 hover:scale-110 transition-all duration-200">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20"><path fillRule="evenodd" d="M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"></path></svg>
                </a>
                <a href="https://youtube.com/@nimacademy" target="_blank" rel="noopener noreferrer" aria-label="NIM Academy on YouTube" className="bg-black/50 border border-[#FFFFFF1A] p-2 rounded opacity-70 hover:opacity-100 hover:bg-white/10 hover:border-white/40 hover:scale-110 transition-all duration-200">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
                </a>
              </div>
              <div className="currency-dropdown mt-4">
                <select aria-label="Select currency" className="bg-black/50 border border-[#FFFFFF1A] p-2 rounded text-white opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50">
                  <option value="USD" className="bg-black text-white">USD</option>
                  <option value="INR" className="bg-black text-white">INR</option>
                </select>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex">
            <div className="w-[30%] border-r border-white/30 flex flex-col">
              <div className="flex-1 flex flex-col items-center justify-center p-8 border-b border-white/30 px-4 text-center">
                <Image
                  src="/images/nim_logo.png"
                  alt="NIM Academy - Empowering Future Tech Professionals"
                  width={140}
                  height={32}
                  className="h-10 w-auto object-contain mb-2"
                />
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 leading-relaxed">
                  AI • Full Stack • Data Analytics • Digital Skills Training
                </p>
                <p className="text-sm text-gray-400">© 2026 NIM Academy. All rights reserved</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 gap-4">
                <div className="flex items-center justify-center gap-4">
                  <a href="https://facebook.com/nimacademy" target="_blank" rel="noopener noreferrer" aria-label="NIM Academy on Facebook" className="bg-black/50 border border-[#FFFFFF1A] p-2 rounded opacity-70 hover:opacity-100 transition-opacity"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="20" width="20"><path d="M12.461 5.57l-0.309 2.93h-2.342v8.5h-3.518v-8.5h-1.753v-2.93h1.753v-1.764c0-2.383 0.991-3.806 3.808-3.806h2.341v2.93h-1.465c-1.093 0-1.166 0.413-1.166 1.176v1.464h2.651z"></path></svg></a>
                  <a href="https://instagram.com/nimacademy" target="_blank" rel="noopener noreferrer" aria-label="NIM Academy on Instagram" className="bg-black/50 border border-[#FFFFFF1A] p-2 rounded opacity-70 hover:opacity-100 transition-opacity"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg></a>
                  <a href="https://linkedin.com/company/nimacademy" target="_blank" rel="noopener noreferrer" aria-label="NIM Academy on LinkedIn" className="bg-black/50 border border-[#FFFFFF1A] p-2 rounded opacity-70 hover:opacity-100 transition-opacity"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20"><path fillRule="evenodd" d="M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"></path></svg></a>
                  <a href="https://youtube.com/@nimacademy" target="_blank" rel="noopener noreferrer" aria-label="NIM Academy on YouTube" className="bg-black/50 border border-[#FFFFFF1A] p-2 rounded opacity-70 hover:opacity-100 transition-opacity"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg></a>
                </div>
                <div className="currency-dropdown">
                  <select aria-label="Select currency" className="bg-black/50 border border-[#FFFFFF1A] p-2 rounded text-white opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50">
                    <option value="USD" className="bg-black text-white">USD</option>
                    <option value="INR" className="bg-black text-white">INR</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-[75%] flex flex-col">
              <div className="border-b border-white/30 p-8">
                <div className="grid grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-sm font-medium mb-4 text-white uppercase tracking-wider">PROGRAMS</h3>
                    <div className="space-y-3">
                      <Link href="#full-stack" className="block text-gray-400 hover:text-white transition-colors text-sm">Full Stack Development</Link>
                      <Link href="#ai" className="block text-gray-400 hover:text-white transition-colors text-sm">Artificial Intelligence</Link>
                      <Link href="#data-analytics" className="block text-gray-400 hover:text-white transition-colors text-sm">Data Analytics</Link>
                      <Link href="#digital-marketing" className="block text-gray-400 hover:text-white transition-colors text-sm">Digital Marketing</Link>
                      <Link href="/internship" className="block text-gray-400 hover:text-white transition-colors text-sm">Internship Program</Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-4 text-white uppercase tracking-wider">LEARNING</h3>
                    <div className="space-y-3">
                      <Link href="#live-classes" className="block text-gray-400 hover:text-white transition-colors text-sm">Live Classes</Link>
                      <Link href="#hands-on-projects" className="block text-gray-400 hover:text-white transition-colors text-sm">Hands-on Projects</Link>
                      <Link href="#workshops" className="block text-gray-400 hover:text-white transition-colors text-sm">Workshops & Events</Link>
                      <Link href="#industry-mentorship" className="block text-gray-400 hover:text-white transition-colors text-sm">Industry Mentorship</Link>
                      <Link href="#career-guidance" className="block text-gray-400 hover:text-white transition-colors text-sm">Career Guidance</Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-4 text-white uppercase tracking-wider">RESOURCES</h3>
                    <div className="space-y-3">
                      <Link href="#student-projects" className="block text-gray-400 hover:text-white transition-colors text-sm">Student Projects</Link>
                      <Link href="#gallery" className="block text-gray-400 hover:text-white transition-colors text-sm">Gallery</Link>
                      <Link href="#blog" className="block text-gray-400 hover:text-white transition-colors text-sm">Blog</Link>
                      <Link href="#community" className="block text-gray-400 hover:text-white transition-colors text-sm">Community</Link>
                      <Link href="#nim-connect" className="block text-gray-400 hover:text-white transition-colors text-sm">NIM Connect</Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-4 text-white uppercase tracking-wider">COMPANY</h3>
                    <div className="space-y-3">
                      <Link href="#about" className="block text-gray-400 hover:text-white transition-colors text-sm">About NIM Academy</Link>
                      <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link>
                      <Link href="#careers" className="block text-gray-400 hover:text-white transition-colors text-sm">Careers</Link>
                      <Link href="/terms-and-conditions" className="block text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link>
                      <Link href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
                      <Link href="/refund-policy" className="block text-gray-400 hover:text-white transition-colors text-sm">Refund Policy</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 font-sans">
                <div className="flex items-center gap-12">
                  <div className="w-[40%]">
                    <p className="text-lg font-medium mb-2">Join the NIM Academy Community</p>
                    <p className="text-sm text-gray-400">Get updates about new programs, workshops, and tech insights.</p>
                  </div>
                  <div className="w-[60%]">
                    <iframe
                      src="https://embeds.beehiiv.com/a086d7f5-5e02-4e85-ae52-9cda825501ed?slim=true"
                      title="NIM Academy newsletter signup"
                      data-test-id="beehiiv-embed"
                      height="52"
                      frameBorder="0"
                      scrolling="no"
                      style={{
                        margin: "0px",
                        borderRadius: "0px",
                        backgroundColor: "transparent",
                        width: "100%",
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
