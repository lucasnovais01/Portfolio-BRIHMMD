Um pouco sobre mim:

INTRODUÇÃO: QUEM SOU EU

Meu nome é Lucas Novais de Oliveira, tenho 34 anos e sou aluno do 5º período do curso Superior de Tecnologia em Sistemas para Internet do IFSP Campus Birigui. Sou Funcionário público e já possuo formação, mas por escolha pessoal de aprofundar conhecimentos técnicos em uma área que genuinamente me interessa.
Essa maturidade profissional e pessoal influencia diretamente a forma como vivencio o curso. Trago comigo uma régua de comparação construída a partir de outras experiências formativas e profissionais, o que me permite observar com mais clareza tanto os pontos fortes quanto as fragilidades do processo educacional ao qual sou submetido, não com a intenção de julgar, mas de refletir criticamente, como este próprio instrumento de portfólio reflexivo propõe.


Sou programador full-stack;
Não sou muito socializável (talvez seja melhor não colocar está informação no portfólio)
Gosto de programação e de
Jogos,
Livros,
Filmes,
Animes e Mangas;

Escrevi um artigo ciêntifico, sobre sistema de tutorial com inteligência artificial, preciso depois quando fizer o portfolio, o link "blank" depois vou fornecer o link para quem quiser clicar poder ler;

Estou trabalhando atualmente no meu TCC, chamando crowdacademico:
"
CrowdAcadêmico — Resumo para Portfólio

CrowdAcadêmico é uma plataforma de crowdfunding (financiamento coletivo) voltada especificamente para pesquisa científica brasileira, desenvolvida como Trabalho de Conclusão de Curso no IFSP. A ideia central é conectar pesquisadores que precisam de financiamento pra seus projetos com apoiadores dispostos a contribuir financeiramente, com um sistema de reputação (score) que dá credibilidade aos pesquisadores com base no histórico de campanhas, atualizações e engajamento acadêmico.

Stack técnica: PostgreSQL como banco de dados, com backend em NestJS e frontend em React (Vite). O banco foi inteiramente desenhado à mão — 39 tabelas normalizadas, cobrindo desde o núcleo do sistema (usuários, campanhas, contribuições) até subsistemas completos de RBAC (controle de acesso baseado em papéis, com permissões granulares), motor de cálculo de reputação (score do pesquisador, calculado a partir de 4 dimensões: perfil acadêmico, histórico de campanhas, engajamento em atualizações e reputação), moderação de conteúdo (denúncias, comentários com endosso, encerramento antecipado de campanha), e sistema de recompensas para apoiadores.

Decisão de arquitetura relevante: o projeto começou com autenticação delegada ao Supabase Auth, mas foi migrado pra um sistema de autenticação própria construída do zero no NestJS (hash de senha, verificação de e-mail, recuperação de senha, sessões com refresh token revogável) — uma escolha deliberada para reduzir a dependência de serviços de terceiros e manter portabilidade do banco.

Segurança em camadas: todas as tabelas usam Row Level Security (RLS) do PostgreSQL como uma camada de defesa adicional além da autorização feita na aplicação — princípio de "defesa em profundidade", já que mesmo que o backend tenha uma falha, o próprio banco impede acesso indevido a dado de outro usuário.

Regras de negócio no banco: o sistema usa triggers e funções em PL/pgSQL para garantir integridade que uma constraint simples não cobre — por exemplo: impedir que um pesquisador tenha mais de duas campanhas simultâneas, congelar as regras financeiras de uma campanha após aprovação, sincronizar automaticamente o valor arrecadado a cada contribuição, e recalcular o score do pesquisador em tempo real sempre que algo relevante muda (nova campanha, denúncia, atualização publicada).
"
Acho legal citar o meu TCC no meu portfólio.


Atualmente, sou aluno no IFSP Campus Birigui, curso: Sistema em Tecnologias para Internet (TSI), 6º semestre, noturno. Matrícula: BI303268X

Meu e-mail:
novais.oliveira@aluno.ifsp.edu.br

Meu telefone:
(18) 99153-4544

Meu github:
https://github.com/lucasnovais01


E eu não tenho rede social, nenhuma.