'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Image from 'next/image';
import Signature from './Signature';

export default function ShareYourIdeaModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks, ${name}! We'll be in touch soon.`);
    setOpen(false);
  };

  return (
    <>
      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group inline-flex flex-col md:flex-row items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:shadow-lg"
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

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Wrapper */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              {/* 🌈 Aurora Glow */}
              <motion.div
                className="absolute -inset-0 z-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400/30 via-pink-300/20 to-transparent blur-3xl" />
              </motion.div>

              {/* Modal Content */}
              <div className="relative w-full max-w-[90vw] sm:max-w-md rounded-lg border border-white/10 bg-white p-4 sm:p-6 shadow-2xl z-10 overflow-hidden">
                {/* ❌ Close */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 transition-colors hover:text-gray-600"
                  aria-label="Close modal"
                >
                  ✕
                </button>

 

                {/* Heading */}
                <motion.h2
                  className="mb-4 text-xl font-semibold text-gray-800"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Let’s Talk About Your Idea
                </motion.h2>

                {/* Avatar + Intro */}
                <motion.div
                  className="mb-6 flex flex-col sm:flex-row items-center gap-3 rounded-md bg-white p-2 sm:p-3 text-center sm:text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full shrink-0">
                    <Image
                      src="/founder-avatar.jpg"
                      alt="Founder"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-gray-700">
                    Hi there, I’m Frank! I’m genuinely thrilled to learn about your vision and can’t wait to help you transform your bold idea into a thriving, launch-ready MVP.
                  </p>
           
                </motion.div>

                {/* 💬 Form */}
                <form onSubmit={handleSubmit}>
                  <motion.div
                    className="space-y-5"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.1 },
                      },
                    }}
                  >
                    {/* Fields */}
                    {[
                      {
                        value: name,
                        onChange: setName,
                        placeholder: 'Your Name',
                        label: 'Name',
                        type: 'text',
                      },
                      {
                        value: email,
                        onChange: setEmail,
                        placeholder: 'Your Email',
                        label: 'Email',
                        type: 'email',
                      },
                    ].map((field, i) => (
                      <motion.div
                        key={i}
                        className="relative"
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                      >
                        <input
                          type={field.type}
                          required
                          value={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                          placeholder={field.placeholder}
                          className="peer w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-[#030b1a] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                        />
                        <label className="pointer-events-none absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#030b1a]">
                          {field.label}
                        </label>
                      </motion.div>
                    ))}

                    {/* Message Field */}
                    <motion.div
                      className="relative"
                      variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                    >
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
                    </motion.div>
                  </motion.div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    className="mt-6 w-full rounded-md bg-[var(--accent)] px-5 py-2 text-sm font-medium text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    Send
                    {message.length > 3 && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                      >
                        <Send className="h-4 w-4" />
                      </motion.div>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
