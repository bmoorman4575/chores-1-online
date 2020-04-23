gdjs.player_47_32scorebordCode = {};
gdjs.player_47_32scorebordCode.GDplayerObjects1= [];
gdjs.player_47_32scorebordCode.GDplayerObjects2= [];
gdjs.player_47_32scorebordCode.GDbarrierObjects1= [];
gdjs.player_47_32scorebordCode.GDbarrierObjects2= [];
gdjs.player_47_32scorebordCode.GDtoolbarObjects1= [];
gdjs.player_47_32scorebordCode.GDtoolbarObjects2= [];
gdjs.player_47_32scorebordCode.GDtoolbar_95trashObjects1= [];
gdjs.player_47_32scorebordCode.GDtoolbar_95trashObjects2= [];

gdjs.player_47_32scorebordCode.conditionTrue_0 = {val:false};
gdjs.player_47_32scorebordCode.condition0IsTrue_0 = {val:false};
gdjs.player_47_32scorebordCode.condition1IsTrue_0 = {val:false};
gdjs.player_47_32scorebordCode.condition2IsTrue_0 = {val:false};


gdjs.player_47_32scorebordCode.mapOfGDgdjs_46player_9547_9532scorebordCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.player_47_32scorebordCode.GDplayerObjects1});gdjs.player_47_32scorebordCode.mapOfGDgdjs_46player_9547_9532scorebordCode_46GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.player_47_32scorebordCode.GDbarrierObjects1});gdjs.player_47_32scorebordCode.mapOfGDgdjs_46player_9547_9532scorebordCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.player_47_32scorebordCode.GDplayerObjects1});gdjs.player_47_32scorebordCode.mapOfGDgdjs_46player_9547_9532scorebordCode_46GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.player_47_32scorebordCode.GDbarrierObjects1});gdjs.player_47_32scorebordCode.mapOfGDgdjs_46player_9547_9532scorebordCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.player_47_32scorebordCode.GDplayerObjects1});gdjs.player_47_32scorebordCode.mapOfGDgdjs_46player_9547_9532scorebordCode_46GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.player_47_32scorebordCode.GDbarrierObjects1});gdjs.player_47_32scorebordCode.mapOfGDgdjs_46player_9547_9532scorebordCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.player_47_32scorebordCode.GDplayerObjects1});gdjs.player_47_32scorebordCode.mapOfGDgdjs_46player_9547_9532scorebordCode_46GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.player_47_32scorebordCode.GDbarrierObjects1});gdjs.player_47_32scorebordCode.eventsList0x5b7028 = function(runtimeScene) {

{



}


{

gdjs.player_47_32scorebordCode.GDbarrierObjects1.createFrom(runtimeScene.getObjects("barrier"));
gdjs.player_47_32scorebordCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = false;
gdjs.player_47_32scorebordCode.condition1IsTrue_0.val = false;
{
gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.player_47_32scorebordCode.condition0IsTrue_0.val ) {
{
gdjs.player_47_32scorebordCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.player_47_32scorebordCode.mapOfGDgdjs_46player_9547_9532scorebordCode_46GDplayerObjects1Objects, gdjs.player_47_32scorebordCode.mapOfGDgdjs_46player_9547_9532scorebordCode_46GDbarrierObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.player_47_32scorebordCode.condition1IsTrue_0.val) {
/* Reuse gdjs.player_47_32scorebordCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDplayerObjects1[i].addForce(-(200), 0, 0);
}
}}

}


{


gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = false;
{
gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if (gdjs.player_47_32scorebordCode.condition0IsTrue_0.val) {
gdjs.player_47_32scorebordCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDplayerObjects1[i].setAnimationName("right_idle");
}
}}

}


{


gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = false;
{
gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.player_47_32scorebordCode.condition0IsTrue_0.val) {
gdjs.player_47_32scorebordCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDplayerObjects1[i].setAnimationName("right");
}
}}

}


{

gdjs.player_47_32scorebordCode.GDbarrierObjects1.createFrom(runtimeScene.getObjects("barrier"));
gdjs.player_47_32scorebordCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = false;
gdjs.player_47_32scorebordCode.condition1IsTrue_0.val = false;
{
gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.player_47_32scorebordCode.condition0IsTrue_0.val ) {
{
gdjs.player_47_32scorebordCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.player_47_32scorebordCode.mapOfGDgdjs_46player_9547_9532scorebordCode_46GDplayerObjects1Objects, gdjs.player_47_32scorebordCode.mapOfGDgdjs_46player_9547_9532scorebordCode_46GDbarrierObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.player_47_32scorebordCode.condition1IsTrue_0.val) {
/* Reuse gdjs.player_47_32scorebordCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDplayerObjects1[i].addForce(200, 0, 0);
}
}}

}


{


gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = false;
{
gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if (gdjs.player_47_32scorebordCode.condition0IsTrue_0.val) {
gdjs.player_47_32scorebordCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDplayerObjects1[i].setAnimationName("left_idle");
}
}}

}


{


gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = false;
{
gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.player_47_32scorebordCode.condition0IsTrue_0.val) {
gdjs.player_47_32scorebordCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDplayerObjects1[i].setAnimationName("left");
}
}}

}


{

gdjs.player_47_32scorebordCode.GDbarrierObjects1.createFrom(runtimeScene.getObjects("barrier"));
gdjs.player_47_32scorebordCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = false;
gdjs.player_47_32scorebordCode.condition1IsTrue_0.val = false;
{
gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.player_47_32scorebordCode.condition0IsTrue_0.val ) {
{
gdjs.player_47_32scorebordCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.player_47_32scorebordCode.mapOfGDgdjs_46player_9547_9532scorebordCode_46GDplayerObjects1Objects, gdjs.player_47_32scorebordCode.mapOfGDgdjs_46player_9547_9532scorebordCode_46GDbarrierObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.player_47_32scorebordCode.condition1IsTrue_0.val) {
/* Reuse gdjs.player_47_32scorebordCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDplayerObjects1[i].addForce(0, 200, 0);
}
}}

}


{


gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = false;
{
gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if (gdjs.player_47_32scorebordCode.condition0IsTrue_0.val) {
gdjs.player_47_32scorebordCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDplayerObjects1[i].setAnimationName("up_idle");
}
}}

}


{


gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = false;
{
gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.player_47_32scorebordCode.condition0IsTrue_0.val) {
gdjs.player_47_32scorebordCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDplayerObjects1[i].setAnimationName("up");
}
}}

}


{

gdjs.player_47_32scorebordCode.GDbarrierObjects1.createFrom(runtimeScene.getObjects("barrier"));
gdjs.player_47_32scorebordCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = false;
gdjs.player_47_32scorebordCode.condition1IsTrue_0.val = false;
{
gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.player_47_32scorebordCode.condition0IsTrue_0.val ) {
{
gdjs.player_47_32scorebordCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.player_47_32scorebordCode.mapOfGDgdjs_46player_9547_9532scorebordCode_46GDplayerObjects1Objects, gdjs.player_47_32scorebordCode.mapOfGDgdjs_46player_9547_9532scorebordCode_46GDbarrierObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.player_47_32scorebordCode.condition1IsTrue_0.val) {
/* Reuse gdjs.player_47_32scorebordCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDplayerObjects1[i].addForce(0, -(200), 0);
}
}}

}


{


gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = false;
{
gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if (gdjs.player_47_32scorebordCode.condition0IsTrue_0.val) {
gdjs.player_47_32scorebordCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDplayerObjects1[i].setAnimationName("down_idle");
}
}}

}


{


gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = false;
{
gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.player_47_32scorebordCode.condition0IsTrue_0.val) {
gdjs.player_47_32scorebordCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDplayerObjects1[i].setAnimationName("down");
}
}}

}


{


gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = false;
{
gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.player_47_32scorebordCode.condition0IsTrue_0.val) {
gdjs.player_47_32scorebordCode.GDtoolbarObjects1.createFrom(runtimeScene.getObjects("toolbar"));
gdjs.player_47_32scorebordCode.GDtoolbar_95trashObjects1.createFrom(runtimeScene.getObjects("toolbar_trash"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cooldown");
}{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDtoolbarObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDtoolbarObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDtoolbar_95trashObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDtoolbar_95trashObjects1[i].hide();
}
}}

}


{


gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = false;
{
gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if (gdjs.player_47_32scorebordCode.condition0IsTrue_0.val) {
gdjs.player_47_32scorebordCode.GDtoolbarObjects1.createFrom(runtimeScene.getObjects("toolbar"));
{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDtoolbarObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDtoolbarObjects1[i].hide(false);
}
}}

}


{


gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = false;
{
gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
}if (gdjs.player_47_32scorebordCode.condition0IsTrue_0.val) {
gdjs.player_47_32scorebordCode.GDtoolbarObjects1.createFrom(runtimeScene.getObjects("toolbar"));
{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDtoolbarObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDtoolbarObjects1[i].hide();
}
}}

}


{


gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = false;
gdjs.player_47_32scorebordCode.condition1IsTrue_0.val = false;
{
gdjs.player_47_32scorebordCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if ( gdjs.player_47_32scorebordCode.condition0IsTrue_0.val ) {
{
gdjs.player_47_32scorebordCode.condition1IsTrue_0.val = gdjs.evtTools.inventory.has(runtimeScene, "player", "trash");
}}
if (gdjs.player_47_32scorebordCode.condition1IsTrue_0.val) {
gdjs.player_47_32scorebordCode.GDtoolbar_95trashObjects1.createFrom(runtimeScene.getObjects("toolbar_trash"));
{for(var i = 0, len = gdjs.player_47_32scorebordCode.GDtoolbar_95trashObjects1.length ;i < len;++i) {
    gdjs.player_47_32scorebordCode.GDtoolbar_95trashObjects1[i].hide(false);
}
}}

}


}; //End of gdjs.player_47_32scorebordCode.eventsList0x5b7028


gdjs.player_47_32scorebordCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.player_47_32scorebordCode.GDplayerObjects1.length = 0;
gdjs.player_47_32scorebordCode.GDplayerObjects2.length = 0;
gdjs.player_47_32scorebordCode.GDbarrierObjects1.length = 0;
gdjs.player_47_32scorebordCode.GDbarrierObjects2.length = 0;
gdjs.player_47_32scorebordCode.GDtoolbarObjects1.length = 0;
gdjs.player_47_32scorebordCode.GDtoolbarObjects2.length = 0;
gdjs.player_47_32scorebordCode.GDtoolbar_95trashObjects1.length = 0;
gdjs.player_47_32scorebordCode.GDtoolbar_95trashObjects2.length = 0;

gdjs.player_47_32scorebordCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['player_47_32scorebordCode'] = gdjs.player_47_32scorebordCode;
