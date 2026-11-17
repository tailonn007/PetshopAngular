# Patinhas Felizes – site do petshop (Angular)

Atividade em dupla DevCampus Software. Site de petshop com 6 páginas em Angular, rotas, Nav e deploy na Vercel.

## Branches e divisão do trabalho
| Branch | Quem | O que entrega |
|---|---|---|
| `main` | todos | base do projeto, Nav, Footer, rotas, 404 e as 6 páginas "em construção". É o que vai para o ar |
| `kayo` | Kayo | páginas Início e Sobre |
| `ramon` | Ramon | página Serviços, página Agendamento e card de serviço |
| `alberth` | Alberth | página Novidades, página Contato e card de notícia |

Ninguém programa direto na `main`. Cada um trabalha na sua branch e abre um Pull Request para a `main`; outra pessoa revisa e faz o merge.

## Rodar localmente
```bash
cd petshop
npm i
npm start
```
Abre em http://localhost:4200

## Rotas
`/` Início · `/sobre` · `/servicos` · `/agendamento` · `/novidades` · `/contato` · qualquer outra → 404

## Rotina de cada dia
```bash
git checkout sua-branch
git add .
git commit -m "o que foi feito"
git pull
git push
```

## Deploy (Vercel)
Root Directory: `petshop` · Framework: Angular · o `vercel.json` já faz o rewrite das rotas.
Link do site: _colar aqui depois do deploy_
