gdjs.ending_47creditsCode = {};
gdjs.ending_47creditsCode.GDgoodendingObjects1= [];
gdjs.ending_47creditsCode.GDgoodendingObjects2= [];
gdjs.ending_47creditsCode.GDbadendingObjects1= [];
gdjs.ending_47creditsCode.GDbadendingObjects2= [];
gdjs.ending_47creditsCode.GDcreditsObjects1= [];
gdjs.ending_47creditsCode.GDcreditsObjects2= [];
gdjs.ending_47creditsCode.GDlicensObjects1= [];
gdjs.ending_47creditsCode.GDlicensObjects2= [];
gdjs.ending_47creditsCode.GDimgObjects1= [];
gdjs.ending_47creditsCode.GDimgObjects2= [];

gdjs.ending_47creditsCode.conditionTrue_0 = {val:false};
gdjs.ending_47creditsCode.condition0IsTrue_0 = {val:false};
gdjs.ending_47creditsCode.condition1IsTrue_0 = {val:false};
gdjs.ending_47creditsCode.condition2IsTrue_0 = {val:false};
gdjs.ending_47creditsCode.condition3IsTrue_0 = {val:false};
gdjs.ending_47creditsCode.condition4IsTrue_0 = {val:false};


gdjs.ending_47creditsCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.ending_47creditsCode.condition0IsTrue_0.val = false;
{
gdjs.ending_47creditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ending_47creditsCode.condition0IsTrue_0.val) {
gdjs.ending_47creditsCode.GDbadendingObjects1.createFrom(runtimeScene.getObjects("badending"));
gdjs.ending_47creditsCode.GDcreditsObjects1.createFrom(runtimeScene.getObjects("credits"));
gdjs.ending_47creditsCode.GDgoodendingObjects1.createFrom(runtimeScene.getObjects("goodending"));
gdjs.ending_47creditsCode.GDimgObjects1.createFrom(runtimeScene.getObjects("img"));
{for(var i = 0, len = gdjs.ending_47creditsCode.GDgoodendingObjects1.length ;i < len;++i) {
    gdjs.ending_47creditsCode.GDgoodendingObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ending_47creditsCode.GDbadendingObjects1.length ;i < len;++i) {
    gdjs.ending_47creditsCode.GDbadendingObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ending_47creditsCode.GDcreditsObjects1.length ;i < len;++i) {
    gdjs.ending_47creditsCode.GDcreditsObjects1[i].addForce(0, 20, 0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "menu.mp3", true, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "img");
}{for(var i = 0, len = gdjs.ending_47creditsCode.GDimgObjects1.length ;i < len;++i) {
    gdjs.ending_47creditsCode.GDimgObjects1[i].hide();
}
}}

}


{


gdjs.ending_47creditsCode.condition0IsTrue_0.val = false;
{
gdjs.ending_47creditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 52.17, "img");
}if (gdjs.ending_47creditsCode.condition0IsTrue_0.val) {
gdjs.ending_47creditsCode.GDimgObjects1.createFrom(runtimeScene.getObjects("img"));
{for(var i = 0, len = gdjs.ending_47creditsCode.GDimgObjects1.length ;i < len;++i) {
    gdjs.ending_47creditsCode.GDimgObjects1[i].hide(false);
}
}}

}


{


gdjs.ending_47creditsCode.condition0IsTrue_0.val = false;
{
gdjs.ending_47creditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 55, "img");
}if (gdjs.ending_47creditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}}

}


{


gdjs.ending_47creditsCode.condition0IsTrue_0.val = false;
{
gdjs.ending_47creditsCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.ending_47creditsCode.condition0IsTrue_0.val) {
gdjs.ending_47creditsCode.GDbadendingObjects1.createFrom(runtimeScene.getObjects("badending"));
gdjs.ending_47creditsCode.GDcreditsObjects1.createFrom(runtimeScene.getObjects("credits"));
gdjs.ending_47creditsCode.GDgoodendingObjects1.createFrom(runtimeScene.getObjects("goodending"));
gdjs.ending_47creditsCode.GDlicensObjects1.createFrom(runtimeScene.getObjects("licens"));
{for(var i = 0, len = gdjs.ending_47creditsCode.GDcreditsObjects1.length ;i < len;++i) {
    gdjs.ending_47creditsCode.GDcreditsObjects1[i].addForce(0, -(30), 0);
}
}{for(var i = 0, len = gdjs.ending_47creditsCode.GDgoodendingObjects1.length ;i < len;++i) {
    gdjs.ending_47creditsCode.GDgoodendingObjects1[i].addForce(0, -(30), 0);
}
}{for(var i = 0, len = gdjs.ending_47creditsCode.GDbadendingObjects1.length ;i < len;++i) {
    gdjs.ending_47creditsCode.GDbadendingObjects1[i].addForce(0, -(30), 0);
}
}{for(var i = 0, len = gdjs.ending_47creditsCode.GDlicensObjects1.length ;i < len;++i) {
    gdjs.ending_47creditsCode.GDlicensObjects1[i].addForce(0, -(30), 0);
}
}}

}


{


gdjs.ending_47creditsCode.condition0IsTrue_0.val = false;
gdjs.ending_47creditsCode.condition1IsTrue_0.val = false;
gdjs.ending_47creditsCode.condition2IsTrue_0.val = false;
{
gdjs.ending_47creditsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if ( gdjs.ending_47creditsCode.condition0IsTrue_0.val ) {
{
gdjs.ending_47creditsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ending_47creditsCode.condition1IsTrue_0.val ) {
{
gdjs.ending_47creditsCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}}
}
if (gdjs.ending_47creditsCode.condition2IsTrue_0.val) {
gdjs.ending_47creditsCode.GDbadendingObjects1.createFrom(runtimeScene.getObjects("badending"));
{for(var i = 0, len = gdjs.ending_47creditsCode.GDbadendingObjects1.length ;i < len;++i) {
    gdjs.ending_47creditsCode.GDbadendingObjects1[i].hide(false);
}
}}

}


{


gdjs.ending_47creditsCode.condition0IsTrue_0.val = false;
gdjs.ending_47creditsCode.condition1IsTrue_0.val = false;
gdjs.ending_47creditsCode.condition2IsTrue_0.val = false;
gdjs.ending_47creditsCode.condition3IsTrue_0.val = false;
{
gdjs.ending_47creditsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if ( gdjs.ending_47creditsCode.condition0IsTrue_0.val ) {
{
gdjs.ending_47creditsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ending_47creditsCode.condition1IsTrue_0.val ) {
{
gdjs.ending_47creditsCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.ending_47creditsCode.condition2IsTrue_0.val ) {
{
gdjs.ending_47creditsCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}}
}
}
if (gdjs.ending_47creditsCode.condition3IsTrue_0.val) {
gdjs.ending_47creditsCode.GDbadendingObjects1.createFrom(runtimeScene.getObjects("badending"));
{for(var i = 0, len = gdjs.ending_47creditsCode.GDbadendingObjects1.length ;i < len;++i) {
    gdjs.ending_47creditsCode.GDbadendingObjects1[i].hide(false);
}
}{gdjs.evtsExt__Gamejolt__ArchieveTrophy.func(runtimeScene, 120072, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.ending_47creditsCode.condition0IsTrue_0.val = false;
gdjs.ending_47creditsCode.condition1IsTrue_0.val = false;
gdjs.ending_47creditsCode.condition2IsTrue_0.val = false;
{
gdjs.ending_47creditsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if ( gdjs.ending_47creditsCode.condition0IsTrue_0.val ) {
{
gdjs.ending_47creditsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ending_47creditsCode.condition1IsTrue_0.val ) {
{
gdjs.ending_47creditsCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}}
}
if (gdjs.ending_47creditsCode.condition2IsTrue_0.val) {
gdjs.ending_47creditsCode.GDgoodendingObjects1.createFrom(runtimeScene.getObjects("goodending"));
{for(var i = 0, len = gdjs.ending_47creditsCode.GDgoodendingObjects1.length ;i < len;++i) {
    gdjs.ending_47creditsCode.GDgoodendingObjects1[i].hide(false);
}
}}

}


{


gdjs.ending_47creditsCode.condition0IsTrue_0.val = false;
gdjs.ending_47creditsCode.condition1IsTrue_0.val = false;
gdjs.ending_47creditsCode.condition2IsTrue_0.val = false;
gdjs.ending_47creditsCode.condition3IsTrue_0.val = false;
{
gdjs.ending_47creditsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if ( gdjs.ending_47creditsCode.condition0IsTrue_0.val ) {
{
gdjs.ending_47creditsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ending_47creditsCode.condition1IsTrue_0.val ) {
{
gdjs.ending_47creditsCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.ending_47creditsCode.condition2IsTrue_0.val ) {
{
gdjs.ending_47creditsCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}}
}
}
if (gdjs.ending_47creditsCode.condition3IsTrue_0.val) {
gdjs.ending_47creditsCode.GDgoodendingObjects1.createFrom(runtimeScene.getObjects("goodending"));
{for(var i = 0, len = gdjs.ending_47creditsCode.GDgoodendingObjects1.length ;i < len;++i) {
    gdjs.ending_47creditsCode.GDgoodendingObjects1[i].hide(false);
}
}{gdjs.evtsExt__Gamejolt__ArchieveTrophy.func(runtimeScene, 120103, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


}; //End of gdjs.ending_47creditsCode.eventsList0x5b7028


gdjs.ending_47creditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ending_47creditsCode.GDgoodendingObjects1.length = 0;
gdjs.ending_47creditsCode.GDgoodendingObjects2.length = 0;
gdjs.ending_47creditsCode.GDbadendingObjects1.length = 0;
gdjs.ending_47creditsCode.GDbadendingObjects2.length = 0;
gdjs.ending_47creditsCode.GDcreditsObjects1.length = 0;
gdjs.ending_47creditsCode.GDcreditsObjects2.length = 0;
gdjs.ending_47creditsCode.GDlicensObjects1.length = 0;
gdjs.ending_47creditsCode.GDlicensObjects2.length = 0;
gdjs.ending_47creditsCode.GDimgObjects1.length = 0;
gdjs.ending_47creditsCode.GDimgObjects2.length = 0;

gdjs.ending_47creditsCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['ending_47creditsCode'] = gdjs.ending_47creditsCode;
