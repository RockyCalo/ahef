import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";



export default function ReviewHeent(){
return (
        <PageComponent title='HEENT'>
            <form action="">
                            <fieldset>
                            <div className="border border-gray-900/10 pb-8">
                    <div className="mt-8 grid grid-cols-4 sm:grid-cols-5 ml-8 ">

                                 <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="none"
                      name="none"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                               <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     None
                    </label>
                    </div>
                  </div>


                              <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="eye_itchiness"
                      name="eye_itchiness"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>


                                <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Eye itchiness
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="toothache"
                      name="toothache"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>


                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Toothache
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="polydipsia"
                      name="polydipsia"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>



                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Polydipsia
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
                      type="/"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>



                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="blurring_of_vision"
                      name="blurring_of_vision"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Blurring of vision
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offhearing_changesers"
                      name="hearing_changes"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Hearing changes
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="gum_bleeding"
                      name="gum_bleeding"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Gum bleeding
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="others_heent_review"
                      name="others_heent_review"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Others:
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
                      type="/"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                    Floaters /glare
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Nose bleed
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Sore Throat
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
                      type="/"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
                      type="/"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Tearing / eye discharge
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Nasal discharge
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Difficulty Swallowing
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
                      type="/"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
                      type="/"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Eye redness /pain
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Ear discharge or pain
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Hoarness
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
                      type="/"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
                      type="/"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
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
