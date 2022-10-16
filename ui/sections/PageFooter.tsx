import { Footer } from "flowbite-react"

export const PageFooter = () => {
    return (
        <Footer container={true}>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        href="/"
                        src="/simlogo.svg"
                        alt="SIM Logo"
                        name="SIM"
                    />
                    <Footer.LinkGroup>
                        
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright
                    href="#"
                    by="SIM"
                    year={2022}
                />
            </div>
        </Footer>
    )
}