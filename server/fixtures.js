if(FigureOfSpeech.find().count() === 0)
{
	FigureOfSpeech.insert(
	{
		name: "l'ironie",
		what: 'Figure qui consiste à dire, sous forme de raillerie, le contraire de ce que l\'on pense.',
		example: 'C\'est malin !',
	});

	FigureOfSpeech.insert(
	{
		name: "l'antiphrase",
		what: 'Figure majeure de l\'ironie, expression d\'une idée par son contraire. Les propos prononcés doivent être compris en sens inverse.',
		example: 'Dire "Beau travail !" à quelqu\'un qui a tout gâché.',
	});

	FigureOfSpeech.insert(
	{
		name: "l'antithèse",
		what: "Désigne le rapprochement au moyen d'outil (et, ou, ni) de deux mots ou expressions de sens contraires dans une structure binaire. L'énoncé n'est pas contradictoire car le mot outil présent entre les deux termes opposés enlève tout paradoxe.",
		example: 'Capable du meilleur comme du pire.',
	});

	FigureOfSpeech.insert(
	{
		name: "l'oxymore",
		what: 'Deux mots au sens contraire sont juxtaposés ou immédiatement soudés. Cette association crée un énoncé paradoxal, contradictoire.',
		example: 'Hâtez-vous lentement.',
	});

	FigureOfSpeech.insert(
	{
		name: "le paradoxe",
		what: "Procédé qui consiste à rapprocher ou combiner des mots ordinairement opposés ou contradictoires, de façon à rendre plus frappante une affirmation. Relation logique entre ces deux éléments qui vont à l'encontre de l'opinion commune, la doxa.",
		example: "Qui paie ses dettes s'enrichit.",
	});

	FigureOfSpeech.insert(
	{
		name: "le chiasme",
		what: "Figure signifiant croisement en grec, structure en miroir ABBA. Construction syntaxique en symétrie inversée servant à exprimer une opposition ou au contraire une union.",
		example: "Ayant le feu pour père, et pour mère la cendre.",
	});

	FigureOfSpeech.insert(
	{
		name: "le zeugme",
		what: "Construction syntaxique où un mot est énoncé une seule fois, alors qu'il est associé à deux termes distincts (appartenant à des registres sémantiques différents) qui lui donnent chacun une valeur différente.",
		example: "J'aime la vie et les coquillettes. (aimer au sens large et sens restreint de plaisir gustatif)",
	});

	FigureOfSpeech.insert(
	{
		name: "l'allocution oratoire",
		what: "Procédé qui consiste à feindre de défendre la thèse adverse pour mieux la contester.",
		example: "Vous me dire que Dieu est bon par nature, mais je pense que de telles injuustices ne peuvent exister sans son concours.",
	});

	FigureOfSpeech.insert(
	{
		name: "la metalepse",
		what: "Procédé qui permet au narrateur, qui est hors de la fiction, donc externe à l'histoire, d'intervenir dans cette fiction en rompant l'illusion romanesque, intrusion de ce narrateur de s'introduire dans l'univers fictionel.",
		example: "Tu vas mourir à la fin du spectacle.",
	});

	FigureOfSpeech.insert(
	{
		name: "l'hypotypose",
		what: "Description précise et riche qui est censée mettre sous les yeux du lecteur la scène ou l'objet décrit.",
		example: "Récit, scène ou tableau vivant intervenant dans la tragédie comme le récit de Théramène dans Phèdre V, 6, qui raconte la mort d'Hippolyte.",
	});

	FigureOfSpeech.insert(
	{
		name: "l'ellipse",
		what: "Procédé qui raccourcit l'expression en supprimant des mots dans une construction sans en obscurcir le sens.",
		example: "Je t'aimais alors même que tu était inconstant, que n'aurai-je pas fait si tu avait été fidèle ! -> Je t'aimais, inconstant, qu'aurais-je fait fidèle."
	});

	FigureOfSpeech.insert(
	{
		name: "l'énumération",
		what: "Succession à la suite des uns des autres de plusieurs éléments de même niveau syntaxique coordonnés ou non.",
		example: "Fuyards, blessés, mourants, caissons, brancard, civière",
	});

	FigureOfSpeech.insert(
	{
		name: "l'asyndète",
		what: "Rapproche des mots de même catégorie grammaticale sans mot de liaison.",
		example: "Travail, famille, patrie.",
	});

	FigureOfSpeech.insert(
	{
		name: "la gradation ascendante ou crescendo",
		what: "Procédé qui permet d'accroître l'intensité d'un propos en juxtaposant une série de termes exprimant à peu près la même idée de manière de moins en moins forte.",
		example: "J'attend, je demande, j'implore.",
	});

	FigureOfSpeech.insert(
	{
		name: "la gradation descendante ou decrescendo",
		what: "Procédé qui permet de décroître l'intensité d'un propos en juxtaposant une série de termes exprimant à peu près la même idée de manière de moins en moins forte.",
		example: "Il se mit à hurler puis en vint à crier, à parler, à murmurer et enfin il se tut.",
	});

	FigureOfSpeech.insert(
	{
		name: "l'accumulation",
		what: "Développe un thème, une idée, dans une succession et une abondance de détails, de précisions. L'ensemble peut donner une impression de désordre ou d'abondance.",
		example: "Devant eux, sur de petites tables carrées ou rondes, des verres contenaient des liquides rouges, jaunes, verts, bruns, de toutes les nuances.",
	});

	FigureOfSpeech.insert(
	{
		name: "l'hyperbole",
		what: "Figure dévolue à l'expression de l'exagération, du grossissement de la réalité.",
		example: "Melle de Chartres est \"une beauté parfaite\", l'hyperbole idéalise le portrait.",
	});

	FigureOfSpeech.insert(
	{
		name: "la mise en relief ou l'emphase",
		what: "Souligne un élément de l'énoncé à l'aide d'une construction syntaxique originale, comme l'utilisation du présentatif \"c'est... qui\".",
		example: "C'est Jean qui doit venir demain.",
	});

	FigureOfSpeech.insert(
	{
		name: "l'euphémisme",
		what: "Présente une réalité brutale qu'on déguise en atténuant son expression car elle renvoie à des domaines tabous (besoins naturels, sexe, mort...) peu convenants ou choquants à nommer directement.",
		example: "La chambrette où les rois ne vont pas à cheval. (pour les toilettes)",
	});

	FigureOfSpeech.insert(
	{
		name: "la litote",
		what: "Le locuteur dit moins pour faire entendre plus. Il feint d'atténuer une idée tout en l'affirmant implicitement avec plus de force car la fait ressortir en niant l'idée contraire (au lieu d'affirmer positivement cette idée il utilise la négation). Elle permet au narrateur d'exprimer des faits avec retenue ou élégance.",
		example: "Nous ne sommes pas près d'arriver. (alors que la distance à parcourir est encore très longue)",
	});

	FigureOfSpeech.insert(
	{
		name: "la prétérition",
		what: "Annonce qu'on ne parlera pas de certaines choses, tout en parlant pourtant nettement, par l'énumération même de ce dont on ne vas pas parler.",
		example: "Je ne rappellerai pas le rôle ambigu de ce personnage pendant la guerre, ni sa compromission dans des scandales.",
	});

	FigureOfSpeech.insert(
	{
		name: "La question oratoire ou rhétorique",
		what: "Consiste à poser une fausse question, c'est à dire non pas pour attendre une réponse qu'on ignorerait mais pour répondre soi-même ou faire réfléchir le lecteur.",
		example: "irai-je perdre mon temps avec cet imbécile ?",
	});

	FigureOfSpeech.insert(
	{
		name: "l'allitération",
		what: "Retour d'une sonorité consonantique, à intervalles rapprochés.",
		example: "Pour qui sont ces serpents qui sifflent sur vos têtes ?",
	});

	FigureOfSpeech.insert(
	{
		name: "l'assonance",
		what: "Retour d'une sonorité vocalique, à intervalles rapprochés.",
		example: "Mes étoiles au ciel avaient un doux frou-frou.",
	});

	FigureOfSpeech.insert(
	{
		name: "l'anaphore",
		what: "Répétition protant sur un terme ou une expression en début de vers ou de phrase marque l'investissement du locuteur sur le point répété et crée une musicalité.",
		example: "Ce qu'il faut de malheur pour la moindre chanson / Ce qu'il faut de regret pour payer un frisson / Ce qu'il faut de sanglot pour un air de guitare",
	});

	FigureOfSpeech.insert(
	{
		name: "l'épiphore",
		what: "Répétition d'un terme ou une expression en fin de vers ou de phrase.",
		example: "Sur le perron une dama apparut, parée pour la visite, coiffée pour la visite, avec des phrases prêtes pour la visite.",
	});

	FigureOfSpeech.insert(
	{
		name: "l'antépiphore",
		what: "Répétition d'un terme ou expression au début et à la fin d'un passage.",
		example: "",
	});

	FigureOfSpeech.insert(
	{
		name: "une anadiplose",
		what: "Reprise en tête d'un groupe syntaxique, d'un mot ou groupe de mots qui dans le groupe précédent est situé à la fin.",
		example: "Et l'éther devint l'air, et l'air devint le vent.",
	});

	FigureOfSpeech.insert(
	{
		name: "la polysyndete",
		what: "Utilisation répétée de la même conjonction de coordination devant des termes successifs.",
		example: "Et son bars, et sa jambes, et sa cuisse et ses reins.",
	});

	FigureOfSpeech.insert(
	{
		name: "le pléonasme",
		what: "Formule ou expression qui répète ce qui vient d'être dit.",
		example: "Monter en haut.",
	});

	FigureOfSpeech.insert(
	{
		name: "la redondance",
		what: "Apporte une information superflue parce que déjà donné auparavant.",
		example: "Un géant vraiment grand.",
	});

	FigureOfSpeech.insert(
	{
		name: "le parallélisme",
		what: "Répétiion d'une structure syntaxique, permettant d'exprimer l'identité.",
		example: "Guerre entre les couvents, guerre entre les provinces. (exprime l'identité  du conflit dans différents milieux, sa généralisation.)",
	});

	FigureOfSpeech.insert(
	{
		name: "le truisme",
		what: "Vérité d'évidence qu'il est inutile d'énoncer.",
		example: "Les enfants sont plus jeunes que les adultes.",
	});

	FigureOfSpeech.insert(
	{
		name: "la tautologie",
		what: "Présente comme une démonstration effective ce qui précisément était à démontrer.",
		example: "Il est absent parce qu'il n'est pas là.",
	});

	FigureOfSpeech.insert(
	{
		name: "l'équivoque",
		what: "Procédé qui consiste à faire suivre deux mots ou expressions ou membres de phrases présentant des sonorités identiques ou proches, mais de sens différents. On parle de CALEMBOUR quand ce jeu sur les sonorités vise à produire un effet comique.",
		example: "Qu'elle était belle Adèle [..] Mais elle est morte Adèle.",
	});

	FigureOfSpeech.insert(
	{
		name: "la paronomase",
		what: "Rapprochement de mots presque homophones (paronymes) mais de sens différents.",
		example: "Lingères légères.",
	});

	FigureOfSpeech.insert(
	{
		name: "le polyptote",
		what: "Proximité dans le discours de plusieurs formes d'un même mot sous des dérivations différentes (mots de la même famille, se construisant à partir du meme radical).",
		example: "Est-ce là comme on aime, et m'avez-vous aimé ?",
	});

	FigureOfSpeech.insert(
	{
		name: "l'apostrophe",
		what: "Procédé qui consiste à s'adresser directement à un personnage, au lecteur, à une idée, un objet, une force naturelle, en le prenant à parti ou à témoin.",
		example: "Toi, l'Auvergnat quand tu mourras.",
	});

	FigureOfSpeech.insert(
	{
		name: "la comparaison",
		what: "Figure qui opère un rapprochement de manière explicite à l'aide d'outils variés (comme = prép, sembler = vb, pareil à = adj) entre 2 réalités (terme comparé et terme comparant) pour en souligner leur ressemblance par un élément commun. Met donc en relief une analogie.",
		example: "Elle pleure comme une fontaine.",
	});

	FigureOfSpeech.insert(
	{
		name: "la métaphore",
		what: "Figure d'analogie ayant un pouvoir évocateur en rapprochant en sous-entendu un comparé et un comparant sans expression de mot outil de comparaison. La métaphore est filée lorsque l'image ou le même champ lexical se développe.",
		example: "Le soir de la vie. (pour la vieillesse)",
	});

	FigureOfSpeech.insert(
	{
		name: "la personnification",
		what: "Consiste à conférer des caractères humains à ce qui ne l'est pas (animal, chose inanimées, entité abstraite)",
		example: "Le crépuscule s'endort dans la nuit",
	});

	FigureOfSpeech.insert(
	{
		name: "l'allégorie",
		what: "Figure de personnification qui donne corps à une idée abstraite en présentant cette idée sous l'image et l'histoire d'un autre être souvent animé et concret. Elle permet donc une double lecture : Une lecture littérale : condition du pélican et une lecture symbolique : condition du poète",
		example: "MUSSET utilise l'allégorie du pélican, BAUDELAIRE celle de l'albatros pour symboliser leur mission de poète.",
	});

	FigureOfSpeech.insert(
	{
		name: "la prosopopée",
		what: "Discours placé dans la bouche d'une allégorie, d'une chose personnifiée, d'une abstraction ou encore d'un personnage mort ou dans l'impossibilité de parler. Consiste à mettre en scène des êtres surnaturels ou inanimés, des absents ou des morts et à les faire agir et parler.",
		example: "Un soir l'âme du vin chantait dans les bouteilles",
	});

	FigureOfSpeech.insert(
	{
		name: "la syllepse",
		what: "Figure consistant à employer un même mot dans deux sens : sens propre et figuré.",
		example: "Brûlé de plus de feux que je n'en allumai.",
	});

	FigureOfSpeech.insert(
	{
		name: "l'allusion",
		what: "Procédé qui consiste à formuler une chose de telle façon que l'interlocuteur perçoive un rapport avec une autre chose, qu'on ne dit pas, mais qu'il connaît par sa culture/sa situation.",
		example: "C'était l'heure où les machinistes vont boire",
	});

	FigureOfSpeech.insert(
	{
		name: "la périphrase",
		what: "Figure de style qui désigne volontairement une chose d'une manière détournée et imagée au lieu de la nommer directement. Procédé qui permet de mettre en relief une particularité, créer un effet d'attente, de mystère.",
		example: "Vite, voiturez-nous ici les commodités de la conversation",
	});

	FigureOfSpeech.insert(
	{
		name: "la métonymie",
		what: "Figure de style consistant à substituer un terme par un autre en raison de rapport logique entre eux : ces deux termes désignent des réalités distinctes.",
		example: "La cause pour l'effet : un Picasso : tableau pour l'artiste. Un Balzac : le livre pour l'auteur et une plume pour un auteur.",
	});

	FigureOfSpeech.insert(
	{
		name: "la synecdoque",
		what: "Figure de substitution désignant une chose par le nom d'une autre avec laquelle elle forme un tout (un seul objet). La substitution s'établit par un rapport d'appartenance d'inclusion (et vice-versa).",
		example: "La matière pour l'objet : le fer pour l'épée",
	});

	FigureOfSpeech.insert(
	{
		name: "une antonomase",
		what: "Attribue un nom propre pour un nom commun.",
		example: "Un Dom Juan = un séducteur.",
	});

	FigureOfSpeech.insert(
	{
		name: "une ou un hypallage",
		what: "Déplacement d'un mot dans une phrase qui lui fait assurer une fonction syntaxique différente de celle que le sens l'exigerait.",
		example: "Les moissonneurs posant leurs faucilles lassées.",
	});
}

