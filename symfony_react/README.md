# 🚀 TaskFlow — Symfony + React

![Symfony](https://img.shields.io/badge/Symfony-Backend-black)
![React](https://img.shields.io/badge/React-Frontend-blue)

---

## 📌 Description

API sécurisée développée avec Symfony permettant de gérer des tâches utilisateurs, consommée par un front React.

---

## ⚙️ Stack

- Front : React
- Back : Symfony
- BDD : MySQL

---

## ✨ Fonctionnalités

### 🔐 Authentification
- Inscription
- Connexion
- Accès protégé

### 📋 Tâches
- CRUD complet
- Filtres

### 🖼️ Médias
- Avatar utilisateur
- Image tâche
- Vidéo (bonus)

---

## 🧠 Objectifs

- Apprendre Symfony
- Travailler Doctrine
- Implémenter sécurité
- Comparer avec Node.js

---

## 🗄️ Modélisation

### User
- email, password, roles, avatarPath

### Task
- title, status, priority, imagePath, videoPath

---

## 🔗 Relations

- User → OneToMany → Task
- Task → ManyToOne → User

---

## 📡 API

- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/{id}
- DELETE /api/tasks/{id}

---

## 📁 Structure

```

src/
Entity/
Controller/
Repository/
Security/

```

---

## 🔍 Comparaison avec Node.js

| Critère | Node | Symfony |
|--------|------|--------|
| Structure | Libre | Structurée |
| Mise en place | Rapide | Plus cadrée |
| Sécurité | Manuelle | Intégrée |

---

## 📸 Aperçu

*(à compléter)*

---

## 📌 Améliorations possibles

- API Platform
- Tests
- Optimisation