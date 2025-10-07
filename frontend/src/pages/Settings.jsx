import { Moon, Sun, Bell, Lock, Globe, User, Mail, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Settings() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Configurações</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Personalize sua experiência no sistema</p>
      </div>

      <div className="max-w-4xl">
        {/* Aparência */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
              {darkMode ? <Moon className="text-blue-600 dark:text-blue-400" size={24} /> : <Sun className="text-blue-600" size={24} />}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Aparência</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Personalize o tema do sistema</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">Modo Escuro</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {darkMode ? 'Tema escuro ativado' : 'Tema claro ativado'}
              </p>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                darkMode ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  darkMode ? 'transform translate-x-8' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Notificações */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
              <Bell className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Notificações</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Gerencie suas notificações</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Notificações de Email</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Receba atualizações por email</p>
              </div>
              <button className="relative w-16 h-8 rounded-full bg-blue-600">
                <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full transform translate-x-8" />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Alertas de Entrega</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Avisos sobre status de entregas</p>
              </div>
              <button className="relative w-16 h-8 rounded-full bg-blue-600">
                <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full transform translate-x-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Conta */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
              <User className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Conta</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Gerencie suas informações pessoais</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Mail size={20} className="text-gray-400" />
                <h3 className="font-semibold text-gray-800 dark:text-white">Email</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 ml-8">admin@logistic.com</p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Lock size={20} className="text-gray-400" />
                <h3 className="font-semibold text-gray-800 dark:text-white">Senha</h3>
              </div>
              <button className="text-sm text-blue-600 dark:text-blue-400 ml-8 hover:underline">
                Alterar senha
              </button>
            </div>
          </div>
        </div>

        {/* Segurança */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 dark:bg-red-900 p-3 rounded-lg">
              <Shield className="text-red-600 dark:text-red-400" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Segurança</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Proteja sua conta</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Autenticação em Dois Fatores</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Adicione uma camada extra de segurança</p>
              </div>
              <button className="relative w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-600">
                <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full" />
              </button>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Sessões Ativas</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">1 sessão ativa</p>
              <button className="text-sm text-red-600 dark:text-red-400 hover:underline">
                Encerrar todas as sessões
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;