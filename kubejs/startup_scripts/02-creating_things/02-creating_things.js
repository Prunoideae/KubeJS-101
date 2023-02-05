//priority: 100
//@ts-check

/**
 * Supported objects (items, blocks, mob effects, etc.) are registered 
 * like following code, with ProbeJS installed (and a proper VSCode 
 * or other IDE setup), you can have detailed completions about what
 * things can be created via KubeJS.
 * 
 * Continue to next chapter by using the paper note when you have
 * the item `kubejs:sussy_item` and the block `kubejs:sussy_block`
 * in your inventory.
 */

StartupEvents.registry("item", event => {
    /**
     * Items are created in following manner.
     * 
     * Code is commented out via false-ifs, so you can still check out
     * types and completions by hovering over.
     * 
     * You can write your own code from scrach by referring to code
     * below, or simply remove the false-if to make it execute and
     * see what's happening, you might still make a bit modification
     * to get it run as modpack requires.
     */


    if (false) {
        /**
         * Creates the item with the name, if no namespace is specified,
         * it will use "kubejs" as namespace (so it will be 
         * "kubejs:test_item" in game), you can also specify other namespaces,
         * so people might think that the item comes from a specific mod,
         * like if you create some very Farmer's Delight-ish food, then you can
         * give them such namespace to make people feel more consistent about
         * the item!
         */
        event.create("test_item")
            /**
             * When you use the item, returning true will indicate this
             * item is used.
             */
            .use((level, player, hand) => {
                // This would hurt...
                player.potionEffects.add("poison", 60 * 20, 10)
                return true;
            })
            /**
             * Set the name of item here, a lang key will still be generated
             * for localization, this goes to en_us by default.
             */
            .displayName("Test item")
            .burnTime(1000)
            /**
             * Builds the food property.
             */
            .food(food => {
                food.hunger(1)
                    .alwaysEdible()
                    .fastToEat()
                    /**
                     * The saturation means how many times of hunger restored
                     * will be converted to saturation amount, if hunger is 1
                     * and saturation is 10, then it will be 1*10=10.
                     */
                    .saturation(10)
            })
        /**
         * ...And so on! Check out accessible methods by ProbeJS' completions!
         */

        /**
         * Also, you can create different types of object by appending type after
         * the item name, like here we create a sword with 1k damage.
         */
        event.create("sussy_sword", "sword")
            .attackDamageBaseline(1000)
    }

})

StartupEvents.registry("block", event => {
    /**
     * Blocks are created in following manner
     */

    if (false) {
        event.create("test_block")
            /**
             * Sets the texture of a side of the block
             */
            .textureSide("down", "botania:block/abstruse_platform")
            /**
             * Sets the texture of all sides of the block
             */
            .textureAll("botania:block/alfheim_portal")
    }
})