input.onPinPressed(TouchPin.P0, function () {
    music.playMelody("C5 G A B C5 - - - ", 120)
    music.playMelody("C C5 B A G - - - ", 120)
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(131, music.beat(BeatFraction.Half))
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P1, function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    music.startMelody(;
    [0], MelodyOptions.Once)
})
