create table usuarios (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  email text unique not null,
  plano_saas text default 'starter',
  criado_em timestamp with time zone default now()
);

create table comunidades (
  id uuid primary key default gen_random_uuid(),
  usuario_id uuid references usuarios(id) on delete cascade,
  nome text not null,
  descricao text,
  plataforma text default 'telegram',
  telegram_chat_id text,
  status text default 'ativa',
  criado_em timestamp with time zone default now()
);

create table planos (
  id uuid primary key default gen_random_uuid(),
  comunidade_id uuid references comunidades(id) on delete cascade,
  nome text not null,
  preco numeric(10,2) not null,
  duracao_dias int not null default 30,
  ativo boolean default true,
  criado_em timestamp with time zone default now()
);

create table assinantes (
  id uuid primary key default gen_random_uuid(),
  comunidade_id uuid references comunidades(id) on delete cascade,
  plano_id uuid references planos(id),
  nome text not null,
  email text,
  telefone text,
  telegram_id text,
  status text default 'pendente',
  data_inicio date,
  data_fim date,
  criado_em timestamp with time zone default now()
);

create table pagamentos (
  id uuid primary key default gen_random_uuid(),
  assinante_id uuid references assinantes(id) on delete cascade,
  valor numeric(10,2) not null,
  metodo text,
  status text default 'pendente',
  gateway_id text,
  pago_em timestamp with time zone,
  criado_em timestamp with time zone default now()
);

create table conteudos (
  id uuid primary key default gen_random_uuid(),
  comunidade_id uuid references comunidades(id) on delete cascade,
  titulo text not null,
  conteudo text not null,
  status text default 'rascunho',
  agendado_para timestamp with time zone,
  enviado_em timestamp with time zone,
  criado_em timestamp with time zone default now()
);
