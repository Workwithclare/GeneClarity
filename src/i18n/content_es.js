/**
 * GeneClarity — catálogo de contenido en español (contenido largo, por registro).
 *
 * ─────────────────────────────────────────────────────────────────
 * Las claves reflejan `contentEn` exactamente (mismo conjunto, mismo
 * orden, carácter por carácter); la paridad se verifica con
 * `npm run i18n:check`. Escrito para este proyecto en el mismo
 * registro — lenguaje claro y primero la seguridad — que el texto en
 * inglés: sin diagnósticos, sin prescripciones, sin consejos de vida.
 *
 * Estado: traducción provisional pendiente de revisión profesional —
 * ver docs/06_ACCESSIBILITY_AND_I18N.md.
 * ─────────────────────────────────────────────────────────────────
 */

export const es = {
  // --- Resultados del tamizaje (Puntos clave / Informe) -----------
  'content.result.sickle-cell.summary':
    'Usted es portador del rasgo de células falciformes (HbAS).',
  'content.result.sickle-cell.plain':
    'Esto significa que usted lleva una copia del gen. Por lo general es sano y no causa la enfermedad de células falciformes.',
  'content.result.sickle-cell.forYou':
    'Llevar una copia alterada normalmente no afecta su propia salud. Algunas personas notan efectos leves bajo estrés físico extremo, lo cual vale la pena mencionarle a un médico.',
  'content.result.sickle-cell.forCouple':
    'Si su pareja también es portadora, hay una probabilidad en cada embarazo de que un hijo herede dos copias. Esta es una probabilidad, no una certeza, y lo mejor es comentarlo con un consejero genético usando ambos resultados.',

  'content.result.tay-sachs.summary':
    'No se detectó ninguna copia alterada en este tamizaje.',
  'content.result.tay-sachs.plain':
    'El tamizaje no encontró una copia alterada de este gen. Esto reduce la probabilidad de ser portador, pero ninguna prueba de tamizaje descarta por completo el estado de portador.',
  'content.result.tay-sachs.forYou':
    'No hay nada que deba hacer al respecto aquí. Un resultado de «no detectado» describe solo esta prueba, no todos los cambios posibles del gen.',
  'content.result.tay-sachs.forCouple':
    'Un resultado claro para una sola persona por sí mismo no describe a la pareja. El tamizaje es más informativo cuando se analiza a las dos personas.',

  'content.result.cystic-fibrosis.summary':
    'Se encontró un cambio, pero aún no se entiende su significado.',
  'content.result.cystic-fibrosis.plain':
    'Se encontró una diferencia en este gen. En este momento la evidencia científica no es lo suficientemente sólida para decir si afecta a la salud. Esto se llama una variante de significado incierto.',
  'content.result.cystic-fibrosis.forYou':
    'Un resultado incierto no es ni buena ni mala noticia — es información sin terminar. No debería cambiar ninguna decisión que tome sobre su salud.',
  'content.result.cystic-fibrosis.forCouple':
    'Los hallazgos inciertos deben ser interpretados por un profesional junto con el historial familiar completo. No los trate como un resultado de portador.',

  // --- Lecciones de aprendizaje ------------------------------------
  'content.learn.cells-chromosomes.title':
    'Comprender las células y los cromosomas',
  'content.learn.cells-chromosomes.excerpt':
    'Dónde se guardan las instrucciones de su cuerpo y cómo se empaquetan.',
  'content.learn.cells-chromosomes.mean.0':
    'Su cuerpo está construido con bloques de construcción diminutos llamados células. Casi todas las células llevan una copia completa de las instrucciones de su cuerpo.',
  'content.learn.cells-chromosomes.mean.1':
    'Esas instrucciones se empaquetan en estructuras en forma de barra llamadas cromosomas. La mayoría de las personas tiene 46 cromosomas en cada célula, ordenados en 23 pares.',
  'content.learn.cells-chromosomes.mean.2':
    'Un cromosoma de cada par proviene de su madre biológica y el otro de su padre biológico.',
  'content.learn.cells-chromosomes.mean.3':
    'Los genes se encuentran a lo largo de los cromosomas, como capítulos alineados en un estante.',
  'content.learn.cells-chromosomes.example':
    'Piense en una célula como una biblioteca: los cromosomas son los estantes y los genes son los libros individuales que hay en ellos.',
  'content.learn.cells-chromosomes.remember.0':
    'Casi todas las células guardan una copia completa de sus instrucciones.',
  'content.learn.cells-chromosomes.remember.1':
    'Esas instrucciones se empaquetan como 46 cromosomas en 23 pares.',
  'content.learn.cells-chromosomes.remember.2':
    'Recibe uno de cada par de cada padre biológico.',

  'content.learn.dna-genes.title': 'Comprender el ADN y los genes',
  'content.learn.dna-genes.excerpt':
    'Qué es el ADN, qué hace un gen y por qué las versiones difieren.',
  'content.learn.dna-genes.mean.0':
    'El ADN es la molécula que lleva las instrucciones. Se parece a una escalera retorcida y a menudo se dibuja como una doble hélice.',
  'content.learn.dna-genes.mean.1':
    'Un gen es una sección corta de ADN con una tarea específica: la receta de una sola proteína, uno de los pequeños trabajadores que se construyen dentro de sus células.',
  'content.learn.dna-genes.mean.2':
    'Los humanos tienen alrededor de 20,000 genes distribuidos a lo largo de sus cromosomas.',
  'content.learn.dna-genes.mean.3':
    'Los genes vienen en versiones ligeramente diferentes. La mayoría de las diferencias de versión no tienen efecto en la salud; unas pocas están vinculadas con condiciones heredadas.',
  'content.learn.dna-genes.misunderstanding':
    'Un gen rara vez controla una característica o una enfermedad por sí solo. La mayoría de las características y condiciones involucran varios genes junto con las circunstancias de vida.',
  'content.learn.dna-genes.remember.0':
    'El ADN es la molécula de las instrucciones; los genes son secciones cortas de él.',
  'content.learn.dna-genes.remember.1':
    'Cada gen tiene una tarea principal en sus células.',
  'content.learn.dna-genes.remember.2':
    'Los genes vienen en versiones, y la mayoría de las diferencias de versión son inofensivas.',

  'content.learn.inheritance.title':
    'Cómo pasa la información genética de los padres a los hijos',
  'content.learn.inheritance.excerpt':
    'Por qué los hijos heredan una mezcla de ambos padres biológicos.',
  'content.learn.inheritance.mean.0':
    'Cuando una madre biológica y un padre biológico tienen un hijo, cada uno transmite una copia de cada gen.',
  'content.learn.inheritance.mean.1':
    'El hijo tiene por lo tanto dos copias de cada gen — una de cada lado de la familia.',
  'content.learn.inheritance.mean.2':
    'Como cada padre puede transmitir una versión diferente, los hermanos reciben combinaciones diferentes. Por eso los hermanos se parecen pero no son idénticos.',
  'content.learn.inheritance.mean.3':
    'Algunas condiciones siguen un patrón claro de herencia; otras dependen de muchos genes y de las circunstancias de vida.',
  'content.learn.inheritance.example':
    'Si ambos padres transmiten la misma versión que funciona, el hijo tiene dos versiones que funcionan. Si ambos transmiten la misma versión alterada, el hijo tiene dos versiones alteradas.',
  'content.learn.inheritance.remember.0':
    'Recibe una copia de cada gen de cada padre biológico.',
  'content.learn.inheritance.remember.1':
    'Los hermanos heredan combinaciones diferentes.',
  'content.learn.inheritance.remember.2':
    'El patrón de herencia es lo que da forma a las probabilidades de una condición.',

  'content.learn.inherited-conditions.title':
    'Comprender las condiciones heredadas',
  'content.learn.inherited-conditions.excerpt':
    'Qué significa «heredado» — y qué no significa.',
  'content.learn.inherited-conditions.mean.0':
    'Una condición heredada es aquella causada principalmente por cambios en genes transmitidos desde un padre biológico.',
  'content.learn.inherited-conditions.mean.1':
    'Algunas condiciones heredadas están presentes desde el nacimiento; otras aparecen más tarde en la vida; y algunas nunca causan problemas.',
  'content.learn.inherited-conditions.mean.2':
    '«Heredado» describe la causa, no la gravedad. Dos personas con la misma condición pueden verse afectadas de manera muy diferente.',
  'content.learn.inherited-conditions.mean.3':
    'Un historial familiar de una condición muestra un patrón que vale la pena comprender — no es una predicción sobre usted.',
  'content.learn.inherited-conditions.important':
    'Heredado no significa inevitable. Llevar un gen alterado no significa automáticamente que desarrollará la condición, y un historial familiar no significa que le sucederá a usted.',
  'content.learn.inherited-conditions.remember.0':
    'Las condiciones heredadas son causadas principalmente por cambios en genes transmitidos por un padre.',
  'content.learn.inherited-conditions.remember.1':
    'No es culpa de nadie.',
  'content.learn.inherited-conditions.remember.2':
    'Un historial familiar muestra un patrón, no una certeza.',

  'content.learn.sickle-cell.title': 'Comprender las células falciformes',
  'content.learn.sickle-cell.excerpt':
    'Qué significa el rasgo de células falciformes para la salud y para una pareja.',
  'content.learn.sickle-cell.mean.0':
    'Las células falciformes están relacionadas con el gen HBB, que ayuda a producir hemoglobina — la parte de la sangre que lleva oxígeno por todo su cuerpo.',
  'content.learn.sickle-cell.mean.1':
    'Con el rasgo de células falciformes usted tiene una copia alterada y una copia que funciona. La mayoría de las personas con el rasgo viven vidas normales y sanas.',
  'content.learn.sickle-cell.mean.2':
    'Con la enfermedad de células falciformes usted tiene dos copias alteradas, que pueden causar problemas de salud graves.',
  'content.learn.sickle-cell.mean.3':
    'Donde la enfermedad de células falciformes es más común, se ofrece de forma rutinaria el tamizaje del rasgo.',
  'content.learn.sickle-cell.misunderstanding':
    'Tener el rasgo de células falciformes no es lo mismo que tener la enfermedad de células falciformes. Un resultado de portador no significa que usted esté enfermo.',
  'content.learn.sickle-cell.important':
    'En situaciones muy raras — esfuerzo físico muy intenso, oxígeno bajo o deshidratación — los portadores del rasgo pueden tener complicaciones. Vale la pena mencionar el rasgo a un médico antes de un entrenamiento intenso o una actividad en altitud elevada.',
  'content.learn.sickle-cell.screening':
    'El tamizaje del rasgo de células falciformes es una prueba común y bien establecida. Muestra una probabilidad para una pareja, no un diagnóstico para ningún embarazo en particular — esa es una conversación para un consejero genético.',
  'content.learn.sickle-cell.remember.0':
    'El rasgo de células falciformes significa una copia alterada del HBB — la mayoría de los portadores está sana.',
  'content.learn.sickle-cell.remember.1':
    'La enfermedad de células falciformes significa dos copias alteradas.',
  'content.learn.sickle-cell.remember.2':
    'El tamizaje no es un diagnóstico; hable de su resultado con un profesional.',

  'content.learn.carrier-status.title': 'Comprender el estado de portador',
  'content.learn.carrier-status.excerpt':
    'Qué significa llevar una copia alterada de un gen.',
  'content.learn.carrier-status.mean.0':
    'La mayoría de las personas tiene dos copias de cada gen — una de cada padre biológico.',
  'content.learn.carrier-status.mean.1':
    'Un portador tiene una copia que difiere de la versión habitual y una copia que funciona. La copia que funciona hace el trabajo, así que los portadores generalmente están sanos y normalmente no tienen idea de que llevan un cambio.',
  'content.learn.carrier-status.mean.2':
    'Esto importa porque dos portadores de la misma condición recesiva pueden, juntos, tener un hijo que herede dos copias alteradas.',
  'content.learn.carrier-status.mean.3':
    'Ser portador es muy común. No es una falta, una enfermedad ni un motivo de vergüenza.',
  'content.learn.carrier-status.example':
    'Una copia que funciona basta para que las cosas sigan funcionando — como una lámpara que aún ilumina la sala con una sola bombilla que funciona.',
  'content.learn.carrier-status.misunderstanding':
    'Ser portador no es lo mismo que estar enfermo. El estado de portador no dice nada malo sobre su propia salud.',
  'content.learn.carrier-status.remember.0':
    'Un portador tiene una copia alterada y una copia que funciona.',
  'content.learn.carrier-status.remember.1':
    'Los portadores generalmente están sanos y a menudo no saben que llevan un cambio.',
  'content.learn.carrier-status.remember.2':
    'El estado de portador importa más cuando ambos miembros de la pareja llevan cambios en el mismo gen.',

  'content.learn.probabilities.title':
    'Comprender las probabilidades de enfermedades heredadas',
  'content.learn.probabilities.excerpt':
    'Qué significan realmente cifras como el 25 % — y qué no significan.',
  'content.learn.probabilities.mean.0':
    'Una probabilidad es una posibilidad, no una predicción. Describe con qué frecuencia ocurre un resultado en muchos escenarios posibles — no lo que le sucederá a una sola persona.',
  'content.learn.probabilities.mean.1':
    'Cuando ambos padres biológicos llevan una copia alterada del mismo gen, cada embarazo conlleva una probabilidad independiente de que el hijo herede dos copias alteradas.',
  'content.learn.probabilities.mean.2':
    'Para muchas condiciones recesivas esa probabilidad es del 25 %, pero la cifra exacta depende de la condición específica y debe confirmarse para su propia situación.',
  'content.learn.probabilities.mean.3':
    'La probabilidad se aplica de nuevo en cada embarazo. No se acumula, no se promedia ni se agota.',
  'content.learn.probabilities.example':
    'Imagine cuatro resultados igual de probables, como cuatro cajas idénticas con una marcada. Cada embarazo abre un conjunto nuevo de cuatro cajas — la marca de la vez anterior no se traslada.',
  'content.learn.probabilities.misunderstanding':
    'Una probabilidad del 25 % no significa que exactamente uno de cada cuatro de sus hijos se verá afectado. Significa que, en un número muy grande de situaciones similares, aproximadamente una cuarta parte de los resultados serían hijos afectados.',
  'content.learn.probabilities.screening':
    'El tamizaje le dice qué probabilidades le aplican a usted como pareja. No puede predecir qué ocurrirá en un embarazo en particular — esa es una pregunta para un consejero genético con ambos resultados en mano.',
  'content.learn.probabilities.remember.0':
    'Una probabilidad es una posibilidad, no una predicción.',
  'content.learn.probabilities.remember.1':
    'Cada embarazo tiene su propia probabilidad independiente.',
  'content.learn.probabilities.remember.2':
    'Confirme las cifras exactas de su condición con un consejero genético cualificado.',

  'content.learn.screening-counselling.title':
    'Comprender el tamizaje y el asesoramiento genético profesional',
  'content.learn.screening-counselling.excerpt':
    'Qué puede y qué no puede decirle un tamizaje, y quién lo explica.',
  'content.learn.screening-counselling.mean.0':
    'El tamizaje comprueba si usted lleva cambios vinculados con ciertas condiciones heredadas. Es un punto de partida para una conversación, no un diagnóstico.',
  'content.learn.screening-counselling.mean.1':
    'Un resultado de tamizaje de portador o positivo no es un diagnóstico de enfermedad — es información sobre probabilidades que normalmente requiere confirmación e interpretación.',
  'content.learn.screening-counselling.mean.2':
    'Un consejero genético es un profesional capacitado que explica los resultados de las pruebas, los patrones de herencia y lo que significan para usted y su pareja.',
  'content.learn.screening-counselling.mean.3':
    'Un consejero no le dice qué hacer. Se asegura de que usted entienda bien sus opciones para decidir por sí mismo.',
  'content.learn.screening-counselling.questions.0':
    '¿Para qué condiciones se me hizo el tamizaje?',
  'content.learn.screening-counselling.questions.1':
    '¿Qué significa mi resultado para mi pareja?',
  'content.learn.screening-counselling.questions.2':
    '¿Cuáles son mis opciones y qué me recomendaría leer?',
  'content.learn.screening-counselling.remember.0':
    'El tamizaje no es un diagnóstico; describe probabilidades.',
  'content.learn.screening-counselling.remember.1':
    'Los consejeros explican los resultados — las decisiones siguen siendo suyas.',
  'content.learn.screening-counselling.remember.2':
    'Traiga sus preguntas; no necesita llegar con respuestas.',

  // --- Recorrido: Entender mis resultados -------------------------
  'content.understand.screening-vs-diagnosis.title':
    'El tamizaje no es un diagnóstico',
  'content.understand.screening-vs-diagnosis.body.0':
    'Una prueba de tamizaje busca si usted lleva cambios vinculados con ciertas condiciones heredadas. Está hecha para iniciar una conversación, no para confirmar ni descartar una enfermedad.',
  'content.understand.screening-vs-diagnosis.body.1':
    'Un resultado de tamizaje «portador» o positivo no es un diagnóstico de enfermedad. Las pruebas de confirmación y la interpretación profesional suelen preceder a cualquier conclusión médica.',
  'content.understand.screening-vs-diagnosis.body.2':
    'Un resultado de «no detectado» reduce la probabilidad de llevar los cambios que se analizaron — pero ninguna prueba de tamizaje descarta por completo el estado de portador.',
  'content.understand.carrier-vs-disease.title':
    'El estado de portador no es lo mismo que la enfermedad',
  'content.understand.carrier-vs-disease.body.0':
    'Un portador tiene una copia alterada de un gen y una copia que funciona. La copia que funciona hace su trabajo, así que los portadores generalmente están sanos y a menudo no saben que llevan un cambio.',
  'content.understand.carrier-vs-disease.body.1':
    'Muchas condiciones heredadas solo aparecen cuando una persona hereda dos copias alteradas del mismo gen — una de cada padre biológico.',
  'content.understand.carrier-vs-disease.body.2':
    'Ser portador es común y no es culpa de nadie. Describe una posibilidad para discutir con un profesional — no es una enfermedad, ni una predicción sobre su propia salud.',

  'content.label.negative.label': 'No detectado / negativo',
  'content.label.negative.desc':
    'No se encontraron los cambios que se analizaron en este tamizaje. Esto reduce la probabilidad de llevar esos cambios específicos; no garantiza que no lleve ninguno en absoluto.',
  'content.label.carrier.label': 'Portador / positivo',
  'content.label.carrier.desc':
    'Se encontró una copia alterada del gen. Esto normalmente no afecta su propia salud, y importa principalmente porque dos portadores del mismo gen pueden hablar juntos de sus probabilidades.',
  'content.label.uncertain.label': 'Incierto',
  'content.label.uncertain.desc':
    'Se encontró una diferencia, pero la evidencia actual no es lo suficientemente sólida para decir qué significa. Esto no es ni buena ni mala noticia — es información sin terminar que un profesional debería leer junto con su historial familiar.',

  'content.boundary':
    'GeneClarity no diagnostica, clasifica ni interpreta médicamente de forma automática los documentos que usted sube. Esta sección solo explica terminología general.',
  'content.futureAi':
    'Si alguna vez se añade la interpretación de documentos, será una función separada que requiera su consentimiento explícito, validación clínica y supervisión profesional. No forma parte de este prototipo.',
  'content.counselling':
    'Un consejero genético es un profesional capacitado que explica los resultados de las pruebas, los patrones de herencia y lo que significan para usted y su pareja — sin decirle qué hacer. La decisión sigue siendo suya.',

  // --- Recorrido: Orientación profesional -------------------------
  'content.useful.0': 'Recibió un resultado o un documento que no comprende.',
  'content.useful.1':
    'Usted y su pareja tienen resultados de tamizaje que considerar juntos.',
  'content.useful.2': 'Un resultado fue reportado como incierto.',
  'content.useful.3':
    'Una condición se da en su familia y usted quiere comprender qué puede significar eso.',
  'content.useful.4':
    'Quiere que las cifras se expliquen para su propia situación, no en general.',

  'content.question.0': '¿Para qué condiciones se me hizo el tamizaje?',
  'content.question.1': '¿Qué significa exactamente mi resultado?',
  'content.question.2': '¿Mi resultado necesita una prueba de confirmación?',
  'content.question.3': '¿Qué significa mi resultado para mi pareja?',
  'content.question.4': '¿Cuáles son las probabilidades, en cifras, para nuestra situación?',
  'content.question.5':
    '¿Qué opciones tenemos y qué nos recomendaría leer?',
  'content.question.6': '¿Debería hacerse la prueba alguien más de mi familia?',
  'content.question.7': '¿Cómo y cuándo debería retomarse esta información?',

  // --- Recorrido: documento de muestra ----------------------------
  'content.sample.badge': 'Muestra de demostración',
  'content.sample.title': 'Informe de tamizaje sintético',
  'content.sample.note':
    'Este es un documento sintético original creado para esta demostración. No es un informe real, no contiene datos reales de pacientes y no es un registro médico.',
  'content.sample.field.prepared.label': 'Preparado para',
  'content.sample.field.prepared.value': 'Persona de muestra (ficticia)',
  'content.sample.field.issued.label': 'Emitido por',
  'content.sample.field.issued.value': 'Laboratorio de demostración (ficticio)',
  'content.sample.field.reference.label': 'Referencia',
  'content.sample.field.reference.value': 'GC-DEMO-0001',
  'content.sample.field.date.label': 'Fecha',
  'content.sample.field.date.value': '15 ene. 2026',
  'content.sample.row.HBB.finding': 'Rasgo de células falciformes (HbAS)',
  'content.sample.row.HBB.plain':
    'Se encontró una copia alterada. Los portadores generalmente están sanos.',
  'content.sample.row.HEXA.finding': 'No se detectó ningún cambio',
  'content.sample.row.HEXA.plain':
    'El cambio que se analizó no se encontró en este tamizaje.',
  'content.sample.row.CFTR.finding': 'Cambio de significado incierto',
  'content.sample.row.CFTR.plain':
    'Se encontró una diferencia; aún no se entiende su significado.',
  'content.sample.footer':
    'Resultado de tamizaje — no es un diagnóstico. Discuta este documento con un profesional de la salud cualificado. (Documento de demostración; datos sintéticos.)',

  // --- Notificaciones ---------------------------------------------
  'content.notify.ntf_01.title': 'Su informe de muestra está listo',
  'content.notify.ntf_01.body':
    'Abra su informe para leer el resumen en lenguaje claro.',
  'content.notify.ntf_02.title': 'Ninguna pareja tiene acceso',
  'content.notify.ntf_02.body':
    'Sus registros son privados hasta que usted conceda el acceso de forma personal.',
  'content.notify.ntf_03.title':
    'Nuevo tema: comprender las probabilidades de enfermedades heredadas',
  'content.notify.ntf_03.body':
    'Una lectura breve sobre lo que realmente significan cifras como el 25 %.',

  // --- Directorio de consejeros (solo ilustrativo) -----------------
  'content.counsellor.cns_01.name': 'Dr. Amara Okonkwo',
  'content.counsellor.cns_01.role': 'Consejero genético registrado',
  'content.counsellor.cns_01.focus':
    'Tamizaje de portadores, asesoramiento a parejas',
  'content.counsellor.cns_02.name': 'Dr. Yusuf Haddad',
  'content.counsellor.cns_02.role': 'Consejero genético clínico',
  'content.counsellor.cns_02.focus':
    'Riesgo reproductivo, interpretación de resultados',
  'content.counsellor.cns_03.name': 'Sara Mendez, MS, CGC',
  'content.counsellor.cns_03.role': 'Consejero genético certificado',
  'content.counsellor.cns_03.focus':
    'Resultados inciertos, historial familiar',

  // --- Registro de actividad (semilla + tiempo de ejecución) ------
  'content.act.reportViewed':
    'Se abrieron los Puntos clave de 3 hallazgos de muestra.',
  'content.act.signedIn': 'Inicio de sesión en este dispositivo.',
  'content.act.languageChanged':
    'Idioma de visualización establecido en español.',
  'content.act.consentAccepted':
    'Se aceptó el aviso de privacidad y consentimiento.',
  'content.act.inviteSent':
    'Se envió una invitación a una pareja. Aún no se compartió nada.',
  'content.act.grantAccess':
    'Se concedió el acceso a la pareja ({n} categorías).',
  'content.act.revokeAccess':
    'Se revocó el acceso a la pareja. Se detuvo el acceso futuro.',
  'content.act.clearPartner':
    'Se eliminó la conexión con la pareja por completo.',
  'content.act.settingChanged':
    'El ajuste «{key}» cambió a {value}.',
}
