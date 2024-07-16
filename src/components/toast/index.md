Aquí tienes la documentación actualizada que cubre tanto el componente `Toast` como el hook `useToast`, presentados en formato Markdown:

---

# `Toast` Component

El componente `Toast` se utiliza para mostrar notificaciones emergentes (toasts) con diferentes variantes como success, danger, warning e info. Utiliza Tailwind CSS para los estilos y `react-icons` para mostrar los iconos.

## Props

### `type`
- **Type**: `TOAST_VARIANTS`
- **Description**: Determina el tipo de la notificación toast. El enum `TOAST_VARIANTS` incluye `success`, `danger`, `warning`, e `info`.
- **Default**: `TOAST_VARIANTS.success`

### `children`
- **Type**: `React.ReactNode`
- **Description**: El contenido que se mostrará dentro de la notificación toast.

## Uso

### Importa el componente y el enum

Primero, necesitas importar el componente `Toast` y el enum `TOAST_VARIANTS`.

```javascript
import Toast, { TOAST_VARIANTS } from './path/to/Toast';
```

### Utiliza el componente en tu aplicación React

Puedes usar el componente `Toast` especificando el `type` y el contenido que deseas mostrar dentro de la notificación toast.

```javascript
function App() {
  return (
    <div>
      <Toast type={TOAST_VARIANTS.success}>
        This is a success message!
      </Toast>
      <Toast type={TOAST_VARIANTS.danger}>
        This is a danger message!
      </Toast>
      <Toast type={TOAST_VARIANTS.warning}>
        This is a warning message!
      </Toast>
      <Toast type={TOAST_VARIANTS.info}>
        This is an info message!
      </Toast>
    </div>
  );
}

export default App;
```

---

# `useToast` Hook

El hook `useToast` facilita la gestión y visualización de múltiples notificaciones toast en una aplicación React.

## Funcionalidad

El hook `useToast` utiliza el estado local para mantener una lista de notificaciones toast y proporciona métodos para agregar nuevas notificaciones y gestionar su duración.

### Importación del hook

```javascript
import useToast from './path/to/useToast';
```

### Uso del hook

```javascript
function App() {
  const { toast, toastList } = useToast();

  const showToast = (type) => {
    toast({
      type: type, // TOAST_VARIANTS.success, TOAST_VARIANTS.danger, TOAST_VARIANTS.warning, TOAST_VARIANTS.info
      message: `Este es un mensaje de tipo ${type} !`, // Puedes personalizar el mensaje aquí
    });
  };

  return (
    <div>
      <button onClick={() => showToast(TOAST_VARIANTS.success)}>Show Success Toast</button>
      <button onClick={() => showToast(TOAST_VARIANTS.danger)}>Show Danger Toast</button>
      <button onClick={() => showToast(TOAST_VARIANTS.warning)}>Show Warning Toast</button>
      <button onClick={() => showToast(TOAST_VARIANTS.info)}>Show Info Toast</button>

      {toastList}
    </div>
  );
}

export default App;
```



## Notas adicionales

- **Tailwind CSS**: Asegúrate de tener configurado Tailwind CSS en tu proyecto para estilos consistentes en las notificaciones toast.
- **Dependencias**: Verifica que las dependencias requeridas como `react` y `react-icons` estén instaladas correctamente.

---

Esta documentación debería proporcionar una guía completa para integrar y utilizar tanto el componente `Toast` como el hook `useToast` en tu aplicación React. Si tienes más preguntas o necesitas ayuda adicional, no dudes en preguntar.