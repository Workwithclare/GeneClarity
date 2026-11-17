/**
 * GeneClarity content catalogue — long-form, per-record copy.
 *
 * ─────────────────────────────────────────────────────────────────
 * Separate from `translations.js`: this holds the educational and
 * record-level strings that belong to specific data records (a
 * result, a lesson, a notification, an activity entry …), keyed by
 * the record's stable id. UI chrome (buttons, headings) stays in
 * `translations.js` / `t()`; body content lives here and is read
 * with `tc(key, params)` / `tList(key)` from LanguageContext.
 *
 * The English and Arabic catalogues live here; French, Spanish,
 * Swahili and Hausa live in sibling files (`content_fr.js` …) and
 * are imported below, so every user-facing string for every language
 * is still visible in this one directory.
 *
 * Array content uses indexed keys (`…mean.0`, `…mean.1`, …) whose
 * count is derived from the English catalogue — parity across all
 * six languages is verified by `npm run i18n:check`.
 *
 * All non-English text was written for this project and follows the
 * same plain-language register as the English copy. The French,
 * Spanish, Swahili and Hausa catalogues are provisional translations
 * pending professional review — see docs/06_ACCESSIBILITY_AND_I18N.md.
 * ─────────────────────────────────────────────────────────────────
 */

import { fr } from './content_fr.js'
import { es } from './content_es.js'
import { sw } from './content_sw.js'
import { ha } from './content_ha.js'

export const contentEn = {
  // --- Screening results (Key Insights / Report) ------------------
  'content.result.sickle-cell.summary':
    'You are a carrier for sickle cell trait (HbAS).',
  'content.result.sickle-cell.plain':
    'This means you carry one copy of the gene. It is usually healthy and does not cause sickle cell disease.',
  'content.result.sickle-cell.forYou':
    'Carrying one changed copy normally has no effect on your own health. Some people notice mild effects under extreme physical stress, which is worth mentioning to a doctor.',
  'content.result.sickle-cell.forCouple':
    'If your partner is also a carrier, there is a chance with each pregnancy of a child inheriting two copies. This is a chance, not a certainty, and it is best discussed with a counsellor using both results.',

  'content.result.tay-sachs.summary': 'No changed copy detected in this screening.',
  'content.result.tay-sachs.plain':
    'The screening did not find a changed copy of this gene. This lowers the likelihood of being a carrier, but no screening test rules a carrier status out completely.',
  'content.result.tay-sachs.forYou':
    'There is nothing for you to act on here. A "not detected" result describes this test only, not every possible change in the gene.',
  'content.result.tay-sachs.forCouple':
    'A clear result for one partner does not by itself describe a couple. Screening is most informative when both people are tested.',

  'content.result.cystic-fibrosis.summary':
    'A change was found, but its meaning is not yet understood.',
  'content.result.cystic-fibrosis.plain':
    'A difference was found in this gene. At present the scientific evidence is not strong enough to say whether it affects health. This is called a variant of uncertain significance.',
  'content.result.cystic-fibrosis.forYou':
    'An uncertain result is not good news or bad news — it is unfinished information. It should not change any decision you make about your health.',
  'content.result.cystic-fibrosis.forCouple':
    'Uncertain findings should be interpreted by a professional alongside the full family history. Do not treat them as a carrier result.',

  // --- Education lessons ------------------------------------------
  'content.learn.cells-chromosomes.title': 'Understanding cells and chromosomes',
  'content.learn.cells-chromosomes.excerpt':
    'Where your body’s instructions are kept, and how they are packaged.',
  'content.learn.cells-chromosomes.mean.0':
    'Your body is built from tiny building blocks called cells. Almost every cell carries a complete copy of your body’s instructions.',
  'content.learn.cells-chromosomes.mean.1':
    'Those instructions are packed into rod-shaped structures called chromosomes. Most people have 46 chromosomes in each cell, arranged in 23 pairs.',
  'content.learn.cells-chromosomes.mean.2':
    'One chromosome of each pair comes from your biological mother, and the other from your biological father.',
  'content.learn.cells-chromosomes.mean.3':
    'Genes sit along the chromosomes, like chapters lined up on a shelf.',
  'content.learn.cells-chromosomes.example':
    'Think of a cell as a library: the chromosomes are the shelves, and the genes are the individual books on them.',
  'content.learn.cells-chromosomes.remember.0':
    'Almost every cell holds a full copy of your instructions.',
  'content.learn.cells-chromosomes.remember.1':
    'Those instructions are packaged as 46 chromosomes in 23 pairs.',
  'content.learn.cells-chromosomes.remember.2':
    'You receive one of each pair from each biological parent.',

  'content.learn.dna-genes.title': 'Understanding DNA and genes',
  'content.learn.dna-genes.excerpt':
    'What DNA is, what a gene does, and why versions differ.',
  'content.learn.dna-genes.mean.0':
    'DNA is the molecule that carries the instructions. It looks like a twisted ladder and is often drawn as a double helix.',
  'content.learn.dna-genes.mean.1':
    'A gene is a short section of DNA with one specific job — a recipe for a single protein, one of the small workers built inside your cells.',
  'content.learn.dna-genes.mean.2':
    'Humans have around 20,000 genes spread along their chromosomes.',
  'content.learn.dna-genes.mean.3':
    'Genes come in slightly different versions. Most version differences have no effect on health; a few are linked to inherited conditions.',
  'content.learn.dna-genes.misunderstanding':
    'One gene rarely controls one trait or one disease on its own. Most features and conditions involve several genes together with life circumstances.',
  'content.learn.dna-genes.remember.0':
    'DNA is the instruction molecule; genes are short sections of it.',
  'content.learn.dna-genes.remember.1': 'Each gene has one main job in your cells.',
  'content.learn.dna-genes.remember.2':
    'Genes come in versions, and most version differences are harmless.',

  'content.learn.inheritance.title':
    'How genetic information passes from parents to children',
  'content.learn.inheritance.excerpt':
    'Why children inherit a mixture from both biological parents.',
  'content.learn.inheritance.mean.0':
    'When a biological mother and a biological father have a child, each passes on one copy of every gene.',
  'content.learn.inheritance.mean.1':
    'The child therefore has two copies of each gene — one from each side of the family.',
  'content.learn.inheritance.mean.2':
    'Because each parent can pass a different version, brothers and sisters get different combinations. That is why siblings are alike but not identical.',
  'content.learn.inheritance.mean.3':
    'Some conditions follow a clear pattern of inheritance; others depend on many genes and on life circumstances.',
  'content.learn.inheritance.example':
    'If both parents pass on the same working version, the child has two working versions. If both pass the same changed version, the child has two changed versions.',
  'content.learn.inheritance.remember.0':
    'You receive one copy of each gene from each biological parent.',
  'content.learn.inheritance.remember.1': 'Siblings inherit different combinations.',
  'content.learn.inheritance.remember.2':
    'The pattern of inheritance is what shapes the chances for a condition.',

  'content.learn.inherited-conditions.title': 'Understanding inherited conditions',
  'content.learn.inherited-conditions.excerpt':
    'What "inherited" means — and what it does not mean.',
  'content.learn.inherited-conditions.mean.0':
    'An inherited condition is one caused mainly by changes in genes passed down from a biological parent.',
  'content.learn.inherited-conditions.mean.1':
    'Some inherited conditions are present from birth; others appear later in life; and some never cause problems.',
  'content.learn.inherited-conditions.mean.2':
    '"Inherited" describes the cause, not the severity. Two people with the same condition can be affected very differently.',
  'content.learn.inherited-conditions.mean.3':
    'A family history of a condition shows a pattern worth understanding — it is not a prediction about you.',
  'content.learn.inherited-conditions.important':
    'Inherited does not mean inevitable. Carrying a changed gene does not automatically mean you will develop the condition, and a family history does not mean it will happen to you.',
  'content.learn.inherited-conditions.remember.0':
    'Inherited conditions are mainly caused by gene changes passed from a parent.',
  'content.learn.inherited-conditions.remember.1': 'It is nobody’s fault.',
  'content.learn.inherited-conditions.remember.2':
    'A family history shows a pattern, not a certainty.',

  'content.learn.sickle-cell.title': 'Understanding sickle cell',
  'content.learn.sickle-cell.excerpt':
    'What sickle cell trait means for health, and for a couple.',
  'content.learn.sickle-cell.mean.0':
    'Sickle cell is related to the HBB gene, which helps make haemoglobin — the part of blood that carries oxygen around your body.',
  'content.learn.sickle-cell.mean.1':
    'With sickle cell trait you have one changed copy and one working copy. Most people with the trait live normal, healthy lives.',
  'content.learn.sickle-cell.mean.2':
    'With sickle cell disease you have two changed copies, which can cause serious health problems.',
  'content.learn.sickle-cell.mean.3':
    'Where sickle cell disease is more common, screening for the trait is offered routinely.',
  'content.learn.sickle-cell.misunderstanding':
    'Having sickle cell trait is not the same as having sickle cell disease. A carrier result does not mean you are ill.',
  'content.learn.sickle-cell.important':
    'In rare situations — very strenuous exertion, low oxygen or dehydration — trait carriers can have complications. It is worth mentioning the trait to a doctor before intensive training or high-altitude activity.',
  'content.learn.sickle-cell.screening':
    'Screening for sickle cell trait is a common, well-established test. It shows a chance for a couple, not a diagnosis for any individual pregnancy — that is a conversation for a counsellor.',
  'content.learn.sickle-cell.remember.0':
    'Sickle cell trait means one changed copy of HBB — most carriers are healthy.',
  'content.learn.sickle-cell.remember.1':
    'Sickle cell disease means two changed copies.',
  'content.learn.sickle-cell.remember.2':
    'Screening is not a diagnosis; discuss your result with a professional.',

  'content.learn.carrier-status.title': 'Understanding carrier status',
  'content.learn.carrier-status.excerpt':
    'What it means to carry one changed copy of a gene.',
  'content.learn.carrier-status.mean.0':
    'Most people have two copies of every gene — one from each biological parent.',
  'content.learn.carrier-status.mean.1':
    'A carrier has one copy that differs from the usual version and one working copy. The working copy does the job, so carriers are generally healthy and usually have no idea they carry a change.',
  'content.learn.carrier-status.mean.2':
    'It matters because two carriers of the same recessive condition can, together, have a child who inherits two changed copies.',
  'content.learn.carrier-status.mean.3':
    'Being a carrier is very common. It is not a fault, an illness or a reason for shame.',
  'content.learn.carrier-status.example':
    'One working copy is enough to keep things running — like a lamp that still lights the room with one working bulb.',
  'content.learn.carrier-status.misunderstanding':
    'Being a carrier is not the same as being ill. Carrier status says nothing bad about your own health.',
  'content.learn.carrier-status.remember.0':
    'A carrier has one changed copy and one working copy.',
  'content.learn.carrier-status.remember.1':
    'Carriers are generally healthy and often do not know they carry a change.',
  'content.learn.carrier-status.remember.2':
    'Carrier status matters most when both partners carry changes in the same gene.',

  'content.learn.probabilities.title':
    'Understanding inherited disease probabilities',
  'content.learn.probabilities.excerpt':
    'What numbers like 25% actually mean — and what they do not.',
  'content.learn.probabilities.mean.0':
    'A probability is a chance, not a prediction. It describes how often an outcome happens across many possibilities — not what will happen to one person.',
  'content.learn.probabilities.mean.1':
    'When both biological parents carry a changed copy of the same gene, each pregnancy carries an independent chance of the child inheriting two changed copies.',
  'content.learn.probabilities.mean.2':
    'For many recessive conditions that chance is 25%, but the exact figure depends on the specific condition and must be confirmed for your own situation.',
  'content.learn.probabilities.mean.3':
    'The chance applies afresh to every pregnancy. It does not add up, average out, or get used up.',
  'content.learn.probabilities.example':
    'Imagine four equally likely outcomes, like four identical boxes with one marked. Each pregnancy opens a new set of four boxes — the mark from last time does not carry over.',
  'content.learn.probabilities.misunderstanding':
    'A 25% chance does not mean exactly one in four of your children will be affected. It means that across a very large number of similar situations, about a quarter of the outcomes would be affected children.',
  'content.learn.probabilities.screening':
    'Screening tells you which chances apply to you as a couple. It cannot predict what will happen in any individual pregnancy — that is a question for a counsellor with both results in hand.',
  'content.learn.probabilities.remember.0':
    'A probability is a chance, not a prediction.',
  'content.learn.probabilities.remember.1':
    'Each pregnancy has its own independent chance.',
  'content.learn.probabilities.remember.2':
    'Confirm the exact figures for your condition with a qualified counsellor.',

  'content.learn.screening-counselling.title':
    'Understanding screening and professional counselling',
  'content.learn.screening-counselling.excerpt':
    'What a screen can and cannot tell you, and who explains it.',
  'content.learn.screening-counselling.mean.0':
    'Screening checks whether you carry changes linked to certain inherited conditions. It is a starting point for a conversation, not a diagnosis.',
  'content.learn.screening-counselling.mean.1':
    'A carrier or positive screen result is not a diagnosis of disease — it is information about chance that usually needs confirmation and interpretation.',
  'content.learn.screening-counselling.mean.2':
    'A genetic counsellor is a trained professional who explains test results, inheritance patterns and what they mean for you and your partner.',
  'content.learn.screening-counselling.mean.3':
    'A counsellor does not tell you what to do. They make sure you understand your options well enough to decide for yourself.',
  'content.learn.screening-counselling.questions.0':
    'Which conditions was I screened for?',
  'content.learn.screening-counselling.questions.1':
    'What does my result mean for my partner?',
  'content.learn.screening-counselling.questions.2':
    'What are my options, and what would you recommend I read?',
  'content.learn.screening-counselling.remember.0':
    'Screening is not a diagnosis; it describes chances.',
  'content.learn.screening-counselling.remember.1':
    'Counsellors explain results — decisions stay with you.',
  'content.learn.screening-counselling.remember.2':
    'Bring your questions; you do not need to arrive with answers.',

  // --- Journey: Understand My Results ----------------------------
  'content.understand.screening-vs-diagnosis.title':
    'Screening is not a diagnosis',
  'content.understand.screening-vs-diagnosis.body.0':
    'A screening test looks for whether you carry changes linked to certain inherited conditions. It is made to start a conversation, not to confirm or rule out a disease.',
  'content.understand.screening-vs-diagnosis.body.1':
    'A "carrier" or positive screening result is not a diagnosis of disease. Confirmatory testing and professional interpretation usually come before any medical conclusion.',
  'content.understand.screening-vs-diagnosis.body.2':
    'A "not detected" result lowers the likelihood of carrying the changes that were checked for — but no screening test rules a carrier status out completely.',
  'content.understand.carrier-vs-disease.title':
    'Carrier status is not the same as disease',
  'content.understand.carrier-vs-disease.body.0':
    'A carrier has one changed copy of a gene and one working copy. The working copy does its job, so carriers are generally healthy and often do not know they carry a change.',
  'content.understand.carrier-vs-disease.body.1':
    'Many inherited conditions only appear when a person inherits two changed copies of the same gene — one from each biological parent.',
  'content.understand.carrier-vs-disease.body.2':
    'Being a carrier is common and is nobody\'s fault. It describes a chance to discuss with a professional — it is not an illness, and not a prediction of your own health.',

  'content.label.negative.label': 'Not detected / negative',
  'content.label.negative.desc':
    'The changes checked for in this screening were not found. This lowers the likelihood of carrying those specific changes; it does not guarantee you carry none at all.',
  'content.label.carrier.label': 'Carrier / positive',
  'content.label.carrier.desc':
    'One changed copy of the gene was found. This usually does not affect your own health, and matters mainly because two carriers of the same gene can discuss their chances together.',
  'content.label.uncertain.label': 'Uncertain',
  'content.label.uncertain.desc':
    'A difference was found, but current evidence is not strong enough to say what it means. This is neither good news nor bad news — it is unfinished information that a professional should read together with your family history.',

  'content.boundary':
    'GeneClarity does not automatically diagnose, classify or medically interpret the documents you upload. This section explains general terminology only.',
  'content.futureAi':
    'If document interpretation is ever added, it will be a separate feature requiring your explicit consent, clinical validation, and professional oversight. It is not part of this prototype.',
  'content.counselling':
    'A genetic counsellor is a trained professional who explains test results, inheritance patterns and what they mean for you and your partner — without telling you what to do. The decision stays with you.',

  // --- Journey: Professional Guidance ----------------------------
  'content.useful.0': 'You received a result or document you do not understand.',
  'content.useful.1':
    'Both you and your partner have screening results to consider together.',
  'content.useful.2': 'A result was reported as uncertain.',
  'content.useful.3':
    'A condition runs in your family and you want to understand what that can mean.',
  'content.useful.4':
    'You want the numbers explained for your own situation, not in general.',

  'content.question.0': 'Which conditions was I screened for?',
  'content.question.1': 'What exactly does my result mean?',
  'content.question.2': 'Does my result need confirmatory testing?',
  'content.question.3': 'What does my result mean for my partner?',
  'content.question.4': 'What are the chances, in numbers, for our situation?',
  'content.question.5':
    'What options do we have, and what would you recommend reading?',
  'content.question.6': 'Should anyone else in my family be tested?',
  'content.question.7': 'How and when should this information be revisited?',

  // --- Journey: sample document ----------------------------------
  'content.sample.badge': 'Demo sample',
  'content.sample.title': 'Synthetic Screening Report',
  'content.sample.note':
    'This is an original synthetic document created for this demonstration. It is not a real report, contains no real patient data, and is not a medical record.',
  'content.sample.field.prepared.label': 'Prepared for',
  'content.sample.field.prepared.value': 'Sample Person (fictional)',
  'content.sample.field.issued.label': 'Issued by',
  'content.sample.field.issued.value': 'Demo Laboratory (fictional)',
  'content.sample.field.reference.label': 'Reference',
  'content.sample.field.reference.value': 'GC-DEMO-0001',
  'content.sample.field.date.label': 'Date',
  'content.sample.field.date.value': '15 Jan 2026',
  'content.sample.row.HBB.finding': 'Sickle cell trait (HbAS)',
  'content.sample.row.HBB.plain':
    'One changed copy found. Carriers are generally healthy.',
  'content.sample.row.HEXA.finding': 'No change detected',
  'content.sample.row.HEXA.plain':
    'The change checked for was not found in this screening.',
  'content.sample.row.CFTR.finding': 'Change of uncertain significance',
  'content.sample.row.CFTR.plain':
    'A difference was found; its meaning is not yet understood.',
  'content.sample.footer':
    'Screening result — not a diagnosis. Discuss this document with a qualified healthcare professional. (Demonstration document; synthetic data.)',

  // --- Notifications ----------------------------------------------
  'content.notify.ntf_01.title': 'Your sample report is ready',
  'content.notify.ntf_01.body':
    'Open your report to read the plain-language summary.',
  'content.notify.ntf_02.title': 'No partner has access',
  'content.notify.ntf_02.body':
    'Your records are private until you grant access yourself.',
  'content.notify.ntf_03.title':
    'New topic: understanding inherited disease probabilities',
  'content.notify.ntf_03.body':
    'A short read on what numbers like 25% actually mean.',

  // --- Counsellor directory (illustrative only) -------------------
  'content.counsellor.cns_01.name': 'Dr. Amara Okonkwo',
  'content.counsellor.cns_01.role': 'Registered Genetic Counsellor',
  'content.counsellor.cns_01.focus': 'Carrier screening, couple counselling',
  'content.counsellor.cns_02.name': 'Dr. Yusuf Haddad',
  'content.counsellor.cns_02.role': 'Clinical Genetics Counsellor',
  'content.counsellor.cns_02.focus': 'Reproductive risk, result interpretation',
  'content.counsellor.cns_03.name': 'Sara Mendez, MS, CGC',
  'content.counsellor.cns_03.role': 'Certified Genetic Counsellor',
  'content.counsellor.cns_03.focus': 'Uncertain results, family history',

  // --- Activity log (seed + runtime) ------------------------------
  'content.act.reportViewed': 'Opened Key Insights for 3 sample findings.',
  'content.act.signedIn': 'Signed in on this device.',
  'content.act.languageChanged': 'Display language set to English.',
  'content.act.consentAccepted': 'Accepted the privacy and consent notice.',
  'content.act.inviteSent': 'Sent a partner invitation. Nothing shared yet.',
  'content.act.grantAccess': 'Granted partner access ({n} categories).',
  'content.act.revokeAccess': 'Revoked partner access. Future access stopped.',
  'content.act.clearPartner': 'Removed partner connection entirely.',
  'content.act.settingChanged': 'Setting "{key}" changed to {value}.',
}

export const contentAr = {
  // --- نتائج الفحص ------------------------------------------------
  'content.result.sickle-cell.summary': 'أنت حامل لمرض الخلايا المنجلية (HbAS).',
  'content.result.sickle-cell.plain':
    'يعني أنك تحمل نسخة واحدة من الجين. عادةً تكون الحالة صحية ولا تسبب مرض الخلايا المنجلية.',
  'content.result.sickle-cell.forYou':
    'حمل النسخة المعدّلة الواحدة لا يؤثر عادةً على صحتك. قد يشعر بعض الناس بأثر خفيف عند إجهاد شديد، وتجدر إشارة ذلك إلى الطبيب.',
  'content.result.sickle-cell.forCouple':
    'إذا كان شريكك حاملًا أيضًا، فهناك احتمال في كل حمل لطفل يرث نسختين. هذا احتمال لا يقين، ومن الأفضل مناقشته مع مرشد باستخدام النتيجتين معًا.',

  'content.result.tay-sachs.summary': 'لم يُكتشف أي تغير في هذا الفحص.',
  'content.result.tay-sachs.plain':
    'لم يجد الفحص نسخة معدّلة من هذا الجين. يقلل ذلك من احتمال كونك حاملًا، لكن لا فحص يستبعده تمامًا.',
  'content.result.tay-sachs.forYou':
    'لا يوجد ما يجب فعله هنا. نتيجة «لم يُكتشف» تصف هذا الفحص فقط ولا تشمل كل التغيرات الممكنة في الجين.',
  'content.result.tay-sachs.forCouple':
    'نتيجة واضحة لشريك واحد لا تصف الزوجين بحد ذاتها. الفحص يكون الأكثر فائدة عند فحص كليهما.',

  'content.result.cystic-fibrosis.summary':
    'وُجد تغير، لكن دلالةه غير مفهومة حتى الآن.',
  'content.result.cystic-fibrosis.plain':
    'وُجد اختلاف في هذا الجين. حاليًا الأدلة العلمية لا تكفي للقول إذا كان يؤثر على الصحة. يُسمى هذا «تغير غير مؤكد الدلالة».',
  'content.result.cystic-fibrosis.forYou':
    'النتيجة غير المؤكدة ليست خبرًا سارًا ولا مؤسفًا — بل معلومات غير مكتملة. لا ينبغي أن تغيّر أي قرار تتخذه بشأن صحتك.',
  'content.result.cystic-fibrosis.forCouple':
    'يجب على مختص تفسير النتائج غير المؤكدة بجانب التاريخ العائلي الكامل. لا تعاملها كنتيجة حامل.',

  // --- دروس التعلم ------------------------------------------------
  'content.learn.cells-chromosomes.title': 'فهم الخلايا والكروموسومات',
  'content.learn.cells-chromosomes.excerpt':
    'أين تُخزَّن تعليمات جسمك وكيف تُعبَّأ.',
  'content.learn.cells-chromosomes.mean.0':
    'يتكوّن جسمك من بلوكات بناء صغيرة تُسمى الخلايا. تقريبًا كل خلية تحمل نسخة كاملة من تعليمات جسمك.',
  'content.learn.cells-chromosomes.mean.1':
    'تُعبَّأ تلك التعليمات في تراكيب على شكل عصا تُسمى الكروموسومات. لدى معظم الناس 46 كروموسومًا في كل خلية، مقسمة إلى 23 زوجًا.',
  'content.learn.cells-chromosomes.mean.2':
    'يأتي كروموسوم واحد من كل زوج من والدك البيولوجي، والآخر من والدتك البيولوجية.',
  'content.learn.cells-chromosomes.mean.3':
    'تقع الجينات على طول الكروموسومات، كفصول مصفوفة على رف.',
  'content.learn.cells-chromosomes.example':
    'تخيّل الخلية مكتبة: الكروموسومات هي الرفوف، والجينات هي الكتب المفردة عليها.',
  'content.learn.cells-chromosomes.remember.0':
    'تقريبًا كل خلية تحمل نسخة كاملة من تعليماتك.',
  'content.learn.cells-chromosomes.remember.1':
    'تُعبَّأ التعليمات في 46 كروموسومًا مقسمة إلى 23 زوجًا.',
  'content.learn.cells-chromosomes.remember.2':
    'تحصل على واحد من كل زوج من كل والد بيولوجي.',

  'content.learn.dna-genes.title': 'فهم الحمض النووي والجينات',
  'content.learn.dna-genes.excerpt': 'ما هو الحمض النووي، وما وظيفة الجين، ولماذا تختلف نسخه.',
  'content.learn.dna-genes.mean.0':
    'الحمض النووي DNA هو الجزيء الذي يحمل التعليمات. شكله سلّم ملتوٍ، وغالبًا ما يُرسم على شكل زوج حلزوني.',
  'content.learn.dna-genes.mean.1':
    'الجين قسم قصير من الحمض النووي بوظيفة محددة واحدة — وصفة لبروتين واحد، وهو أحد العمال الصغار الذين يُبنَون داخل خلاياك.',
  'content.learn.dna-genes.mean.2':
    'يملك البشر نحو 20,000 جين موزعة على كروموسوماتهم.',
  'content.learn.dna-genes.mean.3':
    'تأتي الجينات بصور مختلفة قليلًا. معظم اختلافات الصور لا أثر لها على الصحة؛ وبعضها مرتبط بالأمراض الوراثية.',
  'content.learn.dna-genes.misunderstanding':
    'نادرًا ما يتحكم جين واحد بصفة واحدة أو مرض واحد بمفرده. معظم الصفات والأمراض تشمل عدة جينات إلى جانب الظروف الحياتية.',
  'content.learn.dna-genes.remember.0':
    'الحمض النووي هو جزيء التعليمات، والجينات أقسام قصيرة منه.',
  'content.learn.dna-genes.remember.1': 'لكل جين وظيفة أساسية في خلاياك.',
  'content.learn.dna-genes.remember.2':
    'تأتي الجينات بصور مختلفة، ومعظم اختلافاتها بلا أثر على الصحة.',

  'content.learn.inheritance.title':
    'كيف تنتقل المعلومات الوراثية من الوالدين إلى الأبناء',
  'content.learn.inheritance.excerpt':
    'لماذا يرث الأطفال مزيجًا من كلا الوالدين البيولوجيين.',
  'content.learn.inheritance.mean.0':
    'عندما أنجب والد بيولوجي ووالدة بيولوجية طفلًا، يجتاز كل منهما نسخة واحدة من كل جين.',
  'content.learn.inheritance.mean.1':
    'يملك الطفل بذلك نسختين من كل جين — واحدة من كل جانب من العائلة.',
  'content.learn.inheritance.mean.2':
    'لأن كل والد قد يجتاز صورة مختلفة، يحصل الإخوة على تركيبات مختلفة. ولهذا يتشابه الأشقاء دون أن يكونوا متطابقين.',
  'content.learn.inheritance.mean.3':
    'تتبع بعض الأمراض نمطًا واضحًا للوراثة؛ بينما تعتمد أخرى على عدة جينات وعلى الظروف الحياتية.',
  'content.learn.inheritance.example':
    'إذا اجتاز كلا الوالدين النسخة السليمة نفسها، أصبح لدى الطفل نسختان سليمتان. وإذا اجتاز كلاهما النسخة المعدّلة نفسها، أصبح لديه نسختان معدّلتان.',
  'content.learn.inheritance.remember.0':
    'تحصل على نسخة من كل جين من كل والد بيولوجي.',
  'content.learn.inheritance.remember.1': 'يرث الإخوة تركيبات مختلفة.',
  'content.learn.inheritance.remember.2':
    'نمط الوراثة هو ما يشكّل احتمالات الإصابة بمرض ما.',

  'content.learn.inherited-conditions.title': 'فهم الأمراض الوراثية',
  'content.learn.inherited-conditions.excerpt': 'ماذا يعني «وراثي» — وماذا لا يعنيه.',
  'content.learn.inherited-conditions.mean.0':
    'المرض الوراثي هو المرض الذي سببه أساسًا تغييرات في الجينات ورثها الشخص عن والد بيولوجي.',
  'content.learn.inherited-conditions.mean.1':
    'بعض الأمراض الوراثية موجودة منذ الولادة؛ وبعضها يظهر لاحقًا في الحياة؛ وبعضها لا يسبب مشكلات أبدًا.',
  'content.learn.inherited-conditions.mean.2':
    'كلمة «وراثي» تصف السبب لا الخطورة. شخصان يحملان المرض نفسه قد يتأثران باختلاف شديد.',
  'content.learn.inherited-conditions.mean.3':
    'التاريخ العائلي لمرض ما يكشف نمطًا يستحق الفهم — وليس تنبؤًا عنك.',
  'content.learn.inherited-conditions.important':
    'وراثي لا يعني حتميًا. حمل جينًا معدَّلًا لا يعني بالضرورة أنك ستطور المرض، وتاريخ عائلي للمرض لا يعني أنه سيحدث لك.',
  'content.learn.inherited-conditions.remember.0':
    'الأمراض الوراثية سببها أساسًا تغييرات في الجينات وارثة عن أحد الوالدين.',
  'content.learn.inherited-conditions.remember.1': 'ليس ذنب أي طرف.',
  'content.learn.inherited-conditions.remember.2':
    'التاريخ العائلي يكشف نمطًا لا يقينًا.',

  'content.learn.sickle-cell.title': 'فهم مرض الخلايا المنجلية',
  'content.learn.sickle-cell.excerpt':
    'ماذا تعني صفة الخلايا المنجلية للصحة وللزوجين.',
  'content.learn.sickle-cell.mean.0':
    'يتعلق مرض الخلايا المنجلية بجين HBB، الذي يساعد على صنع الهيموغلوبين — جزء الدم الذي يحمل الأكسجين في جسمك.',
  'content.learn.sickle-cell.mean.1':
    'صفة الخلايا المنجلية تعني نسخة واحدة معدّلة ونسخة عاملة. يعيش معظم حامل الصفة حياة طبيعية وصحية.',
  'content.learn.sickle-cell.mean.2':
    'مرض الخلايا المنجلية يعني نسختين معدّلتين، ويمكن أن يسبب مشكلات صحية خطيرة.',
  'content.learn.sickle-cell.mean.3':
    'حيث يكون المرض أكثر شيوعًا، يُعرض فحص الصفة بشكل روتيني.',
  'content.learn.sickle-cell.misunderstanding':
    'وجود صفة الخلايا المنجلية لا يعني الإصابة بمرض الخلايا المنجلية. نتيجة «حامل» لا تعني أنك مريض.',
  'content.learn.sickle-cell.important':
    'في حالات نادرة — بذل جهد شديد أو نقص أكسجين أو جفاف — قد يعاني حامل الصفة من مضاعفات. من المهم إخبار الطبيب بالصفة قبل التدريب المكثف أو النشاط على ارتفاعات عالية.',
  'content.learn.sickle-cell.screening':
    'فحص صفة الخلايا المنجلية فحص شائع ومستقر علميًا. يُظهر احتمالًا للزوجين لا تشخيصًا لحمل بعينه — وهذه محادثة مع مرشد وراثي.',
  'content.learn.sickle-cell.remember.0':
    'صفة الخلايا المنجلية تعني نسخة واحدة معدّلة من جين HBB — معظم الحاملين أصحاء.',
  'content.learn.sickle-cell.remember.1':
    'مرض الخلايا المنجلية يعني نسختين معدّلتين.',
  'content.learn.sickle-cell.remember.2':
    'الفحص ليس تشخيصًا — ناقش نتيجتك مع مختص.',

  'content.learn.carrier-status.title': 'فهم حالة الحامل',
  'content.learn.carrier-status.excerpt':
    'ماذا يعني أن تحمل نسخة واحدة معدّلة من جين.',
  'content.learn.carrier-status.mean.0':
    'لدى معظم الناس نسختان من كل جين — واحدة من كل والد بيولوجي.',
  'content.learn.carrier-status.mean.1':
    'الحامل يملك نسخة تختلف عن النسخة المعتادة ونسخة عاملة. النسخة العاملة تقوم بالوظيفة، لذا يكون الأصحاء حاملين غالبًا دون أن يدركون أنهم يحملون تغييرًا.',
  'content.learn.carrier-status.mean.2':
    'الأهمية تظهر عند اجتماع حاملين لنفس المرض المتنحي، إذ يمكنهما أن ينجبا طفلًا يرث نسختين معدّلتين.',
  'content.learn.carrier-status.mean.3':
    'أن تكون حاملًا أمر شائع جدًا. ليس مرضًا ولا عيبًا ولا سببًا للخجل.',
  'content.learn.carrier-status.example':
    'النسخة العاملة واحدة تكفي لاستمرار العمل — كمصباح يضيء الغرفة بلمبة واحدة عاملة.',
  'content.learn.carrier-status.misunderstanding':
    'أن تكون حاملًا لا يعني أنك مريض. حالة الحامل لا تقول شيئًا سيئًا عن صحتك.',
  'content.learn.carrier-status.remember.0':
    'الحامل يملك نسخة معدّلة ونسخة عاملة.',
  'content.learn.carrier-status.remember.1':
    'الحاملون أصحاء غالبًا، وغالبًا ما لا يعرفون أنهم يحملون التغيير.',
  'content.learn.carrier-status.remember.2':
    'تظهر أهمية حالة الحامل عندما يحمل الشريكان تغييرات في نفس الجين.',

  'content.learn.probabilities.title': 'فهم احتمالات الأمراض الوراثية',
  'content.learn.probabilities.excerpt':
    'ماذا تعني أرقام مثل 25% فعلًا — وماذا لا تعنيها.',
  'content.learn.probabilities.mean.0':
    'الاحتمال فرصة لا تنبؤ. يصف كم مرة تحدث نتيجة بين كثير من الاحتمالات — لا ما سيحدث لشخص واحد.',
  'content.learn.probabilities.mean.1':
    'عندما يحمل كل من الوالدين البيولوجيين نسخة معدّلة من نفس الجين، يحمل كل حمل احتمالًا مستقلًا لوراثة الطفل نسختين معدّلتين.',
  'content.learn.probabilities.mean.2':
    'في كثير من الأمراض المتنحية يكون هذا الاحتمال 25%، لكن الرقم الدقيق يعتمد على المرض نفسه ويجب تأكيده لحالتك.',
  'content.learn.probabilities.mean.3':
    'الاحتمال ينطبق من جديد على كل حمل. لا يتراكم ولا يُصفَّر ولا ينفد.',
  'content.learn.probabilities.example':
    'تخيّل أربع نتائج متساوية الاحتمال، كأربع صناديق متطابقة أحدها معلَّم. كل حمل يفتح مجموعة صناديق جديدة — وعلامة المرة السابقة لا تنتقل.',
  'content.learn.probabilities.misunderstanding':
    'احتمال 25% لا يعني بالضبط أن طفلًا واحدًا من كل أربعة سيصاب. بل يعني أنه في عدد ضخم من الحالات المتشابهة، نحو ربع النتائج ستكون أطفالًا مصابين.',
  'content.learn.probabilities.screening':
    'يقول لك الفحص أي الاحتمالات تنطبق عليكما كزوجين. لكنه لا يستطيع التنبؤ بما سيحدث في حمل بعينه — هذا سؤال يجيب عنه المرشد بالنتيجتين معًا.',
  'content.learn.probabilities.remember.0': 'الاحتمال فرصة لا تنبؤ.',
  'content.learn.probabilities.remember.1': 'لكل حمل احتمال مستقل خاص به.',
  'content.learn.probabilities.remember.2':
    'أكّد الأرقام الدقيقة لحالتك مع مرشد مؤهل.',

  'content.learn.screening-counselling.title':
    'فهم الفحص والإرشاد الوراثي المهني',
  'content.learn.screening-counselling.excerpt':
    'ما الذي يستطيع فحصك قوله وما لا يستطيع، ومن يفسّره لك.',
  'content.learn.screening-counselling.mean.0':
    'يفحص ما إذا كنت تحمل تغييرات مرتبطة ببعض الأمراض الوراثية. إنه نقطة بداية لمحادثة، وليس تشخيصًا.',
  'content.learn.screening-counselling.mean.1':
    'نتيجة «حامل» أو نتيجة إيجابية في الفحص ليست تشخيصًا لمرض — بل معلومات عن احتمال تحتاج عادةً إلى تأكيد وتفسير.',
  'content.learn.screening-counselling.mean.2':
    'المرشد الوراثي مختص مدرّب يفسّر نتائج الفحص وأنماط الوراثة وما تعنيه لكما.',
  'content.learn.screening-counselling.mean.3':
    'المرشد لا يخبرك بما يجب فعله. بل يضمن أنك تفهم خياراتك جيدًا لتقرر بنفسك.',
  'content.learn.screening-counselling.questions.0':
    'ما الأمراض التي تم فحصي لها؟',
  'content.learn.screening-counselling.questions.1':
    'ماذا تعني نتيجتي لشريكي؟',
  'content.learn.screening-counselling.questions.2':
    'ما خياراتي، وما الذي تنصحني بقراءته؟',
  'content.learn.screening-counselling.remember.0':
    'الفحص ليس تشخيصًا؛ هو يصف الاحتمالات.',
  'content.learn.screening-counselling.remember.1':
    'المرشد يفسّر النتائج — والقرارات تبقى لك.',
  'content.learn.screening-counselling.remember.2':
    'أحضر أسئلتك؛ لست مطالبًا بالإجابات.',

  // --- رحلة: افهم نتائجي ----------------------------------------
  'content.understand.screening-vs-diagnosis.title': 'الفحص ليس تشخيصًا',
  'content.understand.screening-vs-diagnosis.body.0':
    'يفحص ما إذا كنت تحمل تغييرات مرتبطة ببعض الأمراض الوراثية. الهدف أن يبدأ حديثًا، لا أن يؤكد مرضًا أو ينفيه.',
  'content.understand.screening-vs-diagnosis.body.1':
    'نتيجة «حامل» أو نتيجة إيجابية في الفحص ليست تشخيصًا لمرض. التأكيد والتفسير المهني يسبقان عادةً أي استنتاج طبي.',
  'content.understand.screening-vs-diagnosis.body.2':
    'نتيجة «لم يُكتشف» تقلل احتمال حمل التغييرات التي تم فحصها — لكن لا فحص يستبعد حالة الحامل تمامًا.',
  'content.understand.carrier-vs-disease.title':
    'حالة الحامل ليست مساوية للمرض',
  'content.understand.carrier-vs-disease.body.0':
    'الحامل يملك نسخة معدّلة من جين ونسخة عاملة. النسخة العاملة تقوم بوظيفتها، لذا يكون الأصحاء حاملين غالبًا دون أن يعرفون أنهم يحملون تغييرًا.',
  'content.understand.carrier-vs-disease.body.1':
    'تظهر كثير من الأمراض الوراثية عند إراثة الشخص نسختين معدّلتان من نفس الجين — واحدة من كل والد بيولوجي.',
  'content.understand.carrier-vs-disease.body.2':
    'الحمل شائع وليس ذنب أحد. يصف فرصة تستحق النقاش مع مختص — وليس مرضًا، وليس تنبؤًا بصحتك.',

  'content.label.negative.label': 'لم يُكتشف / سلبي',
  'content.label.negative.desc':
    'لم تُعثر على التغييرات التي تم فحصها. يقلل ذلك من احتمال حمل تلك التغييرات تحديدًا، لكنه لا يضمن أنك لا تحمل أي تغيير.',
  'content.label.carrier.label': 'حامل / إيجابي',
  'content.label.carrier.desc':
    'وُجدت نسخة واحدة معدّلة من الجين. عادةً لا تؤثر على صحتك، وتهم تحديدًا لأن حاملين لنفس الجين يمكنهما مناقشة احتمالاتهما معًا.',
  'content.label.uncertain.label': 'غير مؤكد',
  'content.label.uncertain.desc':
    'وُجد اختلاف، لكن الأدلة الحالية لا تكفي للقول بمعناه. ليست خبرًا سارًا ولا مؤسفًا — بل معلومات غير مكتملة ينبغي لمختص أن يقرأها مع تاريخك العائلي.',

  'content.boundary':
    'لا يشخّص جين كلايري ولا يصنّف ولا يفسّر طبيًا المستندات التي ترفعها تلقائيًا. هذا القسم يشرح مصطلحات عامة فقط.',
  'content.futureAi':
    'إذا أُضيف تفسير المستندات يومًا، فسيكون ميزة منفصلة تتطلب موافقتك الصريحة وتدقيقًا سريريًا وإشرافًا مهنيًا. وهي ليست جزءًا من هذا النموذج.',
  'content.counselling':
    'المرشد الوراثي مختص مدرّب يفسّر نتائج الفحص وأنماط الوراثة وما تعنيه لكما — دون أن يخبركما بما يجب فعله. القرار يبقى لكما.',

  // --- رحلة: التوجيه المهني -------------------------------------
  'content.useful.0': 'تسلّمت نتيجة أو مستندًا لا تفهمه.',
  'content.useful.1': 'لديكما أنتما نتائج فحص لمناقشتها معًا.',
  'content.useful.2': 'أُبلغ عن نتيجة غير مؤكدة.',
  'content.useful.3':
    'يوجد مرض وراثي في عائلتك وتريد فهم ما قد يعنيه ذلك.',
  'content.useful.4': 'تريد شرح الأرقام لحالتك أنت لا عمومًا.',

  'content.question.0': 'ما الأمراض التي تم فحصي لها؟',
  'content.question.1': 'ماذا تعني نتيجتي بالضبط؟',
  'content.question.2': 'هل تحتاج نتيجتي إلى فحص تأكيد؟',
  'content.question.3': 'ماذا تعني نتيجتي لشريكي؟',
  'content.question.4': 'ما الاحتمالات بالأرقام في حالتكما؟',
  'content.question.5': 'ما خياراتنا، وماذا تنصح بقراءته؟',
  'content.question.6': 'هل ينبغي لأحد آخر في عائلتي أن يُفحص؟',
  'content.question.7': 'كيف ومتى يجب مراجعة هذه المعلومات؟',

  // --- المستند النموذجي -------------------------------------------
  'content.sample.badge': 'نموذج تجريبي',
  'content.sample.title': 'تقرير فحص اصطناعي',
  'content.sample.note':
    'هذا مستند اصطناعي أصلي أُنشئ لهذا العرض. ليس تقريرًا حقيقيًا، ولا يحتوي على بيانات مريض حقيقي، وليس سجلًا طبيًا.',
  'content.sample.field.prepared.label': 'أُعدّ لـ',
  'content.sample.field.prepared.value': 'شخص نموذجي (خيالي)',
  'content.sample.field.issued.label': 'صدر عن',
  'content.sample.field.issued.value': 'مختبر تجريبي (خيالي)',
  'content.sample.field.reference.label': 'الرقم المرجعي',
  'content.sample.field.reference.value': 'GC-DEMO-0001',
  'content.sample.field.date.label': 'التاريخ',
  'content.sample.field.date.value': '15 يناير 2026',
  'content.sample.row.HBB.finding': 'صفة الخلايا المنجلية (HbAS)',
  'content.sample.row.HBB.plain': 'وُجدت نسخة واحدة معدّلة. الحاملون أصحاء غالبًا.',
  'content.sample.row.HEXA.finding': 'لم يُكتشف تغيير',
  'content.sample.row.HEXA.plain':
    'لم يُعثر على التغيير الذي تم فحصه في هذا الفحص.',
  'content.sample.row.CFTR.finding': 'تغيير غير مؤكد الدلالة',
  'content.sample.row.CFTR.plain': 'وُجد اختلاف؛ دلالته غير مفهومة حتى الآن.',
  'content.sample.footer':
    'نتيجة فحص — وليست تشخيصًا. ناقش هذا المستند مع مختص مؤهل في الرعاية الصحية. (مستند تجريبي؛ بيانات اصطناعية.)',

  // --- الإشعارات --------------------------------------------------
  'content.notify.ntf_01.title': 'تقريرك التجريبي جاهز',
  'content.notify.ntf_01.body': 'افتح تقريرك لقراءة الملخص المكتوب بلغة بسيطة.',
  'content.notify.ntf_02.title': 'لا يملك شريك وصولًا',
  'content.notify.ntf_02.body': 'سجلاتك خاصة حتى تمنح الوصول بنفسك.',
  'content.notify.ntf_03.title': 'موضوع جديد: فهم احتمالات الأمراض الوراثية',
  'content.notify.ntf_03.body': 'قراءة قصيرة حول معنى أرقام مثل 25% فعلًا.',

  // --- دليل المرشدين (للعرض فقط) ---------------------------------
  'content.counsellor.cns_01.name': 'د. أمارا أوكونكو',
  'content.counsellor.cns_01.role': 'مرشد وراثي معتمد',
  'content.counsellor.cns_01.focus': 'فحص الحامل، إرشاد الأزواج',
  'content.counsellor.cns_02.name': 'د. يوسف حداد',
  'content.counsellor.cns_02.role': 'مرشد وراثي سريري',
  'content.counsellor.cns_02.focus': 'مخاطر الإنجاب، تفسير النتائج',
  'content.counsellor.cns_03.name': 'سارة مينديز، ماجستير',
  'content.counsellor.cns_03.role': 'مرشد وراثي معتمد',
  'content.counsellor.cns_03.focus': 'النتائج غير المؤكدة، التاريخ العائلي',

  // --- سجل النشاط -------------------------------------------------
  'content.act.reportViewed': 'فتح «أبرز النقاط» لثلاث نتائج توضيحية.',
  'content.act.signedIn': 'تسجيل دخول على هذا الجهاز.',
  'content.act.languageChanged': 'تم ضبط لغة العرض على الإنجليزية.',
  'content.act.consentAccepted': 'قبول إشعار الخصوصية والموافقة.',
  'content.act.inviteSent': 'إرسال دعوة شريك. لم يُشارك شيء بعد.',
  'content.act.grantAccess': 'منح الوصول للشريك ({n} فئات).',
  'content.act.revokeAccess': 'سحب الوصول من الشريك. توقف الوصول المستقبلي.',
  'content.act.clearPartner': 'إزالة ربط الشريك بالكامل.',
  'content.act.settingChanged': 'تغيير الإعداد "{key}" إلى {value}.',
}

export const contentCatalogs = { en: contentEn, ar: contentAr, fr, es, sw, ha }

/** Replace `{name}` placeholders with values from `params`. */
export function interpolate(str, params) {
  if (!params) return str
  return str.replace(/\{(\w+)\}/g, (match, name) =>
    name in params ? String(params[name]) : match,
  )
}

/**
 * Translate a content key in `lang`, falling back to English, then
 * to `undefined` when the key does not exist anywhere. `undefined`
 * (rather than the raw key) lets optional lesson sections render
 * only when they exist — see ConditionDetail.
 */
export function lookupContent(lang, key, params) {
  const catalog = contentCatalogs[lang] || contentEn
  const raw = catalog[key] ?? contentEn[key]
  return raw === undefined ? undefined : interpolate(raw, params)
}

/**
 * Translate an indexed list of content keys (`key.0`, `key.1`, …).
 * The count comes from the English catalogue, which the parity check
 * guarantees every other language matches exactly.
 */
export function contentList(lang, key) {
  const items = []
  for (let i = 0; ; i += 1) {
    const itemKey = `${key}.${i}`
    if (!(itemKey in contentEn)) return items
    items.push(lookupContent(lang, itemKey))
  }
}
