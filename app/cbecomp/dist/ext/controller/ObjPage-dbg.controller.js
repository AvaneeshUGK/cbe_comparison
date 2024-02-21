sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('cbecomp.ext.controller.ObjPage', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf cbecomp.ext.controller.ObjPage
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			routing: {
				onAfterBinding: async function(oBindingContext){
					debugger
					let oHbox = this.getView().getContent()[0].getSections()[0].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent()
					oHbox.getItems()[0].addStyleClass('BorderClass')
					let oFieldHbox = oHbox.getItems()[0].getItems()[0].getFormContainers()[0].getFormElements()[5].getFields()[0].getItems()[0];
					if(oFieldHbox.getItems().length == 1){
						oFieldHbox.addItem(new sap.ui.core.Icon({
							src: "sap-icon://expand",
							color: "darkblue",
							hoverColor: "red",
							activeColor: "darkgreen",
							size: "12px",
							width: "20px",
							press: function(oEvent){
								debugger
								if(oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getWidth() !== "70%"){
									oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().setWidth("70%")
									oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getItems()[1].getItems()[0].setFixedLayout(false)
								} else {
									oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().setWidth("30%")
									oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getItems()[1].getItems()[0].setFixedLayout(true);
								}
								
							}
						}));
					}
					
					// oHbox.getItems()[1].addStyleClass('BorderClass')
					let oTablesHbox = oHbox.getItems()[1].getContent()[0].getItems()[0].getItems()[1];
					let oTablesHbox1 = oHbox.getItems()[1].getContent()[0].getItems()[1].getItems()[1];
					let oTablesHbox2 = oHbox.getItems()[1].getContent()[0].getItems()[2].getItems()[1];
					let oTablesHbox3 = oHbox.getItems()[1].getContent()[0].getItems()[3].getItems()[1];
					let oTablesHbox4 = oHbox.getItems()[1].getContent()[0].getItems()[4].getItems()[1];
					// oTablesHbox.getItems().forEach(tab=>{
					// 	tab.addStyleClass("BorderClass")
					// })

					// Hide below form

					oHbox.getItems()[1].getContent()[0].getItems()[0].getItems()[2].setVisible(false);
					oHbox.getItems()[1].getContent()[0].getItems()[1].getItems()[2].setVisible(false);
					oHbox.getItems()[1].getContent()[0].getItems()[2].getItems()[2].setVisible(false);
					oHbox.getItems()[1].getContent()[0].getItems()[3].getItems()[2].setVisible(false);
					oHbox.getItems()[1].getContent()[0].getItems()[4].getItems()[2].setVisible(false);


					//
					let oTotalColumn = oTablesHbox.getItems()[2].getItems()[5].getColumns()[2];
					let oTotalColumn1 = oTablesHbox1.getItems()[1].getItems()[5].getColumns()[2];
					oTotalColumn1.getParent().getParent().setWidth("200%");
					oTotalColumn1.getParent().setWidth("inherit");
					let oTotalColumn2 = oTablesHbox2.getItems()[1].getItems()[5].getColumns()[2];
					oTotalColumn2.getParent().getParent().setWidth("200%");
					oTotalColumn2.getParent().setWidth("inherit");
					let oTotalColumn3 = oTablesHbox3.getItems()[1].getItems()[5].getColumns()[2];
					oTotalColumn3.getParent().getParent().setWidth("200%");
					oTotalColumn3.getParent().setWidth("inherit");
					let oTotalColumn4 = oTablesHbox4.getItems()[1].getItems()[5].getColumns()[2];
					oTotalColumn4.getParent().getParent().setWidth("200%");
					oTotalColumn4.getParent().setWidth("inherit");
					oTablesHbox.getItems()[2].getItems()[5].getColumns()[0].setVisible(false);
					oTablesHbox.getItems()[2].getItems()[5].getColumns()[1].setVisible(false);
					oTablesHbox.getItems()[0].setVisible(false);
					oTablesHbox.getItems()[1].setVisible(false);

					oTablesHbox1.getItems()[0].setVisible(false);
					oTablesHbox1.getItems()[1].getItems()[5].getColumns()[0].setVisible(false);
					oTablesHbox1.getItems()[1].getItems()[5].getColumns()[1].setVisible(false);

					oTablesHbox2.getItems()[0].setVisible(false);
					oTablesHbox2.getItems()[1].getItems()[5].getColumns()[0].setVisible(false);
					oTablesHbox2.getItems()[1].getItems()[5].getColumns()[1].setVisible(false);

					oTablesHbox3.getItems()[0].setVisible(false);
					oTablesHbox3.getItems()[1].getItems()[5].getColumns()[0].setVisible(false);
					oTablesHbox3.getItems()[1].getItems()[5].getColumns()[1].setVisible(false);

					oTablesHbox4.getItems()[0].setVisible(false);
					oTablesHbox4.getItems()[1].getItems()[5].getColumns()[0].setVisible(false);
					oTablesHbox4.getItems()[1].getItems()[5].getColumns()[1].setVisible(false);

					 $.ajax({
						url: "",
						success: function(data){
							debugger
							// let oIcon = new sap.ui.core.IconPool.getIconURI("expand"); 
							oTotalColumn.setHeader(new sap.m.HeaderContainer({
								showDividers: false,
								height:"18px"
							}))
							let oHeaderContainer = oTotalColumn.getHeader();
							oHeaderContainer.addContent(new sap.m.Label({
								text:"Total Amount (INR)"
							}))
							oHeaderContainer.addContent(new sap.ui.core.Icon({
								src: "sap-icon://expand",
								color: "darkblue",
								hoverColor: "red",
								activeColor: "darkgreen",
								size: "12px",
								press: function(oEvent){
									debugger
									if(oTotalColumn.oParent.oParent.oParent.getItems()[0].mProperties.visible == false){
										oTotalColumn.oParent.oParent.oParent.getItems()[0].setVisible(true);
										oTotalColumn.oParent.oParent.oParent.getItems()[1].setVisible(true);
										oTotalColumn.oParent.getColumns()[0].setVisible(true);
										oTotalColumn.oParent.getColumns()[1].setVisible(true);
										oTotalColumn.getParent().getParent().getParent().getParent().getItems()[2].setVisible(true);
										oHeaderContainer.setHeight("12px");
									} else {
										oTotalColumn.oParent.oParent.oParent.getItems()[0].setVisible(false);
										oTotalColumn.oParent.oParent.oParent.getItems()[1].setVisible(false);
										oTotalColumn.oParent.getColumns()[0].setVisible(false);
										oTotalColumn.oParent.getColumns()[1].setVisible(false);
										oTotalColumn.getParent().getParent().getParent().getParent().getItems()[2].setVisible(false);
										oHeaderContainer.setHeight("18px");
									}
									
								}
							}))
						

							// second vendor


							oTotalColumn1.setHeader(new sap.m.HeaderContainer({
								showDividers: false,
								height:"18px"
							}))
							let oHeaderContainer1 = oTotalColumn1.getHeader();
							oHeaderContainer1.addContent(new sap.m.Label({
								text:"Total Amount (INR)"
							}))
							oHeaderContainer1.addContent(new sap.ui.core.Icon({
								src: "sap-icon://expand",
								color: "darkblue",
								hoverColor: "red",
								activeColor: "darkgreen",
								size: "12px",
								press: function(oEvent){
									debugger
									if(oTotalColumn1.oParent.oParent.oParent.getItems()[0].mProperties.visible == false){
										oTotalColumn1.oParent.oParent.oParent.getItems()[0].setVisible(true);
										oTotalColumn1.oParent.getColumns()[0].setVisible(true);
										oTotalColumn1.oParent.getColumns()[1].setVisible(true);
										oTotalColumn1.getParent().getParent().getParent().getParent().getItems()[2].setVisible(true);
										oHeaderContainer1.setHeight("12px");
									} else {
										oTotalColumn1.oParent.oParent.oParent.getItems()[0].setVisible(false);
										oTotalColumn1.oParent.getColumns()[0].setVisible(false);
										oTotalColumn1.oParent.getColumns()[1].setVisible(false);
										oTotalColumn1.getParent().getParent().getParent().getParent().getItems()[2].setVisible(false);
										oHeaderContainer1.setHeight("18px");
									}
									
								}
							}))

							// third vendor

							oTotalColumn2.setHeader(new sap.m.HeaderContainer({
								showDividers: false,
								height:"18px"
							}))
							let oHeaderContainer2 = oTotalColumn2.getHeader();
							oHeaderContainer2.addContent(new sap.m.Label({
								text:"Total Amount (INR)"
							}))
							oHeaderContainer2.addContent(new sap.ui.core.Icon({
								src: "sap-icon://expand",
								color: "darkblue",
								hoverColor: "red",
								activeColor: "darkgreen",
								size: "12px",
								press: function(oEvent){
									debugger
									if(oTotalColumn2.oParent.oParent.oParent.getItems()[0].mProperties.visible == false){
										oTotalColumn2.oParent.oParent.oParent.getItems()[0].setVisible(true);
										oTotalColumn2.oParent.getColumns()[0].setVisible(true);
										oTotalColumn2.oParent.getColumns()[1].setVisible(true);
										oTotalColumn2.getParent().getParent().getParent().getParent().getItems()[2].setVisible(true);
										oHeaderContainer1.setHeight("12px");
									} else {
										oTotalColumn2.oParent.oParent.oParent.getItems()[0].setVisible(false);
										oTotalColumn2.oParent.getColumns()[0].setVisible(false);
										oTotalColumn2.oParent.getColumns()[1].setVisible(false);
										oTotalColumn2.getParent().getParent().getParent().getParent().getItems()[2].setVisible(false);
										oHeaderContainer2.setHeight("18px");
									}
									
								}
							}))


							// fourth vendor

							oTotalColumn3.setHeader(new sap.m.HeaderContainer({
								showDividers: false,
								height:"18px"
							}))
							let oHeaderContainer3 = oTotalColumn3.getHeader();
							oHeaderContainer3.addContent(new sap.m.Label({
								text:"Total Amount (INR)"
							}))
							oHeaderContainer3.addContent(new sap.ui.core.Icon({
								src: "sap-icon://expand",
								color: "darkblue",
								hoverColor: "red",
								activeColor: "darkgreen",
								size: "12px",
								press: function(oEvent){
									debugger
									if(oTotalColumn3.oParent.oParent.oParent.getItems()[0].mProperties.visible == false){
										oTotalColumn3.oParent.oParent.oParent.getItems()[0].setVisible(true);
										oTotalColumn3.oParent.getColumns()[0].setVisible(true);
										oTotalColumn3.oParent.getColumns()[1].setVisible(true);
										oTotalColumn3.getParent().getParent().getParent().getParent().getItems()[2].setVisible(true);
										oHeaderContainer3.setHeight("12px");
									} else {
										oTotalColumn3.oParent.oParent.oParent.getItems()[0].setVisible(false);
										oTotalColumn3.oParent.getColumns()[0].setVisible(false);
										oTotalColumn3.oParent.getColumns()[1].setVisible(false);
										oTotalColumn3.getParent().getParent().getParent().getParent().getItems()[2].setVisible(false);
										oHeaderContainer3.setHeight("18px");
									}
									
								}
							}))


							// fifth vendor

							oTotalColumn4.setHeader(new sap.m.HeaderContainer({
								showDividers: false,
								height:"18px"
							}))
							let oHeaderContainer4 = oTotalColumn4.getHeader();
							oHeaderContainer4.addContent(new sap.m.Label({
								text:"Total Amount (INR)"
							}))
							oHeaderContainer4.addContent(new sap.ui.core.Icon({
								src: "sap-icon://expand",
								color: "darkblue",
								hoverColor: "red",
								activeColor: "darkgreen",
								size: "12px",
								press: function(oEvent){
									debugger
									if(oTotalColumn4.oParent.oParent.oParent.getItems()[0].mProperties.visible == false){
										oTotalColumn4.oParent.oParent.oParent.getItems()[0].setVisible(true);
										oTotalColumn4.oParent.getColumns()[0].setVisible(true);
										oTotalColumn4.oParent.getColumns()[1].setVisible(true);
										oTotalColumn4.getParent().getParent().getParent().getParent().getItems()[2].setVisible(true);
										oHeaderContainer4.setHeight("12px");
									} else {
										oTotalColumn4.oParent.oParent.oParent.getItems()[0].setVisible(false);
										oTotalColumn4.oParent.getColumns()[0].setVisible(false);
										oTotalColumn4.oParent.getColumns()[1].setVisible(false);
										oTotalColumn4.getParent().getParent().getParent().getParent().getItems()[2].setVisible(false);
										oHeaderContainer4.setHeight("18px");
									}
									
								}
							}))

						}
						
					})
			}
		}
		}
	});
});
