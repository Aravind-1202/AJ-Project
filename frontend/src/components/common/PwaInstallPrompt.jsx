import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';

export const PwaInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already running in standalone/installed mode
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
      setIsInstalled(true);
      return;
    }

    const handleBeforeInstallPrompt = (e) => {
      // Prevent default mini-infobar or auto prompt
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
      console.log('[NexaTech PWA] App was successfully installed!');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('[NexaTech PWA] User accepted the install prompt');
    }
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  if (isInstalled || !showPrompt) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="flex items-center gap-3 bg-white/95 border border-slate-200 backdrop-blur-xl shadow-2xl rounded-2xl p-3 sm:p-4 text-slate-800">
        <div className="p-2.5 rounded-xl bg-violet-50 text-violet-600 border border-violet-100 flex items-center justify-center">
          <Smartphone className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-slate-900">Install NexaTech App</h4>
          <p className="text-[11px] text-slate-500">Fast access &amp; works offline</p>
        </div>
        <div className="flex items-center gap-2 ml-2">
          <button
            onClick={handleInstallClick}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-xs transition-all shadow-md shadow-violet-600/20 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Install</span>
          </button>
          <button
            onClick={() => setShowPrompt(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            title="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
