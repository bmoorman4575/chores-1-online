gdjs.house_95hallwayCode = {};
gdjs.house_95hallwayCode.GDplayerObjects1= [];
gdjs.house_95hallwayCode.GDplayerObjects2= [];
gdjs.house_95hallwayCode.GDtoolbarObjects1= [];
gdjs.house_95hallwayCode.GDtoolbarObjects2= [];
gdjs.house_95hallwayCode.GDhallwayObjects1= [];
gdjs.house_95hallwayCode.GDhallwayObjects2= [];
gdjs.house_95hallwayCode.GDdoorObjects1= [];
gdjs.house_95hallwayCode.GDdoorObjects2= [];
gdjs.house_95hallwayCode.GDtperObjects1= [];
gdjs.house_95hallwayCode.GDtperObjects2= [];
gdjs.house_95hallwayCode.GDbarrererObjects1= [];
gdjs.house_95hallwayCode.GDbarrererObjects2= [];
gdjs.house_95hallwayCode.GDNewObjectObjects1= [];
gdjs.house_95hallwayCode.GDNewObjectObjects2= [];

gdjs.house_95hallwayCode.conditionTrue_0 = {val:false};
gdjs.house_95hallwayCode.condition0IsTrue_0 = {val:false};
gdjs.house_95hallwayCode.condition1IsTrue_0 = {val:false};
gdjs.house_95hallwayCode.condition2IsTrue_0 = {val:false};
gdjs.house_95hallwayCode.condition3IsTrue_0 = {val:false};


gdjs.house_95hallwayCode.mapOfGDgdjs_46house_9595hallwayCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.house_95hallwayCode.GDplayerObjects1});gdjs.house_95hallwayCode.mapOfGDgdjs_46house_9595hallwayCode_46GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.house_95hallwayCode.GDdoorObjects1});gdjs.house_95hallwayCode.mapOfGDgdjs_46house_9595hallwayCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.house_95hallwayCode.GDplayerObjects1});gdjs.house_95hallwayCode.mapOfGDgdjs_46house_9595hallwayCode_46GDbarrererObjects1Objects = Hashtable.newFrom({"barrerer": gdjs.house_95hallwayCode.GDbarrererObjects1});gdjs.house_95hallwayCode.mapOfGDgdjs_46house_9595hallwayCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.house_95hallwayCode.GDplayerObjects1});gdjs.house_95hallwayCode.mapOfGDgdjs_46house_9595hallwayCode_46GDtperObjects1Objects = Hashtable.newFrom({"tper": gdjs.house_95hallwayCode.GDtperObjects1});gdjs.house_95hallwayCode.mapOfGDgdjs_46house_9595hallwayCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.house_95hallwayCode.GDplayerObjects1});gdjs.house_95hallwayCode.mapOfGDgdjs_46house_9595hallwayCode_46GDbarrererObjects1Objects = Hashtable.newFrom({"barrerer": gdjs.house_95hallwayCode.GDbarrererObjects1});gdjs.house_95hallwayCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.house_95hallwayCode.condition0IsTrue_0.val = false;
{
gdjs.house_95hallwayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.house_95hallwayCode.condition0IsTrue_0.val) {
gdjs.house_95hallwayCode.GDtoolbarObjects1.createFrom(runtimeScene.getObjects("toolbar"));
{for(var i = 0, len = gdjs.house_95hallwayCode.GDtoolbarObjects1.length ;i < len;++i) {
    gdjs.house_95hallwayCode.GDtoolbarObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "house boombox.mp3", true, 10, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "events");
}}

}


{


gdjs.house_95hallwayCode.condition0IsTrue_0.val = false;
{
gdjs.house_95hallwayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if (gdjs.house_95hallwayCode.condition0IsTrue_0.val) {
gdjs.house_95hallwayCode.GDtoolbarObjects1.createFrom(runtimeScene.getObjects("toolbar"));
{for(var i = 0, len = gdjs.house_95hallwayCode.GDtoolbarObjects1.length ;i < len;++i) {
    gdjs.house_95hallwayCode.GDtoolbarObjects1[i].hide(false);
}
}}

}


{


gdjs.house_95hallwayCode.condition0IsTrue_0.val = false;
{
gdjs.house_95hallwayCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
}if (gdjs.house_95hallwayCode.condition0IsTrue_0.val) {
gdjs.house_95hallwayCode.GDtoolbarObjects1.createFrom(runtimeScene.getObjects("toolbar"));
{for(var i = 0, len = gdjs.house_95hallwayCode.GDtoolbarObjects1.length ;i < len;++i) {
    gdjs.house_95hallwayCode.GDtoolbarObjects1[i].hide();
}
}}

}


{


gdjs.house_95hallwayCode.condition0IsTrue_0.val = false;
{
gdjs.house_95hallwayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.house_95hallwayCode.condition0IsTrue_0.val) {
gdjs.house_95hallwayCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.house_95hallwayCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.house_95hallwayCode.GDplayerObjects1[i].setAnimationName("down");
}
}}

}


{


gdjs.house_95hallwayCode.condition0IsTrue_0.val = false;
{
gdjs.house_95hallwayCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if (gdjs.house_95hallwayCode.condition0IsTrue_0.val) {
gdjs.house_95hallwayCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.house_95hallwayCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.house_95hallwayCode.GDplayerObjects1[i].setAnimationName("down_idle");
}
}}

}


{


gdjs.house_95hallwayCode.condition0IsTrue_0.val = false;
{
gdjs.house_95hallwayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.house_95hallwayCode.condition0IsTrue_0.val) {
gdjs.house_95hallwayCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.house_95hallwayCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.house_95hallwayCode.GDplayerObjects1[i].setAnimationName("up");
}
}}

}


{


gdjs.house_95hallwayCode.condition0IsTrue_0.val = false;
{
gdjs.house_95hallwayCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if (gdjs.house_95hallwayCode.condition0IsTrue_0.val) {
gdjs.house_95hallwayCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.house_95hallwayCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.house_95hallwayCode.GDplayerObjects1[i].setAnimationName("up_idle");
}
}}

}


{


gdjs.house_95hallwayCode.condition0IsTrue_0.val = false;
{
gdjs.house_95hallwayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.house_95hallwayCode.condition0IsTrue_0.val) {
gdjs.house_95hallwayCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.house_95hallwayCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.house_95hallwayCode.GDplayerObjects1[i].setAnimationName("left");
}
}{for(var i = 0, len = gdjs.house_95hallwayCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.house_95hallwayCode.GDplayerObjects1[i].addForce(-(200), 0, 0);
}
}}

}


{


gdjs.house_95hallwayCode.condition0IsTrue_0.val = false;
{
gdjs.house_95hallwayCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if (gdjs.house_95hallwayCode.condition0IsTrue_0.val) {
gdjs.house_95hallwayCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.house_95hallwayCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.house_95hallwayCode.GDplayerObjects1[i].setAnimationName("left_idle");
}
}}

}


{


gdjs.house_95hallwayCode.condition0IsTrue_0.val = false;
{
gdjs.house_95hallwayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.house_95hallwayCode.condition0IsTrue_0.val) {
gdjs.house_95hallwayCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.house_95hallwayCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.house_95hallwayCode.GDplayerObjects1[i].setAnimationName("right");
}
}{for(var i = 0, len = gdjs.house_95hallwayCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.house_95hallwayCode.GDplayerObjects1[i].addForce(200, 0, 0);
}
}}

}


{


gdjs.house_95hallwayCode.condition0IsTrue_0.val = false;
{
gdjs.house_95hallwayCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if (gdjs.house_95hallwayCode.condition0IsTrue_0.val) {
gdjs.house_95hallwayCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.house_95hallwayCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.house_95hallwayCode.GDplayerObjects1[i].setAnimationName("right_idle");
}
}}

}


{



}


{


gdjs.house_95hallwayCode.condition0IsTrue_0.val = false;
{
gdjs.house_95hallwayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "events");
}if (gdjs.house_95hallwayCode.condition0IsTrue_0.val) {
gdjs.house_95hallwayCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
{for(var i = 0, len = gdjs.house_95hallwayCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.house_95hallwayCode.GDNewObjectObjects1[i].hide();
}
}}

}


{

gdjs.house_95hallwayCode.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
gdjs.house_95hallwayCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.house_95hallwayCode.condition0IsTrue_0.val = false;
gdjs.house_95hallwayCode.condition1IsTrue_0.val = false;
gdjs.house_95hallwayCode.condition2IsTrue_0.val = false;
{
gdjs.house_95hallwayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "g");
}if ( gdjs.house_95hallwayCode.condition0IsTrue_0.val ) {
{
gdjs.house_95hallwayCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.house_95hallwayCode.mapOfGDgdjs_46house_9595hallwayCode_46GDplayerObjects1Objects, gdjs.house_95hallwayCode.mapOfGDgdjs_46house_9595hallwayCode_46GDdoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.house_95hallwayCode.condition1IsTrue_0.val ) {
{
gdjs.house_95hallwayCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "events");
}}
}
if (gdjs.house_95hallwayCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "room", false);
}}

}


{

gdjs.house_95hallwayCode.GDbarrererObjects1.createFrom(runtimeScene.getObjects("barrerer"));
gdjs.house_95hallwayCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.house_95hallwayCode.condition0IsTrue_0.val = false;
gdjs.house_95hallwayCode.condition1IsTrue_0.val = false;
{
gdjs.house_95hallwayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.house_95hallwayCode.condition0IsTrue_0.val ) {
{
gdjs.house_95hallwayCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.house_95hallwayCode.mapOfGDgdjs_46house_9595hallwayCode_46GDplayerObjects1Objects, gdjs.house_95hallwayCode.mapOfGDgdjs_46house_9595hallwayCode_46GDbarrererObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.house_95hallwayCode.condition1IsTrue_0.val) {
/* Reuse gdjs.house_95hallwayCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.house_95hallwayCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.house_95hallwayCode.GDplayerObjects1[i].addForce(200, 0, 0);
}
}}

}


{

gdjs.house_95hallwayCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.house_95hallwayCode.GDtperObjects1.createFrom(runtimeScene.getObjects("tper"));

gdjs.house_95hallwayCode.condition0IsTrue_0.val = false;
gdjs.house_95hallwayCode.condition1IsTrue_0.val = false;
{
gdjs.house_95hallwayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.house_95hallwayCode.condition0IsTrue_0.val ) {
{
gdjs.house_95hallwayCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.house_95hallwayCode.mapOfGDgdjs_46house_9595hallwayCode_46GDplayerObjects1Objects, gdjs.house_95hallwayCode.mapOfGDgdjs_46house_9595hallwayCode_46GDtperObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.house_95hallwayCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "kithen", false);
}}

}


{

gdjs.house_95hallwayCode.GDbarrererObjects1.createFrom(runtimeScene.getObjects("barrerer"));
gdjs.house_95hallwayCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.house_95hallwayCode.condition0IsTrue_0.val = false;
{
gdjs.house_95hallwayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.house_95hallwayCode.mapOfGDgdjs_46house_9595hallwayCode_46GDplayerObjects1Objects, gdjs.house_95hallwayCode.mapOfGDgdjs_46house_9595hallwayCode_46GDbarrererObjects1Objects, false, runtimeScene, false);
}if (gdjs.house_95hallwayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mom hallway not dark", false);
}}

}


}; //End of gdjs.house_95hallwayCode.eventsList0x5b7028


gdjs.house_95hallwayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.house_95hallwayCode.GDplayerObjects1.length = 0;
gdjs.house_95hallwayCode.GDplayerObjects2.length = 0;
gdjs.house_95hallwayCode.GDtoolbarObjects1.length = 0;
gdjs.house_95hallwayCode.GDtoolbarObjects2.length = 0;
gdjs.house_95hallwayCode.GDhallwayObjects1.length = 0;
gdjs.house_95hallwayCode.GDhallwayObjects2.length = 0;
gdjs.house_95hallwayCode.GDdoorObjects1.length = 0;
gdjs.house_95hallwayCode.GDdoorObjects2.length = 0;
gdjs.house_95hallwayCode.GDtperObjects1.length = 0;
gdjs.house_95hallwayCode.GDtperObjects2.length = 0;
gdjs.house_95hallwayCode.GDbarrererObjects1.length = 0;
gdjs.house_95hallwayCode.GDbarrererObjects2.length = 0;
gdjs.house_95hallwayCode.GDNewObjectObjects1.length = 0;
gdjs.house_95hallwayCode.GDNewObjectObjects2.length = 0;

gdjs.house_95hallwayCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['house_95hallwayCode'] = gdjs.house_95hallwayCode;
