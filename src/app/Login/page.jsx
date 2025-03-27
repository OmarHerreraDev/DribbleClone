'use client'
import Banner from "@/components/Banner";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react"; // Manejo de estado si necesitas mostrar errores o estados
import { handleLogin, singInWithGoogle } from "@/app/firebase/config"; // Importa las funciones necesarias

export default function Login() {
  const [email, setEmail] = useState(""); // Estado para el correo
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [error, setError] = useState(null); // Estado para manejar errores (opcional)
  
  // Función para manejar el inicio de sesión con Google
  const handleGoogleLogin = async () => {
    try {
      const user = await singInWithGoogle(); // Llama a la función singInWithGoogle
      console.log("Inicio de sesión exitoso con Google:", user);
      window.location.href = "/Main";
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
      setError("No se pudo iniciar sesión con Google. Inténtalo de nuevo."); // Maneja el error
    }
  };

  // Función para manejar el inicio de sesión con email y password
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, password); // Llama a la función handleLogin
      console.log("Inicio de sesión exitoso");
      window.location.href = "/Main";
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sección del Banner */}
      <div className="w-3/12 bg-black">
        <Banner />
      </div>

      {/* Sección del Formulario */}
      <div className="w-9/12 bg-white flex items-center justify-start relative left-36">
        <div className="p-10 rounded-lg bg-white w-full max-w-md">
          {/* Título */}
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign In to Dribble</h2>

          {/* Botón para Google */}
          <button
            onClick={handleGoogleLogin} // Vincula la función al evento onClick
            className="flex items-center justify-center w-full py-4 px-5 mb-6 text-md font-medium text-gray-700 border border-gray-300 rounded-3xl hover:bg-gray-200"
          >
            <FcGoogle className="mr-2 text-2xl" /> Sign in with Google
          </button>

          {/* Muestra un mensaje de error si hay uno */}
          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

          {/* Separador */}
          <div className="text-center text-gray-500 text-sm mb-6">or use your email</div>

          {/* Formulario */}
          <form onSubmit={handleFormSubmit} className="space-y-4">
            {/* Campo de nombre de usuario */}
            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-700">
                Username or Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                value={email} // Vincula el valor del input al estado
                onChange={(e) => setEmail(e.target.value)} // Actualiza el estado
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-md"
              />
            </div>

            <a
              href="#"
              className="block text-right text-sm text-[#0d0c22] mt-1 underline relative top-10"
            >
              Forgot?
            </a>

            {/* Campo de contraseña */}
            <div>
              <label htmlFor="password" className="block text-md font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password} // Vincula el valor del input al estado
                onChange={(e) => setPassword(e.target.value)} // Actualiza el estado
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-md"
              />
            </div>

            {/* Botón de inicio de sesión */}
            <button
              type="submit"
              className="w-full py-4 px-5 text-white text-md bg-[#0d0c22] rounded-3xl hover:bg-[#565564] focus:outline-none focus:ring focus:ring-blue-200"
            >
              Sign In
            </button>
          </form>

          {/* Registro */}
          <div className="text-center text-gray-500 text-sm mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-[#0d0c22] font-medium hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
