Ext.define('DVLOOP.view.HomeView', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.home',
    title: 'Esta View es la Principal, es un Tab.Panel',
    activeTab:5,
    layout: 'fit',
    autoShow: true,
    items: [{
        title: 'List View',
       xtype:'userlist'
    }, {
        title: 'this View Contains Accordion.',
        xtype: 'accordionView',
               
    }, {
        title: 'calculadora',
        xtype: 'calculadora'
    },
    {
        title: 'calculadora2View',
        xtype: 'calculadora2'
    },
     {
         title: 'calculadora3View',
         xtype: 'calculadora3'
     },
     {
         title: 'Validation View',
         xtype: 'validationView'

     }

    ],
        
});
