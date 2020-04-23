gdjs.mombossfightcutcenCode = {};
gdjs.mombossfightcutcenCode.GDbedObjects1= [];
gdjs.mombossfightcutcenCode.GDbedObjects2= [];
gdjs.mombossfightcutcenCode.GDbackroundObjects1= [];
gdjs.mombossfightcutcenCode.GDbackroundObjects2= [];
gdjs.mombossfightcutcenCode.GDanimateddoorObjects1= [];
gdjs.mombossfightcutcenCode.GDanimateddoorObjects2= [];
gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1= [];
gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects2= [];
gdjs.mombossfightcutcenCode.GDcutcenplayertarget3Objects1= [];
gdjs.mombossfightcutcenCode.GDcutcenplayertarget3Objects2= [];
gdjs.mombossfightcutcenCode.GDcutcenplayertarget2Objects1= [];
gdjs.mombossfightcutcenCode.GDcutcenplayertarget2Objects2= [];
gdjs.mombossfightcutcenCode.GDcutcenplayertargetObjects1= [];
gdjs.mombossfightcutcenCode.GDcutcenplayertargetObjects2= [];
gdjs.mombossfightcutcenCode.GDmomcutcenObjects1= [];
gdjs.mombossfightcutcenCode.GDmomcutcenObjects2= [];
gdjs.mombossfightcutcenCode.GDstatic2Objects1= [];
gdjs.mombossfightcutcenCode.GDstatic2Objects2= [];
gdjs.mombossfightcutcenCode.GDNewObjectObjects1= [];
gdjs.mombossfightcutcenCode.GDNewObjectObjects2= [];
gdjs.mombossfightcutcenCode.GDskipObjects1= [];
gdjs.mombossfightcutcenCode.GDskipObjects2= [];
gdjs.mombossfightcutcenCode.GDgotoknObjects1= [];
gdjs.mombossfightcutcenCode.GDgotoknObjects2= [];

gdjs.mombossfightcutcenCode.conditionTrue_0 = {val:false};
gdjs.mombossfightcutcenCode.condition0IsTrue_0 = {val:false};
gdjs.mombossfightcutcenCode.condition1IsTrue_0 = {val:false};
gdjs.mombossfightcutcenCode.condition2IsTrue_0 = {val:false};


gdjs.mombossfightcutcenCode.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = false;
{
gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.mombossfightcutcenCode.condition0IsTrue_0.val) {
gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.createFrom(runtimeScene.getObjects("cutcen_player"));
gdjs.mombossfightcutcenCode.GDstatic2Objects1.createFrom(runtimeScene.getObjects("static2"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "events");
}{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDstatic2Objects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDstatic2Objects1[i].hide();
}
}}

}


{


gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = false;
gdjs.mombossfightcutcenCode.condition1IsTrue_0.val = false;
{
gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "events");
}if ( gdjs.mombossfightcutcenCode.condition0IsTrue_0.val ) {
{
gdjs.mombossfightcutcenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}}
if (gdjs.mombossfightcutcenCode.condition1IsTrue_0.val) {
gdjs.mombossfightcutcenCode.GDanimateddoorObjects1.createFrom(runtimeScene.getObjects("animateddoor"));
gdjs.mombossfightcutcenCode.GDskipObjects1.createFrom(runtimeScene.getObjects("skip"));
{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDanimateddoorObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDanimateddoorObjects1[i].setAnimationName("closed-1");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "458458__prometheus888__creak3.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDskipObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDskipObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "347139__kinoton__antique-fireplace-clock-bell-one-strike.wav", true, 10, 1);
}}

}


{


gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = false;
{
gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "events");
}if (gdjs.mombossfightcutcenCode.condition0IsTrue_0.val) {
gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.createFrom(runtimeScene.getObjects("cutcen_player"));
gdjs.mombossfightcutcenCode.GDcutcenplayertargetObjects1.createFrom(runtimeScene.getObjects("cutcenplayertarget"));
{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1[i].addForceTowardObject((gdjs.mombossfightcutcenCode.GDcutcenplayertargetObjects1.length !== 0 ? gdjs.mombossfightcutcenCode.GDcutcenplayertargetObjects1[0] : null), 50, 0);
}
}}

}


{


gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = false;
{
gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 23, "events");
}if (gdjs.mombossfightcutcenCode.condition0IsTrue_0.val) {
gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.createFrom(runtimeScene.getObjects("cutcen_player"));
gdjs.mombossfightcutcenCode.GDgotoknObjects1.createFrom(runtimeScene.getObjects("gotokn"));
{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1[i].addForceTowardObject((gdjs.mombossfightcutcenCode.GDgotoknObjects1.length !== 0 ? gdjs.mombossfightcutcenCode.GDgotoknObjects1[0] : null), 50, 0);
}
}}

}


{


gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = false;
{
gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 23.1, "events");
}if (gdjs.mombossfightcutcenCode.condition0IsTrue_0.val) {
gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.createFrom(runtimeScene.getObjects("cutcen_player"));
gdjs.mombossfightcutcenCode.GDgotoknObjects1.createFrom(runtimeScene.getObjects("gotokn"));
{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1[i].addForceTowardObject((gdjs.mombossfightcutcenCode.GDgotoknObjects1.length !== 0 ? gdjs.mombossfightcutcenCode.GDgotoknObjects1[0] : null), 50, 0);
}
}}

}


{


gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = false;
{
gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 23.6, "events");
}if (gdjs.mombossfightcutcenCode.condition0IsTrue_0.val) {
gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.createFrom(runtimeScene.getObjects("cutcen_player"));
{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1[i].clearForces();
}
}}

}


{


gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = false;
{
gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 24, "events");
}if (gdjs.mombossfightcutcenCode.condition0IsTrue_0.val) {
gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.createFrom(runtimeScene.getObjects("cutcen_player"));
{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1[i].setAnimationName("stabattemp");
}
}}

}


{


gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = false;
{
gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 25, "events");
}if (gdjs.mombossfightcutcenCode.condition0IsTrue_0.val) {
gdjs.mombossfightcutcenCode.GDmomcutcenObjects1.createFrom(runtimeScene.getObjects("momcutcen"));
{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDmomcutcenObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDmomcutcenObjects1[i].setAnimationName("stop");
}
}}

}


{


gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = false;
{
gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 26, "events");
}if (gdjs.mombossfightcutcenCode.condition0IsTrue_0.val) {
gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.createFrom(runtimeScene.getObjects("cutcen_player"));
gdjs.mombossfightcutcenCode.GDcutcenplayertarget2Objects1.createFrom(runtimeScene.getObjects("cutcenplayertarget2"));
gdjs.mombossfightcutcenCode.GDmomcutcenObjects1.createFrom(runtimeScene.getObjects("momcutcen"));
{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDmomcutcenObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDmomcutcenObjects1[i].setAnimationName("tro");
}
}{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1[i].addForceTowardObject((gdjs.mombossfightcutcenCode.GDcutcenplayertarget2Objects1.length !== 0 ? gdjs.mombossfightcutcenCode.GDcutcenplayertarget2Objects1[0] : null), 3000, 0);
}
}}

}


{


gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = false;
{
gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 26.2, "events");
}if (gdjs.mombossfightcutcenCode.condition0IsTrue_0.val) {
gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.createFrom(runtimeScene.getObjects("cutcen_player"));
{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1[i].clearForces();
}
}}

}


{


gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = false;
{
gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 26.3, "events");
}if (gdjs.mombossfightcutcenCode.condition0IsTrue_0.val) {
gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.createFrom(runtimeScene.getObjects("cutcen_player"));
gdjs.mombossfightcutcenCode.GDcutcenplayertarget3Objects1.createFrom(runtimeScene.getObjects("cutcenplayertarget3"));
{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1[i].addForceTowardObject((gdjs.mombossfightcutcenCode.GDcutcenplayertarget3Objects1.length !== 0 ? gdjs.mombossfightcutcenCode.GDcutcenplayertarget3Objects1[0] : null), 2000, 0);
}
}}

}


{


gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = false;
{
gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 26.5, "events");
}if (gdjs.mombossfightcutcenCode.condition0IsTrue_0.val) {
gdjs.mombossfightcutcenCode.GDanimateddoorObjects1.createFrom(runtimeScene.getObjects("animateddoor"));
gdjs.mombossfightcutcenCode.GDbackroundObjects1.createFrom(runtimeScene.getObjects("backround"));
gdjs.mombossfightcutcenCode.GDbedObjects1.createFrom(runtimeScene.getObjects("bed"));
gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.createFrom(runtimeScene.getObjects("cutcen_player"));
gdjs.mombossfightcutcenCode.GDmomcutcenObjects1.createFrom(runtimeScene.getObjects("momcutcen"));
gdjs.mombossfightcutcenCode.GDstatic2Objects1.createFrom(runtimeScene.getObjects("static2"));
{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDbedObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDbedObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDbackroundObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDbackroundObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDanimateddoorObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDanimateddoorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDmomcutcenObjects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDmomcutcenObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.mombossfightcutcenCode.GDstatic2Objects1.length ;i < len;++i) {
    gdjs.mombossfightcutcenCode.GDstatic2Objects1[i].hide(false);
}
}}

}


{


gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = false;
{
gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 27, "events");
}if (gdjs.mombossfightcutcenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mom fight", false);
}}

}


{


gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = false;
{
gdjs.mombossfightcutcenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if (gdjs.mombossfightcutcenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mom fight", false);
}}

}


}; //End of gdjs.mombossfightcutcenCode.eventsList0x5b7028


gdjs.mombossfightcutcenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mombossfightcutcenCode.GDbedObjects1.length = 0;
gdjs.mombossfightcutcenCode.GDbedObjects2.length = 0;
gdjs.mombossfightcutcenCode.GDbackroundObjects1.length = 0;
gdjs.mombossfightcutcenCode.GDbackroundObjects2.length = 0;
gdjs.mombossfightcutcenCode.GDanimateddoorObjects1.length = 0;
gdjs.mombossfightcutcenCode.GDanimateddoorObjects2.length = 0;
gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects1.length = 0;
gdjs.mombossfightcutcenCode.GDcutcen_95playerObjects2.length = 0;
gdjs.mombossfightcutcenCode.GDcutcenplayertarget3Objects1.length = 0;
gdjs.mombossfightcutcenCode.GDcutcenplayertarget3Objects2.length = 0;
gdjs.mombossfightcutcenCode.GDcutcenplayertarget2Objects1.length = 0;
gdjs.mombossfightcutcenCode.GDcutcenplayertarget2Objects2.length = 0;
gdjs.mombossfightcutcenCode.GDcutcenplayertargetObjects1.length = 0;
gdjs.mombossfightcutcenCode.GDcutcenplayertargetObjects2.length = 0;
gdjs.mombossfightcutcenCode.GDmomcutcenObjects1.length = 0;
gdjs.mombossfightcutcenCode.GDmomcutcenObjects2.length = 0;
gdjs.mombossfightcutcenCode.GDstatic2Objects1.length = 0;
gdjs.mombossfightcutcenCode.GDstatic2Objects2.length = 0;
gdjs.mombossfightcutcenCode.GDNewObjectObjects1.length = 0;
gdjs.mombossfightcutcenCode.GDNewObjectObjects2.length = 0;
gdjs.mombossfightcutcenCode.GDskipObjects1.length = 0;
gdjs.mombossfightcutcenCode.GDskipObjects2.length = 0;
gdjs.mombossfightcutcenCode.GDgotoknObjects1.length = 0;
gdjs.mombossfightcutcenCode.GDgotoknObjects2.length = 0;

gdjs.mombossfightcutcenCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['mombossfightcutcenCode'] = gdjs.mombossfightcutcenCode;
