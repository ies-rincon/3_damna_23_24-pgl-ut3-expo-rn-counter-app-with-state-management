# 3DAMNA - PGL > UT3 > Counter App With State Management (Context API)

Esta es una aplicación de contador simple desarrollada en Expo. La aplicación muestra un contador y permite al usuario aumentar o disminuir el valor del contador haciendo clic en botones.

## Características

- Muestra un contador en pantalla.
- Permite al usuario aumentar o disminuir el contador haciendo clic en botones.
- La aplicación utiliza el manejo de estados con la Context API de React para gestionar el estado del contador de manera global y compartida entre componentes.

## Context API de React

La Context API de React es una característica que permite a los componentes de React compartir datos sin necesidad de pasar propiedades manualmente a través de cada nivel de la jerarquía de componentes. Esto facilita la gestión del estado global de la aplicación y la comunicación entre componentes.

Puedes obtener más información sobre cómo pasar datos profundamente con la Context API de React en la [documentación oficial de React](https://react.dev/learn/passing-data-deeply-with-context).

## Interacción y Componentes

La aplicación utiliza algunos conceptos clave de interacción y componentes en React Native:

- Utiliza botones (`FAB`) de [react-native-elements](https://reactnativeelements.com/) para permitir al usuario interactuar con la aplicación y modificar el contador.
- Los componentes de texto (`Text`) se utilizan para mostrar el valor actual del contador en la pantalla.

Para obtener más información sobre cómo agregar interactividad a las aplicaciones de React Native y aprender sobre los componentes disponibles, consulta la [documentación oficial de react-native-elements](https://reactnativeelements.com/docs/3.4.2/fab).

## Navegación por Pestañas

Si deseas explorar la navegación por pestañas en Expo, puedes consultar la documentación de [Tabs de Expo Router](https://docs.expo.dev/router/advanced/tabs/).

## Ejemplo de Uso

### 1. Creación del Context

Primero, creamos un contexto utilizando `React.createContext`. Esto se hace generalmente en un archivo separado, como `CounterContext.tsx`.

```javascript
// src/CounterContext.js
import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export function useCounter() {
  return useContext(CounterContext);
}

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}
```

### 2. Uso del Contexto

Ahora, podemos usar el contexto en nuestros componentes. Por ejemplo:

```javascript
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useCounter, CounterProvider } from './CounterContext';

const CounterApp = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      <Button
        title="Increment"
        onPress={increment}
      />
      <Button
        title="Decrement"
        onPress={decrement}
      />
    </View>
  );
};

function AppWithProvider() {
  return (
    <CounterProvider>
      <CounterApp />
    </CounterProvider>
  );
}

export default CounterApp;
