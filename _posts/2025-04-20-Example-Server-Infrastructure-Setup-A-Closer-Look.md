---
date: 20.04.2025
layout: post
title: Beispiel-Serverinfrastruktur – Ein genauer Blick
excerpt: Im Folgenden werfe ich einen Blick auf einen beispielhaften Netzwerkaufbau in einem Serverraum. Die Konfiguration zeigt, wie verschiedene Server, Speicherlösungen und Netzwerkomponenten miteinander verbunden sind, um eine leistungsfähige Infrastruktur zu bilden. Jede Komponente übernimmt dabei eine bestimmte Rolle.
image: /assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0018.webp
---

🚀 **Netzwerkaufbau im Serverraum – Ein praxisnahes Beispiel**

Im Folgenden werfe ich einen Blick auf einen beispielhaften Netzwerkaufbau in einem Serverraum. Die Konfiguration zeigt, wie verschiedene Server, Speicherlösungen und Netzwerkomponenten miteinander verbunden sind, um eine leistungsfähige Infrastruktur zu bilden. Jede Komponente übernimmt dabei eine bestimmte Rolle.

![](/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0001.webp)

<p style="margin-bottom: 100px;"></p>

---

🏢 **Das Herzstück: HPE ProLiant ML350 Tower Server (4x)**

Diese vier Tower-Server sind vielseitige Allrounder. Jeder ist über **2x RJ45** – also Standard-Ethernet – mit dem zentralen Switch verbunden, um den regulären Netzwerkverkehr zu ermöglichen. Zusätzlich besitzt jeder Server eine Verbindung über **iLO (Integrated Lights-Out)** – eine dedizierte Management-Schnittstelle für Fernwartung und -überwachung.

Zwei dieser Server sind außerdem direkt über **2x SFP+ (10 Gbit/s Glasfaserverbindung)** mit einem **IBM FlashSystem 5000** verbunden. Diese Hochgeschwindigkeitsverbindung sorgt für schnellen Zugriff auf Flash-Speicher – ideal für anspruchsvolle Workloads.

--- 
<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0002.webp" style="max-width: 600px; width: 100%; height: auto;" />

<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0002.webp" style="max-width: 600px; width: 100%; height: auto;" />
<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0003.webp" style="max-width: 600px; width: 100%; height: auto;" />
<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0004.webp" style="max-width: 600px; width: 100%; height: auto;" />

--- 

🛠️ **Die Rack-Units: HPE ProLiant DL360 Gen10 (2x)**

Zwei 1U-Rackserver, die ausschließlich über ihre **iLO-Ports** verbunden sind. Diese sind nicht aktiv im produktiven Einsatz, stehen aber als **Ersatzsysteme oder für Tests** bereit. Dennoch sind sie im Netzwerk sichtbar und jederzeit remote erreichbar.

<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0005.webp" style="max-width: 600px; width: 100%; height: auto;" />
<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0006.webp" style="max-width: 600px; width: 100%; height: auto;" />
<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0007.webp" style="max-width: 600px; width: 100%; height: auto;" />

--- 

🌌 **Massenspeicher: HPE Apollo 4200 Gen10**

Auch dieser Storage-Server ist über **2x RJ45** ans Netzwerk angeschlossen und verfügt über einen eigenen **iLO-Port**. Zusätzlich sorgt ein **SAS-Kabel (Serial Attached SCSI)** für eine Hochgeschwindigkeitsverbindung – meist für die Anbindung von Speichergeräten oder Bandlaufwerken genutzt.

Außerdem ist der Apollo direkt über **2x SFP+** mit dem **IBM FlashSystem 5000** verbunden, um schnellen Zugriff auf hochleistungsfähige Flash-Daten zu gewährleisten.

<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0008.webp" style="max-width: 600px; width: 100%; height: auto;" />
<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0009.webp" style="max-width: 600px; width: 100%; height: auto;" />
---


📊 **Flash-Speicher: IBM FlashSystem 5000**

Dieses Hochleistungsspeichersystem ist über **2x SFP+** sowohl mit den ML350-Tower-Servern als auch mit dem Apollo 4200 verbunden. So ist ein schneller Datenzugriff möglich. Zudem ist das System über **2x RJ45** mit dem restlichen Netzwerk verbunden – für allgemeinen Datenverkehr und Managementzwecke.

<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0010.webp" style="max-width: 600px; width: 100%; height: auto;" />
<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0011.webp" style="max-width: 600px; width: 100%; height: auto;" />
--- 

📀 **Bandlaufwerk: HPE StoreEver 1/8 G2**

Dieses Bandlaufwerk dient der Datensicherung auf Magnetband. Es ist über **1x RJ45** mit dem Netzwerk verbunden – ausreichend für Management und Steuerung. Die eigentliche Datenübertragung erfolgt über ein **SAS-Kabel**, das direkt mit dem **Apollo 4200** verbunden ist.

<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0012.webp" style="max-width: 600px; width: 100%; height: auto;" />
<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0013.webp" style="max-width: 600px; width: 100%; height: auto;" />
--- 

🛡️ **Zentrale Kommunikation: HP ProCurve Switch 2510-24 (J9019B)**

Dieser Managed Switch ist der **zentrale Knotenpunkt** des Netzwerks. Alles läuft hier zusammen:

- Alle Server via RJ45
- IBM FlashSystem 5000 (RJ45)
- StoreEver Tape Library (RJ45)
- APC USV (RJ45)

Der Switch ist auch mit dem **NT (Netzübergang)** verbunden, der ins Hauptgebäude führt, wo zentrale VMware-Dienste wie **vCenter, Active Directory, SQL, Exchange** und **weitere Anwendungen** betrieben und verwaltet werden.

<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0014.webp" style="max-width: 600px; width: 100%; height: auto;" />

--- 

🛣️ **Stromversorgung: APC USV**

Die unterbrechungsfreie Stromversorgung ist über **1x RJ45** mit dem Switch verbunden. Diese Verbindung wird zur Überwachung genutzt – damit bei einem Stromausfall oder anderen Problemen schnell reagiert werden kann.

Alle sechs Server, der HPE Apollo und das IBM FlashSystem 5000 sind sowohl an das Stromnetz als auch – zur Absicherung bei Stromausfall – an die **APC USV** angeschlossen.

<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0015.webp" style="max-width: 600px; width: 100%; height: auto;" />
<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0016.webp" style="max-width: 600px; width: 100%; height: auto;" />

--- 

📽️ **Peripherie**

- Ein **Monitor** ist direkt an einen der ML350 Tower-Server angeschlossen, um bei Bedarf eine lokale Verwaltung zu ermöglichen.
- **Tastatur und Maus** sind direkt mit dem Apollo 4200 verbunden und dienen ebenfalls der lokalen Administration.

---

🔧 **Fazit: Ein durchdachtes Beispiel-Setup**

Dieses Beispielnetzwerk zeigt einen gelungenen Mix aus Tower-, Rack- und Speicherservern, verbunden über Hochgeschwindigkeitsleitungen (SFP+, SAS) sowie Standard-Netzwerkanschlüsse (RJ45). Die Infrastruktur ist skalierbar, flexibel und durch dedizierte Schnittstellen einfach zu verwalten. Gleichzeitig sorgen das Bandlaufwerk und die USV für Datensicherheit und Stabilität.

Alle beschriebenen Komponenten und Verbindungen dienen als **Beispiel** für ein praxisnahes Setup in einem typischen mittelgroßen Rechenzentrum oder Serverraum.

<img src="/assets/img/Example-Server-Infrastructure-Setup-A-Closer-Look/0017.gif" style="max-width: 600px; width: 100%; height: auto;" />
