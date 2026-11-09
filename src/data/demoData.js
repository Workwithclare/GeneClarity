/**
 * Synthetic demonstration data for GeneClarity.
 *
 * ─────────────────────────────────────────────────────────────────
 * EVERY record in this file is an original example written for this
 * prototype. It is not derived from any patient, clinic, registry or
 * published dataset. Names are invented, dates are illustrative, and
 * the clinical narratives are simplified for education.
 *
 * See docs/10_DATA_SOURCES_AND_GOVERNANCE.md for the full declaration.
 * ─────────────────────────────────────────────────────────────────
 */

/** The signed-in demonstration account. */
export const demoUser = {
  id: 'usr_demo_001',
  fullName: 'Chioma Clare',
  email: 'chioma@example.com',
  // Not a real credential. This prototype has no server and no password check.
  password: 'demo1234',
  joinedAt: '2026-03-14',
  locale: 'en',
  avatarInitials: 'CC',
}

/**
 * Screening results for the demo account.
 * `status` drives the plain-language explanation on the results screen.
 *
 * Possible status values:
 *   carrier      – a changed copy of the gene was found
 *   negative     – no changed copy detected in this screening
 *   uncertain    – a change was found but its meaning is not understood
 */
export const demoResults = [
  {
    id: 'res_hbs',
    conditionId: 'sickle-cell',
    gene: 'HBB',
    trait: 'Sickle cell trait (HbAS)',
    status: 'carrier',
    summaryEn: 'You are a carrier for sickle cell trait (HbAS).',
    summaryAr: 'أنت حامل لمرض الخلايا المنجلية (HbAS).',
    plainEn:
      'This means you carry one copy of the gene. It is usually healthy and does not cause sickle cell disease.',
    plainAr:
      'يعني أنك تحمل نسخة واحدة من الجين. عادةً تكون الحالة صحية ولا تسبب مرض الخلايا المنجلية.',
    forYouEn:
      'Carrying one changed copy normally has no effect on your own health. Some people notice mild effects under extreme physical stress, which is worth mentioning to a doctor.',
    forYouAr:
      'حمل النسخة المعدّلة الواحدة لا يؤثر عادةً على صحتك. قد يشعر بعض الناس بأثر خفيف عند إجهاد شديد، وتجدر إشارة ذلك إلى الطبيب.',
    forCoupleEn:
      'If your partner is also a carrier, there is a chance with each pregnancy of a child inheriting two copies. This is a chance, not a certainty, and it is best discussed with a counsellor using both results.',
    forCoupleAr:
      'إذا كان شريكك حاملًا أيضًا، فهناك احتمال في كل حمل لطفل يرث نسختين. هذا احتمال لا يقين، ومن الأفضل مناقشته مع مرشد باستخدام النتيجتين معًا.',
    nextSteps: ['read', 'counsellor', 'no-panic'],
    updatedAt: '2026-09-02',
    sample: true,
  },
  {
    id: 'res_tay',
    conditionId: 'tay-sachs',
    gene: 'HEXA',
    trait: 'Tay-Sachs carrier screen',
    status: 'negative',
    summaryEn: 'No changed copy detected in this screening.',
    summaryAr: 'لم يُكتشف أي تغير في هذا الفحص.',
    plainEn:
      'The screening did not find a changed copy of this gene. This lowers the likelihood of being a carrier, but no screening test rules a carrier status out completely.',
    plainAr:
      'لم يجد الفحص نسخة معدّلة من هذا الجين. يقلل ذلك من احتمال كونك حاملًا، لكن لا فحص يستبعده تمامًا.',
    forYouEn:
      'There is nothing for you to act on here. A "not detected" result describes this test only, not every possible change in the gene.',
    forYouAr:
      'لا يوجد ما يجب فعله هنا. نتيجة «لم يُكتشف» تصف هذا الفحص فقط ولا تشمل كل التغيرات الممكنة في الجين.',
    forCoupleEn:
      'A clear result for one partner does not by itself describe a couple. Screening is most informative when both people are tested.',
    forCoupleAr:
      'نتيجة واضحة لشريك واحد لا تصف الزوجين بحد ذاتها. الفحص يكون الأكثر فائدة عند فحص كليهما.',
    nextSteps: ['read'],
    updatedAt: '2026-09-02',
    sample: true,
  },
  {
    id: 'res_cf',
    conditionId: 'cystic-fibrosis',
    gene: 'CFTR',
    trait: 'Cystic fibrosis carrier screen',
    status: 'uncertain',
    summaryEn: 'A change was found, but its meaning is not yet understood.',
    summaryAr: 'وُجد تغير، لكن دلالةه غير مفهومة حتى الآن.',
    plainEn:
      'A difference was found in this gene. At present the scientific evidence is not strong enough to say whether it affects health. This is called a variant of uncertain significance.',
    plainAr:
      'وُجد اختلاف في هذا الجين. حاليًا الأدلة العلمية لا تكفي للقول إذا كان يؤثر على الصحة. يُسمى هذا «تغير غير مؤكد الدلالة».',
    forYouEn:
      'An uncertain result is not good news or bad news — it is unfinished information. It should not change any decision you make about your health.',
    forYouAr:
      'النتيجة غير المؤكدة ليست خبرًا سارًا ولا مؤسفًا — بل معلومات غير مكتملة. لا ينبغي أن تغيّر أي قرار تتخذه بشأن صحتك.',
    forCoupleEn:
      'Uncertain findings should be interpreted by a professional alongside the full family history. Do not treat them as a carrier result.',
    forCoupleAr:
      'يجب على مختص تفسير النتائج غير المؤكدة بجانب التاريخ العائلي الكامل. لا تعاملها كنتيجة حامل.',
    nextSteps: ['counsellor', 'no-panic', 'read'],
    updatedAt: '2026-09-02',
    sample: true,
  },
]

/**
 * Education library. These are short, general explanations written for
 * this project. They deliberately avoid individual medical advice.
 */
export const learnTopics = [
  {
    id: 'what-is-carrier',
    category: 'basics',
    titleEn: 'What does "carrier" mean?',
    titleAr: 'ماذا يعني «الحامل»؟',
    readMins: 3,
    excerptEn: 'A simple explanation of carrying one changed copy of a gene.',
    excerptAr: 'شرح بسيط لحمل نسخة واحدة معدّلة من الجين.',
    bodyEn: [
      'Every person inherits two copies of most genes — one from each parent.',
      'A carrier has one copy that differs from the usual version. The other copy works normally, so carriers are generally healthy and often have no idea they carry a change.',
      'It matters because two carriers of the same recessive condition can, together, have a child who inherits two changed copies. That pattern is what recessive screening is designed to inform.',
      'Being a carrier is extremely common and is not a fault, an illness or something to be ashamed of.',
    ],
    bodyAr: [
      'يرث كل شخص نسختين من معظم الجينات — واحدة من كل والد.',
      'الحامل يملك نسخة تختلف عن النسخة المعتادة، بينما تعمل النسخة الأخرى بشكل طبيعي، لذا يكون الأصحاء حاملين غالبًا دون أن يدركون ذلك.',
      'الأهمية تظهر عند اجتماع حاملين لنفس المرض المتنحي، إذ يمكنهما أن ينجبا طفلًا يرث نسختين معدّلتين. هذا هو النمط الذي يهدف فحص التنحية إلى توضيحه.',
      'أن تكون حاملًا أمر شائع جدًا، وليس مرضًا ولا عيبًا ولا سببًا للخجل.',
    ],
    whyEn: 'Understanding carrier status prevents both false alarm and false reassurance.',
    whyAr: 'فهم حالة الحامل يمنع الخوف الزائد والتهدئة الزائفة معًا.',
    doEn: 'Ask which specific conditions you were screened for — panels differ between clinics.',
    doAr: 'اسأل عن الأمراض المحددة التي تمت فحصها — تختلف اللوحات بين العيادات.',
  },
  {
    id: 'recessive',
    category: 'basics',
    titleEn: 'Recessive conditions explained',
    titleAr: 'شرح الأمراض المتنحية',
    readMins: 4,
    excerptEn: 'Why some conditions only appear when two copies are inherited.',
    excerptAr: 'لماذا لا تظهر بعض الأمراض إلا بوجود نسختين.',
    bodyEn: [
      'A recessive condition usually needs two changed copies of the same gene before symptoms appear.',
      'If someone has one changed copy and one working copy, they typically do not develop the condition — they are a carrier.',
      'When both parents are carriers, each pregnancy carries an independent chance of the child inheriting two changed copies. For most such conditions that chance is 25%, but the figure depends on the specific condition and must be confirmed for your own situation.',
      'The same 25% applies to every pregnancy. It does not "reset" or "add up" across pregnancies.',
    ],
    bodyAr: [
      'عادةً لا يظهر المرض المتنحي إلا عند وجود نسختين معدّلتين من الجين نفسه.',
      'من يملك نسخة معدّلة ونسخة سليمة لا يطور المرض عادةً — فهو حامل.',
      'عندما يكون كلا الوالدين حاملين، يحمل كل حمل احتمالًا مستقلًا لوراثة الطفل نسختين. في معظم هذه الأمراض يكون الاحتمال 25%، لكن الرقم يختلف حسب المرض ويجب تأكيده لحالتك.',
      'نفس الاحتمال 25% ينطبق على كل حمل. لا «يصفّر» ولا يتراكم بين الحملات.',
    ],
    whyEn: 'It explains why a couple can be healthy and still face a real chance.',
    whyAr: 'يوضح لماذا يمكن أن يكون الزوجان صحّيين ومع ذلك يواجهان احتمالًا حقيقيًا.',
    doEn: 'Have a counsellor walk you through the arithmetic with both results in hand.',
    doAr: 'اطلب من مرشد شرح الحساب لك بناءً على النتيجتين معًا.',
  },
  {
    id: 'uncertainty',
    category: 'basics',
    titleEn: 'When a result is uncertain',
    titleAr: 'عندما تكون النتيجة غير مؤكدة',
    readMins: 3,
    excerptEn: 'What "variant of uncertain significance" does and does not mean.',
    excerptAr: 'ما الذي تعنيه «التغير غير المؤكد» وما لا تعنيه.',
    bodyEn: [
      'Genetic evidence accumulates over years. Sometimes a difference is found in a gene before scientists agree on what it does.',
      'When that happens the result is reported as uncertain. It is an honest statement that knowledge is incomplete — not a hidden warning.',
      'An uncertain result should not be used to make health or family decisions on its own.',
      'Uncertainty can sometimes be resolved later, as evidence grows. A result may be reclassified.',
    ],
    bodyAr: [
      'تراكم الأدلة الوراثية على مدى سنوات. وقد يُعثر على اختلاف في جين قبل أن يتفق العلماء على وظيفته.',
      'عند ذلك تُبلَّغ النتيجة بأنها غير مؤكدة. إنها تصريح صادق بأن المعرفة ناقصة — لا تحذير خفي.',
      'لا ينبغي استخدام النتيجة غير المؤكدة وحدها لاتخاذ قرارات صحية أو عائلية.',
      'قد يزول الغموض لاحئًا مع تراكم الأدلة، وقد تُعاد تصنيف النتيجة.',
    ],
    whyEn: 'Presenting uncertainty honestly is what separates education from diagnosis.',
    whyAr: 'عرض الغموض بصدق هو ما يفصل التعليم عن التشخيص.',
    doEn: 'Record the date of the result, since classifications can change.',
    doAr: 'دوّن تاريخ النتيجة، لأن التصنيفات قد تتغير.',
  },
  {
    id: 'sickle-cell',
    category: 'conditions',
    titleEn: 'Sickle cell trait',
    titleAr: 'مرض الخلايا المنجلية',
    readMins: 4,
    excerptEn: 'What carrying the HbAS trait means for health and for a couple.',
    excerptAr: 'ماذا يعني حامل صفة HbAS للصحة وللزوجين.',
    bodyEn: [
      'Sickle cell trait means one changed copy of the HBB gene. Most people with the trait live entirely normal, healthy lives.',
      'In rare situations — very strenuous exertion, low oxygen, dehydration — carriers can experience complications. Mention the trait to a doctor before intensive training or high-altitude activity.',
      'When both parents carry the trait, each pregnancy has a chance of the child inheriting two copies, which causes sickle cell disease. The chance is not a prediction for any individual pregnancy.',
      'Screening for the trait is common and well established, particularly in regions where sickle cell disease is more prevalent.',
    ],
    bodyAr: [
      'صفة الخلايا المنجلية تعني نسخة واحدة معدّلة من جين HBB. يعيش معظم حامل هذه الصفة حياة طبيعية تمامًا وصحية.',
      'في حالات نادرة — بذل جهد شديد أو نقص أكسجين أو جفاف — قد يعاني الحامل من مضاعفات. أخبر الطبيب بالصفة قبل التدريب المكثف أو النشاط على ارتفاعات عالية.',
      'عندما يحمل كلا الوالدين الصفة، لكل حمل احتمال لطفل يرث نسختين، فيحدث مرض الخلايا المنجلية. الاحتمال ليس تنبؤًا بخصوص أي حمل بعينه.',
      'الفحص لهذه الصفة شائع ومستقر علميًا، خاصة في المناطق المنتشر فيها المرض.',
    ],
    whyEn: 'It is one of the most common inherited traits worldwide, so it is routinely screened.',
    whyAr: 'إنها من أكثر الصفات الوراثية انتشارًا في العالم، لذا تُفحص rutinely.',
    doEn: 'If you plan intense exercise, mention the trait to a sports doctor.',
    doAr: 'إذا كنت تخطط لممارسة رياضية شديدة، اذكر الصفة لطبيب رياضي.',
  },
  {
    id: 'tay-sachs',
    category: 'conditions',
    titleEn: 'Tay-Sachs screening',
    titleAr: 'فحص تاي-ساكس',
    readMins: 3,
    excerptEn: 'Why carrier screening is offered in certain communities.',
    excerptAr: 'لماذا يُعرض فحص الحامل في بعض المجتمعات.',
    bodyEn: [
      'Tay-Sachs is a recessive condition affecting the nervous system. It is more common in some populations, which is why screening is offered more widely in those communities.',
      'A carrier result is not a diagnosis and says nothing about your own health.',
      'Screening is most useful when both prospective parents are tested, because the relevant question concerns both results together.',
      'Community-targeted screening is a public health tool, not a judgement about any group.',
    ],
    bodyAr: [
      'مرض تاي-ساكس مرض متنحي يؤثر على الجهاز العصبي. وهو أكثر شيوعًا في بعض السكان، لذا يُعرض الفحص على نطاق أوسع في تلك المجتمعات.',
      'نتيجة الحامل ليست تشخيصًا ولا تقول شيئًا عن صحتك.',
      'يكون الفحص الأكثر فائدة عند فحص الوالدين المحتملين معًا، لأن السؤال المطروح يخص النتيجتين معًا.',
      'الفحص الموجّه لمجتمع محدد أداة صحية عامة وليس حكمًا على أي مجموعة.',
    ],
    whyEn: 'Prevalence differs between populations, so screening strategies differ too.',
    whyAr: 'تختلف معدلات الانتشار بين السكان، لذا تختلف استراتيجيات الفحص أيضًا.',
    doEn: 'Ask a counsellor which panel applies to your family background.',
    doAr: 'اسأل مرشدًا أي لوحة فحص تناسب خلفيتك العائلية.',
  },
  {
    id: 'counselling',
    category: 'counselling',
    titleEn: 'What a genetic counsellor does',
    titleAr: 'ما الذي يفعله المرشد الوراثي',
    readMins: 4,
    excerptEn: 'How professional counselling differs from an app.',
    excerptAr: 'كيف يختلف الإرشاد المهني عن التطبيق.',
    bodyEn: [
      'A genetic counsellor is a trained professional who understands test results, inheritance patterns and the emotional weight they carry.',
      'They do not tell you what to do. They make sure you understand your options well enough to decide for yourself.',
      'A counsellor can read both partners’ results together, take a family history, and explain what the numbers mean in your specific case.',
      'GeneClarity is designed to prepare you for that conversation — to arrive with the right questions rather than the right answers.',
    ],
    bodyAr: [
      'المرشد الوراثي مختص مدرّب يفهم نتائج الفحص وأنماط الوراثة والحمل النفسي لها.',
      'لا يخبرك بما يجب فعله. بل يضمن أنك تفهم خياراتك جيدًا لتقرر بنفسك.',
      'يمكن للمرشد قراءة نتائج الزوجين معًا، وجمع التاريخ العائلي، وشرح معنى الأرقام في حالتك تحديدًا.',
      'صُمم جين كلايري لتهيئتك لهذه المحادثة — لتأتي بالأسئلة الصحيحة لا بالإجابات.',
    ],
    whyEn: 'Interpretation requires context an app cannot see: family history, both partners, your questions.',
    whyAr: 'التفسير يحتاج سياقًا لا يراه التطبيق: التاريخ العائلي وشريكان وأسئلتك.',
    doEn: 'Write your questions down before the appointment.',
    doAr: 'دوّن أسئلتك قبل الموعد.',
  },
]

/**
 * Illustrative counsellor entries for layout purposes only.
 * These are NOT a real directory, not referrals, and not endorsements.
 */
export const counsellorDirectory = [
  {
    id: 'cns_01',
    nameEn: 'Dr. Amara Okonkwo',
    nameAr: 'د. أمارا أوكونكو',
    roleEn: 'Registered Genetic Counsellor',
    roleAr: 'مرشد وراثي معتمد',
    focusEn: 'Carrier screening, couple counselling',
    focusAr: 'فحص الحامل، إرشاد الأزواج',
    demo: true,
  },
  {
    id: 'cns_02',
    nameEn: 'Dr. Yusuf Haddad',
    nameAr: 'د. يوسف حداد',
    roleEn: 'Clinical Genetics Counsellor',
    roleAr: 'مرشد وراثي سريري',
    focusEn: 'Reproductive risk, result interpretation',
    focusAr: 'مخاطر الإنجاب، تفسير النتائج',
    demo: true,
  },
  {
    id: 'cns_03',
    nameEn: 'Sara Mendez, MS, CGC',
    nameAr: 'سارة مينديز، ماجستير',
    roleEn: 'Certified Genetic Counsellor',
    roleAr: 'مرشد وراثي معتمد',
    focusEn: 'Uncertain results, family history',
    focusAr: 'النتائج غير المؤكدة، التاريخ العائلي',
    demo: true,
  },
]

/** Seed notifications for the demonstration account. */
export const demoNotifications = [
  {
    id: 'ntf_01',
    type: 'report',
    titleEn: 'Your sample report is ready',
    titleAr: 'تقريرك التجريبي جاهز',
    bodyEn: 'Open your report to read the plain-language summary.',
    bodyAr: 'افتح تقريرك لقراءة الملخص المكتوب بلغة بسيطة.',
    at: '2026-09-02T09:15:00Z',
    read: false,
  },
  {
    id: 'ntf_02',
    type: 'privacy',
    titleEn: 'No partner has access',
    titleAr: 'لا يملك شريك وصولًا',
    bodyEn: 'Your records are private until you grant access yourself.',
    bodyAr: 'سجلاتك خاصة حتى تمنح الوصول بنفسك.',
    at: '2026-09-02T09:14:00Z',
    read: false,
  },
  {
    id: 'ntf_03',
    type: 'education',
    titleEn: 'New topic: when a result is uncertain',
    titleAr: 'موضوع جديد: عندما تكون النتيجة غير مؤكدة',
    bodyEn: 'A short read on what "uncertain" does and does not mean.',
    bodyAr: 'قراءة قصيرة حول معنى «غير مؤكد» وما لا يعنيه.',
    at: '2026-08-28T17:40:00Z',
    read: true,
  },
]

/** Seed activity log entries. */
export const demoActivity = [
  {
    id: 'act_01',
    kind: 'reportViewed',
    at: '2026-09-02T09:20:00Z',
    detailEn: 'Opened Key Insights for 3 sample findings.',
    detailAr: 'فتح «أبرز النقاط» لثلاث نتائج توضيحية.',
  },
  {
    id: 'act_02',
    kind: 'signedIn',
    at: '2026-09-02T09:12:00Z',
    detailEn: 'Signed in on this device.',
    detailAr: 'تسجيل دخول على هذا الجهاز.',
  },
  {
    id: 'act_03',
    kind: 'languageChanged',
    at: '2026-08-30T11:05:00Z',
    detailEn: 'Display language set to English.',
    detailAr: 'تم ضبط لغة العرض على الإنجليزية.',
  },
]
