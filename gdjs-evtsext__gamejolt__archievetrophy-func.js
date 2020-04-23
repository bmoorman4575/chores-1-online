gdjs.evtsExt__Gamejolt__ArchieveTrophy = {};

gdjs.evtsExt__Gamejolt__ArchieveTrophy.conditionTrue_0 = {val:false};
gdjs.evtsExt__Gamejolt__ArchieveTrophy.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Gamejolt__ArchieveTrophy.userFunc0xaf0d90 = function(runtimeScene, eventsFunctionContext) {
"use strict";
GJAPI.TrophyAchieve(eventsFunctionContext.getArgument("trophyID"));

};
gdjs.evtsExt__Gamejolt__ArchieveTrophy.eventsList0x5b7538 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamejolt__ArchieveTrophy.userFunc0xaf0d90(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__Gamejolt__ArchieveTrophy.eventsList0x5b7538


gdjs.evtsExt__Gamejolt__ArchieveTrophy.func = function(runtimeScene, trophyID, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
        var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
if (argName === "trophyID") return trophyID;
    return "";
  }
};


gdjs.evtsExt__Gamejolt__ArchieveTrophy.eventsList0x5b7538(runtimeScene, eventsFunctionContext);
return;
}

