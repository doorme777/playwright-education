# Repositorio para probar playwright
Playwright es una librería de testing, ya también se usa para el web scriping, pruebas e2e
las características que tíene que lo hacen especial son:
1. La facílidad de entenderlo.
2. Tener la opción de poder usar varios o solo un motor web(ej. chromium).
3. La forma de debbugear, tiene de gustos a de colores podemos usar la cli con una variable de entorno, o abrirlo en ui y correr una prueba de uno por cada una.
4. codegen es nuestro amigo que anota cómo interactuamos con la pagína para que no tengamos que escribir nuestro código desde 0.  

## Temario
Temario
1. [¿Por qué elegir Playwright?](#por-qu%C3%A9-elegir-playwright)
2. [Instalación de Playwright](#instalaci%C3%B3n-de-playwright)
3. [Locators](#locators)
4. [Assertions](#assertions)
5. [Trace mode](#trace-mode)
6. [Debugear test](#debugear-test)
7. [Codegen](#codegen)

---
# ¿Por que eligir Playwright?
Porque Playwright es multi-navegador, podemos ver nuestra aplicación en muchos navegadores ya sea en computadora o en móvil. También nos permite automatizar acciones de la interfaz de usuario con nuestro amigo codegen, veremos más adelante.

---
# Instalación de Play wright
Para instalar con npm Playwright, debemos hacer lo siguiente:
```bash
npm init playwright@latest
```
Ok, nos abrirá unas opciones a elegir para saber qué queremos con Playwright. Primero nos pregunta dónde queremos los tests:

![Screenshot from 2024-05-14 09-55-13](https://github.com/doorme777/reto-01/assets/137806586/27b1ad56-a866-4fd0-8c10-c8af61a73bc7)


Ahí nosotros agregaremos la ruta donde queremos poner los tests.

Luego nos pregunta si queremos añadir GitHub Actions Workflow:

![Screenshot from 2024-05-14 09-56-04](https://github.com/doorme777/reto-01/assets/137806586/fddbe05f-cdba-4f1b-8081-41e072e220a3)

Luego nos pregunta si queremos que instale los navegadores que tiene por defecto Playwright:

![Screenshot from 2024-05-14 09-58-39](https://github.com/doorme777/reto-01/assets/137806586/1f8abe58-96c4-4f41-a2df-8553437a85d5)

Este proceso tiene que lanzarnos más o menos esto:

![Screenshot from 2024-05-14 10-00-24](https://github.com/doorme777/reto-01/assets/137806586/a9f36941-f425-4245-a88f-b0600bc90677)

---
# Locators
Son la forma con selectores de **CSS** podemos seleccionar elementos del **DOM** de la página que queremos testear. Existe una forma para verificar cierto comportamiento deseado con los assertions. Para seleccionar un elemento con los locators:

```js
await page.getByLabel('User Name').fill('John'); // También podemos ejecutar métodos que puedan simular el cliente en el navegador.
```
---
# Assertions
Los assertions son la forma en que podemos ver si un elemento sigue el comportamiento deseado, ya sea llenar un formulario o verificar si tenemos elementos en nuestra búsqueda. Un ejemplo:
```js
await expect(page.getByTestId('status')).toHaveText('Submitted'); // Aquí esperamos que un elemento con id status tenga el texto 'Submitted'.
```

---
# Trace mode
Es una forma de ver cómo se ejecutó el test. Para comparar sería como el network de las devtools de Chrome. Esta opción viene deshabilitada por defecto, entonces cuando quieras ejecutar el test tendrás que poner la flag de `--trace on` para poder verlo. Se vería más o menos así:

![Screenshot from 2024-05-14 10-21-15](https://github.com/doorme777/reto-01/assets/137806586/d9294d2e-8f5e-4cc1-b717-609286a1ff9d)

Este apartado va a estar abajo del reporte de las pruebas.

---
# Debugear test
Cuando un test sale mal ya sea porque el assertion no salió como esperábamos, o el locator nos equivocamos, podemos hacer de 2 sopas (qué se). Primero ejecutamos los test con la flag `--debug`:
```bash
npx playwright test --debug
```

Esto nos permite debugear por breakpoints, es decir, donde se rompió el test. Parece como la performance de las devtools que nos abre el navegador y el test en otro apartado.

### PERO

podemos poner algo antes de ejecutar el test para ver cómo anda en la CLI:
```bash
DEBUG=pw:api npx playwright test # Esto cambiará según cómo se declaren las variables de entorno del sistema operativo.
```
Esto nos debe dar un resultado igual a:

![Screenshot from 2024-05-14 10-28-25](https://github.com/doorme777/reto-01/assets/137806586/0257b46d-b80a-401a-a1ea-6cbedf9d70a4)

Nos permite ver cuánto tarda un proceso, y sin necesidad de hacerlo más rápido.

---
# Codegen
Esto es más normal que se vea al principio, pero bueno, nuestro amigo **codegen** nos escribe cómo interactuamos con la página que vamos a testear. Para invocar a nuestro amigo hay que hacer lo siguiente:
```bash
npx playwright codegen
```
Nos abrirá el navegador y lo que tienes que hacer para que funcione es usar el navegador cómo normalmente lo usas, solo que verás la caja de los componentes.

---
# Bonus
1. ¿Cómo se selecciona un elemento en Playwright? 
 a) `page.locator("#element_id").select()` 
 b) `page.select("#element_id")` 
 c) `page.locator("#element_id")` 
 d) `page.querySelector("#element_id")`
    
2. ¿Cuál de las siguientes afirmaciones es correcta en Playwright? 
 a) `expect(await page.locator("#element_id").innerText()).toBe("Expected Text");` 
 b) `expect(page.locator("#element_id").innerText()).toBe("Expected Text");` 
 c) `expect(await page.locator("#element_id").innerText("Expected Text"));` 
 d) `expect(page.locator("#element_id").toBe("Expected Text"));`
    
3. ¿Cual es la flag para debuggear un test en playwright? 
 a) `--debug`
 b) `--inspect`
 c) `DEBUG:pw:api`
 d) Todas las anteriores
    

Respuestas correctas:

1. c) `page.locator("#element_id")`
2. a) `expect(await page.locator("#element_id").innerText()).toBe("Expected Text");`
3. d)  `--debug`
