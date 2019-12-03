# Ejercicio Crear un formulario

## Requisitos
1. Instalar dependencia para usar componentes hooks para controlar un formulario.
    ```
      npm install --save react-hook-form
    ```

## Trabajo a realizar
1) En el componente login crear un formulario solicitando el correo electrónico y la contraseña.
2) Validar el correo como un correo válido
3) Validar la contraseña con la estructura básica (8 caracteres, al menos un mayuscula, una minúscula, un dígito y un caractér espcial)
4) Imprimir en consola el resultado de el formulario.

## Ejecución 
1. Importar el hook **useForm** de la libreria **react-hook-form**

    ```
      import useForm from 'react-form-hook';
    ```
2. Crear el formulario para capturar el correo electronico y la contraseña

    ```
       <form className="loginForm" >
          <input type="email" name="email" placeholder="correo@eletron.co"/>
          <input type="password" name="password" placeholder="contraseña"/>
          <button type="submit">Iniciar Sesión</button>
        </form>
    ```

3. Obtener los elementos necesarios del hook **useForm** estos son:

   1. 
