Ext.define('DVLOOP.view.user.ListView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    itemId: 'userPanelView',

    title: 'All Users',

    tbar: [
        { text: 'Ingresar Usuario', action: 'nuevo' },
        { text: 'Eliminar Usuario', action: 'delete' }
    ],

    initComponent: function () {
        this.store = {
            fields: ['name', 'email', 'active'],
            data: [
                { name: 'Ed', email: 'ed@sencha.com', active: true },
                { name: 'Tommy', email: 'tommy@sencha.com', active: false },
                { name: 'PEPE', email: 'PEPE@sencha.com', active: false },
                { name: 'TOM', email: 'TOM@sencha.com', active: true },
                { name: 'ASD', email: 'ASD@sencha.com', active: true },
                { name: 'RAFA', email: 'RAFA@sencha.com', active: false }
            ]

        };

this.columns = [
    { header: 'Name', dataIndex: 'name', flex: 1 },
    { header: 'Email', dataIndex: 'email', flex: 1 },
    { xtype: 'checkcolumn', text: 'Active', dataIndex: 'active' },
    {
        xtype: 'actioncolumn',
        icon: 'cross.png',
        width: 30,

        handler: function (view, rowIndex, colIndex, item, e, record) {

            record.store.remove(record);

        }
    }

];


this.callParent(arguments);
}
});