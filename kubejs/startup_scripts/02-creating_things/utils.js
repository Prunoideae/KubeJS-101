//priority: 99

assignBehaviour("creating_things_01_02", (level, player) => {
    let itemFound = false;
    let blockFound = false;

    player.inventory.forEach(/** @param {Internal.ItemStack} stack */stack => {
        if (stack.id == "kubejs:sussy_item") {
            itemFound = !stack.block
        }
        if (stack.id == "kubejs:sussy_block") {
            blockFound = stack.block
        }

    })
    return itemFound && blockFound;
})