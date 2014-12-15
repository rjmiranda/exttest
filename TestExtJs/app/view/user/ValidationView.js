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
           fieldLabel: 'validationNumero'
           /*validation function () {


               

           }*/
       }
    ]
});