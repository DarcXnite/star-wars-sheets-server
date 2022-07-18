const db = require('../models')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
const router = require('express').Router()
// const authLockedRoute = require('./authLockedRoute')

// GET /:id find a single character // route has been tested with PM
router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const foundCharacter = await db.Character.findById(id)
      .populate({ path: 'careers' })
      .populate({ path: 'combatSkills' })
      .populate({ path: 'generalSkills' })
      .populate({ path: 'knowledgeSkills' })
      .populate({ path: 'customSkills' })
      .populate({ path: 'inventory' })
      .populate({ path: 'weapons', populate: { path: 'attachments' } })
      .populate({ path: 'talents' })
      .populate({ path: 'forcePowers', populate: { path: 'upgrades' } })
      .populate({ path: 'criticalInjuries' })
      .populate({ path: 'armors', populate: { path: 'attachments' } })
      .populate({ path: 'cybernetics' })
      .populate({ path: 'tools' })
      .populate({ path: 'user' })

    res.json(foundCharacter)
  } catch (err) {
    console.warn(err)
  }
})

// POST /characters -- CREATE a new character // route has been tested with PM
router.post('/:userId', async (req, res) => {
  const userId = req.params.userId
  try {
    const newCharacter = await db.Character.create(req.body)
    const foundUser = await db.User.findById(userId)
    newCharacter.user = foundUser
    foundUser.characters.push(newCharacter)

    await newCharacter.save()
    await foundUser.save()

    res.json(foundUser)
  } catch (err) {
    console.warn(err)
    // handle errors todo
  }
})

// PUT /:id -- UPDATES a character instance // route has been tested with PM
router.put('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const updatedCharacter = await db.Character.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    )
      .populate({ path: 'careers' })
      .populate({ path: 'combatSkills' })
      .populate({ path: 'generalSkills' })
      .populate({ path: 'knowledgeSkills' })
      .populate({ path: 'customSkills' })
      .populate({ path: 'inventory' })
      .populate({ path: 'weapons', populate: { path: 'attachments' } })
      .populate({ path: 'talents' })
      .populate({ path: 'forcePowers', populate: { path: 'upgrades' } })
      .populate({ path: 'criticalInjuries' })
      .populate({ path: 'armors', populate: { path: 'attachments' } })
      .populate({ path: 'cybernetics' })
      .populate({ path: 'tools' })
      .populate({ path: 'user' })
    res.json(updatedCharacter)
  } catch (err) {
    // todo error handling
    console.warn(err)
  }
})

// DELETE /:id deletes a character // route has been tested with PM
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  try {
    await db.Character.findByIdAndDelete(id)

    res.sendStatus(204) // double check where to reroute
  } catch (err) {
    console.warn(err)
  }
})

module.exports = router
