'use client';

import React, { useState } from 'react';

export default function DevDash() {
 
  const [gitUser, setGitUser] = useState('Adhieeeh');
  const [activeTask, setActiveTask] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, text: "Configure Tailwind layouts", complete: true },
    { id: 2, text: "Test Next.js backend API hooks", complete: false },
    { id: 3, text: "Push DevDash repository online", complete: false }
  ]);

  const addTask = (e) => {
    e.preventDefault();
    if (!activeTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: activeTask, complete: false }]);
    setActiveTask('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, complete: !t.complete } : t));
  };

  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-16 max-w-6xl mx-auto font-sans selection:bg-cyan-500 selection:text-slate-900">
      
      {/*  */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            DevDash Command Center
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            A high-performance productivity cockpit built with Next.js & Tailwind utility classes.
          </p>
        </div>
        <div>
          <a href="/api/stats" target="_blank" className="text-xs font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 px-4 py-2 rounded-full hover:bg-cyan-900/40 transition">
             Live Server API JSON ↗
          </a>
        </div>
      </header>

      {/*  */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/*  */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></div>
              <h3 className="text-slate-300 font-bold uppercase tracking-wider text-xs">System Profile Engine</h3>
            </div>
            <h4 className="text-xl font-bold text-slate-100 mb-2">Developer: ADHI</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Active Focus: Crafting fully integrated full-stack utilities with highly adaptive Tailwind interfaces.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap mt-6">
            <span className="text-xs bg-indigo-950 text-indigo-300 border border-indigo-800 font-semibold px-2.5 py-1 rounded-md">Next.js 14</span>
            <span className="text-xs bg-cyan-950 text-cyan-300 border border-cyan-800 font-semibold px-2.5 py-1 rounded-md">Tailwind</span>
            <span className="text-xs bg-slate-800 text-slate-300 border border-slate-700 font-semibold px-2.5 py-1 rounded-md">Full-Stack</span>
          </div>
        </div>

        {/*  */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md shadow-xl lg:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-300 font-bold uppercase tracking-wider text-xs">Sprint Task Logs</h3>
            <span className="text-xs font-bold bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
              {tasks.filter(t => !t.complete).length} Remaining
            </span>
          </div>

          {/* Task Feed */}
          <div className="space-y-2 mb-4 max-h-40 overflow-y-auto pr-1">
            {tasks.map(task => (
              <div 
                key={task.id} 
                onClick={() => toggleTask(task.id)}
                className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition select-none ${task.complete ? 'bg-slate-950/40 border-slate-900 text-slate-500 line-through' : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-200'}`}
              >
                <input type="checkbox" checked={task.complete} readOnly className="accent-cyan-400 cursor-pointer" />
                <span className="text-sm font-medium">{task.text}</span>
              </div>
            ))}
          </div>

          {/*  */}
          <form onSubmit={addTask} className="flex gap-2">
            <input 
              type="text" 
              placeholder="Add sprint check..." 
              value={activeTask}
              onChange={(e) => setActiveTask(e.target.value)}
              className="flex-1 bg-slate-950 border border-slate-800 text-sm text-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-cyan-500 transition placeholder:text-slate-600"
            />
            <button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-bold px-4 py-2 rounded-xl transition">
              +
            </button>
          </form>
        </div>

        {/* */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md shadow-xl md:col-span-2 lg:col-span-1 flex flex-col justify-between">
          <div>
            <h3 className="text-slate-300 font-bold uppercase tracking-wider text-xs mb-4">Remote Sync Controller</h3>
            <label className="block text-xs text-slate-500 font-semibold mb-2">GitHub Username Resolver</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={gitUser} 
                onChange={(e) => setGitUser(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-800 text-sm text-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
            <div className="mt-4 p-3 bg-slate-950/70 border border-slate-800 rounded-xl text-xs text-slate-400">
               Mapping endpoint targets to: <span className="text-indigo-400 font-mono">github.com/{gitUser}</span>
            </div>
          </div>
          <button onClick={() => alert(`Synchronizing logs for ${gitUser}...`)} className="mt-6 w-full py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-slate-950 font-extrabold rounded-xl transition shadow-lg">
            Trigger Network Synchronization
          </button>
        </div>

      </main>
    </div>
  );
}