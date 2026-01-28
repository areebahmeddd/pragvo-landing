import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center"
      >
        <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter mb-6">
          Terms of Service
        </h1>
        <p className="text-2xl md:text-3xl text-black/60 font-light mb-12">Coming Soon</p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold text-sm hover:-translate-y-1 transition-all"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
