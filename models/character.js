const mongoose = require('mongoose')

const CareerSchema = new mongoose.Schema(
  {
    career: String,
    specialization: String,
  },
  { timestamps: true }
)

const GeneralSkillsSchema = new mongoose.Schema(
  {
    skill: String,
    career: Boolean,
    type: String,
    rank: Number,
  },
  { timestamps: true }
)

const CombatSkillsSchema = new mongoose.Schema(
  {
    skill: String,
    career: Boolean,
    type: String,
    rank: Number,
  },
  { timestamps: true }
)

const KnowledgeSkillsSchema = new mongoose.Schema(
  {
    skill: String,
    career: Boolean,
    type: String,
    rank: Number,
  },
  { timestamps: true }
)

const CustomSkillsSchema = new mongoose.Schema(
  {
    skill: String,
    career: Boolean,
    type: String,
    rank: Number,
  },
  { timestamps: true }
)

const WeaponAttachments = new mongoose.Schema({
  attachment: String,
  hardPointCost: Number,
  modifications: String,
  rarity: Number,
})

const WeaponsSchema = new mongoose.Schema(
  {
    weaponName: String,
    usesSkill: String,
    damage: Number,
    range: String,
    encumbrance: Number,
    hardPoints: Number,
    critRating: Number,
    condition: String,
    restricted: Boolean,
    qualities: String,
    modifiers: String,
    rarity: Number,
    attachments: [WeaponAttachments],
  },
  { timestamps: true }
)

const InventorySchema = new mongoose.Schema(
  {
    itemName: String,
    cost: Number,
    encumbrance: Number,
    description: String,
  },
  { timestamps: true }
)

const TalentsSchema = new mongoose.Schema(
  {
    talentName: String,
    rank: Number,
    xpCost: Number,
    passive: Boolean,
    summary: String,
  },
  { timestamps: true }
)

const ForcePowerUpgSchema = new mongoose.Schema(
  {
    type: String,
    rank: Number,
    xpCost: Number,
    description: String,
  },
  { timestamps: true }
)

const ForcePowersSchema = new mongoose.Schema(
  {
    powerName: String,
    modifiers: String,
    xpCost: Number,
    summary: String,
    upgrades: [ForcePowerUpgSchema],
  },
  { timestamps: true }
)

const CriticalInjurySchema = new mongoose.Schema(
  {
    criticalName: String,
    rollRange: String,
  },
  { timestamps: true }
)

const ArmorAttachmentsSchema = new mongoose.Schema(
  {
    attachmentName: String,
    hardPoints: Number,
    description: String,
  },
  { timestamps: true }
)

const ArmorSchema = new mongoose.Schema(
  {
    name: String,
    condition: String,
    value: Number,
    qualities: String,
    features: String,
    rarity: Number,
    attachments: [ArmorAttachmentsSchema],
  },
  { timestamps: true }
)

const CyberneticsSchema = new mongoose.Schema(
  {
    implantName: String,
    active: Boolean,
    summary: String,
    rarity: Number,
  },
  { timestamps: true }
)

const ToolsSchema = new mongoose.Schema(
  {
    toolName: String,
    encumbrance: Number,
    summary: String,
    rarity: Number,
  },
  { timestamps: true }
)

const CharacterSchema = new mongoose.Schema({
  name: String,
  species: String,
  gender: String,
  age: Number,
  height: String,
  build: String,
  hair: String,
  eyes: String,
  brawn: Number,
  agility: Number,
  intellect: Number,
  cunning: Number,
  willpower: Number,
  presence: Number,
  woundsThreshold: Number,
  wounds: Number,
  strainThreshold: Number,
  strain: Number,
  soakValue: Number,
  rangedDef: Number,
  meleeDef: Number,
  encumThreshold: Number,
  encumCurrent: Number,
  forcePool: Number,
  morality: Number,
  conflict: Number,
  notes: String,
  credits: Number,
  careers: [CareerSchema],
  combatSkills: [CombatSkillsSchema],
  generalSkills: [GeneralSkillsSchema],
  knowledgeSkills: [KnowledgeSkillsSchema],
  customSkills: [CustomSkillsSchema],
  inventory: [InventorySchema],
  weapons: [WeaponsSchema],
  talents: [TalentsSchema],
  forcePowers: [ForcePowersSchema],
  criticalInjuries: [CriticalInjurySchema],
  armors: [ArmorSchema],
  cybernetics: [CyberneticsSchema],
  tools: [ToolsSchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})

module.exports = mongoose.model('Character', CharacterSchema)
