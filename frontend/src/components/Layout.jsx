import { useState } from 'react';
import { Home, Package, Users, MapPin, Settings, LogOut, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Layout = ({ currentPage, setCurrentPage, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'deliveries', name: 'Entregas', icon: Package },
    { id: 'drivers', name: 'Motoristas', icon: Users },
    { id: 'routes', name: 'Rotas', icon: MapPin },
    { id: 'settings', name: 'Configurações', icon: Settings },
  ];

  const handleLogout = () => {
    // Aqui você pode adicionar sua lógica de logout real, ex: limpar token, redirecionar, etc.
    console.log("Usuário saiu");
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gradient-to-b from-blue-600 to-blue-800 text-white transition-all duration-500 ease-in-out overflow-hidden flex flex-col`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h1
              className={`text-xl font-bold transition-opacity duration-500 ${
                sidebarOpen ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {sidebarOpen && 'LogisticApp'}
            </h1>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-2 hover:bg-blue-700 rounded-lg transition-all ${
                !sidebarOpen ? 'mx-auto' : ''
              }`}
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Navegação */}
        <nav className="mt-8 flex-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center px-6 py-4 hover:bg-blue-700 transition-all duration-300 ${
                currentPage === item.id ? 'bg-blue-700 border-l-4 border-white' : ''
              }`}
            >
              <item.icon size={24} className="flex-shrink-0" />
              <span
                className={`ml-4 font-medium whitespace-nowrap transition-all duration-300 ${
                  sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
              >
                {item.name}
              </span>
            </button>
          ))}
        </nav>

        {/* Logout fixo */}
        <div className="p-6 mt-auto">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 hover:bg-blue-700 rounded-lg transition-all duration-300"
          >
            <LogOut className="flex-shrink-0 text-white" size={24} />
            <span
              className={`ml-4 font-medium whitespace-nowrap transition-all duration-300 ${
                sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
            >
              Sair
            </span>
          </button>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};

export default Layout;
