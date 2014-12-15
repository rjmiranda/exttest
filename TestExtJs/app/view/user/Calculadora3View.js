Ext.define('DVLOOP.view.user.Calculadora3View', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.calculadora3',
    title: 'Vista 3, calculadora',
    layout: 'auto',
    itemId: 'calculadora3View',
    items: [
       {
           itemId: 'primerNumero3',
           xtype: 'textfield',
           name: 'name',
           fieldLabel: 'Numero1'
       },
        {
            itemId: 'operador3',
            xtype: 'textfield',
            fieldLabel: 'Operador'
        },
       {
           itemId: 'segundoNumero3',
           xtype: 'textfield',
           name: 'name',
           fieldLabel: 'Numero2'
       },
        {
            itemId: 'resultadoOperacion3',
            xtype: 'textfield',
            fieldLabel: 'Resultado'
        },

       {

           xtype: 'button',
           text: 'Calcular',
           action: 'calcular'
       }


    ]







});