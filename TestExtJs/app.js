Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'DVLOOP',

    appFolder: 'app',
    controllers: [
        'UsersController'
    ],
                                        // el 3er paso luego de crear y modificar el Controller, User. Colocamos los controladores.

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                
                xtype: 'home'
                   
            }
            
            

          });
    }
});
                //  1
//comienza con una instancia de aplicación de clase. La aplicación contiene la configuración global para su aplicación
//(como el nombre de la aplicación), así como mantiene las referencias a todos los modelos,
//vistas y controladores utilizados por la aplicación. Una aplicación también contiene una función de lanzamiento, 
//que se ejecuta automáticamente cuando se carga todo.

                                    