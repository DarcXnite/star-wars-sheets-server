const db = require('./models')

const createCharacter = async () => {
  try {
    // const newCharacter = await db.Character.create({
    //   name: 'Billy',
    //   species: 'person',
    //   gender: 'boi',
    //   age: 37,
    //   height: '5',
    //   build: 'small',
    //   hair: 'black',
    //   eyes: 'brown',
    //   credits: 2000,
    //   brawn: 7,
    //   agility: 8,
    //   intellect: 12,
    //   cunning: 13,
    //   willpower: 15,
    //   presence: 15,
    //   woundsThreshold: 19,
    //   strainThreshold: 14,
    //   soakValue: 16,
    //   rangedDef: 23,
    //   meleeDef: 18,
    //   encumbrance: 20,
    //   forcePool: 14,
    //   morality: 6,
    //   conflict: 9,
    // })

    const foundCharacter = await db.Character.findById(
      '62cfac63dde8a57c7ac7b586'
    )

    const newCareer = {
      career: 'nothing',
      specialization: 'typing',
    }
    const newGeneralSkills = {
      skill: 'fast',
      career: false,
      type: 'super',
      rank: 25,
    }
    const newCombatSkills = {
      skill: 'superfast',
      career: false,
      type: 'billy',
      rank: 10,
    }
    const newKnowledgeSkills = {
      skill: 'smarty',
      career: false,
      type: 'math',
      rank: 15,
    }
    const newCustomSkills = {
      skill: 'coding',
      career: false,
      type: 'math',
      rank: 12,
    }
    const newWeapon = {
      weaponName: 'GUN',
      usesSkill: 'fast',
      damage: 600,
      range: '5 miles',
      encumbrance: 20,
      hardPoints: 12,
      critRating: 12,
      condition: 'used',
      restricted: true,
      qualities: 'cool',
      modifiers: 'scope',
      attachments: [],
    }
    const newWeaponAttachments = {
      attachment: 'barrel',
      hardPointCost: 12,
      modifications: 'scope',
    }
    const newInventory = {
      itemName: 'bomb',
      cost: 20,
      encumbrance: 12,
      description: 'blows ish up',
    }
    const newTalents = {
      talentName: 'juggling',
      rank: 5,
      xpCost: 12,
      description: 'hes so good at it',
    }
    const newForcePowers = {
      powerName: 'air',
      modifiers: 'fast',
      xpCost: 12,
      summary: 'he can move things',
      upgrades: [],
    }
    const newForcePowerUpg = {
      type: 'faster',
      rank: 12,
      xpCost: 20,
      description: 'makes him move the air faster',
    }
    const newCriticalInjury = {
      criticalName: 'extreme',
      rollRange: 'craxy',
    }
    const newArmor = {
      name: 'chest plate',
      condition: 'used',
      value: 20,
      qualities: 'shiny',
      features: 'silver',
      attachments: [],
    }
    const newArmorAttachments = {
      attachmentName: 'chain',
      hardPoints: 12,
      description: 'super duper strong',
    }
    const newCybernetics = {
      implantName: 'something',
      active: false,
      summary: 'does something',
    }
    const newTools = {
      toolName: 'hammer',
      encumbrance: 12,
      summary: 'can hammer in nails',
    }

    // newWeapon.attachments.push(newWeaponAttachments)
    // foundCharacter.careers.push(newCareer)
    // foundCharacter.generalSkills.push(newGeneralSkills)
    // foundCharacter.combatSkills.push(newCombatSkills)
    // foundCharacter.knowledgeSkills.push(newKnowledgeSkills)
    // foundCharacter.customSkills.push(newCustomSkills)
    // foundCharacter.weapons.push(newWeapon)
    // foundCharacter.inventory.push(newInventory)
    // foundCharacter.talents.push(newTalents)
    // newForcePowers.upgrades.push(newForcePowerUpg)
    // foundCharacter.forcePowers.push(newForcePowers)
    // foundCharacter.criticalInjuries.push(newCriticalInjury)
    newArmor.attachments.push(newArmorAttachments)
    foundCharacter.armors.push(newArmor)
    // foundCharacter.cybernetics.push(newCybernetics)
    // foundCharacter.tools.push(newTools)

    await foundCharacter.save()
    console.log(foundCharacter)
  } catch (err) {
    console.warn(err)
  }
}

createCharacter()
