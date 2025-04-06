"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactMe() {
  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                  <p className="text-muted-foreground mb-6">
                    I'm always open to discussing new projects, creative ideas
                    or opportunities to be part of your vision.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3" />
                      <a
                        href="mailto:john.doe@example.com"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        shubham.waankar23@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <a
                        href="tel:+91 8978996233"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        +91 8978996233
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Social Profiles
                  </h3>
                  <div className="flex flex-col space-y-4">
                    <Button variant="outline" className="justify-start" asChild>
                      <a
                        href="https://linkedin.com/in/shubham-wankar"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="mr-2 h-5 w-5 text-blue-600" />{" "}
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <a
                        href="https://github.com/shubhamwankar"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-5 w-5" /> GitHub
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start" asChild>
                      <a
                        href="https://twitter.com/shubhamwankar10"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="mr-2 h-5 w-5 text-blue-400" />{" "}
                        Twitter/X
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
