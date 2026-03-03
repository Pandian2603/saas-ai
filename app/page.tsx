import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-6 p-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm flex items-center gap-2">
        <Zap size={16} /> AI Agent Powered & Secured
      </div>
      <h1 className="text-6xl font-bold mb-6 tracking-tighter">
        Edit Image Text <br /><span className="text-blue-500">With AI Magic.</span>
      </h1>
      <p className="text-slate-400 max-w-lg mb-10">
        The ultimate Micro SaaS for automated image text manipulation with high-level hacker protection.
      </p>
      <Link href="/dashboard" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition">
        Get Started for Free
      </Link>
    </div>
  );
}
