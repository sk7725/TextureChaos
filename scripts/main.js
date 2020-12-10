if(!Vars.headless){
Events.on(EventType.WorldLoadEvent, () => {
function swap(a, b){
if(a.size != b.size || !(a.region instanceof TextureRegion) || !(b.region instanceof TextureRegion) || a.name.indexOf("build") == 0 || b.name.indexOf("build") == 0) return;
if(a.region.width != b.region.width || a.region.height != b.region.height) return;
var c = new TextureRegion(a.region);
a.region.set(b.region.u, b.region.v, b.region.u2, b.region.v2);
a.region.texture = b.region.texture;
b.region.set(c.u, c.v, c.u2, c.v2);
b.region.texture = c.texture;
c = null;
  a.icon(Cicon.medium).set(a.region);
b.icon(Cicon.medium).set(b.region);
}

//swap(Blocks.copperWall, Blocks.router);

var blocks = Vars.content.blocks();

for(var i=1; i<=16; i++){
var seq1 = blocks.copy();
seq1.eachFilter(b => b.size != i || (b instanceof Floor));
//print(seq1.size);
var seq2 = seq1.copy();
seq2.shuffle();
//print(seq2.size);
for(var j = 0; j < seq1.size; j++){
/*if(seq1.items[j].name == "core-nucleus"){
print(i + ", " + j);
print(seq1);
print(seq2);
print(seq1.items[j]);
print(seq2.items[j]);
}*/
swap(seq1.items[j], seq2.items[j]);
}
}

var seq1 = blocks.copy();
seq1.eachFilter(b => !(b instanceof Floor));
var seq2 = seq1.copy();

for(var j = 0; j < seq1.size; j++){
swap(seq1.items[j], seq2.items[j]);
}
});
}
