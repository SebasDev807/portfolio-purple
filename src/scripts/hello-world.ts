// TypeScript con tipado fuerte
export function sayHello(name: string = 'World'): void {
  console.log(`Hello ${name} from TypeScript! 🚀`);
  
  // Podemos manipular el DOM
  const greetingElement = document.getElementById('ts-greeting');
  if (greetingElement) {
    greetingElement.textContent = `Hello ${name}, I'm using TypeScript!`;
    greetingElement.classList.add('text-purple-400', 'font-bold');
  }
  
  // TypeScript nos da autocompletado
  const currentDate: Date = new Date();
  console.log(`Generated at: ${currentDate.toLocaleTimeString()}`);
}

// Inicialización automática
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    sayHello('Developer');
    
    // Ejemplo con tipos personalizados
    interface Developer {
      name: string;
      skills: string[];
      isAvailable: boolean;
    }
    
    const me: Developer = {
      name: 'FullStack Developer',
      skills: ['Java', 'React', 'TypeScript', 'Spring'],
      isAvailable: true
    };
    
    console.log('Developer profile:', me);
  });
}