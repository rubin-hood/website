---
date: 14.07.2021
layout: post
title: TCP/IP-Modell – Das Fundament des Internets
excerpt: Stell dir vor, du schreibst einen Brief, legst ihn in einen Umschlag, bringst ihn zur Post – und Tage später landet er beim Empfänger. Genauso reisen auch Daten im Internet Sie werden verpackt, adressiert, weitergeleitet – Schicht für Schicht.
image: /assets/img/TCP-IP-Modell/001.png
---

![](/assets/img/TCP-IP-Modell/001.svg)

Stell dir vor, du schreibst einen Brief, legst ihn in einen Umschlag, bringst ihn zur Post – und Tage später landet er beim Empfänger.

Genauso reisen auch Daten im Internet: Sie werden verpackt, adressiert, weitergeleitet – Schicht für Schicht.

**Das TCP/IP-Modell erklärt genau diesen digitalen Postweg.**

---

## 📦 Was ist das TCP/IP-Modell?

Das TCP/IP-Modell besteht aus **vier Schichten**, die jeweils eine bestimmte Aufgabe bei der Datenübertragung übernehmen. Jede Schicht baut auf der darunterliegenden auf – wie bei einem Postsystem: vom Schreiben des Briefs bis zur Zustellung an die Haustür.

---

## 🟦 **4. Anwendungsschicht (Application Layer)**

- **7️⃣ Anwendung (Application)**
- **6️⃣ Darstellung (Presentation)**
- **5️⃣ Sitzung (Session)**

📡 DHCP  🌐 DNS  📁 FTP  🌍 HTTP  🔒 HTTPS  🧾 LDAP  📶 MQTT  🔗 NCP  🎥 RTP  ✉️ SMTP  💬 XMPP

🧾 **Daten**, 🛡️ **Proxy**, 🔁 **Gateway**, 🎯 **Content-Switch**, 🧠 **Layer-4-7-Switch**

Chrome, Firefox, Safari, Edge, Outlook, Gmail, Dropbox, YouTube, WhatsApp Web, Zoom, Teams, Google Drive, Instagram

---

## 🟩 **3. Transport (Transport Layer)**

- **4️⃣ Transport (Transport)** 🔌 TCP 📤 UDP 🔁 SCTP 🧩 SPX

🔌 **TCP = Segmente**, 📤 **UDP = Datagramme**

Datei-Upload, Videoanruf, Online-Gaming, Live-Streams, WhatsApp-Anruf, Cloud-Backup, Login-Vorgang, Punkt-zu-Punkt-Kommunikation

---

## 🟨 **2. Internet (Network Layer)**

- **3️⃣ Vermittlung-/Paket (Network)** 📡 ICMP 👥 IGMP 🧭 IP 🛡️ IPsec 🔀 IPX

🧭 **Pakete**, 🌐 **Router**, 🎛️ **Layer-3-Switch**

FritzBox, Vodafone Station, Speedport, Handy-Hotspot, WLAN im ICE, LTE/5G-Router, mobiles Internet, Starlink, Internet im Bus

---

## 🟥 **1. Netzzugriff (Network Access Layer)**

- **2️⃣ Sicherung (Data Link)** 🔌 IEEE 802.3 Ethernet 📶 IEEE 802.11 WLAN 🛰️ TLAP 💡 FDDI 🧷 MAC        🔄 Token Ring 🧮 ARCNET
- **1️⃣ Bitübertragung (Physical)** ⚙️ 1000BASE-T 🔄 Token Ring 🧮 ARCNET

🧱 **Rahmen (Frames)**, 🧿 **Bits**, 🧬 **Symbole**, 🧷 **Bridge**, 🧩 **Switch**, 📶 **WAP**, 📡 **Repeater**, 🧃 **Hub**, 📡 **Antenne**, 🧵 **Netzwerkkabel**, ☁️ **Äther**

WLAN (Wi-Fi), LAN-Kabel, Repeater, WLAN-Router, Switch, Powerline-Adapter, Netzwerkdose, USB-WLAN-Stick, Handy-Antenne, Funkwellen, Luft (Äther)

---

🟥 1. Netzzugangsschicht (Network Access Layer)
Diese Schicht kümmert sich um die physikalische Übertragung der Daten über Kabel oder Funk. Sie arbeitet mit MAC-Adressen, Rahmen (Frames), Bits und Signalen.

📌 Beispiele: LAN-Kabel, WLAN, Switch, Repeater, Antenne, Powerline

🟨 2. Internetschicht (Internet Layer)
Sie ist für das Routing und die IP-Adressierung zuständig. Sie sorgt dafür, dass Datenpakete ihren Weg über mehrere Zwischenstationen (Multihops) zum Ziel finden.

📌 Beispiele: Router, IP-Adresse, FritzBox, LTE-Router, mobiles Internet

🟩 3. Transportschicht (Transport Layer)
Hier entstehen Ende-zu-Ende-Verbindungen zwischen Sender und Empfänger. TCP sorgt für zuverlässige Übertragung, UDP für schnelle Verbindungen ohne Absicherung.

📌 Beispiele: Dateiübertragung, Online-Gaming, WhatsApp-Anruf, Zoom-Meeting

🟦 4. Anwendungsschicht (Application Layer)
Ganz oben sitzt die Schicht, die direkt mit Anwendungen interagiert. Programme wie Chrome, Outlook oder YouTube nutzen hier Protokolle wie HTTP, SMTP oder DNS, um zu kommunizieren.

📌 Beispiele: Chrome, Firefox, Gmail, Dropbox, WhatsApp Web, Spotify, Instagram

---

## ✅ **Hauptbeispiel: Du rufst [www.rubinhood.de](http://www.rubinhood.de) über WLAN auf**

👉 dabei verwenden wir fast alle Begriffe!

---

### 📍 **Ausgangslage:**

Du sitzt mit deinem **Laptop zu Hause**, verbunden über **WLAN** (also drahtlos).

Du öffnest den Browser und gibst **www.rubinhood.de** ein.

Im Hintergrund läuft eine Verbindung über mehrere Netzwerke bis zum Webserver.

---

### 🔁 **Ende-zu-Ende-Kommunikation (Multihop)**

- Dein Laptop ist der **Client**, der **www.rubinhood.de** ist der **Server** → **Ende zu Ende**.
- Die Daten durchlaufen mehrere Geräte (Router, Switches) → **Multihop** (also viele "Sprünge").

---

### 🧱 **Schicht für Schicht + Begriffe im Beispiel**

---

### 🟥 **Physikalische Übertragung (Layer 1)**

| Begriff | Beispiel |
| --- | --- |
| **Bits, Symbole** | Dein WLAN-Adapter wandelt die Daten in **elektromagnetische Wellen** um. Diese bestehen aus **Bits** (0 und 1), die als **Symbole** auf einem Träger (z. B. 2,4 GHz) übertragen werden. |
| **Antenne & Äther** | Die Antenne deines Laptops sendet die Daten **drahtlos durch die Luft (Äther)** zum WLAN-Router. |
| **Netzwerkkabel** | Vom WLAN-Router führen **Kabel** zu einem **Switch oder Router**. |
| **Repeater** | Wenn das WLAN-Signal zu schwach ist, hilft ein **Repeater**, es zu verstärken. |
| **Hub** | (veraltet) Früher hätte ein **Hub** die Signale an **alle Geräte gleichzeitig** geschickt – ohne Intelligenz. |

---

### 🟥 **Datenverbindung (Layer 2)**

| Begriff | Beispiel |
| --- | --- |
| **Rahmen (Frames)** | Die Daten werden in **Ethernet-Frames** gepackt (mit MAC-Adresse etc.). |
| **Wireless Access Point (WAP)** | Das WLAN-Signal wird vom **WAP empfangen** und in Ethernet umgewandelt. |
| **Layer-2-Switch / Bridge** | Der **Switch erkennt anhand der MAC-Adresse**, wohin der Frame muss. |
| **Bridge** | (alt) Wenn zwei unterschiedliche Netztypen verbunden werden (z. B. WLAN ↔ Ethernet). |

---

### 🟨 **Vermittlung (Layer 3)**

| Begriff | Beispiel |
| --- | --- |
| **Pakete** | Die IP-Schicht verpackt die Daten in **Pakete** mit IP-Adresse von dir und www.rubinhood.de. |
| **Router** | Dein **Router prüft die Ziel-IP** (z. B. die von www.rubinhood.de) und leitet das Paket ins Internet. |
| **Layer-3-Switch** | In großen Netzen übernimmt dieser Switch zusätzlich Routing-Aufgaben. |

---

### 🟩 **Transport (Layer 4)**

| Begriff | Beispiel |
| --- | --- |
| **TCP = Segmente** | Da HTTPS verwendet wird, wird TCP eingesetzt → Die Daten werden in **TCP-Segmente** aufgeteilt. |
| **UDP = Datagramme** | Wenn du z. B. **Videos auf rubinhood.de streamst**, könnte UDP verwendet werden → **Datagramme**. |
| **Punkt zu Punkt** | Zwischen deinem Gerät und dem Server besteht eine **logische Verbindung (z. B. TCP Socket)** → **Punkt zu Punkt**. |

---

### 🟦 **Anwendung (Layer 5–7)**

| Begriff | Beispiel |
| --- | --- |
| **Daten** | Die tatsächlichen Nutzdaten sind z. B. HTML, CSS, Bilder – das, was die Webseite ausmacht. |
| **Proxy** | Ein **Proxy-Server** (z. B. im Schulnetz) könnte deine Anfrage **prüfen oder blockieren**. |
| **Gateway** | Ein **Gateway** wäre nötig, wenn das Netzwerk z. B. IPv6 spricht, aber der Server IPv4. |
| **Content-Switch / Layer-4-7-Switch** | Bei großen Webdiensten: Solch ein Switch **entscheidet, ob du z. B. Server 1 (für DE) oder Server 2 (für AT)** bekommst – basierend auf dem Inhalt (Layer 7). |

---

## 🧠 Zweites Mini-Beispiel (nur für Begriffe, die oben fehlten)

Einige Begriffe werden in einem typischen Surf-Beispiel **nicht immer verwendet**. Hier ist ein ergänzendes Beispiel:

---

### 📞 **Beispiel 2: Du telefonierst per VoIP (z. B. Zoom)**

- **UDP = Datagramme** → wird bei Live-Sprachdaten verwendet (weil Geschwindigkeit wichtiger ist als 100 % Korrektheit).
- **Gateway** → Übersetzt zwischen VoIP-Protokollen und klassischen Telefonsystemen.
- **Content-Switch** → Leitet Voice-Traffic an den richtigen Mediaserver.

---

## ✅ Fazit – Begriffe und wo sie verwendet werden:

| Kategorie | Begriffe |
| --- | --- |
| **Anwendung (Daten)** | Daten, Proxy, Gateway, Content-Switch, Layer-4-7-Switch |
| **Transport (Verbindung)** | TCP = Segmente, UDP = Datagramme, Punkt zu Punkt |
| **Internet (Routing)** | Pakete, Router, Layer-3-Switch |
| **Netzzugang (Übertragung)** | Rahmen (Frames), Bits, Symbole, Bridge, Switch, WAP, Repeater, Hub, Antenne, Netzwerkkabel, Äther |
| **Verbindungsart** | Ende zu Ende, Multihop |

---

## ❓ Warum nicht das OSI-Modell?

Das **OSI-Modell** (mit 7 Schichten) wurde ursprünglich als **theoretisches Lehrmodell** entwickelt, um Netzwerkkommunikation besser zu verstehen. Es ist sehr genau, aber **zu komplex und praxisfern**.

➡️ In der Realität hat sich das **TCP/IP-Modell durchgesetzt**, weil es:

- **einfacher und praxisorientiert** ist
- direkt auf den Aufbau des Internets abgestimmt wurde
- **von Anfang an in echten Netzwerken** wie ARPANET und später dem Internet verwendet wurde
- mit nur 4 Schichten **effizienter und klarer strukturiert** ist

Kurz gesagt: **Das OSI-Modell ist gut zum Lernen**, aber **das TCP/IP-Modell wird in der Praxis verwendet** – überall, weltweit.

---

## Protokolle oder Dienste

### 7️⃣ **Anwendungsschicht**

*Hier laufen alle Programme und Dienste, die direkt mit dem Netzwerk arbeiten – also das, was du als Nutzer benutzt.*

- 📞 **DNS**: Wandelt Internet-Namen (wie google.de) in IP-Adressen um, damit Computer sie finden können.
- 🆔 **DHCP**: Sorgt dafür, dass dein Gerät im Netzwerk automatisch eine IP-Adresse bekommt.
- 🌍 **HTTP**: Überträgt Webseiten von Servern zu deinem Browser.
- 🔒🌍 **HTTPS**: Wie HTTP, aber mit verschlüsselter, sicherer Übertragung (nutzt TLS).
- 📁 **FTP**: Sendet und empfängt Dateien zwischen Computern.
- 📤 **SMTP**: Schickt E-Mails von deinem Gerät an den Mailserver.
- 📥 **IMAP**: Lässt dich E-Mails auf dem Server lesen, ohne sie zu löschen.
- 📬 **POP3**: Holt E-Mails vom Server ab und speichert sie lokal.
- 🖥️ **SMB**: Macht Dateifreigabe und Drucken im lokalen Netzwerk möglich.
- 🖥️🔗 **RDP**: Steuert einen anderen PC fern (zeigt dir Bildschirm und Eingaben an).
- 💬 **IRC**: Ermöglicht Chatten in Echtzeit, oft in Gruppen.
- 🖧 **SNMP**: Ermöglicht das Überwachen und Steuern von Netzwerkgeräten wie Routern.
- 🗂️ **LDAP**: Fragt Benutzer- und Geräteinformationen aus einem Verzeichnis ab (z.B. in Firmen).
- ⏰ **NTP**: Stellt sicher, dass alle Geräte im Netzwerk die gleiche Uhrzeit haben.
- 🗃️ **DB-Protokolle**: Verbindet Programme mit Datenbanken zum Abrufen oder Speichern von Daten.
- 🕵️‍♂️ **Whois**: Zeigt dir, wem eine Internet-Domain gehört.
- 🌍🔠 **TLD**: Die Endung von Internetadressen, zum Beispiel .de oder .com.
- 🏢 **ICANN**: Die Organisation, die weltweit Internetadressen verwaltet.
- 🧑‍💻 **Radius**: Meldet dich im Netzwerk an (z.B. beim WLAN in Firmen).
- 🔑 **TACACS+**: Meldet dich bei Netzwerkgeräten an, besonders in Unternehmen.
- 📟 **Telnet**: Fernzugriff auf Computer über Textbefehle, aber ohne Verschlüsselung.
- 🛡️ **TLS**: Verschlüsselt die Kommunikation für mehr Sicherheit (multi).
- 🖱️🔑 **SSH**: Sicherer Fernzugriff auf einen Computer über Textbefehle (multi).
- 🎭 **Kerberos**: Sichere Anmeldung bei Diensten und Anwendungen.

---

### 6️⃣ **Darstellungsschicht**

*Hier werden Daten verschlüsselt, entschlüsselt oder in ein anderes Format übersetzt, damit sie richtig angezeigt werden.*

- 🛡️ **TLS**: Verschlüsselt die Daten, damit sie unterwegs nicht gelesen werden können.
- 🖱️🔑 **SSH**: Verschlüsselt die Steuerung von Computern per Fernzugriff.
- 🎭 **Kerberos**: Verschlüsselt Anmeldedaten, damit niemand sie mitlesen kann (multi).
- 🖥️ **SMB**: Übersetzt und bereitet Daten für die Dateiübertragung auf (multi).
- 🖥️🔗 **RDP**: Wandelt Bild und Ton so um, dass sie über das Netzwerk übertragen werden können (multi).

---

### 5️⃣ **Sitzungsschicht**

*Verwaltet, ob und wie lange eine Verbindung zwischen zwei Geräten besteht – baut die Verbindung auf, hält sie offen und beendet sie wieder.*

- 🎭 **Kerberos**: Sichert, dass deine Anmeldung für die ganze Sitzung gültig bleibt (multi).
- 🧑‍💻 **Radius**: Hält die Anmeldung im Netzwerk während der gesamten Verbindung aktiv.
- 🔑 **TACACS+**: Kontrolliert, wie lange du auf Geräte im Netzwerk zugreifen darfst.
- 🖥️🔗 **RDP**: Steuert die Dauer und Verwaltung der Fernsteuerungs-Sitzung (multi).
- 📟 **Telnet**: Öffnet eine dauerhafte Verbindung für Textbefehle.

---

### 4️⃣ **Transportschicht**

*Teilt die Daten in kleine Pakete auf, sorgt für die richtige Reihenfolge und stellt sicher, dass alles ankommt.*

- 📦 **TCP**: Sichert, dass Daten fehlerfrei und vollständig ankommen.
- 📨 **UDP**: Sendet Daten schneller, aber ohne Garantie für den Empfang.
- 💧 **SCTP**: Besonders für spezielle, sichere oder zeitkritische Datenübertragungen.
- 🛡️ **TLS**: Verschlüsselt den Datenfluss direkt nach der Aufteilung in Pakete (multi).

---

### 3️⃣ **Vermittlungsschicht**

*Regelt den Weg der Daten durchs Netzwerk, kümmert sich um Adressen und Routing zwischen mehreren Netzwerken.*

- 🌐 **IP**: Gibt jedem Gerät im Internet eine eindeutige Adresse.
- 🔄 **NAT**: Übersetzt private IP-Adressen ins Internet und zurück.
- 🛎️ **ICMP**: Überträgt Fehlermeldungen und Testsignale (z.B. für „ping“).
- 🛡️🔗 **IPsec**: Verschlüsselt ganze Datenpakete, um sie auf ihrem Weg zu schützen.
- 🔗 **GRE**: Baut Tunnel, um Datenpakete durch fremde Netze zu transportieren.

---

### 2️⃣ **Sicherungsschicht**

*Sorgt dafür, dass Daten sicher und fehlerfrei von einem Gerät zum anderen im selben Netzwerk (z.B. per Kabel oder WLAN) übertragen werden.*

- 🟦 **Ethernet**: Der Standard, wie Daten über Kabel im lokalen Netzwerk laufen.
- 🏷️ **ARP**: Findet zu einer IP-Adresse die passende Hardware-Adresse (MAC).
- 🖥️ **SMB**: Macht die direkte Datei- und Druckerfreigabe im lokalen Netz möglich (multi).
- 🛡️🔗 **IPsec**: Sichert den gesamten Datenstrom im lokalen Netzwerk (multi).
- 🔗 **GRE**: Baut sichere Tunnel für Daten direkt im lokalen Netz (multi).

---

### 1️⃣ **Bitübertragungsschicht**

*Hier geht es nur noch um die physische Übertragung – wie Bits als elektrische Signale, Licht oder Funkwellen durch Kabel oder Luft gesendet werden.*

- *(Keine eigenen Protokolle, sondern nur die Technik: Kabel, Funk, Stecker, Lichtleiter usw.)*

---

**(multi) = Dieses Protokoll arbeitet auch auf anderen Schichten**