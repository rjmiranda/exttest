Ext.define('DVLOOP.view.user.NewView', {    // ** lo que estamos haciendo aca es dar moldura al boton que creamos en el paso anterio en USERS (que le dijimos que al
    extend: 'Ext.window.Window',        //hacer Double clik vaya  a la grilla y lea donde le indicamos, 
    alias: 'widget.usernuevo',           // Ahora le decimos que al hacer double click abra una ventama de tipo window. dentro de ella que contenga el xtype....

    title: 'ingr Usu',                     //Luego volvemos a Users, para indicarle la vista a esta nueva ventana de tipo window.Window
    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'email',
                        fieldLabel: 'Email'
                    }
                ]
            }
        ];

        this.buttons = [
				{
				    text: 'agregar usuario',
				    action: 'add'
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