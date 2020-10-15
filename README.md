# MARVEL - Demonstralção - Frontend Developer Job 

Este projeto foi gerado com  [Angular CLI](https://github.com/angular/angular-cli) versão  8.1.0.

## Especificações do projeto 

Projeto criado usando angular [CLI](https://cli.angular.io/) (command-line interface) para automatizar o desenvolvimento da aplicação.

```bash
 npm install -g @angular/cli@8.1.0
```

## Folhas de estilo
Para aumento da produtividade na criação de estilos do sistema, foi utilizado pré-processador sass (scss).As folhas de estilos globais da aplicação ficam na pasta `root` da aplicação `styles` e importa as demais `functions`, `mixins` e `scss's globais`


```scss
@import './variables';
@import './mixins';
@import './fontFace';
@import './customButton';
@import './customCheckbox';

```

## Especificação ES6
Os `controllers` da aplicação foram desenvolvidos utilizando especificações do Ecma Script 6 (ES6)

```javascript
func =()=> {...} // arrow functions
const { count, limit, offset, total } = data //destructuring
const series: Array<ISerie> = this.series.results.map(s => ({...s, selected: false})) //Spread operator

/**
* Async/Await
*/
getCreators = async () => {
    try {
      const data: IData = await this.api.getCreators();
     ...

    } catch (error) {
     ...
    }
  }

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/marvel` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Developer on april, 30 - 2020
This project user `Lazy loader` to render the components

## Criado por
[Kedon](https://kedon.com.br/home/)
