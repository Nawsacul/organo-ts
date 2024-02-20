import "./CampoTexto.css";

interface CampoTextoProps {
  placeholder: string;
  aoAlterado: (valor: string) => void; //função que recebe uma string como parâmetro e não retorna nada (void)
  label: string;
  valor: string;
  obrigatorio?: boolean;
  tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({
  placeholder,
  aoAlterado,
  label,
  valor,
  obrigatorio = false,
  tipo = 'text'
}: CampoTextoProps) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado} //Digita event => aoDigitado e passa o mouse por cima de event para saber o evento
        required={obrigatorio}
        placeholder={placeholderModificada}
        type={tipo}
      />
    </div>
  );
};

export default CampoTexto;
