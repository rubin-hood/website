---
date: 29.01.2025
layout: post
title: Einen Windows Server als Domain Controller einrichten
excerpt: Diese Anleitung zeigt dir Schritt für Schritt, wie du einen Windows Server als Domain Controller mit Active Directory Domain Services (AD DS) konfigurierst.
image: /assets/img/Promoting-a-Windows-Server-to-a-Domain-Controller/011.jpg
---

![](/assets/img/Promoting-a-Windows-Server-to-a-Domain-Controller/011.jpg)  
![](/assets/img/Promoting-a-Windows-Server-to-a-Domain-Controller/012.jpg)

Diese Anleitung zeigt dir Schritt für Schritt, wie du einen Windows Server als Domain Controller mit **Active Directory Domain Services (AD DS)** konfigurierst.

---

### Schritt 1: Server Manager öffnen und Konfiguration starten

Im **Server Manager** erscheint eine Benachrichtigung unter **Post-deployment Configuration**. Klicke auf **„Promote this server to a domain controller“**.

![](/assets/img/Promoting-a-Windows-Server-to-a-Domain-Controller/001.jpg)

---

### Schritt 2: Bereitstellungskonfiguration

Wähle **„Add a new forest“** und gib deinen **Root-Domain-Namen** ein (z. B. `rubinhood.local`).

![](/assets/img/Promoting-a-Windows-Server-to-a-Domain-Controller/002.jpg)

---

### Schritt 3: Domain Controller Optionen konfigurieren

- Lege den **Forest Functional Level** und den **Domain Functional Level** fest (z. B. Windows Server 2025).  
- Aktiviere **DNS Server** und **Global Catalog (GC)**.  
- Setze ein **DSRM-Passwort** (Directory Services Restore Mode).

![](/assets/img/Promoting-a-Windows-Server-to-a-Domain-Controller/003.jpg)

---

### Schritt 4: DNS-Optionen konfigurieren

Wenn eine Warnung zur DNS-Delegierung erscheint, kannst du diese ignorieren, sofern keine externe Namensauflösung erforderlich ist.

![](/assets/img/Promoting-a-Windows-Server-to-a-Domain-Controller/004.jpg)

---

### Schritt 5: NetBIOS-Name festlegen

Das System schlägt einen NetBIOS-Namen vor (z. B. `RUBINHOOD`). Du kannst ihn bei Bedarf ändern.

![](/assets/img/Promoting-a-Windows-Server-to-a-Domain-Controller/005.jpg)

---

### Schritt 6: Speicherorte für AD DS festlegen

Du kannst die Standardpfade für **NTDS-Datenbank**, **Protokolldateien** und **SYSVOL** beibehalten.

![](/assets/img/Promoting-a-Windows-Server-to-a-Domain-Controller/006.jpg)

---

### Schritt 7: Konfiguration überprüfen

Kontrolliere alle Einstellungen. Wenn alles korrekt ist, fahre fort.

![](/assets/img/Promoting-a-Windows-Server-to-a-Domain-Controller/007.jpg)

---

### Schritt 8: Voraussetzungen prüfen

Das System prüft nun alle Voraussetzungen. Wenn alles in Ordnung ist, klicke auf **Install**.

![](/assets/img/Promoting-a-Windows-Server-to-a-Domain-Controller/008.jpg)

---

### Schritt 9: Server-Neustart

Der Server wird automatisch neu gestartet, um die Änderungen anzuwenden.

![](/assets/img/Promoting-a-Windows-Server-to-a-Domain-Controller/009.jpg)

---

### Schritt 10: Anmeldung an der neuen Domäne

Nach dem Neustart meldest du dich mit dem **Administrator-Konto** an der neu erstellten Domäne an.

![](/assets/img/Promoting-a-Windows-Server-to-a-Domain-Controller/010.jpg)

---

**Glückwunsch!** Dein Windows Server fungiert nun als Domain Controller.
