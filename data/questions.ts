import { Question } from '../types';

// Generamos 5 preguntas reales y rellenamos el resto para simular las 65
export const MOCK_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: "Números",
    text: "Si al triple de -4 se le resta el cuádruple de 2, ¿qué resultado se obtiene?",
    options: [
      { id: "A", text: "-20" },
      { id: "B", text: "-4" },
      { id: "C", text: "4" },
      { id: "D", text: "20" }
    ],
    correctOptionId: "A",
    explanation: "El triple de -4 es 3 * (-4) = -12. El cuádruple de 2 es 4 * 2 = 8. Si restamos: -12 - 8 = -20."
  },
  {
    id: 2,
    subject: "Álgebra",
    text: "Si x = -2, entonces el valor de la expresión x² - 3x + 1 es:",
    options: [
      { id: "A", text: "-1" },
      { id: "B", text: "3" },
      { id: "C", text: "11" },
      { id: "D", text: "13" }
    ],
    correctOptionId: "C",
    explanation: "Reemplazamos x por -2: (-2)² - 3(-2) + 1 = 4 + 6 + 1 = 11."
  },
  {
    id: 3,
    subject: "Geometría",
    text: "¿Cuál es el perímetro de un cuadrado de área 64 cm²?",
    options: [
      { id: "A", text: "16 cm" },
      { id: "B", text: "24 cm" },
      { id: "C", text: "32 cm" },
      { id: "D", text: "64 cm" }
    ],
    correctOptionId: "C",
    explanation: "Si el área es 64, el lado es √64 = 8. El perímetro es 4 * lado = 4 * 8 = 32 cm."
  },
  {
    id: 4,
    subject: "Probabilidad",
    text: "Al lanzar un dado común, ¿cuál es la probabilidad de obtener un número primo?",
    options: [
      { id: "A", text: "1/2" },
      { id: "B", text: "1/3" },
      { id: "C", text: "2/3" },
      { id: "D", text: "1/6" }
    ],
    correctOptionId: "A",
    explanation: "Los números en un dado son {1,2,3,4,5,6}. Los primos son {2,3,5}. Hay 3 casos favorables de 6 totales. 3/6 = 1/2."
  },
  {
    id: 5,
    subject: "Porcentajes",
    text: "El 20% del 50% de 2000 es:",
    options: [
      { id: "A", text: "100" },
      { id: "B", text: "200" },
      { id: "C", text: "400" },
      { id: "D", text: "500" }
    ],
    correctOptionId: "B",
    explanation: "50% de 2000 es 1000. El 20% de 1000 es 200."
  }
];

// Rellenar hasta 65 preguntas para la UI (simulación)
for (let i = 6; i <= 65; i++) {
  MOCK_QUESTIONS.push({
    id: i,
    subject: "Materia General",
    text: `Pregunta simulada número ${i} para completar la estructura del ensayo. En el examen real, aquí iría un problema matemático complejo.`,
    options: [
      { id: "A", text: "Alternativa A simulada" },
      { id: "B", text: "Alternativa B simulada" },
      { id: "C", text: "Alternativa C simulada" },
      { id: "D", text: "Alternativa D simulada" }
    ],
    correctOptionId: "C",
    explanation: "Explicación simulada: La respuesta correcta se deduce aplicando la lógica del relleno de datos."
  });
}