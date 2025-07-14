---
date: 14.07.2021
layout: post
title: OSI-Modell und TCP/IP-Modell
excerpt: Wie funktioniert ein Computer eigentlich? Warum reicht ihm ein „An“ oder „Aus“, um Texte, Bilder, Spiele und Musik darzustellen? Die Antwort steckt im Binärsystem. Computer denken nicht wie wir in Zehnerzahlen, sondern in 0 und 1. In diesem Artikel erfährst du verständlich erklärt, was Bit, Byte und Binärzahlen bedeuten – und warum Strom an oder aus die Grundlage der gesamten digitalen Welt ist.
image: /assets/img/Binary/001.webp
---

![](/assets/img/Binary/001.webp)

<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>OSI- & TCP/IP-Modell Diagramm</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f9f9f9;
      padding: 20px;
    }
    .layer {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1.5fr 1fr 1fr;
      border: 1px solid #ccc;
      border-radius: 10px;
      margin-bottom: 10px;
      padding: 10px;
      background: white;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .layer:nth-child(even) {
      background: #f0f0f0;
    }
    .label {
      font-weight: bold;
    }
    .icon {
      margin-right: 5px;
    }
    .title {
      font-size: 24px;
      margin-bottom: 20px;
    }
    .header {
      font-weight: bold;
      background: #e0e0e0;
      border-radius: 10px 10px 0 0;
    }
  </style>
</head>
<body>
  <div class="title">📊 OSI- & TCP/IP-Modell – Diagramm</div>
  <div class="layer header">
    <div>🧱 OSI-Schicht</div>
    <div>🧭 Einordnung</div>
    <div>🛰️ TCP/IP-Modell</div>
    <div>📡 Protokolle</div>
    <div>📦 Einheiten</div>
    <div>🔌 Kopplung</div>
  </div>

  <div class="layer">
    <div>7️⃣ Anwendung</div>
    <div>🖥️ Anwendungsorientiert</div>
    <div>🌍 Anwendung</div>
    <div>🌐 DHCP, DNS, FTP, HTTP, HTTPS, LDAP, MQTT, NCP, RTP, SMTP, XMPP</div>
    <div>💾 Daten</div>
    <div>🌉 Gateway, Proxy, Layer-4-7-Switch</div>
  </div>

  <div class="layer">
    <div>6️⃣ Darstellung</div>
    <div>🖥️ Anwendungsorientiert</div>
    <div>🌍 Anwendung</div>
    <div>🎨 (Siehe Anwendung)</div>
    <div>💾 Daten</div>
    <div>🔄 (Siehe Anwendung)</div>
  </div>

  <div class="layer">
    <div>5️⃣ Sitzung</div>
    <div>🖥️ Anwendungsorientiert</div>
    <div>🌍 Anwendung</div>
    <div>📅 (Siehe Anwendung)</div>
    <div>💾 Daten</div>
    <div>🔄 (Siehe Anwendung)</div>
  </div>

  <div class="layer">
    <div>4️⃣ Transport</div>
    <div>🚛 Transportorientiert</div>
    <div>🚚 Transport</div>
    <div>🔁 TCP, UDP, SCTP, SPX</div>
    <div>📦 Segmente / Datagramme</div>
    <div>–</div>
  </div>

  <div class="layer">
    <div>3️⃣ Netzwerk</div>
    <div>🚛 Transportorientiert</div>
    <div>🌐 Internet</div>
    <div>🛰️ IP, ICMP, IGMP, IPsec, IPX</div>
    <div>📦 Pakete</div>
    <div>📡 Router, L3-Switch</div>
  </div>

  <div class="layer">
    <div>2️⃣ Sicherung</div>
    <div>🔌 Transportorientiert</div>
    <div>🔗 Netzzugriff</div>
    <div>📶 Ethernet, WLAN, MAC, FDDI, Token Ring</div>
    <div>📃 Frames</div>
    <div>🧱 Bridge, L2-Switch</div>
  </div>

  <div class="layer">
    <div>1️⃣ Bitübertragung</div>
    <div>🔌 Transportorientiert</div>
    <div>🔗 Netzzugriff</div>
    <div>⚡ 1000BASE-T, Token Ring</div>
    <div>🧿 Bits / Symbole</div>
    <div>🧵 Kabel, Repeater, Hub</div>
  </div>
</body>
</html>
