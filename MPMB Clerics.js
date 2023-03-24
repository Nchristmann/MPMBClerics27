AddSubClass("cleric", "Aurielle's Radiant", {
  regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte|divine|aurielle))(?=.*(light|healer|aurielle)).*$/i,
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
		description: "As an action, I can touch a creature and restore a number of hit points equal to my cleric level. I can use this feature a number of times equal to my Wisdom modifier (minimum of once), and I regain all expended uses when I finish a long rest."
    },
	"subclassfeature1.1" : {
		name: "Aurielle's Blessings",
		source: ["HB", 0],
		minlevel: 1,
		description: "I gain access to the 2nd-level spell Branding Smite, the 3rd-level spell Daylight, and the 5th-level spell Wall of Light ",
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
		description: "As an action, I present my holy symbol, and each creature of my choice within 30 feet of me must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + my cleric level on a failed saving throw, or half as much damage on a successful one.",
		additional : ["2d10 + 1 damage", "2d10 + 2 damage", "2d10 + 3 damage", "2d10 + 4 damage", "2d10 + 5 damage", "2d10 + 6 damage", "2d10 + 7 damage", "2d10 + 8 damage", "2d10 + 9 damage", "2d10 + 10 dmg", "2d10 + 11 dmg", "2d10 + 12 dmg", "2d10 + 13 dmg", "4d10 + 14 dmg", "4d10 + 15 dmg", "4d10 + 16 dmg", "4d10 + 17 dmg", "4d10 + 18 dmg", "4d10 + 19 dmg", "4d10 + 20 dmg"]
    },
    "subclassfeature6" : {
		name: "Radiant Soul",
		source: ["HB", 0],
		minlevel: 6,
		description: "My link to Aurielle strengthens, and I gain resistance to radiant damage. In addition, when I cast a spell that restores hit points to a creature, I or another creature of my choice within 30 feet that I can see of me can regain hit points equal to my Wisdom modifier (minimum of 1).",
		dmgres : ["Radiant"]
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
		description: "As an action, I present my holy symbol, and all allies within 30 feet of me regain hit points equal to 10 + my cleric level. Additionally, for the next minute, all allies within the area of effect have advantage on saving throws against being frightened or charmed. Once I use this feature, I can't use it again until I finish a long rest."
    }
  }
});

AddSubClass("cleric", "Theron's Justiciars", {
    regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte|theron))(?=.*(justiciar|justice|law)).*$/i,
    subname: "Theron's Justiciars",
    source: ["HB", 0],
    spellcastingExtra: ["command", "compelled duel", "aid", "enhance ability", "beacon of hope", "crusader's mantle", "guardian of faith", "freedom of movement", "hold monster", "flame strike"],
    features: {
        "subclassfeature1": {
            name: "Tenets of the Justicar",
            source: ["HB", 0],
            minlevel: 1,
            description: "\n   " + "I gain proficiency and expertise with Insight and Investigation skills. I also gain proficiency with heavy armor and martial weapons",
			armorProfs : [false, false, true, false],
			weaponProfs : [false, true],
			skills : [['Insight', 'full'], ['Investigation', 'full']]
			
        },
        "subclassfeature2": {
            name: "Channel Divinity: Righteous Strike",
            source: ["HB", 0],
            minlevel: 2,
            description: "\n   " + "As an action, I can make a melee weapon attack that deals extra radiant damage equal to my cleric level. If the target is a fiend or undead, add 1d12 damage.",
            action: ["action", ""]
        },
        "subclassfeature6": {
            name: "Channel Divinity: Aura of Justice",
            source: ["HB", 0],
            minlevel: 6,
			action : ["reaction", ""],
            description: "\n   " + "As a reaction, when someone within 20 ft of me is attacked, I and friendly creatures within 10 feet of me gain a bonus to damage rolls against the attacker. The bonus damage is equal to my proficiency bonus and lasts till the end of my next turn."
        },
        "subclassfeature8": {
            name: "Soul of Justice",
            source: ["HB", 0],
            minlevel: 8,
            description: "\n   " + "I am immune to being charmed, frightened, or paralyzed. Additionally, my proficiency bonus per long rest I can give a creature within 30ft of me advantage on saving throws against these conditions until the end of their turn.",
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
            description: "\n   " + "I can cast the spell true resurrection without needing a material component. Once I use this feature, I can't use it again until I finish a long rest.",
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
            description: "I gain proficiency in the Nature and Survival skills, and I can cast the druidcraft cantrip and the 1st-level spell Speak with Animals using Wisdom as my spellcasting ability."
        },
        "subclassfeature2": {
            name: "Channel Divinity: Nature's Fury",
            source: ["HB", 0],
            minlevel: 2,
            action: ["action", ""],
            description: "As an action, I summon the fury of nature in a 30-foot radius centered on myself. Creatures within the radius must make a Dexterity saving throw or take 1d12 damage of a type associated with the terrain, such as bludgeoning in a rocky area or cold damage in a snowy area. On a successful save, they take half damage. The damage increases to 2d12 at 8th level. "
		},
        "subclassfeature6": {
            name: "Nature's Resilience",
            source: ["HB", 0],
            minlevel: 6,
            description: "I gain resistance to one damage type associated with the terrain I am in. Additionally, I have advantage on saving throws against environmental hazards, such as difficult terrain, extreme weather, or natural hazards like avalanches or quicksand. Additionally, I have advantage on saves against exhaustion.",
			dmgres : ["terrain association"],
			savetxt : {text : ["environmental hazards"]}
        },
        "subclassfeature8": {
            name: "Nature's Protector",
            source: ["HB", 0],
            minlevel: 8,
            action: ["action", ""],
            usages: 1,
            recovery: "short rest",
            description: "As an action, I can summon a spirit of nature to protect me or an ally. The spirit appears within 30 feet of me and lasts for 1 minute or until it is destroyed. The spirit takes the form of an animal appropriate to the terrain I am in and has the statistics of a CR 1 beast. While the spirit is present, me and my allies within 30 feet of it have advantage on saving throws against spells and effects."
        },
        "subclassfeature17": {
            name: "Nature's Avatar",
            source: ["HB", 0],
            minlevel: 17,
            action: ["action", ""],
            usages: 1,
            recovery: "long rest",
            description: "As an action, I can transform into a powerful avatar of nature. I gain resistance to all damage except for psychic damage, a flying speed of 60 feet and can hover, and can use my action to cast the barkskin spell on myself without expending a spell slot or to cast the entangle spell without expending a spell slot. The transformation lasts for 1 minute."
			spellcastingBonus : [{
				name : "Nature's Call",
				spells : ["entangle"],
				selection : ["entangle"],
				firstCol : "markedbox",
				spellcastingAbility : 5,
				changes : "While Nature's avatar is active, you can cast this spell without using a spellslot"
			}, {
				name : "Nature's Call",
				spells : ["barkskin"],
				selection : ["barkskin"],
				firstCol : "markedbox",
				spellcastingAbility : 5,
				changes : "While Nature's avatar is active, you can cast this spell without using a spellslot"
			}]
        }
    }
});

AddSubClass("cleric", "Erebus' Enforcers", {
	regExpSearch: ,
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
			savetxt : { adv_vs : ["charmed", "frightened"],
			description : "I gain advantage on saving throws against being charmed or frightened. In addition, as an action I can give myself advantage on all Intelligence, Wisdom, and Charisma checks while interacting with law enforcement or other authorities."
		},
		"subclassfeature2": {
			name: "Channel Divinity: Erebus' Authority",
            source: ["HB", 0],
            minlevel: 2,
			action : [["action", ""]],
			description : " "
		},
		"subclassfeature6": {
			name: "Erebus' Judgment",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["P", 62]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra psychic damage",
			additional : levels.map(function (n) {
				return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 psychic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 cold/fire/lightning damage';
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
		}
	}
});

AddSubClass("cleric", "Neith's Hunteresse/Hunters", {
	regExpSearch: ,
    subname: "Neith's Hunteresse/Hunters",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Divine Hunter",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Hunter's Quarry",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Channel Divinity: Hunter's Instincts",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8": { 
			name: "Huntress's Vision",
            source: ["HB", 0],
            minlevel: 8,
            vision : [["Darkvision", 60]]
		},
		"subclassfeature17": {
			name: "Goddess of War's Might",
            source: ["HB", 0],
            minlevel: 17,
		}
	}
});


AddSubClass("cleric", "Sariel's Revenants ", {
	regExpSearch: ,
    subname: "Sariel's Revenants ",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Grave Touch",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Reaper's Harvest",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Deathly Resilience",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8": { 
			name: "Life to Death",
            source: ["HB", 0],
            minlevel: 8,
		},
		"subclassfeature17": {
			name: "Harbinger of Death",
            source: ["HB", 0],
            minlevel: 17,
		}
	}
});


AddSubClass("cleric", "Dominator of Malphas", {
	regExpSearch: ,
    subname: "Dominator of Malphas",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Master of Intimidation",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Dominate Will",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Aura of Domination",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8": { 
			name: "Dreadful Presence",
            source: ["HB", 0],
            minlevel: 8,
		},
		"subclassfeature17": {
			name: "Master of Domination",
            source: ["HB", 0],
            minlevel: 17,
		}
	}
});


AddSubClass("cleric", "Lillia's Succubui", {
	regExpSearch: ,
    subname: "Lillia's Succubui",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Dark Charisma",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Allure",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Channel Divinity: Mask of Deception",
            source: ["HB", 0],
            minlevel: 6,
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
		}
	}
});


AddSubClass("cleric", "Belphegor's Corruptors", {
	regExpSearch: ,
    subname: "Belphegor's Corruptors",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Decaying Touch",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Decay",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Belphegor's Apathy",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8": { 
			name: "Decaying Aura",
            source: ["HB", 0],
            minlevel: 8,
		},
		"subclassfeature17": {
			name: "Vampiric Embrace",
            source: ["HB", 0],
            minlevel: 17,
		}
	}
});

AddSubClass("cleric", "Eryndor's Sages", {
	regExpSearch: ,
    subname: "Eryndor's Sages",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Eryndor's Lore",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Read Thoughts",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Aura of Insight",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature6.1": { 
			name: "Channel Divinity: Insightful Vision",
            source: ["HB", 0],
            minlevel: 6,
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
		}
	}
});

AddSubClass("cleric", "Amorous's of Morwyn", {
	regExpSearch: ,
    subname: "Amorous's of Morwyn",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Blessing of Love",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Lover's Protection",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Healing Embrace",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["P", 62]],
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
		}
	}
});

AddSubClass("cleric", "Arcturan Diviner", {
	regExpSearch: ,
    subname: "Arcturan Diviner",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Star Chart",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Cosmic Intervention",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Starsight",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8": { 
			name: "Fate's Intervention",
            source: ["HB", 0],
            minlevel: 8,
		},
		"subclassfeature17": {
			name: "Fated Strike",
            source: ["HB", 0],
            minlevel: 17,
		}
	}
});

AddSubClass("cleric", "Ananke's Inevitables", {
	regExpSearch: ,
    subname: "Ananke's Inevitables",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Ananke's Cantrips",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity; Tortoise Shell",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Balance World",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["P", 62]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra radiant damage",
			additional : levels.map(function (n) {
				return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 radiant damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 radiant damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra radiant damage."
				]
			}
		},
		"subclassfeature17": { 
			name: "Balanced damage",
            source: ["HB", 0],
            minlevel: 17,
		},
	}
});

AddSubClass("cleric", "Gaia's Harvesters", {
	regExpSearch: ,
    subname: "Gaia's Harvesters",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Harvest Blessing",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Nature's Wrath",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Nature's Ward",
            source: ["HB", 0],
            minlevel: 6,
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
			name: "Nature's Sanctuary",
            source: ["HB", 0],
            minlevel: 17,
		}
	}
});

AddSubClass("cleric", "Ophion's Architect", {
	regExpSearch: ,
    subname: "Ophion's Architect",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Constructive Insight",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Disrupt Creation",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature2.1": { 
			name: "Channel Divinity: Creation's Renewal",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Channel Divinity: Shatter Reality",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature6.1": { 
			name: "Nihilistic Resistance",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["P", 62]],
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
		}
	}
});

AddSubClass("cleric", "Mara's Tormentors", {
	regExpSearch: ,
    subname: "Mara's Tormentors",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Shackles of Despair",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Torment",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Aura of Despair",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["P", 62]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra psychic damage",
			additional : levels.map(function (n) {
				return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 psychic damage (choice)";
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
		}
	}
});


AddSubClass("cleric", "Balor's Destoryers", {
	regExpSearch: ,
    subname: "Balor's Destoryers",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Fiery Presence",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Fury of Balor",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Demonic Fury",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Indomitable Might",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["P", 62]],
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
		}
	}
});

AddSubClass("cleric", "Mephistopheles's Tempters", {
	regExpSearch: ,
    subname: "Mephistopheles's Tempters",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Tempting Offer",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Hellish Pact",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Poison Strike",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8": { 
			name: "Diabolic Presence",
            source: ["HB", 0],
            minlevel: 8,
		},
		"subclassfeature17": {
			name: "Infernal Manipulation",
            source: ["HB", 0],
            minlevel: 17,
		}
	}
});

AddSubClass("cleric", "Lirien's Liberators", {
	regExpSearch: ,
    subname: "Lirien's Liberators",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Joyous Touch",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Liberating Strike",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Freeing Strike",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8": { 
			name: "Aura of Joy",
            source: ["HB", 0],
            minlevel: 8,
		},
		"subclassfeature17": {
			name: "Unchained Soul",
            source: ["HB", 0],
            minlevel: 17,
		}
	}
});

AddSubClass("cleric", "Nefarious's Catalysts", {
	regExpSearch: ,
    subname: "Nefarious's Catalyst",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Chaotic Blessing",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Chaos Bolt",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Chaotic Ward",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["P", 62]],
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
		}
	}
});

AddSubClass("cleric", "Zephyrus's Galewardens", {
	regExpSearch: ,
    subname: "Zephyrus's Galewardens",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Zephyrus's Winded Defense",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Tailwind",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Wind Shield",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8": { 
			name: "Gust of Wind",
            source: ["HB", 0],
            minlevel: 8,
		},
		"subclassfeature17": {
			name: "Stormwalker",
            source: ["HB", 0],
            minlevel: 17,
		}
	}
});

AddSubClass("cleric", "Azazel's Insurgents", {
	regExpSearch: ,
    subname: "Azazel's Insurgents",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Chaotic Influence",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Wind of Change",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["P", 62]],
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
		}
	}
});

AddSubClass("cleric", "Nyx's Nightwalkers", {
	regExpSearch: ,
    subname: "Nyx's Nightwalkers",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Nyx's Nightsight",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Shadow Step",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Shadow Projection",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["P", 62]],
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
		}
	}
});

AddSubClass("cleric", "Typhon's Tempests", {
	regExpSearch: ,
    subname: "Typhon's Tempests",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Breath of the Storm",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Storm's Fury",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Tempestuous Storm",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["P", 62]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra thunder damage",
			additional : levels.map(function (n) {
				return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 thunder damage (choice)";
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
		}
	}
});

AddSubClass("cleric", "Baphomet's Bloodletters", {
	regExpSearch: ,
    subname: "Baphomet's Bloodletters",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature1.1": { 
			name: "Divine Sacrifice",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Blood Sacrifice",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Blood Frenzy",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["P", 62]],
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
		}
	}
});

AddSubClass("cleric", "Hecate's Witches/Warlocks", {
	regExpSearch: ,
    subname: "Hecate's Witches/Warlocks",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Coven's Curse",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Channel Divinity: Arcane Fury",
            source: ["HB", 0],
            minlevel: 6,
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
			name: "Arcane Mastery",
            source: ["HB", 0],
            minlevel: 17,
		}
	}
});

AddSubClass("cleric", "Samael's Annihilators", {
	regExpSearch: ,
    subname: "Samael's Annihilators",
    source: ["HB", 0],
    spellcastingExtra: [],
    features: {
		"subclassfeature1": { 
			name: "Bonus Proficiencies",
            source: ["HB", 0],
            minlevel: 1,
		},
		"subclassfeature2": { 
			name: "Channel Divinity: Reaper's Strike",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature2.1": { 
			name: "Channel Divinity: Aura of Fear",
            source: ["HB", 0],
            minlevel: 2,
		},
		"subclassfeature6": { 
			name: "Destroyer's Path",
            source: ["HB", 0],
            minlevel: 6,
		},
		"subclassfeature8": { 
			name: "Channel Divinity: Blood Frenzy",
            source: ["HB", 0],
            minlevel: 8,
		},
		"subclassfeature17": {
			name: "Sacrificial Strike",
            source: ["HB", 0],
            minlevel: 17,
		}
	}
});