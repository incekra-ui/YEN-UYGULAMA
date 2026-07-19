import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Register from './screens/Register';
import ForgotPassword from './screens/ForgotPassword';
import Onboarding from './screens/Onboarding';
import Dashboard from './screens/Dashboard';

export type Screen = 'splash' | 'login' | 'register' | 'forgot-password' | 'onboarding' | 'dashboard';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('login');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-green-500/30 overflow-hidden relative">
      <AnimatePresence mode="wait">
        {currentScreen === 'splash' && <Splash key="splash" />}
        {currentScreen === 'login' && <Login key="login" onNavigate={setCurrentScreen} onLogin={(u) => { setUser(u); setCurrentScreen('onboarding'); }} />}
        {currentScreen === 'register' && <Register key="register" onNavigate={setCurrentScreen} />}
        {currentScreen === 'forgot-password' && <ForgotPassword key="forgot-password" onNavigate={setCurrentScreen} />}
        {currentScreen === 'onboarding' && <Onboarding key="onboarding" onComplete={() => setCurrentScreen('dashboard')} user={user} />}
        {currentScreen === 'dashboard' && <Dashboard key="dashboard" onLogout={() => { setUser(null); setCurrentScreen('login'); }} />}
      </AnimatePresence>
    </div>
  );
}
