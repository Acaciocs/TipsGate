const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;

export async function enviarMensagemTelegram(chatId, mensagem) {
  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: mensagem, parse_mode: 'HTML' }),
  });

  if (!response.ok) {
    throw new Error('Erro ao enviar mensagem para o Telegram');
  }

  return response.json();
}
