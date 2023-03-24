var iFileName = "Clerics27";
RequiredSheetVersion(13);

AddSubClass("cleric", "Aurielle's Radiant", {
  regExpSearch: /^(?=.*aurielle's)(?=.*radiant).*$/i,
  subname: "Aurielle's Radiant",
  source: ["HB", 0],
  spellcastingExtra: ["cure wounds", "sanctuary", "lesser restoration", "prayer of healing", "beacon of hope", "mass healing word", "guardian of faith", "sickening radiance", "mass cure wounds", "holy weapon"],
  features: {
    "subclassfeature1" : {
		name: "Healing Touch",
		source: ["HB", 0],
		minlevel: 1,
		usages: "Wisdom modifier per ",
		usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
		recovery: "long rest",
		action: ["action", ""],
		description : "\n   " + "As an action, I can touch a creature and restore a number of hit points equal to my level. I can use this feature a number of times equal to my Wisdom modifier (minimum of once), and I regain all expended uses when I finish a long rest.",
		skills : [['Medicine']]
    },
	"subclassfeature1.1" : {
		name: "Aurielle's Blessings",
		source: ["HB", 0],
		minlevel: 1,
		description : "\n   " + "I gain access to the 2nd-level spell Branding Smite, the 3rd-level spell Daylight, and the 5th-level spell Wall of Light ",
		spellcastingBonus : [{
			name : "Aurielle's Light",
			spells : ["branding smite"],
			selection : ["branding smite"],
			spellcastingAbility : 5,
			firstCol : "oncelr"
		}, {
			name : "Aurielle's Light",
			spells : ["daylight"],
			selection : ["daylight"],
			firstCol : "oncelr"
		}, {
			name : "Aurielle's Light",
			spells : ["wall of light"],
			selection : ["wall of light"],
			spellcastingAbility : 5,
			firstCol : "oncelr"
		}],
	},
    "subclassfeature2" : {
		name: "Channel Divinity: Radiant Burst",
		source: ["HB", 0],
		minlevel: 2,
		action: [["action", ""]],
		description : "\n   " + "As an action, I present my holy symbol, and each creature of my choice within 30 feet of me must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + my cleric level on a failed saving throw, or half as much damage on a successful one.",
		additional : ["2d10 + 1 damage", "2d10 + 2 damage", "2d10 + 3 damage", "2d10 + 4 damage", "2d10 + 5 damage", "2d10 + 6 damage", "2d10 + 7 damage", "2d10 + 8 damage", "2d10 + 9 damage", "2d10 + 10 dmg", "2d10 + 11 dmg", "2d10 + 12 dmg", "2d10 + 13 dmg", "2d10 + 14 dmg", "2d10 + 15 dmg", "2d10 + 16 dmg", "2d10 + 17 dmg", "2d10 + 18 dmg", "2d10 + 19 dmg", "2d10 + 20 dmg"]
    },
    "subclassfeature6" : {
		name: "Radiant Soul",
		source: ["HB", 0],
		minlevel: 6,
		description : "\n   " + "My link to Aurielle strengthens, and I gain resistance to radiant damage. In addition, when I cast a spell that restores hit points to a creature, I or another creature of my choice within 30 feet of me can regain hit points equal to my Wisdom modifier (minimum of 1).",
		dmgres : ["Radiant"],
    },
	"subclassfeature8" : {
		name : "Potent Spellcasting",
		source: ["HB", 0],
		minlevel : 8,
		description : "\n   " + "I add my Wisdom modifier to the damage I deal with my cleric cantrips",
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (classes.known.cleric && classes.known.cleric.level > 7 && v.thisWeapon[3] && v.thisWeapon[4].indexOf('cleric') !== -1 && SpellsList[v.thisWeapon[3]].level === 0) {
						output.extraDmg += What('Wis Mod');
					};
				},
				"My cleric cantrips get my Wisdom modifier added to their damage."
			],
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (spName.indexOf("cleric") == -1 || !What("Wis Mod") || Number(What("Wis Mod")) <= 0 || spellObj.psionic || spellObj.level !== 0) return;
					return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Wis");
				},
				"My cleric cantrips get my Wisdom modifier added to their damage."
			]
		}
	},
    "subclassfeature17" : {
		name: "Beacon of Aurielle",
		source: ["HB", 0],
		minlevel: 17,
		action: [["action", ""]],
		usages: 1,
		recovery: "long rest",
		description : "\n   " + "As an action, I present my holy symbol, and all allies within 30 feet of me regain hit points equal to 10 + my cleric level. Additionally, for the next minute, all allies within the area of effect have advantage on saving throws against being frightened or charmed. Once I use this feature, I can't use it again until I finish a long rest."
    }
  }
});

AddSubClass("cleric", "Theron's Justiciars", {
    regExpSearch: /^(?=.*theron's)(?=.*justiciars).*$/i,
    subname: "Theron's Justiciars",
    source: ["HB", 0],
    spellcastingExtra: ["command", "compelled duel", "aid", "enhance ability", "beacon of hope", "crusader's mantle", "guardian of faith", "freedom of movement", "hold monster", "flame strike"],
    features: {
        "subclassfeature1": {
            name: "Tenets of the Justicar",
            source: ["HB", 0],
            minlevel: 1,
            description : "\n   " + "I gain proficiency and expertise with Insight and Investigation skills. I also gain proficiency with heavy armor and martial weapons",
			armorProfs : [false, false, true, false],
			weaponProfs : [false, true],
			skills : [['Insight', 'full'], ['Investigation', 'full']]
			
        },
        "subclassfeature2": {
            name: "Channel Divinity: Righteous Strike",
            source: ["HB", 0],
            minlevel: 2,
            description : "\n   " + "As an action, I can make a melee weapon attack that deals extra radiant damage equal to my cleric level. If the target is a fiend or undead, add 1d12 damage.",
            action: ["action", ""]
        },
        "subclassfeature6": {
            name: "Channel Divinity: Aura of Justice",
            source: ["HB", 0],
            minlevel: 6,
			action : ["reaction", ""],
            description : "\n   " + "As a reaction, when someone within 20 ft of me is attacked, I and friendly creatures within 10 feet of me gain a bonus to damage rolls against the attacker. The bonus damage is equal to my proficiency bonus and lasts till the end of my next turn."
        },
        "subclassfeature8": {
            name: "Soul of Justice",
            source: ["HB", 0],
            minlevel: 8,
            description : "\n   " + "I am immune to being charmed, frightened, or paralyzed. Additionally, as a bonus action my proficiency bonus per long rest I can give a creature within 30ft of me advantage on saving throws against these conditions until the end of their turn.",
			action: ["bonus action", ""],
            usages: "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
            recovery: "long rest",
			savetxt : { immune : ["charmed", "frightened", "paralyzed"] }
        },
        "subclassfeature17": {
            name: "Eternal Justice",
            source: ["HB", 0],
            minlevel: 17,
            description : "\n   " + "I can cast the spell true resurrection without needing a material component. Once I use this feature, I can't use it again until I finish a long rest.",
            usages: 1,
            recovery: "long rest",
			spellcastingBonus : {
				name : "Eternal Justice true resurrection",
				spells : ["true resurrection"],
				selection : ["true resurrection"],
				firstCol : 'oncelr'
			},
			spellChanges : {
				"true resurrection" : {
					components : "V,S",
					compMaterial : "",
					changes : "I can cast this spell once per long rest without requiring material components."
				}
			}
		}
	}
});
// Galadriel's Wardens subclass
AddSubClass("cleric", "Galadriels Wardens", {
    regExpSearch: /^(?=.*galadriel)(?=.*wardens).*$/i,
    subname: "Galadriel's Wardens",
    source: ["HB", 0],
    spellcastingExtra: ["entangle", "goodberry","moonbeam","spike growth","plant growth","conjure animals","dominate beast","grasping vine", "commune with nature","Tree Stride"],
    features: {
        "subclassfeature1": {
            name: "Nature's Call",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Nature'], ['Survival',]],
            spellcastingBonus : [{
				name : "Nature's Call",
				spells : ["druidcraft"],
				selection : ["druidcraft"],
				firstCol : "atwill",
				spellcastingAbility : 5
			}, {
				name : "Nature's Call",
				spells : ["speak with animals"],
				selection : ["speak with animals"],
				firstCol : "markedbox",
				spellcastingAbility : 5
			}],
            description : "\n   " + "I gain proficiency in the Nature and Survival skills, and I can cast the druidcraft cantrip and the 1st-level spell Speak with Animals using Wisdom as my spellcasting ability."
        },
        "subclassfeature2": {
            name: "Channel Divinity: Nature's Fury",
            source: ["HB", 0],
            minlevel: 2,
            action: ["action", ""],
            description : "\n   " + "As an action, I summon the fury of nature in a 30-foot radius centered on myself. Creatures within the radius must make a Dexterity saving throw or take 1d12 damage of a type associated with the terrain, such as bludgeoning in a rocky area or cold damage in a snowy area. On a successful save, they take half damage. The damage increases to 2d12 at 8th level. "
		},
        "subclassfeature6": {
            name: "Nature's Resilience",
            source: ["HB", 0],
            minlevel: 6,
            description : "\n   " + "I gain resistance to one damage type associated with the terrain I am in. Additionally, I have advantage on saving throws against environmental hazards, such as difficult terrain, extreme weather, or natural hazards like avalanches or quicksand. Additionally, I have advantage on saves against exhaustion.",
			dmgres : ["environmental hazards"]
        },
        "subclassfeature8": {
            name: "Nature's Protector",
            source: ["HB", 0],
            minlevel: 8,
            action: ["action", ""],
            usages: 1,
            recovery: "short rest",
            description : "\n   " + "As an action, I can summon a spirit of nature to protect me or an ally. The spirit appears within 30 feet of me and lasts for 1 minute or until it is destroyed. The spirit takes the form of an animal appropriate to the terrain I am in and has the statistics of a CR 1 beast. While the spirit is present, me and my allies within 30 feet of it have advantage on saving throws against spells and effects."
        },
        "subclassfeature17": {
            name: "Nature's Avatar",
            source: ["HB", 0],
            minlevel: 17,
            action: ["action", ""],
            usages: 1,
            recovery: "long rest",
            description : "\n   " + "As an action, I can transform into a powerful avatar of nature. I gain resistance to all damage except for psychic damage, a flying speed of 60 feet and can hover, and can use my action to cast the stoneskin spell on myself without expending a spell slot or to cast the entangle spell without expending a spell slot. The transformation lasts for 1 minute.",
			spellcastingBonus : [{
				name : "Nature's Call",
				spells : ["entangle"],
				selection : ["entangle"],
				firstCol : "markedbox",
				spellcastingAbility : 5,
				changes : "While Nature's avatar is active, you can cast this spell without using a spellslot"
			}, {
				name : "Nature's Call",
				spells : ["stoneskin"],
				selection : ["stoneskin"],
				firstCol : "markedbox",
				spellcastingAbility : 5,
				changes : "While Nature's avatar is active, you can cast this spell without using a spellslot"
			}]
        }
    }
});

AddSubClass("cleric", "Erebus' Enforcers", {
	regExpSearch: /^(?=.*erebus)(?=.*enforcers).*$/i,
    subname: "Erebus' Enforcers",
    source: ["HB", 0],
    spellcastingExtra: ["command", "shield of faith", "hold person", "zone of truth", "magic circle", "protection from energy", "protection from energy", "stoneskin", "hold monster", "wall of force"],
    features: {
		"subclassfeature1": {
			name: "Bonus proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Intimidation'], ['Insight'],['Investigation']],
			armorProfs : [false, false, true, false],
			weaponProfs : [false, true],
		},
		"subclassfeature1.1": {
			name: "Duty-Bound",
            source: ["HB", 0],
            minlevel: 1,
			action : [["action", ""]],
			usagescalc : "event.value = Math.max(1, What('Str Mod'));",
			recovery : "long rest",
			savetxt : { adv_vs : ["charmed", "frightened"]},
			description : "\n   " + "I gain advantage on saving throws against being charmed or frightened. In addition, as an action I can give myself advantage on all Intelligence, Wisdom, and Charisma checks while interacting with law enforcement or other authorities."
		},
		"subclassfeature2": {
			name: "Channel Divinity: Erebus' Authority",
            source: ["HB", 0],
            minlevel: 2,
			action : [["action", ""]],
			description : "\n   " + "At 2nd level, you can use your Channel Divinity to exert yourauthority over others. As an action, you choose up to fourcreatures within 30 feet of you that can see and hear you. Ifyou choose a friendly creature they may roll 1d4 on hit anddamage rolls for 1 minute. Each creature must make a Wisdom saving throw. On a failed save, a creature is charmed by you for 1 minute or until it takes damage. While charmedin this way, a creature regards you as a trusted authorityfigure. You must maintain consentration on this ability."
		},
		"subclassfeature6": {
			name: "Erebus' Judgment",
            source: ["HB", 0],
            minlevel: 5,
			description : "\n   " + "you can use your bonus action to strike acreature with divine judgment. Make a melee spell attackagainst a creature within 5 feet of you. On a hit, the creature takes radiant damage equal to 2d8 + your Wisdom modifier.If the creature is an undead or a fiend, the damage increasesto 4d8 + your Wisdom modifier.",
			action : [["bonus action", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			weaponOptions : [{
				regExpSearch : /^(?=.*erebus')(?=.*judgment).*$/i,
				name : "Erebus' Judgment",
				source : [["HB", 0]],
				ability : 5,
				type : "Spell",
				damage : [2, 8, "Radiant"],
				range : "Melee (5 ft)",
				description : "Radiant damage",
				abilitytodamage : true,
				litdJudge : true
			}],
			weaponsAdd : ["Erebus' Judgment"],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.litdJudge && classes.known.cleric.level >= 5) {
							fields.Damage_Die = '2d8';
						};
					}
				]
			}
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["HB", 0]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra psychic damage",
			additional : levels.map(function (n) {
				return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 psychic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 psychic damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra psychic damage."
				]
			}
		},
		"subclassfeature17": {
			name: "Disciplined Presence",
            source: ["HB", 0],
            minlevel: 17,
			description : "\n   " + "At 17th level, you can instill discipline and order in thosearound you. As an action, you force all creatures within 30feet of you to make a Wisdom saving throw (DC 8 + yourproficiency bonus + your Wisdom modifier) or becomecharmed by you for 1 minute. While charmed in this way, thecreatures are under the effect of the suggestion spell, withyou as the caster. Once a creature succeeds on this savingthrow or is affected by this ability, it is immune to this effectfor 24 hours. Once this ability is used you cannot use it agianuntil you have completed a short or long rest.",
			action : [["action", ""]],
			recovery : "short rest"
		}
	}
});

AddSubClass("cleric", "Neith's Hunteresse/Hunters", {
	regExpSearch: /^(?=.*neith's)(?=.*Hunteresse|Hunters).*$/i,
    subname: "Neith's Hunteresse/Hunters",
    source: ["HB", 0],
    spellcastingExtra: ["hunter's mark", "longstrider", "spike growth", "zephyr Strike", "haste", "lightning arrow", "freedom of movement", "stoneskin", "swift quiver", "conjure volley"],
    features: {
		"subclassfeature1": { 
			name: "Bonus proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skillstxt : "I choose two from: Athletics, Nature, Perception, or Survival",
			weaponProfs : [false, true]
		},
		"subclassfeature1.1": { 
			name: "Divine Hunter",
            source: ["HB", 0],
            minlevel: 1,
			description : "\n   " + "As a bonus action, I can choose a creature within 60 feet of me that I can see. Until the end of my next turn, I gain advantage on attack rolls against that creature. For 1 hour or until the prey is dead, I know its distance and direction from me.",
			action : [["bonus action", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Maim Prey",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "As an action, I can make an attack. If I hit the creature, its speed is reduced to 0 until the end of its next turn.",
			action : [["action", ""]]
		},
		"subclassfeature6": { 
			name: "Channel Divinity: Hunter's Instincts",
			description : "\n   " + "At 6th level, I gain the ability to sense my prey's vulnerabilities. As a bonus action, I can choose one creature I can see within 60 feet of me and learn its damage vulnerabilities, resistances, and immunities. Additionally, I can use my Channel Divinity to gain advantage on attacks made against the chosen creature until the end of my next turn.",
			action : [["bonus action", ""]],
            source: ["HB", 0],
            minlevel: 6
		},
		"subclassfeature8": { 
			name: "Huntress's Vision",
			skills : [['Perception']],
			vision : [["Darkvision", 60]],
            source: ["HB", 0],
            minlevel: 8,
			description : "\n   " + "I gain darkvision out to a range of 60 feet, and I can see through magical darkness. Additionally, I gain advantage on Wisdom (Perception) checks relying on sight."
		},
		"subclassfeature17": {
			name: "Goddess of War's Might",
            source: ["HB", 0],
            minlevel: 17,
			description : "\n   " + "At 17th level, I gain the ability to channel the raw power of Neith's domain of war. As a bonus action, I can enter a state of heightened combat prowess for 1 minute. During this time, I gain the following benefits: My ranged weapon attacks deal an additional 2d10 radiant damage. I can use my bonus action to make an additional weapon attack after making a ranged attack.",
			action : [["bonus action", ""]],
			usages : 1,
			recovery : "long rest"
		}
	}
});


AddSubClass("cleric", "Sariel's Revenants ", {
	regExpSearch: /^(?=.*sariel's)(?=.*revenants).*$/i,
	subname: "Sariel's Revenants",
	source: ["HB", 0],
	spellcastingExtra: ["shield of faith", "hunter's mark", "zone of silence", "lightning arrow", "feast of the dead", "swift quiver", "confusion", "freedom of movement", "modify memory", "conjure volley"],
	features: {
		"subclassfeature1": {
			name: "Bonus proficiencies",
			source: ["HB", 0],
			minlevel: 1,
			weaponProfs: [false, true],
			armorProfs: [false, false, true, false],
			skills: [["Intimidation"]],
			skillstxt: "Choose one from: Deception, Deception"
		},
		"subclassfeature1.1": {
			name: "Grave Touch",
			source: ["HB", 0],
			minlevel: 1,
			action: [["bonus action", ""]],
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "long rest",
			description : "\n   " + "At 1st level, I can touch a corpse or an undead creature and sense how long it has been dead or undead, as well as any potential causes of death. I gain advantage on any checks made to identify the creature or its cause of death."
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Reaper's Harvest",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "Starting at level 2, you can use your Channel Divinity to instantly destroy an undead creature or a creature that has 0 hit points. CR 1/8 at level 2, CR 1/4 at level 5, CR 1/2 at level 8, CR 1 at level 11, CR 2 at level 14, CR 3 at level 17, CR 4 at level 20.",
			action : [["action", ""]]
		},
		"subclassfeature6": { 
			name: "Deathly Resilience",
            source: ["HB", 0],
            minlevel: 6,
			dmgres : ["Necrotic"],
			savetxt : {text : ["Advantage on saving throws against effects that cause exhaustion."]}
		},
		"subclassfeature8": { 
			name: "Life to Death",
            source: ["HB", 0],
            minlevel: 8,
			action : [["bonus action", ""]],
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "short rest",
			description : "\n   " + "At 8th level, you can use your bonus action to touch a living creature and force it to make a Constitution saving throw. On a failed save, the creature takes necrotic damage equal to your level, and it gains a level of exhaustion. On a successful save, the creature takes half damage and does not gain a level of exhaustion."
		},
		"subclassfeature17": {
			name: "Harbinger of Death",
            source: ["HB", 0],
            minlevel: 17,
			description : "\n   " + "Starting at 17th level, whenever you hit with a melee attack, the target takes an additional 1d8 necrotic damage. Whenever a creature within 30 feet of you dies, you regain hit points equal to your level."
		}
	}
});


AddSubClass("cleric", "Dominator of Malphas", {
	regExpSearch: /^(?=.*dominator)(?=.*of)(?=.*malphas).*$/i,
    subname: "Dominator of Malphas",
    source: ["HB", 0],
    spellcastingExtra: ["arms of hadar", "heroism", "blindness/deafness", "mind spike", "bestow curse", "hunger of hadar","black tentacles" , "banishment", "dominate person", "wall of force"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			weaponProfs : [false, true],
			armorProfs : [false, false, true, false],
			skills : [['Intimidation']],
			
		},
		"subclassfeature1.1": { 
			name: "Master of Intimidation",
            source: ["HB", 0],
            minlevel: 1,
			action : [["action", ""]],
			description : "\n   " + "Additionally, you can use your action to make an Intimidation check against a creature within 30 feet of you that can see and hear you. The creature must be able to understand you. If the creature can understand you, it must succeed on a Wisdom saving throw against Intimidation check as the DC, or become frightened of you until it takes any damage or until they succeed their saving throw at the end of their turn. A creature that succeeds on this saving throw is immune to your Master of Intimidation feature for the next 24 hours.",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Dominate Will",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "Starting at 2nd level, you can use your Channel Divinity to take control of an enemy's mind. As an action, choose one creature within 30 feet of you that you can see. The target must make a Wisdom saving throw against your cleric spell save DC. On a failed save, the creature is charmed by you for 1 minute or until it takes any damage or until they succeed their saving throw at the end of their turn. While charmed in this way, the target regards you as a friendly acquaintance.",
			action : [["action", ""]]
		},
		"subclassfeature6": { 
			name: "Aura of Domination",
            source: ["HB", 0],
            minlevel: 6,
			description : "\n   " + "Starting at 6th level, your divine power radiates an aura of domination. Any creature that starts their turn or enters a sphere within 15ft of you must make a Wisdom saving throw or become frightened until the end of their turn. The range of this aura increases to 20ft at level 10."
		},
		"subclassfeature8": { 
			name: "Dreadful Presence",
            source: ["HB", 0],
            minlevel: 8,
			description : "\n   " + "At 8th level, you gain advantage on melee attacks against frightened or charmed creatures. All hits against frightened or charmed creatures counts a a critical when it hits. "
		},
		"subclassfeature17": {
			name: "Master of Domination",
            source: ["HB", 0],
            minlevel: 17,
			action : [["action", ""]],
			description : "\n   " + "At 17th level, you gain mastery over the power of domination. You can use your action to force each creature charmed by you to take a single action of your choice on their turn. The creature must use its action to complete the action you choose, or use its action to make a melee attack against a creature other than itself that you designate. Once you use this feature, you can't use it again until you finish a long rest. Additionally, you can use your Channel Divinity: Dominate Will on one more creature.",
			usages : 1,
			recovery : "long rest"
		}
	}
});


AddSubClass("cleric", "Lillia's Succubui", {
	regExpSearch: /^(?=.*lillia's)(?=.*succubui).*$/i,
    subname: "Lillia's Succubui",
    source: ["HB", 0],
    spellcastingExtra: ["charm person", "disguise self", "enthrall" , "vampiric touch", "major image", "nondetection", "charm monster", "phantasmal killer", "modify memory", "mislead"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Deception '], ['Sleight of Hand']]
		},
		"subclassfeature1.1": { 
			name: "Dark Charisma",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Persuasion ']],
			scores : [0, 0, 0, 0, 1, 0],
			description : "\n   " + "when you make a Charisma (Persuasion) check, you can add your proficiency bonus to the roll twice instead of once, but only if you are attempting to persuade a creature to act in a way that would be beneficial or pleasurable to you."
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Allure",
            source: ["HB", 0],
            minlevel: 2,
			action : [["action", ""]],
			description : "\n   " + "As an action I can use your Channel Divinity to tempt a creature within 30 feet of me. The creature must make a Wisdom saving throw against your cleric spell save DC or be charmed by you for 1 minute. While charmed in this way, the creature regards you as a trusted ally to be heeded and protected and does not know it's been charmed. The effect ends if you or your allies attack the creature. You must maintain concentration on the charm."
		},
		"subclassfeature6": { 
			name: "Channel Divinity: Mask of Deception",
            source: ["HB", 0],
            minlevel: 6,
			action : [["action", ""]],
			description : "\n   " + "you can use your Channel Divinity to mask your true intentions and emotions. As an action, you can make a Charisma (Deception) check contested by a creature's Insight check. If you succeed, the creature is unable to discern your true intentions or emotions for 30 minute. The creature is immune to this effect for 24 hours. Add 1d4 to hit rolls against the chosen creature."
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source: ["HB", 0],
			minlevel : 8,
			description : "\n   " + "I add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && v.thisWeapon[3] && v.thisWeapon[4].indexOf('cleric') !== -1 && SpellsList[v.thisWeapon[3]].level === 0) {
							output.extraDmg += What('Wis Mod');
						};
					},
					"My cleric cantrips get my Wisdom modifier added to their damage."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spName.indexOf("cleric") == -1 || !What("Wis Mod") || Number(What("Wis Mod")) <= 0 || spellObj.psionic || spellObj.level !== 0) return;
						return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Wis");
					},
					"My cleric cantrips get my Wisdom modifier added to their damage."
				]
			}
		},
		"subclassfeature17": {
			name: "Lillia's Enchanting Nature",
            source: ["HB", 0],
            minlevel: 17,
			description : "\n   " + "When you cast an enchantment spell that targets only one creature, you can choose a second creature within 30 feet of the first target and affect it with the same spell. Both targets must be within your line of sight. If the spell requires concentration, you must concentrate on it for the spell to affect the second target."
		}
	}
});


AddSubClass("cleric", "Belphegor's Corruptors", {
	regExpSearch: /^(?=.*belphegor's)(?=.*corruptors).*$/i,
    subname: "Belphegor's Corruptors",
    source: ["HB", 0],
    spellcastingExtra: ["arms of hadar", "ray of sickness", "ray of enfeeblement", "blindness/deafness", "counterspell", "vampiric touch", "blight", "phantasmal killer", "enervation", "negative energy flood"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			toolProfs : [["Any tool", 1]],
			armorProfs : [false, false, true, false]
		},
		"subclassfeature1.1": { 
			name: "Decaying Touch",
            source: ["HB", 0],
            minlevel: 1,
			action : [["bonus action", ""]],
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			description : "\n   " + "you can use your bonus action to touch a creature and drain its vitality. The creature must make a Constitution saving throw against your spell save DC, taking 1d8 necrotic damage on a failed save, or half as much damage on a successful one"
			
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Decay",
            source: ["HB", 0],
            minlevel: 2,
			action : [["action", ""]],
			description : "\n   " + "As an action, you unleash a wave of necrotic energy in a 30-foot radius around you. Each creature in that area must make a Constitution saving throw against your spell save DC, taking 2d8 necrotic damage on a failed save, or half as much damage on a successful one. The Damage increases to 3d8 at level 10.",
			additional : levels.map( function(n) { return n < 10 ? "2" : "3" + " necrotic damage"; })
		},
		"subclassfeature6": { 
			name: "Belphegor's Apathy",
            source: ["HB", 0],
            minlevel: 6,
			action : [["bonus action", ""]],
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			description : "\n   " + "you can choose one creature within 30 feet of you that you can see. The creature must make a Wisdom saving throw against your spell save DC. On a failed save, the creature becomes lethargic and moves at half speed until the end of its next turn. Additionally, the creature has disadvantage on attack rolls and ability checks until the end of its next turn."
		},
		"subclassfeature8": { 
			name: "Decaying Aura",
            source: ["HB", 0],
            minlevel: 8,
			description : "\n   " + "Any enemy creature that starts it's turn within 5ft gets his movement reduced to half."
		},
		"subclassfeature17": {
			name: "Vampiric Embrace",
            source: ["HB", 0],
            minlevel: 17,
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			description : "\n   " + "As an action, you can target one creature within 30 feet of you that you can see. The creature must make a Constitution saving throw against your spell save DC, taking 6d8 necrotic damage on a failed save, or half as much damage on a successful one. You regain hit points equal to half the damage dealt by this feature." 
		}
	}
});

AddSubClass("cleric", "Eryndor's Sages", {
	regExpSearch: /^(?=.*eryndor's)(?=.*sages).*$/i,
    subname: "Eryndor's Sages",
    source: ["HB", 0],
    spellcastingExtra: ["comprehend languages", "identify", "arcane lock", "zone of truth", "tongues", "clairvoyance", "arcane eye", "confusion", "legend lore", "scrying"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skillstxt: "Choose three from:  Arcana, History, Investigation, Nature, Medicine, or Religion."
		},
		"subclassfeature1.1": { 
			name: "Eryndor's Lore",
            source: ["HB", 0],
            minlevel: 1,
			description : "\n   " + "Whenever you make an Intelligence (History) or Intelligence (Nature) check, you can add your Wisdom modifier to the check. You must choose to do so before the roll.",
			usagescalc: "event.value = Math.max(1, What('Int Mod'));",
			recovery: "long rest"
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Read Thoughts",
            source: ["HB", 0],
			description : "\n   " + "you can use your Channel Divinity to read the surface-level thoughts of a creature within 30 feet of you. The target must make a Wisdom saving throw, and on a failed save, you can gain insight into its emotional state, immediate intentions, and active thoughts. The target is aware that you are reading its thoughts, and you cannot read deeper or hidden thoughts.",
			action : [["action", ""]],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Aura of Insight",
            source: ["HB", 0],
            minlevel: 6,
			description : "\n   " + "you and friendly creatures within 10 feet of you gain advantage on Intelligence (Investigation) and Wisdom (Insight) checks."
		},
		"subclassfeature6.1": { 
			name: "Channel Divinity: Insightful Vision",
            source: ["HB", 0],
            minlevel: 6,
			description : "\n   " + "you can use your Channel Divinity to gain insight into the true nature of a creature or object. As an action, you can choose one creature or object that you can see within 60 feet of you. You learn the creature's or object's type, any damage immunities, resistances, or vulnerabilities it has, and its current hit points, if any. If the creature or object is hidden from divination magic, you are unable to learn anything about it with this ability.",
			action : [["action", ""]]
		},
		"subclassfeature8" : {
		name : "Potent Spellcasting",
		source: ["HB", 0],
		minlevel : 8,
		description : "\n   " + "I add my Wisdom modifier to the damage I deal with my cleric cantrips",
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (classes.known.cleric && classes.known.cleric.level > 7 && v.thisWeapon[3] && v.thisWeapon[4].indexOf('cleric') !== -1 && SpellsList[v.thisWeapon[3]].level === 0) {
						output.extraDmg += What('Wis Mod');
					};
				},
				"My cleric cantrips get my Wisdom modifier added to their damage."
			],
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (spName.indexOf("cleric") == -1 || !What("Wis Mod") || Number(What("Wis Mod")) <= 0 || spellObj.psionic || spellObj.level !== 0) return;
					return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Wis");
				},
				"My cleric cantrips get my Wisdom modifier added to their damage."
			]
		}
	},
		"subclassfeature17": {
			name: "Wisdom of the Ages",
            source: ["HB", 0],
            minlevel: 17,
			description : "\n   " + "At 17th level, you gain the ability to channel the wisdom of the ages to enhance your spells. You can roll a d4 and add the result to your spell attack hit rolls."
		}
	}
});

AddSubClass("cleric", "Amorous's of Morwyn", {
	regExpSearch: /^(?=.*amorous's)(?=.*of)(?=.*morwyn).*$/i,
    subname: "Amorous's of Morwyn",
    source: ["HB", 0],
    spellcastingExtra: ["charm person", "compelled duel", "suggestion", "crusader's mantle", "charm monster", "daylight", "compulsion", "dominate beast", "greater restoration", "maelstrom"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skillstxt: "Gain expertise in one: Insight, or Deception."
		},
		"subclassfeature1.1": { 
			name: "Blessing of Love",
            source: ["HB", 0],
            minlevel: 1,
			action : [["action", ""]],
			description : "\n   " + "Morwyn's Devotees can bless a willing creature within 5 feet, granting them advantage on all Charisma checks related to romance or love for the next hour, or until you use the ability on a different creature."
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Lover's Protection",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "Starting at 2nd level, you can use your Channel Divinity to protect one creature as an action, granting them resistance to all damage dealt by creatures that they are attracted to. Additionally, anyone attacking this creature must roll with disadvantage.",
			action : [["action", ""]],
			
		},
		"subclassfeature6": { 
			name: "Healing Embrace",
            source: ["HB", 0],
            minlevel: 6,
			action : [["action", ""]],
			description : "\n   " + "You can choose a willing creature within 5 feet and embrace them, transferring your own vitality to them. The target regains hit points equal to your cleric level + your Wisdom modifier."
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["HB", 0]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra radiant damage",
			additional : levels.map(function (n) {
				return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 radiant damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 cold/fire/lightning damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra radiant damage."
				]
			}
		},
		"subclassfeature17": {
			name: "Ever-Loving Touch",
            source: ["HB", 0],
            minlevel: 17,
			usages : 1,
			recovery : "short rest",
			description : "\n   " + "you can choose to also remove one of the following conditions: frightened, charmed, or stunned. Once used you need to complete a short or long rest to use this ability again. Additionally, creatures you heal with spells regain maximum hit points from any dice rolled for that spell."
		}
	}
});

AddSubClass("cleric", "Arcturan Diviner", {
	regExpSearch: /^(?=.*arcturan)(?=.*diviner).*$/i,
    subname: "Arcturan Diviner",
    source: ["HB", 0],
    spellcastingExtra: ["identify", "magic missile", "moonbeam", "scorching ray", "clairvoyance", "dispel magic", "arcane eye", "banishment", "geas", "modify memory"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Arcana'], ['Investigation']]
		},
		"subclassfeature1.1": { 
			name: "Star Chart",
            source: ["HB", 0],
            minlevel: 1,
			description : "\n   " + "you can create a magical star chart during a long rest that reveals the current alignment of the stars and constellations. This chart provides you with a +2 bonus to Intelligence (Arcana) checks to interpret celestial phenomena or events related to fate or prophecy."
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Cosmic Intervention",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "you can use your Channel Divinity to call upon Arcturus for aid in altering fate. After dealing damage, you can spend Channel Divinity to maximize the damage on up to three dice."
		},
		"subclassfeature6": { 
			name: "Starsight",
            source: ["HB", 0],
            minlevel: 6,
			vision : [["Truesight", 120]],
			description : "\n   " + "You have truesight with a range of 120 feet."
		},
		"subclassfeature8": { 
			name: "Fate's Intervention",
            source: ["HB", 0],
            minlevel: 8,
			action : [["reaction", ""]],
			description : "\n   " + "you can use your reaction to cause an attack, ability check, or saving throw made against you or an ally within 30 feet of you to automatically fail. You can use this feature after the roll is made but before the outcome is determined.",
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature17": {
			name: "Fated Strike",
            source: ["HB", 0],
            minlevel: 17,
			usages : 1,
			recovery : "long rest",
			description : "\n   " + "hit a creature with a melee weapon attack, they can choose to deal an additional 8d8 radiant damage. The damage increases to 10d8 at 20th level."
		}
	}
});

AddSubClass("cleric", "Ananke's Inevitables", {
	regExpSearch: /^(?=.*ananke's)(?=.*inevitables).*$/i,
    subname: "Ananke's Inevitables",
    source: ["HB", 0],
    spellcastingExtra: ["detect evil and good", "shield", "enhance ability", "zone of truth", "counterspell", "revivify", "death ward", "guardian of faith", "contact other plane", "passwall"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Insight'], ['Persuasion ']],
			weaponProfs : [false, true]
		},
		"subclassfeature1.1": { 
			name: "Ananke's Cantrips",
            source: ["HB", 0],
            minlevel: 1,
			spellcastingBonus : [{
				name : "Ananke's Cantrips",
				spells : ["booming blade"],
				selection : ["booming blade"],
				firstCol : "atwill",
				spellcastingAbility : 5
			}, {
				name : "Ananke's Cantrips",
				spells : ["eldritch blast"],
				selection : ["eldritch blast"],
				firstCol : "atwill",
				spellcastingAbility : 5
			}],
		},
		"subclassfeature2": { 
			name: "Channel Divinity; Tortoise Shell",
			action : [["reaction", ""]],
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "As a reaction Before an attack roll is made against a creature in 15ft, they may add 2 to their AC."
		},
		"subclassfeature6": { 
			name: "Balance World",
            source: ["HB", 0],
            minlevel: 6,
			description : "\n   " + "When a hostile creature's movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature. Creatures provoke opportunity attacks from you even if they take the Disengage action before leaving your reach."
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source: ["HB", 0],
			minlevel : 8,
			description : "\n   " + "I add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && v.thisWeapon[3] && v.thisWeapon[4].indexOf('cleric') !== -1 && SpellsList[v.thisWeapon[3]].level === 0) {
						output.extraDmg += What('Wis Mod');
					};
				},
				"My cleric cantrips get my Wisdom modifier added to their damage."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spName.indexOf("cleric") == -1 || !What("Wis Mod") || Number(What("Wis Mod")) <= 0 || spellObj.psionic || spellObj.level !== 0) return;
						return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Wis");
					},
				"My cleric cantrips get my Wisdom modifier added to their damage."
			]
		}
	},
		"subclassfeature17": { 
			name: "Balanced damage",
            source: ["HB", 0],
            minlevel: 17,
			action : [["action", ""]],
			usages : 1,
			recovery : "short rest",
			description : "\n   " + "When that creature takes fire damage it takes the same in cold damage. When that creature takes radiant damage it takes the same in necrotic damage. And vice versa. This effect lasts until the end of your next turn."
		},
	}
});

AddSubClass("cleric", "Gaia's Harvesters", {
	regExpSearch: /^(?=.*gaia's)(?=.*harvesters).*$/i,
    subname: "Gaia's Harvesters",
    source: ["HB", 0],
    spellcastingExtra: ["entangle", "speak with animals", "barkskin", "spike growth", "plant growth", "protection from energy", "grasping vine", "stoneskin", "insect plague", "wrath of nature"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Nature'], ['Survival'],['Animal Handling']]
		},
		"subclassfeature1.1": { 
			name: "Harvest Blessing",
            source: ["HB", 0],
            minlevel: 1,
			spellcastingBonus : [{
				name : "Harvest Blessing",
				spells : ["druidcraft"],
				selection : ["druidcraft"],
				firstCol : "atwill",
				spellcastingAbility : 5
			}],
			description : "\n   " + "you can use your Channel Divinity to bless the harvest of a field, causing plants to grow more quickly and produce a bountiful harvest. You can use this ability once per long rest, and its effects last for 24 hours.",
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Nature's Wrath",
            source: ["HB", 0],
            minlevel: 2,
			action : [["action", ""]],
			description : "\n   " + "Each creature of your choice within 30 feet of you that can hear you must make a Dexterity saving throw. A creature takes 2d8 force damage on a failed save, or half as much damage on a successful one. The damage increases to 3d8 at 5th level, 4d8 at 9th level, and 5d8 at 13th level."
		},
		"subclassfeature6": { 
			name: "Nature's Ward",
            source: ["HB", 0],
            minlevel: 6,
			description : "\n   " + "You and your allies within 30 feet of you have resistance to cold and fire damage.",
			dmgres : ["Fire","Cold"]
		},
		"subclassfeature8" : {
			name : "Nurturing Aura",
			source: ["HB", 0],
			minlevel : 8,
			description : "\n   " + "You and all friendly creatures within 15 feet of you gain temporary hit points equal to your Wisdom modifier (minimum of 1) at the start of each of your turns. The aura lasts for 1 minute.",
			action : [["action", ""]],
			usages : 1,
			rcovery : "short rest"
		},
		"subclassfeature17": {
			name: "Nature's Sanctuary",
            source: ["HB", 0],
            minlevel: 17,
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			description : "\n   " + "you can use your action to create an aura of nature that lasts for 1 minute. The aura has a radius of 30 feet, and you and your allies have advantage on saving throws against spells and other magical effects."
		},
		"subclassfeature17.1": {
			name: "Nature's Sanctuary part 2",
            source: ["HB", 0],
            minlevel: 17,
			action : [["reaction", ""]],
			usages : 1,
			recovery : "long rest",
			description : "\n   " + "you can use your reaction to heal that creature for 2d6 + your Wisdom modifier"
		}
	}
});

AddSubClass("cleric", "Ophion's Architect", {
	regExpSearch: /^(?=.*ophion's)(?=.*architect).*$/i,
    subname: "Ophion's Architect",
    source: ["HB", 0],
    spellcastingExtra: ["thunderwave", "chaos bolt", "shatter", "branding smite", "call lightning", "fireball", "blight", "wall of fire", "destructive wave", "synaptic static"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Intimidation']],
			skillstxt: "Gain expertise in either: Arcana , or Nature.",
			weaponProfs : [false, true],
			armorProfs : [false, false, true, false]
		},
		"subclassfeature1.1": { 
			name: "Constructive Insight",
            source: ["HB", 0],
            minlevel: 1,
			action : [["bonus action", ""]],
			description : "\n   " + "you can use your bonus action to make an Intelligence (History) check to gain insight into a construct or mechanical device. The DM will provide information such as the device's function, weaknesses, or how to operate/disable it effectively."
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Disrupt Creation",
            source: ["HB", 0],
            minlevel: 2,
			action : [["action", ""]],
			description : "\n   " + "you can use your Channel Divinity to disrupt the creation of an object or structure. You can choose a non-magical object or structure within 30 feet of you and make a Wisdom check. The DC is left up to the DM. On a success, the object or structure is destroyed, and on a failure, it remains intact."
		},
		"subclassfeature2.1": { 
			name: "Channel Divinity: Creation's Renewal",
            source: ["HB", 0],
            minlevel: 2,
			action : [["action", ""]],
			description : "\n   " + "you can use your Channel Divinity to repair and restore objects or structures. You can choose a non-magical object or structure within 30 feet of you that has been damaged or destroyed, and make a Wisdom check the DM determines the effect, how well or if the object or structure is repaired or restored to its original condition."
		},
		"subclassfeature6": { 
			name: "Channel Divinity: Shatter Reality",
            source: ["HB", 0],
            minlevel: 6,
			action : [["action", ""]],
			description : "\n   " + "you can use your Channel Divinity to shatter reality itself. As an action, you can choose a point within 60 feet of you. All creatures within a 20-foot radius of that point must make a Wisdom saving throw. On a failed save, a creature takes 3d10 psychic damage and is stunned until the end of their turn. On a successful save, a creature takes half as much damage and is not stunned."
		},
		"subclassfeature6.1": { 
			name: "Nihilistic Resistance",
            source: ["HB", 0],
            minlevel: 6,
			action : [["reaction", ""]],
			description : "\n   " + "when you take damage from an attack or a spell, you can use your reaction to reduce that damage by an amount equal to your Wisdom modifier (minimum of 1)."
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["HB", 0]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra thunder damage",
			additional : levels.map(function (n) {
				return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 thunder damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 thunder damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra thunder damage."
				]
			}
		},
		"subclassfeature17": {
			name: "Cataclysmic Blast",
            source: ["HB", 0],
            minlevel: 17,
			action : [["action", ""]],
			description : "\n   " + "As an action, you can choose a point within 120 feet of you. All creatures within a 30-foot radius of that point must make a Constitution saving throw. On a failed save, a creature takes 10d10 force damage and 10d10 necrotic damage. On a successful save, a creature takes half as much damage. "
		}
	}
});

AddSubClass("cleric", "Mara's Tormentors", {
	regExpSearch: /^(?=.*mara's)(?=.*tormentors).*$/i,
    subname: "Mara's Tormentors",
    source: ["HB", 0],
    spellcastingExtra: ["false life", "cause fear", "crown of madness", "silence", "slow", "bestow curse", "phantasmal killer", "sickening radiance", "enervation", "soul cage"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Intimidation'], ['Deception']],
			weaponProfs : [false, false, ["Mara's Whip"]],
			weaponsAdd : ["Mara's Whip"],
			weaponOptions : [{
					name : "Mara's Whip",
					regExpSearch : /^(?!.*mara's)(?=.*whip).*$/i,
					source : ["HB", 0],
					ability : 5,
					type : "Simple",
					damage : [1, 6, "psychic"],
					range : "Melee (15 ft)",
					description : "Finesse, reach",
					abilitytodamage : true
				}],
		},
		"subclassfeature1.1": { 
			name: "Shackles of Despair",
            source: ["HB", 0],
            minlevel: 1,
			description : "\n   " + "A creature you had attacked must make a Strength saving throw or be restrained by the whip until the start of your next turn. While restrained, the creature is afflicted with the Tormented condition. A tormented creature has disadvantage on attack rolls, ability checks, and saving throws, and can't regain hit points except through magical means.",
			action : [["bonus action", ""]]
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Torment",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "As an action, you can choose one creature within 30 feet of you that you can see. The creature must make a Wisdom saving throw or take psychic damage equal to your cleric level + your Wisdom modifier, and be afflicted with the Tormented condition for 1 minute or until it succeeds in the saving throw at the end of their turn.",
			action : [["action", ""]]
		},
		"subclassfeature6": { 
			name: "Aura of Despair",
            source: ["HB", 0],
            minlevel: 6,
			description : "\n   " + "Any enemy within 10 ft of you has disadvantage on saving throws against your spells and Channel Divinity.",
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["HB", 0]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra psychic damage",
			additional : levels.map(function (n) {
				return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 psychic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 psychic damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra psychic damage."
				]
			}
		},
		"subclassfeature17": {
			name: "Suffering Transference",
            source: ["HB", 0],
            minlevel: 17,
			description : "\n   " + "As a reaction when you or an ally within 30 feet of you takes damage, you can transfer the suffering to a creature within 60 feet of you. The target takes the same amount of damage as the original target, and they must make a Constitution saving throw. On a failed save, they are stunned until the start of your next turn.",
			action : [["reaction", ""]]
		}
	}
});


AddSubClass("cleric", "Balor's Destoryers", {
	regExpSearch: /^(?=.*balor's)(?=.*destoryers).*$/i,
    subname: "Balor's Destoryers",
    source: ["HB", 0],
    spellcastingExtra: ["wrathful smite", "cause fear", "branding smite", "enlarge/reduce", "thunder step", "crusader's mantle", "banishment", "fire shield", "steel wind strike", "destructive wave"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Intimidation'],['Athletics']],
			weaponProfs : [false, true],
			armorProfs : [false, false, true, false]
		},
		"subclassfeature1.1": { 
			name: "Fiery Presence",
            source: ["HB", 0],
            minlevel: 1,
			description : "\n   " + "As a bonus action, you can invoke the fiery presence of Balor, causing flames to flicker around you. Until the end of your turn, any enemy creature within 10 feet of you that makes an attack roll against you takes 1d4 fire damage. The damage increases to 2d4 by level 8 and 3d4 at level 14 and 4d4 at level 20.",
			action : [["bonus action", ""]]
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Fury of Balor",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "Starting at 2nd level, you can use your Channel Divinity to invoke the fury of Balor, giving yourself a burst of strength in battle. As a bonus action, you gain advantage on all melee weapon attack rolls you make until the end of your turn.",
			action : [["bonus action", ""]]
		},
		"subclassfeature2.1": { 
			name: "Channel Divinity: Demonic Fury",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "At 2nd level, you can use your bonus action to enter a state of demonic fury. Until the end of your next turn, your melee weapon attacks deal an extra 2d8 necrotic damage and your movement speed increases by 15ft. However, you must attack the closest enemy creature.",
			action : [["bonus action", ""]]
		},
		"subclassfeature6": { 
			name: "Indomitable Might",
            source: ["HB", 0],
            minlevel: 6,
			description : "\n   " + "At 6th level, your strength becomes legendary. If your total for a Strength check is less than your Strength score, you can use that score in place of the total. Additionally, as a reaction when you're damaged, you can subtract your constitution modifier from the damage.",
			action : [["reaction", ""]]
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["HB", 0]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra necrotic damage",
			additional : levels.map(function (n) {
				return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 necrotic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 necrotic damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra necrotic."
				]
			}
		},
		"subclassfeature17": {
			name: "Blades of Fury",
            source: ["HB", 0],
            minlevel: 17,
			description : "\n   " + "You can summon forth deadly blades of energy to strike down your foes. As an action, you can create up to three spectral swords that float around you for 1 minute. While the swords are active, your melee weapon attacks deal an extra 1d8 force damage, and you can use a bonus action on each of your turns to make a melee spell attack with one of the swords, dealing 2d8 force damage on a hit. Additionally, when you hit a creature with a melee weapon attack, you can expend one of the spectral swords to deal an extra 3d8 force damage to the target.",
			action : [["action", ""],["bonus action", ""]],
			
		}
	}
});

AddSubClass("cleric", "Mephistopheles's Tempters", {
	regExpSearch: /^(?=.*mephistopheles's)(?=.*tempters).*$/i,
    subname: "Mephistopheles's Tempters",
    source: ["HB", 0],
    spellcastingExtra: ["unseen servant", "disguise self", "suggestion", "invisibility", "fear", "major image", "charm monster", "hallucinatory terrain", "dominate person", "modify memory"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Deception '],['Sleight of Hand']],
			weaponProfs : [false, true],
			armorProfs : [false, false, true, false],
			spellcastingBonus : [{
				name : "Harvest Blessing",
				spells : ["friends"],
				selection : ["friends"],
				firstCol : "atwill",
				spellcastingAbility : 5
			}]
		},
		"subclassfeature1.1": { 
			name: "Tempting Offer",
            source: ["HB", 0],
            minlevel: 1,
			description : "\n   " + "you can use your action to offer a tempting deal to a creature within 30 feet of you. The creature must make a Wisdom saving throw against your spell save DC. On a failed save, the creature is charmed by you for 1 minute and willing to listen to your proposition. If the creature agrees to your proposition, it gains some benefit, but also suffers some consequence. However, if the creature refuses your proposition, it becomes immune to this feature for the next 24 hours and you take 1d12 psychic damage.",
			action : [["action", ""]]
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Hellish Pact",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "you can use your Channel Divinity to make a deal with Mephistopheles himself for you or another creature, granting you or a creature within 5ft additional power for a limited time. As an action, you can make a pact with Mephistopheles to gain temporary hit points equal to your cleric level + your Wisdom modifier and gains advantage on weapon attack rolls until the end of their next turn.",
			action : [["action", ""]]
		},
		"subclassfeature6": { 
			name: "Diabolic Presence",
            source: ["HB", 0],
            minlevel: 6,
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			description : "\n   " + "you can use your action to create an aura of diabolic presence that extends 30 feet from you. For 1 minute, creatures of your choice within the aura have disadvantage on Wisdom (Insight) checks made to detect lies or resist your deception"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["HB", 0]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra poison damage",
			additional : levels.map(function (n) {
				return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 poison damage ";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 poison damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra poison damage."
				]
			}
		},
		"subclassfeature17": {
			name: "Infernal Manipulation",
            source: ["HB", 0],
            minlevel: 17,
			spellcastingBonus : [{
				name : "Harvest Blessing",
				spells : ["modify memory"],
				selection : ["modify memory"],
				firstCol : "2",
				spellcastingAbility : 5
			}],
			spellChanges : {
				"modify memory" : {
					changes : "I can choose up to four creatures. At your choosing the creatures can take 5d10 psychic damage"
				}
			}
		}
	}
});

AddSubClass("cleric", "Lirien's Liberators", {
	regExpSearch: /^(?=.*lirien's)(?=.*liberators).*$/i,
    subname: "Lirien's Liberators",
    source: ["HB", 0],
    spellcastingExtra: ["heroism", "bless", "lesser restoration", "calm emotions", "haste", "protection from energy", "freedom of movement", "greater restoration", "mass cure wounds"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Performance'],['Persuasion']],
		},
		"subclassfeature1.1": { 
			name: "Joyous Touch",
            source: ["HB", 0],
            minlevel: 1,
			description : "\n   " + "When you choose this domain at 1st level, whenever you touch a creature as an action you improve their mood slightly and they gain your cleric level in temporary hitpoints.",
			action : [["action", ""]]
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Liberating Strike",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "Starting at 2nd level, you can use your Channel Divinity to strike a creature that is restrained, paralyzed, or otherwise immobilized, freeing them from their bindings. As an action, you can make a melee weapon attack against the restrains of a restrained creature. On a hit, the creature is freed from its restraints and can move freely. This feature can also be used to free yourself from restraints.",
			action : [["action", ""]]
		},
		"subclassfeature6": { 
			name: "Aura of Joy",
            source: ["HB", 0],
            minlevel: 6,
			description : "\n   " + "You emit an aura of joy that fills the space around you. Creatures of your choice within 10 feet of you have advantage on saving throws against being frightened and gain temporary hit points equal to your proficency bonus at the start of each of their turns. Any creature that starts their turn within the aura, gains 10ft of movement. Additionally, your presence lifts the spirits of those around you, causing them to hgain 1d4 extra on Charisma (Persuasion) checks while within your aura."
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["HB", 0]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra psychic damage",
			additional : levels.map(function (n) {
				return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 psychic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 psychic damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra psychic damage."
				]
			}
		},
		"subclassfeature17": {
			name: "Unchained Soul",
            source: ["HB", 0],
            minlevel: 17,
			description : "\n   " + "Starting at 17th level, you can use your bonus action to remove one condition afflicting a creature within 60 feet of you. The condition can be blinded, charmed, deafened, frightened, paralyzed, poisoned, or stunned. Additionally, you can use your action to free a creature from any non-magical restraints binding them, no matter how sturdy or well-made they are.",
			action : [["bonus action", "remove condition"],["action", "break restrains"]]
		}
	}
});

AddSubClass("cleric", "Nefarious's Catalysts", {
	regExpSearch: /^(?=.*nefarious's)(?=.*catalysts).*$/i,
    subname: "Nefarious's Catalysts",
    source: ["HB", 0],
    spellcastingExtra: ["chaos bolt", "dissonant whispers", "blindness/deafness", "misty step", "thunder step", "hypnotic pattern", "storm sphere", "confusion", "synaptic static", "insect plague"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Deception'],['Stealth']]
		},
		"subclassfeature1.1": { 
			name: "Chaotic Blessing",
            source: ["HB", 0],
            minlevel: 1,
			description : "\n   " + "you gain the ability to bless yourself or a willing creature with chaotic energy. Once per short rest, you can grant yourself or a creature within 30 feet of you advantage on an attack roll, ability check, or saving throw. However, once the effect ends, the creature must immediately make a Wisdom saving throw (DC equal to your spell save DC) or suffer a bout of uncontrollable chaos, taking 1d4 psychic damage and becoming stunned until the start of their next round.",
			action : [["action", ""]],
			usages : 1,
			recovery : "short rest",
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Chaos Bolt",
            source: ["HB", 0],
            minlevel: 2,
			weaponOptions : [{
				regExpSearch : /^(?=.*chaos)(?=.*bolt).*$/i,
				name : "Channel Divinity: Chaos Bolt",
				source : [["HB", 0]],
				ability : 5,
				type : "Spell",
				damage : [2, 10, "psychic"],
				range : "60 ft",
				description : "2d10 psychic damage, you can choose to either deal an additional 1d10 psychic damage or roll on the Wild Magic Surge table",
				abilitytodamage : false,
				litdChaosWpn : true
			}],
			weaponsAdd : ["Channel Divinity: Chaos Bolt"],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.litdChaosWpn && classes.known.cleric.level >= 2) {
							fields.Damage_Die = '2d10';
						};
					}
				]
			}
		},
		"subclassfeature6": { 
			name: "Chaotic Ward",
            source: ["HB", 0],
            minlevel: 6,
			action : [["reaction", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "short rest",
			description : "\n   " + "When you or a creature within 30 feet of you is about to get hit by a spell attack, you can use your reaction to force the attacker to reroll the attack roll."
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["HB", 0]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra psychic damage",
			additional : levels.map(function (n) {
				return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 psychic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 psychic damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra psychic damage."
				]
			}
		},
		"subclassfeature17": {
			name: "Change of Fate",
            source: ["HB", 0],
            minlevel: 17,
			description : "\n   " + "you can reroll any one attack roll, ability check, or saving throw that you or a creature within 30 feet of you makes. Additionally, if the roll is still a failure, you can choose to treat it as a success instead. However, once you use this feature, you must immediately roll on the Wild Magic Surge table.",
			usages : 1,
			recovery : "short rest"
		}
	}
});

AddSubClass("cleric", "Zephyrus's Galewardens", {
	regExpSearch: /^(?=.*zephyrus's)(?=.*galewardens).*$/i,
    subname: "Zephyrus's Galewardens",
    source: ["HB", 0],
    spellcastingExtra: ["feather fall", "zephyr strike", "misty step", "spider climb", "wind wall", "fly", "freedom of movement", "control water", "destructive wave", "control winds"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Survival']],
			skillstxt: "Choose one from: Athletics, Acrobatics, or Sleight of Hand.",
			weaponProfs : [false, false, ["rapier", "scimitar", "shortsword", "whip"]]
		},
		"subclassfeature1.1": { 
			name : "Winded Defense",
			source : [["HB", 0]],
			minlevel : 1,
			description : "\n   " + "Without armor and no shield, my AC is 10 + Dexterity modifier + Wisdom modifier",
			armorOptions : [{
				regExpSearch : /^(?=.*winded)(?=.*defense).*$/i,
				name : "Winded Defense",
				source : [["HB", 0]],
				ac : "10+Wis",
				affectsWildShape : true
			}],
			armorAdd : "Winded Defense)"
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Tailwind",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "you can use your Channel Divinity to call upon Zephyrus for a burst of speed. When you or an ally you can see within 30 feet of you makes a melee attack, the attack deals 1d8 additional force damage. you can use your Channel Divinity to grant them an additional 20 feet of movement after that attack. This movement does not provoke opportunity attacks. The damage increases to 2d8 at level 14",
			action : [["reaction", ""]]
		},
		"subclassfeature6": { 
			name: "Wind Shield",
            source: ["HB", 0],
            minlevel: 6,
			action : [["reaction", ""]],
			usagescalc: "event.value = Math.max(1, What('Int Mod'));",
			recovery: "long rest",
			description : "\n   " + "you can use your reaction to deflect a ranged weapon attack that would hit you or a creature within 5 feet of you. You must be wielding a melee weapon in one hand and have no other weapons or shields in your other hand. You take no damage from the attack, and the attack misses its intended target and/or strikes a creature of your choosing within 30 feet of the attacker instead."
		},
		"subclassfeature8": { 
			name: "Gust of Wind",
            source: ["HB", 0],
            minlevel: 8,
			spellcastingBonus : [{
				name : "Gust of Wind",
				spells : ["gust of wind"],
				selection : ["gust of wind"],
				firstCol : "oncesr",
				spellcastingAbility : 5,
				changes : "When the Gust appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 force damage, or half as much damage on a successful save. Creatures that fail their saving throws against your gust of wind are knocked prone. A creature takes the same damage when it enters the gust for the first time on a turn or ends its turn there."
			}],
		},
		"subclassfeature17": {
			name: "Stormwalker",
            source: ["HB", 0],
            minlevel: 17,
			dmgres : ["Lightning ", "Thunder"],
			description : "\n   " + "when you move, you leave behind a trail of swirling wind that lasts till the start of your next turn. The trail is 5 feet wide and provides difficult terrain for enemies. Any enemy creature that enters the trail for the first time in a round must make a Dexterity saving throw. Creatures that fail their saving throws against your trail of wind are knocked prone. Allies that move along or enter the trail gain a +10 feet bonus to their movement speed, the trail cancels out any difficult terrain."
		}
	}
});

AddSubClass("cleric", "Azazel's Insurgents", {
	regExpSearch: /^(?=.*azazel's)(?=.*insurgents).*$/i,
    subname: "Azazel's Insurgents",
    source: ["HB", 0],
    spellcastingExtra: ["hellish rebuke", "dissonant whispers", "crown of madness", "mind spike", "hunger of hadar", "melf's minute meteors", "freedom of movement", "death ward", "circle of power", "synaptic static"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Persuaion'],['Intimidation']],
			extraAC : {
				mod : "Wis-Dex",
				text : "I add my Wis mod instead of Dex mod to AC while wearing light armor.",
				stopeval : function (v) { return !v.lightArmor; }
			}
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Chaotic Influence",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "When you use this feature, you and your allies within 30 feet of you gain advantage on all Charisma (Intimidation) and Charisma (Persuasion) checks for the next 5 minutes."
		},
		"subclassfeature2.1": { 
			name: "Channel Divinity: Rallying Cry",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "As a bonus action, you can choose up to three creatures within 30 feet of you. Each creature gains temporary hit points equal to your cleric level plus your Wisdom modifier.",
			action : [["bonus action", ""]]
		},
		"subclassfeature6": { 
			name: "Wind of Change",
            source: ["HB", 0],
            minlevel: 6,
			description : "\n   " + "You can use your action to create a powerful gust of wind that affects a 30-foot cone. Each creature in the cone must make a Strength saving throw or be pushed 15 feet away from you. Additionally, any objects in the cone that aren't being worn or carried are also pushed 15 feet away.",
			action : [["action", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "short rest"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["HB", 0]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra thunder damage",
			additional : levels.map(function (n) {
				return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 thunder damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 thunder damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra thunder damage."
				]
			}
		},
		"subclassfeature17": {
			name: "Anarchist's Blessing",
            source: ["HB", 0],
            minlevel: 17,
			description : "\n   " + "you can use your action to grant yourself and up to three allies within 30 feet of you resistance to a damage type of your choice. This resistance lasts for 1 hour. Once you use this feature, you can't use it again until you finish a long rest. Additionally, you and your allies gain the benefits of the Freedom of Movement spell for the duration of the resistance.",
			action : [["action", ""]],
			usages : 1,
			recovery : "short rest"
		}
	}
});

AddSubClass("cleric", "Nyx's Nightwalkers", {
	regExpSearch: /^(?=.*nyx's)(?=.*nightwalkers).*$/i,
    subname: "Nyx's Nightwalkers",
    source: ["HB", 0],
    spellcastingExtra: ["disguise self", "silent image", "darkness", "pass without trace", "nondetection", "magic circle", "greater invisibility", "shadow of moil", "mislead", "seeming"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Stealth'],['Perception']],
			weaponProfs : [false, false, ["shortbow", "longbow"]]
		},
		"subclassfeature1.1": { 
			name: "Nyx's Nightsight",
            source: ["HB", 0],
            minlevel: 1,
			vision : [
				["Darkvision", "fixed60"],
			],
			description : "\n   " + "you can see through magical darkness"
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Shadow Step",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "you can use your Channel Divinity to teleport up to 60 feet to an unoccupied dimly light or dark space that you can see",
			action : [["action", ""]]
		},
		"subclassfeature6": { 
			name: "Shadow Projection",
            source: ["HB", 0],
            minlevel: 6,
			description : "\n   " + "you can use your action to become etheral in dim light or darkness for up to 1 minute. During this time, you can move through objects and creatures as if they were difficult terrain, but you take 1d10 force damage if you end your turn inside an object. This ability ends early if you make an attack, cast a spell, or use a Channel Divinity",
			usagescalc: "event.value = Math.max(1, What('Int Mod'));",
			recovery: "short rest",
			action : [["action", ""]]
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["HB", 0]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra necrotic damage",
			additional : levels.map(function (n) {
				return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 necrotic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 necrotic damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra necrotic damage."
				]
			}
		},
		"subclassfeature17": {
			name: "Shadow Mastery",
            source: ["HB", 0],
            minlevel: 17,
			description : "\n   " + "you can use your action to envelop yourself in a 20ft sphere of magical darkness, reducing the speed by of creatures inside it by half. Any creature that exists this darkness must make a Con save or they will become blinded until the end of their next turn. This darkness lasts for 30 seconds and moves with you.",
			usages : 1,
			recovery: "long rest",
			action : [["action", ""]]
		}
	}
});

AddSubClass("cleric", "Typhon's Tempests", {
	regExpSearch: /^(?=.*typhon's)(?=.*tempests).*$/i,
    subname: "Typhon's Tempests",
    source: ["HB", 0],
    spellcastingExtra: ["thunderwave", "fog cloud", "gust of wind", "warding wind", "call lightning", "sleet storm", "storm sphere", "control water", "control winds", "destructive wave"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			skills : [['Athletics'],['Survival']],
			weaponProfs : [false, true]
		},
		"subclassfeature1.1": { 
			name: "Breath of the Storm",
            source: ["HB", 0],
            minlevel: 1,
			description : "\n   " + "you get the ability to breath underwater."
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Storm's Fury",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "As an action, you can create a whirlwind in a 30-foot radius centered on a point you can see within 120 feet of you. The storm cloud lasts for 1 minute or until you dismiss it as a bonus action. Whenever a creature enters the cloud for the first time on a turn or starts its turn there, the creature takes 3d6 lightning damage and must succeed a dexterity saving throw or be knocked prone.",
			action : [["action", ""],["bonus action","cancel fury"]],
		},
		"subclassfeature6": { 
			name: "Tempestuous Storm",
            source: ["HB", 0],
            minlevel: 6,
			action : [["action", ""],["bonus action","cancel storm"]],
			description : "\n   " + "you gain the ability to walk on water as if it were solid ground. Additionally, you can use an action to call forth a powerful storm cloud that covers a 60-foot radius centered on a point you can see within 120 feet of you. The storm lasts for 1 minute or until you dismiss it as a bonus action. While the storm rages, you and your allies within the area have resistance to lightning and thunder damage, and you can cast the control water spell at will, without expending a spell slot or requiring material components. While this ability is active you must maintain concentration on it.",
			spellcastingBonus : [{
				name : "Tempestuous Storm",
				spells : ["control water"],
				selection : ["control water"],
				firstCol : "atwill",
				components : "V,S",
				spellcastingAbility : 5,
				changes : "While Tempestuous Storm is active, you can cast this spell without using a spellslot"
			}],
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["HB", 0]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra thunder damage",
			additional : levels.map(function (n) {
				return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 thunder damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 thunder damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra thunder damage (my choice)."
				]
			}
		},
		"subclassfeature17": {
			name: "Chaos Surge",
            source: ["HB", 0],
            minlevel: 17,
			action : [["action", ""]],
			usages : 1,
			recovery: "long rest",
			description : "\n   " + "As an action, you can release a massive surge of chaotic energy in a 30-foot cone in front of you, dealing 15d6 force damage and applying the paralyzed condition to all creatures in the area on a failed Constitution saving throw, or half as much damage and not become paralyzed on a successful save. You can move any paralyzed creatures up to 10ft in a direction of your choosing."
		}
	}
});

AddSubClass("cleric", "Baphomet's Bloodletters", {
	regExpSearch: /^(?=.*baphomet's)(?=.*bloodletters).*$/i,
    subname: "Baphomet's Bloodletters",
    source: ["HB", 0],
    spellcastingExtra: ["armor of agathys", "cause fear", "darkness", "crown of madness", "bestow curse", "vampiric touch", "blight", "death ward", "cloudkill", "circle of death"],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			weaponProfs : [false, true],
			armorProfs : [false, false, true, false]
		},
		"subclassfeature1.1": { 
			name: "Divine Sacrifice",
            source: ["HB", 0],
            minlevel: 1,
			description : "\n   " + "while you are grappling a creature you may use a bonus action to attack them once",
			action : [["bonus action", ""]]
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Blood Sacrifice",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "As an action, you can sacrifice your own hit points to deal damage to a creature within 5 feet of you. For every 5 hit points you sacrifice, the target takes 1d10 necrotic damage.",
			action : [["action", ""]]
		},
		"subclassfeature6": { 
			name: "Blood Frenzy",
            source: ["HB", 0],
            minlevel: 6,
			description : "\n   " + "when you reduce a creature to 0 hit points with a weapon attack, you can use a bonus action to move up to your speed and make another weapon attack.",
			action : [["bonus action", ""]],
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["HB", 0]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra necrotic damage",
			additional : levels.map(function (n) {
				return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 necrotic damage ";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 necrotic damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra necrotic damage."
				]
			}
		},
		"subclassfeature17": {
			name: "Bloody Sacrifice",
            source: ["HB", 0],
            minlevel: 17,
			usages : 1,
			recovery: "long rest",
			description : "\n   " + "Choose up to three creatures within 30 feet of you. Each creature takes 5d10 necrotic damage, and you gain temporary hit points equal to half the total damage dealt. In addition, for the next minute, you and any friendly creatures within 30 feet of you gain a bonus to weapon damage rolls equal to your proficiency bonus."
		}
	}
});

AddSubClass("cleric", "Hecate's Witches", {
	regExpSearch: /^(?=.*hecate's)(?=.*witches).*$/i,
    subname: "Hecate's Witches",
    source: ["HB", 0],
    spellcastingExtra : ["armor of agathys", "cause fear", "darkness", "crown of madness", "bestow curse", "vampiric touch", "blight", "death ward", "cloudkill", "circle of death"],
    features: {
		"subclassfeature1" : { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
			spellcastingBonus : [{
				name : "Hecate's Cantrips",
				"class" : "wizard",
				level : [0, 0],
				firstCol : "atwill",
				spellcastingAbility : 5
			}, {
				name : "Hecate's Cantrips",
				spells : ["eldritch blast"],
				selection : ["eldritch blast"],
				firstCol : "atwill",
				spellcastingAbility : 5
			}],
		},
		"subclassfeature2" : { 
			name: "Channel Divinity: Coven's Curse",
            source: ["HB", 0],
            minlevel: 2,
			description : "\n   " + "As a bonus action, you can use your Channel Divinity to curse a creature within 30 feet. The creature must make a Wisdom saving throw or be cursed until the end of your next turn. The curse inflicts one of the following effects on the target: \n 1. The target has disadvantage on the next attack roll it makes. \n 2. The target has disadvantage on the next saving throw it makes. \n 3. The target has disadvantage on the next ability check it makes.",
			action : [["bonus action", ""]]
		},
		"subclassfeature6" : { 
			name: "Channel Divinity: Arcane Fury",
            source: ["HB", 0],
            minlevel: 6,
			description : "\n   " + "When you cast a spell using a spell slot, you can use your Channel Divinity to increase the spell's damage by 2d6."
		},
		"subclassfeature8" : {
		name : "Potent Spellcasting",
		source: ["HB", 0],
		minlevel : 8,
		description : "\n   " + "I add my Wisdom modifier to the damage I deal with my cleric cantrips",
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (classes.known.cleric && classes.known.cleric.level > 7 && v.thisWeapon[3] && v.thisWeapon[4].indexOf('cleric') !== -1 && SpellsList[v.thisWeapon[3]].level === 0) {
						output.extraDmg += What('Wis Mod');
					};
				},
				"My cleric cantrips get my Wisdom modifier added to their damage."
			],
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (spName.indexOf("cleric") == -1 || !What("Wis Mod") || Number(What("Wis Mod")) <= 0 || spellObj.psionic || spellObj.level !== 0) return;
					return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Wis");
				},
				"My cleric cantrips get my Wisdom modifier added to their damage."
			]}
		},
		"subclassfeature17" : {
			name: "Arcane Mastery",
            source: ["HB", 0],
            minlevel: 17,
			dmgres : ["spells and magical effects"],
			description : "\n   " + "You can choose any 10 spells up to 8th level from the wizard spell list as if it were a cleric spell, provided the spell is of a level for which you have spell slots",
			spellcastingBonus : [{
				name : "Arcane Mastery",
				"class" : "wizard",
				level : [0, 8],
				firstCol : "checkbox",
				spellcastingAbility : 5,
				times : 10
			}]
		}
	}
});

AddSubClass("cleric", "Samael's Annihilators", {
	regExpSearch: /^(?=.*samael's)(?=.*annihilators).*$/i,
    subname: "Samael's Annihilators",
    source: ["HB", 0],
	spellcastingExtra: ["armor of agathys", "cause fear", "darkness", "crown of madness", "bestow curse", "vampiric touch", "blight", "death ward", "cloudkill", "circle of death"],
    features: {
		"subclassfeature1": { 
			name : "Bonus Proficiencies",
            source : ["HB", 0],
            minlevel: 1,
			weaponProfs : [false, true],
			armorProfs : [false, false, true, false],
			skills : [['Intimidation']],
		},
		"subclassfeature2": { 
			name : "Channel Divinity: Reaper's Strike",
            source : ["HB", 0],
            minlevel : 2,
			description : "\n   " + "When you make a weapon attack, you can choose to use your Channel Divinity to add an extra 2d8 necrotic damage to the attack. If you kill a creature while this ability is active it will turn to dust."
		},
		"subclassfeature2.1": { 
			name : "Channel Divinity: Aura of Fear",
            source : ["HB", 0],
            minlevel : 2,
			description : "\n   " + "All enemies within 30 feet of you must make a Wisdom saving throw or become frightened for 1 minute. They can repeat the saving throw at the end of each of their turns to end the effect.",
			action : [["action", ""]]
		},
		"subclassfeature6": { 
			name : "Destroyer's Path",
            source : ["HB", 0],
            minlevel : 6,
			description : "\n   " + "You can use your action to make a Strength check to break through walls, doors, and other objects, using your cleric level as your bonus to the check. You can also move through difficult terrain without penalty, and your movement speed increases by 10 feet.",
			action : [["action", ""]],
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"]]
		},
		"subclassfeature8": { 
			name : "Channel Divinity: Blood Frenzy",
            source : ["HB", 0],
            minlevel : 8,
			description : "\n   " + "Whenever you reduce a creature to 0 hit points, you can use your channel divinity to gain an additional action on your turn. This action can be used to make a melee weapon attack or to take the Dash or Disengage action."
		},
		"subclassfeature17": {
			name : "Sacrificial Strike",
            source : ["HB", 0],
            minlevel : 17,
			usagescalc : "event.value = Math.max(1, What('Str Mod'));",
			recovery : "long rest",
			action : [["action", ""]],
			description : "\n   " + "Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 4d8 necrotic damage to the target. When you reach 20th level, the extra damage increases to 6d8. If the creature is grappled by you it takes double damgage."
		}
	}
});
