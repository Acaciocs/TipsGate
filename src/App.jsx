import React, { useState } from 'react';
import { LayoutDashboard, Users, CreditCard, Send, Bot, Settings } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Comunidades from './pages/Comunidades';
import Assinantes from './pages/Assinantes';
import Pagamentos from './pages/Pagamentos';
import EnviarConteudo from './pages/EnviarConteudo';
import Automacoes from './pages/Automacoes';

const menu = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'comunidades', label: 'Comunidades', icon: Settings },
  { id: 'assinantes', label: 'Assinantes', icon: Users },
  { id: 'pagamentos', label: 'Pagamentos', icon: CreditCard },
  { id: 'conteudo', label: 'Enviar Conteúdo', icon: Send },
  { id: 'automacoes', label: 'GateBot', icon: Bot },
];

export default function App() {
  const [pagina, setPagina] = useState('dashboard');

  function renderizarPagina() {
    switch (pagina) {
      case 'comunidades':
        return <Comunidades />;
      case 'assinantes':
        return <Assinantes />;
      case 'pagamentos':
        return <Pagamentos />;
      case 'conteudo':
        return <EnviarConteudo />;
      case 'automacoes':
        return <Automacoes />;
      default:
        return <Dashboard />;
    }
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0F0F0F', color: '#fff' }}>
      <aside style={{ width: 260, background: '#0B0B0B', padding: 24, borderRight: '1px solid #222' }}>
        <h1 style={{ color: '#39FF14', marginBottom: 4 }}>TipsGate</h1>
        <p style={{ color: '#aaa', marginBottom: 32 }}>Automatize suas tips.</p>

        {menu.map((item) => {
          const Icon = item.icon;
          const ativo = pagina === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setPagina(item.id)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: 14, marginBottom: 8,
                borderRadius: 14, border: 'none', cursor: 'pointer', background: ativo ? '#39FF14' : 'transparent',
                color: ativo ? '#000' : '#ddd', fontWeight: ativo ? 700 : 400,
              }}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </aside>
      <main style={{ flex: 1, padding: 32 }}>{renderizarPagina()}</main>
    </div>
  );
}
