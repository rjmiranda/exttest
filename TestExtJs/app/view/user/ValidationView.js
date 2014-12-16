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
           validator: function (x) {
               if (x != 0 ) {
                 // return  console.log(x);

               } else {
                   console.log(false);
                   console.log('Error, Ingreso cualquier cosa');
               }
               var dividendo;
               dividendo = x;
               console.log(dividendo);

           }

       }


    ]
});