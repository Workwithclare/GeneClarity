/**
 * GeneClarity — catalogue de contenu en français.
 *
 * ─────────────────────────────────────────────────────────────────
 * Clés identiques à `contentEn` (même ensemble, même ordre) : la
 * parité est vérifiée par `npm run i18n:check`. Rédigé pour ce
 * projet dans le même registre langage clair et priorité à la
 * sécurité que le texte anglais — pas de diagnostic, pas de
 * prescription, pas de conseils de vie.
 *
 * Statut : traduction provisoire en attente d'une revue
 * professionnelle — voir docs/06_ACCESSIBILITY_AND_I18N.md.
 * ─────────────────────────────────────────────────────────────────
 */

export const fr = {
  // --- Résultats de dépistage (Points clés / Rapport) --------------
  'content.result.sickle-cell.summary':
    'Vous êtes porteur du trait drépanocytaire (HbAS).',
  'content.result.sickle-cell.plain':
    'Cela signifie que vous portez une copie du gène. Cette copie est généralement saine et ne provoque pas la drépanocytose.',
  'content.result.sickle-cell.forYou':
    "Porter une copie modifiée n'a normalement aucun effet sur votre propre santé. Certaines personnes remarquent des effets légers en cas d'effort physique intense ; cela vaut la peine de le signaler à un médecin.",
  'content.result.sickle-cell.forCouple':
    "Si votre partenaire est également porteur, chaque grossesse comporte la possibilité qu'un enfant hérite de deux copies. Il s'agit d'une possibilité, pas d'une certitude, et il est préférable d'en discuter avec un conseiller en génétique à partir des deux résultats.",

  'content.result.tay-sachs.summary':
    'Aucune copie modifiée détectée lors de ce dépistage.',
  'content.result.tay-sachs.plain':
    "Ce dépistage n'a pas trouvé de copie modifiée de ce gène. Cela réduit la probabilité d'être porteur, mais aucun test de dépistage n'exclut complètement un statut de porteur.",
  'content.result.tay-sachs.forYou':
    "Vous n'avez rien à faire de votre côté. Un résultat « non détecté » décrit ce test uniquement, et non toutes les modifications possibles du gène.",
  'content.result.tay-sachs.forCouple':
    'Un résultat clair pour un seul partenaire ne décrit pas un couple à lui seul. Le dépistage est le plus informatif lorsque les deux personnes sont testées.',

  'content.result.cystic-fibrosis.summary':
    "Une modification a été trouvée, mais sa signification n'est pas encore comprise.",
  'content.result.cystic-fibrosis.plain':
    "Une différence a été trouvée dans ce gène. À l'heure actuelle, les preuves scientifiques ne sont pas suffisantes pour dire si elle affecte la santé. On parle alors de variante de signification incertaine.",
  'content.result.cystic-fibrosis.forYou':
    "Un résultat incertain n'est ni une bonne nouvelle ni une mauvaise nouvelle — c'est une information inachevée. Cela ne devrait modifier aucune décision que vous prenez concernant votre santé.",
  'content.result.cystic-fibrosis.forCouple':
    "Les résultats incertains doivent être interprétés par un professionnel, en même temps que l'historique familial complet. Ne les considérez pas comme un résultat de porteur.",

  // --- Leçons ------------------------------------------------------
  'content.learn.cells-chromosomes.title':
    'Comprendre les cellules et les chromosomes',
  'content.learn.cells-chromosomes.excerpt':
    'Où sont conservées les instructions de votre corps, et comment elles sont emballées.',
  'content.learn.cells-chromosomes.mean.0':
    'Votre corps est construit à partir de petits blocs de construction appelés cellules. Presque chaque cellule contient une copie complète des instructions de votre corps.',
  'content.learn.cells-chromosomes.mean.1':
    'Ces instructions sont rangées dans des structures en forme de bâtonnet appelées chromosomes. La plupart des gens ont 46 chromosomes dans chaque cellule, répartis en 23 paires.',
  'content.learn.cells-chromosomes.mean.2':
    "Un chromosome de chaque paire vient de votre mère biologique, et l'autre de votre père biologique.",
  'content.learn.cells-chromosomes.mean.3':
    'Les gènes se trouvent le long des chromosomes, comme des chapitres alignés sur une étagère.',
  'content.learn.cells-chromosomes.example':
    "Imaginez une cellule comme une bibliothèque : les chromosomes sont les étagères, et les gènes sont les livres qui s'y trouvent.",
  'content.learn.cells-chromosomes.remember.0':
    'Presque chaque cellule contient une copie complète de vos instructions.',
  'content.learn.cells-chromosomes.remember.1':
    'Ces instructions sont rangées sous forme de 46 chromosomes, répartis en 23 paires.',
  'content.learn.cells-chromosomes.remember.2':
    'Vous recevez un chromosome de chaque paire de chacun de vos parents biologiques.',

  'content.learn.dna-genes.title': "Comprendre l'ADN et les gènes",
  'content.learn.dna-genes.excerpt':
    "Ce qu'est l'ADN, ce que fait un gène, et pourquoi les versions diffèrent.",
  'content.learn.dna-genes.mean.0':
    "L'ADN est la molécule qui contient les instructions. Il ressemble à une échelle tordue et est souvent dessiné sous forme de double hélice.",
  'content.learn.dna-genes.mean.1':
    "Un gène est une courte section d'ADN ayant une fonction précise — la recette d'une seule protéine, l'un des petits travailleurs fabriqués à l'intérieur de vos cellules.",
  'content.learn.dna-genes.mean.2':
    'Les humains ont environ 20 000 gènes répartis le long de leurs chromosomes.',
  'content.learn.dna-genes.mean.3':
    "Les gènes existent en versions légèrement différentes. La plupart des différences entre versions n'ont aucun effet sur la santé ; quelques-unes sont liées à des maladies héréditaires.",
  'content.learn.dna-genes.misunderstanding':
    "Un gène contrôle rarement une seule caractéristique ou une seule maladie tout seul. La plupart des caractéristiques et des maladies impliquent plusieurs gènes, ainsi que les circonstances de la vie.",
  'content.learn.dna-genes.remember.0':
    "L'ADN est la molécule qui porte les instructions ; les gènes en sont de courtes sections.",
  'content.learn.dna-genes.remember.1':
    'Chaque gène a une fonction principale dans vos cellules.',
  'content.learn.dna-genes.remember.2':
    "Les gènes existent en versions, et la plupart des différences entre versions sont inoffensives.",

  'content.learn.inheritance.title':
    "Comment l'information génétique se transmet des parents aux enfants",
  'content.learn.inheritance.excerpt':
    "Pourquoi les enfants héritent d'un mélange venant de leurs deux parents biologiques.",
  'content.learn.inheritance.mean.0':
    "Quand une mère biologique et un père biologique ont un enfant, chacun transmet une copie de chaque gène.",
  'content.learn.inheritance.mean.1':
    "L'enfant a donc deux copies de chaque gène — une de chaque côté de la famille.",
  'content.learn.inheritance.mean.2':
    "Comme chaque parent peut transmettre une version différente, les frères et sœurs reçoivent des combinaisons différentes. C'est pourquoi les fratries se ressemblent sans être identiques.",
  'content.learn.inheritance.mean.3':
    "Certaines maladies suivent un schéma d'héritage clair ; d'autres dépendent de nombreux gènes et des circonstances de la vie.",
  'content.learn.inheritance.example':
    "Si les deux parents transmettent la même version fonctionnelle, l'enfant a deux versions fonctionnelles. S'ils transmettent tous les deux la même version modifiée, l'enfant a deux versions modifiées.",
  'content.learn.inheritance.remember.0':
    'Vous recevez une copie de chaque gène de chacun de vos parents biologiques.',
  'content.learn.inheritance.remember.1':
    'Les frères et sœurs héritent de combinaisons différentes.',
  'content.learn.inheritance.remember.2':
    "C'est le schéma d'héritage qui détermine les possibilités pour une maladie.",

  'content.learn.inherited-conditions.title':
    'Comprendre les maladies héréditaires',
  'content.learn.inherited-conditions.excerpt':
    "Ce que signifie « héréditaire » — et ce que cela ne signifie pas.",
  'content.learn.inherited-conditions.mean.0':
    "Une maladie héréditaire est une maladie causée principalement par des modifications de gènes transmises par un parent biologique.",
  'content.learn.inherited-conditions.mean.1':
    "Certaines maladies héréditaires sont présentes dès la naissance ; d'autres apparaissent plus tard au cours de la vie ; et certaines ne causent jamais de problèmes.",
  'content.learn.inherited-conditions.mean.2':
    "« Héréditaire » décrit la cause, pas la gravité. Deux personnes atteintes de la même maladie peuvent être affectées de façon très différente.",
  'content.learn.inherited-conditions.mean.3':
    "Un antécédent familial de maladie montre un schéma qui vaut la peine d'être compris — ce n'est pas une prédiction sur vous.",
  'content.learn.inherited-conditions.important':
    "Héréditaire ne veut pas dire inévitable. Porter un gène modifié ne signifie pas automatiquement que vous développerez la maladie, et un antécédent familial ne signifie pas que cela vous arrivera.",
  'content.learn.inherited-conditions.remember.0':
    "Les maladies héréditaires sont principalement causées par des modifications de gènes transmises par un parent.",
  'content.learn.inherited-conditions.remember.1':
    "Ce n'est la faute de personne.",
  'content.learn.inherited-conditions.remember.2':
    "Un antécédent familial montre un schéma, pas une certitude.",

  'content.learn.sickle-cell.title': 'Comprendre la drépanocytose',
  'content.learn.sickle-cell.excerpt':
    "Ce que le trait drépanocytaire signifie pour la santé, et pour un couple.",
  'content.learn.sickle-cell.mean.0':
    "La drépanocytose est liée au gène HBB, qui aide à fabriquer l'hémoglobine — la partie du sang qui transporte l'oxygène dans votre corps.",
  'content.learn.sickle-cell.mean.1':
    "Avec le trait drépanocytaire, vous avez une copie modifiée et une copie fonctionnelle. La plupart des personnes porteuses mènent une vie normale et en bonne santé.",
  'content.learn.sickle-cell.mean.2':
    "Avec la drépanocytose, vous avez deux copies modifiées, ce qui peut causer de graves problèmes de santé.",
  'content.learn.sickle-cell.mean.3':
    "Là où la drépanocytose est plus fréquente, le dépistage du trait est proposé de façon routinière.",
  'content.learn.sickle-cell.misunderstanding':
    "Avoir le trait drépanocytaire n'est pas la même chose qu'avoir la drépanocytose. Un résultat de porteur ne signifie pas que vous êtes malade.",
  'content.learn.sickle-cell.important':
    "Dans de rares situations — effort physique très intense, manque d'oxygène ou déshydratation — les porteurs du trait peuvent présenter des complications. Il vaut la peine de signaler le trait à un médecin avant un entraînement intensif ou une activité en altitude.",
  'content.learn.sickle-cell.screening':
    "Le dépistage du trait drépanocytaire est un test courant et bien établi. Il montre une possibilité pour un couple, pas un diagnostic pour une grossesse en particulier — c'est une discussion à avoir avec un conseiller en génétique.",
  'content.learn.sickle-cell.remember.0':
    "Le trait drépanocytaire signifie une copie modifiée de HBB — la plupart des porteurs sont en bonne santé.",
  'content.learn.sickle-cell.remember.1':
    'La drépanocytose signifie deux copies modifiées.',
  'content.learn.sickle-cell.remember.2':
    "Le dépistage n'est pas un diagnostic ; discutez de votre résultat avec un professionnel.",

  'content.learn.carrier-status.title': 'Comprendre le statut de porteur',
  'content.learn.carrier-status.excerpt':
    "Ce que signifie porter une copie modifiée d'un gène.",
  'content.learn.carrier-status.mean.0':
    'La plupart des gens ont deux copies de chaque gène — une de chaque parent biologique.',
  'content.learn.carrier-status.mean.1':
    "Un porteur a une copie qui diffère de la version habituelle et une copie fonctionnelle. La copie fonctionnelle fait le travail, si bien que les porteurs sont généralement en bonne santé et ignorent le plus souvent qu'ils portent une modification.",
  'content.learn.carrier-status.mean.2':
    "C'est important parce que deux porteurs de la même maladie récessive peuvent, ensemble, avoir un enfant qui hérite de deux copies modifiées.",
  'content.learn.carrier-status.mean.3':
    "Être porteur est très courant. Ce n'est ni une faute, ni une maladie, ni une raison de honte.",
  'content.learn.carrier-status.example':
    "Une seule copie fonctionnelle suffit à faire tourner les choses — comme une lampe qui éclaire encore la pièce avec une seule ampoule fonctionnelle.",
  'content.learn.carrier-status.misunderstanding':
    "Être porteur n'est pas la même chose qu'être malade. Le statut de porteur ne dit rien de mauvais sur votre propre santé.",
  'content.learn.carrier-status.remember.0':
    'Un porteur a une copie modifiée et une copie fonctionnelle.',
  'content.learn.carrier-status.remember.1':
    "Les porteurs sont généralement en bonne santé et ignorent souvent qu'ils portent une modification.",
  'content.learn.carrier-status.remember.2':
    "Le statut de porteur est surtout important lorsque les deux partenaires portent des modifications du même gène.",

  'content.learn.probabilities.title':
    'Comprendre les probabilités de maladies héréditaires',
  'content.learn.probabilities.excerpt':
    "Ce que des chiffres comme 25 % signifient réellement — et ce qu'ils ne signifient pas.",
  'content.learn.probabilities.mean.0':
    "Une probabilité est une possibilité, pas une prédiction. Elle décrit la fréquence à laquelle un résultat se produit parmi de nombreuses possibilités — pas ce qui arrivera à une personne en particulier.",
  'content.learn.probabilities.mean.1':
    "Quand les deux parents biologiques portent une copie modifiée du même gène, chaque grossesse comporte une possibilité indépendante que l'enfant hérite de deux copies modifiées.",
  'content.learn.probabilities.mean.2':
    "Pour de nombreuses maladies récessives, cette possibilité est de 25 %, mais le chiffre exact dépend de la maladie concernée et doit être confirmé pour votre propre situation.",
  'content.learn.probabilities.mean.3':
    "La possibilité s'applique à nouveau à chaque grossesse. Elle ne s'additionne pas, ne se moyenne pas et ne s'épuise pas.",
  'content.learn.probabilities.example':
    "Imaginez quatre résultats également probables, comme quatre boîtes identiques dont une seule est marquée. Chaque grossesse ouvre un nouveau jeu de quatre boîtes — la marque de la fois précédente ne se reporte pas.",
  'content.learn.probabilities.misunderstanding':
    "Une possibilité de 25 % ne signifie pas qu'un enfant sur quatre de vos enfants sera forcément atteint. Cela signifie que, sur un très grand nombre de situations similaires, environ un quart des résultats correspondrait à des enfants atteints.",
  'content.learn.probabilities.screening':
    "Le dépistage vous indique quelles possibilités s'appliquent à vous en tant que couple. Il ne peut pas prédire ce qui arrivera dans une grossesse en particulier — c'est une question pour un conseiller en génétique qui a les deux résultats sous la main.",
  'content.learn.probabilities.remember.0':
    'Une probabilité est une possibilité, pas une prédiction.',
  'content.learn.probabilities.remember.1':
    'Chaque grossesse a sa propre possibilité indépendante.',
  'content.learn.probabilities.remember.2':
    "Confirmez les chiffres exacts pour votre maladie auprès d'un conseiller en génétique qualifié.",

  'content.learn.screening-counselling.title':
    'Comprendre le dépistage et le conseil génétique professionnel',
  'content.learn.screening-counselling.excerpt':
    "Ce qu'un dépistage peut et ne peut pas vous dire, et qui vous l'explique.",
  'content.learn.screening-counselling.mean.0':
    "Le dépistage vérifie si vous portez des modifications liées à certaines maladies héréditaires. C'est un point de départ pour une discussion, pas un diagnostic.",
  'content.learn.screening-counselling.mean.1':
    "Un résultat de porteur ou un résultat positif au dépistage n'est pas un diagnostic de maladie — c'est une information sur une possibilité qui doit généralement être confirmée et interprétée.",
  'content.learn.screening-counselling.mean.2':
    "Un conseiller en génétique est un professionnel formé qui explique les résultats de test, les schémas d'héritage et ce qu'ils signifient pour vous et votre partenaire.",
  'content.learn.screening-counselling.mean.3':
    "Un conseiller en génétique ne vous dit pas quoi faire. Il s'assure que vous comprenez suffisamment vos options pour décider vous-même.",
  'content.learn.screening-counselling.questions.0':
    'Pour quelles maladies ai-je été dépisté ?',
  'content.learn.screening-counselling.questions.1':
    'Que signifie mon résultat pour mon partenaire ?',
  'content.learn.screening-counselling.questions.2':
    'Quelles sont mes options, et que me recommanderiez-vous de lire ?',
  'content.learn.screening-counselling.remember.0':
    "Le dépistage n'est pas un diagnostic ; il décrit des possibilités.",
  'content.learn.screening-counselling.remember.1':
    'Les conseillers expliquent les résultats — les décisions restent les vôtres.',
  'content.learn.screening-counselling.remember.2':
    "Venez avec vos questions ; vous n'avez pas besoin d'arriver avec des réponses.",

  // --- Parcours : Comprendre mes résultats ------------------------
  'content.understand.screening-vs-diagnosis.title':
    "Le dépistage n'est pas un diagnostic",
  'content.understand.screening-vs-diagnosis.body.0':
    "Un test de dépistage cherche à savoir si vous portez des modifications liées à certaines maladies héréditaires. Il sert à lancer une discussion, pas à confirmer ou à écarter une maladie.",
  'content.understand.screening-vs-diagnosis.body.1':
    "Un résultat de dépistage « porteur » ou positif n'est pas un diagnostic de maladie. Un test de confirmation et une interprétation professionnelle précèdent généralement toute conclusion médicale.",
  'content.understand.screening-vs-diagnosis.body.2':
    "Un résultat « non détecté » réduit la probabilité de porter les modifications recherchées — mais aucun test de dépistage n'exclut complètement un statut de porteur.",
  'content.understand.carrier-vs-disease.title':
    "Le statut de porteur n'est pas la même chose qu'une maladie",
  'content.understand.carrier-vs-disease.body.0':
    "Un porteur a une copie modifiée d'un gène et une copie fonctionnelle. La copie fonctionnelle fait son travail, si bien que les porteurs sont généralement en bonne santé et ignorent souvent qu'ils portent une modification.",
  'content.understand.carrier-vs-disease.body.1':
    "De nombreuses maladies héréditaires n'apparaissent que lorsqu'une personne hérite de deux copies modifiées du même gène — une de chaque parent biologique.",
  'content.understand.carrier-vs-disease.body.2':
    "Être porteur est courant, et ce n'est la faute de personne. Cela décrit une possibilité à discuter avec un professionnel — ce n'est ni une maladie, ni une prédiction sur votre propre santé.",

  // --- Libellés de résultats ---------------------------------------
  'content.label.negative.label': 'Non détecté / négatif',
  'content.label.negative.desc':
    "Les modifications recherchées lors de ce dépistage n'ont pas été trouvées. Cela réduit la probabilité de porter ces modifications précises ; cela ne garantit pas que vous n'en portez aucune.",
  'content.label.carrier.label': 'Porteur / positif',
  'content.label.carrier.desc':
    "Une copie modifiée du gène a été trouvée. Cela n'affecte généralement pas votre propre santé, et c'est surtout important parce que deux porteurs du même gène peuvent discuter de leurs possibilités ensemble.",
  'content.label.uncertain.label': 'Incertain',
  'content.label.uncertain.desc':
    "Une différence a été trouvée, mais les preuves actuelles ne sont pas suffisantes pour dire ce qu'elle signifie. Ce n'est ni une bonne nouvelle ni une mauvaise nouvelle — c'est une information inachevée qu'un professionnel doit lire en même temps que vos antécédents familiaux.",

  'content.boundary':
    "GeneClarity ne pose pas automatiquement de diagnostic, ne classe pas et n'interprète pas médicalement les documents que vous téléversez. Cette section explique uniquement la terminologie générale.",
  'content.futureAi':
    "Si une interprétation de documents est un jour ajoutée, ce sera une fonctionnalité distincte qui exigera votre consentement explicite, une validation clinique et une supervision professionnelle. Elle ne fait pas partie de ce prototype.",
  'content.counselling':
    "Un conseiller en génétique est un professionnel formé qui explique les résultats de test, les schémas d'héritage et ce qu'ils signifient pour vous et votre partenaire — sans vous dire quoi faire. La décision reste la vôtre.",

  // --- Parcours : Accompagnement professionnel ---------------------
  'content.useful.0':
    'Vous avez reçu un résultat ou un document que vous ne comprenez pas.',
  'content.useful.1':
    'Vous et votre partenaire avez chacun des résultats de dépistage à examiner ensemble.',
  'content.useful.2': 'Un résultat a été signalé comme incertain.',
  'content.useful.3':
    'Une maladie se retrouve dans votre famille et vous voulez comprendre ce que cela peut signifier.',
  'content.useful.4':
    'Vous voulez que les chiffres soient expliqués pour votre propre situation, et non en général.',

  'content.question.0': 'Pour quelles maladies ai-je été dépisté ?',
  'content.question.1': 'Que signifie exactement mon résultat ?',
  'content.question.2': 'Mon résultat nécessite-t-il un test de confirmation ?',
  'content.question.3': 'Que signifie mon résultat pour mon partenaire ?',
  'content.question.4':
    'Quelles sont les possibilités, en chiffres, pour notre situation ?',
  'content.question.5':
    'Quelles options avons-nous, et que recommanderiez-vous de lire ?',
  'content.question.6':
    "Quelqu'un d'autre dans ma famille devrait-il être testé ?",
  'content.question.7':
    'Comment et quand devrait-on revoir ces informations ?',

  // --- Parcours : document d'exemple ------------------------------
  'content.sample.badge': 'Échantillon de démonstration',
  'content.sample.title': 'Rapport de dépistage synthétique',
  'content.sample.note':
    "Ceci est un document synthétique original créé pour cette démonstration. Ce n'est pas un vrai rapport, il ne contient aucune donnée réelle de patient et ce n'est pas un dossier médical.",
  'content.sample.field.prepared.label': 'Établi pour',
  'content.sample.field.prepared.value': "Personne d'exemple (fictive)",
  'content.sample.field.issued.label': 'Établi par',
  'content.sample.field.issued.value': 'Laboratoire de démonstration (fictif)',
  'content.sample.field.reference.label': 'Référence',
  'content.sample.field.reference.value': 'GC-DEMO-0001',
  'content.sample.field.date.label': 'Date',
  'content.sample.field.date.value': '15 janv. 2026',
  'content.sample.row.HBB.finding': 'Trait drépanocytaire (HbAS)',
  'content.sample.row.HBB.plain':
    'Une copie modifiée trouvée. Les porteurs sont généralement en bonne santé.',
  'content.sample.row.HEXA.finding': 'Aucune modification détectée',
  'content.sample.row.HEXA.plain':
    "La modification recherchée n'a pas été trouvée lors de ce dépistage.",
  'content.sample.row.CFTR.finding':
    'Modification de signification incertaine',
  'content.sample.row.CFTR.plain':
    "Une différence a été trouvée ; sa signification n'est pas encore comprise.",
  'content.sample.footer':
    "Résultat de dépistage — pas un diagnostic. Discutez de ce document avec un professionnel de santé qualifié. (Document de démonstration ; données synthétiques.)",

  // --- Notifications ------------------------------------------------
  'content.notify.ntf_01.title': "Votre rapport d'exemple est prêt",
  'content.notify.ntf_01.body':
    'Ouvrez votre rapport pour lire le résumé en langage clair.',
  'content.notify.ntf_02.title': "Aucun partenaire n'a accès",
  'content.notify.ntf_02.body':
    "Vos enregistrements restent privés jusqu'à ce que vous accordiez vous-même l'accès.",
  'content.notify.ntf_03.title':
    'Nouveau sujet : comprendre les probabilités de maladies héréditaires',
  'content.notify.ntf_03.body':
    'Une courte lecture sur ce que des chiffres comme 25 % signifient réellement.',

  // --- Annuaire des conseillers (illustratif uniquement) -----------
  'content.counsellor.cns_01.name': 'Dr. Amara Okonkwo',
  'content.counsellor.cns_01.role': 'Conseillère en génétique agréée',
  'content.counsellor.cns_01.focus':
    'Dépistage des porteurs, conseil de couple',
  'content.counsellor.cns_02.name': 'Dr. Yusuf Haddad',
  'content.counsellor.cns_02.role': 'Conseiller en génétique clinique',
  'content.counsellor.cns_02.focus':
    'Risque reproductif, interprétation des résultats',
  'content.counsellor.cns_03.name': 'Sara Mendez, MS, CGC',
  'content.counsellor.cns_03.role': 'Conseillère en génétique certifiée',
  'content.counsellor.cns_03.focus':
    'Résultats incertains, antécédents familiaux',

  // --- Journal d'activité (amorçage + temps réel) ------------------
  'content.act.reportViewed': "Points clés ouverts pour 3 résultats d'exemple.",
  'content.act.signedIn': 'Connexion sur cet appareil.',
  'content.act.languageChanged': "Langue d'affichage définie sur l'anglais.",
  'content.act.consentAccepted':
    "Acceptation de l'avis de confidentialité et de consentement.",
  'content.act.inviteSent':
    "Invitation de partenaire envoyée. Rien n'a encore été partagé.",
  'content.act.grantAccess': 'Accès du partenaire accordé ({n} catégories).',
  'content.act.revokeAccess':
    'Accès du partenaire révoqué. Tout accès futur est bloqué.',
  'content.act.clearPartner':
    'Connexion au partenaire entièrement supprimée.',
  'content.act.settingChanged':
    'Paramètre « {key} » remplacé par {value}.',
}
