gdjs.cutcenmun2Code = {};
gdjs.cutcenmun2Code.GDcutcenroomObjects1= [];
gdjs.cutcenmun2Code.GDcutcenroomObjects2= [];
gdjs.cutcenmun2Code.GDcutcen_95playerObjects1= [];
gdjs.cutcenmun2Code.GDcutcen_95playerObjects2= [];
gdjs.cutcenmun2Code.GDcutcen_95momObjects1= [];
gdjs.cutcenmun2Code.GDcutcen_95momObjects2= [];
gdjs.cutcenmun2Code.GDspeckbubbleObjects1= [];
gdjs.cutcenmun2Code.GDspeckbubbleObjects2= [];
gdjs.cutcenmun2Code.GDtext1Objects1= [];
gdjs.cutcenmun2Code.GDtext1Objects2= [];
gdjs.cutcenmun2Code.GDtext2Objects1= [];
gdjs.cutcenmun2Code.GDtext2Objects2= [];
gdjs.cutcenmun2Code.GDtext3Objects1= [];
gdjs.cutcenmun2Code.GDtext3Objects2= [];
gdjs.cutcenmun2Code.GDtext4Objects1= [];
gdjs.cutcenmun2Code.GDtext4Objects2= [];
gdjs.cutcenmun2Code.GDmomwalkawayObjects1= [];
gdjs.cutcenmun2Code.GDmomwalkawayObjects2= [];
gdjs.cutcenmun2Code.GDjoshwalkto1Objects1= [];
gdjs.cutcenmun2Code.GDjoshwalkto1Objects2= [];
gdjs.cutcenmun2Code.GDjoshwalkto2Objects1= [];
gdjs.cutcenmun2Code.GDjoshwalkto2Objects2= [];
gdjs.cutcenmun2Code.GDjoshwalkto3Objects1= [];
gdjs.cutcenmun2Code.GDjoshwalkto3Objects2= [];
gdjs.cutcenmun2Code.GDNewObjectObjects1= [];
gdjs.cutcenmun2Code.GDNewObjectObjects2= [];

gdjs.cutcenmun2Code.conditionTrue_0 = {val:false};
gdjs.cutcenmun2Code.condition0IsTrue_0 = {val:false};
gdjs.cutcenmun2Code.condition1IsTrue_0 = {val:false};


gdjs.cutcenmun2Code.eventsList0x5b7028 = function(runtimeScene) {

{


gdjs.cutcenmun2Code.condition0IsTrue_0.val = false;
{
gdjs.cutcenmun2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.cutcenmun2Code.condition0IsTrue_0.val) {
gdjs.cutcenmun2Code.GDcutcen_95playerObjects1.createFrom(runtimeScene.getObjects("cutcen_player"));
gdjs.cutcenmun2Code.GDtext2Objects1.createFrom(runtimeScene.getObjects("text2"));
gdjs.cutcenmun2Code.GDtext3Objects1.createFrom(runtimeScene.getObjects("text3"));
gdjs.cutcenmun2Code.GDtext4Objects1.createFrom(runtimeScene.getObjects("text4"));
{for(var i = 0, len = gdjs.cutcenmun2Code.GDtext2Objects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.cutcenmun2Code.GDtext3Objects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.cutcenmun2Code.GDtext4Objects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDtext4Objects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "events");
}{for(var i = 0, len = gdjs.cutcenmun2Code.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDcutcen_95playerObjects1[i].setAnimationName("defult");
}
}}

}


{


gdjs.cutcenmun2Code.condition0IsTrue_0.val = false;
{
gdjs.cutcenmun2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "events");
}if (gdjs.cutcenmun2Code.condition0IsTrue_0.val) {
gdjs.cutcenmun2Code.GDtext1Objects1.createFrom(runtimeScene.getObjects("text1"));
gdjs.cutcenmun2Code.GDtext2Objects1.createFrom(runtimeScene.getObjects("text2"));
{for(var i = 0, len = gdjs.cutcenmun2Code.GDtext1Objects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDtext1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.cutcenmun2Code.GDtext2Objects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDtext2Objects1[i].hide(false);
}
}}

}


{


gdjs.cutcenmun2Code.condition0IsTrue_0.val = false;
{
gdjs.cutcenmun2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 6, "events");
}if (gdjs.cutcenmun2Code.condition0IsTrue_0.val) {
gdjs.cutcenmun2Code.GDtext2Objects1.createFrom(runtimeScene.getObjects("text2"));
gdjs.cutcenmun2Code.GDtext3Objects1.createFrom(runtimeScene.getObjects("text3"));
{for(var i = 0, len = gdjs.cutcenmun2Code.GDtext2Objects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.cutcenmun2Code.GDtext3Objects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDtext3Objects1[i].hide(false);
}
}}

}


{


gdjs.cutcenmun2Code.condition0IsTrue_0.val = false;
{
gdjs.cutcenmun2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 9, "events");
}if (gdjs.cutcenmun2Code.condition0IsTrue_0.val) {
gdjs.cutcenmun2Code.GDtext3Objects1.createFrom(runtimeScene.getObjects("text3"));
gdjs.cutcenmun2Code.GDtext4Objects1.createFrom(runtimeScene.getObjects("text4"));
{for(var i = 0, len = gdjs.cutcenmun2Code.GDtext3Objects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.cutcenmun2Code.GDtext4Objects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDtext4Objects1[i].hide(false);
}
}}

}


{


gdjs.cutcenmun2Code.condition0IsTrue_0.val = false;
{
gdjs.cutcenmun2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 12, "events");
}if (gdjs.cutcenmun2Code.condition0IsTrue_0.val) {
gdjs.cutcenmun2Code.GDcutcen_95momObjects1.createFrom(runtimeScene.getObjects("cutcen_mom"));
gdjs.cutcenmun2Code.GDmomwalkawayObjects1.createFrom(runtimeScene.getObjects("momwalkaway"));
gdjs.cutcenmun2Code.GDspeckbubbleObjects1.createFrom(runtimeScene.getObjects("speckbubble"));
gdjs.cutcenmun2Code.GDtext4Objects1.createFrom(runtimeScene.getObjects("text4"));
{for(var i = 0, len = gdjs.cutcenmun2Code.GDtext4Objects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.cutcenmun2Code.GDspeckbubbleObjects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDspeckbubbleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.cutcenmun2Code.GDcutcen_95momObjects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDcutcen_95momObjects1[i].addForceTowardObject((gdjs.cutcenmun2Code.GDmomwalkawayObjects1.length !== 0 ? gdjs.cutcenmun2Code.GDmomwalkawayObjects1[0] : null), 50, 0);
}
}}

}


{


gdjs.cutcenmun2Code.condition0IsTrue_0.val = false;
{
gdjs.cutcenmun2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 17, "events");
}if (gdjs.cutcenmun2Code.condition0IsTrue_0.val) {
gdjs.cutcenmun2Code.GDcutcen_95playerObjects1.createFrom(runtimeScene.getObjects("cutcen_player"));
gdjs.cutcenmun2Code.GDjoshwalkto1Objects1.createFrom(runtimeScene.getObjects("joshwalkto1"));
{for(var i = 0, len = gdjs.cutcenmun2Code.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDcutcen_95playerObjects1[i].addForceTowardObject((gdjs.cutcenmun2Code.GDjoshwalkto1Objects1.length !== 0 ? gdjs.cutcenmun2Code.GDjoshwalkto1Objects1[0] : null), 100, 0);
}
}{for(var i = 0, len = gdjs.cutcenmun2Code.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDcutcen_95playerObjects1[i].setAnimationName("down");
}
}}

}


{


gdjs.cutcenmun2Code.condition0IsTrue_0.val = false;
{
gdjs.cutcenmun2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 22, "events");
}if (gdjs.cutcenmun2Code.condition0IsTrue_0.val) {
gdjs.cutcenmun2Code.GDcutcen_95playerObjects1.createFrom(runtimeScene.getObjects("cutcen_player"));
gdjs.cutcenmun2Code.GDjoshwalkto2Objects1.createFrom(runtimeScene.getObjects("joshwalkto2"));
{for(var i = 0, len = gdjs.cutcenmun2Code.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDcutcen_95playerObjects1[i].addForceTowardObject((gdjs.cutcenmun2Code.GDjoshwalkto2Objects1.length !== 0 ? gdjs.cutcenmun2Code.GDjoshwalkto2Objects1[0] : null), 300, 0);
}
}{for(var i = 0, len = gdjs.cutcenmun2Code.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDcutcen_95playerObjects1[i].setAnimationName("down");
}
}}

}


{


gdjs.cutcenmun2Code.condition0IsTrue_0.val = false;
{
gdjs.cutcenmun2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 27, "events");
}if (gdjs.cutcenmun2Code.condition0IsTrue_0.val) {
gdjs.cutcenmun2Code.GDcutcen_95playerObjects1.createFrom(runtimeScene.getObjects("cutcen_player"));
gdjs.cutcenmun2Code.GDjoshwalkto3Objects1.createFrom(runtimeScene.getObjects("joshwalkto3"));
{for(var i = 0, len = gdjs.cutcenmun2Code.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDcutcen_95playerObjects1[i].addForceTowardObject((gdjs.cutcenmun2Code.GDjoshwalkto3Objects1.length !== 0 ? gdjs.cutcenmun2Code.GDjoshwalkto3Objects1[0] : null), 300, 0);
}
}}

}


{


gdjs.cutcenmun2Code.condition0IsTrue_0.val = false;
{
gdjs.cutcenmun2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 26, "events");
}if (gdjs.cutcenmun2Code.condition0IsTrue_0.val) {
gdjs.cutcenmun2Code.GDcutcen_95playerObjects1.createFrom(runtimeScene.getObjects("cutcen_player"));
gdjs.cutcenmun2Code.GDjoshwalkto3Objects1.createFrom(runtimeScene.getObjects("joshwalkto3"));
{for(var i = 0, len = gdjs.cutcenmun2Code.GDcutcen_95playerObjects1.length ;i < len;++i) {
    gdjs.cutcenmun2Code.GDcutcen_95playerObjects1[i].addForceTowardObject((gdjs.cutcenmun2Code.GDjoshwalkto3Objects1.length !== 0 ? gdjs.cutcenmun2Code.GDjoshwalkto3Objects1[0] : null), 300, 0);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "house_hallway", false);
}}

}


}; //End of gdjs.cutcenmun2Code.eventsList0x5b7028


gdjs.cutcenmun2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.cutcenmun2Code.GDcutcenroomObjects1.length = 0;
gdjs.cutcenmun2Code.GDcutcenroomObjects2.length = 0;
gdjs.cutcenmun2Code.GDcutcen_95playerObjects1.length = 0;
gdjs.cutcenmun2Code.GDcutcen_95playerObjects2.length = 0;
gdjs.cutcenmun2Code.GDcutcen_95momObjects1.length = 0;
gdjs.cutcenmun2Code.GDcutcen_95momObjects2.length = 0;
gdjs.cutcenmun2Code.GDspeckbubbleObjects1.length = 0;
gdjs.cutcenmun2Code.GDspeckbubbleObjects2.length = 0;
gdjs.cutcenmun2Code.GDtext1Objects1.length = 0;
gdjs.cutcenmun2Code.GDtext1Objects2.length = 0;
gdjs.cutcenmun2Code.GDtext2Objects1.length = 0;
gdjs.cutcenmun2Code.GDtext2Objects2.length = 0;
gdjs.cutcenmun2Code.GDtext3Objects1.length = 0;
gdjs.cutcenmun2Code.GDtext3Objects2.length = 0;
gdjs.cutcenmun2Code.GDtext4Objects1.length = 0;
gdjs.cutcenmun2Code.GDtext4Objects2.length = 0;
gdjs.cutcenmun2Code.GDmomwalkawayObjects1.length = 0;
gdjs.cutcenmun2Code.GDmomwalkawayObjects2.length = 0;
gdjs.cutcenmun2Code.GDjoshwalkto1Objects1.length = 0;
gdjs.cutcenmun2Code.GDjoshwalkto1Objects2.length = 0;
gdjs.cutcenmun2Code.GDjoshwalkto2Objects1.length = 0;
gdjs.cutcenmun2Code.GDjoshwalkto2Objects2.length = 0;
gdjs.cutcenmun2Code.GDjoshwalkto3Objects1.length = 0;
gdjs.cutcenmun2Code.GDjoshwalkto3Objects2.length = 0;
gdjs.cutcenmun2Code.GDNewObjectObjects1.length = 0;
gdjs.cutcenmun2Code.GDNewObjectObjects2.length = 0;

gdjs.cutcenmun2Code.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['cutcenmun2Code'] = gdjs.cutcenmun2Code;
