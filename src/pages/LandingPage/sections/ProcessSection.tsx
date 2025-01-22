import { Sparkles, Wand2, Download, Mic } from "lucide-react";
import { ProcessStep } from "../components/ProcessStep";
import { motion } from "framer-motion";

export function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-black/5 opacity-50" />
      
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-yellow-500/5 to-red-500/5 rounded-full blur-3xl" />
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
              Create Synthetic AI Actors in Minutes
            </h2>
            <p className="text-base lg:text-xl text-black/60">
              Transform your ideas into lifelike digital humans with our simple process
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <ProcessStep
  number={1}
  icon={Sparkles}
  title="Design Your Actor"
  description="Use a prompt to create your unique AI actor, defining appearance, personality, and style."
  delay={0.2}
/>
<ProcessStep
  number={2}
  icon={Mic}
  title="Add Audio"
  description="Upload or record audio to sync your actor's lips perfectly with speech."
  delay={0.4}
/>
<ProcessStep
  number={3}
  icon={Wand2}
  title="Generate & Sync"
  description="Our AI brings your actor to life, seamlessly syncing lip movements to your audio."
  delay={0.6}
/>
<ProcessStep
  number={4}
  icon={Download}
  title="Export & Share"
  description="Download your customized AI actor video, ready to use."
  delay={0.8}
/>

        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="inline-block px-8 py-6 rounded-2xl bg-gradient-to-br from-white to-black/[0.02] border border-black/5 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-sm sm:text-base md:text-lg text-black/80 max-w-2xl">
              From concept to creation in minutes. Our advanced AI technology handles the complex work of generating realistic human movements, expressions, and speech.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
