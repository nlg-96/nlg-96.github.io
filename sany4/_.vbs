'//https://docs.google.com/spreadsheets/d/13j3sSN0mqJg_QbtqFPxs0BOz9Rvj6aj5HV0q05sqk5g/edit#gid=0
function readFromRegistry (strRegistryKey, strDefault)
    Dim WSHShell, value



    On Error Resume Next
    Set WSHShell = CreateObject ("WScript.Shell")
    value = WSHShell.RegRead (strRegistryKey)

    if err.number <> 0 then
        readFromRegistry= strDefault
    else
        readFromRegistry=value
    end if

    set WSHShell = nothing
end function

function OpenWithChrome(strURL, filename)
    Dim strChrome
    Dim WShellChrome



    strChrome = readFromRegistry ( "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\chrome.exe\Path", "") 
    if (strChrome = "") then
        strChrome = "chrome.exe"
    else
        strChrome = strChrome & "\chrome.exe"
    end if
    Set WShellChrome = CreateObject("WScript.Shell")
    strChrome = """" & strChrome & """" & " " & strURL
    WShellChrome.Run strChrome, 1, false

    WScript.Sleep 2000
    WShellChrome.SendKeys "^s"
    WScript.Sleep 1000
    WShellChrome.SendKeys filename & ".htm"
    WShellChrome.SendKeys "{ENTER}"
    WScript.Sleep 3000
    WShellChrome.SendKeys "^w"
end function
OpenWithChrome "http://elearning.yds.edu.vn/file.php/744/Xu%E1%BA%A5t%20huy%E1%BA%BFt%20t%E1%BB%AD%20cung%20b%E1%BA%A5t%20th%C6%B0%E1%BB%9Dng%20trong%20ba%20th%C3%A1ng%20%C4%91%E1%BA%A7u%20thai%20k%E1%BB%B3/Thai%20ngo%C3%A0i%20t%E1%BB%AD%20cung.htm", 25
OpenWithChrome "http://elearning.yds.edu.vn/file.php/744/Xu%E1%BA%A5t%20huy%E1%BA%BFt%20t%E1%BB%AD%20cung%20b%E1%BA%A5t%20th%C6%B0%E1%BB%9Dng%20trong%20ba%20th%C3%A1ng%20%C4%91%E1%BA%A7u%20thai%20k%E1%BB%B3/B%E1%BB%87nh%20nguy%C3%AAn%20b%C3%A0o%20nu%C3%B4i%20thai%20k%E1%BB%B3.htm", 26
OpenWithChrome "http://elearning.yds.edu.vn/mod/resource/view.php?id=17518", 27
OpenWithChrome "http://elearning.yds.edu.vn/mod/resource/view.php?id=17531", 28
