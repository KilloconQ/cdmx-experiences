import './App.css';
import AppRouter from './AppRouter';
import { MobileSidebarWrapper } from './components/layout/mobile-sidebar-wrapper';
import { SidebarProvider } from './components/ui/sidebar';

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
