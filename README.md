### **Migrando do React com Javascript para React com Typescript**

#### **Instalando as Dependências**

Para começar a usar TypeScript no projeto React, é necessário instalar alguns pacotes:

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

- `--save` adiciona os pacotes ao `package.json`, controlando as dependências do projeto.
- `@types/node` traz a tipagem do Node.js.
- `@types/react` contém os tipos para a biblioteca React.
- `@types/react-dom` para a biblioteca React DOM, usada junto ao React para manipular o Virtual DOM.
- `@types/jest` para a biblioteca de testes, evitando quebras.

#### **Entendendo os Pacotes @types**

- **O que são?** Pacotes sob o escopo `@types` fornecem definições de tipo úteis para diversas bibliotecas, como Node.js, React, Express, Sequelize, entre outras.
- **Quando usar?** Antes de adicionar um pacote `@types`, verifique se a biblioteca já possui tipos incluídos.

#### **Configurando o TypeScript**

- Execute `npx tsc --init` para criar um `tsconfig.json`, que especifica as opções do compilador necessárias para compilar o projeto. Este arquivo é crucial para ajustar as regras e configurações do TypeScript no projeto.

  - **tsconfig.json**: Especifica as opções do compilador. Mais informações podem ser encontradas na [documentação oficial do TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

#### **Padrão de Nomeclatura de Arquivos**

- **React com TypeScript**: Os arquivos devem ter a extensão `.tsx`.

#### **Refatorando de JavaScript para TypeScript**

- **Exemplo de Botão (Antes em `.js`, Depois em `.tsx`):**

  - JavaScript:
    ```jsx
    import './Botao.css'

    const Botao = (props) => {
      return (<button className='botao'>
          {props.children}
      </button>)
    }

    export default Botao
    ```

  - TypeScript:
    ```tsx
    import { ReactElement } from "react";
    import "./Botao.css";

    interface BotaoProps {
      children: ReactElement;
    }

    const Botao = (props: BotaoProps) => {
      return <button className="botao">{props.children}</button>;
    };

    export default Botao;
    ```

- **Refatoração de `Banner` e `CampoTexto` para TypeScript**, demonstrando o uso de interfaces para definir as propriedades dos componentes.

#### **Conceitos Avançados em TypeScript com React**

- **JSX.Element, ReactNode, e ReactElement**: Diferentes tipos usados para descrever elementos e nós em React, cada um com suas peculiaridades.
- **Uso de `void`**: Indica funções que não retornam nada.
- **Eventos e Generic Types**: Introdução ao `React.SyntheticEvent` e uso de generic types com `useState`.

#### **Interfaces vs Types**

- **Principais diferenças**: Interfaces são abertas e podem ser estendidas, enquanto tipos são fechados.
- **Recomendação**: Preferir interfaces a tipos, por serem extensíveis.

#### **Generics e Uso Prático**

- Exemplo de uso de generics com `useState` para definir um estado que armazena uma lista de colaboradores: `useState<IColaborador[]>([])`.