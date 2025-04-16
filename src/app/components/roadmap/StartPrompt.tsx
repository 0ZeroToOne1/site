'use client';
import { motion } from 'framer-motion';

export default function StartPrompt({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Let’s map your MVP in 60 seconds</h2>
      <p className="text-gray-300 mb-8">Answer a few quick questions and we’ll build your roadmap, live.</p>
      <button
        onClick={onNext}
        className="bg-white/80 backdrop-blur-md text-[var(--accent)] px-6 py-3 rounded-lg text-lg font-semibold hover:drop-shadow-lg hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
      >
        Start Your Roadmap →
      </button>
    </motion.div>
  );
}
