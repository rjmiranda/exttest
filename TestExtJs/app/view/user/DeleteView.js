Ext.define('DVLOOP.view.user.DeleteView', {    // ** lo que estamos haciendo aca es dar moldura al boton que creamos en el paso anterio en USERS (que le dijimos que al
    extend: 'Ext.window.Window',        //hacer Double clik vaya  a la grilla y lea donde le indicamos, 
    alias: 'widget.userdelete',           // Ahora le decimos que al hacer double click abra una ventama de tipo window. dentro de ella que contenga el xtype....

    title: 'delete User',                     //Luego volvemos a Users, para indicarle la vista a esta nueva ventana de tipo window.Window
    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = { xtype: 'checkcolumn', text: 'Active', dataIndex: 'active' },

        this.buttons = [
				{
				    text: 'Delete User',
				    action: 'delete'
				},
				{
				    text: 'Cancel',
				    listeners: {
				        click: function () {
				            this.up('window').close();
				        }
				    }
				}

        ];

        this.callParent(arguments);
    }
});