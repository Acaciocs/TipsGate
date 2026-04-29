import React from 'react';

function Card({ titulo, valor }) {
  return (
    <div style={{ background: '#171717', border: '1px solid #222', borderRadius: 20, padding: 24 }}>
      <p style={{ color: '#aaa' }}>{titulo}</p>
      <h3 style={{ fontSize: 32, marginTop: 12 }}>{valor}</h3>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p style={{ color: '#aaa' }}>Visão geral da sua comunidade.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 24 }}>
        <Card titulo="Assinantes ativos" valor="284" />
        <Card titulo="Receita mensal" valor="R$ 13.860" />
        <Card titulo="Renovações" valor="91%" />
        <Card titulo="Conteúdos enviados" valor="146" />
      </div>
    </div>
  );
}
