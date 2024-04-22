export default function InfoSection() {
    return (
        <section className="bg-red-dark">
            <div className="container relative flex flex-wrap items-center justify-between mx-auto pb-52 pt-28">
                <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xs:space-y-4  lg:space-y-0 lg:space-x-24">
                    <div className="container p-4 xs:p-5 sm:p-10 bg-red shadow-2xl rounded">
                        <h2 className="text-white text-4xl text-center pb-4">Palvelimet</h2>
                        <p className="text-white text-2xl mx-auto">Pyöritämme tällä hetkellä 7 palvelinta TF2:sa ja CS2:sa yhteensä. Tulevaisuudessa tulemme laajentamaan uusiin pelimuotoihin ja jopa mahdollisesti muihin peleihin.</p>
                    </div>
                    <div className="container p-4 xs:p-5 sm:p-10 bg-red shadow-2xl rounded">
                        <h2 className="text-white text-4xl text-center pb-4">Tietoa meistä</h2>
                        <p className="text-white text-2xl mx-auto">Pelitupa on suomalainen peliyhteisö, joka on perustettu vuonna 2018. Tavoitteenamme on tarjota pelaajille turvallinen ja viihtyisä ympäristö, jossa he voivat pitää hauskaa yhdessä muiden pelaajien kanssa.</p>
                    </div>
                    <div className="container p-4 xs:p-5 sm:p-10 bg-red shadow-2xl rounded">
                        <h2 className="text-white text-4xl text-center pb-4">Discord</h2>
                        <p className="text-white text-2xl mx-auto">Liity Pelituvan Discord-palvelimelle ja keskustele muiden pelaajien kanssa! Discord on ilmainen ääni- ja tekstipalvelin, joka on suunniteltu erityisesti pelaajille.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}