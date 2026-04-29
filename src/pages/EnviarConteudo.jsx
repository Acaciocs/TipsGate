import React, { useState } from 'react';
import { criarConteudo } from '../services/conteudosService';
import { enviarMensagemTelegram } from '../services/telegramService';

const inputStyle = { width: '100%', padding: 14, borderRadius: 12, border: '1px solid #333', background: '#171717', color: '#fff', marginBottom: 12 };
const buttonStyle = { background: '#39FF14', color: '#000', padding: '14px 22px', borderRadius: 12, border: 'none', fontWeight: 700, cursor: 'pointer' };

export default function EnviarConteudo() {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');

  async function enviarAgora() {
    try {
      const comunidadeId = 'SUBSTITUIR_PELO_ID_DA_COMUNIDADE';
      const telegramChatId = 'SUBSTITUIR_PELO_CHAT_ID_DO_GRUPO';
      await criarConteudo({ comunidade_id: comunidadeId, titulo, conteudo, status: 'enviado', enviado_em: new Date().toISOString() });
      await enviarMensagemTelegram(telegramChatId, `<b>${titulo}</b>\n\n${conteudo}`);
      alert('Conteúdo enviado com sucesso!');
      setTitulo('');
      setConteudo('');
    } catch (error) {
      alert('Erro ao enviar conteúdo: ' + error.message);
    }
  }

  return (
    <div>
      <h2>Enviar Conteúdo</h2>
      <p style={{ color: '#aaa' }}>Envie mensagens para sua comunidade.</p>
      <div style={{ maxWidth: 700, marginTop: 24 }}>
        <input placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} style={inputStyle} />
        <textarea placeholder="Digite o conteúdo" value={conteudo} onChange={(e) => setConteudo(e.target.value)} style={{ ...inputStyle, height: 220 }} />
        <button onClick={enviarAgora} style={buttonStyle}>Enviar agora</button>
      </div>
    </div>
  );
}
