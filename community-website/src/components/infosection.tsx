export default function InfoSection() {
    return (
        <section className="bg-red-dark">
            <div className="container mx-auto pb-52 pt-28">
                <div className="text-white container flex 2xl:flex-nowrap xs:flex-wrap md:flex-row justify-center gap-12">
                    <div className="container aspect-square xl:basis-1/3 lg:basis-1/2 md:basis-1/2 xs:basis-2/3 rounded p-4 xs:p-5 sm:p-10 bg-red shadow-2xl ">
                        <h2 className="text-center sm:text-2xl md:text-3xl lg:text-4xl mt-4 pb-8">Palvelimet</h2>
                        <p className="md:text-1xl lg:text-2xl">Pyöritämme tällä hetkellä 7 palvelinta TF2:sa ja CS2:sa yhteensä. Tulevaisuudessa tulemme laajentamaan uusiin pelimuotoihin ja jopa mahdollisesti muihin peleihin.</p>
                    </div>
                    <div className="container aspect-square xl:basis-1/3 lg:basis-1/2 md:basis-1/2 xs:basis-2/3 rounded p-4 xs:p-5 sm:p-10 bg-red shadow-2xl">
                        <h2 className="text-center sm:text-2xl md:text-3xl lg:text-4xl mt-4 pb-8">Tietoa meistä</h2>
                        <p className="md:text-1xl lg:text-2xl">Pelitupa on suomalainen peliyhteisö, joka on perustettu vuonna 2018. Tavoitteenamme on tarjota pelaajille turvallinen ja viihtyisä ympäristö, jossa he voivat pitää hauskaa yhdessä muiden pelaajien kanssa.</p>
                    </div>
                    <div className="container aspect-square xl:basis-1/3 lg:basis-1/2 md:basis-1/2 xs:basis-2/3 rounded p-4 xs:p-5 sm:p-10 bg-red shadow-2xl">
                        <h2 className="text-center sm:text-2xl md:text-3xl lg:text-4xl mt-4 pb-8">Discord</h2>
                        <p className="md:text-1xl lg:text-2xl">Liity Pelituvan Discord-palvelimelle ja keskustele muiden pelaajien kanssa! Discord on ilmainen ääni- ja tekstipalvelin, joka on suunniteltu erityisesti pelaajille.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}