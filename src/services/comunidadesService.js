import { supabase } from './supabaseClient';

export async function listarComunidades(usuarioId) {
  const { data, error } = await supabase.from('comunidades').select('*').eq('usuario_id', usuarioId).order('criado_em', { ascending: false });
  if (error) throw error;
  return data;
}

export async function criarComunidade(comunidade) {
  const { data, error } = await supabase.from('comunidades').insert([comunidade]).select().single();
  if (error) throw error;
  return data;
}

export async function atualizarComunidade(id, dados) {
  const { data, error } = await supabase.from('comunidades').update(dados).eq('id', id).select().single();
  if (error) throw error;
  return data;
}
