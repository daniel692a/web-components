# Web Componets

Los Web Components resuelven un gran problema que tienen las librerías o frameworks que tienen Angular, React o Vue pues ellos no pueden coexistir entre ellos, tienen diversos entornos, un componente de React no puede funcionar en Angular, pero los Web Components al estar fundamentados en Vanilla JavaScript, respetan los estándares y permiten que de verdad sean reutilizables, porque los puedes agregar a los frameworks sin problemas.

## ¿Qué son los Web Components?

La referencia típica que se suele dar a componentes dentro de frameworks es que son como piezas de Lego, pero realmente no lo son, porque si necesitas cierto componente y se encuentra escrito en otro entorno, eso no va a funcionar, pero los Wb components si funcionan por lo antes mencionado, son hechos en Vanilla JavaScript, y si existe la compatibilidad, estos trabajan con Web APIs como:

* HTML templates
* Custom Elements
* Shadow DOM
* ES Modules

### Custom Elements

Es una API bastante importante porque me permite que mi Web Component se convierta en una etiqueta de HTML5 para que el navegador lo entienda, una etiqueta personalizada, para hacer etiquetas personalizadas, existe una regla: Como HTML5 se sigue trabajando para sacar nuevas etiquetas, entonces para que no entre en conflicto se pide que tengas dos palabras separadas por un guión, ejemplo:

```html
<mi-mapa></mi-mapa>
```

Esto es porque el estándar de ahora sabe que no generará etiquetas de dos plabras separadas porque eso se convierte en un <b>Custom Element</b>, si se puede generar una etiqueta de una sola palabra pero no sería lo correcto porque si próximamente se lanza una etiqueta con el mismo nombre que tu diste, puede que se procese un resultado diferente al que tu creaste, porque HTML5 es el estándar.

### Shadow DOM

No es algo nuevo, y tampoco es similar al Virtual DOM, si has utilizado la etiqueta de video, eso contiene Shadow DOM, que nos permite crear un encapsulado perfecto para que el código que coexista ahí, no coexista con el código de afuera

### HTML Template

Es una sola etiqueta de HTML

```html
<template></template>
```

Es una etiqueta rara porque no la puedes usar en HTML, debes tener JavaScript, porque si la utilizas, todo lo que este adentro no se va a renderizar, pero si nos velverá algo que se llama document fragment, esto quiere decir que es un fragmento del DOM que necesita ser clonado para ser renderizado

### ES Modules

Ya es conocida porque es algo que se usa para JavaScript al utilizar módulos, es decir, usar el código de un fichero en otro

Todas estas Web APIs ya son estándares, no necesitas instalar dependencias en tu proyecto, usar librerías externas, solo el navegador.

## Beneficios

* ### Reutilización:

Podemos reutilizarlos, no es necesario escribirlo varias veces.

* ### Legibilidad:

Nos ayuda muchísimo a saber donde estamos parados, la estructura nos dice que parte es sin tener que revolvernos, esto agrega mucha semántica al proyecto

* ### Mantenibilidad:

Cada uno de los componentes pueden ser escritos y probados de forma individual, ahí esta parte de la magia, no tienes que comprometer tu aplicación de algo se rompa si mueves algo en un componente

* ### Interoperabilidad
Para librerías y frameworks, no pueden coexistir entre ellos, pero Web Components si

* ### Consistencia
Ya no tendrás que crear los mismos componentes en diferentes frameworks o librerías

## Ciclo de Vida de los componentes

* constructor()

  Es el paso número 1 del ciclo de vida porque cuando generamos un constructor en JavaScript el engine lo guarda en memoria el contenido del constructor

* connectedCallback()

  Este paso es cuando nuestro componente ya existe en el DOM, ya es un nodo y podemos hacer ciertas actividades importantes como el de renderizar el HTML y el CSS, es mala práctica que en el constructor ya queramos renderizar, por ello existe el connectedCallback

* disconnectedCallback()

  Es el momento cuando quitamos ese elemento del DOM, quitamos ese nodo, también es importante porque si existe ciertos elementos que no utlizamos, podemos liberar memoria

* attributeChangedCallback()

  Es la forma en que nosotros adentro del componente vamos estar viendo los atributos de la etiqueta HTML

* adoptedCallback()

  Es un caso raro y pocas veces se utiliza, si dentro del componente utilizas un iframe, que es mala práctica, se utiliza cuando un componente se va adoptar en otra cosa como en un iframe