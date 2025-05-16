import React, { useState, Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  Transition,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";

import { useCategories } from "../../../context/CategoriesContext";

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoriesUser, setCategoriesUser] = useState([]);
  const { categories } = useCategories()

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  useEffect(() => {
    setCategoriesUser(categories)
    console.log(categories)
  }, [categories])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    closeModal();
  };

  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Categorias</h1>
          <button
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition duration-300"
            onClick={openModal}
          >
            Nueva Categoría
          </button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Crear una Nueva Categoría
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Crea una categoría personalizada para organizar tus
                        transacciones.
                      </p>
                      <form>
                        <label className="block text-sm font-medium text-gray-700 mt-4">
                          Seleccionar el tipo de flujo
                        </label>
                        <input
                          type="text"
                          className="w-full my-2 p-2 rounded-lg border border-gray-300"
                          placeholder="Gasto o Ingreso"
                        />
                        <div className="flex space-x-3">
                          <label className="block text-sm font-medium text-gray-700 mt-4">
                            Nombre
                          </label>
                          <input
                            type="text"
                            className="w-full my-2 p-2 rounded-lg border border-gray-300"
                            placeholder="Ej. Comidas"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="mt-4 flex justify-end space-x-2">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Guardar
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <div className="w-full border border-gray-300 rounded-lg p-5">
          <h2 className="font-semibold text-xl">Gestión de Categorías</h2>
          <span className="text-gray-500">
            Organiza tus transacciones con categorías personalizadas para un
            mejor seguimiento financiero.
          </span>
          <table className="min-w-full border border-gray-300 border-collapse rounded-md mt-5">
            <thead className="hover:bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500">Color</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500">Nombre</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500">Tipo</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-500">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    {/* <span className={`inline-block w-4 h-4 rounded-full`} style={{ backgroundColor: cat.color }}></span> */}
                  </td>
                  <td className="px-4 py-4 font-medium text-gray-900">{category.name}</td>
                  <td className={`${category.type == "ingreso" ? "font-sm text-green-700 font-medium" : "font-sm text-red-700 font-medium"}`}>{category.type}</td>
                  <td className="px-4 py-4 flex space-x-4">
                    <button className="text-gray-500 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Categories;
