﻿$_L(["$wt.widgets.Widget","$wt.dnd.Transfer"],"$wt.dnd.DragSource",["$wt.dnd.DND","$.DNDListener","$wt.widgets.Listener"],function(){
c$=$_C(function(){
this.control=null;
this.controlListener=null;
this.transferAgents=null;
this.refCount=0;
this.dataEffect=0;
$_Z(this,arguments);
},$wt.dnd,"DragSource",$wt.widgets.Widget);
$_Y(c$,function(){
this.transferAgents=new Array(0);
});
$_K(c$,
function(control,style){
$_R(this,$wt.dnd.DragSource,[control,$wt.dnd.DragSource.checkStyle(style)]);
this.control=control;
if(control.getData("DragSource")!=null){
$wt.dnd.DND.error(2000);
}control.setData("DragSource",this);
this.AddRef();
this.controlListener=(function(i$,v$){
if(!$_D("org.eclipse.swt.dnd.DragSource$1")){
$_H();
c$=$_W($wt.dnd,"DragSource$1",null,$wt.widgets.Listener);
$_V(c$,"handleEvent",
function(event){
if(event.type==12){
if(!this.b$["$wt.dnd.DragSource"].isDisposed()){
this.b$["$wt.dnd.DragSource"].dispose();
}}if(event.type==29){
if(!this.b$["$wt.dnd.DragSource"].isDisposed()){
this.b$["$wt.dnd.DragSource"].drag();
}}},"$wt.widgets.Event");
c$=$_P();
}
return $_N($wt.dnd.DragSource$1,i$,v$);
})(this,null);
control.addListener(12,this.controlListener);
control.addListener(29,this.controlListener);
this.addListener(12,(function(i$,v$){
if(!$_D("org.eclipse.swt.dnd.DragSource$2")){
$_H();
c$=$_W($wt.dnd,"DragSource$2",null,$wt.widgets.Listener);
$_V(c$,"handleEvent",
function(e){
this.b$["$wt.dnd.DragSource"].onDispose();
},"$wt.widgets.Event");
c$=$_P();
}
return $_N($wt.dnd.DragSource$2,i$,v$);
})(this,null));
},"$wt.widgets.Control,~N");
c$.checkStyle=$_M(c$,"checkStyle",
function(style){
if(style==0)return 2;
return style;
},"~N");
$_M(c$,"addDragListener",
function(listener){
if(listener==null)$wt.dnd.DND.error(4);
var typedListener=new $wt.dnd.DNDListener(listener);
this.addListener(2008,typedListener);
this.addListener(2001,typedListener);
this.addListener(2000,typedListener);
},"$wt.dnd.DragSourceListener");
$_M(c$,"AddRef",
($fz=function(){
this.refCount++;
return this.refCount;
},$fz.isPrivate=true,$fz));
$_M(c$,"drag",
($fz=function(){
},$fz.isPrivate=true,$fz));
$_M(c$,"getControl",
function(){
return this.control;
});
$_M(c$,"getTransfer",
function(){
return this.transferAgents;
});
$_M(c$,"onDispose",
($fz=function(){
if(this.control==null)return;
if(this.controlListener!=null){
this.control.removeListener(12,this.controlListener);
this.control.removeListener(29,this.controlListener);
}this.controlListener=null;
this.control.setData("DragSource",null);
this.control=null;
this.transferAgents=null;
},$fz.isPrivate=true,$fz));
$_M(c$,"removeDragListener",
function(listener){
if(listener==null)$wt.dnd.DND.error(4);
this.removeListener(2008,listener);
this.removeListener(2001,listener);
this.removeListener(2000,listener);
},"$wt.dnd.DragSourceListener");
$_M(c$,"setTransfer",
function(transferAgents){
this.transferAgents=transferAgents;
},"~A");
$_S(c$,
"DRAGSOURCEID","DragSource");
c$.CFSTR_PERFORMEDDROPEFFECT=c$.prototype.CFSTR_PERFORMEDDROPEFFECT=$wt.dnd.Transfer.registerType("Performed DropEffect");
});