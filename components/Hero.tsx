"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = ["Data Scientist", "AI/ML Engineer", "Python Developer"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [displayText, isDeleting, currentRole]);

  const tick = () => {
    const i = currentRole % roles.length;
    const fullText = roles[i];

    setDisplayText((prev) => {
      if (isDeleting) {
        const newText = prev.substring(0, prev.length - 1);
        if (newText === "") {
          setIsDeleting(false);
          setCurrentRole(currentRole + 1);
          setDelta(500);
        }
        return newText;
      } else {
        const newText = fullText.substring(0, prev.length + 1);
        if (newText === fullText) {
          setIsDeleting(true);
          setDelta(2000);
        }
        return newText;
      }
    });

    setDelta(isDeleting ? 100 : 200);
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 flex flex-col items-center justify-center text-center min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="relative w-80 h-80 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 animate-pulse"></div>
          <img
            src="/IMG_3225.JPG?height=200&width=200"
            alt="Profile"
            className="rounded-full w-full h-full object-cover border-4 border-background relative z-10"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi! I'm Shubham Wankar
        </h1>
        <div className="h-8 mb-6">
          <h2 className="text-xl md:text-2xl text-muted-foreground">
            I am a{" "}
            <span className="text-primary font-semibold">{displayText}</span>
            <span className="animate-blink">|</span>
          </h2>
        </div>
        <Button
          className="bg-primary hover:bg-primary/90"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Shubham Wankar 2025.pdf";
            link.download = "Shubham Wankar 2025.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          <Download className="mr-2 h-4 w-4" /> Download Resume
        </Button>
      </motion.div>
    </section>
  );
}
