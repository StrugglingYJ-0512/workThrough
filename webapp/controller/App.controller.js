sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
 ], function (Controller, MessageToast) {
	"use strict";
	// Controller 를 상속하여 Retrun 해준다.
	// 첫 번째 인자는 Controller의 fullname이다.
	// 2번째인자는 object이다. Event Handler정보 javascript의 형식으로 넣어주면 된다. 
	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
	   onShowHello : function () {
		   // show a native javascript alert
		  MessageToast.show("Hello World");
	   }
	});
 });