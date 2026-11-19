# Catálogo de Livros com Flask e React

Repositório das atividades de construção de uma API de livros com Flask e de uma interface React para consultar essa API.

## Estrutura

- `atividade_1`: API Flask com a rota `GET /livros`.
- `atividade_2/frontend-livros`: interface React criada com Vite.

## Executar a API

No diretório `atividade_1`, crie e ative um ambiente virtual e instale as dependências:

```powershell
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

A API estará disponível em `http://127.0.0.1:5000/livros`.

## Executar a interface

Em outro terminal, acesse `atividade_2/frontend-livros` e execute:

```powershell
npm install
npm run dev
```

Abra no navegador o endereço informado pelo Vite e clique em **Buscar Livros**. A API Flask deve permanecer em execução durante o teste.
