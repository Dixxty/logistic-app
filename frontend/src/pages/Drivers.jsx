import { useState } from 'react';
import { User, Truck, Phone, Mail, MapPin, Star, Plus, Search, CheckCircle, Clock } from 'lucide-react';
import AddDriverModal from '../components/AddDriverModal';

function Drivers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [drivers, setDrivers] = useState([
    { id: 1, nome: 'Carlos Santos', email: 'carlos.santos@email.com', telefone: '(11) 98765-4321', cnh: 'D', veiculo: 'Scania R450', placa: 'ABC-1234', status: 'disponivel', cidade: 'São Paulo - SP', entregas: 156, avaliacao: 4.8 },
    { id: 2, nome: 'Pedro Alves', email: 'pedro.alves@email.com', telefone: '(21) 97654-3210', cnh: 'E', veiculo: 'Volvo FH 540', placa: 'DEF-5678', status: 'em-rota', cidade: 'Rio de Janeiro - RJ', entregas: 203, avaliacao: 4.9 },
    { id: 3, nome: 'Ana Costa', email: 'ana.costa@email.com', telefone: '(31) 96543-2109', cnh: 'D', veiculo: 'Mercedes Actros', placa: 'GHI-9012', status: 'disponivel', cidade: 'Belo Horizonte - MG', entregas: 127, avaliacao: 4.7 },
    { id: 4, nome: 'Lucas Lima', email: 'lucas.lima@email.com', telefone: '(41) 95432-1098', cnh: 'E', veiculo: 'Iveco Stralis', placa: 'JKL-3456', status: 'em-rota', cidade: 'Curitiba - PR', entregas: 189, avaliacao: 4.6 },
    { id: 5, nome: 'Marcos Silva', email: 'marcos.silva@email.com', telefone: '(85) 94321-0987', cnh: 'D', veiculo: 'Scania R450', placa: 'MNO-7890', status: 'inativo', cidade: 'Fortaleza - CE', entregas: 98, avaliacao: 4.5 },
    { id: 6, nome: 'João Pedro', email: 'joao.pedro@email.com', telefone: '(92) 93210-9876', cnh: 'E', veiculo: 'Volvo FH 540', placa: 'PQR-2468', status: 'disponivel', cidade: 'Manaus - AM', entregas: 145, avaliacao: 4.8 },
  ]);

  const handleAddDriver = (newDriver) => {
    setDrivers([...drivers, newDriver]);
  };

  const statusConfig = {
    disponivel: { label: 'Disponível', color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200', icon: CheckCircle },
    'em-rota': { label: 'Em Rota', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200', icon: Truck },
    inativo: { label: 'Inativo', color: 'bg-gray-100 dark:bg-gray-700 dark:text-gray-300', icon: Clock },
  };

  const filteredDrivers = drivers.filter(driver => {
    const matchesSearch =
      driver.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.veiculo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.placa.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || driver.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const counts = {
    all: drivers.length,
    disponivel: drivers.filter(d => d.status === 'disponivel').length,
    'em-rota': drivers.filter(d => d.status === 'em-rota').length,
    inativo: drivers.filter(d => d.status === 'inativo').length,
  };

  const getInitials = (nome) => {
    const parts = nome.split(' ');
    return parts[0][0] + (parts[1] ? parts[1][0] : '');
  };

  const getAvatarColor = (id) => {
    const colors = [
      'bg-gradient-to-br from-blue-500 to-blue-700',
      'bg-gradient-to-br from-purple-500 to-purple-700',
      'bg-gradient-to-br from-pink-500 to-pink-700',
      'bg-gradient-to-br from-green-500 to-green-700',
      'bg-gradient-to-br from-yellow-500 to-yellow-700',
      'bg-gradient-to-br from-red-500 to-red-700',
    ];
    return colors[id % colors.length];
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Motoristas</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Gerencie todos os motoristas cadastrados</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Plus size={20} /> Novo Motorista
          </button>
        </div>

        {/* Estatísticas Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{counts.all}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <User className="text-blue-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Disponíveis</p>
                <p className="text-2xl font-bold text-green-600">{counts.disponivel}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="text-green-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Em Rota</p>
                <p className="text-2xl font-bold text-blue-600">{counts['em-rota']}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Truck className="text-blue-600" size={24} />
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Inativos</p>
                <p className="text-2xl font-bold text-gray-600 dark:text-gray-400">{counts.inativo}</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
                <Clock className="text-gray-600 dark:text-gray-400" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Filtros de Status */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              filterStatus === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Todos ({counts.all})
          </button>
          <button
            onClick={() => setFilterStatus('disponivel')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              filterStatus === 'disponivel'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Disponíveis ({counts.disponivel})
          </button>
          <button
            onClick={() => setFilterStatus('em-rota')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              filterStatus === 'em-rota'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Em Rota ({counts['em-rota']})
          </button>
          <button
            onClick={() => setFilterStatus('inativo')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              filterStatus === 'inativo'
                ? 'bg-gray-50 dark:bg-gray-900 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Inativos ({counts.inativo})
          </button>
        </div>

        {/* Busca */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Buscar por nome, veículo ou placa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
      </div>

      {/* Lista de Motoristas */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredDrivers.map((driver) => {
          const StatusIcon = statusConfig[driver.status].icon;
          return (
            <div
              key={driver.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${getAvatarColor(driver.id)}`}>
                  {getInitials(driver.nome)}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white">{driver.nome}</h3>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold mt-1 ${statusConfig[driver.status].color}`}>
                    <StatusIcon size={12} /> {statusConfig[driver.status].label}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Mail size={16} className="text-gray-400" /> <span className="text-sm">{driver.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Phone size={16} className="text-gray-400" /> <span className="text-sm">{driver.telefone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <MapPin size={16} className="text-gray-400" /> <span className="text-sm">{driver.cidade}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Truck size={16} className="text-gray-400" /> <span className="text-sm">{driver.veiculo} - {driver.placa}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-xs text-gray-500">CNH</p>
                  <p className="font-bold text-gray-800 dark:text-white">{driver.cnh}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Entregas</p>
                  <p className="font-bold text-gray-800 dark:text-white">{driver.entregas}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Avaliação</p>
                  <div className="flex items-center justify-center gap-1">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <p className="font-bold text-gray-800 dark:text-white">{driver.avaliacao}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                <button className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors">Ver Perfil</button>
                <button className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Histórico</button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredDrivers.length === 0 && (
        <div className="text-center py-16">
          <User size={64} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">Nenhum motorista encontrado</h3>
          <p className="text-gray-500">Tente ajustar os filtros ou buscar por outro termo</p>
        </div>
      )}

      <AddDriverModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddDriver={handleAddDriver} />
    </div>
  );
}

export default Drivers;
