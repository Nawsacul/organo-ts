import "./Banner.css";

interface BannerProps {
  enderecoImagem: string;
  textoAlternativo?: string; //com a interrogação, o typescript entende como opcional
}

const Banner = ({ enderecoImagem, textoAlternativo }: BannerProps) => {
  return (
    <header className="banner">
      {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/> */}
      <img src={enderecoImagem} alt={textoAlternativo} />
    </header>
  );
};

export default Banner;