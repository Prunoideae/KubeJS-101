// priority: 99999

global['noteBehaviors'] = {}

StartupEvents.registry("item", event => {
    event.create("paper_note")
        .use(/** @param {Internal.ServerPlayer} player */(level, player, hand) => {
            //Ensure the player is server-side, so we can grant advancements
            if (player.localPlayer)
                return false
            let stack = player.getItemInHand(hand)
            let tag = stack.getOrCreateTag()
            if (!tag.contains("behavior"))
                return false
            let key = tag.getString("behavior")
            /**
             * @type {(level: Internal.Level, player: Internal.Player, hand: Internal.InteractionHand)=>boolean}
             */
            let behavior = global.noteBehaviors[key]
            if (behavior(level, player, hand)) {
                player.unlockAdvancement(new ResourceLocation("kubejs", key))
                return true                                                                                                                                                                                                                                      
            }
            return false
        })
})

/**
 * 
 * @param {string} key 
 * @param {(level: Internal.Level, player: Internal.Player, hand: Internal.InteractionHand)=>boolean} callback 
 */
function assignBehaviour(key, callback) {
    global['noteBehaviors'][key] = callback
}

/**
 * 
 * @param {string} key 
 */
function noteOf(key) {
    return Item.of("kubejs:paper_note", 1, { behavior: key })
}