---
date: 12.03.2025
layout: post
title: Lösung für SQL Server Verbindungsprobleme im Netzwerk
excerpt: Beim Verbindungsversuch von einem Client (z. B. Windows 11) zur SQL Server Instanz RUBINHOOD können Verbindungsfehler auftreten. Fehlermeldungen wie „SQL Server does not exist or access denied“ oder „SQL Server Error 17“ deuten darauf hin, dass der Server nicht erreichbar ist.
image: /assets/img/Solution-for-SQL-Server-Connection-Issues-Over-the-Network/003.png
---

![](/assets/img/Solution-for-SQL-Server-Connection-Issues-Over-the-Network/003.png)

## **Problemstellung**

Beim Verbindungsversuch von einem Client (z. B. Windows 11) zur SQL Server Instanz **RUBINHOOD** können Verbindungsfehler auftreten. Fehlermeldungen wie **„SQL Server does not exist or access denied“** oder **„SQL Server Error: 17“** deuten darauf hin, dass der Server nicht erreichbar ist.

Häufige Ursachen:

- **TCP/IP-Protokoll ist nicht aktiviert**
- **SQL Server lauscht auf einem dynamischen statt statischen Port (1433)**
- **Firewall blockiert den SQL-Port**
- **SQL Server Browser-Dienst ist deaktiviert**

Diese Anleitung bietet eine Schritt-für-Schritt-Lösung mit Screenshots.

---

## **Schritt 1: Prüfen, ob TCP/IP aktiviert ist**

1. **SQL Server Configuration Manager öffnen** (Win + R > `SQLServerManagerXX.msc`, XX = SQL-Version).
2. Gehe zu **SQL Server Network Configuration > Protocols for RUBINHOOD**.
3. Stelle sicher, dass **TCP/IP aktiviert** ist.
4. Falls nicht: Rechtsklick > **Enable**.
5. SQL Server Dienst neu starten.

*Ergebnis: SQL Server RUBINHOOD akzeptiert nun TCP/IP-Verbindungen.*

---

## **Schritt 2: Statischen Port 1433 setzen**

![](/assets/img/Solution-for-SQL-Server-Connection-Issues-Over-the-Network/002.jpg)

1. **Doppelklick auf "TCP/IP" > Reiter "IP Addresses" öffnen.**
2. Nach unten scrollen zu **IPAll**.
3. **"TCP Dynamic Ports" leeren** (muss leer sein).
4. **"TCP Port" auf 1433 setzen.**
5. SQL Server Dienst neu starten.

*Ergebnis: SQL Server RUBINHOOD verwendet nun den Standardport 1433 für entfernte Verbindungen.*

---

## **Schritt 3: Firewall für SQL Server konfigurieren**

1. **PowerShell als Administrator öffnen** (Win + X > „PowerShell (Admin)”).
2. Folgenden Befehl ausführen:

   ```powershell
   New-NetFirewallRule -DisplayName "Allow SQL Server 1433" -Direction Inbound -Protocol TCP -LocalPort 1433 -Action Allow

   ```

*Ergebnis: SQL Server RUBINHOOD ist jetzt über das Netzwerk erreichbar.*

---

## **Schritt 4: Verbindung vom Client testen**

1. **PowerShell auf einem anderen Rechner öffnen (z. B. Windows 11 Client).**
2. Verbindung mit folgendem Befehl testen:
    
    ```powershell
    Test-NetConnection -ComputerName 192.168.178.3 -Port 1433
    ```
    
3. Wenn `TcpTestSucceeded = True`, ist der Port erreichbar.
4. Wenn `False`, Firewall und Netzwerkeinstellungen erneut prüfen.

*Ergebnis: SQL Server RUBINHOOD ist nun vom Netzwerk aus erreichbar.*

---

## **Schritt 5: Verbindung mit SSMS oder ODBC testen**

1. **SSMS oder ODBC Data Source Administrator am Client öffnen.**
2. **Servername eingeben:**
    - Standardinstanz: `192.168.178.3`
    - Benannte Instanz RUBINHOOD: `192.168.178.3\RUBINHOOD`
    - Mit explizitem Port: `192.168.178.3,1433`
3. Verbindung testen.

### **Beispiel-Fehlermeldung bei ODBC**

![](/assets/img/Solution-for-SQL-Server-Connection-Issues-Over-the-Network/001.jpg)

Diese Fehlermeldung bedeutet meist:

- Der Server ist durch Firewall oder Netzwerk nicht erreichbar.
- **TCP/IP ist nicht aktiviert.**
- SQL Server lauscht nicht auf dem richtigen Port.

Zur Behebung:

- Aktiviere **TCP/IP**.
- Erlaube Verbindungen in der **Firewall**.
- Setze Port **1433** in SQL Server Configuration Manager.

*Ergebnis: Erfolgreiche Verbindung zum SQL Server RUBINHOOD über das Netzwerk!*

---

## **Fazit**

Durch die richtige Konfiguration von **TCP/IP**, einem festen Port (**1433**) und einer entsprechenden **Firewallregel** wurde das Verbindungsproblem gelöst.

Falls das Problem weiterhin besteht, prüfe:

- Ob der SQL Server Dienst läuft:
    
    ```powershell
    Get-Service -Name "MSSQL$RUBINHOOD"
    ```
    
- Ob SQL Server-Authentifizierung korrekt eingerichtet ist.
- Ob Gruppenrichtlinien oder Domäneneinstellungen Verbindungen erlauben.

Ich hoffe, diese Anleitung hilft dir bei der Lösung von Netzwerkproblemen mit SQL Server RUBINHOOD!