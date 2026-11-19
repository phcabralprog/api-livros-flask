import { useState } from 'react'
import './App.css'

function App() {
  const [livros, setLivros] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  async function buscarLivros() {
    setCarregando(true)
    setErro('')
    setLivros([])

    try {
      const response = await fetch('/api/livros', { method: 'GET' })

      if (!response.ok) {
        throw new Error('A resposta da API não foi bem-sucedida.')
      }

      const dados = await response.json()
      setLivros(dados.livros)
    } catch {
      setErro('Não foi possível buscar os livros. Verifique se a API está disponível.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <main className="catalogo">
      <h1>Catálogo de Livros</h1>

      <button type="button" onClick={buscarLivros} disabled={carregando}>
        Buscar Livros
      </button>

      <div className="mensagem" aria-live="polite">
        {carregando && <p>Carregando livros...</p>}
        {erro && <p className="erro">{erro}</p>}
      </div>

      <section className="lista-livros" aria-label="Livros encontrados">
        {livros.map((livro) => (
          <article className="livro" key={livro.id}>
            <h2>{livro.titulo}</h2>
            <p><strong>ID:</strong> {livro.id}</p>
            <p><strong>Autor:</strong> {livro.autor}</p>
            <p><strong>Ano:</strong> {livro.ano}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
