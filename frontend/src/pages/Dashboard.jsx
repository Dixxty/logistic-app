import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Package, Truck, CheckCircle, Clock, TrendingUp } from 'lucide-react';

function Dashboard() {
  // Dados simulados para os gráficos
  const deliveryData = [
    { name: 'Seg', entregas: 12 },
    { name: 'Ter', entregas: 19 },
    { name: 'Qua', entregas: 15 },
    { name: 'Qui', entregas: 25 },
    { name: 'Sex', entregas: 22 },
    { name: 'Sáb', entregas: 18 },
    { name: 'Dom', entregas: 8 },
  ];

  const statusData = [
    { name: 'Concluídas', valor: 156 },
    { name: 'Em Trânsito', valor: 43 },
    { name: 'Pendentes', valor: 28 },
    { name: 'Atrasadas', valor: 12 },
  ];

  // Cards de estatísticas
  const stats = [
    { title: 'Total de Entregas', value: '239', icon: Package, color: 'bg-blue-500', increase: '+12%' },
    { title: 'Em Trânsito', value: '43', icon: Truck, color: 'bg-yellow-500', increase: '+5%' },
    { title: 'Concluídas Hoje', value: '18', icon: CheckCircle, color: 'bg-green-500', increase: '+23%' },
    { title: 'Pendentes', value: '28', icon: Clock, color: 'bg-red-500', increase: '-8%' },
  ];

  // Estado das entregas
  const [deliveries] = useState([
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
    {
      id: '#1236',
      cliente: 'José Santos',
      origem: 'Belo Horizonte - MG',
      destino: 'Curitiba - PR',
      motorista: 'Ana Costa',
      veiculo: 'Volvo FH 540',
      placa: 'GHI-9012',
      status: 'pendente',
      data: '06/10/2025',
      valor: 2800,
      peso: 18000,
      unidadePeso: 'kg',
    },
    {
      id: '#1237',
      cliente: 'Ana Paula',
      origem: 'Curitiba - PR',
      destino: 'Porto Alegre - RS',
      motorista: 'Lucas Lima',
      veiculo: 'Scania R450',
      placa: 'JKL-3456',
      status: 'em-transito',
      data: '07/10/2025',
      valor: 2000,
      peso: 12000,
      unidadePeso: 'kg',
    },
  ]);

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Bem-vindo de volta! Aqui está o resumo de hoje.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600 dark:text-gray-400">Admin</p>
              <p className="text-xs text-gray-500">admin@logistic.com</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              AD
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp size={16} className={stat.increase.startsWith('+') ? 'text-green-500' : 'text-red-500'} />
                    <span className={`text-sm ml-1 ${stat.increase.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.increase}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">vs. semana passada</span>
                  </div>
                </div>
                <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center`}>
                  <stat.icon size={32} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Line Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Entregas da Semana</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={deliveryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="entregas" stroke="#3B82F6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Status das Entregas</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={statusData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '10px'
                  }}
                />
                <Bar dataKey="valor" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Deliveries */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mt-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Entregas Recentes</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-semibold">ID</th>
                  <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-semibold">Cliente</th>
                  <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-semibold">Destino</th>
                  <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-semibold">Motorista</th>
                  <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {deliveries.map((delivery) => (
                  <tr key={delivery.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-4 px-4 font-medium text-gray-800 dark:text-white">{delivery.id}</td>
                    <td className="py-4 px-4 text-gray-800 dark:text-white">{delivery.cliente}</td>
                    <td className="py-4 px-4 text-gray-800 dark:text-white">{delivery.destino}</td>
                    <td className="py-4 px-4 text-gray-800 dark:text-white">{delivery.motorista}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        delivery.status === 'concluida' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200' :
                        delivery.status === 'em-transito' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {delivery.status === 'concluida' ? 'Concluída' : delivery.status === 'em-transito' ? 'Em Trânsito' : 'Pendente'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
