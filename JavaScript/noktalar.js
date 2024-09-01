class Nokta
{
    constructor(Bulgarca_Latin, Bulgarca_Kiril, Türkçe, Osmanlıca, enlem, boylam)
    {
        this.Bulgarca_Latin = Bulgarca_Latin;
        this.Bulgarca_Kiril = Bulgarca_Kiril;
        this.Türkçe = Türkçe;
        this.Osmanlıca = Osmanlıca;
        this.enlem = enlem;
        this.boylam = boylam;
    }
}

class Feature
{
    constructor(Bulgarca_Latin, Bulgarca_Kiril, Türkçe, Osmanlıca, enlem, boylam)
    {
        this.type = "Feature";
        this.properties = {};
        this.properties["BulgarcaLatin"] = Bulgarca_Latin;
        this.properties["BulgarcaKiril"] = Bulgarca_Kiril;
        this.properties["Türkçe"] = Türkçe;
        this.properties["Osmanlıca"] = Osmanlıca;
        this.geometry = {};
        this.geometry["type"] = "Point";
        this.geometry["coordinates"] = [boylam, enlem];
    }
}

var noktalarJSON =
{
    "type": "FeatureCollection",
    "features": []
};

function NoktalarıBaşlat()
{
    let noktalar = [];
    noktalar.push(new Feature("Pazardzhik", "Пазарджик", "Pazarcık", "PazarcıkO", 42.192271, 24.334235));
    noktalar.push(new Feature("Plovdiv", "Пловдив", "Filibe", "FilibeO", 42.13585393690252, 24.74551641878407));
    noktalarJSON.features = noktalar;
}