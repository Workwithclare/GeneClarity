/**
 * GeneClarity — French catalogue.
 *
 * Keys mirror `en` exactly (parity is checked in docs). Written for this
 * project in the same plain-language, safety-first register as the
 * English copy: no diagnosis, no prescription, no life advice.
 *
 * Status: provisional translation pending professional review —
 * see docs/06_ACCESSIBILITY_AND_I18N.md.
 */

export const fr = {
  // --- Marque -------------------------------------------------------
  'brand.tagline': 'Comprendre et réduire le risque de maladies héréditaires.',
  'brand.promise1': 'Mieux connaître.',
  'brand.promise2': 'Mieux planifier.',
  'brand.promiseSub': 'Des repères clairs et simples sur votre santé génétique.',
  'brand.line': 'GÉNÉTIQUE · COMPRÉHENSION · CHOIX',

  // --- Actions génériques --------------------------------------------
  'act.getStarted': 'Commencer',
  'act.signIn': 'Se connecter',
  'act.signUp': "S'inscrire",
  'act.signOut': 'Se déconnecter',
  'act.next': 'Suivant',
  'act.back': 'Retour',
  'act.continue': 'Continuer',
  'act.cancel': 'Annuler',
  'act.save': 'Enregistrer',
  'act.close': 'Fermer',
  'act.learnMore': 'En savoir plus',
  'act.viewReport': 'Voir le rapport',
  'act.downloadPdf': 'Télécharger le PDF',
  'act.getSupport': 'Obtenir de l’aide',
  'act.goToDashboard': 'Aller au tableau de bord',
  'act.tryAgain': 'Réessayer',
  'act.skip': 'Passer',
  'act.viewAll': 'Tout voir',

  // --- Écran de démarrage ---------------------------------------------
  'splash.loading': 'Chargement…',
  'splash.notice': 'Prototype de démonstration',

  // --- Prise en main ----------------------------------------------------
  'onb.whatTitle': 'Qu’est-ce que GeneClarity ?',
  'onb.whatBody':
    'GeneClarity vous aide à comprendre vos informations génétiques de façon simple et responsable.',
  'onb.f1': 'Comprendre les risques héréditaires possibles',
  'onb.f2': 'Obtenir des informations de santé fiables',
  'onb.f3': 'Connaître vos options',
  'onb.step': 'Étape',
  'onb.of': 'sur',
  'onb.privacyTitle': 'Vos informations restent les vôtres',
  'onb.privacyBody':
    'Vos données sont privées par défaut. Rien n’atteint un partenaire sans votre accord explicite — que vous pouvez retirer à tout moment.',
  'onb.p1': 'Comptes privés séparés',
  'onb.p2': 'Consentement requis pour partager',
  'onb.p3': 'Retirer l’accès à tout moment',
  'onb.safetyTitle': 'Des conseils, pas un diagnostic',
  'onb.safetyBody':
    'GeneClarity explique les informations de dépistage en langage clair. Elle ne pose pas de diagnostic, ne prescrit rien et ne vous dit pas quoi décider.',
  'onb.s1': 'Explications en langage clair',
  'onb.s2': 'L’incertitude montrée honnêtement',
  'onb.s3': 'Oriente vers de vrais conseillers',

  // --- Consentement -------------------------------------------------------
  'consent.title': 'Confidentialité et consentement',
  'consent.lead':
    'Avant de continuer, veuillez confirmer comment vos informations peuvent être utilisées.',
  'consent.c1t': 'Vos résultats restent privés',
  'consent.c1b':
    'Les informations de dépistage appartiennent à votre compte seul. Personne ne les voit si vous ne choisissez pas de les partager.',
  'consent.c2t': 'Le partage reste toujours votre choix',
  'consent.c2b':
    'Un partenaire ne peut jamais ouvrir vos données automatiquement. Vous accordez l’accès explicitement et pouvez le retirer à tout moment.',
  'consent.c3t': 'Ceci n’est pas un diagnostic',
  'consent.c3b':
    'GeneClarity explique des informations éducatives. Elle ne diagnostique pas de maladies, ne prescrit pas de traitement et ne remplace pas un médecin ou un conseiller en génétique.',
  'consent.c4t': 'Données de démonstration uniquement',
  'consent.c4b':
    'Ce prototype utilise des enregistrements d’origine, clairement étiquetés. Aucune donnée réelle de patient n’est utilisée.',
  'consent.agree': 'J’ai lu et j’accepte',
  'consent.decline': 'Refuser et quitter',
  'consent.required': 'Veuillez cocher la case pour continuer.',
  'consent.declinedTitle': 'Vous avez choisi de ne pas continuer',
  'consent.declinedBody':
    'C’est un choix tout à fait raisonnable. Rien n’a été enregistré, et vous pouvez revenir quand vous le souhaitez.',

  // --- Authentification -----------------------------------------------------
  'auth.welcomeBack': 'Bon retour',
  'auth.signInToContinue': 'Connectez-vous pour continuer',
  'auth.email': 'Adresse e-mail',
  'auth.password': 'Mot de passe',
  'auth.confirmPassword': 'Confirmer le mot de passe',
  'auth.fullName': 'Nom complet',
  'auth.remember': 'Se souvenir de moi',
  'auth.forgot': 'Mot de passe oublié ?',
  'auth.forgotNote':
    'La réinitialisation du mot de passe n’est pas connectée dans ce prototype — aucun e-mail ne sera envoyé. Dans un vrai service, nous vous enverrions un lien de réinitialisation.',
  'auth.or': 'ou',
  'auth.continueGoogle': 'Continuer avec Google',
  'auth.continueApple': 'Continuer avec Apple',
  'auth.socialDemo': "La connexion sociale n'est pas connectée dans ce prototype - les boutons sont affichés à titre de design uniquement.",
  'auth.errInvalid': 'L’e-mail ou le mot de passe est incorrect.',
  'auth.errEmailTaken': 'Un compte avec cet e-mail existe déjà.',
  'auth.errNetwork':
    'Impossible de joindre le service de connexion. Vérifiez votre connexion et réessayez.',
  'auth.errGeneric': 'Une erreur s’est produite. Veuillez réessayer.',
  'auth.errConfirm': 'Vérifiez votre boîte de réception - nous vous avons envoyé un lien de confirmation.',
  'auth.backendTitle': 'Compte sécurisé',
  'auth.backendBody':
    'Les comptes sont créés et stockés avec Supabase Authentication. Rien n’est envoyé à un autre service.',
  'auth.checkInbox':
    'Presque terminé - ouvrez le lien que nous vous avons envoyé par e-mail, puis connectez-vous.',
  'auth.working': 'Un instant…',
  'auth.createTitle': 'Créer un compte',
  'auth.createSub': 'Rejoignez GeneClarity dès aujourd’hui',
  'auth.noAccount': 'Pas encore de compte ?',
  'auth.hasAccount': 'Vous avez déjà un compte ?',
  'auth.terms': 'J’accepte les conditions et la politique de confidentialité',
  'auth.demoBody':
    'Aucun vrai compte n’est créé. Utilisez n’importe quels identifiants pour explorer le prototype, ou chargez le compte d’exemple ci-dessous.',
  'auth.demoFill': 'Utiliser le compte d’exemple',
  'auth.errEmail': 'Veuillez saisir votre adresse e-mail.',
  'auth.errEmailShape': 'Ceci ne ressemble pas à une adresse e-mail.',
  'auth.errPassword': 'Veuillez saisir votre mot de passe.',
  'auth.errPasswordShort': 'Le mot de passe doit comporter au moins 6 caractères.',
  'auth.errName': 'Veuillez saisir votre nom.',
  'auth.errMatch': 'Les mots de passe ne correspondent pas.',
  'auth.errTerms': 'Veuillez accepter les conditions pour continuer.',
  'auth.show': 'Afficher le mot de passe',
  'auth.hide': 'Masquer le mot de passe',

  // --- Tableau de bord ------------------------------------------------------
  'dash.hello': 'Bonjour,',
  'dash.companion': 'Votre compagnon de santé génétique',
  'dash.journey': 'Votre parcours santé',
  'dash.journeySub': 'Explorez vos repères et obtenez des conseils personnalisés.',
  'dash.quickAccess': 'Accès rapide',
  'dash.myReport': 'Mon rapport',
  'dash.healthTips': 'Conseils santé',
  'dash.faqs': 'FAQ',
  'dash.settings': 'Paramètres',
  'dash.home': 'Accueil',
  'dash.report': 'Rapport',
  'dash.tips': 'Conseils',
  'dash.profile': 'Profil',
  'dash.coupleCard': 'CoupleConnect',
  'dash.coupleSub': 'Explorez vos informations de compatibilité ensemble, avec consentement.',

  // --- Rapport ----------------------------------------------------------------
  'rep.title': 'Votre rapport génétique',
  'rep.allSet': 'Tout est prêt !',
  'rep.ready': 'Votre rapport est prêt.',
  'rep.note':
    'Remarque : ceci est un résumé éducatif, pas un diagnostic médical.',
  'rep.sampleTag': 'DONNÉES DE DÉMONSTRATION',
  'rep.none': 'Aucun rapport n’a encore été ajouté.',
  'rep.summary': 'Résumé',
  'rep.carrierCount': 'Résultats de porteur',
  'rep.testedCount': 'Maladies dépistées',
  'rep.updated': 'Dernière mise à jour',
  'rep.disclaimer':
    'Ces chiffres décrivent un enregistrement de démonstration créé pour ce prototype. Ce ne sont pas des résultats cliniques.',

  // --- Détail du résultat -------------------------------------------------------
  'res.keyInsights': 'Points clés',
  'res.carrierStatus': 'Statut de porteur',
  'res.whatThisMeans': 'Ce que cela signifie',
  'res.notCarried': 'Porteur non détecté',
  'res.uncertain': 'Variante de signification incertaine',
  'res.plainTitle': 'En langage clair',
  'res.forCouple': 'Ce que cela signifie pour un couple',
  'res.uncertainTitle': 'À propos de l’incertitude',
  'res.uncertainBody':
    'Certains résultats ne sont pas clairs. « Incertain » signifie que l’information n’est pas assez comprise pour en tirer une conclusion — cela ne signifie pas que quelque chose ne va pas.',
  'res.nextSteps': 'Étapes suggérées',
  'res.step1': 'Lisez l’explication en langage clair de cette page.',
  'res.step2': 'Apportez ces résultats à votre médecin ou à un conseiller en génétique.',
  'res.step3': 'Évitez de prendre des décisions de santé à partir de cet écran seul.',
  'res.safety': 'GeneClarity explique des informations. Elle ne pose pas de diagnostic.',
  'res.glossary': 'Mots utilisés sur cette page',
  'res.gCarrier': 'Porteur',
  'res.gCarrierDef':
    'Une personne qui porte une copie modifiée d’un gène sans généralement être atteinte par la maladie elle-même.',
  'res.gRecessive': 'Maladie récessive',
  'res.gRecessiveDef':
    'Une maladie qui n’apparaît généralement que lorsqu’une personne hérite de deux copies modifiées du même gène.',
  'res.gVariant': 'Variante',
  'res.gVariantDef':
    'Une différence dans une séquence d’ADN. Certaines n’ont aucun effet, d’autres comptent pour la santé.',

  // --- Apprentissage / éducation ------------------------------------------------
  'learn.title': 'Apprendre',
  'learn.subtitle': 'Des explications claires sur les maladies héréditaires et le vocabulaire du dépistage.',
  'learn.search': 'Rechercher des sujets…',
  'learn.all': 'Tout',
  'learn.basics': 'Les bases',
  'learn.conditions': 'Maladies',
  'learn.counselling': 'Conseil génétique',
  'learn.readTime': 'min de lecture',
  'learn.empty': 'Aucun sujet ne correspond à cette recherche.',
  'learn.educationOnly':
    'Contenu éducatif uniquement. Ce sont des informations générales, pas des conseils sur votre propre santé.',
  'learn.related': 'Sujets liés',
  'learn.whatMean': 'Qu’est-ce que cela signifie ?',
  'learn.remember': 'Que dois-je retenir ?',
  'learn.important': 'Important à savoir',
  'learn.misunderstanding': 'Malentendu courant',
  'learn.example': 'Exemple',
  'learn.screeningMean': 'Ce que cela signifie pour le dépistage',
  'learn.questions': 'Questions que vous pourriez poser à un professionnel de santé',

  // --- FAQ -----------------------------------------------------------------------
  'faq.title': 'Questions fréquemment posées',
  'faq.search': 'Rechercher dans la FAQ…',
  'faq.noResults': 'Aucune question ne correspond à votre recherche.',
  'faq.safety': 'Les réponses sont des informations éducatives générales, pas des conseils sur votre propre santé.',
  'faq.helpTitle': 'Besoin d’aide supplémentaire ?',
  'faq.helpBody': 'Parlez à un conseiller en génétique.',
  'faq.q1': 'Qu’est-ce qu’un porteur ?',
  'faq.a1':
    'Un porteur possède une copie modifiée d’un gène. La plupart des porteurs en bonne santé ne le savent jamais. Deux porteurs qui ont un enfant ensemble, c’est lorsqu’une maladie récessive peut devenir pertinente.',
  'faq.q2': 'Quels sont les risques ?',
  'faq.a2':
    'Le risque dépend des résultats des deux partenaires et de la maladie spécifique. Il s’exprime comme une fourchette ou une fraction, jamais comme une certitude. Un conseiller en génétique peut vous expliquer les chiffres pour votre propre situation.',
  'faq.q3': 'Puis-je transmettre cela à mon enfant ?',
  'faq.a3':
    'Potentiellement, et c’est exactement à cela que sert le dépistage. Le schéma dépend des deux parents. C’est une question pour un conseiller qualifié qui peut voir les deux dossiers.',
  'faq.q4': 'Dois-je voir un médecin ?',
  'faq.a4':
    'Si un résultat vous préoccupe, oui. GeneClarity est conçu pour vous aider à préparer cette conversation, pas pour la remplacer.',

  // --- CoupleConnect --------------------------------------------------------------
  'cc.title': 'CoupleConnect',
  'cc.lead':
    'Explorez ce que vos informations de dépistage combinées peuvent signifier — uniquement avec le consentement complet des deux personnes.',
  'cc.noPartner': 'Aucun partenaire connecté',
  'cc.noPartnerBody':
    'L’accès d’un partenaire commence par une invitation explicite. Rien n’est partagé tant que vous n’êtes pas tous les deux d’accord.',
  'cc.invite': 'Inviter un partenaire',
  'cc.inviteBody':
    'Invitez votre partenaire. Rien ne leur est visible tant que vous n’accordez pas l’accès — et vous pouvez le retirer à tout moment.',
  'cc.partnerEmail': 'E-mail du partenaire',
  'cc.partnerEmailHint':
    'Il ou elle doit avoir son propre compte GeneClarity. Une invitation, à elle seule, ne partage rien.',
  'cc.noAccountFound': 'Aucun compte GeneClarity trouvé avec cet e-mail.',
  'cc.inviteWorking': 'Invitation…',
  'cc.yourConsent': 'Votre consentement au partage',
  'cc.manageConsent': 'Gérer ce que je partage',
  'cc.statusNone': 'Rien n’est partagé',
  'cc.statusPending': 'Invitation en attente',
  'cc.statusActive': 'Partage actif',
  'cc.statusRevoked': 'Accès révoqué',
  'cc.revoke': 'Révoquer l’accès futur',
  'cc.revokeConfirm':
    'Votre partenaire perdra immédiatement l’accès à tout ce qui est partagé. Il ou elle garde son propre compte.',
  'cc.whatPartnerSees': 'Ce que mon partenaire verrait',
  'cc.seesConsent': 'Uniquement les catégories que vous activez. Rien d’autre.',
  'cc.seesNoChart': 'Votre rapport complet n’est jamais affiché par défaut.',
  'cc.ruleTitle': 'Comment fonctionne le partage',
  'cc.rule1': 'Chaque personne détient un compte privé séparé.',
  'cc.rule2': 'Rien n’est partagé avant le consentement des deux parties.',
  'cc.rule3': 'Chacun peut retirer son consentement à tout moment.',
  'cc.rule4': 'Le retrait bloque l’accès futur ; il n’efface pas ce qui a déjà été vu légalement.',
  'cc.bothConsent': 'Les deux partenaires doivent consentir avant tout partage.',
  'cc.demoPartner': 'Partenaire de démonstration',
  'cc.combinedTitle': 'Vue combinée',
  'cc.combinedBody':
    'Lorsque les deux dossiers sont partagés, GeneClarity peut afficher les statuts de porteur communs. C’est une information éducative à discuter avec un conseiller — pas un verdict de compatibilité.',
  'cc.never': 'GeneClarity ne dit à personne s’il faut se marier ou avoir des enfants.',

  // --- Consentement du partenaire --------------------------------------------------
  'pc.title': 'Consentement au partage du partenaire',
  'pc.lead': 'Vous décidez exactement de ce que votre partenaire peut voir.',
  'pc.scope': 'Choisir quoi partager',
  'pc.optSummary': 'Résumé commun des porteurs',
  'pc.optSummaryBody': 'Uniquement vos résultats de porteur en langage clair.',
  'pc.optFull': 'Accès au rapport complet',
  'pc.optFullBody': 'Permet à votre partenaire d’ouvrir votre rapport complet.',
  'pc.optActivity': 'Notifications d’activité',
  'pc.optActivityBody': 'Prévenez-le ou elle quand vous ajoutez un nouveau résultat.',
  'pc.grant': 'Accorder l’accès',
  'pc.revoke': 'Révoquer l’accès',
  'pc.none': 'Rien n’est partagé pour le moment.',
  'pc.expires': 'Consentement enregistré',
  'pc.revokeWarning':
    'La révocation bloque immédiatement l’accès futur. Elle ne supprime rien de ce qui a déjà été vu.',
  'pc.saved': 'Vos choix de consentement ont été enregistrés.',
  'pc.withdrawTitle': 'Retirer le consentement',
  'pc.withdrawBody':
    'Vous pouvez arrêter de partager à tout moment, pour n’importe quelle raison, sans avoir à la donner.',

  // --- Accompagnement / conseil génétique ---------------------------------------------
  'sup.title': 'Conseil génétique',
  'sup.helpSub': 'Nous sommes là pour vous aider.',
  'sup.lead':
    'Parlez à un professionnel qualifié de ce que vos résultats signifient pour vous.',
  'sup.whyTitle': 'Quand le conseil génétique aide',
  'sup.why1': 'Vous voulez que les chiffres soient expliqués pour votre situation.',
  'sup.why2': 'Vous et votre partenaire avez des résultats que vous aimeriez lire ensemble.',
  'sup.why3': 'Un résultat vous a inquiété ou laissé sans savoir quoi faire ensuite.',
  'sup.book': 'Demander un appel',
  'sup.message': 'Envoyer un message',
  'sup.faq': 'FAQ',
  'sup.contact': 'Nous contacter',
  'sup.liveChat': 'Chat en direct',
  'sup.available': 'Disponible 24h/24 et 7j/7',
  'sup.demoNote':
    'Démonstration uniquement — aucun vrai rendez-vous n’est pris et aucun message n’est envoyé depuis ce prototype.',
  'sup.directoryTitle': 'Annuaire des conseillers',
  'sup.directoryNote':
    'Entrées illustratives pour la mise en page. Pas un vrai annuaire ni un service de orientation.',
  'sup.emergency':
    'Si vous vous sentez mal ou êtes préoccupé par un problème de santé urgent, contactez votre médecin ou les services d’urgence locaux. GeneClarity n’est pas un service d’urgence.',

  // --- Profil -------------------------------------------------------------------------
  'prof.title': 'Profil',
  'prof.myReports': 'Mes rapports',
  'prof.familyAccess': 'Accès familial',
  'prof.privacySettings': 'Paramètres de confidentialité',
  'prof.about': 'À propos de GeneClarity',
  'prof.notifications': 'Notifications',
  'prof.activity': "Historique d'activité",
  'prof.memberSince': 'Membre depuis',

  // --- Paramètres -----------------------------------------------------------------------
  'set.title': 'Paramètres',
  'set.language': 'Langue',
  'set.notifications': 'Notifications',
  'set.privacySecurity': 'Confidentialité et sécurité',
  'set.dataSharing': 'Partage de données',
  'set.aboutApp': 'À propos de l’application',
  'set.helpSupport': 'Aide et assistance',

  // --- Paramètres de confidentialité --------------------------------------------------------
  'priv.title': 'Confidentialité et sécurité',
  'priv.lead': 'Contrôlez la façon dont vos informations sont traitées.',
  'priv.profileVisibility': 'Visibilité du profil',
  'priv.profileVisibilitySub': 'Vous seul voyez les détails de votre profil.',
  'priv.shareResearch': 'Contribuer des données anonymisées',
  'priv.shareResearchSub':
    'Désactivé par défaut. De toute façon, aucune donnée ne quitte ce prototype.',
  'priv.autoLock': 'Verrouillage automatique',
  'priv.autoLockSub': 'Redemander la connexion après 15 minutes d’inactivité.',
  'priv.export': 'Exporter mes données',
  'priv.exportSub': 'Télécharger une copie de toutes les données vous concernant.',
  'priv.erase': 'Supprimer mon compte',
  'priv.eraseSub': 'Supprimer définitivement votre compte et vos enregistrements.',
  'priv.eraseConfirm':
    'Cette démonstration ne stocke pas de données sur un serveur, donc il n’y a rien à supprimer. Dans le produit réel, cela serait irréversible.',
  'priv.partnersTitle': 'Accès du partenaire',
  'priv.noPartner': 'Aucun partenaire n’a accès à vos données.',
  'priv.manage': 'Gérer le partage',
  'priv.logTitle': 'Journal de confidentialité',
  'priv.logNote': 'Chaque changement de consentement est enregistré ici.',

  // --- Notifications ------------------------------------------------------------------------
  'notif.title': 'Notifications',
  'notif.empty': 'Vous êtes à jour.',
  'notif.markRead': 'Tout marquer comme lu',
  'notif.markOne': 'Marquer comme lu',
  'notif.unread': 'Non lu',
  'notif.allRead': 'Toutes les notifications sont marquées comme lues.',

  // --- Activité ---------------------------------------------------------------------------------
  'act2.title': "Historique d'activité",
  'act2.lead': 'Un enregistrement de ce qui s’est passé dans votre compte.',
  'act2.empty': 'Aucune activité enregistrée pour le moment.',
  'act2.signedIn': 'Connexion',
  'act2.consentGranted': 'Accès partenaire accordé',
  'act2.consentRevoked': 'Accès partenaire révoqué',
  'act2.reportViewed': 'Rapport consulté',
  'act2.settingsChanged': 'Paramètres modifiés',
  'act2.languageChanged': 'Langue modifiée',
  'act2.note': 'L’activité reste sur cet appareil uniquement.',

  // --- Succès / achèvement --------------------------------------------------------------------
  'done.title': 'Tout est prêt !',
  'done.body': 'Merci d’avoir choisi GeneClarity. Votre parcours de santé compte.',

  // --- Avis partagés ------------------------------------------------------------------------------
  'nav.demo': 'Prototype',
  'notice.sampleHeading': 'Données de démonstration',
  'notice.sampleBody':
    'Chaque résultat, nom et chiffre de ce prototype est un exemple original créé pour la démonstration. Rien ici n’est un vrai résultat de dépistage.',
  'notice.notDiagnostic': 'Pas un diagnostic',
  'notice.backHome': 'Retour au début',

  // --- Mon parcours de dépistage --------------------------------------------------------------------
  'journey.title': 'Mon parcours de dépistage',
  'journey.cardSub':
    'Conservez vos rapports en privé, comprenez vos résultats et préparez-vous à un accompagnement professionnel.',
  'journey.subtitle':
    'Gardez vos informations de dépistage en sécurité, comprenez ce qu’elles disent et savez quand impliquer un professionnel.',
  'journey.resultsCard': 'Mes résultats de dépistage',
  'journey.resultsSub':
    'Téléversez vos rapports de dépistage dans un espace privé accessible uniquement par vous.',
  'journey.understandCard': 'Comprendre mes résultats',
  'journey.understandSub':
    'Explications en langage clair des termes de dépistage courants et des libellés de résultats.',
  'journey.guidanceCard': 'Accompagnement professionnel',
  'journey.guidanceSub':
    'Ce qu’est le conseil génétique, quand il peut aider et comment préparer vos questions.',
  'journey.privacyTitle': 'Privé par défaut',
  'journey.privacyBody':
    'Vos documents ne appartiennent qu’à vous. Rien n’est partagé automatiquement avec un partenaire ou un proche.',
  'journey.sharingTitle': 'Partager des documents de dépistage',
  'journey.sharingBody':
    'Le partage de documents avec un partenaire n’est pas implémenté dans ce prototype. C’est une fonctionnalité prévue — elle ne sera construite qu’avec un consentement explicite et révocable, et seulement après avoir été testée sur le plan de la sécurité.',
  'journey.planned': 'Prévu',
  'journey.docsTitle': 'Mes résultats de dépistage',
  'journey.docsPrivacy':
    'Les documents sont stockés dans un espace privé : seul votre compte peut les lister, les ouvrir ou les supprimer, via des liens signés de courte durée — jamais des URL publiques.',
  'journey.upload': 'Téléverser un document',
  'journey.uploading': 'Téléversement…',
  'journey.formats': 'PDF, JPG ou PNG · jusqu’à 10 Mo',
  'journey.uploaded': 'Document téléversé.',
  'journey.emptyTitle': 'Aucun document pour l’instant',
  'journey.emptyBody':
    'Téléversez un rapport de dépistage pour le conserver avec votre parcours — privé et accessible uniquement à vous.',
  'journey.viewSample': 'Voir un document d’exemple',
  'journey.open': 'Ouvrir',
  'journey.download': 'Télécharger',
  'journey.delete': 'Supprimer',
  'journey.deleteConfirm': 'Supprimer ce document ? Le fichier est retiré du stockage.',
  'journey.uploadedBy': 'Téléversé le',
  'journey.errType':
    'Type de fichier non pris en charge. Veuillez téléverser un fichier PDF, JPG ou PNG.',
  'journey.errSize': 'Ce fichier est trop volumineux. La taille maximale est de 10 Mo.',
  'journey.errUpload': 'Le téléversement n’a pas pu être terminé. Veuillez réessayer.',
  'journey.errGeneric': 'Une erreur s’est produite. Veuillez réessayer.',
  'journey.errDemo':
    'Le téléversement de documents nécessite le backend Supabase connecté, qui n’est pas actif en mode démonstration local.',
  'journey.understandTitle': 'Comprendre mes résultats',
  'journey.understandIntro':
    'Ce que signifient les mots courants du dépistage, en langage quotidien. Ceci explique la terminologie générale — elle ne lit pas ni n’interprète vos documents téléversés.',
  'journey.labelsTitle': 'Libellés de résultats courants',
  'journey.boundaryTitle': 'Ce que cette application ne fera pas',
  'journey.educationLink': 'Lire dans le centre d’apprentissage',
  'journey.counsellingTitle': 'Qu’est-ce que le conseil génétique ?',
  'journey.guidanceTitle': 'Accompagnement professionnel',
  'journey.whenTitle': 'Quand un accompagnement professionnel peut être utile',
  'journey.questionsTitle': 'Préparez vos questions',
  'journey.questionsSub':
    'Cochez les questions que vous voulez emporter avec vous. Votre sélection reste sur cet appareil.',
  'journey.selected': 'Sélectionné : {n}',
  'journey.sampleTitle': 'Document d’exemple',
  'journey.sampleHint':
    'Les documents que vous téléversez sont stockés à part, dans votre espace privé — cet exemple est intégré à l’application à des fins de démonstration.',
  'journey.backToDocs': 'Retour à mes documents',

  // --- Erreurs ---------------------------------------------------------------------------------------
  'err.title': 'Cet écran est introuvable.',
  'err.body': 'La page demandée n’existe pas dans ce prototype.',
}
