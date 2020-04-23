gdjs.choresCode = {};
gdjs.choresCode.GDredObjects1= [];
gdjs.choresCode.GDredObjects2= [];
gdjs.choresCode.GDblueObjects1= [];
gdjs.choresCode.GDblueObjects2= [];
gdjs.choresCode.GDNewObjectObjects1= [];
gdjs.choresCode.GDNewObjectObjects2= [];
gdjs.choresCode.GDchoresObjects1= [];
gdjs.choresCode.GDchoresObjects2= [];
gdjs.choresCode.GD1Objects1= [];
gdjs.choresCode.GD1Objects2= [];
gdjs.choresCode.GD1afterObjects1= [];
gdjs.choresCode.GD1afterObjects2= [];
gdjs.choresCode.GDdone1Objects1= [];
gdjs.choresCode.GDdone1Objects2= [];
gdjs.choresCode.GD2afterObjects1= [];
gdjs.choresCode.GD2afterObjects2= [];
gdjs.choresCode.GD2Objects1= [];
gdjs.choresCode.GD2Objects2= [];
gdjs.choresCode.GDdone2Objects1= [];
gdjs.choresCode.GDdone2Objects2= [];
gdjs.choresCode.GD3Objects1= [];
gdjs.choresCode.GD3Objects2= [];
gdjs.choresCode.GD3afterObjects1= [];
gdjs.choresCode.GD3afterObjects2= [];
gdjs.choresCode.GDnotdone3Objects1= [];
gdjs.choresCode.GDnotdone3Objects2= [];
gdjs.choresCode.GDdone3Objects1= [];
gdjs.choresCode.GDdone3Objects2= [];
gdjs.choresCode.GD4Objects1= [];
gdjs.choresCode.GD4Objects2= [];
gdjs.choresCode.GD4afterObjects1= [];
gdjs.choresCode.GD4afterObjects2= [];
gdjs.choresCode.GDdone4Objects1= [];
gdjs.choresCode.GDdone4Objects2= [];
gdjs.choresCode.GDmomgotoObjects1= [];
gdjs.choresCode.GDmomgotoObjects2= [];

gdjs.choresCode.conditionTrue_0 = {val:false};
gdjs.choresCode.condition0IsTrue_0 = {val:false};
gdjs.choresCode.condition1IsTrue_0 = {val:false};
gdjs.choresCode.condition2IsTrue_0 = {val:false};
gdjs.choresCode.condition3IsTrue_0 = {val:false};


gdjs.choresCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.choresCode.condition0IsTrue_0.val = false;
{
gdjs.choresCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if (gdjs.choresCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


{


gdjs.choresCode.condition0IsTrue_0.val = false;
{
gdjs.choresCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.choresCode.condition0IsTrue_0.val) {
gdjs.choresCode.GDdone1Objects1.createFrom(runtimeScene.getObjects("done1"));
gdjs.choresCode.GDdone2Objects1.createFrom(runtimeScene.getObjects("done2"));
gdjs.choresCode.GDdone3Objects1.createFrom(runtimeScene.getObjects("done3"));
gdjs.choresCode.GDdone4Objects1.createFrom(runtimeScene.getObjects("done4"));
gdjs.choresCode.GDnotdone3Objects1.createFrom(runtimeScene.getObjects("notdone3"));
{for(var i = 0, len = gdjs.choresCode.GDdone1Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDdone2Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDdone3Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDdone4Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDnotdone3Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDnotdone3Objects1[i].hide();
}
}}

}


{


gdjs.choresCode.condition0IsTrue_0.val = false;
gdjs.choresCode.condition1IsTrue_0.val = false;
{
gdjs.choresCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if ( gdjs.choresCode.condition0IsTrue_0.val ) {
{
gdjs.choresCode.condition1IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}}
if (gdjs.choresCode.condition1IsTrue_0.val) {
gdjs.choresCode.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.choresCode.GD2afterObjects1.createFrom(runtimeScene.getObjects("2after"));
gdjs.choresCode.GD3afterObjects1.createFrom(runtimeScene.getObjects("3after"));
gdjs.choresCode.GD4afterObjects1.createFrom(runtimeScene.getObjects("4after"));
gdjs.choresCode.GDdone1Objects1.createFrom(runtimeScene.getObjects("done1"));
gdjs.choresCode.GDdone2Objects1.createFrom(runtimeScene.getObjects("done2"));
gdjs.choresCode.GDdone3Objects1.createFrom(runtimeScene.getObjects("done3"));
gdjs.choresCode.GDdone4Objects1.createFrom(runtimeScene.getObjects("done4"));
gdjs.choresCode.GDnotdone3Objects1.createFrom(runtimeScene.getObjects("notdone3"));
{for(var i = 0, len = gdjs.choresCode.GDdone1Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDdone2Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GD1Objects1.length ;i < len;++i) {
    gdjs.choresCode.GD1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GD2afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD2afterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GD3afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD3afterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDdone3Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDdone4Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GD4afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD4afterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDnotdone3Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDnotdone3Objects1[i].hide();
}
}}

}


{


gdjs.choresCode.condition0IsTrue_0.val = false;
gdjs.choresCode.condition1IsTrue_0.val = false;
{
gdjs.choresCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.choresCode.condition0IsTrue_0.val ) {
{
gdjs.choresCode.condition1IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}}
if (gdjs.choresCode.condition1IsTrue_0.val) {
gdjs.choresCode.GD1afterObjects1.createFrom(runtimeScene.getObjects("1after"));
gdjs.choresCode.GD3afterObjects1.createFrom(runtimeScene.getObjects("3after"));
gdjs.choresCode.GD4afterObjects1.createFrom(runtimeScene.getObjects("4after"));
gdjs.choresCode.GDdone1Objects1.createFrom(runtimeScene.getObjects("done1"));
gdjs.choresCode.GDdone3Objects1.createFrom(runtimeScene.getObjects("done3"));
gdjs.choresCode.GDdone4Objects1.createFrom(runtimeScene.getObjects("done4"));
gdjs.choresCode.GDnotdone3Objects1.createFrom(runtimeScene.getObjects("notdone3"));
{for(var i = 0, len = gdjs.choresCode.GD1afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD1afterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDdone1Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone1Objects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.choresCode.GD3afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD3afterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDdone3Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDdone4Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GD4afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD4afterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDnotdone3Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDnotdone3Objects1[i].hide();
}
}}

}


{


gdjs.choresCode.condition0IsTrue_0.val = false;
gdjs.choresCode.condition1IsTrue_0.val = false;
{
gdjs.choresCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}if ( gdjs.choresCode.condition0IsTrue_0.val ) {
{
gdjs.choresCode.condition1IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}}
if (gdjs.choresCode.condition1IsTrue_0.val) {
gdjs.choresCode.GD1afterObjects1.createFrom(runtimeScene.getObjects("1after"));
gdjs.choresCode.GD2afterObjects1.createFrom(runtimeScene.getObjects("2after"));
gdjs.choresCode.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.choresCode.GD4afterObjects1.createFrom(runtimeScene.getObjects("4after"));
gdjs.choresCode.GDdone1Objects1.createFrom(runtimeScene.getObjects("done1"));
gdjs.choresCode.GDdone2Objects1.createFrom(runtimeScene.getObjects("done2"));
gdjs.choresCode.GDnotdone3Objects1.createFrom(runtimeScene.getObjects("notdone3"));
{for(var i = 0, len = gdjs.choresCode.GD2afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD2afterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDdone1Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.choresCode.GDdone2Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone2Objects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.choresCode.GD4afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD4afterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GD3Objects1.length ;i < len;++i) {
    gdjs.choresCode.GD3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GD1afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD1afterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDnotdone3Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDnotdone3Objects1[i].hide();
}
}}

}


{


gdjs.choresCode.condition0IsTrue_0.val = false;
gdjs.choresCode.condition1IsTrue_0.val = false;
gdjs.choresCode.condition2IsTrue_0.val = false;
{
gdjs.choresCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if ( gdjs.choresCode.condition0IsTrue_0.val ) {
{
gdjs.choresCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.choresCode.condition1IsTrue_0.val ) {
{
gdjs.choresCode.condition2IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}}
}
if (gdjs.choresCode.condition2IsTrue_0.val) {
gdjs.choresCode.GD1afterObjects1.createFrom(runtimeScene.getObjects("1after"));
gdjs.choresCode.GD2afterObjects1.createFrom(runtimeScene.getObjects("2after"));
gdjs.choresCode.GD3afterObjects1.createFrom(runtimeScene.getObjects("3after"));
gdjs.choresCode.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.choresCode.GD4afterObjects1.createFrom(runtimeScene.getObjects("4after"));
gdjs.choresCode.GDdone1Objects1.createFrom(runtimeScene.getObjects("done1"));
gdjs.choresCode.GDdone2Objects1.createFrom(runtimeScene.getObjects("done2"));
gdjs.choresCode.GDdone3Objects1.createFrom(runtimeScene.getObjects("done3"));
gdjs.choresCode.GDmomgotoObjects1.createFrom(runtimeScene.getObjects("momgoto"));
gdjs.choresCode.GDnotdone3Objects1.createFrom(runtimeScene.getObjects("notdone3"));
{for(var i = 0, len = gdjs.choresCode.GD2afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD2afterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDdone1Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.choresCode.GDdone2Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.choresCode.GDdone3Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.choresCode.GD4afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD4afterObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.choresCode.GD4Objects1.length ;i < len;++i) {
    gdjs.choresCode.GD4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GD3afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD3afterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GD1afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD1afterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDnotdone3Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDnotdone3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GD3afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD3afterObjects1[i].addForceTowardObject((gdjs.choresCode.GDmomgotoObjects1.length !== 0 ? gdjs.choresCode.GDmomgotoObjects1[0] : null), 500, 0);
}
}}

}


{


gdjs.choresCode.condition0IsTrue_0.val = false;
gdjs.choresCode.condition1IsTrue_0.val = false;
gdjs.choresCode.condition2IsTrue_0.val = false;
{
gdjs.choresCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if ( gdjs.choresCode.condition0IsTrue_0.val ) {
{
gdjs.choresCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.choresCode.condition1IsTrue_0.val ) {
{
gdjs.choresCode.condition2IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}}
}
if (gdjs.choresCode.condition2IsTrue_0.val) {
gdjs.choresCode.GD1afterObjects1.createFrom(runtimeScene.getObjects("1after"));
gdjs.choresCode.GD2afterObjects1.createFrom(runtimeScene.getObjects("2after"));
gdjs.choresCode.GD3afterObjects1.createFrom(runtimeScene.getObjects("3after"));
gdjs.choresCode.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.choresCode.GD4afterObjects1.createFrom(runtimeScene.getObjects("4after"));
gdjs.choresCode.GDdone1Objects1.createFrom(runtimeScene.getObjects("done1"));
gdjs.choresCode.GDdone2Objects1.createFrom(runtimeScene.getObjects("done2"));
gdjs.choresCode.GDmomgotoObjects1.createFrom(runtimeScene.getObjects("momgoto"));
gdjs.choresCode.GDnotdone3Objects1.createFrom(runtimeScene.getObjects("notdone3"));
{for(var i = 0, len = gdjs.choresCode.GD2afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD2afterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDdone1Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.choresCode.GDdone2Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDdone2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.choresCode.GD4Objects1.length ;i < len;++i) {
    gdjs.choresCode.GD4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GD3afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD3afterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GD1afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD1afterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.choresCode.GDnotdone3Objects1.length ;i < len;++i) {
    gdjs.choresCode.GDnotdone3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.choresCode.GD4afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD4afterObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.choresCode.GD3afterObjects1.length ;i < len;++i) {
    gdjs.choresCode.GD3afterObjects1[i].addForceTowardObject((gdjs.choresCode.GDmomgotoObjects1.length !== 0 ? gdjs.choresCode.GDmomgotoObjects1[0] : null), 500, 0);
}
}}

}


{


gdjs.choresCode.condition0IsTrue_0.val = false;
gdjs.choresCode.condition1IsTrue_0.val = false;
{
gdjs.choresCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.choresCode.condition0IsTrue_0.val ) {
{
gdjs.choresCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.choresCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "choreslistnormal.mp3", 1, true, 10, 1);
}}

}


{


gdjs.choresCode.condition0IsTrue_0.val = false;
gdjs.choresCode.condition1IsTrue_0.val = false;
{
gdjs.choresCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.choresCode.condition0IsTrue_0.val ) {
{
gdjs.choresCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.choresCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "chores_room.wav", 1, false, 100, 1);
}}

}


}; //End of gdjs.choresCode.eventsList0x5b7028


gdjs.choresCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.choresCode.GDredObjects1.length = 0;
gdjs.choresCode.GDredObjects2.length = 0;
gdjs.choresCode.GDblueObjects1.length = 0;
gdjs.choresCode.GDblueObjects2.length = 0;
gdjs.choresCode.GDNewObjectObjects1.length = 0;
gdjs.choresCode.GDNewObjectObjects2.length = 0;
gdjs.choresCode.GDchoresObjects1.length = 0;
gdjs.choresCode.GDchoresObjects2.length = 0;
gdjs.choresCode.GD1Objects1.length = 0;
gdjs.choresCode.GD1Objects2.length = 0;
gdjs.choresCode.GD1afterObjects1.length = 0;
gdjs.choresCode.GD1afterObjects2.length = 0;
gdjs.choresCode.GDdone1Objects1.length = 0;
gdjs.choresCode.GDdone1Objects2.length = 0;
gdjs.choresCode.GD2afterObjects1.length = 0;
gdjs.choresCode.GD2afterObjects2.length = 0;
gdjs.choresCode.GD2Objects1.length = 0;
gdjs.choresCode.GD2Objects2.length = 0;
gdjs.choresCode.GDdone2Objects1.length = 0;
gdjs.choresCode.GDdone2Objects2.length = 0;
gdjs.choresCode.GD3Objects1.length = 0;
gdjs.choresCode.GD3Objects2.length = 0;
gdjs.choresCode.GD3afterObjects1.length = 0;
gdjs.choresCode.GD3afterObjects2.length = 0;
gdjs.choresCode.GDnotdone3Objects1.length = 0;
gdjs.choresCode.GDnotdone3Objects2.length = 0;
gdjs.choresCode.GDdone3Objects1.length = 0;
gdjs.choresCode.GDdone3Objects2.length = 0;
gdjs.choresCode.GD4Objects1.length = 0;
gdjs.choresCode.GD4Objects2.length = 0;
gdjs.choresCode.GD4afterObjects1.length = 0;
gdjs.choresCode.GD4afterObjects2.length = 0;
gdjs.choresCode.GDdone4Objects1.length = 0;
gdjs.choresCode.GDdone4Objects2.length = 0;
gdjs.choresCode.GDmomgotoObjects1.length = 0;
gdjs.choresCode.GDmomgotoObjects2.length = 0;

gdjs.choresCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['choresCode'] = gdjs.choresCode;
