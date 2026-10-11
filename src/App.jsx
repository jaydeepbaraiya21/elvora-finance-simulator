import { useEffect } from 'react';
import SkipLink from './components/SkipLink.jsx'
import Landing from './components/Landing.jsx'
import AuthScreen from './components/AuthScreen.jsx'
import Workspace from './components/Workspace.jsx'
import SimulatorScrim from './components/SimulatorScrim.jsx'
import SimulatorDrawer from './components/SimulatorDrawer.jsx'
import BackToTop from './components/BackToTop.jsx'
import ModalRoot from './components/ModalRoot.jsx'
import Toast from './components/Toast.jsx'
import './styles.css';

/**
 * ELVORA's original page hierarchy rendered as React JSX.
 * The existing simulation engine is loaded after mount to preserve all original
 * interactive behavior while the markup is migrated into React components.
 */
export default function App() {
  useEffect(() => {
    if (window.__ELVORA_ENGINE_LOADED__) return;
    const script = document.createElement('script');
    script.src = '/legacy-engine.js';
    script.async = false;
    script.onload = () => { window.__ELVORA_ENGINE_LOADED__ = true; };
    script.onerror = () => { console.error('ELVORA simulation engine failed to load.'); };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <SkipLink />
      <Landing />
      <AuthScreen />
      <Workspace />
      <SimulatorScrim />
      <SimulatorDrawer />
      <BackToTop />
      <ModalRoot />
      <Toast />
    </>
  );
}
