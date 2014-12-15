Ext.define('DVLOOP.view.user.CalculadoraView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.calculadora',
    title: 'Anchor Layout View',
    layout: 'auto',
    itemId: 'calculadoraView',
    items: [
        {
            itemId: 'primerNum',
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Numero1'
        },
        {
            itemId: 'segundoNum',
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Numero2'
        },
        {
            itemId: 'resultado',
            xtype: 'textfield',
            fieldLabel: 'Resultado'
        },
        {
            
            xtype: 'button',
            text: 'Suma',
            action: 'sumar'
        },
        {
            xtype: 'button',
            text: 'Restar',
            action: 'restar'
        },
        {
            xtype: 'button',
            text: 'Dividir',
            action: 'dividir'
        },
        {
            xtype: 'button',
            text: 'Multiplicar',
            action: 'multiplicar'
        }

       
    ]
});

