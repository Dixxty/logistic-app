import { MapPin, Plus } from 'lucide-react';

const Routes = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Rotas</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Gerencie e otimize as rotas de entrega</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl">
            <Plus size={20} /> Nova Rota
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
        <div className="text-center py-16">
          <MapPin size={64} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-2">Módulo de Rotas</h3>
          <p className="text-gray-500 dark:text-gray-500">Esta funcionalidade está em desenvolvimento</p>
        </div>
      </div>
    </div>
  );
};

export default Routes;