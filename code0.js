gdjs.MainCode = {};
gdjs.MainCode.forEachCount0_2 = 0;

gdjs.MainCode.forEachCount1_2 = 0;

gdjs.MainCode.forEachIndex2 = 0;

gdjs.MainCode.forEachObjects2 = [];

gdjs.MainCode.forEachTotalCount2 = 0;

gdjs.MainCode.GDColor_95950Objects1= [];
gdjs.MainCode.GDColor_95950Objects2= [];
gdjs.MainCode.GDColor_95950Objects3= [];
gdjs.MainCode.GDColor_95950Objects4= [];
gdjs.MainCode.GDMusicBarObjects1= [];
gdjs.MainCode.GDMusicBarObjects2= [];
gdjs.MainCode.GDMusicBarObjects3= [];
gdjs.MainCode.GDMusicBarObjects4= [];
gdjs.MainCode.GDRedSawObjects1= [];
gdjs.MainCode.GDRedSawObjects2= [];
gdjs.MainCode.GDRedSawObjects3= [];
gdjs.MainCode.GDRedSawObjects4= [];
gdjs.MainCode.GDSaw_9595Beat_9595ParticleObjects1= [];
gdjs.MainCode.GDSaw_9595Beat_9595ParticleObjects2= [];
gdjs.MainCode.GDSaw_9595Beat_9595ParticleObjects3= [];
gdjs.MainCode.GDSaw_9595Beat_9595ParticleObjects4= [];
gdjs.MainCode.GDColor_95951Objects1= [];
gdjs.MainCode.GDColor_95951Objects2= [];
gdjs.MainCode.GDColor_95951Objects3= [];
gdjs.MainCode.GDColor_95951Objects4= [];
gdjs.MainCode.GDBlueStringObjects1= [];
gdjs.MainCode.GDBlueStringObjects2= [];
gdjs.MainCode.GDBlueStringObjects3= [];
gdjs.MainCode.GDBlueStringObjects4= [];
gdjs.MainCode.GDStrings_9595ParticleObjects1= [];
gdjs.MainCode.GDStrings_9595ParticleObjects2= [];
gdjs.MainCode.GDStrings_9595ParticleObjects3= [];
gdjs.MainCode.GDStrings_9595ParticleObjects4= [];
gdjs.MainCode.GDToolbarObjects1= [];
gdjs.MainCode.GDToolbarObjects2= [];
gdjs.MainCode.GDToolbarObjects3= [];
gdjs.MainCode.GDToolbarObjects4= [];
gdjs.MainCode.GDDeleteAllButtonObjects1= [];
gdjs.MainCode.GDDeleteAllButtonObjects2= [];
gdjs.MainCode.GDDeleteAllButtonObjects3= [];
gdjs.MainCode.GDDeleteAllButtonObjects4= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSaw_95959595Beat_95959595ParticleObjects3Objects = Hashtable.newFrom({"Saw_Beat_Particle": gdjs.MainCode.GDSaw_9595Beat_9595ParticleObjects3});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDStrings_95959595ParticleObjects3Objects = Hashtable.newFrom({"Strings_Particle": gdjs.MainCode.GDStrings_9595ParticleObjects3});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainCode.GDBlueStringObjects2, gdjs.MainCode.GDBlueStringObjects3);

gdjs.copyArray(gdjs.MainCode.GDRedSawObjects2, gdjs.MainCode.GDRedSawObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDRedSawObjects3.length;i<l;++i) {
    if ( gdjs.MainCode.GDRedSawObjects3[i].getVariableString(gdjs.MainCode.GDRedSawObjects3[i].getVariables().get("NodeType")) == "Saw" ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDRedSawObjects3[k] = gdjs.MainCode.GDRedSawObjects3[i];
        ++k;
    }
}
gdjs.MainCode.GDRedSawObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.MainCode.GDBlueStringObjects3.length;i<l;++i) {
    if ( gdjs.MainCode.GDBlueStringObjects3[i].getVariableString(gdjs.MainCode.GDBlueStringObjects3[i].getVariables().get("NodeType")) == "Saw" ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDBlueStringObjects3[k] = gdjs.MainCode.GDBlueStringObjects3[i];
        ++k;
    }
}
gdjs.MainCode.GDBlueStringObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBlueStringObjects3 */
/* Reuse gdjs.MainCode.GDRedSawObjects3 */
gdjs.MainCode.GDSaw_9595Beat_9595ParticleObjects3.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\saw_note.wav", false, 100, 1 - ((( gdjs.MainCode.GDBlueStringObjects3.length === 0 ) ? (( gdjs.MainCode.GDRedSawObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDRedSawObjects3[0].getPointY("")) :gdjs.MainCode.GDBlueStringObjects3[0].getPointY("")) / gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)) + 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDSaw_95959595Beat_95959595ParticleObjects3Objects, (( gdjs.MainCode.GDBlueStringObjects3.length === 0 ) ? (( gdjs.MainCode.GDRedSawObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDRedSawObjects3[0].getPointX("")) :gdjs.MainCode.GDBlueStringObjects3[0].getPointX("")) + 16, (( gdjs.MainCode.GDBlueStringObjects3.length === 0 ) ? (( gdjs.MainCode.GDRedSawObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDRedSawObjects3[0].getPointY("")) :gdjs.MainCode.GDBlueStringObjects3[0].getPointY("")) + 16, "");
}{for(var i = 0, len = gdjs.MainCode.GDSaw_9595Beat_9595ParticleObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDSaw_9595Beat_9595ParticleObjects3[i].setAngle(-(90));
}
}}

}


{

gdjs.copyArray(gdjs.MainCode.GDBlueStringObjects2, gdjs.MainCode.GDBlueStringObjects3);

gdjs.copyArray(gdjs.MainCode.GDRedSawObjects2, gdjs.MainCode.GDRedSawObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDRedSawObjects3.length;i<l;++i) {
    if ( gdjs.MainCode.GDRedSawObjects3[i].getVariableString(gdjs.MainCode.GDRedSawObjects3[i].getVariables().get("NodeType")) == "Strings" ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDRedSawObjects3[k] = gdjs.MainCode.GDRedSawObjects3[i];
        ++k;
    }
}
gdjs.MainCode.GDRedSawObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.MainCode.GDBlueStringObjects3.length;i<l;++i) {
    if ( gdjs.MainCode.GDBlueStringObjects3[i].getVariableString(gdjs.MainCode.GDBlueStringObjects3[i].getVariables().get("NodeType")) == "Strings" ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDBlueStringObjects3[k] = gdjs.MainCode.GDBlueStringObjects3[i];
        ++k;
    }
}
gdjs.MainCode.GDBlueStringObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDBlueStringObjects3 */
/* Reuse gdjs.MainCode.GDRedSawObjects3 */
gdjs.MainCode.GDStrings_9595ParticleObjects3.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\string_note.wav", false, 100, 1 - ((( gdjs.MainCode.GDBlueStringObjects3.length === 0 ) ? (( gdjs.MainCode.GDRedSawObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDRedSawObjects3[0].getPointY("")) :gdjs.MainCode.GDBlueStringObjects3[0].getPointY("")) / gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)) + 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDStrings_95959595ParticleObjects3Objects, (( gdjs.MainCode.GDBlueStringObjects3.length === 0 ) ? (( gdjs.MainCode.GDRedSawObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDRedSawObjects3[0].getPointX("")) :gdjs.MainCode.GDBlueStringObjects3[0].getPointX("")) + 16, (( gdjs.MainCode.GDBlueStringObjects3.length === 0 ) ? (( gdjs.MainCode.GDRedSawObjects3.length === 0 ) ? 0 :gdjs.MainCode.GDRedSawObjects3[0].getPointY("")) :gdjs.MainCode.GDBlueStringObjects3[0].getPointY("")) + 16, "");
}{for(var i = 0, len = gdjs.MainCode.GDStrings_9595ParticleObjects3.length ;i < len;++i) {
    gdjs.MainCode.GDStrings_9595ParticleObjects3[i].setAngle(-(90));
}
}}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

};gdjs.MainCode.eventsList2 = function(runtimeScene) {

};gdjs.MainCode.eventsList3 = function(runtimeScene) {

};gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDRedSawObjects2Objects = Hashtable.newFrom({"RedSaw": gdjs.MainCode.GDRedSawObjects2});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBlueStringObjects1Objects = Hashtable.newFrom({"BlueString": gdjs.MainCode.GDBlueStringObjects1});
gdjs.MainCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "Red";
if (isConditionTrue_0) {
gdjs.MainCode.GDRedSawObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDRedSawObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - 16, gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - 16, "");
}{for(var i = 0, len = gdjs.MainCode.GDRedSawObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDRedSawObjects2[i].getBehavior("Resizable").setSize(32, 32);
}
}{for(var i = 0, len = gdjs.MainCode.GDRedSawObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDRedSawObjects2[i].setZOrder(3);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "Blue";
if (isConditionTrue_0) {
gdjs.MainCode.GDBlueStringObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBlueStringObjects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - 16, gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - 16, "");
}{for(var i = 0, len = gdjs.MainCode.GDBlueStringObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBlueStringObjects1[i].getBehavior("Resizable").setSize(32, 32);
}
}{for(var i = 0, len = gdjs.MainCode.GDBlueStringObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDBlueStringObjects1[i].setZOrder(3);
}
}}

}


};gdjs.MainCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Color_0"), gdjs.MainCode.GDColor_95950Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) < (( gdjs.MainCode.GDColor_95950Objects1.length === 0 ) ? 0 :gdjs.MainCode.GDColor_95950Objects1[0].getY()) - 32;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList6 = function(runtimeScene) {

};gdjs.MainCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueString"), gdjs.MainCode.GDBlueStringObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedSaw"), gdjs.MainCode.GDRedSawObjects1);

gdjs.MainCode.forEachTotalCount2 = 0;
gdjs.MainCode.forEachObjects2.length = 0;
gdjs.MainCode.forEachCount0_2 = gdjs.MainCode.GDRedSawObjects1.length;
gdjs.MainCode.forEachTotalCount2 += gdjs.MainCode.forEachCount0_2;
gdjs.MainCode.forEachObjects2.push.apply(gdjs.MainCode.forEachObjects2,gdjs.MainCode.GDRedSawObjects1);
gdjs.MainCode.forEachCount1_2 = gdjs.MainCode.GDBlueStringObjects1.length;
gdjs.MainCode.forEachTotalCount2 += gdjs.MainCode.forEachCount1_2;
gdjs.MainCode.forEachObjects2.push.apply(gdjs.MainCode.forEachObjects2,gdjs.MainCode.GDBlueStringObjects1);
for (gdjs.MainCode.forEachIndex2 = 0;gdjs.MainCode.forEachIndex2 < gdjs.MainCode.forEachTotalCount2;++gdjs.MainCode.forEachIndex2) {
gdjs.MainCode.GDBlueStringObjects2.length = 0;

gdjs.MainCode.GDRedSawObjects2.length = 0;


if (gdjs.MainCode.forEachIndex2 < gdjs.MainCode.forEachCount0_2) {
    gdjs.MainCode.GDRedSawObjects2.push(gdjs.MainCode.forEachObjects2[gdjs.MainCode.forEachIndex2]);
}
else if (gdjs.MainCode.forEachIndex2 < gdjs.MainCode.forEachCount0_2+gdjs.MainCode.forEachCount1_2) {
    gdjs.MainCode.GDBlueStringObjects2.push(gdjs.MainCode.forEachObjects2[gdjs.MainCode.forEachIndex2]);
}
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.MainCode.GDRedSawObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDRedSawObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainCode.GDBlueStringObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDBlueStringObjects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.MainCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MusicBar"), gdjs.MainCode.GDMusicBarObjects1);
{for(var i = 0, len = gdjs.MainCode.GDMusicBarObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMusicBarObjects1[i].setX(gdjs.MainCode.GDMusicBarObjects1[i].getX() + (gdjs.MainCode.GDMusicBarObjects1[i].getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicBar"), gdjs.MainCode.GDMusicBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDMusicBarObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDMusicBarObjects1[i].getX() >= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 8 ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDMusicBarObjects1[k] = gdjs.MainCode.GDMusicBarObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDMusicBarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDMusicBarObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDMusicBarObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDMusicBarObjects1[i].setX(gdjs.MainCode.GDMusicBarObjects1[i].getX() - (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueString"), gdjs.MainCode.GDBlueStringObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedSaw"), gdjs.MainCode.GDRedSawObjects1);

gdjs.MainCode.forEachTotalCount2 = 0;
gdjs.MainCode.forEachObjects2.length = 0;
gdjs.MainCode.forEachCount0_2 = gdjs.MainCode.GDRedSawObjects1.length;
gdjs.MainCode.forEachTotalCount2 += gdjs.MainCode.forEachCount0_2;
gdjs.MainCode.forEachObjects2.push.apply(gdjs.MainCode.forEachObjects2,gdjs.MainCode.GDRedSawObjects1);
gdjs.MainCode.forEachCount1_2 = gdjs.MainCode.GDBlueStringObjects1.length;
gdjs.MainCode.forEachTotalCount2 += gdjs.MainCode.forEachCount1_2;
gdjs.MainCode.forEachObjects2.push.apply(gdjs.MainCode.forEachObjects2,gdjs.MainCode.GDBlueStringObjects1);
for (gdjs.MainCode.forEachIndex2 = 0;gdjs.MainCode.forEachIndex2 < gdjs.MainCode.forEachTotalCount2;++gdjs.MainCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("MusicBar"), gdjs.MainCode.GDMusicBarObjects2);
gdjs.MainCode.GDBlueStringObjects2.length = 0;

gdjs.MainCode.GDRedSawObjects2.length = 0;


if (gdjs.MainCode.forEachIndex2 < gdjs.MainCode.forEachCount0_2) {
    gdjs.MainCode.GDRedSawObjects2.push(gdjs.MainCode.forEachObjects2[gdjs.MainCode.forEachIndex2]);
}
else if (gdjs.MainCode.forEachIndex2 < gdjs.MainCode.forEachCount0_2+gdjs.MainCode.forEachCount1_2) {
    gdjs.MainCode.GDBlueStringObjects2.push(gdjs.MainCode.forEachObjects2[gdjs.MainCode.forEachIndex2]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDRedSawObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDRedSawObjects2[i].getX() <= (( gdjs.MainCode.GDMusicBarObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDMusicBarObjects2[0].getX()) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDRedSawObjects2[k] = gdjs.MainCode.GDRedSawObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDRedSawObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.MainCode.GDBlueStringObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDBlueStringObjects2[i].getX() <= (( gdjs.MainCode.GDMusicBarObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDMusicBarObjects2[0].getX()) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDBlueStringObjects2[k] = gdjs.MainCode.GDBlueStringObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDBlueStringObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDRedSawObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDRedSawObjects2[i].getX() > (( gdjs.MainCode.GDMusicBarObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDMusicBarObjects2[0].getX()) - ((gdjs.MainCode.GDMusicBarObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDMusicBarObjects2[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDRedSawObjects2[k] = gdjs.MainCode.GDRedSawObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDRedSawObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.MainCode.GDBlueStringObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDBlueStringObjects2[i].getX() > (( gdjs.MainCode.GDMusicBarObjects2.length === 0 ) ? 0 :gdjs.MainCode.GDMusicBarObjects2[0].getX()) - ((gdjs.MainCode.GDMusicBarObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDMusicBarObjects2[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDBlueStringObjects2[k] = gdjs.MainCode.GDBlueStringObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDBlueStringObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9677804);
}
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.MainCode.eventsList0(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Color_0"), gdjs.MainCode.GDColor_95950Objects1);
gdjs.copyArray(runtimeScene.getObjects("Color_1"), gdjs.MainCode.GDColor_95951Objects1);

gdjs.MainCode.forEachTotalCount2 = 0;
gdjs.MainCode.forEachObjects2.length = 0;
gdjs.MainCode.forEachCount0_2 = gdjs.MainCode.GDColor_95950Objects1.length;
gdjs.MainCode.forEachTotalCount2 += gdjs.MainCode.forEachCount0_2;
gdjs.MainCode.forEachObjects2.push.apply(gdjs.MainCode.forEachObjects2,gdjs.MainCode.GDColor_95950Objects1);
gdjs.MainCode.forEachCount1_2 = gdjs.MainCode.GDColor_95951Objects1.length;
gdjs.MainCode.forEachTotalCount2 += gdjs.MainCode.forEachCount1_2;
gdjs.MainCode.forEachObjects2.push.apply(gdjs.MainCode.forEachObjects2,gdjs.MainCode.GDColor_95951Objects1);
for (gdjs.MainCode.forEachIndex2 = 0;gdjs.MainCode.forEachIndex2 < gdjs.MainCode.forEachTotalCount2;++gdjs.MainCode.forEachIndex2) {
gdjs.MainCode.GDColor_95950Objects2.length = 0;

gdjs.MainCode.GDColor_95951Objects2.length = 0;


if (gdjs.MainCode.forEachIndex2 < gdjs.MainCode.forEachCount0_2) {
    gdjs.MainCode.GDColor_95950Objects2.push(gdjs.MainCode.forEachObjects2[gdjs.MainCode.forEachIndex2]);
}
else if (gdjs.MainCode.forEachIndex2 < gdjs.MainCode.forEachCount0_2+gdjs.MainCode.forEachCount1_2) {
    gdjs.MainCode.GDColor_95951Objects2.push(gdjs.MainCode.forEachObjects2[gdjs.MainCode.forEachIndex2]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDColor_95950Objects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDColor_95950Objects2[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDColor_95950Objects2[k] = gdjs.MainCode.GDColor_95950Objects2[i];
        ++k;
    }
}
gdjs.MainCode.GDColor_95950Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.MainCode.GDColor_95951Objects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDColor_95951Objects2[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDColor_95951Objects2[k] = gdjs.MainCode.GDColor_95951Objects2[i];
        ++k;
    }
}
gdjs.MainCode.GDColor_95951Objects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(((gdjs.MainCode.GDColor_95951Objects2.length === 0 ) ? ((gdjs.MainCode.GDColor_95950Objects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MainCode.GDColor_95950Objects2[0].getVariables()) : gdjs.MainCode.GDColor_95951Objects2[0].getVariables()).get("SelectName").getAsString());
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Color_0"), gdjs.MainCode.GDColor_95950Objects1);
gdjs.copyArray(runtimeScene.getObjects("Color_1"), gdjs.MainCode.GDColor_95951Objects1);

gdjs.MainCode.forEachTotalCount2 = 0;
gdjs.MainCode.forEachObjects2.length = 0;
gdjs.MainCode.forEachCount0_2 = gdjs.MainCode.GDColor_95950Objects1.length;
gdjs.MainCode.forEachTotalCount2 += gdjs.MainCode.forEachCount0_2;
gdjs.MainCode.forEachObjects2.push.apply(gdjs.MainCode.forEachObjects2,gdjs.MainCode.GDColor_95950Objects1);
gdjs.MainCode.forEachCount1_2 = gdjs.MainCode.GDColor_95951Objects1.length;
gdjs.MainCode.forEachTotalCount2 += gdjs.MainCode.forEachCount1_2;
gdjs.MainCode.forEachObjects2.push.apply(gdjs.MainCode.forEachObjects2,gdjs.MainCode.GDColor_95951Objects1);
for (gdjs.MainCode.forEachIndex2 = 0;gdjs.MainCode.forEachIndex2 < gdjs.MainCode.forEachTotalCount2;++gdjs.MainCode.forEachIndex2) {
gdjs.MainCode.GDColor_95950Objects2.length = 0;

gdjs.MainCode.GDColor_95951Objects2.length = 0;


if (gdjs.MainCode.forEachIndex2 < gdjs.MainCode.forEachCount0_2) {
    gdjs.MainCode.GDColor_95950Objects2.push(gdjs.MainCode.forEachObjects2[gdjs.MainCode.forEachIndex2]);
}
else if (gdjs.MainCode.forEachIndex2 < gdjs.MainCode.forEachCount0_2+gdjs.MainCode.forEachCount1_2) {
    gdjs.MainCode.GDColor_95951Objects2.push(gdjs.MainCode.forEachObjects2[gdjs.MainCode.forEachIndex2]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDColor_95950Objects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDColor_95950Objects2[i].HasJustBeenUnchecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDColor_95950Objects2[k] = gdjs.MainCode.GDColor_95950Objects2[i];
        ++k;
    }
}
gdjs.MainCode.GDColor_95950Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.MainCode.GDColor_95951Objects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDColor_95951Objects2[i].HasJustBeenUnchecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDColor_95951Objects2[k] = gdjs.MainCode.GDColor_95951Objects2[i];
        ++k;
    }
}
gdjs.MainCode.GDColor_95951Objects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("None");
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Color_0"), gdjs.MainCode.GDColor_95950Objects1);
gdjs.copyArray(runtimeScene.getObjects("Color_1"), gdjs.MainCode.GDColor_95951Objects1);

gdjs.MainCode.forEachTotalCount2 = 0;
gdjs.MainCode.forEachObjects2.length = 0;
gdjs.MainCode.forEachCount0_2 = gdjs.MainCode.GDColor_95950Objects1.length;
gdjs.MainCode.forEachTotalCount2 += gdjs.MainCode.forEachCount0_2;
gdjs.MainCode.forEachObjects2.push.apply(gdjs.MainCode.forEachObjects2,gdjs.MainCode.GDColor_95950Objects1);
gdjs.MainCode.forEachCount1_2 = gdjs.MainCode.GDColor_95951Objects1.length;
gdjs.MainCode.forEachTotalCount2 += gdjs.MainCode.forEachCount1_2;
gdjs.MainCode.forEachObjects2.push.apply(gdjs.MainCode.forEachObjects2,gdjs.MainCode.GDColor_95951Objects1);
for (gdjs.MainCode.forEachIndex2 = 0;gdjs.MainCode.forEachIndex2 < gdjs.MainCode.forEachTotalCount2;++gdjs.MainCode.forEachIndex2) {
gdjs.MainCode.GDColor_95950Objects2.length = 0;

gdjs.MainCode.GDColor_95951Objects2.length = 0;


if (gdjs.MainCode.forEachIndex2 < gdjs.MainCode.forEachCount0_2) {
    gdjs.MainCode.GDColor_95950Objects2.push(gdjs.MainCode.forEachObjects2[gdjs.MainCode.forEachIndex2]);
}
else if (gdjs.MainCode.forEachIndex2 < gdjs.MainCode.forEachCount0_2+gdjs.MainCode.forEachCount1_2) {
    gdjs.MainCode.GDColor_95951Objects2.push(gdjs.MainCode.forEachObjects2[gdjs.MainCode.forEachIndex2]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDColor_95950Objects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDColor_95950Objects2[i].getVariableString(gdjs.MainCode.GDColor_95950Objects2[i].getVariables().get("SelectName")) != runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDColor_95950Objects2[k] = gdjs.MainCode.GDColor_95950Objects2[i];
        ++k;
    }
}
gdjs.MainCode.GDColor_95950Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.MainCode.GDColor_95951Objects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDColor_95951Objects2[i].getVariableString(gdjs.MainCode.GDColor_95951Objects2[i].getVariables().get("SelectName")) != runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDColor_95951Objects2[k] = gdjs.MainCode.GDColor_95951Objects2[i];
        ++k;
    }
}
gdjs.MainCode.GDColor_95951Objects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MainCode.GDColor_95950Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDColor_95950Objects2[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.MainCode.GDColor_95951Objects2.length ;i < len;++i) {
    gdjs.MainCode.GDColor_95951Objects2[i].SetChecked(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) != "None";
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DeleteAllButton"), gdjs.MainCode.GDDeleteAllButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDDeleteAllButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDDeleteAllButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDDeleteAllButtonObjects1[k] = gdjs.MainCode.GDDeleteAllButtonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDDeleteAllButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DeleteAllButton"), gdjs.MainCode.GDDeleteAllButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Toolbar"), gdjs.MainCode.GDToolbarObjects1);
{for(var i = 0, len = gdjs.MainCode.GDDeleteAllButtonObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDDeleteAllButtonObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 140);
}
}{for(var i = 0, len = gdjs.MainCode.GDToolbarObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDToolbarObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.preloadSound(runtimeScene, "assets\\saw_note.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "assets\\string_note.wav");
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDColor_95950Objects1.length = 0;
gdjs.MainCode.GDColor_95950Objects2.length = 0;
gdjs.MainCode.GDColor_95950Objects3.length = 0;
gdjs.MainCode.GDColor_95950Objects4.length = 0;
gdjs.MainCode.GDMusicBarObjects1.length = 0;
gdjs.MainCode.GDMusicBarObjects2.length = 0;
gdjs.MainCode.GDMusicBarObjects3.length = 0;
gdjs.MainCode.GDMusicBarObjects4.length = 0;
gdjs.MainCode.GDRedSawObjects1.length = 0;
gdjs.MainCode.GDRedSawObjects2.length = 0;
gdjs.MainCode.GDRedSawObjects3.length = 0;
gdjs.MainCode.GDRedSawObjects4.length = 0;
gdjs.MainCode.GDSaw_9595Beat_9595ParticleObjects1.length = 0;
gdjs.MainCode.GDSaw_9595Beat_9595ParticleObjects2.length = 0;
gdjs.MainCode.GDSaw_9595Beat_9595ParticleObjects3.length = 0;
gdjs.MainCode.GDSaw_9595Beat_9595ParticleObjects4.length = 0;
gdjs.MainCode.GDColor_95951Objects1.length = 0;
gdjs.MainCode.GDColor_95951Objects2.length = 0;
gdjs.MainCode.GDColor_95951Objects3.length = 0;
gdjs.MainCode.GDColor_95951Objects4.length = 0;
gdjs.MainCode.GDBlueStringObjects1.length = 0;
gdjs.MainCode.GDBlueStringObjects2.length = 0;
gdjs.MainCode.GDBlueStringObjects3.length = 0;
gdjs.MainCode.GDBlueStringObjects4.length = 0;
gdjs.MainCode.GDStrings_9595ParticleObjects1.length = 0;
gdjs.MainCode.GDStrings_9595ParticleObjects2.length = 0;
gdjs.MainCode.GDStrings_9595ParticleObjects3.length = 0;
gdjs.MainCode.GDStrings_9595ParticleObjects4.length = 0;
gdjs.MainCode.GDToolbarObjects1.length = 0;
gdjs.MainCode.GDToolbarObjects2.length = 0;
gdjs.MainCode.GDToolbarObjects3.length = 0;
gdjs.MainCode.GDToolbarObjects4.length = 0;
gdjs.MainCode.GDDeleteAllButtonObjects1.length = 0;
gdjs.MainCode.GDDeleteAllButtonObjects2.length = 0;
gdjs.MainCode.GDDeleteAllButtonObjects3.length = 0;
gdjs.MainCode.GDDeleteAllButtonObjects4.length = 0;

gdjs.MainCode.eventsList8(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
