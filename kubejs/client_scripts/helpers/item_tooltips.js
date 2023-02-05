ItemEvents.tooltip(event => {
    event.addAdvanced("kubejs:paper_note", (stack, advanced, component) => {
        let nbt = stack.nbt
        if (nbt == null || !nbt.contains("behavior"))
            return
        let key = nbt.getString("behavior")

    })
})

