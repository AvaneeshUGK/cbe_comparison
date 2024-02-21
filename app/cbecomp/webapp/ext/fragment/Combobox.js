sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onPress: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        },
        onChangefun: function (oEvent) {
            debugger

            let dropArray

            dropArray = [];
            let oItems = oEvent.getSource().getItems();
            oItems.forEach(item => {
                dropArray.push(item.getText());
            });

            let newValue
            newValue = oEvent.getParameters().newValue

            let selectedIndex
            selectedIndex = dropArray.indexOf(newValue);
            let oForms
            oForms = oEvent.getSource().getParent().getItems()[1].getItems();

            oForms.forEach((form,index)=>{
                form.setVisible(false);
                if(index == selectedIndex){
                    form.setVisible(true);
                }
            })

        }
    };
});
