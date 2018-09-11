# form-autofill-js


Tool for auto filling html forms based on the fake data generator: [casual.js](https://github.com/boo1ean/casual)

[DEMO 1 - with CDN](https://jsbin.com/subesef/1)

[DEMO 2 - with import](https://codesandbox.io/s/kmxmv1yx57) 


![gif](https://github.com/jhta/form-autofill-js/blob/master/1.gif)

The Tool identifies the html component based on the `name` and `type` params and fill it with a random pair from the object `casual`.

## How to install

`npm i -S -D form-autofill-js`

or 

`yarn add form-autofill-js --dev`

### With CDN

`<scripthttps://unpkg.com/form-autofill-js@latest/dist/main.js`
````html
<script src="https://unpkg.com/form-autofill-js@0.1.4/dist/main.js"></script>
  <script>Autofill.tool()</script>
</body>
````

## how to use

Fill from javascript
```` javascript
import { fill } from 'form-autofill-js'

fill()
````
You can use a Button tool for fill with a button click event:

````javascript
import { tool } from 'form-autofill-js'
Autofill.tool()
````

