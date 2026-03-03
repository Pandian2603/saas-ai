"use client";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { Upload, Wand2 } from "lucide-react";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="p-6 border-b border-white/10 flex justify-between items-center">
        <h2 className="text-xl font-bold tracking-tighter text-blue-500">MORPH.AI</h2>
        <UserButton afterSignOutUrl="/" />
      </nav>
      <main className="max-w-4xl mx-auto p-10">
        <div className="bg-[#111] border border-white/10 rounded-3xl p-12 text-center shadow-2xl shadow-blue-500/10">
          <div className="w-full aspect-video border-2 border-dashed border-white/20 rounded-2xl mb-8 flex flex-col items-center justify-center">
            <Upload className="text-slate-500 mb-2" />
            <p className="text-slate-400 text-sm">Upload image to start AI magic</p>
          </div>
          <button className="w-full bg-blue-600 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-all">
            <Wand2 size={20} /> Start AI Processing
          </button>
        </div>
      </main>
    </div>
  );
}
