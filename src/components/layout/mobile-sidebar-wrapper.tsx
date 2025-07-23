import { useIsMobile } from '@/hooks/use-mobile';
import { AppSidebar } from './app-sidebar';

export function MobileSidebarWrapper() {
  const isMobile = useIsMobile();

  // Si no es móvil, no renderizamos el sidebar.
  if (!isMobile) {
    return null;
  }

  // Si es móvil, renderizamos el AppSidebar.
  return <AppSidebar />;
}
