import { Navbar } from "flowbite-react"

export const PageHeader = () => {

    return (
        <div className="fixed w-screen bg-white z">
            <div className="grid  max-w-screen-xl px-4  mx-auto ">
                <Navbar fluid  >

                    <Navbar.Brand href="/">
                        <img
                            src="/simlogo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="SIM Logo"
                        />
                        <span className="hidden lg:block self-center whitespace-nowrap text-xl font-semibold ">
                            Status, Incident and Maintenance (SIM) Standard
                        </span>
                        <span className="lg:hidden self-center whitespace-nowrap text-xl font-semibold ">
                            SIM Standard
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Navbar.Link
                            href="#what"
                        >
                            What?
                        </Navbar.Link>
                        <Navbar.Link href="#why">
                            Why?
                        </Navbar.Link>
                        <Navbar.Link href="#spec">
                            The Spec
                        </Navbar.Link>
                        <Navbar.Link href="#try">
                            Try It
                        </Navbar.Link>
                        <Navbar.Link href="#support">
                            Help
                        </Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}