sap.ui.define([], function () {
    "use strict";
  
    return {
        fomratNumber: function(iValue) {
          var sReturn = "";
          if (iValue) {
            sReturn = parseFloat(iValue).toFixed(2);
        }
        return sReturn;    
       },

      getDiscountinuedText: function(value){
        var sReturn = "";
        if(value === true){
            sReturn = "Discountinued";
        } else{

            sReturn = "Available";
        }
        return sReturn;
      },
      
      getDiscountinuedColorScheme: function(value){
        var sReturn = "";
        if(value === true){
            sReturn = "3";
        } else{

            sReturn = "8";
        }
        return sReturn;
      }
    };
  });