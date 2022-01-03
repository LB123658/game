var character = document.getElementById("character");
var type = location.search.split("character=")[1];

if (type == "Red%20circle") {
  character.style.background = "#ce233f";
} else if (type == "Orange%20circle") {
  character.style.background = "orange";
} else if (type == "Yellow%20circle") {
  character.style.background = "#ffc000";
} else if (type == "Green%20circle") {
  character.style.background = "#5cf210";
} else if (type == "Blue%20circle") {
  character.style.background = "#242493";
} else if (type == "Purple%20circle") {
  character.style.background = "purple";
} else if (type == "Pink%20circle") {
  character.style.background = "pink";
} else if (type == "Grey%20circle") {
  character.style.background = "grey";
} else if (type == "Black%20circle") {
  character.style.background = "black";
} else if (type == "Purple%20circle") {
  character.style.background = "purple";
} else if (type == "Camo%20circle") {
  character.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/CADPAT_digital_camouflage_pattern_%28Temperate_Woodland_variant%29.jpg/1280px-CADPAT_digital_camouflage_pattern_%28Temperate_Woodland_variant%29.jpg')";
} else if (type == "Gold%20circle") {
  character.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.investopedia.com%2Fthmb%2FIkc8jVBEH_B_8ZpzinVwPg4E7Ok%3D%2F1500x916%2Ffilters%3Afill(auto%2C1)%2FGettyImages-1151189114-3f70002f53bb427ea2bc292832bbdfe8.jpg&f=1&nofb=1')";
} else if (type == "Grass%20circle") {
  character.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Oryza_sativa_in_Kadavoor.jpg/1280px-Oryza_sativa_in_Kadavoor.jpg')";
} else if (type == "Wood%20circle") {
  character.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fnature-structure-wood-grain-texture-plank-floor-old-barn-pattern-surface-weathered-close-up-wooden-structure-background-design-hardwood-boards-graphic-textures-material-collection-flooring-wood-grain-wood-structures-wood-flooring-washed-off-laminate-flooring-wood-stain-579001.jpg&f=1&nofb=1')";
} else if (type == "Metal%20circle") {
  character.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2Frusty-metal-1.jpg&f=1&nofb=1')";
} else if (type == "Black%20hole%20circle") {
  character.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzerofolio.com%2Fresources%2Fimages%2Fportfolio%2Fproducts%2Fexpletive-prints%2Fouter-space%2Fheader%2Fouter-space.png&f=1&nofb=1')";
} else if (type == "Fox%20circle") {
  character.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F9%2F4%2F8%2F788347-fox-wallpaper-2048x2048-for-mac.jpg&f=1&nofb=1')";
} else if (type == "Bean%20circle") {
  character.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.photos-public-domain.com%2Fwp-content%2Fuploads%2F2012%2F04%2Fpinto-beans-texture.jpg&f=1&nofb=1')";
} else if (type == "Carrot%20circle") {
  character.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jessicagavin.com%2Fwp-content%2Fuploads%2F2019%2F02%2Fcarrots-benefits-social.jpg&f=1&nofb=1')";
} else if (type == "Banana%20circle") {
  character.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rop-ltd.com%2Fwp-content%2Fuploads%2F2014%2F12%2Fbanana.jpg&f=1&nofb=1')";
} else {
  console.log("Not an available character");
}
