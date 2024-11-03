export const calcularDensidade = (
    sexo: string,
    idade: number,
    peso: number,
    triceps: number,
    peito: number,
    subAxilar: number,
    subEscapular: number,
    abdominal: number,
    supraIliaca: number,
    coxa: number
  ): number => {
    // Exemplo de cálculo simplificado, a fórmula real depende de mais variáveis e dados
    // Aqui você pode aplicar a regra de negócio conforme o sexo e idade do usuário
    let densidadeCorporal: number;
  
    // Calcule a soma das pregas cutâneas
    const somaPregas = triceps + peito + subAxilar + subEscapular + abdominal + supraIliaca + coxa;
  
    // Exemplo básico de cálculo: você pode substituir pela fórmula específica de acordo com as regras
    if (sexo === 'masculino') {
      densidadeCorporal = 1.10 - (0.0008 * somaPregas);
    } else {
      densidadeCorporal = 1.07 - (0.0007 * somaPregas);
    }
  
    return densidadeCorporal;
  };
  