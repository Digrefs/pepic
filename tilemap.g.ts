// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101020202020201020202020201020102010101010102010201010102010201020101020201020202010201020102010201010202010201010102010201010102010102010102010202020102020202020101020202020101020101010101010101010101010201020201020201010102030102020202010201010202010101020101020101010102010202020201010201010201020202020102010101010102010102010101010201020102020201020101020202020202010201020102010201010201010101010102010101020102010102020202020202020202020202020101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . 2 . . . . . 2 . 2 . 2 
2 2 2 2 . 2 . 2 2 2 . 2 . 2 . 2 
2 . . 2 . . . 2 . 2 . 2 . 2 . 2 
2 . . 2 . 2 2 2 . 2 . 2 2 2 . 2 
2 . 2 2 . 2 . . . 2 . . . . . 2 
2 . . . . 2 2 . 2 2 2 2 2 2 2 2 
2 2 2 2 . 2 . . 2 . . 2 2 2 . . 
2 . . . . 2 . 2 2 . . 2 2 2 . 2 
2 . 2 2 2 2 . 2 . . . . 2 2 . 2 
2 . 2 . . . . 2 . 2 2 2 2 2 . 2 
2 . 2 2 2 2 . 2 . 2 . . . 2 . 2 
2 . . . . . . 2 . 2 . 2 . 2 . 2 
2 . 2 2 2 2 2 2 . 2 2 2 . 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.hazardLava0,sprites.dungeon.floorLightMoss,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
