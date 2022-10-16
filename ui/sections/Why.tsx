export const Why = () => {

    return (
        <div  className="gap-8 grid lg:grid-cols-2 xl:gap-16">
            <img className="w-full mb-4 rounded-lg lg:mb-0 lg:flex order-2 lg:order-1" src="/feature-4.png"
                alt="dashboard feature image" />

            <div className="text-gray-500 sm:text-lg dark:text-gray-400 order-1 lg:order-2">
                <h2  className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Why SIM?
                </h2>
                <p className="mb-8 font-light lg:text-xl">
                    The world has embraced the move to Cloud services, including SaaS, PaaS and IaaS services.
                    A modern web application will consume multiple services and are dependent on these services.
                </p>
                <p className="mb-8 font-light lg:text-xl">
                    The <strong>challenge</strong> for any IT departments is monitoring the health of these critical
                    services. Some companies Cloud providers have status pages, some don't and the many vary in
                    the information given and how it is shared. Many have reverted to using Atom and RSS.
                </p>
                <p className="mb-8 font-light lg:text-xl">
                    When your website experiences an issue you need to know why and if it is one of your Cloud service providers?
                    This means going to each suppliers status page and manually checking the status. This delays resolving issues
                    and costs money.
                </p>
                <p className="mb-8 font-light lg:text-xl">
                    SIM aims to change this by creating a standard by which the status of Cloud services can be shared. By having a single standard
                    it become easy to provision dashboards that monitor the services you are dependent on. When an issue occurs you can see from a single
                    page where the issue is and with which provider.                </p>


            </div>
        </div>
    );
}