import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Home, List, MessageSquare, Phone } from 'lucide-react'; // Iconos de ejemplo

export function AppSidebar() {
  const navItems = [
    { title: 'Experiencias', href: '#experiencias', icon: Home },
    { title: 'Categorías', href: '#categorias', icon: List },
    { title: 'Testimonios', href: '#testimonios', icon: MessageSquare },
    { title: 'Contacto', href: '#contacto', icon: Phone },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-2 p-4">
          {' '}
          {/* Ajustado el padding */}
          <div className="h-8 w-8 rounded-full bg-gray-800"></div>
          <span className="text-xl font-bold text-gray-900">Explora CDMX</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
