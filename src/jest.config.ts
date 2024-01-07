export default {
    // La ruta de los archivos de prueba
    roots: ['./src'],
  
    // La extensión de los archivos de prueba
    testMatch: ['**/*.test.ts'],
  
    // Transformador de TypeScript
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
  
    // Configuración para ts-jest
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
  };