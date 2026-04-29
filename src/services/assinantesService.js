import { supabase } from './supabaseClient';

export async function listarAssinantes(comunidadeId) {
  const { data, error } = await supabase.from('assinantes').select('*, planos(nome, preco)').eq('comunidade_id', comunidadeId).order('criado_em', { ascending: false });
  if (error) throw error;
  return data;
}

export async function criarAssinante(assinante) {
  const { data, error } = await supabase.from('assinantes').insert([assinante]).select().single();
  if (error) throw error;
  return data;
}

export async function atualizarStatusAssinante(id, status) {
  const { data, error } = await supabase.from('assinantes').update({ status }).eq('id', id).select().single();
  if (error) throw error;
  return data;
}
