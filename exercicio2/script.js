const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
let minhaStringSemEspaco = minhaString.trim()
let minhaStringSubstituida = minhaStringSemEspaco.replaceAll("________", "sticioso")

console.log(`Frase antes da remoção dos espaços: ${minhaString}
Caracteres: ${minhaString.length}

A frase depois da remoção dos espaços: ${minhaStringSemEspaco}
Caracteres: ${minhaStringSemEspaco.length
}

A frase depois da substituição: ${minhaStringSubstituida}
`)