Relógio digital simples desenvolvido em JavaScript com manipulação de DOM. A aplicação simula a passagem do tempo incrementando segundos, minutos e horas automaticamente a cada segundo.

O sistema utiliza `setInterval` para atualizar o relógio continuamente. Quando os segundos atingem 60, eles são resetados e os minutos são incrementados. O mesmo ocorre com os minutos em relação às horas. Os valores são formatados para sempre exibirem dois dígitos utilizando `padStart`, garantindo o formato padrão de relógios digitais.

## MVP

- Incremento automático do tempo a cada segundo
- Controle de segundos, minutos e horas
- Reset automático ao atingir 60 segundos ou 60 minutos
- Formatação do horário no padrão HH:MM:SS
- Atualização dinâmica do relógio na interface
