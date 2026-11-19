# API de Livros com Flask

API simples desenvolvida em Python e Flask para disponibilizar os dados de três livros em formato JSON.

## Instalação

Crie e ative um ambiente virtual:

```bash
python -m venv venv
```

No Windows:

```bash
venv\Scripts\activate
```

No Linux ou macOS:

```bash
source venv/bin/activate
```

Instale as dependências:

```bash
pip install -r requirements.txt
```

## Execução

Inicie a aplicação:

```bash
python app.py
```

## Rota disponível

Com o servidor em execução, consulte a rota `GET /livros` em:

```text
http://127.0.0.1:5000/livros
```
