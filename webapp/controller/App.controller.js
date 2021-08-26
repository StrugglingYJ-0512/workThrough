sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
 ], function (Controller, MessageToast,JSONModel) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
		onInit : function () {
			// set data model on view
			var oData = {
			   recipient : {
				  name : "World"
			   }
			};
			var oModel = new JSONModel(oData);
			// this = controller 이다. controller.getView( ) = sap.ui.core.mvc.View 이다.
        	// View.setModel method를 통해 Model를 binding한다.
        	// this.getView().setModel(oModel,"default" ) 이름을 줄수도 있으나 여기서는 생략하였다.
			this.getView().setModel(oModel);
		},
	   onShowHello : function () {
		   // show a native javascript alert
		  MessageToast.show("Hello World");
	   }
	});
 });