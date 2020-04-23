gdjs.outsidebackCode = {};
gdjs.outsidebackCode.GDplayerObjects1= [];
gdjs.outsidebackCode.GDplayerObjects2= [];
gdjs.outsidebackCode.GDbarrierObjects1= [];
gdjs.outsidebackCode.GDbarrierObjects2= [];
gdjs.outsidebackCode.GDtoolbarObjects1= [];
gdjs.outsidebackCode.GDtoolbarObjects2= [];
gdjs.outsidebackCode.GDtrashbucketObjects1= [];
gdjs.outsidebackCode.GDtrashbucketObjects2= [];
gdjs.outsidebackCode.GDhouseObjects1= [];
gdjs.outsidebackCode.GDhouseObjects2= [];
gdjs.outsidebackCode.GDNewObjectObjects1= [];
gdjs.outsidebackCode.GDNewObjectObjects2= [];
gdjs.outsidebackCode.GDgrassObjects1= [];
gdjs.outsidebackCode.GDgrassObjects2= [];

gdjs.outsidebackCode.conditionTrue_0 = {val:false};
gdjs.outsidebackCode.condition0IsTrue_0 = {val:false};
gdjs.outsidebackCode.condition1IsTrue_0 = {val:false};
gdjs.outsidebackCode.condition2IsTrue_0 = {val:false};
gdjs.outsidebackCode.condition3IsTrue_0 = {val:false};
gdjs.outsidebackCode.condition4IsTrue_0 = {val:false};
gdjs.outsidebackCode.condition5IsTrue_0 = {val:false};


gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.outsidebackCode.GDplayerObjects1});gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDtrashbucketObjects1Objects = Hashtable.newFrom({"trashbucket": gdjs.outsidebackCode.GDtrashbucketObjects1});gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.outsidebackCode.GDplayerObjects1});gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDtrashbucketObjects1Objects = Hashtable.newFrom({"trashbucket": gdjs.outsidebackCode.GDtrashbucketObjects1});gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.outsidebackCode.GDplayerObjects1});gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.outsidebackCode.GDNewObjectObjects1});gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.outsidebackCode.GDplayerObjects1});gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.outsidebackCode.GDbarrierObjects1});gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.outsidebackCode.GDplayerObjects1});gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.outsidebackCode.GDbarrierObjects1});gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.outsidebackCode.GDplayerObjects1});gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.outsidebackCode.GDbarrierObjects1});gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.outsidebackCode.GDplayerObjects1});gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.outsidebackCode.GDbarrierObjects1});gdjs.outsidebackCode.eventsList0x5b7028 = function(runtimeScene) {

{

gdjs.outsidebackCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.outsidebackCode.GDtrashbucketObjects1.createFrom(runtimeScene.getObjects("trashbucket"));

gdjs.outsidebackCode.condition0IsTrue_0.val = false;
gdjs.outsidebackCode.condition1IsTrue_0.val = false;
gdjs.outsidebackCode.condition2IsTrue_0.val = false;
gdjs.outsidebackCode.condition3IsTrue_0.val = false;
gdjs.outsidebackCode.condition4IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDplayerObjects1Objects, gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDtrashbucketObjects1Objects, false, runtimeScene, false);
}if ( gdjs.outsidebackCode.condition0IsTrue_0.val ) {
{
gdjs.outsidebackCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "g");
}if ( gdjs.outsidebackCode.condition1IsTrue_0.val ) {
{
gdjs.outsidebackCode.condition2IsTrue_0.val = gdjs.evtTools.inventory.has(runtimeScene, "player", "trash");
}if ( gdjs.outsidebackCode.condition2IsTrue_0.val ) {
{
gdjs.outsidebackCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if ( gdjs.outsidebackCode.condition3IsTrue_0.val ) {
{
gdjs.outsidebackCode.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
}
}
}
if (gdjs.outsidebackCode.condition4IsTrue_0.val) {
/* Reuse gdjs.outsidebackCode.GDtrashbucketObjects1 */
{gdjs.evtTools.inventory.remove(runtimeScene, "player", "trash");
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "y a y.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.outsidebackCode.GDtrashbucketObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDtrashbucketObjects1[i].setAnimationName("trashin");
}
}}

}


{

gdjs.outsidebackCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.outsidebackCode.GDtrashbucketObjects1.createFrom(runtimeScene.getObjects("trashbucket"));

gdjs.outsidebackCode.condition0IsTrue_0.val = false;
gdjs.outsidebackCode.condition1IsTrue_0.val = false;
gdjs.outsidebackCode.condition2IsTrue_0.val = false;
gdjs.outsidebackCode.condition3IsTrue_0.val = false;
gdjs.outsidebackCode.condition4IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDplayerObjects1Objects, gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDtrashbucketObjects1Objects, false, runtimeScene, false);
}if ( gdjs.outsidebackCode.condition0IsTrue_0.val ) {
{
gdjs.outsidebackCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "g");
}if ( gdjs.outsidebackCode.condition1IsTrue_0.val ) {
{
gdjs.outsidebackCode.condition2IsTrue_0.val = gdjs.evtTools.inventory.has(runtimeScene, "player", "trash");
}if ( gdjs.outsidebackCode.condition2IsTrue_0.val ) {
{
gdjs.outsidebackCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if ( gdjs.outsidebackCode.condition3IsTrue_0.val ) {
{
gdjs.outsidebackCode.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}}
}
}
}
if (gdjs.outsidebackCode.condition4IsTrue_0.val) {
/* Reuse gdjs.outsidebackCode.GDtrashbucketObjects1 */
{gdjs.evtTools.inventory.remove(runtimeScene, "player", "trash");
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "y a y.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.outsidebackCode.GDtrashbucketObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDtrashbucketObjects1[i].setAnimationName("trashin");
}
}{gdjs.evtsExt__Gamejolt__ArchieveTrophy.func(runtimeScene, 120046, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.outsidebackCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
gdjs.outsidebackCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.outsidebackCode.condition0IsTrue_0.val = false;
gdjs.outsidebackCode.condition1IsTrue_0.val = false;
gdjs.outsidebackCode.condition2IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDplayerObjects1Objects, gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDNewObjectObjects1Objects, false, runtimeScene, false);
}if ( gdjs.outsidebackCode.condition0IsTrue_0.val ) {
{
gdjs.outsidebackCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "g");
}if ( gdjs.outsidebackCode.condition1IsTrue_0.val ) {
{
gdjs.outsidebackCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "cooldown");
}}
}
if (gdjs.outsidebackCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "kithen", false);
}}

}


{



}


{

gdjs.outsidebackCode.GDbarrierObjects1.createFrom(runtimeScene.getObjects("barrier"));
gdjs.outsidebackCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.outsidebackCode.condition0IsTrue_0.val = false;
gdjs.outsidebackCode.condition1IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.outsidebackCode.condition0IsTrue_0.val ) {
{
gdjs.outsidebackCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDplayerObjects1Objects, gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDbarrierObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.outsidebackCode.condition1IsTrue_0.val) {
/* Reuse gdjs.outsidebackCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.outsidebackCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDplayerObjects1[i].addForce(-(200), 0, 0);
}
}}

}


{


gdjs.outsidebackCode.condition0IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if (gdjs.outsidebackCode.condition0IsTrue_0.val) {
gdjs.outsidebackCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.outsidebackCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDplayerObjects1[i].setAnimationName("right_idle");
}
}}

}


{


gdjs.outsidebackCode.condition0IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.outsidebackCode.condition0IsTrue_0.val) {
gdjs.outsidebackCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.outsidebackCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDplayerObjects1[i].setAnimationName("right");
}
}}

}


{

gdjs.outsidebackCode.GDbarrierObjects1.createFrom(runtimeScene.getObjects("barrier"));
gdjs.outsidebackCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.outsidebackCode.condition0IsTrue_0.val = false;
gdjs.outsidebackCode.condition1IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.outsidebackCode.condition0IsTrue_0.val ) {
{
gdjs.outsidebackCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDplayerObjects1Objects, gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDbarrierObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.outsidebackCode.condition1IsTrue_0.val) {
/* Reuse gdjs.outsidebackCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.outsidebackCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDplayerObjects1[i].addForce(200, 0, 0);
}
}}

}


{


gdjs.outsidebackCode.condition0IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if (gdjs.outsidebackCode.condition0IsTrue_0.val) {
gdjs.outsidebackCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.outsidebackCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDplayerObjects1[i].setAnimationName("left_idle");
}
}}

}


{


gdjs.outsidebackCode.condition0IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.outsidebackCode.condition0IsTrue_0.val) {
gdjs.outsidebackCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.outsidebackCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDplayerObjects1[i].setAnimationName("left");
}
}}

}


{

gdjs.outsidebackCode.GDbarrierObjects1.createFrom(runtimeScene.getObjects("barrier"));
gdjs.outsidebackCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.outsidebackCode.condition0IsTrue_0.val = false;
gdjs.outsidebackCode.condition1IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.outsidebackCode.condition0IsTrue_0.val ) {
{
gdjs.outsidebackCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDplayerObjects1Objects, gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDbarrierObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.outsidebackCode.condition1IsTrue_0.val) {
/* Reuse gdjs.outsidebackCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.outsidebackCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDplayerObjects1[i].addForce(0, 200, 0);
}
}}

}


{


gdjs.outsidebackCode.condition0IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if (gdjs.outsidebackCode.condition0IsTrue_0.val) {
gdjs.outsidebackCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.outsidebackCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDplayerObjects1[i].setAnimationName("up_idle");
}
}}

}


{


gdjs.outsidebackCode.condition0IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.outsidebackCode.condition0IsTrue_0.val) {
gdjs.outsidebackCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.outsidebackCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDplayerObjects1[i].setAnimationName("up");
}
}}

}


{

gdjs.outsidebackCode.GDbarrierObjects1.createFrom(runtimeScene.getObjects("barrier"));
gdjs.outsidebackCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.outsidebackCode.condition0IsTrue_0.val = false;
gdjs.outsidebackCode.condition1IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.outsidebackCode.condition0IsTrue_0.val ) {
{
gdjs.outsidebackCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDplayerObjects1Objects, gdjs.outsidebackCode.mapOfGDgdjs_46outsidebackCode_46GDbarrierObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.outsidebackCode.condition1IsTrue_0.val) {
/* Reuse gdjs.outsidebackCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.outsidebackCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDplayerObjects1[i].addForce(0, -(200), 0);
}
}}

}


{


gdjs.outsidebackCode.condition0IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if (gdjs.outsidebackCode.condition0IsTrue_0.val) {
gdjs.outsidebackCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.outsidebackCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDplayerObjects1[i].setAnimationName("down_idle");
}
}}

}


{


gdjs.outsidebackCode.condition0IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.outsidebackCode.condition0IsTrue_0.val) {
gdjs.outsidebackCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.outsidebackCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDplayerObjects1[i].setAnimationName("down");
}
}}

}


{


gdjs.outsidebackCode.condition0IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.outsidebackCode.condition0IsTrue_0.val) {
gdjs.outsidebackCode.GDtoolbarObjects1.createFrom(runtimeScene.getObjects("toolbar"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cooldown");
}{for(var i = 0, len = gdjs.outsidebackCode.GDtoolbarObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDtoolbarObjects1[i].hide();
}
}}

}


{


gdjs.outsidebackCode.condition0IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if (gdjs.outsidebackCode.condition0IsTrue_0.val) {
gdjs.outsidebackCode.GDtoolbarObjects1.createFrom(runtimeScene.getObjects("toolbar"));
{for(var i = 0, len = gdjs.outsidebackCode.GDtoolbarObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDtoolbarObjects1[i].hide(false);
}
}}

}


{


gdjs.outsidebackCode.condition0IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
}if (gdjs.outsidebackCode.condition0IsTrue_0.val) {
gdjs.outsidebackCode.GDtoolbarObjects1.createFrom(runtimeScene.getObjects("toolbar"));
{for(var i = 0, len = gdjs.outsidebackCode.GDtoolbarObjects1.length ;i < len;++i) {
    gdjs.outsidebackCode.GDtoolbarObjects1[i].hide();
}
}}

}


{


gdjs.outsidebackCode.condition0IsTrue_0.val = false;
gdjs.outsidebackCode.condition1IsTrue_0.val = false;
{
gdjs.outsidebackCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if ( gdjs.outsidebackCode.condition0IsTrue_0.val ) {
{
gdjs.outsidebackCode.condition1IsTrue_0.val = gdjs.evtTools.inventory.has(runtimeScene, "player", "trash");
}}
if (gdjs.outsidebackCode.condition1IsTrue_0.val) {
}

}


}; //End of gdjs.outsidebackCode.eventsList0x5b7028


gdjs.outsidebackCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.outsidebackCode.GDplayerObjects1.length = 0;
gdjs.outsidebackCode.GDplayerObjects2.length = 0;
gdjs.outsidebackCode.GDbarrierObjects1.length = 0;
gdjs.outsidebackCode.GDbarrierObjects2.length = 0;
gdjs.outsidebackCode.GDtoolbarObjects1.length = 0;
gdjs.outsidebackCode.GDtoolbarObjects2.length = 0;
gdjs.outsidebackCode.GDtrashbucketObjects1.length = 0;
gdjs.outsidebackCode.GDtrashbucketObjects2.length = 0;
gdjs.outsidebackCode.GDhouseObjects1.length = 0;
gdjs.outsidebackCode.GDhouseObjects2.length = 0;
gdjs.outsidebackCode.GDNewObjectObjects1.length = 0;
gdjs.outsidebackCode.GDNewObjectObjects2.length = 0;
gdjs.outsidebackCode.GDgrassObjects1.length = 0;
gdjs.outsidebackCode.GDgrassObjects2.length = 0;

gdjs.outsidebackCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['outsidebackCode'] = gdjs.outsidebackCode;
