Ext.define('DVLOOP.view.user.ValidationView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.validationView',
    title: 'Validation',
    layout: 'auto',
    itemId: 'validationView',
    items: [
       {
           itemId: 'validationNum',
           xtype: 'textfield',
           name: 'name',
           fieldLabel: 'validationView',
           validator: function (value) {
              
               if (value != 0) {
                   return true;

               } else {
                   return 'no se puede ingresar 0';


               }

                   
                  

           }

       }


    ]
});