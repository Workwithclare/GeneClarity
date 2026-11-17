/**
 * GeneClarity — Swahili content catalogue (long-form, per record).
 *
 * ─────────────────────────────────────────────────────────────────
 * Keys mirror `contentEn` exactly — same set, same order, character
 * by character; parity across all six languages is verified by
 * `npm run i18n:check`. Written for this project in the same
 * plain-language, safety-first register as the English copy: no
 * diagnosis, no prescription, no life advice.
 *
 * Consistent terms: screening = uchunguzi, carrier = mkware,
 * genetic counsellor = mshauri wa jenetiki.
 *
 * Status: provisional translation pending professional review —
 * see docs/06_ACCESSIBILITY_AND_I18N.md.
 * ─────────────────────────────────────────────────────────────────
 */

export const sw = {
  // --- Matokeo ya uchunguzi (Mambo makuu / Ripoti) --------------
  'content.result.sickle-cell.summary':
    'Wewe ni mkware wa sifa ya selimundu (HbAS).',
  'content.result.sickle-cell.plain':
    'Hii ina maana unabeba nakala moja ya jeneni. Kwa kawaida hali hii ni ya kiafya na haisababishi ugonjwa wa selimundu.',
  'content.result.sickle-cell.forYou':
    'Kubeba nakala moja iliyobadilishwa kwa kawaida haina athari kwa afya yako mwenyewe. Baadhi ya watu hupata athari madogo wakati wa msukosuko mkubwa wa kimwili, ambayo ni vema kuyataja kwa daktari.',
  'content.result.sickle-cell.forCouple':
    'Kama mwenzi wako pia ni mkware, kuna uwezekano kwa kila mimba mtoto kurithi nakala mbili. Hili ni uwezekano, si hakika, na ni vema kuzungumza na mshauri kwa kutumia matokeo yote mawili.',

  'content.result.tay-sachs.summary':
    'Hakuna nakala iliyobadilishwa iliyopatikana katika uchunguzi huu.',
  'content.result.tay-sachs.plain':
    'Uchunguzi haukupata nakala iliyobadilishwa ya jeneni hili. Hili hupunguza uwezekano wa kuwa mkware, lakini hakuna kipimo cha uchunguzi kinachoweza kutupilia mbali kabisa hali ya mkware.',
  'content.result.tay-sachs.forYou':
    'Hakuna cha kufanya hapa. Matokeo ya "hayajapatikana" yanaeleza kipimo hiki pekee, si kila mabadiliko yanayoweza kutokea kwenye jeneni.',
  'content.result.tay-sachs.forCouple':
    'Matokeo wazi kwa mwenzi mmoja hayaelezi wenzi wote peke yake. Uchunguzi hutoa taarifa zaidi wakati wote wawili wakifanyiwa vipimo.',

  'content.result.cystic-fibrosis.summary':
    'Mabadiliko yamepatikana, lakini maana yake bado hayaeleweki.',
  'content.result.cystic-fibrosis.plain':
    'Tofauti imepatikana kwenye jeneni hili. Kwa sasa ushahidi wa kisayansi hautoshi kusema kama unaathiri afya. Hili huitwa tofauti isiyo na maana wazi.',
  'content.result.cystic-fibrosis.forYou':
    'Matokeo yasiyokuwa na uhakika si habari nzuri wala mbaya — ni taarifa ambazo bado hazijakamilika. Hapaswi kubadilisha uamuzi wowote unaoufanya kuhusu afya yako.',
  'content.result.cystic-fibrosis.forCouple':
    'Matokeo yasiyokuwa na uhakika yapaswa kutafsiriwa na mtaalamu pamoja na historia kamili ya familia. Usiyachukulie kama matokeo ya mkware.',

  // --- Masomo ya kujifunza ---------------------------------------
  'content.learn.cells-chromosomes.title': 'Kuelewa seli na kromosomi',
  'content.learn.cells-chromosomes.excerpt':
    'Ambapo maagizo ya mwili wako yamehifadhiwa, na jinsi yanavyopakiwa.',
  'content.learn.cells-chromosomes.mean.0':
    'Mwili wako umejengwa kutoka kwa vipengele vidogo vinaitwa seli. Karibu kila seli inabeba nakala kamili ya maagizo ya mwili wako.',
  'content.learn.cells-chromosomes.mean.1':
    'Maagizo hayo yapakiwa kwenye miundo yenye umbo la fimbo inaitwa kromosomi. Watu wengi wana kromosomi 46 kwenye kila seli, zilizopangwa kuwa jozi 23.',
  'content.learn.cells-chromosomes.mean.2':
    'Kromosomi moja kwa kila jozi hutoka kwa mama wa kibiolojia, na nyingine hutoka kwa baba wa kibiolojia.',
  'content.learn.cells-chromosomes.mean.3':
    'Jeneni zinapangwa kando ya kromosomi, kama sura zilizopangwa kwenye rafu.',
  'content.learn.cells-chromosomes.example':
    'Fikiria seli kama maktaba: kromosomi ni rafu, na jeneni ni kila kitabu kilichopo juu yake.',
  'content.learn.cells-chromosomes.remember.0':
    'Karibu kila seli ina nakala kamili ya maagizo yako.',
  'content.learn.cells-chromosomes.remember.1':
    'Maagizo hayo yapakiwa kama kromosomi 46 katika jozi 23.',
  'content.learn.cells-chromosomes.remember.2':
    'Unapokea moja kwa kila jozi kutoka kwa kila mzazi wa kibiolojia.',

  'content.learn.dna-genes.title': 'Kuelewa DNA na jeneni',
  'content.learn.dna-genes.excerpt':
    'DNA ni nini, jeneni hufanya nini, na kwa nini aina zake hujitofautisha.',
  'content.learn.dna-genes.mean.0':
    'DNA ni molekuli inayobeba maagizo. Inaonekana kama ngazi iliyozungushwa na mara nyingi inachorwa kama heliksi mbili.',
  'content.learn.dna-genes.mean.1':
    'Jeneni ni sehemu fupi ya DNA yenye kazi maalum moja — kichocheo cha protini moja, mmoja kati ya wafanyakazi wadogo wanaotengenezwa ndani ya seli zako.',
  'content.learn.dna-genes.mean.2':
    'Wanadamu wana jeneni takriban 20,000 zilizosambazwa kando ya kromosomi zao.',
  'content.learn.dna-genes.mean.3':
    'Jeneni hujitofautisha kidogo kwa aina. Tofauti nyingi hazina athari kwa afya; chache huhusishwa na magonjwa ya kurithiwa.',
  'content.learn.dna-genes.misunderstanding':
    'Jeneni moja nadra hudhibiti sifa moja au ugonjwa mmoja peke yake. Nyingi ya sifa na magonjwa hujumuisha jeneni kadhaa pamoja na mazingira ya maisha.',
  'content.learn.dna-genes.remember.0':
    'DNA ndiyo molekuli ya maagizo; jeneni ni sehemu zake fupi.',
  'content.learn.dna-genes.remember.1':
    'Kila jeneni lina kazi kuu moja kwenye seli zako.',
  'content.learn.dna-genes.remember.2':
    'Jeneni hujitofautisha, na tofauti nyingi hazina madhara.',

  'content.learn.inheritance.title':
    'Jinsi taarifa za jenetiki zinavyopitishwa kutoka kwa wazazi kwenda kwa watoto',
  'content.learn.inheritance.excerpt':
    'Kwa nini watoto hupata mchanganyiko kutoka kwa wazazi wote wawili wa kibiolojia.',
  'content.learn.inheritance.mean.0':
    'Mama wa kibiolojia na baba wa kibiolojia wanapomzaa mtoto, kila mmoja hupitisha nakala moja ya kila jeneni.',
  'content.learn.inheritance.mean.1':
    'Hivyo mtoto hupata nakala mbili za kila jeneni — moja kutoka kila upande wa familia.',
  'content.learn.inheritance.mean.2':
    'Kwa kuwa kila mzazi anaweza kupitisha nakala tofauti, ndugu hupata mchanganyiko tofauti. Ndiyo maana ndugu hufanana lakini si sawa kabisa.',
  'content.learn.inheritance.mean.3':
    'Baadhi ya magonjwa hufuata mfumo wazi wa utorithi; mengine hutegemea jeneni nyingi na mazingira ya maisha.',
  'content.learn.inheritance.example':
    'Wazazi wakiwapitisha mtoto nakala ile ile inayofanya kazi, mtoto hupata nakala mbili zinazofanya kazi. Wakiwapitisha ile ile iliyobadilishwa, mtoto hupata nakala mbili zilizobadilishwa.',
  'content.learn.inheritance.remember.0':
    'Unapokea nakala moja ya kila jeneni kutoka kwa kila mzazi wa kibiolojia.',
  'content.learn.inheritance.remember.1': 'Ndugu hupata mchanganyiko tofauti.',
  'content.learn.inheritance.remember.2':
    'Mfumo wa utorithi ndio unaounda uwezekano wa ugonjwa.',

  'content.learn.inherited-conditions.title': 'Kuelewa magonjwa ya kurithiwa',
  'content.learn.inherited-conditions.excerpt':
    'Maana ya "kurithiwa" — na kile ambacho haimaanishi.',
  'content.learn.inherited-conditions.mean.0':
    'Ugonjwa wa kurithiwa ni ugonjwa unaosababishwa haswa na mabadiliko ya jeneni yaliyopitishwa kutoka kwa mzazi wa kibiolojia.',
  'content.learn.inherited-conditions.mean.1':
    'Baadhi ya magonjwa ya kurithiwa yapo tangu kuzaliwa; mengine hujitokeza baadaye katika maisha; na mengine hayasababishi matatizo kamwe.',
  'content.learn.inherited-conditions.mean.2':
    '"Kurithiwa" hueleza sababu, si ukali. Watu wawili wenye ugonjwa uleule wanaweza kuathiriwa kwa njia tofauti sana.',
  'content.learn.inherited-conditions.mean.3':
    'Historia ya familia ya ugonjwa huonyesha mfumo unaostahili kueleweka — si utabiri kuhusu wewe.',
  'content.learn.inherited-conditions.important':
    'Kurithiwa haimaanishi lazima itokee. Kubeba jeneni lililobadilishwa haimaanishi kiotomatiki kuwa utapata ugonjwa huo, na historia ya familia haimaanishi kuwa kitakutokea.',
  'content.learn.inherited-conditions.remember.0':
    'Magonjwa ya kurithiwa husababishwa haswa na mabadiliko ya jeneni yaliyopitishwa na mzazi.',
  'content.learn.inherited-conditions.remember.1':
    'Si kosa la mtu yeyote.',
  'content.learn.inherited-conditions.remember.2':
    'Historia ya familia huonyesha mfumo, si hakika.',

  'content.learn.sickle-cell.title': 'Kuelewa selimundu',
  'content.learn.sickle-cell.excerpt':
    'Sifa ya selimundu ina maana gani kwa afya, na kwa wenzi.',
  'content.learn.sickle-cell.mean.0':
    'Selimundu huhusiana na jeneni HBB, linalosaidia kutengeneza hemoglobini — sehemu ya damu inayobeba oksijeni kuzunguka mwili wako.',
  'content.learn.sickle-cell.mean.1':
    'Ukiwa na sifa ya selimundu una nakala moja iliyobadilishwa na moja inayofanya kazi. Watu wengi wenye sifa hii huishi maisha ya kawaida na yenye afya.',
  'content.learn.sickle-cell.mean.2':
    'Ukiwa na ugonjwa wa selimundu una nakala mbili zilizobadilishwa, ambazo zinaweza kusababisha matatizo makubwa ya afya.',
  'content.learn.sickle-cell.mean.3':
    'Katika maeneo ambapo ugonjwa wa selimundu ni wa kawaida zaidi, uchunguzi wa sifa hii hufanywa mara kwa mara.',
  'content.learn.sickle-cell.misunderstanding':
    'Kuwa na sifa ya selimundu si sawa na kuwa na ugonjwa wa selimundu. Matokeo ya mkware haimaanishi kuwa mgonjwa.',
  'content.learn.sickle-cell.important':
    'Katika hali nadra — kufanya kazi ngumu sana, oksijeni ndogo au ukosefu wa maji mwilini — makware wa sifa hii wanaweza kupata matatizo. Ni vema kumwambia daktari kuhusu sifa hii kabla ya mafunzo makali au shughuli katika maeneo ya mwinuko mkuu.',
  'content.learn.sickle-cell.screening':
    'Uchunguzi wa sifa ya selimundu ni kipimo cha kawaida na kilichojulikana kwa muda mrefu. Kinaonyesha uwezekano kwa wenzi, si utambuzi kwa kila mimba kwa peke yake — hayo ni mazungumzo kwa mshauri.',
  'content.learn.sickle-cell.remember.0':
    'Sifa ya selimundu ina maana nakala moja iliyobadilishwa ya HBB — makware wengi wana afya nzuri.',
  'content.learn.sickle-cell.remember.1':
    'Ugonjwa wa selimundu una maana nakala mbili zilizobadilishwa.',
  'content.learn.sickle-cell.remember.2':
    'Uchunguzi si utambuzi; jadili matokeo yako na mtaalamu.',

  'content.learn.carrier-status.title': 'Kuelewa hali ya mkware',
  'content.learn.carrier-status.excerpt':
    'Kuna maana gani kubeba nakala moja iliyobadilishwa ya jeneni.',
  'content.learn.carrier-status.mean.0':
    'Watu wengi wana nakala mbili za kila jeneni — moja kutoka kwa kila mzazi wa kibiolojia.',
  'content.learn.carrier-status.mean.1':
    'Mkware ana nakala moja tofauti na ile ya kawaida na moja inayofanya kazi. Nakala ile inayofanya kazi hufanya kazi yake, hivyo makware kwa kawaida wana afya na wengi hawajui kweli kuwa wanabeba mabadiliko.',
  'content.learn.carrier-status.mean.2':
    'Ni muhimu kwa sababu makware wawili wa ugonjwa uleule wa kurithiwa chini wanaweza, pamoja, kuwa na mtoto anayerithi nakala mbili zilizobadilishwa.',
  'content.learn.carrier-status.mean.3':
    'Kuwa mkware ni kawaida sana. Si kosa, si ugonjwa wala sababu ya aibu.',
  'content.learn.carrier-status.example':
    'Nakala moja inayofanya kazi inatosha kuendeleza kila kitu — kama taa ambayo bado inawaka chumbani kwa mmelekeo mmoja tu.',
  'content.learn.carrier-status.misunderstanding':
    'Kuwa mkware si sawa na kuwa mgonjwa. Hali ya mkware haijasemi chochote kibaya kuhusu afya yako mwenyewe.',
  'content.learn.carrier-status.remember.0':
    'Mkware ana nakala moja iliyobadilishwa na moja inayofanya kazi.',
  'content.learn.carrier-status.remember.1':
    'Makware kwa kawaida wana afya na mara nyingi hawajui kuwa wanabeba mabadiliko.',
  'content.learn.carrier-status.remember.2':
    'Hali ya mkware ni muhimu zaidi wenzi wote wakiwa wanabeba mabadiliko kwenye jeneni lilelile.',

  'content.learn.probabilities.title':
    'Kuelewa uwezekano wa magonjwa ya kurithiwa',
  'content.learn.probabilities.excerpt':
    'Maana halisi ya namba kama 25% — na zisizokuwa na maana hiyo.',
  'content.learn.probabilities.mean.0':
    'Uwezekano ni nafasi, si utabiri. Unaeleza mara ngapi tokeo hutokea katika uwezekano mwingi — si kitakachotokea kwa mtu mmoja.',
  'content.learn.probabilities.mean.1':
    'Wazazi wote wa kibiolojia wakiwa wanabeba nakala iliyobadilishwa ya jeneni lilelile, kila mimba ina uwezekano huru wa mtoto kurithi nakala mbili zilizobadilishwa.',
  'content.learn.probabilities.mean.2':
    'Kwa magonjwa mengi ya kurithiwa chini uwezekano huo ni 25%, lakini namba kamili hutegemea ugonjwa husika na lazima ithibitishwe kwa hali yako mwenyewe.',
  'content.learn.probabilities.mean.3':
    'Uwezekano huo hutumika upya kwa kila mimba. Huongezevi, hujumlishwi wala hauishi.',
  'content.learn.probabilities.example':
    'Fikiria tokeo nne zenye uwezekano sawa, kama masanduku manne yanayofanana, na moja yake lina alama. Kila mimba hufungua kundi jipya la masanduku manne — alama ya mara ya mwisho haihamishwi.',
  'content.learn.probabilities.misunderstanding':
    'Uwezekano wa 25% haimaanishi haswa kwamba mtoto mmoja kati ya wanne atakuwa mgonjwa. Ina maana kwamba katika idadi kubwa sana ya hali zinazofanana, robo ya takribani ya tokeo itakuwa watoto walioathirika.',
  'content.learn.probabilities.screening':
    'Uchunguzi wakuambia uwezekano upi unaowafaa wenu kama wenzi. Hauwezi kutabiri kitakachotokea katika mimba yoyote kwa peke yake — hilo ni swali kwa mshauri akiwa na matokeo yote mawili mikononi.',
  'content.learn.probabilities.remember.0':
    'Uwezekano ni nafasi, si utabiri.',
  'content.learn.probabilities.remember.1':
    'Kila mimba ina uwezekano wake huru.',
  'content.learn.probabilities.remember.2':
    'Thibitisha namba kamili za ugonjwa wako na mshauri mwenye ujuzi.',

  'content.learn.screening-counselling.title':
    'Kuelewa uchunguzi na ushauri wa kitaalamu',
  'content.learn.screening-counselling.excerpt':
    'Uchunguzi unaweza na hauwezi kukuambia nini, na nani anaeleza hilo.',
  'content.learn.screening-counselling.mean.0':
    'Uchunguzi hukagua kama unabeba mabadiliko yenye uhusiano na baadhi ya magonjwa ya kurithiwa. Ni hatua ya kuanza mazungumzo, si utambuzi.',
  'content.learn.screening-counselling.mean.1':
    'Matokeo ya mkware au chanya ya uchunguzi si utambuzi wa ugonjwa — ni taarifa kuhusu uwezekano ambayo kwa kawaida inahitaji uthibitisho na tafsiri.',
  'content.learn.screening-counselling.mean.2':
    'Mshauri wa jenetiki ni mtaalamu aliyefunzwa anayeeleza matokeo ya vipimo, mifumo ya utorithi na vinavyomaana kwako na mwenzi wako.',
  'content.learn.screening-counselling.mean.3':
    'Mshauri hakwambi nini cha kufanya. Huhakikisha unaelewa chaguo zako vizuri ya kutosha ili uamue mwenyewe.',
  'content.learn.screening-counselling.questions.0':
    'Nilichunguzwa kwa magonjwa gani?',
  'content.learn.screening-counselling.questions.1':
    'Matokeo yangu yana maana gani kwa mwenzi wangu?',
  'content.learn.screening-counselling.questions.2':
    'Chaguo zangu ni zipi, na unapendekeza nisome nini?',
  'content.learn.screening-counselling.remember.0':
    'Uchunguzi si utambuzi; unaeleza uwezekano.',
  'content.learn.screening-counselling.remember.1':
    'Washauri hueleza matokeo — maamuzi hubaki kwako.',
  'content.learn.screening-counselling.remember.2':
    'Leta maswali yako; hulazimiki kuja na majibu.',

  // --- Safari: Elewa matokeo yangu --------------------------------
  'content.understand.screening-vs-diagnosis.title':
    'Uchunguzi si utambuzi',
  'content.understand.screening-vs-diagnosis.body.0':
    'Kipimo cha uchunguzi huchunguza kama unabeba mabadiliko yenye uhusiano na baadhi ya magonjwa ya kurithiwa. Kimeundwa kuanza mazungumzo, si kuthibitisha au kutupilia mbali ugonjwa.',
  'content.understand.screening-vs-diagnosis.body.1':
    'Matokeo ya "mkware" au chanya ya uchunguzi si utambuzi wa ugonjwa. Kipimo cha kuthibitisha na tafsiri ya kitaalamu hukja kabla ya hitimisho lolote la kitabibu.',
  'content.understand.screening-vs-diagnosis.body.2':
    'Matokeo ya "hayajapatikana" hupunguza uwezekano wa kubeba mabadiliko yaliyochunguzwa — lakini hakuna kipimo cha uchunguzi kinachoweza kutupilia mbali kabisa hali ya mkware.',
  'content.understand.carrier-vs-disease.title':
    'Hali ya mkware si sawa na ugonjwa',
  'content.understand.carrier-vs-disease.body.0':
    'Mkware ana nakala moja iliyobadilishwa ya jeneni na moja inayofanya kazi. Nakala inayofanya kazi hufanya kazi yake, hivyo makware kwa kawaida wana afya na mara nyingi hawajui kuwa wanabeba mabadiliko.',
  'content.understand.carrier-vs-disease.body.1':
    'Magonjwa mengi ya kurithiwa hujitokeza tu mtu akirithi nakala mbili zilizobadilishwa za jeneni lilelile — moja kutoka kwa kila mzazi wa kibiolojia.',
  'content.understand.carrier-vs-disease.body.2':
    'Kuwa mkware ni kawaida na si kosa la mtu yeyote. Kinaeleza nafasi ya kuzungumza na mtaalamu — si ugonjwa, wala si utabiri kuhusu afya yako mwenyewe.',

  'content.label.negative.label': 'Hayajapatikana / hasi',
  'content.label.negative.desc':
    'Mabadiliko yaliyochunguzwa katika uchunguzi huu hayajapatikana. Hili hupunguza uwezekano wa kubeba mabadiliko hayo mahususi; halithibitishi kuwa huuna kabisa.',
  'content.label.carrier.label': 'Mkware / chanya',
  'content.label.carrier.desc':
    'Nakala moja iliyobadilishwa ya jeneni imepatikana. Hii kwa kawaida hainaathiri afya yako mwenyewe, na ni muhimu haswa kwa sababu makware wawili wa jeneni lilelile wanaweza kuzungumza uwezekano wao pamoja.',
  'content.label.uncertain.label': 'Isiyokuwa na uhakika',
  'content.label.uncertain.desc':
    'Tofauti imepatikana, lakini ushahidi wa sasa hautoshi kusema ina maana gani. Hii si habari nzuri wala mbaya — ni taarifa ambazo bado hazijakamilika ambazo mtaalamu anapaswa kuzisoma pamoja na historia yako ya familia.',

  'content.boundary':
    'GeneClarity hautoi utambuzi kiotomatiki, haitenganishi na haitafsiri kimatibabu nyaraka unazopakia. Sehemu hii inaeleza istilahi za jumla pekee.',
  'content.futureAi':
    'Kama tafsiri ya nyaraka itaongezwa siku moja, itakuwa kipengele cha tofauti kinachohitaji idhini yako wazi, uthibitisho wa kliniki, na usimamizi wa kitaalamu. Si sehemu ya mfano huu.',
  'content.counselling':
    'Mshauri wa jenetiki ni mtaalamu aliyefunzwa anayeeleza matokeo ya vipimo, mifumo ya utorithi na vinavyomaana kwako na mwenzi wako — bila kukuambia nini cha kufanya. Uamuzi unabaki kwako.',

  // --- Safari: Ushauri wa kitaalamu -------------------------------
  'content.useful.0': 'Ulipokea matokeo au nyaraka ambayo huelewi.',
  'content.useful.1':
    'Wewe na mwenzi wako mna matokeo ya uchunguzi ya kuzingatia pamoja.',
  'content.useful.2': 'Matokeo yameripotiwa kuwa yasiyokuwa na uhakika.',
  'content.useful.3':
    'Ugonjwa wa kurithiwa upo kwenye familia yako na unataka kuelewa kinaweza kuwa na maana gani.',
  'content.useful.4':
    'Unataka namba zielezwe kwa hali yako mwenyewe, si kwa ujumla.',

  'content.question.0': 'Nilichunguzwa kwa magonjwa gani?',
  'content.question.1': 'Matokeo yangu yana maana gani haswa?',
  'content.question.2': 'Je, matokeo yangu yanahitaji kipimo cha kuthibitisha?',
  'content.question.3': 'Matokeo yangu yana maana gani kwa mwenzi wangu?',
  'content.question.4': 'Uwezekano ni upi, kwa namba, kwa hali yetu?',
  'content.question.5':
    'Chaguo letu ni zipi, na unapendekeza tusome nini?',
  'content.question.6':
    'Je, mtu mwingine kwenye familia yangu anapaswa kufanyiwa vipimo?',
  'content.question.7':
    'Taarifa hizi zinapaswa kurejewaje na lini?',

  // --- Nyaraka ya mfano -------------------------------------------
  'content.sample.badge': 'Mfano wa onyesho',
  'content.sample.title': 'Ripoti ya Uchunguzi Bandia',
  'content.sample.note':
    'Hii ni nyaraka asilia ilizalwa kwa ajili ya onyesho hili. Si ripoti halisi, haijajumuisha data halisi ya mgonjwa, na si rekodi ya kitabibu.',
  'content.sample.field.prepared.label': 'Imeandaliwa kwa',
  'content.sample.field.prepared.value': 'Mtu wa Mfano (si halisi)',
  'content.sample.field.issued.label': 'Imetolewa na',
  'content.sample.field.issued.value': 'Maabara ya Onyesho (si halisi)',
  'content.sample.field.reference.label': 'Kumbukumbu',
  'content.sample.field.reference.value': 'GC-DEMO-0001',
  'content.sample.field.date.label': 'Tarehe',
  'content.sample.field.date.value': '15 Jan 2026',
  'content.sample.row.HBB.finding': 'Sifa ya selimundu (HbAS)',
  'content.sample.row.HBB.plain':
    'Nakala moja iliyobadilishwa imepatikana. Makware kwa kawaida wana afya.',
  'content.sample.row.HEXA.finding': 'Hakuna mabadiliko yaliyopatikana',
  'content.sample.row.HEXA.plain':
    'Mabadiliko yaliyochunguzwa hayajapatikana katika uchunguzi huu.',
  'content.sample.row.CFTR.finding': 'Mabadiliko yasiyo na maana wazi',
  'content.sample.row.CFTR.plain':
    'Tofauti imepatikana; maana yake bado hayaeleweki.',
  'content.sample.footer':
    'Matokeo ya uchunguzi — si utambuzi. Jadili nyaraka hii na mtaalamu mwenye ujuzi wa afya. (Nyaraka ya onyesho; data bandia.)',

  // --- Arifa --------------------------------------------------------
  'content.notify.ntf_01.title': 'Ripoti yako ya mfano iko tayari',
  'content.notify.ntf_01.body':
    'Fungua ripoti yako kusoma muhtasari wa lugha rahisi.',
  'content.notify.ntf_02.title': 'Hakuna mwenzi aliye na ufikiaji',
  'content.notify.ntf_02.body':
    'Rekodi zako ni za kibinafsi hadi utoe ufikiaji wewe mwenyewe.',
  'content.notify.ntf_03.title':
    'Mada mpya: kuelewa uwezekano wa magonjwa ya kurithiwa',
  'content.notify.ntf_03.body':
    'Kusoma kwa mfupi kuhusu maana halisi ya namba kama 25%.',

  // --- Orodha ya washauri (ya kuonyesha pekee) ----------------------
  'content.counsellor.cns_01.name': 'Dr. Amara Okonkwo',
  'content.counsellor.cns_01.role': 'Mshauri wa jenetiki aliyesajiliwa',
  'content.counsellor.cns_01.focus': 'Uchunguzi wa makware, ushauri wa wenzi',
  'content.counsellor.cns_02.name': 'Dr. Yusuf Haddad',
  'content.counsellor.cns_02.role': 'Mshauri wa jenetiki wa klinikani',
  'content.counsellor.cns_02.focus': 'Hatari ya uzazi, tafsiri ya matokeo',
  'content.counsellor.cns_03.name': 'Sara Mendez, MS, CGC',
  'content.counsellor.cns_03.role': 'Mshauri wa jenetiki mwenye uthibitisho',
  'content.counsellor.cns_03.focus': 'Matokeo isiyokuwa na uhakika, historia ya familia',

  // --- Kumbukumbu za shughuli -------------------------------------
  'content.act.reportViewed': 'Mambo makuu yamefunguliwa kwa matokeo matatu ya mfano.',
  'content.act.signedIn': 'Umeingia kwenye kifaa hiki.',
  'content.act.languageChanged': 'Lugha ya onyesho imewekwa Kiingereza.',
  'content.act.consentAccepted': 'Umekubali taarifa ya faragha na idhini.',
  'content.act.inviteSent': 'Mwaliko wa mwenzi umetumwa. Hakuna kilichoshirikiwa bado.',
  'content.act.grantAccess': 'Ufikiaji wa mwenzi umetolewa (vikundi {n}).',
  'content.act.revokeAccess': 'Ufikiaji wa mwenzi umeondolewa. Ufikiaji wa baadaye umesimamishwa.',
  'content.act.clearPartner': 'Uhusiano wa mwenzi umeondolewa kabisa.',
  'content.act.settingChanged': 'Mipangilio "{key}" imebadilishwa kuwa {value}.',
}
