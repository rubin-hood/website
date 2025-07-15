---
date: 15.07.2021
layout: post
title: Internet Protocol Version 4 (TCP/IPv4) Properties
excerpt: In unserer heutigen vernetzten Welt benutzen viele Menschen automatische Netzwerkeinstellungen – und das klappt meistens auch gut. Doch manchmal muss man selbst Hand anlegen. Zum Beispiel in Firmen, bei bestimmten Servern oder wenn es Probleme mit der automatischen Verbindung (DHCP) gibt. Dann ist es wichtig, die IP-Adresse manuell einzustellen.
image: /assets/img/Internet-Protocoll/001.png
---

In unserer heutigen vernetzten Welt benutzen viele Menschen automatische Netzwerkeinstellungen – und das klappt meistens auch gut. Doch manchmal muss man selbst Hand anlegen. Zum Beispiel in Firmen, bei bestimmten Servern oder wenn es Probleme mit der automatischen Verbindung (DHCP) gibt. Dann ist es wichtig, die IP-Adresse manuell einzustellen.

![](/assets/img/Internet-Protocoll/001.png)

### 📘 **1. Zweck des Fensters**

Dieses Fenster dient zur **manuellen Konfiguration** der IPv4-Einstellungen einer Netzwerkkarte. Hier kannst du IP-Adresse, Subnetzmaske, Gateway und DNS-Server manuell eintragen.

---

### 🌐 **2. IP-Adressvergabe**

Du hast zwei Optionen für die Zuweisung einer IP-Adresse:

### 🔘 *Obtain an IP address automatically*

➡️ Die IP-Adresse wird **automatisch** vom DHCP-Server bezogen.

### 🔘 *Use the following IP address:*

➡️ Du kannst die IP-Adresse **manuell festlegen**. Die Felder:

- **IP address:** z. B. `192.168.1.100`
- **Subnet mask:** z. B. `255.255.255.0`
- **Default gateway:** z. B. `192.168.1.1` (Router-Adresse)

---

### 🌍 **3. DNS-Server**

Auch hier gibt es zwei Optionen:

### 🔘 *Obtain DNS server address automatically*

➡️ Die DNS-Server-Adresse wird automatisch bezogen.

### 🔘 *Use the following DNS server addresses:*

➡️ Manuelle Eingabe möglich:

- **Preferred DNS server:** z. B. `8.8.8.8` (Google DNS)
- **Alternate DNS server:** z. B. `8.8.4.4` (Google DNS Backup)

---

### 1️⃣ **IP address** – z. B. `192.168.1.100`

🔹 Die **IP-Adresse** identifiziert ein Gerät **eindeutig im lokalen Netzwerk** (LAN).

🔹 Beispiel: Dein PC bekommt `192.168.1.100`, dein Drucker z. B. `192.168.1.101`.

📌 **Typischer Bereich für private Netzwerke**:

- `192.168.x.x`
- `10.x.x.x`
- `172.16.x.x – 172.31.x.x`

🔧 Muss **einzigartig** im Netzwerk sein!

---

### 2️⃣ **Subnet mask** – z. B. `255.255.255.0`

🔹 Die **Subnetzmaske** definiert, welcher Teil der IP-Adresse das **Netzwerk** und welcher Teil das **Gerät** beschreibt.

📌 `255.255.255.0` bedeutet:

- Die ersten **drei Oktette (192.168.1)** sind das **Netzwerk**.
- Das letzte Oktett **(.100)** ist das **Gerät**.

🔎 Damit sind in diesem Beispiel **254 Geräte** möglich (von `.1` bis `.254`).

---

### 3️⃣ **Default gateway** – z. B. `192.168.1.1`

🔹 Das **Standard-Gateway** ist die IP-Adresse deines **Routers**.

📌 Der Router leitet Anfragen **aus dem lokalen Netz ins Internet**.

💡 Ohne Gateway gibt’s **keinen Internetzugang**!

---

### 4️⃣ **Preferred DNS server** – z. B. `8.8.8.8`

🔹 DNS steht für **Domain Name System**.

📌 Dieser Server wandelt **Webadressen** wie `www.google.de` in **IP-Adressen** um (z. B. `142.250.186.67`).

🔹 `8.8.8.8` ist der **öffentliche DNS-Server von Google** – schnell und zuverlässig.

---

### 5️⃣ **Alternate DNS server** – z. B. `8.8.4.4`

🔹 Dies ist der **Backup-DNS-Server**, falls der bevorzugte Server nicht erreichbar ist.

📌 Auch dieser stammt von Google.

---

### 🔁 Zusammenfassung in einer Tabelle:

| Einstellung | Beispiel | Funktion |
| --- | --- | --- |
| **IP address** | 192.168.1.100 | Eindeutige Geräteadresse im LAN |
| **Subnet mask** | 255.255.255.0 | Bestimmt Netzwerkgröße |
| **Default gateway** | 192.168.1.1 | Router zum Internet |
| **Preferred DNS server** | 8.8.8.8 | Haupt-Namensauflöser |
| **Alternate DNS server** | 8.8.4.4 | Backup bei Ausfall |

---

Wenn du dich mit Netzwerktechnik beschäftigst, wirst du früher oder später auf die **Subnetzmaske (Subnet Mask)** stoßen. Aber was bedeutet eigentlich `255.255.255.0`? Und warum genau drei Mal `255`? Hier bekommst du eine verständliche Erklärung!

---

### 🔧 Was macht die Subnetzmaske?

Die Subnetzmaske teilt eine **IP-Adresse** in zwei Teile:

- 🔹 **Netzwerkanteil**: Welches Netzwerk ist gemeint?
- 🔶 **Hostanteil**: Welches Gerät im Netzwerk ist gemeint?

Beispiel:

> IP-Adresse: 192.168.1.100
> 
> 
> **Subnetzmaske**: `255.255.255.0`
> 

---

### 🔎 Was bedeuten die Zahlen?

Die IP-Adresse besteht aus **vier Zahlen** (Oktette), also insgesamt **32 Bits**. Die Subnetzmaske zeigt an, wie viele dieser Bits für das Netzwerk reserviert sind:

| Oktett | Dezimal | Binär | Bedeutung |
| --- | --- | --- | --- |
| 1. | 255 | 11111111 | Netzwerk |
| 2. | 255 | 11111111 | Netzwerk |
| 3. | 255 | 11111111 | Netzwerk |
| 4. | 0 | 00000000 | Host/Gerät |

🔹 **Fazit**: `255.255.255.0` bedeutet: Die ersten **24 Bits** (3 x 8) sind das Netzwerk, die letzten 8 Bits gehören zu den Geräten (Hosts).

---

### 📊 Vergleich mit anderen Subnetzmasken

Hier siehst du, wie sich andere Masken auf die Anzahl möglicher Geräte auswirken:

| Subnet Mask | Netzwerk-Bits | Host-Bits | Geräte möglich |
| --- | --- | --- | --- |
| 255.255.255.0 | 24 | 8 | 254 |
| 255.255.0.0 | 16 | 16 | 65.534 |
| 255.0.0.0 | 8 | 24 | Über 16 Mio. |

> ⚠️ Wichtig: Von den Host-Bits musst du immer 2 Adressen abziehen (eine für das Netzwerk selbst, eine für den Broadcast).
> 

---

### 💡 Merksatz:

> Jedes 255 steht für einen Teil Netzwerk, jedes 0 für einen Teil Host.
> 
> 
> Also: `255.255.255.0` = 3 Teile Netz, 1 Teil Gerät.
> 

---

Mit dieser Basis verstehst du Subnetzmasken nicht nur besser, sondern kannst auch Netzwerke gezielt planen und analysieren!