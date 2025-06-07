import { HeroTitle } from "@/components/atoms/heroTitles/page";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-3/6 h-full">
        <img
          className="w-full h-full object-cover"
          src="img-loginn.png"
          alt=""
          width="full"
        />
      </div>
      <div className="w-3/6">
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
            <div className="text-3xl font-bold text-center mb-6">
              <HeroTitle text="login"/>
            </div>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="ejems@exam.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="**********"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  ¿olvidaste tu contraseña?
                </div>
              </div>

              <div className="flex items-center justify-center my-4">
                <hr className="w-1/3 border-gray-300" />
                <span className="mx-2 text-gray-400">o</span>
                <hr className="w-1/3 border-gray-300" />
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50"
              >
                <img
                  src="https://img.icons8.com/color/16/000000/google-logo.png"
                  alt="Google"
                  className="mr-2"
                />
                continuar con Google
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-50"
              >
                <img
                  src="https://img.icons8.com/color/16/000000/facebook-new.png"
                  alt="Facebook"
                  className="mr-2"
                />
                continuar con Facebook
              </button>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 mt-2"
              >
                Acceder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
