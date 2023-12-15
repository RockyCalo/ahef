
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";




export default function ReviewCardiorespiratory(){
return (
        <PageComponent title='Skin'>
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
                      id="wheezing"
                      name="wheezing"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                      Wheezing
                  </div>

                  </div>

                                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id="palpitations"
                      name="palpitations"
                      type="checkbox"
                      className="h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />

                      Palpitations
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id="difficult_breathing"
                      name="difficult_breathing"
                      type="checkbox"
                      className="h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                        Difficult breathing while lying down
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
                      id="cough"
                      name="cough"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Cough
                    </label>
                    </div>
                  </div>
                  </div>


                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    Change in Color
                  </div>

                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                       Chestpain
                  </div>

                  </div>


                   <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    Others:
                  </div>

                  </div>


                   <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                    <p></p>
                  </div>

                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name=""
                      type="/"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">

                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex ml-2 text-sm items-center">

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
