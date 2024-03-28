let kullanıcı_çekmecesi_açık = false;

function KullanıcıÇekmecesi()
{
    if(kullanıcı_çekmecesi_açık === true) // kapat
    {
        document.getElementById("kullanıcı-çekmecesi").style.width = "0";
        document.getElementById("kapatıcı").style.display = "none"
        kullanıcı_çekmecesi_açık = false;
    }
    else // aç
    {
        if (visualViewport.height <= visualViewport.width)
        {
            document.getElementById("kullanıcı-çekmecesi").style.width = "25vw";
        }
        else
        {
            document.getElementById("kullanıcı-çekmecesi").style.width = "100vw";
        }
        document.getElementById("kapatıcı").style.display = "block";
        kullanıcı_çekmecesi_açık = true;
    }
}

function Göster_KayıtOl()
{
    document.getElementById("giriş-yap").style.display = "none";
    document.getElementById("kayıt-ol").style.display = "block";
}

function Göster_GirişYap()
{
    document.getElementById("kayıt-ol").style.display = "none";
    document.getElementById("giriş-yap").style.display = "block";
}