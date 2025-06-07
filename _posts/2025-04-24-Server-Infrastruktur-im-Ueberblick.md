---
layout: post
title:  "Server Infrastruktur im Ueberblick"
date:   2025-06-07
categories: [Allgemein]
image: "/blog/images/Server-Infrastruktur-im-Ueberblick/001.svg"
---

![Alternativtext](/images/Server-Infrastruktur-im-Ueberblick/002.svg)

Are you currently learning how modern IT infrastructures are built? Then this overview is exactly what you need.

Here you’ll find an example of a well-thought-out server landscape as it might be used in companies – with clearly defined roles, recommended hardware, and suitable software. Each server type fulfills a specific purpose: from user management and virtualization to backup, storage, or monitoring.

The software components are also listed – including brief explanations **of what they are used for and how they interact**.

Whether you're just starting out or want to deepen your knowledge: this overview helps you better understand the relationships and theoretically plan your own infrastructures.

🖥️ Server | 💽 Storage | 🌐 Network | 📼 Backup | 🔋 Power Supply

---

### 🖥️ Main Virtualization Server 1

🧰 **Recommended Devices:**

→ 🖥️ Dell PowerEdge R760 (high density, current Xeon, ideal for virtualization)

→ 🖥️ Lenovo ThinkSystem SR650 V3

→ 🖥️ HPE ProLiant DL380 Gen11

🧠 **Software & Services:**

→ 🧩 **VMware ESXi 8:** Virtualization host for running multiple VMs on one hardware platform

→ 🧩 **Windows Server 2025 with AD DS:** Centralized user and rights management within a domain

→ 🧩 **DNS Server:** Name resolution within the internal network (e.g., server01.domain.local → IP address)

---

### 🖥️ Main Virtualization Server 2

🧰 **Recommended Devices:**

→ 🖥️ Dell PowerEdge R760

→ 🖥️ Fujitsu PRIMERGY RX2540 M6

→ 🖥️ Cisco UCS C240 M6

🧠 **Software & Services:**

→ 🧩 **VMware ESXi 8:** Virtualization of multiple server services

→ 🧩 **Microsoft SQL Server:** Database platform for applications, reports, and company data

→ 🧩 **SQL Server Management Studio (SSMS):** Management interface for SQL databases and queries

---

### 🖥️ Main Virtualization Server 3

🧰 **Recommended Devices:**

→ 🖥️ Dell PowerEdge R750

→ 🖥️ Supermicro SYS-620U

→ 🖥️ HPE ProLiant DL385 Gen11

🧠 **Software & Services:**

→ 🧩 **VMware ESXi 8:** Host for Exchange and file services

→ 🧩 **Microsoft Exchange Server:** Corporate email and calendar solution

→ 🧩 **Outlook Web Access (OWA):** Web-based access to emails

→ 🧩 **File and Print Server:** Shared access to files and network printers

---

### 🗄️ Backup / Database Server

🧰 **Recommended Devices:**

→ 🖥️ Lenovo ThinkSystem SR650 V3

→ 🖥️ Dell PowerEdge R760xd (large storage expansion possible)

→ 🖥️ HPE ProLiant DL385 Gen10 Plus

🧠 **Software & Services:**

→ 🧩 **VMware ESXi 8 or Windows Server:** Virtualization platform or native backup OS

→ 🧩 **Veeam Backup & Replication:** Backup and recovery of VMs and physical systems

→ 🧩 **Microsoft SQL Server (optional):** Central data storage for applications or logs

→ 🧩 **PRTG or Zabbix:** Network and infrastructure monitoring

---

### 🧪 Test & Monitoring Server

🧰 **Recommended Devices:**

→ 🖥️ Dell PowerEdge R540

→ 🖥️ HPE ProLiant DL20 Gen10 Plus

→ 🖥️ Fujitsu PRIMERGY TX1320 M5

🧠 **Software & Services:**

→ 🧩 **VMware ESXi 6.7 or Linux (Debian, Ubuntu):** Cost-effective test environment for new services

→ 🧩 **Zabbix or PRTG:** Network and system monitoring

→ 🧩 **Snipe-IT:** IT asset management for hardware and license management

→ 🧩 **Test Environments:** Isolated development or upgrade tests

---

### 🚀 SAN – High-Speed Storage

🧰 **Recommended Devices:**

→ 🖥️ IBM FlashSystem 5200

→ 🖥️ NetApp AFF A250

→ 🖥️ Dell EMC PowerMax 2500

🧠 **Software & Services:**

→ 🧩 **Management System:** Manufacturer-specific web/CLI management (e.g., ONTAP, Unisphere)

→ 🧩 **iSCSI or Fibre Channel:** High-performance block access for VMs

→ 🧩 **Multipathing / MPIO:** Redundancy and load balancing for storage access

→ 🧩 **Datastore for Production VMs:** Main storage location for VM disks

---

### 💽 NAS – Mass Storage

🧰 **Recommended Devices:**

→ 🖥️ HPE Apollo 4200 Gen10 Plus

→ 🖥️ Dell PowerVault NX3240

→ 🖥️ Synology SA3600

🧠 **Software & Services:**

→ 🧩 **ZFS, TrueNAS or HPE Storage Software:** Secure, flexible storage management

→ 🧩 **SMB Shares:** File shares for Windows environments

→ 🧩 **NFS or iSCSI:** Storage provisioning for ESXi hosts

→ 🧩 **Snapshots / Replication:** Protection and duplication of data states

---

### 📼 Long-Term Backup

🧰 **Recommended Devices:**

→ 🖥️ HPE StoreEver MSL3040

→ 🖥️ IBM TS4300 Tape Library

→ 🖥️ Quantum Scalar i6

🧠 **Software & Services:**

→ 🧩 **Veeam Backup & Replication:** Tape backup support and archiving

→ 🧩 **Archiving to Tape:** Long-term retention on LTO media

→ 🧩 **Long-Term Data Retention:** Compliance with legal retention periods

---

### 🌐 Network – Switching & Routing

🧰 **Recommended Devices:**

→ 🖥️ Cisco Catalyst 9300X

→ 🖥️ Aruba 6300F Series

→ 🖥️ Juniper EX4400

🧠 **Software & Services:**

→ 🧩 **Cisco IOS / ArubaOS / JunOS:** Switch operating systems for enterprise networks

→ 🧩 **CLI or Web Interface:** Administration and configuration

→ 🧩 **VLANs / QoS:** Segmentation and prioritization in the network

→ 🧩 **Network Management Systems:** Centralized monitoring and automation

---

### 🔥 Firewall – Network Security

🧰 **Recommended Devices:**

→ 🖥️ Fortinet FortiGate 100F

→ 🖥️ Netgate 6100 (pfSense Plus)

→ 🖥️ Cisco Firepower 1120

🧠 **Software & Services:**

→ 🧩 **FortiOS / pfSense / Firepower:** Security operating systems with Layer 7 functionality

→ 🧩 **Stateful Firewall:** Packet inspection with connection tracking

→ 🧩 **VPN (IPsec, OpenVPN):** Secure remote access

→ 🧩 **IDS/IPS, Web Filtering:** Threat detection and content control

→ 🧩 **Centralized Management:** E.g., with FortiManager or pfSense HA

---

### 🔋 UPS – Power Supply

🧰 **Recommended Devices:**

→ 🖥️ APC Smart-UPS SRT Series

→ 🖥️ Eaton 9PX G2

→ 🖥️ Vertiv Liebert GXT5

🧠 **Software & Services:**

→ 🧩 **PowerChute Business Edition:** Monitoring & automated shutdown

→ 🧩 **Power Outage Protection:** Safeguarding against interruptions and power surges

→ 🧩 **Battery Monitoring via SNMP:** Central status reporting and monitoring system integration