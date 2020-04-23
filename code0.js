gdjs.BTMLOGOAJUSTCode = {};
gdjs.BTMLOGOAJUSTCode.GDbtmlogoObjects1= [];
gdjs.BTMLOGOAJUSTCode.GDbtmlogoObjects2= [];
gdjs.BTMLOGOAJUSTCode.GDlicensObjects1= [];
gdjs.BTMLOGOAJUSTCode.GDlicensObjects2= [];

gdjs.BTMLOGOAJUSTCode.conditionTrue_0 = {val:false};
gdjs.BTMLOGOAJUSTCode.condition0IsTrue_0 = {val:false};
gdjs.BTMLOGOAJUSTCode.condition1IsTrue_0 = {val:false};
gdjs.BTMLOGOAJUSTCode.condition2IsTrue_0 = {val:false};


gdjs.BTMLOGOAJUSTCode.mapOfGDgdjs_46BTMLOGOAJUSTCode_46GDlicensObjects1Objects = Hashtable.newFrom({"licens": gdjs.BTMLOGOAJUSTCode.GDlicensObjects1});gdjs.BTMLOGOAJUSTCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.BTMLOGOAJUSTCode.condition0IsTrue_0.val = false;
{
gdjs.BTMLOGOAJUSTCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.BTMLOGOAJUSTCode.condition0IsTrue_0.val) {
gdjs.BTMLOGOAJUSTCode.GDbtmlogoObjects1.createFrom(runtimeScene.getObjects("btmlogo"));
{gdjs.evtTools.sound.playSound(runtimeScene, "btmlogo.wav", false, 25, 99);
}{for(var i = 0, len = gdjs.BTMLOGOAJUSTCode.GDbtmlogoObjects1.length ;i < len;++i) {
    gdjs.BTMLOGOAJUSTCode.GDbtmlogoObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "events");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "events");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cooldown");
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{gdjs.evtsExt__Gamejolt__InitGamejoltAPI.func(runtimeScene, 485918, "4879832cd4dc40996b1747b8d8e78c07", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.BTMLOGOAJUSTCode.GDlicensObjects1.createFrom(runtimeScene.getObjects("licens"));

gdjs.BTMLOGOAJUSTCode.condition0IsTrue_0.val = false;
gdjs.BTMLOGOAJUSTCode.condition1IsTrue_0.val = false;
{
gdjs.BTMLOGOAJUSTCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BTMLOGOAJUSTCode.mapOfGDgdjs_46BTMLOGOAJUSTCode_46GDlicensObjects1Objects, runtimeScene, true, false);
}if ( gdjs.BTMLOGOAJUSTCode.condition0IsTrue_0.val ) {
{
gdjs.BTMLOGOAJUSTCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.BTMLOGOAJUSTCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("http://creativecommons.org/licenses/by-nc-sa/4.0/", runtimeScene);
}}

}


{


gdjs.BTMLOGOAJUSTCode.condition0IsTrue_0.val = false;
{
gdjs.BTMLOGOAJUSTCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "events");
}if (gdjs.BTMLOGOAJUSTCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menubuildup", false);
}}

}


}; //End of gdjs.BTMLOGOAJUSTCode.eventsList0x5b7028


gdjs.BTMLOGOAJUSTCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BTMLOGOAJUSTCode.GDbtmlogoObjects1.length = 0;
gdjs.BTMLOGOAJUSTCode.GDbtmlogoObjects2.length = 0;
gdjs.BTMLOGOAJUSTCode.GDlicensObjects1.length = 0;
gdjs.BTMLOGOAJUSTCode.GDlicensObjects2.length = 0;

gdjs.BTMLOGOAJUSTCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['BTMLOGOAJUSTCode'] = gdjs.BTMLOGOAJUSTCode;
