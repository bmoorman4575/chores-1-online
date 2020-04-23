gdjs.roomCode = {};
gdjs.roomCode.GDplayerObjects1= [];
gdjs.roomCode.GDplayerObjects2= [];
gdjs.roomCode.GDbarrierObjects1= [];
gdjs.roomCode.GDbarrierObjects2= [];
gdjs.roomCode.GDroomObjects1= [];
gdjs.roomCode.GDroomObjects2= [];
gdjs.roomCode.GDdoorObjects1= [];
gdjs.roomCode.GDdoorObjects2= [];
gdjs.roomCode.GDsleepObjects1= [];
gdjs.roomCode.GDsleepObjects2= [];

gdjs.roomCode.conditionTrue_0 = {val:false};
gdjs.roomCode.condition0IsTrue_0 = {val:false};
gdjs.roomCode.condition1IsTrue_0 = {val:false};
gdjs.roomCode.condition2IsTrue_0 = {val:false};
gdjs.roomCode.condition3IsTrue_0 = {val:false};


gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.roomCode.GDplayerObjects1});gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.roomCode.GDbarrierObjects1});gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.roomCode.GDplayerObjects1});gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.roomCode.GDbarrierObjects1});gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.roomCode.GDplayerObjects1});gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.roomCode.GDbarrierObjects1});gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.roomCode.GDplayerObjects1});gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.roomCode.GDbarrierObjects1});gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.roomCode.GDplayerObjects1});gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.roomCode.GDdoorObjects1});gdjs.roomCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.roomCode.condition0IsTrue_0.val = false;
{
gdjs.roomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.roomCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cooldown");
}}

}


{


gdjs.roomCode.condition0IsTrue_0.val = false;
gdjs.roomCode.condition1IsTrue_0.val = false;
gdjs.roomCode.condition2IsTrue_0.val = false;
{
gdjs.roomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "g");
}if ( gdjs.roomCode.condition0IsTrue_0.val ) {
{
gdjs.roomCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if ( gdjs.roomCode.condition1IsTrue_0.val ) {
{
gdjs.roomCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}}
}
if (gdjs.roomCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ending/credits", false);
}}

}


{


gdjs.roomCode.condition0IsTrue_0.val = false;
{
gdjs.roomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.roomCode.condition0IsTrue_0.val) {
gdjs.roomCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.roomCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.roomCode.GDplayerObjects1[i].setAnimationName("down");
}
}}

}


{


gdjs.roomCode.condition0IsTrue_0.val = false;
{
gdjs.roomCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if (gdjs.roomCode.condition0IsTrue_0.val) {
gdjs.roomCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.roomCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.roomCode.GDplayerObjects1[i].setAnimationName("down_idle");
}
}}

}


{

gdjs.roomCode.GDbarrierObjects1.createFrom(runtimeScene.getObjects("barrier"));
gdjs.roomCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.roomCode.condition0IsTrue_0.val = false;
gdjs.roomCode.condition1IsTrue_0.val = false;
{
gdjs.roomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.roomCode.condition0IsTrue_0.val ) {
{
gdjs.roomCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDplayerObjects1Objects, gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDbarrierObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.roomCode.condition1IsTrue_0.val) {
/* Reuse gdjs.roomCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.roomCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.roomCode.GDplayerObjects1[i].addForce(0, -(200), 0);
}
}}

}


{


gdjs.roomCode.condition0IsTrue_0.val = false;
{
gdjs.roomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.roomCode.condition0IsTrue_0.val) {
gdjs.roomCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.roomCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.roomCode.GDplayerObjects1[i].setAnimationName("up");
}
}}

}


{


gdjs.roomCode.condition0IsTrue_0.val = false;
{
gdjs.roomCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if (gdjs.roomCode.condition0IsTrue_0.val) {
gdjs.roomCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.roomCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.roomCode.GDplayerObjects1[i].setAnimationName("up_idle");
}
}}

}


{

gdjs.roomCode.GDbarrierObjects1.createFrom(runtimeScene.getObjects("barrier"));
gdjs.roomCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.roomCode.condition0IsTrue_0.val = false;
gdjs.roomCode.condition1IsTrue_0.val = false;
{
gdjs.roomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.roomCode.condition0IsTrue_0.val ) {
{
gdjs.roomCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDplayerObjects1Objects, gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDbarrierObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.roomCode.condition1IsTrue_0.val) {
/* Reuse gdjs.roomCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.roomCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.roomCode.GDplayerObjects1[i].addForce(0, 200, 0);
}
}}

}


{


gdjs.roomCode.condition0IsTrue_0.val = false;
{
gdjs.roomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.roomCode.condition0IsTrue_0.val) {
gdjs.roomCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.roomCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.roomCode.GDplayerObjects1[i].setAnimationName("left");
}
}}

}


{


gdjs.roomCode.condition0IsTrue_0.val = false;
{
gdjs.roomCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if (gdjs.roomCode.condition0IsTrue_0.val) {
gdjs.roomCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.roomCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.roomCode.GDplayerObjects1[i].setAnimationName("left_idle");
}
}}

}


{

gdjs.roomCode.GDbarrierObjects1.createFrom(runtimeScene.getObjects("barrier"));
gdjs.roomCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.roomCode.condition0IsTrue_0.val = false;
gdjs.roomCode.condition1IsTrue_0.val = false;
{
gdjs.roomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.roomCode.condition0IsTrue_0.val ) {
{
gdjs.roomCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDplayerObjects1Objects, gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDbarrierObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.roomCode.condition1IsTrue_0.val) {
/* Reuse gdjs.roomCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.roomCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.roomCode.GDplayerObjects1[i].addForce(200, 0, 0);
}
}}

}


{


gdjs.roomCode.condition0IsTrue_0.val = false;
{
gdjs.roomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.roomCode.condition0IsTrue_0.val) {
gdjs.roomCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.roomCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.roomCode.GDplayerObjects1[i].setAnimationName("right");
}
}}

}


{


gdjs.roomCode.condition0IsTrue_0.val = false;
{
gdjs.roomCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if (gdjs.roomCode.condition0IsTrue_0.val) {
gdjs.roomCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.roomCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.roomCode.GDplayerObjects1[i].setAnimationName("right_idle");
}
}}

}


{

gdjs.roomCode.GDbarrierObjects1.createFrom(runtimeScene.getObjects("barrier"));
gdjs.roomCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.roomCode.condition0IsTrue_0.val = false;
gdjs.roomCode.condition1IsTrue_0.val = false;
{
gdjs.roomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.roomCode.condition0IsTrue_0.val ) {
{
gdjs.roomCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDplayerObjects1Objects, gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDbarrierObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.roomCode.condition1IsTrue_0.val) {
/* Reuse gdjs.roomCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.roomCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.roomCode.GDplayerObjects1[i].addForce(-(200), 0, 0);
}
}}

}


{

gdjs.roomCode.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
gdjs.roomCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.roomCode.condition0IsTrue_0.val = false;
gdjs.roomCode.condition1IsTrue_0.val = false;
gdjs.roomCode.condition2IsTrue_0.val = false;
{
gdjs.roomCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "g");
}if ( gdjs.roomCode.condition0IsTrue_0.val ) {
{
gdjs.roomCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDplayerObjects1Objects, gdjs.roomCode.mapOfGDgdjs_46roomCode_46GDdoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.roomCode.condition1IsTrue_0.val ) {
{
gdjs.roomCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "cooldown");
}}
}
if (gdjs.roomCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "house_hallway", false);
}}

}


{



}


}; //End of gdjs.roomCode.eventsList0x5b7028


gdjs.roomCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.roomCode.GDplayerObjects1.length = 0;
gdjs.roomCode.GDplayerObjects2.length = 0;
gdjs.roomCode.GDbarrierObjects1.length = 0;
gdjs.roomCode.GDbarrierObjects2.length = 0;
gdjs.roomCode.GDroomObjects1.length = 0;
gdjs.roomCode.GDroomObjects2.length = 0;
gdjs.roomCode.GDdoorObjects1.length = 0;
gdjs.roomCode.GDdoorObjects2.length = 0;
gdjs.roomCode.GDsleepObjects1.length = 0;
gdjs.roomCode.GDsleepObjects2.length = 0;

gdjs.roomCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['roomCode'] = gdjs.roomCode;
