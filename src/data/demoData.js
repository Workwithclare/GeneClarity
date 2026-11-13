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
    id: 'cells-chromosomes',
    category: 'basics',
    titleEn: 'Understanding cells and chromosomes',
    titleAr: 'فهم الخلايا والكروموسومات',
    readMins: 2,
    excerptEn: 'Where your body’s instructions are kept, and how they are packaged.',
    excerptAr: 'أين تُخزَّن تعليمات جسمك وكيف تُعبَّأ.',
    meanEn: [
      'Your body is built from tiny building blocks called cells. Almost every cell carries a complete copy of your body’s instructions.',
      'Those instructions are packed into rod-shaped structures called chromosomes. Most people have 46 chromosomes in each cell, arranged in 23 pairs.',
      'One chromosome of each pair comes from your biological mother, and the other from your biological father.',
      'Genes sit along the chromosomes, like chapters lined up on a shelf.',
    ],
    meanAr: [
      'يتكوّن جسمك من بلوكات بناء صغيرة تُسمى الخلايا. تقريبًا كل خلية تحمل نسخة كاملة من تعليمات جسمك.',
      'تُعبَّأ تلك التعليمات في تراكيب على شكل عصا تُسمى الكروموسومات. لدى معظم الناس 46 كروموسومًا في كل خلية، مقسمة إلى 23 زوجًا.',
      'يأتي كروموسوم واحد من كل زوج من والدك البيولوجي، والآخر من والدتك البيولوجية.',
      'تقع الجينات على طول الكروموسومات، كفصول مصفوفة على رف.',
    ],
    art: 'cells',
    exampleEn:
      'Think of a cell as a library: the chromosomes are the shelves, and the genes are the individual books on them.',
    exampleAr:
      'تخيّل الخلية مكتبة: الكروموسومات هي الرفوف، والجينات هي الكتب المفردة عليها.',
    rememberEn: [
      'Almost every cell holds a full copy of your instructions.',
      'Those instructions are packaged as 46 chromosomes in 23 pairs.',
      'You receive one of each pair from each biological parent.',
    ],
    rememberAr: [
      'تقريبًا كل خلية تحمل نسخة كاملة من تعليماتك.',
      'تُعبَّأ التعليمات في 46 كروموسومًا مقسمة إلى 23 زوجًا.',
      'تحصل على واحد من كل زوج من كل والد بيولوجي.',
    ],
  },
  {
    id: 'dna-genes',
    category: 'basics',
    titleEn: 'Understanding DNA and genes',
    titleAr: 'فهم الحمض النووي والجينات',
    readMins: 2,
    excerptEn: 'What DNA is, what a gene does, and why versions differ.',
    excerptAr: 'ما هو الحمض النووي، وما وظيفة الجين، ولماذا تختلف نسخه.',
    meanEn: [
      'DNA is the molecule that carries the instructions. It looks like a twisted ladder and is often drawn as a double helix.',
      'A gene is a short section of DNA with one specific job — a recipe for a single protein, one of the small workers built inside your cells.',
      'Humans have around 20,000 genes spread along their chromosomes.',
      'Genes come in slightly different versions. Most version differences have no effect on health; a few are linked to inherited conditions.',
    ],
    meanAr: [
      'الحمض النووي DNA هو الجزيء الذي يحمل التعليمات. شكله سلّم ملتوٍ، وغالبًا ما يُرسم على شكل زوج حلزوني.',
      'الجين قسم قصير من الحمض النووي بوظيفة محددة واحدة — وصفة لبروتين واحد، وهو أحد العمال الصغار الذين يُبنَون داخل خلاياك.',
      'يملك البشر نحو 20,000 جين موزعة على كروموسوماتهم.',
      'تأتي الجينات بصور مختلفة قليلًا. معظم اختلافات الصور لا أثر لها على الصحة؛ وبعضها مرتبط بالأمراض الوراثية.',
    ],
    art: 'dna',
    misunderstandingEn:
      'One gene rarely controls one trait or one disease on its own. Most features and conditions involve several genes together with life circumstances.',
    misunderstandingAr:
      'نادرًا ما يتحكم جين واحد بصفة واحدة أو مرض واحد بمفرده. معظم الصفات والأمراض تشمل عدة جينات إلى جانب الظروف الحياتية.',
    rememberEn: [
      'DNA is the instruction molecule; genes are short sections of it.',
      'Each gene has one main job in your cells.',
      'Genes come in versions, and most version differences are harmless.',
    ],
    rememberAr: [
      'الحمض النووي هو جزيء التعليمات، والجينات أقسام قصيرة منه.',
      'لكل جين وظيفة أساسية في خلاياك.',
      'تأتي الجينات بصور مختلفة، ومعظم اختلافاتها بلا أثر على الصحة.',
    ],
  },
  {
    id: 'inheritance',
    category: 'basics',
    titleEn: 'How genetic information passes from parents to children',
    titleAr: 'كيف تنتقل المعلومات الوراثية من الوالدين إلى الأبناء',
    readMins: 3,
    excerptEn: 'Why children inherit a mixture from both biological parents.',
    excerptAr: 'لماذا يرث الأطفال مزيجًا من كلا الوالدين البيولوجيين.',
    meanEn: [
      'When a biological mother and a biological father have a child, each passes on one copy of every gene.',
      'The child therefore has two copies of each gene — one from each side of the family.',
      'Because each parent can pass a different version, brothers and sisters get different combinations. That is why siblings are alike but not identical.',
      'Some conditions follow a clear pattern of inheritance; others depend on many genes and on life circumstances.',
    ],
    meanAr: [
      'عندما أنجب والد بيولوجي ووالدة بيولوجية طفلًا، يجتاز كل منهما نسخة واحدة من كل جين.',
      'يملك الطفل بذلك نسختين من كل جين — واحدة من كل جانب من العائلة.',
      'لأن كل والد قد يجتاز صورة مختلفة، يحصل الإخوة على تركيبات مختلفة. ولهذا يتشابه الأشقاء دون أن يكونوا متطابقين.',
      'تتبع بعض الأمراض نمطًا واضحًا للوراثة؛ بينما تعتمد أخرى على عدة جينات وعلى الظروف الحياتية.',
    ],
    art: 'inheritance',
    exampleEn:
      'If both parents pass on the same working version, the child has two working versions. If both pass the same changed version, the child has two changed versions.',
    exampleAr:
      'إذا اجتاز كلا الوالدين النسخة السليمة نفسها، أصبح لدى الطفل نسختان سليمتان. وإذا اجتاز كلاهما النسخة المعدّلة نفسها، أصبح لديه نسختان معدّلتان.',
    rememberEn: [
      'You receive one copy of each gene from each biological parent.',
      'Siblings inherit different combinations.',
      'The pattern of inheritance is what shapes the chances for a condition.',
    ],
    rememberAr: [
      'تحصل على نسخة من كل جين من كل والد بيولوجي.',
      'يرث الإخوة تركيبات مختلفة.',
      'نمط الوراثة هو ما يشكّل احتمالات الإصابة بمرض ما.',
    ],
  },
  {
    id: 'inherited-conditions',
    category: 'conditions',
    titleEn: 'Understanding inherited conditions',
    titleAr: 'فهم الأمراض الوراثية',
    readMins: 2,
    excerptEn: 'What "inherited" means — and what it does not mean.',
    excerptAr: 'ماذا يعني «وراثي» — وماذا لا يعنيه.',
    meanEn: [
      'An inherited condition is one caused mainly by changes in genes passed down from a biological parent.',
      'Some inherited conditions are present from birth; others appear later in life; and some never cause problems.',
      '"Inherited" describes the cause, not the severity. Two people with the same condition can be affected very differently.',
      'A family history of a condition shows a pattern worth understanding — it is not a prediction about you.',
    ],
    meanAr: [
      'المرض الوراثي هو المرض الذي سببه أساسًا تغييرات في الجينات ورثها الشخص عن والد بيولوجي.',
      'بعض الأمراض الوراثية موجودة منذ الولادة؛ وبعضها يظهر لاحقًا في الحياة؛ وبعضها لا يسبب مشكلات أبدًا.',
      'كلمة «وراثي» تصف السبب لا الخطورة. شخصان يحملان المرض نفسه قد يتأثران باختلاف شديد.',
      'التاريخ العائلي لمرض ما يكشف نمطًا يستحق الفهم — وليس تنبؤًا عنك.',
    ],
    art: 'family',
    importantEn:
      'Inherited does not mean inevitable. Carrying a changed gene does not automatically mean you will develop the condition, and a family history does not mean it will happen to you.',
    importantAr:
      'وراثي لا يعني حتميًا. حمل جينًا معدَّلًا لا يعني بالضرورة أنك ستطور المرض، وتاريخ عائلي للمرض لا يعني أنه سيحدث لك.',
    rememberEn: [
      'Inherited conditions are mainly caused by gene changes passed from a parent.',
      'It is nobody’s fault.',
      'A family history shows a pattern, not a certainty.',
    ],
    rememberAr: [
      'الأمراض الوراثية سببها أساسًا تغييرات في الجينات وارثة عن أحد الوالدين.',
      'ليس ذنب أي طرف.',
      'التاريخ العائلي يكشف نمطًا لا يقينًا.',
    ],
  },
  {
    id: 'sickle-cell',
    category: 'conditions',
    titleEn: 'Understanding sickle cell',
    titleAr: 'فهم مرض الخلايا المنجلية',
    readMins: 3,
    excerptEn: 'What sickle cell trait means for health, and for a couple.',
    excerptAr: 'ماذا تعني صفة الخلايا المنجلية للصحة وللزوجين.',
    meanEn: [
      'Sickle cell is related to the HBB gene, which helps make haemoglobin — the part of blood that carries oxygen around your body.',
      'With sickle cell trait you have one changed copy and one working copy. Most people with the trait live normal, healthy lives.',
      'With sickle cell disease you have two changed copies, which can cause serious health problems.',
      'Where sickle cell disease is more common, screening for the trait is offered routinely.',
    ],
    meanAr: [
      'يتعلق مرض الخلايا المنجلية بجين HBB، الذي يساعد على صنع الهيموغلوبين — جزء الدم الذي يحمل الأكسجين في جسمك.',
      'صفة الخلايا المنجلية تعني نسخة واحدة معدّلة ونسخة عاملة. يعيش معظم حامل الصفة حياة طبيعية وصحية.',
      'مرض الخلايا المنجلية يعني نسختين معدّلتين، ويمكن أن يسبب مشكلات صحية خطيرة.',
      'حيث يكون المرض أكثر شيوعًا، يُعرض فحص الصفة بشكل روتيني.',
    ],
    misunderstandingEn:
      'Having sickle cell trait is not the same as having sickle cell disease. A carrier result does not mean you are ill.',
    misunderstandingAr:
      'وجود صفة الخلايا المنجلية لا يعني الإصابة بمرض الخلايا المنجلية. نتيجة «حامل» لا تعني أنك مريض.',
    importantEn:
      'In rare situations — very strenuous exertion, low oxygen or dehydration — trait carriers can have complications. It is worth mentioning the trait to a doctor before intensive training or high-altitude activity.',
    importantAr:
      'في حالات نادرة — بذل جهد شديد أو نقص أكسجين أو جفاف — قد يعاني حامل الصفة من مضاعفات. من المهم إخبار الطبيب بالصفة قبل التدريب المكثف أو النشاط على ارتفاعات عالية.',
    screeningEn:
      'Screening for sickle cell trait is a common, well-established test. It shows a chance for a couple, not a diagnosis for any individual pregnancy — that is a conversation for a counsellor.',
    screeningAr:
      'فحص صفة الخلايا المنجلية فحص شائع ومستقر علميًا. يُظهر احتمالًا للزوجين لا تشخيصًا لحمل بعينه — وهذه محادثة مع مرشد وراثي.',
    rememberEn: [
      'Sickle cell trait means one changed copy of HBB — most carriers are healthy.',
      'Sickle cell disease means two changed copies.',
      'Screening is not a diagnosis; discuss your result with a professional.',
    ],
    rememberAr: [
      'صفة الخلايا المنجلية تعني نسخة واحدة معدّلة من جين HBB — معظم الحاملين أصحاء.',
      'مرض الخلايا المنجلية يعني نسختين معدّلتين.',
      'الفحص ليس تشخيصًا — ناقش نتيجتك مع مختص.',
    ],
  },
  {
    id: 'carrier-status',
    category: 'basics',
    titleEn: 'Understanding carrier status',
    titleAr: 'فهم حالة الحامل',
    readMins: 3,
    excerptEn: 'What it means to carry one changed copy of a gene.',
    excerptAr: 'ماذا يعني أن تحمل نسخة واحدة معدّلة من جين.',
    meanEn: [
      'Most people have two copies of every gene — one from each biological parent.',
      'A carrier has one copy that differs from the usual version and one working copy. The working copy does the job, so carriers are generally healthy and usually have no idea they carry a change.',
      'It matters because two carriers of the same recessive condition can, together, have a child who inherits two changed copies.',
      'Being a carrier is very common. It is not a fault, an illness or a reason for shame.',
    ],
    meanAr: [
      'لدى معظم الناس نسختان من كل جين — واحدة من كل والد بيولوجي.',
      'الحامل يملك نسخة تختلف عن النسخة المعتادة ونسخة عاملة. النسخة العاملة تقوم بالوظيفة، لذا يكون الأصحاء حاملين غالبًا دون أن يدركون أنهم يحملون تغييرًا.',
      'الأهمية تظهر عند اجتماع حاملين لنفس المرض المتنحي، إذ يمكنهما أن ينجبا طفلًا يرث نسختين معدّلتين.',
      'أن تكون حاملًا أمر شائع جدًا. ليس مرضًا ولا عيبًا ولا سببًا للخجل.',
    ],
    exampleEn:
      'One working copy is enough to keep things running — like a lamp that still lights the room with one working bulb.',
    exampleAr:
      'النسخة العاملة واحدة تكفي لاستمرار العمل — كمصباح يضيء الغرفة بلمبة واحدة عاملة.',
    misunderstandingEn:
      'Being a carrier is not the same as being ill. Carrier status says nothing bad about your own health.',
    misunderstandingAr:
      'أن تكون حاملًا لا يعني أنك مريض. حالة الحامل لا تقول شيئًا سيئًا عن صحتك.',
    rememberEn: [
      'A carrier has one changed copy and one working copy.',
      'Carriers are generally healthy and often do not know they carry a change.',
      'Carrier status matters most when both partners carry changes in the same gene.',
    ],
    rememberAr: [
      'الحامل يملك نسخة معدّلة ونسخة عاملة.',
      'الحاملون أصحاء غالبًا، وغالبًا ما لا يعرفون أنهم يحملون التغيير.',
      'تظهر أهمية حالة الحامل عندما يحمل الشريكان تغييرات في نفس الجين.',
    ],
  },
  {
    id: 'probabilities',
    category: 'basics',
    titleEn: 'Understanding inherited disease probabilities',
    titleAr: 'فهم احتمالات الأمراض الوراثية',
    readMins: 3,
    excerptEn: 'What numbers like 25% actually mean — and what they do not.',
    excerptAr: 'ماذا تعني أرقام مثل 25% فعلًا — وماذا لا تعنيها.',
    meanEn: [
      'A probability is a chance, not a prediction. It describes how often an outcome happens across many possibilities — not what will happen to one person.',
      'When both biological parents carry a changed copy of the same gene, each pregnancy carries an independent chance of the child inheriting two changed copies.',
      'For many recessive conditions that chance is 25%, but the exact figure depends on the specific condition and must be confirmed for your own situation.',
      'The chance applies afresh to every pregnancy. It does not add up, average out, or get used up.',
    ],
    meanAr: [
      'الاحتمال فرصة لا تنبؤ. يصف كم مرة تحدث نتيجة بين كثير من الاحتمالات — لا ما سيحدث لشخص واحد.',
      'عندما يحمل كل من الوالدين البيولوجيين نسخة معدّلة من نفس الجين، يحمل كل حمل احتمالًا مستقلًا لوراثة الطفل نسختين معدّلتين.',
      'في كثير من الأمراض المتنحية يكون هذا الاحتمال 25%، لكن الرقم الدقيق يعتمد على المرض نفسه ويجب تأكيده لحالتك.',
      'الاحتمال ينطبق من جديد على كل حمل. لا يتراكم ولا يُصفَّر ولا ينفد.',
    ],
    art: 'probability',
    exampleEn:
      'Imagine four equally likely outcomes, like four identical boxes with one marked. Each pregnancy opens a new set of four boxes — the mark from last time does not carry over.',
    exampleAr:
      'تخيّل أربع نتائج متساوية الاحتمال، كأربع صناديق متطابقة أحدها معلَّم. كل حمل يفتح مجموعة صناديق جديدة — وعلامة المرة السابقة لا تنتقل.',
    misunderstandingEn:
      'A 25% chance does not mean exactly one in four of your children will be affected. It means that across a very large number of similar situations, about a quarter of the outcomes would be affected children.',
    misunderstandingAr:
      'احتمال 25% لا يعني بالضبط أن طفلًا واحدًا من كل أربعة سيصاب. بل يعني أنه في عدد ضخم من الحالات المتشابهة، نحو ربع النتائج ستكون أطفالًا مصابين.',
    screeningEn:
      'Screening tells you which chances apply to you as a couple. It cannot predict what will happen in any individual pregnancy — that is a question for a counsellor with both results in hand.',
    screeningAr:
      'يقول لك الفحص أي الاحتمالات تنطبق عليكما كزوجين. لكنه لا يستطيع التنبؤ بما سيحدث في حمل بعينه — هذا سؤال يجيب عنه المرشد بالنتيجتين معًا.',
    rememberEn: [
      'A probability is a chance, not a prediction.',
      'Each pregnancy has its own independent chance.',
      'Confirm the exact figures for your condition with a qualified counsellor.',
    ],
    rememberAr: [
      'الاحتمال فرصة لا تنبؤ.',
      'لكل حمل احتمال مستقل خاص به.',
      'أكّد الأرقام الدقيقة لحالتك مع مرشد مؤهل.',
    ],
  },
  {
    id: 'screening-counselling',
    category: 'counselling',
    titleEn: 'Understanding screening and professional counselling',
    titleAr: 'فهم الفحص والإرشاد الوراثي المهني',
    readMins: 3,
    excerptEn: 'What a screen can and cannot tell you, and who explains it.',
    excerptAr: 'ما الذي يستطيع فحصك قوله وما لا يستطيع، ومن يفسّره لك.',
    meanEn: [
      'Screening checks whether you carry changes linked to certain inherited conditions. It is a starting point for a conversation, not a diagnosis.',
      'A carrier or positive screen result is not a diagnosis of disease — it is information about chance that usually needs confirmation and interpretation.',
      'A genetic counsellor is a trained professional who explains test results, inheritance patterns and what they mean for you and your partner.',
      'A counsellor does not tell you what to do. They make sure you understand your options well enough to decide for yourself.',
    ],
    meanAr: [
      'يفحص ما إذا كنت تحمل تغييرات مرتبطة ببعض الأمراض الوراثية. إنه نقطة بداية لمحادثة، وليس تشخيصًا.',
      'نتيجة «حامل» أو نتيجة إيجابية في الفحص ليست تشخيصًا لمرض — بل معلومات عن احتمال تحتاج عادةً إلى تأكيد وتفسير.',
      'المرشد الوراثي مختص مدرّب يفسّر نتائج الفحص وأنماط الوراثة وما تعنيه لكما.',
      'المرشد لا يخبرك بما يجب فعله. بل يضمن أنك تفهم خياراتك جيدًا لتقرر بنفسك.',
    ],
    art: 'counsellor',
    questionsEn: [
      'Which conditions was I screened for?',
      'What does my result mean for my partner?',
      'What are my options, and what would you recommend I read?',
    ],
    questionsAr: [
      'ما الأمراض التي تم فحصي لها؟',
      'ماذا تعني نتيجتي لشريكي؟',
      'ما خياراتي، وما الذي تنصحني بقراءته؟',
    ],
    rememberEn: [
      'Screening is not a diagnosis; it describes chances.',
      'Counsellors explain results — decisions stay with you.',
      'Bring your questions; you do not need to arrive with answers.',
    ],
    rememberAr: [
      'الفحص ليس تشخيصًا؛ هو يصف الاحتمالات.',
      'المرشد يفسّر النتائج — والقرارات تبقى لك.',
      'أحضر أسئلتك؛ لست مطالبًا بالإجابات.',
    ],
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
    titleEn: 'New topic: understanding inherited disease probabilities',
    titleAr: 'موضوع جديد: فهم احتمالات الأمراض الوراثية',
    bodyEn: 'A short read on what numbers like 25% actually mean.',
    bodyAr: 'قراءة قصيرة حول معنى أرقام مثل 25% فعلًا.',
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
