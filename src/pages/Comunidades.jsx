import React, { useState } from 'react';
import { criarComunidade } from '../services/comunidadesService';

const inputStyle = { width: '100%', padding: 14, borderRadius: 12, border: '1px solid #333', background: '#171717', color: '#fff', marginBottom: 12 };
const buttonStyle = { background: '#39FF14', color: '#000', padding: '14px 22px', borderRadius: 12, border: 'none', fontWeight: 700, cursor: 'pointer' };

export default function Comunidades() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  async function salvarComunidade() {
    try {
      await criarComunidade({ usuario_id: 'SUBSTITUIR_PELO_ID_DO_USUARIO', nome, descricao, plataforma: 'telegram' });
      alert('Comunidade criada com sucesso!');
      setNome('');
      setDescricao('');
    } catch (error) {
      alert('Erro ao criar comunidade: ' + error.message);
    }
  }

  return (
    <div>
      <h2>Comunidades</h2>
      <p style={{ color: '#aaa' }}>Cadastre sua comunidade premium.</p>
      <div style={{ maxWidth: 600, marginTop: 24 }}>
        <input placeholder="Nome da comunidade" value={nome} onChange={(e) => setNome(e.target.value)} style={inputStyle} />
        <textarea placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} style={{ ...inputStyle, height: 120 }} />
        <button onClick={salvarComunidade} style={buttonStyle}>Salvar comunidade</button>
      </div>
    </div>
  );
}
