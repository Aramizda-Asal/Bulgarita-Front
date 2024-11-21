function KayitOl()
{
    let KullanıcıAdı = document.getElementById("kullanıcıadı-kayıt").value
    let E_Posta = document.getElementById("eposta-kayıt").value
    let Parola1 = document.getElementById("parola-kayıt").value
    let Parola2 = document.getElementById("parola-kayıt-tekrar").value
    if(Parola1 === Parola2)
    {
        let url = "http://localhost:5130/Kullanıcı/KullanıcıEkle/" + KullanıcıAdı + "/" + E_Posta + "/" + Parola1
        fetch(url, {method: 'POST'})
            .then(response =>{
                if(response.status === 201)
                {
                    alert("Kayit Olundu")
                }
                else
                {
                    alert("Kayit Olunamadı")
                }
            })
    }
    else
    {
        alert("Kayit Olunamadı")
    }
}

async function GirişYap()
{
    let kullanıcıAdı = encodeURIComponent(document.getElementById("kullanıcıadı-giriş").value);
    let parola = encodeURIComponent(document.getElementById("parola-giriş").value);

    let url = `http://localhost:5130/Oturum/GirişYap/${kullanıcıAdı}/${parola}`;
    let yanıt = await fetch(url, {method: 'GET'});

    if (yanıt.status === 200)
    {
        let yanıt_json = await yanıt.json();
        let oturum = JSON.parse(yanıt_json);
        let çerez_sonu = new Date(oturum.Bitiş);
        ÇerezOluştur("KULLANICI", oturum.Kullanıcı.Kimlik, çerez_sonu);
        ÇerezOluştur("OTURUM", oturum.Kimlik, çerez_sonu);
        şimdi_kullanan = oturum.Kullanıcı;
    }
    else
    {
        alert("Giriş Reddedildi.");
    }
    ArayüzüKişiselleştir();
}

async function OturumAçık()
{
    let kullanıcı_kimliği = encodeURIComponent(ÇerezDeğeri("KULLANICI"));
    let oturum_kimliği = encodeURIComponent(ÇerezDeğeri("OTURUM"));

    let url = `http://localhost:5130/Oturum/OturumAçık/${oturum_kimliği}/${kullanıcı_kimliği}`;
    console.log(url);
    response = await fetch(url, {method: 'GET'});
    if (response.status === 200)
    {
        let jresponse = await response.json();
        şimdi_kullanan = JSON.parse(jresponse);
        return true;
    }
    else
    {
        şimdi_kullanan = null;
        return false;
    }
}