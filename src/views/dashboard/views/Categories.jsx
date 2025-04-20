import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition, RadioGroup } from "@headlessui/react";

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

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
        </div>
      </div>
    </>
  );
};

export default Categories;
