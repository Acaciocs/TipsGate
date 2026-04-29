import { supabase } from './supabaseClient';

export async function criarConteudo(conteudo) {
  const { data, error } = await supabase.from('conteudos').insert([conteudo]).select().single();
  if (error) throw error;
  return data;
}

export async function listarConteudos(comunidadeId) {
  const { data, error } = await supabase.from('conteudos').select('*').eq('comunidade_id', comunidadeId).order('criado_em', { ascending: false });
  if (error) throw error;
  return data;
}
