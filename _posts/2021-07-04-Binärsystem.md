---
date: 10.07.2021
layout: post
title: Binärsystem - Bit für Bit. Wie Computer mit 0 und 1 denken
excerpt: Wie funktioniert ein Computer eigentlich? Warum reicht ihm ein „An“ oder „Aus“, um Texte, Bilder, Spiele und Musik darzustellen? Die Antwort steckt im Binärsystem: Computer denken nicht wie wir in Zehnerzahlen, sondern in 0 und 1. In diesem Artikel erfährst du verständlich erklärt, was Bit, Byte und Binärzahlen bedeuten – und warum Strom an oder aus die Grundlage der gesamten digitalen Welt ist.
image: /assets/img/Binary/001.webp
---

Wie funktioniert ein Computer eigentlich? Warum reicht ihm ein „An“ oder „Aus“, um Texte, Bilder, Spiele und Musik darzustellen? Die Antwort steckt im Binärsystem: Computer denken nicht wie wir in Zehnerzahlen, sondern in 0 und 1. In diesem Artikel erfährst du verständlich erklärt, was Bit, Byte und Binärzahlen bedeuten – und warum Strom an oder aus die Grundlage der gesamten digitalen Welt ist. 💡💻

# 💡 **Was sind Bit, Byte & Binärzahlen?**

## 🔢 **Binärsystem**

Computer verstehen nur **zwei Zustände**:

- `0` = **kein Strom** ❌
- `1` = **Strom fließt** ✅

Das nennt man das **Binärsystem** – es benutzt nur **0 und 1**.

---

## 🧩 **Was ist ein Bit?**

- **1 Bit** = kleinste Einheit der Information
- Es kann nur **zwei Werte** haben: `0` oder `1`

---

## 📦 **Was ist ein Byte?**

- **1 Byte = 8 Bit**
- Damit kann man **256 Kombinationen** darstellen

| Anzahl Bits | Möglichkeiten (Zustände) |
| --- | --- |
| 1 Bit | 2 Werte (0, 1) |
| 2 Bit | 4 Werte (00, 01, 10, 11) |
| 3 Bit | 8 Werte |
| ... | ... |
| **8 Bit** | **256 Werte (0–255)** |

---

## 🧮 **Beispiel: Binär → Dezimal**

| Binär | Dezimal |
| --- | --- |
| `00000000` | 0 |
| `00000001` | 1 |
| `00000101` | 5 |
| `11111111` | 255 |

Du zählst quasi mit Strom: **aus, aus, an, an...**

---

## ⚙️ **Wie funktioniert das im Computer?**

- Computer bestehen aus **Transistoren** ⚡
- Diese schalten **Strom ein oder aus**
- Viele Transistoren zusammen = **IC (Integrierter Schaltkreis)** 🧠

---

## 📌 **Warum ist das wichtig?**

- Alles in der IT basiert auf 0 und 1:
    
    Texte, Bilder, Videos, Programme...
    

---

## 🧠 **Merksätze:**

- **1 Bit** = 0 oder 1
- **8 Bit = 1 Byte**
- **1 Byte = 256 Möglichkeiten (0 bis 255)**
- Computer denken **binär**, nicht wie wir in 10er-Schritten!

- **„A“** ist in ASCII = **65**
- **65** in Binär = **`01000001`**

---

## 🔢 **Formelhafte Methode: Division durch 2**

### 👉 Vorgehen (nennt sich „Restmethode“):

Du teilst die Zahl immer wieder durch 2

und schreibst die **Reste** auf – von **unten nach oben**!

---

### Beispiel: **65 → Binär**

1. 65 ÷ 2 = **32**, Rest = **1**
2. 32 ÷ 2 = **16**, Rest = **0**
3. 16 ÷ 2 = **8**, Rest = **0**
4. 8 ÷ 2 = **4**, Rest = **0**
5. 4 ÷ 2 = **2**, Rest = **0**
6. 2 ÷ 2 = **1**, Rest = **0**
7. 1 ÷ 2 = **0**, Rest = **1** ⬅️ letzter Schritt

---

### Jetzt alle Reste **von unten nach oben**:

```
1 0 0 0 0 0 1
```

Das sind nur 7 Stellen – wir brauchen **8 Bit**, also fügen wir vorne eine `0` hinzu:

➡️ `01000001`

✅ Das ist **65 in Binär** = Buchstabe **„A“**

---

## ⚙️ **Was ist ein Transistor?**

Ein **Transistor** ist ein **elektronischer Schalter**.

Er kann:

- den **Strom durchlassen** (👉 **1**)
- den **Strom blockieren** (👉 **0**)

Er ist **winzig klein** (Millionen passen in einen Prozessor).

---

## 🔌 Wie funktioniert er?

Ein Transistor hat **drei Anschlüsse**:

- **C** = Collector
- **B** = Basis
- **E** = Emitter

Wenn an der **Basis** ein kleines Signal ankommt,

schaltet er den Strom zwischen **C und E** **frei** – **wie ein Lichtschalter**!

| Basis-Signal | Strom fließt? | Ausgabe |
| --- | --- | --- |
| 0 Volt | ❌ kein Strom | 0 |
| 1 Volt (oder mehr) | ✅ Strom fließt | 1 |

---

## 🧠 So speichert der Computer 0 und 1:

Der Transistor ist also wie ein **Mini-Lichtschalter**:

- **Aus = 0**
- **An = 1**

Millionen Transistoren zusammen speichern in deinem PC alles:

- Texte
- Bilder
- Programme
- Spiele
    
    → **alles als 0 und 1!**
    

---

## 🎮 Beispiel:

Du drückst auf der Tastatur „A“ →

Das wird in den Speicher als `01000001` geschrieben →

**8 Transistoren** schalten sich in dieser Reihenfolge:

`0` `1` `0` `0` `0` `0` `0` `1`

→ Der Computer weiß: Du hast „A“ eingegeben ✅

---

Warum hat **1 Bit** genau **2 Werte (0 und 1)** – und nicht mehr?

Lass es mich ganz einfach und logisch erklären:

---

## 🧩 Was ist ein Bit?

- Das Wort **„Bit“** kommt von **„Binary Digit“** = **binäre Ziffer**
- „Binär“ bedeutet: **Zwei Zustände**

👉 Ein Bit ist also **extra dafür gemacht**, nur **2 Möglichkeiten** zu speichern.

---

## ⚡ Technisch: Strom **an** oder **aus**

Ein Bit speichert **Information als Stromzustand**:

| Stromzustand | Bit-Wert |
| --- | --- |
| Kein Strom | 0 |
| Strom fließt | 1 |

➡️ Es gibt **nur zwei klare Zustände** → deshalb: **nur 2 Werte**

---

## 🧠 Mathematisch: 2 Möglichkeiten pro Bit

Wenn du **n Bits** hast, kannst du:

2n Mo¨glichkeiten2^n \text{ Möglichkeiten}

2n Mo¨glichkeiten

darstellen.

| Bits | Möglichkeiten | Beispiel |
| --- | --- | --- |
| 1 | 2 | 0, 1 |
| 2 | 4 | 00, 01, 10, 11 |
| 3 | 8 | 000 bis 111 |
| 8 | 256 | 00000000–11111111 |

👉 Also: **1 Bit = 2 Werte**

---

## 📌 Warum nicht 3 oder mehr Werte?

Technisch möglich, aber:

- viel **komplizierter**
- **fehleranfällig** (z. B. Stromstärke genau erkennen)
- teurer in der Umsetzung

➡️ **2 Werte (0 und 1)** sind perfekt für die **einfache, sichere Technik**

---

## 🧠 Merksatz:

> Ein Bit hat 2 Zustände, weil es ein binäres Schaltelement ist – wie ein Lichtschalter: ein oder aus.
> 
> 
> Mehr brauchst du nicht, um ALLES in der IT darzustellen. 💻
>