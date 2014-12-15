Ext.define('DVLOOP.view.user.Calculadora2View', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.calculadora2',
    title: 'Vista 2 de la Calculadora',
    layout: 'auto',
    itemId: 'calculadora2View',
    bbar: [
         {

             text: 'Operaciones',
             menu: [
                 {
                     text: 'Sumar',
                     handler: function () {
                         this.fireEvent('sumarItemMenu',this);
                     }
                 },
                 {
                     text: 'Restar',
                     handler: function () {
                         this.fireEvent('restarItemMenu', this);
                     }
                 },
                 {
                     text: 'Multiplicar',
                     handler: function () {
                         this.fireEvent('multiplicarItemMenu', this);
                     }
                 },
                 {
                     text: 'dividir',
                     handler: function () {
                         this.fireEvent('dividirItemMenu', this);
                     }
                 }
             ]
         }
    ],
    items: [
       {
           itemId: 'primerNumero',
           xtype: 'textfield',
           name: 'name',
           fieldLabel: 'Numero1'
                   
       },
       {
           itemId: 'segundoNumero',
           xtype: 'textfield',
           name: 'name',
           fieldLabel: 'Numero2'
       },
       {
           itemId: 'resultadoOperacion',
           xtype: 'textfield',
           name: 'name',
           fieldLabel: 'Resultado'
       }

    ],
});