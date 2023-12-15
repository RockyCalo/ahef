


import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";



export default function ReviewNeurological(){
return (
        <PageComponent title='Neurological'>
            <form action="">
                            <fieldset>
                            <div className="border border-gray-900/10 pb-8">
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-10 ml-8">

                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="none"
                      name="none"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       None
                    </label>
                    </div>
                  </div>
                  </div>



                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id="headache"
                      name="headache"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                        Headache
                  </div>

                  </div>

                                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id="seizures"
                      name="seizures"
                      type="checkbox"
                      className="h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />

                        Seizure / convulsions
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id="difficulty_in_communicating"
                      name="difficulty_in_communicating"
                      type="checkbox"
                      className="h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                        Difficulty in communicating
                  </div>

                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id=""
                      name="/"
                      type="/"
                      className="h-8 w-24 ml-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>

                  </div>


                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
                      type="/"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                                    <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                  </div>
                  </div>


                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="numbness"
                      name="numbness"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                       Numbness
                  </div>

                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="fainting"
                      name="fainting"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                       Fainting episodes
                  </div>

                  </div>




    <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex ml-2 text-sm items-center">
                    <p><br/> </p>

                  </div>

                  </div>

    <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex ml-2 text-sm items-center">
                    <p><br/> </p>

                  </div>

                  </div>

    <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex ml-2 text-sm items-center">
                    <p></p>

                  </div>

                  </div>
                    </div>
                </div>
                         <div className="flex justify-end bg-gray-50"
                            // onClick={save}
                            >
                                    <Tbutton>Next</Tbutton>
                            </div>
            </fieldset>
            </form>
    </PageComponent>

)
}
