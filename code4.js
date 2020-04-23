gdjs.menuCode = {};
gdjs.menuCode.GDaccObjects1= [];
gdjs.menuCode.GDaccObjects2= [];
gdjs.menuCode.GDbackroundObjects1= [];
gdjs.menuCode.GDbackroundObjects2= [];
gdjs.menuCode.GDleavObjects1= [];
gdjs.menuCode.GDleavObjects2= [];
gdjs.menuCode.GDstartObjects1= [];
gdjs.menuCode.GDstartObjects2= [];
gdjs.menuCode.GDverObjects1= [];
gdjs.menuCode.GDverObjects2= [];
gdjs.menuCode.GDchoreslogoObjects1= [];
gdjs.menuCode.GDchoreslogoObjects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};
gdjs.menuCode.condition2IsTrue_0 = {val:false};


gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.menuCode.GDstartObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDverObjects1Objects = Hashtable.newFrom({"ver": gdjs.menuCode.GDverObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDaccObjects1Objects = Hashtable.newFrom({"acc": gdjs.menuCode.GDaccObjects1});gdjs.menuCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
gdjs.menuCode.GDaccObjects1.createFrom(runtimeScene.getObjects("acc"));
gdjs.menuCode.GDbackroundObjects1.createFrom(runtimeScene.getObjects("backround"));
gdjs.menuCode.GDchoreslogoObjects1.createFrom(runtimeScene.getObjects("choreslogo"));
gdjs.menuCode.GDleavObjects1.createFrom(runtimeScene.getObjects("leav"));
gdjs.menuCode.GDstartObjects1.createFrom(runtimeScene.getObjects("start"));
gdjs.menuCode.GDverObjects1.createFrom(runtimeScene.getObjects("ver"));
{for(var i = 0, len = gdjs.menuCode.GDbackroundObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDbackroundObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "255;255;255");
}{gdjs.evtTools.sound.playSound(runtimeScene, "menu.mp3", true, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "events");
}{for(var i = 0, len = gdjs.menuCode.GDleavObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDleavObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.menuCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDstartObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.menuCode.GDchoreslogoObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDchoreslogoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.menuCode.GDverObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.menuCode.GDaccObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDaccObjects1[i].hide();
}
}}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "events");
}if (gdjs.menuCode.condition0IsTrue_0.val) {
gdjs.menuCode.GDaccObjects1.createFrom(runtimeScene.getObjects("acc"));
gdjs.menuCode.GDbackroundObjects1.createFrom(runtimeScene.getObjects("backround"));
gdjs.menuCode.GDchoreslogoObjects1.createFrom(runtimeScene.getObjects("choreslogo"));
gdjs.menuCode.GDleavObjects1.createFrom(runtimeScene.getObjects("leav"));
gdjs.menuCode.GDstartObjects1.createFrom(runtimeScene.getObjects("start"));
gdjs.menuCode.GDverObjects1.createFrom(runtimeScene.getObjects("ver"));
{for(var i = 0, len = gdjs.menuCode.GDbackroundObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDbackroundObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.menuCode.GDleavObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDleavObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.menuCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDstartObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.menuCode.GDchoreslogoObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDchoreslogoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.menuCode.GDverObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.menuCode.GDaccObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDaccObjects1[i].hide(false);
}
}}

}


{

gdjs.menuCode.GDstartObjects1.createFrom(runtimeScene.getObjects("start"));

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDstartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.menuCode.GDstartObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDstartObjects1[i].setAnimationName("clicked");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "391698__jpolito__jp-lightswitch03.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "cutcenmen1", true);
}}

}


{

gdjs.menuCode.GDverObjects1.createFrom(runtimeScene.getObjects("ver"));

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDverObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://gamejolt.com/@BMoorman4575", runtimeScene);
}}

}


{

gdjs.menuCode.GDaccObjects1.createFrom(runtimeScene.getObjects("acc"));

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDaccObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "y a y.wav", false, 100, -(10));
}{gdjs.evtsExt__Gamejolt__ArchieveTrophy.func(runtimeScene, 120045, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


{
}

}


}; //End of gdjs.menuCode.eventsList0x5b7028


gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDaccObjects1.length = 0;
gdjs.menuCode.GDaccObjects2.length = 0;
gdjs.menuCode.GDbackroundObjects1.length = 0;
gdjs.menuCode.GDbackroundObjects2.length = 0;
gdjs.menuCode.GDleavObjects1.length = 0;
gdjs.menuCode.GDleavObjects2.length = 0;
gdjs.menuCode.GDstartObjects1.length = 0;
gdjs.menuCode.GDstartObjects2.length = 0;
gdjs.menuCode.GDverObjects1.length = 0;
gdjs.menuCode.GDverObjects2.length = 0;
gdjs.menuCode.GDchoreslogoObjects1.length = 0;
gdjs.menuCode.GDchoreslogoObjects2.length = 0;

gdjs.menuCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['menuCode'] = gdjs.menuCode;
