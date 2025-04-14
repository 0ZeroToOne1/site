'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Image from 'next/image';

export default function ShareYourIdeaModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate your actual submission logic (Email, API, etc.)
    alert(`Thanks, ${name}! We'll be in touch soon.`);
    setOpen(false);
  };

  return (
    <>
      {/* Animated CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:shadow-lg"
        >
          <span>Share Your Idea</span>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
          >
            <Send className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
          </motion.div>
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Wrapper */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full max-w-md rounded-lg border border-white/10 bg-white p-6 shadow-2xl">
                {/* Close Button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 transition-colors hover:text-gray-600"
                  aria-label="Close modal"
                >
                  ✕
                </button>

                <h2 className="mb-4 text-xl font-semibold text-gray-800">
                  Let’s Talk About Your Idea
                </h2>

                {/* Founder Message + Avatar */}
                <div className="mb-6 flex items-center gap-3 rounded-md bg-white p-3">
                  <div className="relative h-24 w-64 overflow-hidden rounded-full">
                    <Image
                      src="/founder-avatar.jpg" // Update with your real image
                      alt="Founder"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-gray-700">
                    Hi there, I’m Frank! I’m genuinely thrilled to learn about
                    your vision and can’t wait to help you transform your bold
                    idea into a thriving, launch-ready MVP.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div className="relative mb-5">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="peer w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-[#030b1a] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                    <label className="pointer-events-none absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#030b1a]">
                      Name
                    </label>
                  </div>

                  {/* Email Field */}
                  <div className="relative mb-5">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className="peer w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-[#030b1a] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                    <label className="pointer-events-none absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#030b1a]">
                      Email
                    </label>
                  </div>

                  {/* Message Field */}
                  <div className="relative mb-6">
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your Message"
                      className="peer w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-[#030b1a] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    />
                    <label className="pointer-events-none absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#030b1a]">
                      Message
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-md bg-[var(--accent)] px-5 py-2 text-sm font-medium text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
                  >
                    Send
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
