sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

    //XMLView.create method는 promise를 return하므로 비동기 callback을 통해 body에 붙여준다.
    //viewName : sap.ui.demo.walkthrough  는 bootstrap의 root임
    //              view.App  는 Root의 이하폴더[view]에 있는 App이라는 view를 의미한다.
    //              App 은 App.view.xml 파일이라는 postfix를 가지고 있다.
	XMLView.create({
		viewName: "sap.ui.demo.walkthrough.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});
