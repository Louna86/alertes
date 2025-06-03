enum RadioMessage {
    message1 = 49434,
    INTRUSION = 14719,
    CONFINEMENT = 15186,
    INCENDIE = 7432
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.INCENDIE)
    for (let index = 0; index < 100; index++) {
        music.setVolume(150)
        basic.showString("FEU")
        music.play(music.stringPlayable("C5 A C5 A C5 A C5 A ", 225), music.PlaybackMode.LoopingInBackground)
        basic.showString("→ POINT DE RASSEMBLEMENT")
        basic.showString("")
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.CONFINEMENT)
    for (let index = 0; index < 100; index++) {
        music.setVolume(150)
        basic.showString("CONFINEMENT")
        music.play(music.stringPlayable("G E G E G E G E ", 180), music.PlaybackMode.UntilDone)
        basic.showString("SE DIRIGER DANS DES SALLES CLOSES A L'ETAGE")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.INTRUSION)
    for (let index = 0; index < 100; index++) {
        basic.showString("INTRUSION")
        music.setVolume(150)
        music.play(music.stringPlayable("C F C F C F C F ", 200), music.PlaybackMode.UntilDone)
        basic.showString("SE CACHER SOUS LES TABLES. SILENCE COMPLET")
    }
})
