Ext.define('DVLOOP.view.user.AccordionView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.accordionView',
    title: 'Accordion Layout View',
    width: 300,
    height: 300,

    layout: 'accordion',
    items: [{
        xtype: 'panel',
        title: 'Mi Panel'
    },

    {
        xtype: 'grid',
        title: 'Esto es una Grilla',
        
        store :{
            fields: ['name', 'email'],
            data: [
                { name: 'Ed', email: 'ed@sencha.com' },
                { name: 'Tommy', email: 'tommy@sencha.com' }
            ]
        },

        columns :[
             { header: 'Name', dataIndex: 'name', flex: 1 },
            { header: 'Email', dataIndex: 'email', flex: 1 }
        ]
    },
       

            
    {
        xtype: 'panel',
        title: 'Panel 2',
        items: [
            {
                xtype: 'grid',
                store: Ext.create('Ext.data.Store', {
                    fields: [
                        {name: 'id', type: 'int'},
                        {name: 'titulo',  type: 'string'},
                        {name: 'cargo', type: 'string'},
                        {name: 'idioma',  type: 'string'}
                    ],
                    proxy: 'memory',
                    data: [
                        { id: 23, titulo: 'Base', cargo: 'anotador', idioma: 'Ingles' },
                        { id: 10, titulo: 'Enganche', cargo: 'anotador', idioma: 'Castellano' }
                    ]
                }),
                columns: [
                    {
                        text: 'Id',
                        dataIndex: 'id'
                    },
                    {
                        text: 'Titulo',
                        dataIndex: 'titulo'
                    },
                    {
                        text: 'Lengua Madre',
                        dataIndex: 'idioma'
                    }
                ]
            }
        ]
        //html: 'Panel content!'

    }, {
       html: 'esoy libre para ser Editado'
    }
    ],


});


