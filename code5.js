gdjs.cutcenmen1Code = {};
gdjs.cutcenmen1Code.GDareyoutheirObjects1= [];
gdjs.cutcenmen1Code.GDareyoutheirObjects2= [];
gdjs.cutcenmen1Code.GDcanyouheremeObjects1= [];
gdjs.cutcenmen1Code.GDcanyouheremeObjects2= [];
gdjs.cutcenmen1Code.GDwakeupObjects1= [];
gdjs.cutcenmen1Code.GDwakeupObjects2= [];
gdjs.cutcenmen1Code.GDisaidwakeupObjects1= [];
gdjs.cutcenmen1Code.GDisaidwakeupObjects2= [];
gdjs.cutcenmen1Code.GDstaticObjects1= [];
gdjs.cutcenmen1Code.GDstaticObjects2= [];
gdjs.cutcenmen1Code.GDetoskipObjects1= [];
gdjs.cutcenmen1Code.GDetoskipObjects2= [];
gdjs.cutcenmen1Code.GDstatic2Objects1= [];
gdjs.cutcenmen1Code.GDstatic2Objects2= [];

gdjs.cutcenmen1Code.conditionTrue_0 = {val:false};
gdjs.cutcenmen1Code.condition0IsTrue_0 = {val:false};
gdjs.cutcenmen1Code.condition1IsTrue_0 = {val:false};


gdjs.cutcenmen1Code.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.cutcenmen1Code.condition0IsTrue_0.val = false;
{
gdjs.cutcenmen1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if (gdjs.cutcenmen1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "house_hallway", true);
}}

}


{


gdjs.cutcenmen1Code.condition0IsTrue_0.val = false;
{
gdjs.cutcenmen1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.cutcenmen1Code.condition0IsTrue_0.val) {
gdjs.cutcenmen1Code.GDareyoutheirObjects1.createFrom(runtimeScene.getObjects("areyoutheir"));
gdjs.cutcenmen1Code.GDcanyouheremeObjects1.createFrom(runtimeScene.getObjects("canyouhereme"));
gdjs.cutcenmen1Code.GDisaidwakeupObjects1.createFrom(runtimeScene.getObjects("isaidwakeup"));
gdjs.cutcenmen1Code.GDstaticObjects1.createFrom(runtimeScene.getObjects("static"));
gdjs.cutcenmen1Code.GDwakeupObjects1.createFrom(runtimeScene.getObjects("wakeup"));
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{gdjs.evtTools.sound.playSound(runtimeScene, "cutcenmen1.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "events");
}{for(var i = 0, len = gdjs.cutcenmen1Code.GDareyoutheirObjects1.length ;i < len;++i) {
    gdjs.cutcenmen1Code.GDareyoutheirObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.cutcenmen1Code.GDcanyouheremeObjects1.length ;i < len;++i) {
    gdjs.cutcenmen1Code.GDcanyouheremeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.cutcenmen1Code.GDwakeupObjects1.length ;i < len;++i) {
    gdjs.cutcenmen1Code.GDwakeupObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.cutcenmen1Code.GDisaidwakeupObjects1.length ;i < len;++i) {
    gdjs.cutcenmen1Code.GDisaidwakeupObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.cutcenmen1Code.GDstaticObjects1.length ;i < len;++i) {
    gdjs.cutcenmen1Code.GDstaticObjects1[i].hide();
}
}}

}


{


gdjs.cutcenmen1Code.condition0IsTrue_0.val = false;
{
gdjs.cutcenmen1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "events");
}if (gdjs.cutcenmen1Code.condition0IsTrue_0.val) {
gdjs.cutcenmen1Code.GDareyoutheirObjects1.createFrom(runtimeScene.getObjects("areyoutheir"));
gdjs.cutcenmen1Code.GDetoskipObjects1.createFrom(runtimeScene.getObjects("etoskip"));
{for(var i = 0, len = gdjs.cutcenmen1Code.GDareyoutheirObjects1.length ;i < len;++i) {
    gdjs.cutcenmen1Code.GDareyoutheirObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.cutcenmen1Code.GDetoskipObjects1.length ;i < len;++i) {
    gdjs.cutcenmen1Code.GDetoskipObjects1[i].hide();
}
}}

}


{


gdjs.cutcenmen1Code.condition0IsTrue_0.val = false;
{
gdjs.cutcenmen1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 7, "events");
}if (gdjs.cutcenmen1Code.condition0IsTrue_0.val) {
gdjs.cutcenmen1Code.GDareyoutheirObjects1.createFrom(runtimeScene.getObjects("areyoutheir"));
gdjs.cutcenmen1Code.GDcanyouheremeObjects1.createFrom(runtimeScene.getObjects("canyouhereme"));
{for(var i = 0, len = gdjs.cutcenmen1Code.GDcanyouheremeObjects1.length ;i < len;++i) {
    gdjs.cutcenmen1Code.GDcanyouheremeObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.cutcenmen1Code.GDareyoutheirObjects1.length ;i < len;++i) {
    gdjs.cutcenmen1Code.GDareyoutheirObjects1[i].hide();
}
}}

}


{


gdjs.cutcenmen1Code.condition0IsTrue_0.val = false;
{
gdjs.cutcenmen1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "events");
}if (gdjs.cutcenmen1Code.condition0IsTrue_0.val) {
gdjs.cutcenmen1Code.GDcanyouheremeObjects1.createFrom(runtimeScene.getObjects("canyouhereme"));
gdjs.cutcenmen1Code.GDwakeupObjects1.createFrom(runtimeScene.getObjects("wakeup"));
{for(var i = 0, len = gdjs.cutcenmen1Code.GDwakeupObjects1.length ;i < len;++i) {
    gdjs.cutcenmen1Code.GDwakeupObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.cutcenmen1Code.GDcanyouheremeObjects1.length ;i < len;++i) {
    gdjs.cutcenmen1Code.GDcanyouheremeObjects1[i].hide();
}
}}

}


{


gdjs.cutcenmen1Code.condition0IsTrue_0.val = false;
{
gdjs.cutcenmen1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 11, "events");
}if (gdjs.cutcenmen1Code.condition0IsTrue_0.val) {
gdjs.cutcenmen1Code.GDisaidwakeupObjects1.createFrom(runtimeScene.getObjects("isaidwakeup"));
gdjs.cutcenmen1Code.GDstaticObjects1.createFrom(runtimeScene.getObjects("static"));
gdjs.cutcenmen1Code.GDwakeupObjects1.createFrom(runtimeScene.getObjects("wakeup"));
{for(var i = 0, len = gdjs.cutcenmen1Code.GDisaidwakeupObjects1.length ;i < len;++i) {
    gdjs.cutcenmen1Code.GDisaidwakeupObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.cutcenmen1Code.GDwakeupObjects1.length ;i < len;++i) {
    gdjs.cutcenmen1Code.GDwakeupObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "cutcenmun1static.wav", false, 10, 1);
}{for(var i = 0, len = gdjs.cutcenmen1Code.GDstaticObjects1.length ;i < len;++i) {
    gdjs.cutcenmen1Code.GDstaticObjects1[i].hide(false);
}
}}

}


{


gdjs.cutcenmen1Code.condition0IsTrue_0.val = false;
{
gdjs.cutcenmen1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 11.3, "events");
}if (gdjs.cutcenmen1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "cutcenmun2", false);
}}

}


}; //End of gdjs.cutcenmen1Code.eventsList0x5b7028


gdjs.cutcenmen1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cutcenmen1Code.GDareyoutheirObjects1.length = 0;
gdjs.cutcenmen1Code.GDareyoutheirObjects2.length = 0;
gdjs.cutcenmen1Code.GDcanyouheremeObjects1.length = 0;
gdjs.cutcenmen1Code.GDcanyouheremeObjects2.length = 0;
gdjs.cutcenmen1Code.GDwakeupObjects1.length = 0;
gdjs.cutcenmen1Code.GDwakeupObjects2.length = 0;
gdjs.cutcenmen1Code.GDisaidwakeupObjects1.length = 0;
gdjs.cutcenmen1Code.GDisaidwakeupObjects2.length = 0;
gdjs.cutcenmen1Code.GDstaticObjects1.length = 0;
gdjs.cutcenmen1Code.GDstaticObjects2.length = 0;
gdjs.cutcenmen1Code.GDetoskipObjects1.length = 0;
gdjs.cutcenmen1Code.GDetoskipObjects2.length = 0;
gdjs.cutcenmen1Code.GDstatic2Objects1.length = 0;
gdjs.cutcenmen1Code.GDstatic2Objects2.length = 0;

gdjs.cutcenmen1Code.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['cutcenmen1Code'] = gdjs.cutcenmen1Code;
