namespace SpriteKind {
    export const diamond = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    diamondsCollected += 1
    info.changeScoreBy(1)
    tiles.setTileAt(tiles.getTileLocation(30, 2), assets.tile`myTile`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 31))
    tiles.setTileAt(tiles.getTileLocation(3, 16), assets.tile`myTile16`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f c f f f f f f f f c f . 
        c c f 9 9 9 9 9 9 f c c . 
        d d f c c c c c c f d d . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . f f f c c c c c c f f . 
        f f c c c c c c c c c f f 
        f c c c c f c c c c c c f 
        . f f f f c c c c f c c f 
        . f f f f c c f c c c f f 
        . f f f f f f f f f f f f 
        . f f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . c f f f f f f f f f . 
        . . c f f f f f f f f c f 
        . . c c 9 9 9 9 9 c c c f 
        . . d f f f f f f f d d . 
        . . d f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . . f f c c c c c c f f . 
        . f f f c c c c c c c f f 
        f f f c c c c c c c c c f 
        f f c c c f c c c c c c f 
        . f f f f f c c c f c f f 
        . f f f f c c f f c f f f 
        . . f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f c . 
        . f c f f f f f f f f c . 
        . c d d c c 9 9 9 9 c d . 
        . . d d f f f f f f f d . 
        . . . . . . . . f f f . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(tiles.getTileLocation(30, 18), assets.tile`myTile`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    info.setLife(-1)
    tiles.setTileAt(tiles.getTileLocation(4, 30), assets.tile`myTile16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    diamondsCollected += 1
    info.changeScoreBy(1)
    tiles.setTileAt(tiles.getTileLocation(3, 22), assets.tile`myTile`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f d f f f f c c f 
        . f f f d d f f f f f f f 
        . . f f d d f b f d d f f 
        . . . f d d f 1 d d d f . 
        . . . f d d d d d f f f . 
        . . . f f d d d f f f . . 
        . . . f 9 9 9 c c c c . . 
        . . . f 9 9 9 c c c c . . 
        . . . f c c c f d d f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f d f f f f c c f 
        . f f f d d f f f f f f f 
        . . f f d d f b f d d f f 
        . . f f d d f 1 d d d f . 
        . . . f d d d d d f f f . 
        . . . f f d c c c c f . . 
        . . . f 9 9 c c c c f . . 
        . . f f c c f d d f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f d f f f f c c f 
        . f f f d d f f f f f f f 
        . f f f d d f b f d d f f 
        . . f f d d f 1 d d d f f 
        . . . f d d d d d f f f . 
        . . . f f d d d c c c c . 
        . . . f 9 9 9 9 c c c c . 
        . . f f c c c c f d d f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    diamondsCollected += 1
    info.changeScoreBy(1)
    tiles.setTileAt(tiles.getTileLocation(23, 17), assets.tile`myTile`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    diamondsCollected += 1
    info.changeScoreBy(1)
    tiles.setTileAt(tiles.getTileLocation(29, 16), assets.tile`myTile`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(23, 29))
    tiles.setTileAt(tiles.getTileLocation(26, 26), assets.tile`myTile16`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f d f f f f f 
        f f f f f f f d d f f f . 
        f f d d f b f d d f f f . 
        f f d d d 1 f d d f f . . 
        . f f f d d d d d f . . . 
        . f c c c d d d f f . . . 
        . f c c c 9 9 9 9 f . . . 
        . f d d f c c c c f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f d f f f f f 
        f f f f f f f d d f f f . 
        f f d d f b f d d f f . . 
        . f d d d 1 f d d f f . . 
        . f f f d d d d d f . . . 
        . . f c c c c d f f . . . 
        . . f c c c c 9 9 f . . . 
        . f f f d d f c c f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f d f f f f f 
        f f f f f f f d d f f f . 
        f f d d f b f d d f f . . 
        . f d d d 1 f d d f . . . 
        . f f f d d d d d f . . . 
        . . f d d d d d f f . . . 
        . . c c c c 9 9 9 f . . . 
        . . c c c c 9 9 9 f . . . 
        . . f d d f c c c f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    500,
    false
    )
})
function addEnemies (enemyList: Image[]) {
    for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
        enemySprite = sprites.create(enemyList._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(enemySprite, value)
        enemySprite.setVelocity(75, 0)
        enemySprite.setBounceOnWall(true)
    }
    if (diamondsCollected == 3) {
        tiles.setTileAt(tiles.getTileLocation(30, 18), assets.tile`myTile15`)
        tiles.setTileAt(tiles.getTileLocation(4, 30), assets.tile`myTile13`)
        tiles.setTileAt(tiles.getTileLocation(26, 26), assets.tile`myTile18`)
        tiles.setTileAt(tiles.getTileLocation(3, 16), assets.tile`myTile19`)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f d d f f c c . 
        f f f f f d d f f c c f . 
        f f f b f d d f b f f f . 
        . f d 1 f d d f 1 d f . . 
        . f d d d d d d d d f . . 
        . f f f d d d d f f f . . 
        . c c c 9 c c 9 c c c . . 
        . d d 9 9 9 9 9 9 d d . . 
        . d d c c c c c c d d . . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        f f f f f f f c c f f f c 
        f f f f c f f f f f f f c 
        . c c c f f f d d f f c c 
        . f f f f f d d f f c c f 
        . f f f b f d d f b f f f 
        . f f d 1 f d d f 1 d f f 
        . . f d d d d d d c c f d 
        . c c f 9 9 9 9 b d d d d 
        . d d f 9 9 9 9 b d d b . 
        . . . f c c c c c b b b . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f c f f f f f f . . 
        c f f f c c f f f f f f f 
        c f f f f f f f c f f f f 
        c c f f d d f f f c c c . 
        f c c f f d d f f f f f . 
        f f f b f d d f b f f f . 
        f f d 1 f d d f 1 d f f . 
        b f c c d d d d d d f . . 
        b d d d b 9 9 9 9 f c c . 
        . b d d b 9 9 9 9 f d d . 
        . . b b c c c c c f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    diamondsCollected += 1
    info.changeScoreBy(1)
    tiles.setTileAt(tiles.getTileLocation(17, 13), assets.tile`myTile`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    diamondsCollected += 1
    info.changeScoreBy(1)
    tiles.setTileAt(tiles.getTileLocation(24, 30), assets.tile`myTile`)
})
info.onScore(3, function () {
    addEnemies(list)
})
info.onScore(6, function () {
    game.splash("You collected all the diamonds!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
})
let enemySprite: Sprite = null
let list: Image[] = []
let diamondsCollected = 0
let mySprite: Sprite = null
// Used tiles provided by Makecode Arcade
tiles.setCurrentTilemap(tilemap`level`)
game.showLongText("Collect all the colored diamonds, watch out for teleporters, and some striped diamonds can cause you to lose.  ", DialogLayout.Center)
info.setLife(3)
info.setScore(0)
// Used sprite provided by Makecode Arcade, but edited the sprite.
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f a f f f . . 
    f f f f f f a a f f f a . 
    f f f a f f f f f f f a . 
    a a a f f f f f f f a a . 
    f f f f f d f f f a a f . 
    f f f b f d d f b f f f . 
    . f d 1 f d d f 1 d f . . 
    . f 3 d d d d d d 3 f . . 
    . f f d d d d d d f f . . 
    . c c c 9 c c 9 c c c . . 
    . d d 9 9 9 9 9 9 d d . . 
    . d d c c c c c c d d . . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 2))
controller.moveSprite(mySprite, 100, 70)
diamondsCollected = 0
tiles.setTileAt(tiles.getTileLocation(30, 2), assets.tile`myTile1`)
tiles.setTileAt(tiles.getTileLocation(17, 13), assets.tile`myTile2`)
tiles.setTileAt(tiles.getTileLocation(29, 16), assets.tile`myTile3`)
tiles.setTileAt(tiles.getTileLocation(3, 22), assets.tile`myTile4`)
tiles.setTileAt(tiles.getTileLocation(24, 30), assets.tile`myTile5`)
tiles.setTileAt(tiles.getTileLocation(23, 17), assets.tile`myTile9`)
scene.cameraFollowSprite(mySprite)
list = [
img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `,
img`
    ...................cc...
    ...............cccc86c..
    ..............c866668c..
    ..........cc.c8cc66668c.
    .........cbbc8cbbc66666c
    .........1fbc8cb1f66666c
    .........ffbc8cbff8666cc
    .........cbb6c6bbc8888cc
    ..........cbb6bbc666666c
    .........ccbbbbbccc6666c
    ........cbb8bbb8cbbc66c.
    ........cb8c8888ccbccc..
    ........c8bbc8cbbb8c8bc.
    ........cbbbc8cbbbc8cbc.
    ........cbbbbcbbbbc8cbc.
    .........ccccccccc..ccc.
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f f f . . . . . . . . . 
    f f 5 5 5 5 f f . . . . . . . . 
    f 5 5 5 5 5 5 f . . . . . . . . 
    f 5 f 1 5 f 1 f f f . . . . . . 
    f 5 5 5 5 5 5 2 4 f f f . . . . 
    f f f 5 5 5 2 4 2 5 5 f . . . . 
    . f 5 5 5 2 4 2 5 5 5 f f . . . 
    . f 5 2 2 4 2 5 5 5 5 2 f f f . 
    . f f f 4 2 5 5 5 5 2 4 4 2 f f 
    . f f f f f f f 2 2 4 4 2 5 5 f 
    . . . . . . f f f 4 4 2 5 5 5 f 
    . . . . . . . . f f f f f f f f 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . c c c c c 
    . . . . . . . . . c c 7 7 7 6 c 
    . . . . . . . . c c 7 7 7 c c . 
    . . . . . . . . c 6 7 7 c . . . 
    . . . . . . . . c 6 6 6 c . . . 
    . . . . . . . . c 6 6 6 c c . . 
    . . . c c c c c c c 6 6 6 c c . 
    . . c 6 7 7 7 7 6 c c 6 6 6 c . 
    . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
    c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
    c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
    f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
    f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
    . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
    . c 1 c f f 1 c 7 6 f 6 6 c c . 
    . c c c c c c c c c c c c . . . 
    `
]
if (info.life() == 0) {
    game.splash("You lost, try again!")
}
addEnemies(list)
