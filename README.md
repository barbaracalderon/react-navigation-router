_This README.md file is in English and Portuguese. // Esse arquivo README.md está em Inglês e Português._

# PT: Página de Navegação em React.js: usando React Router

###  _Aplicação simples para aprender e praticar a lib **React Router**._


 ⚠️ _Isso foi criado enquanto eu seguia o projeto de Navegação do curso de React e Redux do Leonardo Moura Leitão. O curso está [disponível na Udemy aqui](https://www.udemy.com/course/react-redux-pt/).  Fiz modificações de CSS e adicionei lorem ipsum, além de algumas informações relacionadas a estudos e projetos._  ⚠️

 _Printscreen da versão final abaixo._

![navigation page](navigation.png)

## Caderno de Anotações

### Navegação com Parâmetros

Para referenciar um parâmetro no mundo do React Router, ou seja, para navegar com parâmetro, o código `path="/about/:id"` é importante. O `:id` é **uma variável**.

### De Switch para Routes

Fiz uma modificação relevante em termos de código para que a sintaxe nova pudesse rodar.

No curso, é utilizado o seguinte código para trabalhar com as "rotas", no arquivo `Content.jsx`:

```javascript
const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="param/:id">
                <Param />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </main>
)
```

Eu tive que trocar o código porque `Switch` não existe mais e o **React acusou erro**. Procurando soluções, encontrei algumas páginas indicando como fazer com a nova sintaxe: `Routes`. 

Troquei o código mencionado acima por este aqui e deu tudo certo:

```javascript
const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/home" element={ <Home />} />
            <Route path="/param/:id" element={ <Param /> } />
            <Route path="/about" element={ <About /> } />
        </Routes>
    </main>
)
```
_Fim._


# EN: Navigation Page with React.js: React Router

### _Simple application to learn and practice the **React Router** lib._

 ⚠️ _This was done as I followed up the Navigation Project from the React Redux Udemy course by Leonardo Moura Leitão. You can check [his Udemy Course here](https://www.udemy.com/course/react-redux-pt/). I made some changes and added some lorem ipsum, while also adding some other infos in Portuguese about studies and projects._  ⚠️

 _Final printscreen version below._

![navigation page](navigation.png)

## Notes 

### Navigating with Parameters

In order to reference a parameter with React Router, the code `path="/about/:id"` is important. The `:id` is actually **a variable**. This changes everything.

### Changing "Switch" to "Routes"

I made a relevant change in the code in order for it to work with the modern syntax.

In the course, the following code is used to work with the "routes", in the `Content.jsx` file:

```javascript
const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="param/:id">
                <Param />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </main>
)
```
I had to change the above code because `Switch` did not exist anymore and **React was pointing out the error**. I searched for solutions and found some answers from the community, they were indicating how to make it work with the new syntax: `Routes`.

I changed the above code to the following, and it worked:

```javascript
const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/home" element={ <Home />} />
            <Route path="/param/:id" element={ <Param /> } />
            <Route path="/about" element={ <About /> } />
        </Routes>
    </main>
)
```
_The end._