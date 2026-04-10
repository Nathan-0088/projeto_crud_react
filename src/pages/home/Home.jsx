import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

function Home() {
  const inputRef = useRef();
  const [produtos, setProdutos] = useState([]);

  function adicionarProduto(){
    setProdutos([
      ...produtos,{
        id: uuidv4(),
        nome: inputRef.current.value,
      },
    ]);

    inputRef.current.value = ""; // limpa input
  }

  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
  }


  return (
    <div className="container">
      <div className="inf">
        <h1>Lista de compras</h1>

        <input
          type="text"
          placeholder="produto..."
          ref={inputRef}
        />

        <button onClick={adicionarProduto}>
          Enviar
        </button>
      </div>

      <div className="compras">
        {produtos.map((produto) => (
          <div className="produto" key={produto.id}>
            <p>{produto.nome}</p>
            <button onClick={() => deletarProduto(produto.id)}>
              <img
                src="https://img.icons8.com/windows/32/full-trash.png"
                alt="remover"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;