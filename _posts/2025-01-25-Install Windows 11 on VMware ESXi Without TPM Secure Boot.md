---
date: 25.01.2025
layout: post
title: This PC doesn’t currently meet Windows 11 system requirements
excerpt: Diese Anleitung zeigt dir, wie du Windows 11 auf einer virtuellen Maschine unter VMware ESXi installierst und dabei die Systemanforderungen (wie TPM und Secure Boot) umgehst.
image: /rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/001.webp
---

Diese Anleitung zeigt dir, wie du Windows 11 auf einer virtuellen Maschine unter VMware ESXi installierst und dabei die Systemanforderungen (wie TPM und Secure Boot) umgehst.

---

## **Schritt 1: Virtuelle Maschine starten und Installation beginnen**

1. **VM starten**  
   - Die VM bootet ins Menü **Boot Manager**.  
   - Falls das nicht automatisch passiert, öffne die Konsole.

2. **Bootquelle auswählen**  
   - Wähle **"EFI VMware Virtual SATA CDROM Drive (0.0)"**, um vom Windows 11 Installationsmedium zu booten.

3. **Windows-Setup startet**  
   - Nach einigen Sekunden erscheint das Windows 11 Logo – die Installation beginnt.

![](/rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/001.jpg)  
![](/rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/002.jpg)  
![](/rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/003.jpg)  
![](/rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/004.jpg)

---

## **Schritt 2: Die Fehlermeldung „This PC doesn’t currently meet Windows 11 system requirements“ umgehen**

Da TPM und Secure Boot fehlen, schlägt die Installation ohne Anpassung fehl.

1. **Fehlermeldung erscheint**  
   - Windows zeigt: _„This PC doesn’t currently meet Windows 11 system requirements.“_  
   - Grund: Die VM erfüllt nicht die TPM-Anforderung.

2. **Lösung: Registry Editor öffnen**  
   - Drücke **Shift + F10**, um die Eingabeaufforderung zu öffnen.  
   - Gib **`regedit`** ein und drücke **Enter**.

![](/rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/005.jpg)  
![](/rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/006.jpg)

---

## **Schritt 3: Windows-Registry anpassen, um TPM-Check zu umgehen**

Durch Bearbeitung der Registry können TPM- und Secure Boot-Überprüfungen deaktiviert werden.

1. **Navigiere im Registry Editor zu:**  

HKEY_LOCAL_MACHINE\SYSTEM\Setup


2. **Neuen Schlüssel „LabConfig“ erstellen**  
- Rechtsklick auf **Setup** > **Neu > Schlüssel**  
- Benenne den Schlüssel zu **LabConfig**

3. **Neue DWORD-Werte hinzufügen**  
- Rechtsklick auf **LabConfig** > **Neu > DWORD (32-bit) Value**  
- Erstelle:
  - **BypassTPMCheck** = `1`  
  - Optional auch: **BypassSecureBootCheck** = `1`

4. **Registry Editor schließen und Installation fortsetzen**  
- Registry Editor und Eingabeaufforderung schließen  
- Zur Installation zurückkehren

![](/rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/007.jpg)  
![](/rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/008.jpg)  
![](/rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/009.jpg)  
![](/rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/010.jpg)  
![](/rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/011.jpg)  
![](/rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/012.jpg)

---

## **Schritt 4: Windows 11 Installation fortsetzen**

1. **Windows Setup starten**  
- Die Installation sollte nach dem Registry-Patch problemlos weiterlaufen.

2. **Sprache und Region auswählen**  
- Wähle Sprache, Region und Tastaturlayout aus.

3. **Installationsart wählen**  
- Wähle **„Install Windows 11“**  
- Akzeptiere, dass vorhandene Daten gelöscht werden.

4. **Windows 11 Edition auswählen**  
- Z. B. **Windows 11 Pro** auswählen.

5. **Installation beginnt**  
- Der Installationsprozess startet und Windows 11 wird in der VM eingerichtet.

---

## **Fazit**

Mit dieser Methode kannst du Windows 11 erfolgreich auf einer ESXi-VM installieren, selbst wenn die Systemanforderungen wie TPM oder Secure Boot nicht erfüllt werden. Der Registry-Hack ist ein bewährter Weg, um die Systemprüfung zu umgehen.

![](/rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/013.jpg)  
![](/rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/014.jpg)  
![](/rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/015.jpg)  
![](/rubinhood-blog/assets/img/Install-Windows-11-on-VMware-ESXi-Without-TPM-Secure-Boot/016.jpg)

## Viel Spaß beim Virtualisieren!
