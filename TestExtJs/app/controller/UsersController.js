Ext.define('DVLOOP.controller.UsersController', {                            //  Los controladores son el pegamento que une a una solicitud acompañada. 
    extend: 'Ext.app.Controller',                                //Todo lo que realmente hacen es escuchar los sucesos (por lo general de visitas) y tomar algunas acciones

    views: [
         'user.ListView',
         'user.EditView',
         'user.NewView',
         'HomeView',
         'user.AccordionView',
         'user.CalculadoraView',
         'LayoutType.AutoLayoutView',
         'user.Calculadora2View',
         'user.Calculadora3View',
         'user.ValidationView'
        
    ],
    refs: [
        { ref: 'userPanelView', selector: '#userPanelView' },
        { ref: 'calculadoraView', selector: '#calculadoraView' },
        { ref: 'primerNum', selector: '#primerNum' },
        { ref: 'segundoNum', selector: '#segundoNum' },
        { ref: 'resultadoOperacion', selector: '#resultadoOperacion' },
        { ref: 'resultado', selector: '#resultado' },
        { ref: 'primerNumero', selector: '#primerNumero' },
        { ref: 'segundoNumero', selector: '#segundoNumero' },
        { ref: 'calculadora2View', selector: '#calculadora2View' },
        { ref: 'calculadora3View', selector: '#calculadora3View' },
        { ref: 'primerNumero3', selector: '#primerNumero3' },
        { ref: 'segundoNumero3', selector: '#segundoNumero3' },
        { ref: 'resultadoOperacion3', selector: '#resultadoOperacion3' },
        { ref: 'operador3', selector: '#operador3' }
                                                                                                

    ],

    //  init: function() {
    //    this.control({
    //      'userlist': {                       //antes era Viewport > panel, ahora es userlist. osea mira a la lista de usuarios.
    //        itemdblclick: this.editUser     // luego en la lista de usuarios (list) le decimos que que cuando le hacemos double click, en este caso EDITAR. (sige *
    // }

    //   });
    // },                                      // (sólo rinden en este caso) para funciones de controlador. El efecto general es que cada vez que cualquiera de los componentes
    //que coincide con nuestro selector dispara un render evento, nuestro onPanelRendered función se llama.                    



    // ***  editUser: function (grid, record) {                  //* editUser esta declarada arriba lo que aca lo que le decimos es: cuando hagas double clicked en EditUser..                        
    //  ***   console.log('Double clicked on ' + record.get('name'));  //* imprimime en consola, lo que hago, en este caso, voy a la grilla y leo donde clickleo + 'name' 
    // ***  }                                                               // Sigo en Edit.!, cuando ya delcare que hacer con el itemblclick, voy para decirle que me abra un nueva ventana que sea window Window para editar



    // ** Cuando volvemos de la Vista Edit, lo que hacemos es colorcar la vista para que este controlador 
    //pueda ver a esa Ventana (window.Window cuando le hagamos double clicked.

    //*** cuando le indicamos a la nueva vista (Edit.) tambien modificamos la funcion para que pueda escuchar a la vista (edit)


    //  editUser: function (grid, record) {         //*** editUser es el nombre de la funcion que habia declaro con ateriorirdad para decirle que hacia cuando hacia double clik
    //    var view = Ext.widget('useredit');      //*** var view (view) es el nombre de la variable que le doy, lo que dice es:
    //*** cuando hagas DOUBLE CLICK (editUSER), busco en la grilla, donde hice el click y abro una ventana window window(Edit)
    //  view.down('form').loadRecord(record);   //*** cuando la abras, baja un nivel y anda al formulario que esta en Record, lo busca en (Edit) el xtype, name y Email.
    //}
    //**** de momento esta funcion no hace mas que mostrar en pantalla la vista window. Window, ahora la edito para que guarde


    init: function () {                                 //ESTA FUNCION COMIENZA Y TERMINA CON LA DEVOLUCION DE LA LLAMADA EN: EDITUSER: FUNCTION (GRID,RECORD){ CONSOL.
        this.control({
            '*': {
                'sumarItemMenu': this.sumarItemMenu,
                'restarItemMenu': this.restarItemMenu,
                'multiplicarItemMenu': this.multiplicarItemMenu,
                'dividirItemMenu': this.dividirItemMenu
                
            },

            'viewport > userlist': {
                itemdblclick: this.editUser         //ACA LE DECIAMOS QUE HAGA DOUBLE CLICK SOBRE USERLIST PARA EDITAR AL USUARIO
            },
            'home > userlist': {
                itemdblclick: this.editUser         //ACA LE DECIAMOS QUE HAGA DOUBLE CLICK SOBRE USERLIST PARA EDITAR AL USUARIO
            },
            'calculadora2 > userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {   // UNA VEZ QUE ABRE LA VENTANA LO QUE QUEREMOS ES QUE GUARDE LOS DATOS INGRESADOS. (ABAJO DE TODO)
                click: this.updateUser
            },
            'userlist button[action=nuevo]': {
                click: this.nuevoUser
            },
            'usernuevo button[action=add]': {
                click: this.addUser
            },
            'userlist button[action=delete]': {
                click: this.borrar
            },
            'calculadora button[action=sumar]': {
                click: this.sumar
            },
            'calculadora button[action=restar]': {
                click: this.restar
            },

            'calculadora button[action=dividir]': {
                mouseover: this.dividir
            },
            'calculadora button[action=multiplicar]': {
                mouseover: this.multiplicar
            },
            'calculadora3 button[action=calcular]': {
                mouseover: this.calcular
            }

        });

    },
    calcular: function (button) {

        var primerNumero3 = this.getPrimerNumero3();
        var segundoNumero3 = this.getSegundoNumero3();
        var operador3 = this.getOperador3();
        var calculadora3View = this.getCalculadora3View();
        var resultadoOperacion3 = this.getResultadoOperacion3();

        switch (operador3.value) {
            case '*':
                var calcular = (primerNumero3.value * segundoNumero3.value);
                break;
            case '-':
                var calcular = (primerNumero3.value - segundoNumero3.value);
                break;
            case '/':
                var calcular = (primerNumero3.value / segundoNumero3.value);
                break;
            case '+':
                var calcular = parseInt(primerNumero3.value) + parseInt(segundoNumero3.value);
                break;
            case '%':
                var calcular = (primerNumero3.value % segundoNumero3.value);
                break;
            default:
                alert('Error, Operadores de Tipo  :  * ,- ,+ ,/ ,% ');
        };

        resultadoOperacion3.setValue(calcular);

    },

       dividirItemMenu: function () {
        console.log('divido');
        var primerNumero = this.getPrimerNumero();
        var segundoNumero = this.getSegundoNumero();
        var calculadora2View = this.getCalculadora2View();
        var resultadoOperacion = this.getResultadoOperacion();
        var dividirItemMenu = (primerNumero.value / segundoNumero.value);
        resultadoOperacion.setValue(dividirItemMenu);
        //  console.log(primerNumero.value / segundoNumero.value);
    },

    multiplicarItemMenu: function () {
        console.log('multiplico');
        var primerNumero = this.getPrimerNumero();
        var segundoNumero = this.getSegundoNumero();
        var calculadora2View = this.getCalculadora2View();
        var resultadoOperacion = this.getResultadoOperacion();
        var multiplicarItemMenu = (primerNumero.value * segundoNumero.value);
        resultadoOperacion.setValue(multiplicarItemMenu);
        //console.log(primerNumero.value * segundoNumero.value);
    },

    restarItemMenu: function () {
        console.log('restooo');
        var primerNumero = this.getPrimerNumero();
        var SegundoNumero = this.getSegundoNumero();
        var calculadora2View = this.getCalculadora2View();
        var restarItemMenu = (primerNumero.value - SegundoNumero.value);
        var resultadoOperacion = this.getResultadoOperacion();
        resultadoOperacion.setValue(restarItemMenu);
        // console.log(primerNumero.value - SegundoNumero.value);
    },

    sumarItemMenu: function () {
        console.log('llegueeeeeeeeee');
        var primerNumero = this.getPrimerNumero();
        var SegundoNumero = this.getSegundoNumero();
        var calculadora2View = this.getCalculadora2View();
        var sumarItemMenu = parseInt(primerNumero.value) + parseInt(SegundoNumero.value);
        var resultadoOperacion = this.getResultadoOperacion();
        resultadoOperacion.setValue(sumarItemMenu);
        //console.log(primerNumero.value + SegundoNumero.value);
    },

    multiplicar: function (button) {
        console.log('entre a multiplicar');
        var primerNum = this.getPrimerNum();
        var segundoNum = this.getSegundoNum();
        var calculadoraView = this.getCalculadoraView();
        var resultado = this.getResultado();
        var multiplicar = (primerNum.value * segundoNum.value);
        resultado.setValue(multiplicar);
    },

    dividir: function (button) {
        console.log('dividir');
        var primerNum = this.getPrimerNum();
        var segundoNum = this.getSegundoNum();
        var calculadoraView = this.getCalculadoraView();
        var resultado = this.getResultado();
        var dividir = (primerNum.value / segundoNum.value);
        resultado.setValue(dividir);

    },

    restar: function (button) {
        console.log('entre a restar');
        var primerNum = this.getPrimerNum();
        var segundoNum = this.getSegundoNum();
        var calculadoraView = this.getCalculadoraView();
        var resultado = this.getResultado();
        var resta = (primerNum.value - segundoNum.value);
        resultado.setValue(resta);
        console.log(resta);

    },

    sumar: function (button) {

        var primerNum = this.getPrimerNum().value;
        var segundoNum = this.getSegundoNum().value;
        var resultado = this.getResultado();
        var calculadoraView = this.getCalculadoraView();

        //tambien podia obtner primerNum = calculadoraView.items.items[0].value
        //tambien podia obtner segundoNum = calculadoraView.items.items[0]

        var suma = parseInt(primerNum) + parseInt(segundoNum);

        resultado.setValue(suma);

    },

    editUser: function (grid, record) {             // ACA COLOCAMOS LO QUE HACE EL BOTON DE DOUBLE CLICK QUE LO DIRENCCIONAMOS A USER EDIT, LO QUE ABRIA UNA WINDOW
        var view = Ext.widget('useredit');          // ACA LA ABRE, Y ABAJO LE DICE QUE BAJE UN NIVEL MAS DONDE SE ENCUENTRA EL FORMULARIO.
        view.down('form').loadRecord(record);          // VOLVIENDO A USEREDIT BUTTON [ACTION=SAVE]  CLICK: THIS.UPDATEUSER, PARA GUADRAR LOS DATOS INGRESADOS.    
    },
    borrar: function (button) {
        // console.log('estoyyy');
        var miGrilla = button.up('grid');
        //console.log(miGrilla);
        var items = miGrilla.store.data.items;
        //console.log(items.length);
        itemsSeleccionados = [];
        for (var i = 0; i <= items.length - 1; i++) {

            if (items[i].data.active == true) {
                // console.log(items[i].data);
                itemsSeleccionados.push(items[i]);
                console.log(items[i].data);

            }
        }

        //items.forEach(function (item) {

        //    if (item.data.active == true) {
        //        itemsSeleccionados.push(item);
        //        //console.log(item.data);
        //    }
        //})



        miGrilla.store.remove(itemsSeleccionados);
    },

    updateUser: function (button, record) {

        var win = button.up('window'),                  // esto lo que hace es guardar en la grilla los datos que cambieamos en la grilla, 
        form = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();

        record.set(values);
        win.close();

    },

    nuevoUser: function (grid, record) {
        console.log('click para abrir');
        var view = Ext.widget('usernuevo');

    },

    addUser: function (button) {


        var win = button.up('window'),
             form = win.down('form'),
             datos = form.getValues();
        var panel = this.getUserPanelView();
        panel.store.add(datos);

        win.close();

    }


});