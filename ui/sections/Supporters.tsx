import { Avatar } from "flowbite-react"

export const Supporters = () => {

    return (

        <div className="">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400 pb-8">
                <h2 id="supporters" className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Supporters
                </h2>

                <a href="https://twitter.com/mike_treestacks" className="">
                    <Avatar

                        img="https://pbs.twimg.com/profile_images/1517413836365651968/po_hppIE_400x400.jpg"
                        rounded={true}
                    >
                        <div className="space-y-1 font-medium dark:text-white">
                            <div>
                                Mike
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Project Founder
                            </div>
                        </div>
                    </Avatar>
                </a>

            </div>

            <div className="items-center max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">

                    <p className="mb-8 font-light lg:text-xl">
                        Reach out to <a href="https://twitter.com/mike_treestacks" className="text-purple-600 hover:text-purple-800 ">
                            @mike_treestacks</a> for more information, questions and to add your name to the supporters list.
                    </p>

                </div>
            </div>
        </div>

    )
}