gdjs.menubuildupCode = {};
gdjs.menubuildupCode.GDNewObjectObjects1= [];
gdjs.menubuildupCode.GDNewObjectObjects2= [];

gdjs.menubuildupCode.conditionTrue_0 = {val:false};
gdjs.menubuildupCode.condition0IsTrue_0 = {val:false};
gdjs.menubuildupCode.condition1IsTrue_0 = {val:false};


gdjs.menubuildupCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.menubuildupCode.condition0IsTrue_0.val = false;
{
gdjs.menubuildupCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.menubuildupCode.condition0IsTrue_0.val) {
gdjs.menubuildupCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "events");
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{gdjs.evtTools.sound.playSound(runtimeScene, "buildup.wav", false, 100, 3);
}{for(var i = 0, len = gdjs.menubuildupCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.menubuildupCode.GDNewObjectObjects1[i].hide();
}
}}

}


{


gdjs.menubuildupCode.condition0IsTrue_0.val = false;
{
gdjs.menubuildupCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "events");
}if (gdjs.menubuildupCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}}

}


{


gdjs.menubuildupCode.condition0IsTrue_0.val = false;
{
gdjs.menubuildupCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "events");
}if (gdjs.menubuildupCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "66;66;66");
}}

}


{


gdjs.menubuildupCode.condition0IsTrue_0.val = false;
{
gdjs.menubuildupCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.3, "events");
}if (gdjs.menubuildupCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "131;131;131");
}}

}


{


gdjs.menubuildupCode.condition0IsTrue_0.val = false;
{
gdjs.menubuildupCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.4, "events");
}if (gdjs.menubuildupCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "170;170;170");
}}

}


{


gdjs.menubuildupCode.condition0IsTrue_0.val = false;
{
gdjs.menubuildupCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "events");
}if (gdjs.menubuildupCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "216;216;216");
}}

}


{


gdjs.menubuildupCode.condition0IsTrue_0.val = false;
{
gdjs.menubuildupCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.6, "events");
}if (gdjs.menubuildupCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "235;235;235");
}}

}


{


gdjs.menubuildupCode.condition0IsTrue_0.val = false;
{
gdjs.menubuildupCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.7, "events");
}if (gdjs.menubuildupCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "255;255;255");
}}

}


{


gdjs.menubuildupCode.condition0IsTrue_0.val = false;
{
gdjs.menubuildupCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.8, "events");
}if (gdjs.menubuildupCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "255;255;255");
}}

}


{


gdjs.menubuildupCode.condition0IsTrue_0.val = false;
{
gdjs.menubuildupCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.9, "events");
}if (gdjs.menubuildupCode.condition0IsTrue_0.val) {
gdjs.menubuildupCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "255;255;255");
}{for(var i = 0, len = gdjs.menubuildupCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.menubuildupCode.GDNewObjectObjects1[i].hide(false);
}
}}

}


{


gdjs.menubuildupCode.condition0IsTrue_0.val = false;
{
gdjs.menubuildupCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "events");
}if (gdjs.menubuildupCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "events");
}}

}


}; //End of gdjs.menubuildupCode.eventsList0x5b7028


gdjs.menubuildupCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menubuildupCode.GDNewObjectObjects1.length = 0;
gdjs.menubuildupCode.GDNewObjectObjects2.length = 0;

gdjs.menubuildupCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['menubuildupCode'] = gdjs.menubuildupCode;
