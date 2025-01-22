import { ArrowRight, Sparkles } from "lucide-react";
import { DemoVideo } from "../components/DemoVideo";
import { motion } from "framer-motion";

interface Props {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: Props) {
  return (
    <section className="relative pt-14 sm:pt-20 overflow-hidden ">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-black/5 opacity-80" />
        
        <div className="absolute top-20 left-[10%] w-[40rem] h-[40rem] bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full gradient-blur animate-float" />
        <div className="absolute bottom-0 right-[10%] w-[35rem] h-[35rem] bg-gradient-to-br from-yellow-500/10 to-red-500/10 rounded-full gradient-blur animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full gradient-blur animate-pulse-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/5 text-xs sm:text-sm mb-8 relative overflow-hidden group">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
              />
              <Sparkles className="h-4 w-4 mr-2 text-black/70" />
              <span className="relative z-10">AI Actor Generation</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-tight mb-6 max-w-3xl bg-gradient-to-br from-black to-black/60 bg-clip-text text-transparent"
          >
            Create Synthetic AI Actors from Scratch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base lg:text-xl text-black/60 mb-8 max-w-2xl"
          >
            Generate photorealistic AI actors that speak and move naturally.
            Transform your ideas into lifelike digital humans in minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center space-x-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white hover:bg-black/90 inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none text-[10px] sm:text-sm md:text-lg px-5 sm:px-6 py-2 sm:py-3 relative overflow-hidden group"
              onClick={onGetStarted}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer"
                style={{ backgroundSize: '200% 100%' }}
              />
              <span className="relative z-10">Start Creating</span>
              <ArrowRight className="h-5 w-5 ml-2 relative z-10" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.history.pushState({}, "", "/demo");
                window.dispatchEvent(new PopStateEvent("popstate"));
              }}
              className="bg-white opacity-80 border border-black/10 text-black hover:bg-white/90 inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none text-[10px] sm:text-sm md:text-lg px-5 sm:px-6 py-2 sm:py-3 relative overflow-hidden group"
            >
              Try Demo
            </motion.button>
          </motion.div>
{/* 
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className=" max-w-5xl mx-auto relative"
          > */}
            <div 
            className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl animate-pulse-slow -z-10" />
            <div className="relative rounded-3xl overflow-hidden">
              <DemoVideo />
            </div>
          {/* </motion.div> */}
        </div>
      </div>
    </section>
  );
}
