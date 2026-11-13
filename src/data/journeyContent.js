/**
 * My Screening Journey — content for the Understand and Guidance
 * sections, plus the synthetic demonstration report.
 *
 * ─────────────────────────────────────────────────────────────────
 * Like `demoData.js`, EVERY item here is original writing for this
 * prototype describing well-established general genetics (see
 * docs/10 §3 and docs/07). It is general education — it does not
 * diagnose, classify, or interpret anyone's uploaded documents, and
 * it never makes recommendations about marriage or reproduction.
 *
 * UI labels live in `i18n/translations.js` (journey.*); only body
 * content is stored here with paired EN/AR fields, matching the
 * pattern used by `learnTopics`.
 * ─────────────────────────────────────────────────────────────────
 */

/** Screen 3 — plain-language explanations of core concepts. */
export const understandSections = [
  {
    id: 'screening-vs-diagnosis',
    icon: 'shield',
    titleEn: 'Screening is not a diagnosis',
    titleAr: 'الفحص ليس تشخيصًا',
    bodyEn: [
      'A screening test looks for whether you carry changes linked to certain inherited conditions. It is made to start a conversation, not to confirm or rule out a disease.',
      'A "carrier" or positive screening result is not a diagnosis of disease. Confirmatory testing and professional interpretation usually come before any medical conclusion.',
      'A "not detected" result lowers the likelihood of carrying the changes that were checked for — but no screening test rules a carrier status out completely.',
    ],
    bodyAr: [
      'يفحص ما إذا كنت تحمل تغييرات مرتبطة ببعض الأمراض الوراثية. الهدف أن يبدأ حديثًا، لا أن يؤكد مرضًا أو ينفيه.',
      'نتيجة «حامل» أو نتيجة إيجابية في الفحص ليست تشخيصًا لمرض. التأكيد والتفسير المهني يسبقان عادةً أي استنتاج طبي.',
      'نتيجة «لم يُكتشف» تقلل احتمال حمل التغييرات التي تم فحصها — لكن لا فحص يستبعد حالة الحامل تمامًا.',
    ],
  },
  {
    id: 'carrier-vs-disease',
    icon: 'dna',
    titleEn: 'Carrier status is not the same as disease',
    titleAr: 'حالة الحامل ليست مساوية للمرض',
    bodyEn: [
      'A carrier has one changed copy of a gene and one working copy. The working copy does its job, so carriers are generally healthy and often do not know they carry a change.',
      'Many inherited conditions only appear when a person inherits two changed copies of the same gene — one from each biological parent.',
      'Being a carrier is common and is nobody\'s fault. It describes a chance to discuss with a professional — it is not an illness, and not a prediction of your own health.',
    ],
    bodyAr: [
      'الحامل يملك نسخة معدّلة من جين ونسخة عاملة. النسخة العاملة تقوم بوظيفتها، لذا يكون الأصحاء حاملين غالبًا دون أن يعرفون أنهم يحملون تغييرًا.',
      'تظهر كثير من الأمراض الوراثية عند إراثة الشخص نسختين معدّلتان من نفس الجين — واحدة من كل والد بيولوجي.',
      'الحمل شائع وليس ذنب أحد. يصف فرصة تستحق النقاش مع مختص — وليس مرضًا، وليس تنبؤًا بصحتك.',
    ],
  },
]

/** Screen 3 — what common result labels mean, in ordinary words. */
export const resultLabels = [
  {
    id: 'negative',
    tone: 'ok',
    labelEn: 'Not detected / negative',
    labelAr: 'لم يُكتشف / سلبي',
    descEn:
      'The changes checked for in this screening were not found. This lowers the likelihood of carrying those specific changes; it does not guarantee you carry none at all.',
    descAr:
      'لم تُعثر على التغييرات التي تم فحصها. يقلل ذلك من احتمال حمل تلك التغييرات تحديدًا، لكنه لا يضمن أنك لا تحمل أي تغيير.',
  },
  {
    id: 'carrier',
    tone: 'caution',
    labelEn: 'Carrier / positive',
    labelAr: 'حامل / إيجابي',
    descEn:
      'One changed copy of the gene was found. This usually does not affect your own health, and matters mainly because two carriers of the same gene can discuss their chances together.',
    descAr:
      'وُجدت نسخة واحدة معدّلة من الجين. عادةً لا تؤثر على صحتك، وتهم تحديدًا لأن حاملين لنفس الجين يمكنهما مناقشة احتمالاتهما معًا.',
  },
  {
    id: 'uncertain',
    tone: 'neutral',
    labelEn: 'Uncertain',
    labelAr: 'غير مؤكد',
    descEn:
      'A difference was found, but current evidence is not strong enough to say what it means. This is neither good news nor bad news — it is unfinished information that a professional should read together with your family history.',
    descAr:
      'وُجد اختلاف، لكن الأدلة الحالية لا تكفي للقول بمعناه. ليست خبرًا سارًا ولا مؤسفًا — بل معلومات غير مكتملة ينبغي لمختص أن يقرأها مع تاريخك العائلي.',
  },
]

/** Screen 3 — the boundary plus the future-AI guardrail. */
export const interpretationBoundaryEn = [
  'GeneClarity does not automatically diagnose, classify or medically interpret the documents you upload. This section explains general terminology only.',
]
export const interpretationBoundaryAr = [
  'لا يشخّص جين كلايري ولا يصنّف ولا يفسّر طبيًا المستندات التي ترفعها تلقائيًا. هذا القسم يشرح مصطلحات عامة فقط.',
]
export const futureAiEn =
  'If document interpretation is ever added, it will be a separate feature requiring your explicit consent, clinical validation, and professional oversight. It is not part of this prototype.'
export const futureAiAr =
  'إذا أُضيف تفسير المستندات يومًا، فسيكون ميزة منفصلة تتطلب موافقتك الصريحة وتدقيقًا سريريًا وإشرافًا مهنيًا. وهي ليست جزءًا من هذا النموذج.'

/** Screen 3 — where to read more (ids must exist in learnTopics). */
export const understandLinks = ['carrier-status', 'probabilities', 'screening-counselling']

/** Screen 4 — when professional guidance may be useful. */
export const whenUseful = [
  {
    en: 'You received a result or document you do not understand.',
    ar: 'تسلّمت نتيجة أو مستندًا لا تفهمه.',
  },
  {
    en: 'Both you and your partner have screening results to consider together.',
    ar: 'لديكما أنتما نتائج فحص لمناقشتها معًا.',
  },
  {
    en: 'A result was reported as uncertain.',
    ar: 'أُبلغ عن نتيجة غير مؤكدة.',
  },
  {
    en: 'A condition runs in your family and you want to understand what that can mean.',
    ar: 'يوجد مرض وراثي في عائلتك وتريد فهم ما قد يعنيه ذلك.',
  },
  {
    en: 'You want the numbers explained for your own situation, not in general.',
    ar: 'تريد شرح الأرقام لحالتك أنت لا عمومًا.',
  },
]

/** Screen 4 — a question bank users can tick to prepare their list. */
export const questionBank = [
  { en: 'Which conditions was I screened for?', ar: 'ما الأمراض التي تم فحصي لها؟' },
  { en: 'What exactly does my result mean?', ar: 'ماذا تعني نتيجتي بالضبط؟' },
  { en: 'Does my result need confirmatory testing?', ar: 'هل تحتاج نتيجتي إلى فحص تأكيد؟' },
  { en: 'What does my result mean for my partner?', ar: 'ماذا تعني نتيجتي لشريكي؟' },
  { en: 'What are the chances, in numbers, for our situation?', ar: 'ما الاحتمالات بالأرقام في حالتكما؟' },
  { en: 'What options do we have, and what would you recommend reading?', ar: 'ما خياراتنا، وماذا تنصح بقراءته؟' },
  { en: 'Should anyone else in my family be tested?', ar: 'هل ينبغي لأحد آخر في عائلتي أن يُفحص؟' },
  { en: 'How and when should this information be revisited?', ar: 'كيف ومتى يجب مراجعة هذه المعلومات؟' },
]

/** Screen 3 — genetic counselling, described without promising services. */
export const counsellingEn = [
  'A genetic counsellor is a trained professional who explains test results, inheritance patterns and what they mean for you and your partner — without telling you what to do. The decision stays with you.',
]
export const counsellingAr = [
  'المرشد الوراثي مختص مدرّب يفسّر نتائج الفحص وأنماط الوراثة وما تعنيه لكما — دون أن يخبركما بما يجب فعله. القرار يبقى لكما.',
]

/**
 * The synthetic demonstration document (Screen: /journey/sample).
 * Original fictional content — no real patient, laboratory, or report.
 */
export const sampleReport = {
  badgeEn: 'Demo sample',
  badgeAr: 'نموذج تجريبي',
  titleEn: 'Synthetic Screening Report',
  titleAr: 'تقرير فحص اصطناعي',
  noteEn:
    'This is an original synthetic document created for this demonstration. It is not a real report, contains no real patient data, and is not a medical record.',
  noteAr:
    'هذا مستند اصطناعي أصلي أُنشئ لهذا العرض. ليس تقريرًا حقيقيًا، ولا يحتوي على بيانات مريض حقيقي، وليس سجلًا طبيًا.',
  fields: [
    { labelEn: 'Prepared for', labelAr: 'أُعدّ لـ', valueEn: 'Sample Person (fictional)', valueAr: 'شخص نموذجي (خيالي)' },
    { labelEn: 'Issued by', labelAr: 'صدر عن', valueEn: 'Demo Laboratory (fictional)', valueAr: 'مختبر تجريبي (خيالي)' },
    { labelEn: 'Reference', labelAr: 'الرقم المرجعي', valueEn: 'GC-DEMO-0001', valueAr: 'GC-DEMO-0001' },
    { labelEn: 'Date', labelAr: 'التاريخ', valueEn: '15 Jan 2026', valueAr: '15 يناير 2026' },
  ],
  rows: [
    {
      gene: 'HBB',
      findingEn: 'Sickle cell trait (HbAS)',
      findingAr: 'صفة الخلايا المنجلية (HbAS)',
      status: 'carrier',
      plainEn: 'One changed copy found. Carriers are generally healthy.',
      plainAr: 'وُجدت نسخة واحدة معدّلة. الحاملون أصحاء غالبًا.',
    },
    {
      gene: 'HEXA',
      findingEn: 'No change detected',
      findingAr: 'لم يُكتشف تغيير',
      status: 'negative',
      plainEn: 'The change checked for was not found in this screening.',
      plainAr: 'لم يُعثر على التغيير الذي تم فحصه في هذا الفحص.',
    },
    {
      gene: 'CFTR',
      findingEn: 'Change of uncertain significance',
      findingAr: 'تغيير غير مؤكد الدلالة',
      status: 'uncertain',
      plainEn: 'A difference was found; its meaning is not yet understood.',
      plainAr: 'وُجد اختلاف؛ دلالته غير مفهومة حتى الآن.',
    },
  ],
  footerEn:
    'Screening result — not a diagnosis. Discuss this document with a qualified healthcare professional. (Demonstration document; synthetic data.)',
  footerAr:
    'نتيجة فحص — وليست تشخيصًا. ناقش هذا المستند مع مختص مؤهل في الرعاية الصحية. (مستند تجريبي؛ بيانات اصطناعية.)',
}
