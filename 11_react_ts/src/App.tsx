import React, {createContext} from 'react';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructuring';
import State from './components/State';
import Context from './components/Context';
type textOrNull = string | null

interface IAppContext {
  language: string,
  framework: string,
  projects: number
}
export const AppContext = createContext<IAppContext | null>(null)

function App() {
  
  const name:string = "Leonardo"
  const age:number = 24
  const isWorking: boolean = true

  const userGreeting = (name: string): string => {
    return `Olá, ${name}`
  }
  const myText: textOrNull = "Tem algum texto aqui"
  let myText2: textOrNull = null
  myText2 = "E aí"

  const contextValue = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>React com TS</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <p>Está trabalhando no momento</p>
        )}
        {userGreeting(name)}
        <FirstComponent />
        <SecondComponent name="Teste" />
        <Destructuring 
          title="Primeiro post" 
          content="Post muiiiito bom, sobre TS" 
          commentsQty={10} tags={["JavaScript", "TypeScript"]} 
          category={Category.TS} 
        />
        <State />
        {myText && 
          <p>Tem texto em myText</p>
        }
        {myText2 &&
          <p>Tem texto em mySecondText</p>
        }
        {(!myText || !myText2) &&
          <p>Alguma das variáveis de texto está vazia!</p>
        }
      </div>
      <Context />
      </AppContext.Provider>
      
  );
}

export default App;
