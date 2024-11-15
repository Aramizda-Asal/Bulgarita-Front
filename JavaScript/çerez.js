function ÇerezOluştur(ad, değer, son_tarih)
{
    let expires = "expires=" + son_tarih.toUTCString() + "; ";
    document.cookie = ad + "=" + değer + "; " + expires + "path=/; SameSite=Strict;";
    console.log(document.cookie);
}

function ÇerezDeğeri(ad)
{
    if (typeof(ad) === "string")
    {
        let değer = document.cookie.split("; ").find(
            (row) => row.startsWith(`${ad}=`)
        )?.split("=")[1];
        if (typeof(değer) === "string")
        {
            return değer;
        }
        return "";
    }
    return "";
}