"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon, GithubIcon, TwitterIcon } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">About Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the visionary behind PT McIdeas Work Digital
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="max-w-3xl mx-auto overflow-hidden bg-gray-800 border-gray-700">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Muhamad Danang Priambodo"
                />
              </div>
              <CardContent className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-400 font-semibold">
                  Founder & CEO
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-100">
                  Muhamad Danang Priambodo
                </h3>
                <p className="mt-4 text-gray-400">
                  A passionate technologist and entrepreneur with a vision to transform the digital landscape in Indonesia. With extensive experience in software development and AI, Danang leads PT McIdeas Work Digital in creating innovative solutions that make a difference.
                </p>
                <div className="mt-6 flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <LinkedinIcon className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <GithubIcon className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <TwitterIcon className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}