Ext.define('DVLOOP.view.LayoutType.AutoLayoutView', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.ventana4',
    title: 'Auto Layout Panel',
    
    layout: 'auto',
   
    items: [{
        xtype: 'panel',
        title: 'Panel Interior Superior',
        width: '75%',
        height: 90
    },
     {
         xtype: 'panel',
         title: 'Panel Interior',
         width: '75%',
         height: 90
     }],

});
