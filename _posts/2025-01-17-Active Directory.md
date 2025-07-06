---
date: 17.01.2025
layout: post
title: Active Directory (AD) – Eine Domäne einrichten und einen Client verbinden
excerpt: Diese Anleitung bietet eine Schritt-für-Schritt-Erklärung zur Einrichtung einer Active-Directory-Umgebung und zum Verbinden eines Windows-10-Clients mit der Domäne.
image: /rubinhood-blog/assets/img/Active-Directory/022.webp
---

![](/rubinhood-blog/assets/img/Active-Directory/021.jpg)  
![](/rubinhood-blog/assets/img/Active-Directory/022.jpg)

## Einführung  
Diese Anleitung bietet eine Schritt-für-Schritt-Erklärung zur Einrichtung einer **Active Directory**-Umgebung und zum Verbinden eines **Windows 10 Clients** mit der Domäne.  
Wenn du diese Schritte befolgst, wirst du:  
- Eine **Organizational Unit (OU)** und ein **Benutzerkonto** erstellen  
- Die **Netzwerkeinstellungen** auf dem Client konfigurieren  
- Einen **Windows 10 Client** mit der Domäne verbinden  
- Dich mit einem **Domänenbenutzerkonto** anmelden  

Jeder Schritt wird durch Screenshots veranschaulicht.

---

#### Schritt 1: **Active Directory Users and Computers** öffnen  
Klicke oben rechts im Menü auf **Tools** und wähle **Active Directory Users and Computers** aus dem Dropdown-Menü.

#### Schritt 2: Neue **Organizational Unit (OU)** erstellen  
Rechtsklick auf deine Domäne, dann **New > Organizational Unit** auswählen.

#### Schritt 3: Name für OU vergeben  
Gib z. B. **Employees** als Namen ein und stelle sicher, dass **Protect container from accidental deletion** aktiviert ist. Klicke auf **OK**.

![](/rubinhood-blog/assets/img/Active-Directory/001.jpg)  
![](/rubinhood-blog/assets/img/Active-Directory/002.jpg)  
![](/rubinhood-blog/assets/img/Active-Directory/003.jpg)

#### Schritt 4: Neues Benutzerkonto erstellen  
Rechtsklick auf die OU **Employees**, dann **New > User** wählen.

#### Schritt 5: Benutzerdaten eingeben  
Vorname, Nachname und Anmeldename eingeben (z. B. `C.Neumann`). Klicke auf **Next**.

#### Schritt 6: Passwort festlegen  
Ein **Passwort** eingeben und **User must change password at next logon** aktivieren. Klicke auf **Next**.

![](/rubinhood-blog/assets/img/Active-Directory/004.jpg)  
![](/rubinhood-blog/assets/img/Active-Directory/005.jpg)  
![](/rubinhood-blog/assets/img/Active-Directory/006.jpg)

#### Schritt 7: Benutzerkonto bestätigen  
Überprüfe die Daten und klicke auf **Finish**, um das Konto zu erstellen.

#### Schritt 8: Netzwerkeinstellungen am Windows 10 Client öffnen  
Gehe zum **Windows 10 Client** und öffne über das Netzwerksymbol in der Taskleiste die **Network & Internet settings**.

#### Schritt 9: Erweiterte Netzwerkeinstellungen öffnen  
Klicke auf **Change adapter options**, um die Adaptereinstellungen zu öffnen.

![](/rubinhood-blog/assets/img/Active-Directory/007.jpg)  
![](/rubinhood-blog/assets/img/Active-Directory/008.jpg)  
![](/rubinhood-blog/assets/img/Active-Directory/009.jpg)

#### Schritt 10: Netzwerkadapter konfigurieren  
Öffne die **Ethernet properties**, wähle **Internet Protocol Version 4 (TCP/IPv4)** und setze den **Preferred DNS Server** auf die IP-Adresse des Domain Controllers (z. B. `192.168.178.10`). Klicke auf **OK**.

#### Schritt 11: Systemsteuerung öffnen  
Öffne die **Control Panel**, stelle auf **Small icons view** um und klicke auf **System**.

#### Schritt 12: Computereinstellungen ändern  
Im Fenster **System Properties** auf **Change** klicken, um den PC umzubenennen oder einer Domäne beizutreten.

![](/rubinhood-blog/assets/img/Active-Directory/010.jpg)  
![](/rubinhood-blog/assets/img/Active-Directory/011.jpg)  
![](/rubinhood-blog/assets/img/Active-Directory/012.jpg)

#### Schritt 13: Domäne beitreten  
Wähle **Domain**, gib den Domänennamen ein (z. B. `rubinhood.local`) und bestätige mit **OK**.

#### Schritt 14: Administrator-Zugangsdaten eingeben  
Gib die **Administrator-Zugangsdaten** ein und klicke auf **OK**.

#### Schritt 15: Beitrittsbestätigung  
Eine Nachricht bestätigt, dass der Computer erfolgreich der Domäne beigetreten ist. Klicke auf **OK**.

![](/rubinhood-blog/assets/img/Active-Directory/013.jpg)  
![](/rubinhood-blog/assets/img/Active-Directory/014.jpg)  
![](/rubinhood-blog/assets/img/Active-Directory/015.jpg)

#### Schritt 16: Computer neu starten  
Eine Aufforderung zum **Neustart** erscheint. Klicke auf **OK** und starte das System neu.

#### Schritt 17: Anmeldung mit Domänenkonto  
Wähle auf dem Anmeldebildschirm **Other user** und gib die Domänendaten ein (z. B. `c.neumann`).

#### Schritt 18: Passwortänderung bei Erstlogin  
Da das Konto beim ersten Login ein neues Passwort erfordert, erscheint eine Aufforderung. Klicke auf **OK**.

![](/rubinhood-blog/assets/img/Active-Directory/016.jpg)  
![](/rubinhood-blog/assets/img/Active-Directory/017.jpg)  
![](/rubinhood-blog/assets/img/Active-Directory/018.jpg)

#### Schritt 19: Neues Passwort eingeben  
Gib ein **neues Passwort** ein, bestätige es und drücke **Enter**.

![](/rubinhood-blog/assets/img/Active-Directory/019.jpg)  
![](/rubinhood-blog/assets/img/Active-Directory/020.jpg)

#### Schritt 20: Erstes Login & Profilerstellung  
Windows richtet das Benutzerprofil ein – der Domänenbenutzer ist nun erfolgreich angemeldet.

---

## Fazit  
Glückwunsch! Du hast erfolgreich eine **Active Directory**-Domäne eingerichtet und einen **Windows 10 Client** verbunden.

Der Client kann jetzt:  
- Auf **Netzwerkressourcen** innerhalb der Domäne zugreifen  
- Sich mit **Domänenanmeldedaten** authentifizieren  
- Zentral über **Group Policies** verwaltet werden

Diese Struktur ist ideal für **Unternehmensumgebungen** und bietet verbesserte **Sicherheit, Verwaltung und Skalierbarkeit**.

Wenn du **weitere Clients** hinzufügen möchtest, wiederhole einfach die **Schritte 8–20** auf anderen Geräten.

---
