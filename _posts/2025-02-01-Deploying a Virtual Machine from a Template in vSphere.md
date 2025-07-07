---
date: 01.02.2025
layout: post
title: Eine neue VM aus Vorlage erstellen (vSphere)
excerpt: Hier erfährst du, wie du mit vSphere eine neue virtuelle Maschine (VM) aus einer bestehenden Vorlage erstellst.
image: /assets/img/Deploying-a-Virtual-Machine-from-a-Template-in-vSphere/001.jpg
---

Hier erfährst du, wie du mit vSphere eine neue virtuelle Maschine (VM) aus einer bestehenden Vorlage erstellst.

---

### 1. **vSphere Web Client öffnen**  
Melde dich im **vSphere Web Client** an.

---

### 2. **Vorlage auswählen**  
Navigiere im linken Menü zu **VMs and Templates**. Wähle die gewünschte Vorlage (z. B. *VM Vorlage*) aus, klicke mit der rechten Maustaste darauf und wähle **New VM from This Template**.

![](/assets/img/Deploying-a-Virtual-Machine-from-a-Template-in-vSphere/001.jpg)

---

### 3. **Name und Zielordner festlegen**  
Gib deiner neuen VM einen Namen (z. B. *Mia Schneider*) und wähle den Zielordner.

![](/assets/img/Deploying-a-Virtual-Machine-from-a-Template-in-vSphere/002.jpg)

---

### 4. **Compute-Ressource auswählen**  
Wähle den Host oder Cluster, auf dem die VM ausgeführt werden soll.

![](/assets/img/Deploying-a-Virtual-Machine-from-a-Template-in-vSphere/003.jpg)

---

### 5. **Speicherort auswählen**  
Wähle das Datastore, in dem die Dateien der VM gespeichert werden sollen.

![](/assets/img/Deploying-a-Virtual-Machine-from-a-Template-in-vSphere/004.jpg)

---

### 6. **Klonoptionen anpassen**  
Lege fest, ob du das Betriebssystem oder die Hardware anpassen möchtest. Du kannst auch auswählen, ob die VM nach der Erstellung automatisch eingeschaltet wird.

![](/assets/img/Deploying-a-Virtual-Machine-from-a-Template-in-vSphere/005.jpg)

---

### 7. **Gastsystem anpassen (optional)**  
Falls nötig, konfiguriere das Gastsystem, um Konflikte zu vermeiden.

![](/assets/img/Deploying-a-Virtual-Machine-from-a-Template-in-vSphere/006.jpg)

---

### 8. **Hardware anpassen (optional)**  
Passe die virtuelle Hardware nach deinen Anforderungen an.

![](/assets/img/Deploying-a-Virtual-Machine-from-a-Template-in-vSphere/007.jpg)  
![](/assets/img/Deploying-a-Virtual-Machine-from-a-Template-in-vSphere/008.jpg)

---

### 9. **Überprüfen und abschließen**  
Überprüfe alle Einstellungen in der Zusammenfassung und klicke auf **Finish**, um die VM zu erstellen.

![](/assets/img/Deploying-a-Virtual-Machine-from-a-Template-in-vSphere/009.jpg)

---

### 10. **Fertig!**  
Die neue VM wird erstellt und erscheint in deiner Inventarliste. Du kannst sie nun einschalten und weiter konfigurieren.

![](/assets/img/Deploying-a-Virtual-Machine-from-a-Template-in-vSphere/010.jpg)
