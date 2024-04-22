export default function InfoSection() {
    return (
        <section className="bg-red-dark">
            <div className="container items-center mx-auto pb-52 pt-28">
                <div className="container flex flex-wrap gap-14">
                    <div className="flex-1 rounded p-4 xs:p-5 sm:p-10 bg-red shadow-2xl ">
                        <h2 className="text-white text-4xl text-center pb-4">Palvelimet</h2>
                        <p className="text-white text-2xl">Pyöritämme tällä hetkellä 7 palvelinta TF2:sa ja CS2:sa yhteensä. Tulevaisuudessa tulemme laajentamaan uusiin pelimuotoihin ja jopa mahdollisesti muihin peleihin.</p>
                    </div>
                    <div className="flex-1 rounded p-4 xs:p-5 sm:p-10 bg-red shadow-2xl">
                        <h2 className="text-white text-4xl text-center pb-4">Tietoa meistä</h2>
                        <p className="text-white text-2xl">Pelitupa on suomalainen peliyhteisö, joka on perustettu vuonna 2018. Tavoitteenamme on tarjota pelaajille turvallinen ja viihtyisä ympäristö, jossa he voivat pitää hauskaa yhdessä muiden pelaajien kanssa.</p>
                    </div>
                    <div className="flex-1 rounded p-4 xs:p-5 sm:p-10 bg-red shadow-2xl">
                        <h2 className="text-white sm:text-2xl md:text-3xl lg:text-4xl text-center pb-4">Discord</h2>
                        <p className="text-white md:text-1xl lg:text-2xl">Liity Pelituvan Discord-palvelimelle ja keskustele muiden pelaajien kanssa! Discord on ilmainen ääni- ja tekstipalvelin, joka on suunniteltu erityisesti pelaajille.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}