namespace SpriteKind {
    export const diamond = SpriteKind.create()
}
// Used tile provided by MakeCode Arcade, but added a drawing to the tile. 
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    diamondsCollected += 1
    info.changeScoreBy(1)
    // Used tile provided by MakeCode Arcade.
    tiles.setTileAt(tiles.getTileLocation(30, 2), assets.tile`myTile`)
})
// Used tile provided by MakeCode Arcade, but added a drawing to the tile. 
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(27, 11))
    // Used tile provided by MakeCode Arcade.
    tiles.setTileAt(tiles.getTileLocation(15, 20), assets.tile`myTile16`)
})
// Used sprite provided by MakeCode Arcade, but edited the sprite.
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
// Used tile provided by MakeCode Arcade, but added a drawing to the tile. 
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    info.changeLifeBy(-1)
    // Used tile provided by MakeCode Arcade. 
    tiles.setTileAt(tiles.getTileLocation(17, 27), assets.tile`myTile`)
})
// Used tile provided by MakeCode Arcade, but added a drawing in tile. 
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    info.setLife(-1)
    // Used tile provided by MakeCode Arcade. 
    tiles.setTileAt(tiles.getTileLocation(19, 23), assets.tile`myTile16`)
})
// Used tile provided by MakeCode Arcade, but added a drawing to the tile. 
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    diamondsCollected += 1
    info.changeScoreBy(1)
    // Used tile provided by MakeCode Arcade. 
    tiles.setTileAt(tiles.getTileLocation(3, 22), assets.tile`myTile`)
})
// Used sprite provided by MakeCode Arcade, but edited the sprite.
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
// Used tile provided by MakeCode Arcade, but added a drawing to the tile. 
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    diamondsCollected += 1
    info.changeScoreBy(1)
    // Used tile provided by MakeCode Arcade. 
    tiles.setTileAt(tiles.getTileLocation(1, 28), assets.tile`myTile`)
})
// Used tile provided by MakeCode Arcade, but added a drawing  to the tile.
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    diamondsCollected += 1
    info.changeScoreBy(1)
    // Used tile provided by MakeCode Arcade. 
    tiles.setTileAt(tiles.getTileLocation(29, 16), assets.tile`myTile`)
})
// Used tile provided by MakeCode Arcade, but added a drawing on the tile. 
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 28))
    // Used tile provided by MakeCode Arcade.
    tiles.setTileAt(tiles.getTileLocation(33, 25), assets.tile`myTile16`)
})
// Used sprite provided by MakeCode Arcade, but edited the sprite.
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
    // Used the tile provided by MakeCode Arcade, but edited the tile. 
    for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
        enemySprite = sprites.create(enemyList._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(enemySprite, value)
        enemySprite.setVelocity(75, 0)
        enemySprite.setBounceOnWall(true)
    }
    if (diamondsCollected == 3) {
        // Used tile provided by MakeCode Arcade, but added a drawing to the tile. 
        tiles.setTileAt(tiles.getTileLocation(17, 27), assets.tile`myTile15`)
        // Used tile provided by MakeCode Arcade, but added a drawing to the tile.
        tiles.setTileAt(tiles.getTileLocation(19, 23), assets.tile`myTile13`)
        // Used tile provided by MakeCode Arcade, but added a drawing  to the tile. 
        tiles.setTileAt(tiles.getTileLocation(33, 25), assets.tile`myTile18`)
        // Used tile provided by MakeCode Arcade, but added a drawing to the tile. 
        tiles.setTileAt(tiles.getTileLocation(15, 20), assets.tile`myTile19`)
    }
}
// Used sprite provided by MakeCode Arcade, but edited the sprite.
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
// Used tile provided by MakeCode Arcade, but added a drawing to the tile. 
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    diamondsCollected += 1
    info.changeScoreBy(1)
    // Used tile provided by MakeCode Arcade. 
    tiles.setTileAt(tiles.getTileLocation(7, 14), assets.tile`myTile`)
})
// Used tile provided by MakeCode Arcade, but added a drawing to the tile. 
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    diamondsCollected += 1
    info.changeScoreBy(1)
    // Used tile provided by MakeCode Arcade. 
    tiles.setTileAt(tiles.getTileLocation(23, 30), assets.tile`myTile`)
})
info.onScore(3, function () {
    addEnemies(list)
})
info.onScore(6, function () {
    game.splash("You win, you collected all the diamonds!")
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
})
let enemySprite: Sprite = null
let list: Image[] = []
let diamondsCollected = 0
let mySprite: Sprite = null
// Used tiles provided by MakeCode Arcade.
tiles.setCurrentTilemap(tilemap`level`)
game.showLongText("Collect all the colored diamonds, watch out for teleporters, and some diamonds can caused you to lose a life.", DialogLayout.Center)
info.setLife(3)
info.setScore(0)
// Used sprite provided by MakeCode Arcade, but edited the sprite.
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
controller.moveSprite(mySprite, 120, 100)
diamondsCollected = 0
// Used tile provided by MakeCode Arcade, but added a drawing to the tile.
tiles.setTileAt(tiles.getTileLocation(30, 2), assets.tile`myTile1`)
// Used tile by MakeCode Arcade, but added a drawing to the tile. 
tiles.setTileAt(tiles.getTileLocation(7, 14), assets.tile`myTile2`)
// Used tile provided by MakeCode Arcade, but added a drawing to the tile. 
tiles.setTileAt(tiles.getTileLocation(29, 16), assets.tile`myTile3`)
// Used tile provided by MakeCode Arcade, but added a drawing to the tile. 
tiles.setTileAt(tiles.getTileLocation(3, 22), assets.tile`myTile4`)
// Used tile provided by MakeCode Arcade, but added a drawing to the tile. 
tiles.setTileAt(tiles.getTileLocation(23, 30), assets.tile`myTile5`)
// Used tile provided by Makecode Arcade, but added a drawing to the tile.
tiles.setTileAt(tiles.getTileLocation(1, 28), assets.tile`myTile9`)
scene.cameraFollowSprite(mySprite)
// Used the first two sprites provided by MakeCode Arcade, and edited the colors of  the fourth sprite  that was provided by MakeCode Arcade. 
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
    `
]
addEnemies(list)
if (info.life() == 0) {
    game.splash("You lost, try again!")
}
