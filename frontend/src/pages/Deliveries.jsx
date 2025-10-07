import { useState } from 'react';
import { Package, Truck, CheckCircle, Clock, Plus, Search, MapPin, User } from 'lucide-react';
import AddDeliveryModal from '../components/AddDeliveryModal';

function Deliveries() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showModal, setShowModal] = useState(false);

  const [deliveries, setDeliveries] = useState([
    {
      id: '#1234',
      cliente: 'João Silva',
      origem: 'São Paulo - SP',
      destino: 'Rio de Janeiro - RJ',
      motorista: 'Carlos Santos',
      veiculo: 'Scania R450',
      placa: 'ABC-1234',
      status: 'em-transito',
      data: '05/10/2025',
      valor: 2500,
      peso: 15000,
      unidadePeso: 'kg',
    },
    {
      id: '#1235',
      cliente: 'Maria Oliveira',
      origem: 'Belo Horizonte - MG',
      destino: 'Salvador - BA',
      motorista: 'Pedro Alves',
      veiculo: 'Volvo FH 540',
      placa: 'DEF-5678',
      status: 'concluida',
      data: '04/10/2025',
      valor: 3200,
      peso: 22000,
      unidadePeso: 'kg',
    },
  ]);

  const statusConfig = {
    pendente: { label: 'Pendente', color: 'bg-yellow-100 text-yellow-700', icon: Clock },
    'em-transito': { label: 'Em Trânsito', color: 'bg-blue-100 text-blue-700', icon: Truck },
    concluida: { label: 'Concluída', color: 'bg-green-100 text-green-700', icon: CheckCircle },
  };

  const filteredDeliveries = deliveries.filter(delivery => {
    const matchesSearch =
      delivery.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      delivery.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || delivery.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const counts = {
    all: deliveries.length,
    pendente: deliveries.filter(d => d.status === 'pendente').length,
    'em-transito': deliveries.filter(d => d.status === 'em-transito').length,
    concluida: deliveries.filter(d => d.status === 'concluida').length,
  };

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Entregas</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Gerencie todas as entregas do sistema</p>
          </div>
          {/* Botão permanece, mas sem funcionalidade */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Plus size={20} />
            Nova Entrega
          </button>
        </div>

        {/* Filtros */}
        <div className="flex gap-4 mb-6">
          {['all', 'pendente', 'em-transito', 'concluida'].map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                filterStatus === status
                  ? status === 'all'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : statusConfig[status]?.color.replace('bg-', 'bg-') + ' text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {status === 'all'
                ? `Todas (${counts.all})`
                : `${statusConfig[status].label} (${counts[status]})`}
            </button>
          ))}
        </div>

        {/* Busca */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Buscar por cliente ou ID..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
      </div>

      {/* Lista de entregas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredDeliveries.map(delivery => {
          const StatusIcon = statusConfig[delivery.status].icon;
          return (
            <div key={delivery.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Package className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">{delivery.id}</h3>
                    <p className="text-sm text-gray-500">{delivery.data}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${statusConfig[delivery.status].color}`}>
                  <StatusIcon size={14} />
                  {statusConfig[delivery.status].label}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <User size={16} className="text-gray-400" />
                  <span className="text-sm font-medium">{delivery.cliente}</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <MapPin size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">{delivery.origem}</p>
                    <p className="text-gray-500">→ {delivery.destino}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Truck size={16} className="text-gray-400" />
                  <span className="text-sm">{delivery.motorista}</span>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Valor</p>
                    <p className="font-bold text-gray-800 dark:text-white">R$ {delivery.valor.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Peso</p>
                    <p className="font-bold text-gray-800 dark:text-white">{delivery.peso} {delivery.unidadePeso}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                  Detalhes
                </button>
                <button className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-700 transition-colors">
                  Rastrear
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal de adicionar entrega */}
      <AddDeliveryModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAddDelivery={(newEntry) => {
          setDeliveries(prev => [newEntry, ...prev]);
        }}
      />
    </div>
  );
}

export default Deliveries;
