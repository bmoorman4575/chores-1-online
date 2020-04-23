gdjs.mom_32hallway_32not_32darkCode = {};
gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1= [];
gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects2= [];
gdjs.mom_32hallway_32not_32darkCode.GDtperObjects1= [];
gdjs.mom_32hallway_32not_32darkCode.GDtperObjects2= [];
gdjs.mom_32hallway_32not_32darkCode.GDbarrererObjects1= [];
gdjs.mom_32hallway_32not_32darkCode.GDbarrererObjects2= [];
gdjs.mom_32hallway_32not_32darkCode.GDnewhalwaylightObjects1= [];
gdjs.mom_32hallway_32not_32darkCode.GDnewhalwaylightObjects2= [];
gdjs.mom_32hallway_32not_32darkCode.GDclockObjects1= [];
gdjs.mom_32hallway_32not_32darkCode.GDclockObjects2= [];
gdjs.mom_32hallway_32not_32darkCode.GDdoorObjects1= [];
gdjs.mom_32hallway_32not_32darkCode.GDdoorObjects2= [];
gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1= [];
gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects2= [];

gdjs.mom_32hallway_32not_32darkCode.conditionTrue_0 = {val:false};
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0 = {val:false};
gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0 = {val:false};
gdjs.mom_32hallway_32not_32darkCode.condition2IsTrue_0 = {val:false};
gdjs.mom_32hallway_32not_32darkCode.condition3IsTrue_0 = {val:false};
gdjs.mom_32hallway_32not_32darkCode.condition4IsTrue_0 = {val:false};
gdjs.mom_32hallway_32not_32darkCode.condition5IsTrue_0 = {val:false};
gdjs.mom_32hallway_32not_32darkCode.condition6IsTrue_0 = {val:false};
gdjs.mom_32hallway_32not_32darkCode.conditionTrue_1 = {val:false};
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_1 = {val:false};
gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_1 = {val:false};
gdjs.mom_32hallway_32not_32darkCode.condition2IsTrue_1 = {val:false};
gdjs.mom_32hallway_32not_32darkCode.condition3IsTrue_1 = {val:false};
gdjs.mom_32hallway_32not_32darkCode.condition4IsTrue_1 = {val:false};
gdjs.mom_32hallway_32not_32darkCode.condition5IsTrue_1 = {val:false};
gdjs.mom_32hallway_32not_32darkCode.condition6IsTrue_1 = {val:false};


gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1});gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.mom_32hallway_32not_32darkCode.GDdoorObjects1});gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1});gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.mom_32hallway_32not_32darkCode.GDdoorObjects1});gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1});gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.mom_32hallway_32not_32darkCode.GDdoorObjects1});gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1});gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDbarrererObjects1Objects = Hashtable.newFrom({"barrerer": gdjs.mom_32hallway_32not_32darkCode.GDbarrererObjects1});gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1});gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDtperObjects1Objects = Hashtable.newFrom({"tper": gdjs.mom_32hallway_32not_32darkCode.GDtperObjects1});gdjs.mom_32hallway_32not_32darkCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val ) {
{
gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= 1;
}}
if (gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val) {
gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1.createFrom(runtimeScene.getObjects("locked"));
{gdjs.evtTools.sound.playSound(runtimeScene, "450509__abyeditsound__clockticksound-01.wav", true, 25, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "events");
}{for(var i = 0, len = gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1.length ;i < len;++i) {
    gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1[i].hide();
}
}}

}


{


gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val ) {
{
gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 2;
}}
if (gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val) {
gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1.createFrom(runtimeScene.getObjects("locked"));
{gdjs.evtTools.sound.playSound(runtimeScene, "450509__abyeditsound__clockticksound-01.wav", false, 50, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "347139__kinoton__antique-fireplace-clock-bell-one-strike.wav", true, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "events");
}{for(var i = 0, len = gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1.length ;i < len;++i) {
    gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1[i].hide();
}
}}

}


{



}


{


gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if (gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val) {
}

}


{


gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
}if (gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val) {
}

}


{


gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val) {
gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1[i].setAnimationName("down");
}
}}

}


{


gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if (gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val) {
gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1[i].setAnimationName("down_idle");
}
}}

}


{


gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val) {
gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1[i].setAnimationName("up");
}
}}

}


{


gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if (gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val) {
gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1[i].setAnimationName("up_idle");
}
}}

}


{


gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val) {
gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1[i].setAnimationName("left");
}
}{for(var i = 0, len = gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1[i].addForce(-(200), 0, 0);
}
}}

}


{


gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if (gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val) {
gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1[i].setAnimationName("left_idle");
}
}}

}


{


gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val) {
gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1[i].setAnimationName("right");
}
}{for(var i = 0, len = gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1[i].addForce(200, 0, 0);
}
}}

}


{


gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if (gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val) {
gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1[i].setAnimationName("right_idle");
}
}}

}


{


gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "events");
}if (gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val) {
}

}


{

gdjs.mom_32hallway_32not_32darkCode.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition2IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition3IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition4IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "g");
}if ( gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val ) {
{
gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "events");
}if ( gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val ) {
{
gdjs.mom_32hallway_32not_32darkCode.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDplayerObjects1Objects, gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDdoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.mom_32hallway_32not_32darkCode.condition2IsTrue_0.val ) {
{
gdjs.mom_32hallway_32not_32darkCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 2;
}if ( gdjs.mom_32hallway_32not_32darkCode.condition3IsTrue_0.val ) {
{
{gdjs.mom_32hallway_32not_32darkCode.conditionTrue_1 = gdjs.mom_32hallway_32not_32darkCode.condition4IsTrue_0;
gdjs.mom_32hallway_32not_32darkCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8848044);
}
}}
}
}
}
if (gdjs.mom_32hallway_32not_32darkCode.condition4IsTrue_0.val) {
gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1.createFrom(runtimeScene.getObjects("locked"));
{for(var i = 0, len = gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1.length ;i < len;++i) {
    gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "events");
}{gdjs.evtTools.sound.playSound(runtimeScene, "256606__kodack__trying-to-open-a-locked-door.wav", false, 100, 1);
}}

}


{

gdjs.mom_32hallway_32not_32darkCode.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition2IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition3IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition4IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition5IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "g");
}if ( gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val ) {
{
gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "events");
}if ( gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val ) {
{
gdjs.mom_32hallway_32not_32darkCode.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDplayerObjects1Objects, gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDdoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.mom_32hallway_32not_32darkCode.condition2IsTrue_0.val ) {
{
gdjs.mom_32hallway_32not_32darkCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.mom_32hallway_32not_32darkCode.condition3IsTrue_0.val ) {
{
gdjs.mom_32hallway_32not_32darkCode.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 2;
}if ( gdjs.mom_32hallway_32not_32darkCode.condition4IsTrue_0.val ) {
{
{gdjs.mom_32hallway_32not_32darkCode.conditionTrue_1 = gdjs.mom_32hallway_32not_32darkCode.condition5IsTrue_0;
gdjs.mom_32hallway_32not_32darkCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8849612);
}
}}
}
}
}
}
if (gdjs.mom_32hallway_32not_32darkCode.condition5IsTrue_0.val) {
gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1.createFrom(runtimeScene.getObjects("locked"));
{for(var i = 0, len = gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1.length ;i < len;++i) {
    gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "events");
}{gdjs.evtTools.sound.playSound(runtimeScene, "256606__kodack__trying-to-open-a-locked-door.wav", false, 100, 1);
}}

}


{

gdjs.mom_32hallway_32not_32darkCode.GDdoorObjects1.createFrom(runtimeScene.getObjects("door"));
gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition2IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition3IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition4IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "g");
}if ( gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val ) {
{
gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "events");
}if ( gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val ) {
{
gdjs.mom_32hallway_32not_32darkCode.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDplayerObjects1Objects, gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDdoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.mom_32hallway_32not_32darkCode.condition2IsTrue_0.val ) {
{
gdjs.mom_32hallway_32not_32darkCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}if ( gdjs.mom_32hallway_32not_32darkCode.condition3IsTrue_0.val ) {
{
gdjs.mom_32hallway_32not_32darkCode.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}}
}
}
}
if (gdjs.mom_32hallway_32not_32darkCode.condition4IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mombossfightcutcen", true);
}}

}


{


gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "events");
}if (gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val) {
gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1.createFrom(runtimeScene.getObjects("locked"));
{for(var i = 0, len = gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1.length ;i < len;++i) {
    gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1[i].hide();
}
}}

}


{

gdjs.mom_32hallway_32not_32darkCode.GDbarrererObjects1.createFrom(runtimeScene.getObjects("barrerer"));
gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val ) {
{
gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDplayerObjects1Objects, gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDbarrererObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val) {
/* Reuse gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1[i].addForce(200, 0, 0);
}
}}

}


{

gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.mom_32hallway_32not_32darkCode.GDtperObjects1.createFrom(runtimeScene.getObjects("tper"));

gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = false;
gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val = false;
{
gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.mom_32hallway_32not_32darkCode.condition0IsTrue_0.val ) {
{
gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDplayerObjects1Objects, gdjs.mom_32hallway_32not_32darkCode.mapOfGDgdjs_46mom_9532hallway_9532not_9532darkCode_46GDtperObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.mom_32hallway_32not_32darkCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "house_hallway", false);
}}

}


}; //End of gdjs.mom_32hallway_32not_32darkCode.eventsList0x5b7028


gdjs.mom_32hallway_32not_32darkCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects1.length = 0;
gdjs.mom_32hallway_32not_32darkCode.GDplayerObjects2.length = 0;
gdjs.mom_32hallway_32not_32darkCode.GDtperObjects1.length = 0;
gdjs.mom_32hallway_32not_32darkCode.GDtperObjects2.length = 0;
gdjs.mom_32hallway_32not_32darkCode.GDbarrererObjects1.length = 0;
gdjs.mom_32hallway_32not_32darkCode.GDbarrererObjects2.length = 0;
gdjs.mom_32hallway_32not_32darkCode.GDnewhalwaylightObjects1.length = 0;
gdjs.mom_32hallway_32not_32darkCode.GDnewhalwaylightObjects2.length = 0;
gdjs.mom_32hallway_32not_32darkCode.GDclockObjects1.length = 0;
gdjs.mom_32hallway_32not_32darkCode.GDclockObjects2.length = 0;
gdjs.mom_32hallway_32not_32darkCode.GDdoorObjects1.length = 0;
gdjs.mom_32hallway_32not_32darkCode.GDdoorObjects2.length = 0;
gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects1.length = 0;
gdjs.mom_32hallway_32not_32darkCode.GDlockedObjects2.length = 0;

gdjs.mom_32hallway_32not_32darkCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['mom_32hallway_32not_32darkCode'] = gdjs.mom_32hallway_32not_32darkCode;
