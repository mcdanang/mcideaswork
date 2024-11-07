"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const products = [
  {
    title: "Teman Sejati",
    description: "Digital Wedding Invitation Platform",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    link: "https://teman-sejati.com",
    features: [
      "Customizable wedding invitations",
      "Digital RSVP management",
      "Guest list tracking",
      "Mobile-responsive designs",
    ],
  },
  {
    title: "Wrotels",
    description: "AI-Powered IELTS Writing Test Simulator",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    link: "https://wrotels.com",
    features: [
      "AI-powered writing assessment",
      "Real-time feedback",
      "Practice test scenarios",
      "Performance analytics",
    ],
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">Our Products</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our innovative digital products designed to solve real-world challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full bg-gray-800 border-gray-700">
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-400">{product.title}</CardTitle>
                  <CardDescription className="text-gray-400">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-400">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <a href={product.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}