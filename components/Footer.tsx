"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "PROGRAMS",
      links: [
        { name: "Full Stack Development", href: "#full-stack" },
        { name: "Artificial Intelligence", href: "#ai" },
        { name: "Data Analytics", href: "#data-analytics" },
        { name: "Digital Marketing", href: "#digital-marketing" },
        { name: "Internship Program", href: "/internship" },
      ],
    },
    {
      title: "LEARNING",
      links: [
        { name: "Live Classes", href: "#live-classes" },
        { name: "Hands-on Projects", href: "#hands-on-projects" },
        { name: "Workshops & Events", href: "#workshops" },
        { name: "Industry Mentorship", href: "#industry-mentorship" },
        { name: "Career Guidance", href: "#career-guidance" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { name: "Student Projects", href: "#student-projects" },
        { name: "Gallery", href: "/gallery" },
        { name: "Blog", href: "/blog" },
        { name: "Community", href: "#community" },
        { name: "NIM Connect", href: "#nim-connect" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Terms & Conditions", href: "/terms-and-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Refund Policy", href: "/refund-policy" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-black text-white py-12 md:py-20 font-sans border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[153px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link href="/" className="mb-6">
              <Image
                src="/images/nim_logo.png"
                alt="NIM Academy Logo"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mb-6 font-bold leading-relaxed">
              AI • Full Stack • Data Analytics • Digital Training
            </p>
            <p className="text-gray-400 text-sm max-w-sm mb-8 leading-relaxed">
              Empowering the next generation of tech leaders through industry-aligned curriculum and expert mentorship.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { name: "Facebook", href: "https://facebook.com/nimacademy", icon: <path d="M12.461 5.57l-0.309 2.93h-2.342v8.5h-3.518v-8.5h-1.753v-2.93h1.753v-1.764c0-2.383 0.991-3.806 3.808-3.806h2.341v2.93h-1.465c-1.093 0-1.166 0.413-1.166 1.176v1.464h2.651z"/> },
                { name: "Instagram", href: "https://instagram.com/nimacademy", icon: <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"/> },
                { name: "LinkedIn", href: "https://linkedin.com/company/nimacademy", icon: <path d="M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"/> },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-[2px] hover:bg-primary hover:text-black transition-all group"
                  aria-label={`Follow NIM Academy on ${social.name}`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-primary text-xs md:text-sm transition-colors block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
            <div className="max-w-md text-center lg:text-left">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Join Our Technical Community</h4>
              <p className="text-gray-400 text-sm">Stay updated with the latest in tech, AI, and career growth.</p>
            </div>
            <div className="w-full lg:max-w-lg">
              <iframe
                src="https://embeds.beehiiv.com/a086d7f5-5e02-4e85-ae52-9cda825501ed?slim=true"
                title="NIM Academy newsletter"
                height="52"
                style={{ width: "100%", border: "none", borderRadius: "2px" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest text-center md:text-left font-bold">
            © {currentYear} NIM Academy. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest font-bold">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms-and-conditions" className="text-gray-500 hover:text-white transition-colors">Terms</Link>
            <Link href="/refund-policy" className="text-gray-500 hover:text-white transition-colors">Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
