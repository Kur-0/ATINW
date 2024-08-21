import { useState } from "react";
import aqua from "/aqua.png";
import data from "../../../noticias.json";
import Input from "../Input/Input";

const ArticleList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(data);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    const filteredResults = data.filter((search) =>
      search.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredArticles(filteredResults);
  };

  return (
    <>
      <div className="text-center mt-5">
        <Input
          type="text"
          name="searchPost"
          id="searchPost"
          value={searchInput}
          placeholder="Digite para buscar"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-center items-center mt-12">
        <div className="mx-auto">
          <h1 className="font-jacques text-center text-teal-500 text-[50px] mb-8">
            Destaques!
          </h1>
          <div className="max-w-[1600px]">
            {filteredArticles.length > 0 ? (
              filteredArticles.slice(0, 5).map((article, index) => (
                <div key={index} className="w-[700px] my-4 p-4 border border-teal-400 rounded-lg">
                  <h2 className="text-lg text-teal-500 font-semibold font-jacques">
                    {article.titulo}
                  </h2>
                  <br />
                  <p className="text-sm font-jacques">
                    {article.data} - Fonte: {article.fonte}
                  </p>
                  <br />
                  <br />
                  <p className="text-base font-jacques">{article.descricao}</p>
                </div>
              ))
            ) : (
              <p className="text-xl col-span-3 mt-4 text-center dark:text-black">
                Nenhum Artigo Encontrado 😔{" "}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-jacques text-center text-teal-500 text-[50px] mb-8">
            Notas Da <br /> Comunidade
          </h1>
          <div className="flex">
            <img src={aqua} alt="aquaaa" />
            <p className="font-jacques text-[20px] w-[346px]">
              É com grande entusiasmo que anunciamos o lançamento oficial da
              Animex, a mais nova plataforma de streaming dedicada
              exclusivamente aos fãs de anime no Brasil. Nossa missão é
              proporcionar uma experiência de visualização de alta qualidade,
              com uma vasta seleção de animes para todos os gostos e idades.
              Para mais informações, entre em contato com nossa equipe de
              comunicação em [email@animex.com].
              <br />
              <br />
              Agradecemos a todos pelo apoio e estamos ansiosos para vê-los na
              Animex!
              <br />
              <br />
              🩵🩵🩵🩵🩵🩵 Animex 🩵🩵🩵🩵🩵🩵
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleList;
