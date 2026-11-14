/**
 * GeneClarity — Spanish catalogue.
 *
 * Keys mirror `en` exactly (parity is checked in docs). Written for this
 * project in the same plain-language, safety-first register as the
 * English copy: no diagnosis, no prescription, no life advice.
 *
 * Status: provisional translation pending professional review —
 * see docs/06_ACCESSIBILITY_AND_I18N.md.
 */

export const es = {
  // --- Marca -------------------------------------------------------
  'brand.tagline': 'Comprender y reducir el riesgo de enfermedades heredadas.',
  'brand.promise1': 'Saber más.',
  'brand.promise2': 'Planificar mejor.',
  'brand.promiseSub': 'Información clara y sencilla sobre su salud genética.',
  'brand.line': 'GENÉTICA · COMPRENSIÓN · ELECCIÓN',

  // --- Acciones genéricas --------------------------------------------
  'act.getStarted': 'Comenzar',
  'act.signIn': 'Iniciar sesión',
  'act.signUp': 'Registrarse',
  'act.signOut': 'Cerrar sesión',
  'act.next': 'Siguiente',
  'act.back': 'Atrás',
  'act.continue': 'Continuar',
  'act.cancel': 'Cancelar',
  'act.save': 'Guardar',
  'act.close': 'Cerrar',
  'act.learnMore': 'Más información',
  'act.viewReport': 'Ver informe',
  'act.downloadPdf': 'Descargar PDF',
  'act.getSupport': 'Obtener ayuda',
  'act.goToDashboard': 'Ir al panel',
  'act.tryAgain': 'Reintentar',
  'act.skip': 'Omitir',
  'act.viewAll': 'Ver todo',

  // --- Pantalla de inicio ---------------------------------------------
  'splash.loading': 'Cargando…',
  'splash.notice': 'Prototipo de demostración',

  // --- Introducción ----------------------------------------------------
  'onb.whatTitle': '¿Qué es GeneClarity?',
  'onb.whatBody':
    'GeneClarity le ayuda a comprender su información genética de forma sencilla y responsable.',
  'onb.f1': 'Conocer los posibles riesgos heredados',
  'onb.f2': 'Recibir información fiable sobre la salud',
  'onb.f3': 'Conocer sus opciones',
  'onb.step': 'Paso',
  'onb.of': 'de',
  'onb.privacyTitle': 'Su información sigue siendo suya',
  'onb.privacyBody':
    'Sus datos son privados de forma predeterminada. Nada llega a una pareja sin su consentimiento explícito, que puede retirar en cualquier momento.',
  'onb.p1': 'Cuentas privadas y separadas',
  'onb.p2': 'Se requiere consentimiento para compartir',
  'onb.p3': 'Retire el acceso cuando quiera',
  'onb.safetyTitle': 'Consejos, no un diagnóstico',
  'onb.safetyBody':
    'GeneClarity explica la información de tamizaje en un lenguaje claro. No emite diagnósticos, no receta tratamientos y no le dice qué decidir.',
  'onb.s1': 'Explicaciones en lenguaje claro',
  'onb.s2': 'La incertidumbre se muestra con honestidad',
  'onb.s3': 'Le deriva a consejeros reales',

  // --- Consentimiento ---------------------------------------------------
  'consent.title': 'Privacidad y consentimiento',
  'consent.lead':
    'Antes de continuar, confirme cómo puede utilizarse su información.',
  'consent.c1t': 'Sus resultados siguen siendo privados',
  'consent.c1b':
    'La información de tamizaje pertenece solo a su cuenta. Nadie la ve salvo que usted decida compartirla.',
  'consent.c2t': 'Compartir sigue siendo siempre su elección',
  'consent.c2b':
    'Una pareja nunca puede abrir sus datos automáticamente. Usted concede el acceso de forma explícita y puede retirarlo en cualquier momento.',
  'consent.c3t': 'Esto no es un diagnóstico',
  'consent.c3b':
    'GeneClarity ofrece información educativa. No diagnostica enfermedades, no receta tratamientos y no sustituye a un médico ni a un consejero genético.',
  'consent.c4t': 'Solo datos de demostración',
  'consent.c4b':
    'Este prototipo usa registros de origen claramente etiquetados. No se utiliza ningún dato real de pacientes.',
  'consent.agree': 'He leído y acepto',
  'consent.decline': 'Rechazar y salir',
  'consent.required': 'Marque la casilla para continuar.',
  'consent.declinedTitle': 'Eligió no continuar',
  'consent.declinedBody':
    'Es una decisión totalmente razonable. No se guardó nada y puede volver cuando desee.',

  // --- Autenticación -----------------------------------------------------
  'auth.welcomeBack': 'Bienvenido de nuevo',
  'auth.signInToContinue': 'Inicie sesión para continuar',
  'auth.email': 'Correo electrónico',
  'auth.password': 'Contraseña',
  'auth.confirmPassword': 'Confirmar contraseña',
  'auth.fullName': 'Nombre completo',
  'auth.remember': 'Recordarme',
  'auth.forgot': '¿Olvidó su contraseña?',
  'auth.forgotNote':
    'El restablecimiento de contraseña no está conectado en este prototipo: no se enviará ningún correo. En un servicio real, le enviaríamos un enlace de restablecimiento.',
  'auth.or': 'o',
  'auth.continueGoogle': 'Continuar con Google',
  'auth.continueApple': 'Continuar con Apple',
  'auth.socialDemo':
    'El inicio de sesión social no está conectado en este prototipo: los botones se muestran solo como diseño.',
  'auth.errInvalid': 'El correo o la contraseña no coinciden.',
  'auth.errEmailTaken': 'Ya existe una cuenta con ese correo.',
  'auth.errNetwork':
    'No se pudo contactar con el servicio de inicio de sesión. Compruebe su conexión e inténtelo de nuevo.',
  'auth.errGeneric': 'Algo salió mal. Inténtelo de nuevo.',
  'auth.errConfirm':
    'Revise su bandeja de entrada: le hemos enviado un enlace de confirmación.',
  'auth.backendTitle': 'Cuenta segura',
  'auth.backendBody':
    'Las cuentas se crean y se almacenan con Supabase Authentication. No se envía nada a ningún otro servicio.',
  'auth.checkInbox':
    'Casi listo: abra el enlace que le enviamos por correo y luego inicie sesión.',
  'auth.working': 'Un momento…',
  'auth.createTitle': 'Crear una cuenta',
  'auth.createSub': 'Únase a GeneClarity hoy mismo',
  'auth.noAccount': '¿Aún no tiene cuenta?',
  'auth.hasAccount': '¿Ya tiene una cuenta?',
  'auth.terms': 'Acepto los términos y la política de privacidad',
  'auth.demoBody':
    'No se crea ninguna cuenta real. Use cualquier credencial para explorar el prototipo o cargue la cuenta de ejemplo de abajo.',
  'auth.demoFill': 'Usar la cuenta de ejemplo',
  'auth.errEmail': 'Escriba su correo electrónico.',
  'auth.errEmailShape': 'Esto no parece una dirección de correo.',
  'auth.errPassword': 'Escriba su contraseña.',
  'auth.errPasswordShort': 'La contraseña debe tener al menos 6 caracteres.',
  'auth.errName': 'Escriba su nombre.',
  'auth.errMatch': 'Las contraseñas no coinciden.',
  'auth.errTerms': 'Acepte los términos para continuar.',
  'auth.show': 'Mostrar contraseña',
  'auth.hide': 'Ocultar contraseña',

  // --- Panel --------------------------------------------------------------
  'dash.hello': 'Hola,',
  'dash.companion': 'Su compañero de salud genética',
  'dash.journey': 'Su camino de salud',
  'dash.journeySub': 'Explore sus referencias y reciba consejos personalizados.',
  'dash.quickAccess': 'Acceso rápido',
  'dash.myReport': 'Mi informe',
  'dash.healthTips': 'Consejos de salud',
  'dash.faqs': 'Preguntas frecuentes',
  'dash.settings': 'Ajustes',
  'dash.home': 'Inicio',
  'dash.report': 'Informe',
  'dash.tips': 'Consejos',
  'dash.profile': 'Perfil',
  'dash.coupleCard': 'CoupleConnect',
  'dash.coupleSub':
    'Explore juntos lo que significan sus datos de tamizaje, con consentimiento.',

  // --- Informe ---------------------------------------------------------------
  'rep.title': 'Su informe genético',
  'rep.allSet': '¡Todo listo!',
  'rep.ready': 'Su informe está listo.',
  'rep.note':
    'Nota: esto es un resumen educativo, no un diagnóstico médico.',
  'rep.sampleTag': 'DATOS DE DEMOSTRACIÓN',
  'rep.none': 'Aún no se ha añadido ningún informe.',
  'rep.summary': 'Resumen',
  'rep.carrierCount': 'Resultados de portador',
  'rep.testedCount': 'Enfermedades tamizadas',
  'rep.updated': 'Última actualización',
  'rep.disclaimer':
    'Estas cifras describen un registro de demostración creado para este prototipo. No son resultados clínicos.',

  // --- Detalle del resultado ---------------------------------------------------
  'res.keyInsights': 'Puntos clave',
  'res.carrierStatus': 'Estado de portador',
  'res.whatThisMeans': 'Qué significa esto',
  'res.notCarried': 'No detectado como portador',
  'res.uncertain': 'Variante de significado incierto',
  'res.plainTitle': 'En lenguaje claro',
  'res.forCouple': 'Qué significa esto para una pareja',
  'res.uncertainTitle': 'Acerca de la incertidumbre',
  'res.uncertainBody':
    'Algunos resultados no son claros. «Incierto» significa que la información no se entiende lo suficiente como para sacar una conclusión; no significa que algo esté mal.',
  'res.nextSteps': 'Pasos sugeridos',
  'res.step1': 'Lea la explicación en lenguaje claro de esta página.',
  'res.step2': 'Lleve estos resultados a su médico o a un consejero genético.',
  'res.step3': 'Evite tomar decisiones de salud basándose solo en esta pantalla.',
  'res.safety':
    'GeneClarity explica información. No emite diagnósticos.',
  'res.glossary': 'Palabras usadas en esta página',
  'res.gCarrier': 'Portador',
  'res.gCarrierDef':
    'Persona que lleva una copia alterada de un gen y generalmente no padece la enfermedad.',
  'res.gRecessive': 'Enfermedad recesiva',
  'res.gRecessiveDef':
    'Enfermedad que generalmente solo aparece cuando una persona hereda dos copias alteradas del mismo gen.',
  'res.gVariant': 'Variante',
  'res.gVariantDef':
    'Una diferencia en una secuencia de ADN. Algunas no tienen efecto; otras importan para la salud.',

  // --- Aprendizaje / educación ------------------------------------------------
  'learn.title': 'Aprender',
  'learn.subtitle':
    'Explicaciones claras sobre enfermedades heredadas y el vocabulario del tamizaje.',
  'learn.search': 'Buscar temas…',
  'learn.all': 'Todo',
  'learn.basics': 'Lo básico',
  'learn.conditions': 'Enfermedades',
  'learn.counselling': 'Asesoramiento genético',
  'learn.readTime': 'min de lectura',
  'learn.empty': 'Ningún tema coincide con esa búsqueda.',
  'learn.educationOnly':
    'Solo contenido educativo. Es información general, no consejo sobre su propia salud.',
  'learn.related': 'Temas relacionados',
  'learn.whatMean': '¿Qué significa esto?',
  'learn.remember': '¿Qué debo recordar?',
  'learn.important': 'Importante saber',
  'learn.misunderstanding': 'Malentendido común',
  'learn.example': 'Ejemplo',
  'learn.screeningMean': 'Qué significa esto para el tamizaje',
  'learn.questions':
    'Preguntas que tal vez quiera hacer a un profesional de la salud',

  // --- Preguntas frecuentes -------------------------------------------------------
  'faq.title': 'Preguntas frecuentes',
  'faq.search': 'Buscar en las preguntas frecuentes…',
  'faq.noResults': 'Ninguna pregunta coincide con su búsqueda.',
  'faq.safety':
    'Las respuestas son información educativa general, no consejo sobre su propia salud.',
  'faq.helpTitle': '¿Necesita más ayuda?',
  'faq.helpBody': 'Hable con un consejero genético.',
  'faq.q1': '¿Qué es un portador?',
  'faq.a1':
    'Un portador tiene una copia alterada de un gen. La mayoría de los portadores sanos nunca lo saben. Cuando dos portadores tienen un hijo juntos, es cuando una enfermedad recesiva puede ser relevante.',
  'faq.q2': '¿Cuáles son los riesgos?',
  'faq.a2':
    'El riesgo depende de los resultados de ambas personas y de la enfermedad específica. Se expresa como un rango o una fracción, nunca como una certeza. Un consejero genético puede explicarle las cifras de su situación.',
  'faq.q3': '¿Puedo transmitírselo a mi hijo?',
  'faq.a3':
    'Potencialmente, y exactamente para eso sirve el tamizaje. El patrón depende de ambos padres. Es una pregunta para un consejero cualificado que pueda ver los dos expedientes.',
  'faq.q4': '¿Debo ver a un médico?',
  'faq.a4':
    'Si un resultado le preocupa, sí. GeneClarity está diseñada para ayudarle a preparar esa conversación, no para sustituirla.',

  // --- CoupleConnect --------------------------------------------------------------
  'cc.title': 'CoupleConnect',
  'cc.lead':
    'Explore lo que pueden significar sus datos de tamizaje combinados, solo con el consentimiento completo de ambas personas.',
  'cc.noPartner': 'Ninguna pareja conectada',
  'cc.noPartnerBody':
    'El acceso de una pareja comienza con una invitación explícita. No se comparte nada hasta que ambos estén de acuerdo.',
  'cc.invite': 'Invitar a una pareja',
  'cc.inviteBody':
    'Invite a su pareja. Nada le es visible hasta que usted conceda el acceso, y puede retirarlo en cualquier momento.',
  'cc.partnerEmail': 'Correo de la pareja',
  'cc.partnerEmailHint':
    'Debe tener su propia cuenta de GeneClarity. Una invitación, por sí sola, no comparte nada.',
  'cc.noAccountFound':
    'No se encontró ninguna cuenta de GeneClarity con ese correo.',
  'cc.inviteWorking': 'Invitando…',
  'cc.yourConsent': 'Su consentimiento para compartir',
  'cc.manageConsent': 'Gestionar qué comparto',
  'cc.statusNone': 'No se comparte nada',
  'cc.statusPending': 'Invitación pendiente',
  'cc.statusActive': 'Intercambio activo',
  'cc.statusRevoked': 'Acceso revocado',
  'cc.revoke': 'Revocar el acceso futuro',
  'cc.revokeConfirm':
    'Su pareja perderá de inmediato el acceso a todo lo compartido. Conserva su propia cuenta.',
  'cc.whatPartnerSees': 'Lo que vería mi pareja',
  'cc.seesConsent':
    'Solo las categorías que usted active. Nada más.',
  'cc.seesNoChart': 'Su informe completo nunca se muestra de forma predeterminada.',
  'cc.ruleTitle': 'Cómo funciona el intercambio',
  'cc.rule1': 'Cada persona tiene su propia cuenta privada.',
  'cc.rule2': 'No se comparte nada sin el consentimiento de ambas partes.',
  'cc.rule3': 'Cualquiera puede retirar su consentimiento en cualquier momento.',
  'cc.rule4':
    'La revocación bloquea el acceso futuro; no borra lo que ya se vio legítimamente.',
  'cc.bothConsent':
    'Ambas parejas deben consentir antes de cualquier intercambio.',
  'cc.demoPartner': 'Pareja de demostración',
  'cc.combinedTitle': 'Vista combinada',
  'cc.combinedBody':
    'Cuando ambos expedientes se comparten, GeneClarity puede mostrar los estados de portador comunes. Es información educativa para conversar con un consejero, no un veredicto de compatibilidad.',
  'cc.never':
    'GeneClarity no le dice a nadie si debe casarse o tener hijos.',

  // --- Consentimiento de la pareja --------------------------------------------------
  'pc.title': 'Consentimiento de la pareja',
  'pc.lead':
    'Usted decide exactamente qué puede ver su pareja.',
  'pc.scope': 'Elegir qué compartir',
  'pc.optSummary': 'Resumen común de portadores',
  'pc.optSummaryBody': 'Solo sus resultados de portador en lenguaje claro.',
  'pc.optFull': 'Acceso al informe completo',
  'pc.optFullBody':
    'Permite a su pareja abrir su informe completo.',
  'pc.optActivity': 'Notificaciones de actividad',
  'pc.optActivityBody':
    'Avísele cuando añada un resultado nuevo.',
  'pc.grant': 'Conceder acceso',
  'pc.revoke': 'Revocar acceso',
  'pc.none': 'No se comparte nada por ahora.',
  'pc.expires': 'Consentimiento registrado',
  'pc.revokeWarning':
    'La revocación bloquea de inmediato el acceso futuro. No elimina nada de lo que ya se vio.',
  'pc.saved': 'Sus opciones de consentimiento se han guardado.',
  'pc.withdrawTitle': 'Retirar el consentimiento',
  'pc.withdrawBody':
    'Puede dejar de compartir cuando quiera, por cualquier motivo, sin tener que darlo.',

  // --- Asesoramiento / consejo genético ---------------------------------------------
  'sup.title': 'Asesoramiento genético',
  'sup.helpSub': 'Estamos aquí para ayudarle.',
  'sup.lead':
    'Hable con un profesional cualificado sobre lo que significan sus resultados para usted.',
  'sup.whyTitle': 'Cuándo ayuda el asesoramiento genético',
  'sup.why1':
    'Quiere que las cifras se expliquen para su situación.',
  'sup.why2':
    'Usted y su pareja tienen resultados que les gustaría leer juntos.',
  'sup.why3':
    'Un resultado le preocupó o le dejó sin saber qué hacer después.',
  'sup.book': 'Solicitar una llamada',
  'sup.message': 'Enviar un mensaje',
  'sup.faq': 'Preguntas frecuentes',
  'sup.contact': 'Contáctenos',
  'sup.liveChat': 'Chat en vivo',
  'sup.available': 'Disponible 24 horas, los 7 días',
  'sup.demoNote':
    'Solo demostración: no se agenda ninguna cita real ni se envía ningún mensaje desde este prototipo.',
  'sup.directoryTitle': 'Directorio de consejeros',
  'sup.directoryNote':
    'Entradas ilustrativas para la maqueta. No es un directorio real ni un servicio de derivación.',
  'sup.emergency':
    'Si se siente mal o le preocupa un problema de salud urgente, contacte con su médico o con los servicios de emergencia locales. GeneClarity no es un servicio de emergencias.',

  // --- Perfil -------------------------------------------------------------------------
  'prof.title': 'Perfil',
  'prof.myReports': 'Mis informes',
  'prof.familyAccess': 'Acceso familiar',
  'prof.privacySettings': 'Ajustes de privacidad',
  'prof.about': 'Acerca de GeneClarity',
  'prof.notifications': 'Notificaciones',
  'prof.activity': 'Historial de actividad',
  'prof.memberSince': 'Miembro desde',

  // --- Ajustes -----------------------------------------------------------------------
  'set.title': 'Ajustes',
  'set.language': 'Idioma',
  'set.notifications': 'Notificaciones',
  'set.privacySecurity': 'Privacidad y seguridad',
  'set.dataSharing': 'Intercambio de datos',
  'set.aboutApp': 'Acerca de la aplicación',
  'set.helpSupport': 'Ayuda y soporte',

  // --- Ajustes de privacidad --------------------------------------------------------
  'priv.title': 'Privacidad y seguridad',
  'priv.lead': 'Controle cómo se trata su información.',
  'priv.profileVisibility': 'Visibilidad del perfil',
  'priv.profileVisibilitySub': 'Solo usted ve los detalles de su perfil.',
  'priv.shareResearch': 'Contribuir con datos anonimizados',
  'priv.shareResearchSub':
    'Desactivado de forma predeterminada. De todos modos, ningún dato sale de este prototipo.',
  'priv.autoLock': 'Bloqueo automático',
  'priv.autoLockSub':
    'Pedir iniciar sesión de nuevo tras 15 minutos de inactividad.',
  'priv.export': 'Exportar mis datos',
  'priv.exportSub': 'Descargar una copia de todo lo guardado sobre usted.',
  'priv.erase': 'Eliminar mi cuenta',
  'priv.eraseSub':
    'Eliminar permanentemente su cuenta y sus registros.',
  'priv.eraseConfirm':
    'Esta demostración no almacena datos en un servidor, así que no hay nada que eliminar. En el producto real esto sería irreversible.',
  'priv.partnersTitle': 'Acceso de la pareja',
  'priv.noPartner': 'Ninguna pareja tiene acceso a sus datos.',
  'priv.manage': 'Gestionar el intercambio',
  'priv.logTitle': 'Registro de privacidad',
  'priv.logNote':
    'Cada cambio de consentimiento se registra aquí.',

  // --- Notificaciones ----------------------------------------------------------------
  'notif.title': 'Notificaciones',
  'notif.empty': 'Está al día.',
  'notif.markRead': 'Marcar todo como leído',
  'notif.markOne': 'Marcar como leído',
  'notif.unread': 'Sin leer',
  'notif.allRead': 'Todas las notificaciones están marcadas como leídas.',

  // --- Actividad ---------------------------------------------------------------------------------
  'act2.title': 'Historial de actividad',
  'act2.lead': 'Un registro de lo que ha pasado en su cuenta.',
  'act2.empty': 'Aún no hay actividad registrada.',
  'act2.signedIn': 'Inicio de sesión',
  'act2.consentGranted': 'Acceso de la pareja concedido',
  'act2.consentRevoked': 'Acceso de la pareja revocado',
  'act2.reportViewed': 'Informe visto',
  'act2.settingsChanged': 'Ajustes modificados',
  'act2.languageChanged': 'Idioma modificado',
  'act2.note': 'La actividad permanece solo en este dispositivo.',

  // --- Finalización --------------------------------------------------------------------
  'done.title': '¡Todo listo!',
  'done.body':
    'Gracias por elegir GeneClarity. Su camino de salud importa.',

  // --- Avisos compartidos ------------------------------------------------------------------------------
  'nav.demo': 'Prototipo',
  'notice.sampleHeading': 'Datos de demostración',
  'notice.sampleBody':
    'Cada resultado, nombre y cifra de este prototipo es un ejemplo original creado para la demostración. Nada aquí es un resultado de tamizaje real.',
  'notice.notDiagnostic': 'No es un diagnóstico',
  'notice.backHome': 'Volver al inicio',

  // --- Mi camino de tamizaje --------------------------------------------------------------------
  'journey.title': 'Mi camino de tamizaje',
  'journey.cardSub':
    'Guarde sus informes en privado, entienda sus resultados y prepárese para la orientación profesional.',
  'journey.subtitle':
    'Mantenga su información de tamizaje segura, entienda lo que dice y sepa cuándo involucrar a un profesional.',
  'journey.resultsCard': 'Mis resultados de tamizaje',
  'journey.resultsSub':
    'Suba sus informes de tamizaje a un espacio privado al que solo usted tiene acceso.',
  'journey.understandCard': 'Entender mis resultados',
  'journey.understandSub':
    'Explicaciones en lenguaje claro de las palabras comunes de tamizaje y las etiquetas de resultados.',
  'journey.guidanceCard': 'Orientación profesional',
  'journey.guidanceSub':
    'Qué es el asesoramiento genético, cuándo puede ayudar y cómo preparar sus preguntas.',
  'journey.privacyTitle': 'Privado de forma predeterminada',
  'journey.privacyBody':
    'Sus documentos le pertenecen solo a usted. Nada se comparte automáticamente con una pareja o un ser querido.',
  'journey.sharingTitle': 'Compartir documentos de tamizaje',
  'journey.sharingBody':
    'El intercambio de documentos con una pareja no está implementado en este prototipo. Es una función prevista: solo se construirá con un consentimiento explícito y revocable, y solo después de haber sido probada desde el punto de vista de la seguridad.',
  'journey.planned': 'Previsto',
  'journey.docsTitle': 'Mis resultados de tamizaje',
  'journey.docsPrivacy':
    'Los documentos se almacenan en un espacio privado: solo su cuenta puede listarlos, abrirlos o eliminarlos, mediante enlaces firmados de corta duración, nunca URL públicas.',
  'journey.upload': 'Subir un documento',
  'journey.uploading': 'Subiendo…',
  'journey.formats': 'PDF, JPG o PNG · hasta 10 MB',
  'journey.uploaded': 'Documento subido.',
  'journey.emptyTitle': 'Aún no hay documentos',
  'journey.emptyBody':
    'Suba un informe de tamizaje para guardarlo con su camino: privado y de acceso solo para usted.',
  'journey.viewSample': 'Ver un documento de ejemplo',
  'journey.open': 'Abrir',
  'journey.download': 'Descargar',
  'journey.delete': 'Eliminar',
  'journey.deleteConfirm':
    '¿Eliminar este documento? El archivo se quita del almacenamiento.',
  'journey.uploadedBy': 'Subido el',
  'journey.errType':
    'Tipo de archivo no admitido. Suba un archivo PDF, JPG o PNG.',
  'journey.errSize':
    'Este archivo es demasiado grande. El máximo es de 10 MB.',
  'journey.errUpload':
    'No se pudo completar la subida. Inténtelo de nuevo.',
  'journey.errGeneric': 'Algo salió mal. Inténtelo de nuevo.',
  'journey.errDemo':
    'La subida de documentos requiere el backend de Supabase conectado, que no está activo en el modo de demostración local.',
  'journey.understandTitle': 'Entender mis resultados',
  'journey.understandIntro':
    'Qué significan las palabras comunes de tamizaje, en lenguaje cotidiano. Esto explica la terminología general; no lee ni interpreta sus documentos subidos.',
  'journey.labelsTitle': 'Etiquetas de resultados comunes',
  'journey.boundaryTitle': 'Lo que esta aplicación no hará',
  'journey.educationLink': 'Leer en el centro de aprendizaje',
  'journey.counsellingTitle': '¿Qué es el asesoramiento genético?',
  'journey.guidanceTitle': 'Orientación profesional',
  'journey.whenTitle':
    'Cuándo puede ser útil la orientación profesional',
  'journey.questionsTitle': 'Prepare sus preguntas',
  'journey.questionsSub':
    'Marque las preguntas que quiera llevar consigo. Su selección permanece en este dispositivo.',
  'journey.selected': 'Seleccionado: {n}',
  'journey.sampleTitle': 'Documento de ejemplo',
  'journey.sampleHint':
    'Los documentos que sube se guardan aparte, en su espacio privado; este ejemplo está integrado en la aplicación para fines de demostración.',
  'journey.backToDocs': 'Volver a mis documentos',

  // --- Errores ---------------------------------------------------------------------------------------
  'err.title': 'No se encuentra esta pantalla.',
  'err.body': 'La página solicitada no existe en este prototipo.',
}
