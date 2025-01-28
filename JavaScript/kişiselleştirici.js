/**
 * Şu an geçerli olan oturumun kullanıcı nesnesi.  
 * Oturum bilgilerini içermez.
 */
let şimdi_kullanan = null;

/**
 * Sayfa yüklenirken çalışır.
 */
async function Açılış()
{
    await OturumAçık();
    ArayüzüKişiselleştir();
}

/**
 * Oturum durumuna bağlı olarak kullanıcı arayüzünü düzenleyen
 * diğer fonksiyonları çağırır.
 */
function ArayüzüKişiselleştir()
{
    KullanıcıÇekmecesiniKişiselleştir();
}

/**
 * Oturum durumuna bağlı olarak kullanıcı çekmecesinin içeriğini düzenler.
 */
function KullanıcıÇekmecesiniKişiselleştir()
{
    if (şimdi_kullanan !== null)
    {
        AnonimdenKişisele();

        document.getElementById("kullanıcı-çekmecesi-başlık").innerText = şimdi_kullanan.Adı;

        document.getElementById("kişisel-çekmece-ana").style.display = "block";
    }
    else
    {
        KişiseldenAnonime();

        if (KaydolBölümüAçık)
        {
            document.getElementById("kullanıcı-çekmecesi-başlık").innerHTML = "Kaydol";
        }
        else
        {
            document.getElementById("kullanıcı-çekmecesi-başlık").innerHTML = "Giriş Yap";
        }
    }
}

/**
 * Anonim bölgeleri kapatır ve kişisel bölgeleri açar.  
 * Çoğu zaman, geçerli bir oturum başlarken kullanılmalıdır.
 */
function AnonimdenKişisele()
{
    let anonim_bölgeler = document.getElementsByClassName("anonim-bölge");
    let kişisel_bölgeler = document.getElementsByClassName("kişisel-bölge");

    if (anonim_bölgeler.length >= 1)
    {
        for (let i = 0; i < anonim_bölgeler.length; i++)
        {
            anonim_bölgeler[i].style.display = "none";
        }
    }

    if (kişisel_bölgeler.length >= 1)
    {
        for (let i = 0; i < kişisel_bölgeler.length; i++)
        {
            kişisel_bölgeler[i].style.display = "block";
        }
    }

    KÇAnaSayfa();
}

/**
 * Kişisel bölgeleri kapatır ve anonim bölgeleri açar.  
 * Çoğu zaman, oturum sonlanırken kullanılmalıdır.
 */
function KişiseldenAnonime()
{
    let anonim_bölgeler = document.getElementsByClassName("anonim-bölge");
    let kişisel_bölgeler = document.getElementsByClassName("kişisel-bölge");
    
    if (kişisel_bölgeler.length >= 1)
    {
        for (let i = 0; i < kişisel_bölgeler.length; i++)
        {
            kişisel_bölgeler[i].style.display = "none";
        }
    }

    if (anonim_bölgeler.length >= 1)
    {
        for (let i = 0; i < anonim_bölgeler.length; i++)
        {
            anonim_bölgeler[i].style.display = "block";
        }
    }
}