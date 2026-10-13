# React Components Lab

Repositorio de aprendizaje y desarrollo de componentes reutilizables con **React**, **JavaScript (JSX)** y **Vite**. Incluye herramientas de análisis estático y formato para fomentar buenas prácticas desde el inicio.

## Tecnologías

- **React:** creación de interfaces mediante componentes.
- **Vite:** servidor de desarrollo y compilación de producción.
- **JavaScript + JSX:** lenguaje del proyecto; no se utiliza TypeScript.
- **pnpm:** instalación y administración de dependencias.
- **ESLint:** detección de errores y problemas de calidad.
- **Prettier:** formato consistente del código.

## Requisitos previos

Instala las siguientes herramientas antes de clonar el proyecto:

| Herramienta | Versión recomendada | Verificación |
| --- | --- | --- |
| Node.js | **24 LTS** | `node -v` |
| pnpm | Compatible con `package.json` y `pnpm-lock.yaml` | `pnpm -v` |
| Git | Versión reciente | `git --version` |
| VS Code | Opcional, recomendado | — |

- [Descargar Node.js](https://nodejs.org/en/download)
- [Instalar pnpm](https://pnpm.io/installation)
- [Descargar Git](https://git-scm.com/downloads)

Si aún no tienes pnpm, instala Node.js primero y luego ejecuta:

```bash
npx get-pnpm
```

Cierra y abre la terminal si el comando `pnpm` no se reconoce inmediatamente después de instalarlo.

> **Importante:** utiliza **pnpm** como gestor de dependencias. No generes archivos `package-lock.json` ni `yarn.lock` para este repositorio.

## Inicio rápido: ejecutar el proyecto en local

### 1. Clonar el repositorio

Abre una terminal (Git Bash, PowerShell o la terminal de VS Code) y ejecuta:

```bash
git clone https://github.com/josibeldv/react-components-lab.git
cd react-components-lab
```

> Necesitas acceso al repositorio en GitHub si está configurado como privado.

### 2. Instalar dependencias

```bash
pnpm install --frozen-lockfile
```

Este comando instala las dependencias siguiendo las versiones resueltas en `pnpm-lock.yaml` y evita actualizar ese archivo accidentalmente. Si el lockfile no coincide con `package.json`, informa al responsable del repositorio antes de modificarlo.

### 3. Levantar el servidor de desarrollo

```bash
pnpm dev
```

Abre en tu navegador la URL que muestra Vite en la terminal. Generalmente es:

**http://localhost:5173/**

Vite actualiza la interfaz mientras editas los componentes mediante HMR. Para detener el servidor presiona **Ctrl + C** en la terminal.

## Comandos útiles

Estos comandos corresponden a los scripts definidos para el proyecto en `package.json`:

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo. |
| `pnpm lint` | Analiza el código con ESLint. |
| `pnpm lint:fix` | Corrige automáticamente problemas que ESLint puede resolver. |
| `pnpm lint:strict` | Ejecuta ESLint sin permitir advertencias. |
| `pnpm format` | Da formato al código con Prettier. |
| `pnpm format:check` | Verifica el formato sin modificar archivos. |
| `pnpm build` | Genera la compilación de producción en `dist/`. |
| `pnpm preview` | Previsualiza localmente una compilación de producción. |
| `pnpm check` | Ejecuta lint estricto, comprobación de formato y build. |

Para comprobar la calidad antes de subir cambios:

```bash
pnpm check
```

Para comprobar cómo se comporta la versión de producción:

```bash
pnpm build
pnpm preview
```

## Calidad de código en VS Code

Instala estas extensiones:

- [ESLint (`dbaeumer.vscode-eslint`)](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier (`esbenp.prettier-vscode`)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

La configuración prevista en `.vscode/settings.json` permite que **ESLint analice los archivos JavaScript y JSX mientras escribes** y que las correcciones automáticas compatibles se apliquen al guardar.

ESLint es independiente del servidor Vite: no es necesario ejecutar `pnpm lint` para ver los diagnósticos mientras editas en VS Code. Sí se recomienda ejecutar `pnpm check` antes de subir cambios.

## Estructura del proyecto

```text
react-components-lab/
├── public/                # Archivos estáticos
├── src/
│   ├── assets/            # Recursos importados por la aplicación
│   ├── components/        # Componentes reutilizables (a medida que se creen)
│   ├── hooks/             # Hooks personalizados (a medida que se creen)
│   ├── utils/             # Funciones auxiliares (a medida que se creen)
│   ├── App.jsx            # Componente principal
│   └── main.jsx           # Punto de entrada de React
├── .vscode/               # Ajustes compartidos del editor, si están versionados
├── eslint.config.js       # Configuración de ESLint
├── vite.config.js         # Configuración de Vite
├── package.json           # Dependencias y scripts
├── pnpm-lock.yaml         # Versiones resueltas de dependencias
└── README.md              # Documentación del repositorio
```

> Algunas carpetas de `src/` se irán incorporando progresivamente durante el aprendizaje.

## Flujo recomendado para contribuir

Crea una rama por componente o funcionalidad:

```bash
git switch main
git pull --ff-only origin main
git switch -c feature/nombre-del-componente
```

Antes de publicar tus cambios, comprueba la calidad:

```bash
pnpm check
git add .
git commit -m "feat: add reusable component"
git push -u origin feature/nombre-del-componente
```

Abre un Pull Request hacia `main` para revisar e integrar los cambios.

## Solución de problemas frecuentes

**`pnpm: command not found` o `pnpm` no se reconoce**

Comprueba `node -v`, instala pnpm según la sección de requisitos y reinicia la terminal.

**Vite indica que la versión de Node.js no es compatible**

Comprueba `node -v` y utiliza la versión LTS recomendada para el proyecto.

**El puerto 5173 está ocupado**

Vite puede seleccionar otro puerto. Abre exactamente la URL que aparezca en la terminal.

**No aparecen los avisos de ESLint mientras escribes**

Verifica que esté instalada y habilitada la extensión ESLint, abre la carpeta raíz del repositorio en VS Code y ejecuta `ESLint: Restart ESLint Server` desde la paleta de comandos.

**`pnpm install --frozen-lockfile` falla por diferencias en el lockfile**

No borres el archivo de bloqueo como primera opción. Comprueba que estés en la raíz del repositorio y consulta con el equipo si `package.json` se actualizó sin regenerar `pnpm-lock.yaml`.

## Buenas prácticas

- Usa **pnpm** para gestionar las dependencias.
- Mantén los componentes enfocados en una responsabilidad.
- Evita imports, variables y código sin uso.
- Atiende las reglas de ESLint y los avisos de accesibilidad.
- Nunca subas credenciales, tokens ni secretos al repositorio.
- No incluyas información sensible en variables `VITE_*`: Vite puede exponerlas en el código del navegador.
- Documenta los componentes nuevos y sus propiedades cuando corresponda.

---

**Objetivo del repositorio:** aprender React mediante ejemplos prácticos y construir progresivamente una base de componentes reutilizables, legibles y mantenibles.
