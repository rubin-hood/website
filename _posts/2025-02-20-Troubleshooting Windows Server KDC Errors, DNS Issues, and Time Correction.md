---
date: 20.02.2025
layout: post
title: Fehlerbehebung bei Windows Server KDC-Problemen, DNS-Störungen und Zeitkorrektur
excerpt: RUBIN-HOOD Konfigurationsaktualisierung Das System kann nicht auf ein oder mehrere Ereignisprotokolle zugreifen – aufgrund unzureichender Berechtigungen, Dateibeschädigungen oder anderer Gründe. Weitere Informationen finden Sie im Operational-Kanal des Fehlerprotokolls ServerManager-ManagementProvider auf dem Zielserver.
image: /assets/img/Troubleshooting-Windows-Server-KDC-Errors-DNS-Issues-and-Time-Correction/001.webp
---

![](/assets/img/Troubleshooting-Windows-Server-KDC-Errors-DNS-Issues-and-Time-Correction/001.jpg)

![](/assets/img/Troubleshooting-Windows-Server-KDC-Errors-DNS-Issues-and-Time-Correction/002.jpg)

"RUBIN-HOOD: Konfigurationsaktualisierung: Das System kann nicht auf ein oder mehrere Ereignisprotokolle zugreifen – aufgrund unzureichender Zugriffsrechte, Dateibeschädigung oder anderer Ursachen. Weitere Informationen finden Sie im Operational-Kanal des Protokolls ServerManager-ManagementProvider auf dem Zielserver."

## Einführung

Windows Server ist ein leistungsfähiges Betriebssystem für Netzwerkdienste wie Active Directory (AD DS), DNS und IIS. Doch gelegentlich treten Fehler auf, die den Betrieb beeinträchtigen. Dieser Beitrag beschreibt, wie ein Server mit KDC-Fehlern, fehlerhafter Zeitsynchronisation und DNS-Problemen erfolgreich wiederhergestellt wurde.

## **1. Problem: KDC-Fehler & DNS-Störungen**

Nach der Einrichtung eines Windows Servers mit der Domäne **ad.rubinhood.de** traten folgende Fehler auf:

- Der **KDC (Key Distribution Center)** verursachte Probleme bei Kerberos-Anmeldungen.
- Der **Windows Server Manager** meldete Fehler beim Abrufen von Rolleninformationen.
- Die **Systemzeit** war falsch und wurde nicht automatisch synchronisiert.

Ursache war eine fehlerhafte Zeitkonfiguration und daraus resultierende Kerberos-Probleme.

## **2. Lösungsschritte zur Fehlerbehebung**

### **Schritt 1: Serverzeit prüfen**

Falsche Zeit- und Datumseinstellungen führen zu Kerberos-Fehlern. Der aktuelle Status wurde überprüft mit:

```
w32tm /query /status
```

Es wurde festgestellt, dass der Server seine **lokale CMOS-Uhr** verwendete – was in einer Active-Directory-Umgebung problematisch ist.

### **Schritt 2: Konfiguration der korrekten Zeitsynchronisation**

Um sicherzustellen, dass der Server eine **zuverlässige Zeitquelle** verwendet, wurde die Synchronisation mit einem externen NTP-Server eingerichtet:

```
w32tm /config /manualpeerlist:"time.windows.com,0x8 ntp1.ptb.de,0x8" /syncfromflags:manual /reliable:YES /update
net stop w32time
net start w32time
w32tm /resync
```

Nach dieser Konfiguration bestätigte `w32tm /query /status`, dass der Server nun mit **ntp1.ptb.de** synchronisiert.

### **Schritt 3: Neustart des Windows-Zeitdienstes**

Da einige Dienste Änderungen erst nach einem Neustart vollständig übernehmen, wurde der Zeitdienst erneut synchronisiert mit folgendem Befehl:


```
w32tm /resync /nowait
```

Nun zeigte `Get-Date` die korrekte Uhrzeit im **deutschen Format** an.

### **Schritt 4: Überprüfung des Kerberos-Dienstes**

Nachdem die Uhrzeit synchronisiert war, wurde der Status des **KDC-Dienstes** überprüft:

```
Get-Service kdc
```

Falls der Dienst gestoppt war, wurde er manuell mit folgendem Befehl gestartet:

```
Start-Service kdc
```

### **Schritt 5: Überprüfung der Registrierung des Domänencontrollers**

Ein weiteres mögliches Problem ist ein nicht korrekt registrierter Domänencontroller. Dies wurde mit folgendem Befehl überprüft:

```
nltest /dsgetdc:ad.rubinhood.de
```

Wenn Fehler auftraten, war möglicherweise eine **Neuinitialisierung der Domänenrolle** erforderlich.

### **Schritt 6: Neustart des Servers**

Nach dem Anwenden aller Konfigurationsänderungen wurde der Server neu gestartet. Dadurch wurde sichergestellt, dass **alle Dienste (AD DS, DNS, Kerberos, Windows Server Manager)** die neuen Einstellungen übernahmen.

Nach dem Neustart lief der Server **fehlerfrei** und zeigte im Server-Manager alle Rollen korrekt an.

## **3. Fazit: Was hat das Problem behoben?**

Die Hauptursache der Probleme war eine **fehlerhafte Zeitsynchronisation**, die zu Kerberos-Authentifizierungsfehlern führte.  
Durch die Umsetzung folgender Maßnahmen konnte der Server erfolgreich wiederhergestellt werden:

- **Korrekte NTP-Synchronisation mit einer zuverlässigen Zeitquelle**
- **Neustart von KDC- und Zeitdiensten**
- **Überprüfung der DNS- und Active-Directory-Konfigurationen**
- **Neustart des Servers zur Anwendung aller Änderungen**

Diese Schritte haben **alle Fehler beseitigt**, und der Server läuft nun stabil.

---

## **Zusätzliche Tipps zur Fehlervermeidung**

1. **Zeitquelle regelmäßig überprüfen:**
    
    ```
    w32tm /query /status
    ```
    
2. **Kerberos- und DNS-Status regelmäßig überwachen:**

    
    ```
    nltest /dsgetdc:ad.rubinhood.de
    Get-EventLog -LogName System -EntryType Error -Newest 5
    ```
    
3. **Nach wichtigen Änderungen (z. B. Zeitsynchronisation, DNS-Updates) einen Neustart einplanen**, um eine ordnungsgemäße Anwendung sicherzustellen.

Durch das Befolgen dieser Maßnahmen lassen sich viele typische Windows-Server-Probleme proaktiv vermeiden.
