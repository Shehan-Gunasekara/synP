import { Brain, Mic, Wand2, Zap } from "lucide-react";
import { FeatureCard } from "../components/FeatureCard";
import { motion } from "framer-motion";
import "../../../styles/animations.css";

export function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/5 to-red-500/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-br from-black to-black/60 bg-clip-text text-transparent">
              AI-Powered Actor Generation
            </h2>
            <p className="text-base lg:text-xl text-black/60 max-w-2xl mx-auto">
              Create custom digital humans with advanced AI technology
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Brain}
            title="Neural Actor Synthesis"
            description="Leverage cutting-edge AI to create photorealistic actors with natural expressions, realistic movements, and adaptive emotions."
            delay={0.2}
          />
          <FeatureCard
            icon={Wand2}
            title="Prompt-Based Actor Creation"
            description="Effortlessly bring your vision to life. Use natural language prompts to design unique AI actors tailored to your imagination."
            delay={0.4}
          />
          <FeatureCard
            icon={Mic}
            title="Audio Lip-Sync Integration"
            description="Upload or record audio to sync your actor's lip movements flawlessly, adding a personalized touch to every creation."
            delay={0.6}
          />
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="inline-block px-8 py-6 rounded-2xl bg-gradient-to-br from-white to-black/[0.02] border border-black/5 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-sm sm:text-base md:text-lg text-black/80 max-w-2xl">
              Experience the future of content creation with our cutting-edge AI
              technology. Create professional-quality videos with custom AI
              actors in minutes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
