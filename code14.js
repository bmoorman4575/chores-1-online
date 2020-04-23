gdjs.momroomCode = {};
gdjs.momroomCode.GDroomObjects1= [];
gdjs.momroomCode.GDroomObjects2= [];
gdjs.momroomCode.GDNewObjectObjects1= [];
gdjs.momroomCode.GDNewObjectObjects2= [];
gdjs.momroomCode.GDdoorObjects1= [];
gdjs.momroomCode.GDdoorObjects2= [];
gdjs.momroomCode.GDdeadmomObjects1= [];
gdjs.momroomCode.GDdeadmomObjects2= [];
gdjs.momroomCode.GDplayercutcenObjects1= [];
gdjs.momroomCode.GDplayercutcenObjects2= [];
gdjs.momroomCode.GDNewObject2Objects1= [];
gdjs.momroomCode.GDNewObject2Objects2= [];

gdjs.momroomCode.conditionTrue_0 = {val:false};
gdjs.momroomCode.condition0IsTrue_0 = {val:false};
gdjs.momroomCode.condition1IsTrue_0 = {val:false};


gdjs.momroomCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.momroomCode.condition0IsTrue_0.val = false;
{
gdjs.momroomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.momroomCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ev");
}}

}


{


gdjs.momroomCode.condition0IsTrue_0.val = false;
{
gdjs.momroomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "ev");
}if (gdjs.momroomCode.condition0IsTrue_0.val) {
gdjs.momroomCode.GDNewObject2Objects1.createFrom(runtimeScene.getObjects("NewObject2"));
gdjs.momroomCode.GDplayercutcenObjects1.createFrom(runtimeScene.getObjects("playercutcen"));
{for(var i = 0, len = gdjs.momroomCode.GDplayercutcenObjects1.length ;i < len;++i) {
    gdjs.momroomCode.GDplayercutcenObjects1[i].addForceTowardObject((gdjs.momroomCode.GDNewObject2Objects1.length !== 0 ? gdjs.momroomCode.GDNewObject2Objects1[0] : null), 2000, 0);
}
}}

}


{


gdjs.momroomCode.condition0IsTrue_0.val = false;
{
gdjs.momroomCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3.5, "ev");
}if (gdjs.momroomCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mom hallway not dark", false);
}}

}


}; //End of gdjs.momroomCode.eventsList0x5b7028


gdjs.momroomCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.momroomCode.GDroomObjects1.length = 0;
gdjs.momroomCode.GDroomObjects2.length = 0;
gdjs.momroomCode.GDNewObjectObjects1.length = 0;
gdjs.momroomCode.GDNewObjectObjects2.length = 0;
gdjs.momroomCode.GDdoorObjects1.length = 0;
gdjs.momroomCode.GDdoorObjects2.length = 0;
gdjs.momroomCode.GDdeadmomObjects1.length = 0;
gdjs.momroomCode.GDdeadmomObjects2.length = 0;
gdjs.momroomCode.GDplayercutcenObjects1.length = 0;
gdjs.momroomCode.GDplayercutcenObjects2.length = 0;
gdjs.momroomCode.GDNewObject2Objects1.length = 0;
gdjs.momroomCode.GDNewObject2Objects2.length = 0;

gdjs.momroomCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['momroomCode'] = gdjs.momroomCode;
