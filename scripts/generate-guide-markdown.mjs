import { guide } from "../src/data/guide.ts";

const lines = [];

const add = (...items) => {
  for (const item of items) {
    lines.push(item);
  }
};

add(
  "---",
  'title: "Guia do Iniciante em Tecnologia"',
  'author: "DejotaCode"',
  'papersize: "a4"',
  "---",
  "",
  `# ${guide.hero.title}`,
  "",
  guide.hero.description,
  "",
  "## Antes de escolher ferramentas, organize o começo",
  ""
);

for (const paragraph of guide.expandedStart.introduction) {
  add(paragraph, "");
}

add(
  `### ${guide.expandedStart.objective.title}`,
  ""
);

for (const paragraph of guide.expandedStart.objective.paragraphs) {
  add(paragraph, "");
}

add("**Perguntas para definir seu primeiro objetivo**", "");

for (const question of guide.expandedStart.objective.questions) {
  add(`- ${question}`);
}

add(
  "",
  `### ${guide.expandedStart.path.title}`,
  ""
);

for (const paragraph of guide.expandedStart.path.paragraphs) {
  add(paragraph, "");
}

for (const option of guide.expandedStart.path.options) {
  add(
    `**${option.title}**`,
    "",
    option.description,
    ""
  );
}

add(
  `### ${guide.expandedStart.routine.title}`,
  ""
);

for (const paragraph of guide.expandedStart.routine.paragraphs) {
  add(paragraph, "");
}

add("**Exemplo de uma sessão curta de estudo**", "");

for (const item of guide.expandedStart.routine.example) {
  add(`- ${item}`);
}

add("");

add(
  "## Fundamentos que continuam úteis quando as ferramentas mudam",
  ""
);

for (const paragraph of guide.expandedCore.fundamentals.paragraphs) {
  add(paragraph, "");
}

for (const topic of guide.expandedCore.fundamentals.topics) {
  add(`### ${topic.title}`, "");

  for (const paragraph of topic.paragraphs) {
    add(paragraph, "");
  }
}

add(
  "## Transforme estudo em um primeiro projeto concluído",
  ""
);

for (const paragraph of guide.expandedCore.firstProject.paragraphs) {
  add(paragraph, "");
}

add("**Ideias de primeiro projeto**", "");

for (const idea of guide.expandedCore.firstProject.ideas) {
  add(
    `### ${idea.title}`,
    "",
    idea.description,
    ""
  );
}

add("**Checklist para considerar a primeira versão concluída**", "");

for (const item of guide.expandedCore.firstProject.finishChecklist) {
  add(`- [ ] ${item}`);
}

add(
  "",
  `## ${guide.expandedCore.mistakes.title}`,
  "",
  guide.expandedCore.mistakes.introduction,
  ""
);

for (const item of guide.expandedCore.mistakes.items) {
  add(
    `### ${item.title}`,
    "",
    item.description,
    ""
  );
}

add(
  `## ${guide.expandedFinal.ai.title}`,
  ""
);

for (const paragraph of guide.expandedFinal.ai.paragraphs) {
  add(paragraph, "");
}

add("**Exemplos de prompts para estudar melhor**", "");

for (const item of guide.expandedFinal.ai.prompts) {
  add(
    `### ${item.situation}`,
    "",
    `> ${item.prompt}`,
    ""
  );
}

add("**Antes de confiar em uma resposta da IA**", "");

for (const item of guide.expandedFinal.ai.verification) {
  add(`- [ ] ${item}`);
}

add(
  "",
  `## ${guide.expandedFinal.plan30Days.title}`,
  "",
  guide.expandedFinal.plan30Days.introduction,
  ""
);

for (const week of guide.expandedFinal.plan30Days.weeks) {
  add(
    `### ${week.label} — ${week.title}`,
    "",
    `**Objetivo:** ${week.goal}`,
    ""
  );

  for (const action of week.actions) {
    add(`- ${action}`);
  }

  add(
    "",
    `**Resultado esperado:** ${week.result}`,
    ""
  );
}

add("### Perguntas para revisar seus 30 dias", "");

for (const question of guide.expandedFinal.plan30Days.reviewQuestions) {
  add(`- ${question}`);
}

add(
  "",
  `## ${guide.expandedFinal.finalChecklist.title}`,
  ""
);

for (const group of guide.expandedFinal.finalChecklist.groups) {
  add(`### ${group.title}`, "");

  for (const item of group.items) {
    add(`- [ ] ${item}`);
  }

  add("");
}

add(
  `## ${guide.expandedFinal.closing.title}`,
  ""
);

for (const paragraph of guide.expandedFinal.closing.paragraphs) {
  add(paragraph, "");
}

add(
  "",
  "\\clearpage",
  "\\pagecolor{dejotacarbon}",
  "\\color{white}",
  "\\thispagestyle{empty}",
  "",
  "\\vspace*{1.4cm}",
  "",
  "\\begin{flushleft}",
  "",
  "\\includegraphics[width=2.1cm]{public/assets/brand/dejotacode-app-icon.png}",
  "",
  "\\vspace{2.0cm}",
  "",
  "{\\small\\bfseries\\color{dejotacyan}SEU PRÓXIMO PASSO}",
  "",
  "\\vspace{0.8cm}",
  "",
  "{\\Huge\\bfseries Continue construindo.}",
  "",
  "\\vspace{0.9cm}",
  "",
  "{\\Large Você não precisa aprender tudo. Precisa apenas saber qual é o próximo passo.}",
  "",
  "\\vspace{1.5cm}",
  "",
  "{\\large Escolha uma trilha, pratique com constância e transforme estudo em algo concreto.}",
  "",
  "\\vfill",
  "",
  `\\href{https://dejotacode.com.br${guide.nextStep.cta.href}}{\\Large\\bfseries\\color{dejotacyan}${guide.nextStep.cta.label} →}`,
  "",
  "\\vspace{1.8cm}",
  "",
  "{\\small\\color{dejotacyan}FEITO PARA QUEM CONSTRÓI O FUTURO.}",
  "",
  "\\vspace{0.3cm}",
  "",
  "{\\small dejotacode.com.br}",
  "",
  "\\end{flushleft}"
);
process.stdout.write(lines.join("\n"));
