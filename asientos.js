function mostrar(asientos)
{
    var str1 = "", str2 = "";
    var str = "|";
    for(var i = 1; i <= asientos.length; i++)
    {
        var e = (asientos[i - 1] == undefined ? " " : "*");
        if(i % 2 == 1)
        {
            str1 += " " + i + "[" + e + "]";
        }
        else
        {
            str2 += " " + i + "[" + e + "]";
        }
    }
    str += str1 + " |\n|" + str2 + " |\n\n";
    return str;
}  

function reserva()
{
    var N = 10; // Número de asientos
    var asientos = [];
    for(var i = 0; i < N; i++)
    {
        asientos[i] = undefined;
    }
    var mensaje = "0. Salir\n" +
                  "1. Reservar asiento\n" +
                  "2. Liberar asiento\n" + 
                  "3. Buscar\n";
   
    var option = 0;
    while(true)
    {
        var str = mostrar(asientos) + mensaje + " >> Ingrese opcion:";
        option = parseInt(prompt(str));
        if(option == 0)
        {
            break;
        }
        else if(option == 1)
        {
            str = "Seleccione asiento:\n" + mostrar(asientos);
            var nro = parseInt(prompt(str));
            if(asientos[nro - 1] == undefined)
            {
                if (nro > 0 && nro <= N)
                {
                    var name =  prompt("Nombre del pasajero");
                    var id = parseInt(prompt("DNI del pasajero"));
                    asientos[nro - 1] = {
                    nombre: name,
                    dni: id
                    };
                }
                else
                    alert("El numero ingresado no se encuentra en el rango de asientos");
            }
            else
                alert("El asiento ya esta ocupado");
        }
        else if(option == 2)
        {
            str = "Seleccione asiento:\n" + mostrar(asientos);
            var nro = parseInt(prompt(str));
            if (nro > 0 && nro <= N)
            {
                if(asientos[nro - 1] != undefined)
                {
                    asientos[nro - 1] = undefined;
                    alert("Asiento liberado");
                }
                else
                    alert("El asiento no esta ocupado");
            }
            else
                alert("El numero ingresado no se encuentra en el rango de asientos");
        }
        else if(option == 3)
        {
            
            str = "Ingresar DNI:\n" + mostrar(asientos);
            var nro = parseInt(prompt(str));
            for(var i = 0; i < asientos.length; i++)
            {
                var bandera = false;
                if(asientos[i] != undefined)
                {
                    if(nro == asientos[i].dni)
                    {
                        str = mostrar(asientos) +
                              "Numero de asiento: " + (i + 1) + "\n" +
                              "Nombre del pasajero: " + asientos[i].nombre + "\n" + 
                              "DNI del pasajero: " + asientos[i].dni + "\n"
                        alert(str);
                        break;
                    }
                    else
                        bandera = true;
                }
                else
                        bandera = true;
            }
            if(bandera)
                alert("Numero de DNI no encontrado");
        }
    } 
}

reserva();