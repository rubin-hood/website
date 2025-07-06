---
date: 04.02.2025
layout: post
title: RDP-Zugriff per GPO für Windows-Clients einrichten
excerpt: In einer Windows-Server-Umgebung ist das Remote Desktop Protocol (RDP) aus Sicherheitsgründen standardmäßig deaktiviert. Um RDP-Zugriff für Mitarbeitende mit Windows-Clients zu ermöglichen, müssen die entsprechenden Einstellungen per Gruppenrichtlinie (GPO) in Active Directory (AD) konfiguriert werden.
image: /rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/023.webp
---

In einer Windows-Server-Umgebung ist das Remote Desktop Protocol (RDP) aus Sicherheitsgründen standardmäßig deaktiviert. Um RDP-Zugriff für Mitarbeitende mit Windows-Clients zu ermöglichen, müssen die entsprechenden Einstellungen per Gruppenrichtlinie (GPO) in Active Directory (AD) konfiguriert werden.

![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/023.jpg)

### Active Directory-Benutzer und -Computer öffnen
Öffne den **Server-Manager**, klicke auf **Tools** und wähle **Active Directory-Benutzer und -Computer** aus.

![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/001.jpg)

### Benutzer und Computer organisieren
Navigiere durch deine Domänenstruktur und überprüfe die Organisationseinheiten (OUs) für **Computer** und **Benutzer**.

![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/002.jpg)
![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/003.jpg)

### Benutzer zur Sicherheitsgruppe hinzufügen
Erstelle oder verwalte eine Gruppe für Remote-Desktop-Benutzer und füge die benötigten Benutzer hinzu.

![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/004.jpg)

### Gruppenrichtlinienverwaltung öffnen
Im **Server-Manager** unter **Tools** die **Gruppenrichtlinienverwaltung** auswählen.

![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/005.jpg)

### Neue Gruppenrichtlinie erstellen
Erstelle eine neue GPO mit dem Namen **Allow User Remote Desktop** und verknüpfe sie mit der gewünschten OU.

![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/006.jpg)
![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/007.jpg)

### GPO bearbeiten
Rechtsklicke auf die GPO und wähle **Bearbeiten**, um sie zu konfigurieren.

![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/008.jpg)
![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/009.jpg)

### Benutzer zur Remote Desktop-Gruppe hinzufügen
Navigiere zu  
**Computerkonfiguration** → **Richtlinien** → **Windows-Einstellungen** → **Sicherheitseinstellungen** → **Eingeschränkte Gruppen**  
und füge die gewünschte Gruppe hinzu.

![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/010.jpg)
![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/011.jpg)

### Remote Desktop in der GPO aktivieren
Navigiere zu  
**Computerkonfiguration** → **Richtlinien** → **Administrative Vorlagen** → **Windows-Komponenten** → **Remotedesktopdienste** → **Remotedesktopsitzungshost** → **Verbindungen**  
und aktiviere **Benutzern das Remotedesktopdienste anmelden erlauben**.

![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/012.jpg)
![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/013.jpg)

### Netzwerkauthentifizierung aktivieren
Unter  
**Remotedesktopdienste** → **Sicherheit**  
aktiviere **Authentifizierung auf Netzwerkebene für Remotedesktopverbindungen erforderlich machen**.

![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/014.jpg)

### Firewallregel für RDP erstellen
Unter **Windows Defender Firewall mit erweiterter Sicherheit** erstelle eine neue **eingehende Regel** für **Remotedesktop**.

![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/015.jpg)
![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/016.jpg)
![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/017.jpg)
![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/018.jpg)

### Gruppenrichtlinie aktualisieren
Führe den folgenden Befehl als Administrator in PowerShell oder der Eingabeaufforderung auf Server und Client aus, um die neue GPO sofort zu übernehmen:

```powershell
gpupdate /force
```

![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/019.jpg)

### Remotedesktopverbindung testen
Öffne **Remotedesktopverbindung**, gib den Namen des Zielcomputers ein und melde dich mit den entsprechenden Zugangsdaten an.

![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/020.jpg)

### Erfolgreiche Verbindung prüfen
Wenn alles korrekt konfiguriert wurde, solltest du jetzt per Remotezugriff auf den Computer zugreifen können.

![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/021.jpg)

### Remotedesktopverbindung im vSphere Client testen
Du kannst die RDP-Verbindung auch in einer virtualisierten Umgebung wie dem vSphere Client testen.

### Letzte Bestätigung für erfolgreichen RDP-Zugriff
Wenn alle Konfigurationen stimmen, hat der Benutzer nun vollen Remotezugriff auf das Zielsystem.

![](/rubinhood-blog/assets/img/Setting-up-RDP-access-via-GPO-for-Windows-clients/022.jpg)

**Glückwunsch!** Der Remotedesktopzugriff über Gruppenrichtlinie ist nun erfolgreich eingerichtet.

