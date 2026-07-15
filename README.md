# Palabras Encadenadas

Trabajo Final Integrador de la materia **Construcción de Interfaces de Usuario**.

Aplicación desarrollada en React, con el objetivo es formar la cadena más larga posible de palabras válidas antes de que se agote el tiempo. Cada palabra debe comenzar con la última letra de la palabra anterior.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- Axios
- CSS

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/francorodriguez00/unq-ui-franco-rodriguez-trabajo-final.git
```

2. Acceder a la carpeta del proyecto:

```bash
cd unq-ui-franco-rodriguez-trabajo-final
```

3. Instalar las dependencias:

```bash
npm install
```

## Ejecución

Para iniciar la aplicación en modo desarrollo ejecutar:

```bash
npm run dev
```

Luego abrir el navegador en la dirección que indique Vite (generalmente `http://localhost:5173`).

## Cómo jugar

- La primera palabra puede ser cualquier palabra válida.
- Cada nueva palabra debe comenzar con la última letra de la palabra anterior.
- No se pueden repetir palabras.
- Cada letra suma un punto.
- El tiempo comienza con la primera palabra válida y se reinicia cada vez que se ingresa una palabra correcta.

## Funcionalidades

- Validación de palabras mediante la API proporcionada por la cátedra.
- Puntaje acumulado.
- Temporizador por turno.
- Mensajes de validación.
- Historial de palabras ingresadas.
- Leaderboard local con los 10 mejores puntajes.
- Posibilidad de iniciar una nueva partida.