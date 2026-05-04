# 👥 KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a modern and responsive web application designed to help you maintain meaningful relationships. It allows you to track interactions with your friends, set communication goals, and visualize your connection patterns through analytics.

---

## 🚀 Live Project

🔗 Live Link: *(Add your deployed link here)*
🔗 GitHub Repository: *(Add your repo link here)*

---

## 📌 Features

### 🏠 Home Page

* View all friends in a clean card layout
* Displays profile image, name, last contact time, tags, and status
* Responsive 4-column grid (desktop) → mobile friendly
* Click any friend to view detailed information

---

### 👤 Friend Details Page

* Two-column responsive layout
* Shows:

  * Profile picture, name, email, bio
  * Tags and status with color indicators
* Action buttons:

  * ⏰ Snooze
  * 📦 Archive
  * 🗑️ Delete
* **Quick Check-In System**

  * 📞 Call
  * 💬 Text
  * 🎥 Video
* Each action:

  * Adds entry to Timeline
  * Shows toast notification

---

### 📜 Timeline Page

* Displays all interaction history
* Each entry includes:

  * 📅 Date
  * 🔣 Icon (Call / Text / Video)
  * 📝 Title
* **Filter system (Challenge Feature ⭐)**

  * Filter by Call / Text / Video

---

### 📊 Friendship Analytics (Stats Page)

* Visual representation using **Recharts**
* Donut (Pie) chart showing:

  * Call count
  * Text count
  * Video count
* Clean and modern UI

---

### ⚠️ Additional Features

* ✅ 404 Page for invalid routes
* ✅ Loading state while fetching data
* ✅ Toast notifications for actions
* ✅ Fully responsive design (Mobile, Tablet, Desktop)

---

## 🛠️ Technologies Used

* ⚛️ React.js
* 🌐 React Router DOM
* 🎨 Tailwind CSS
* 📊 Recharts
* 🔔 React Toastify

---

## ⚙️ How It Works

1. Friend data is loaded from a local JSON file
2. Clicking a friend opens detailed view
3. User actions (Call/Text/Video):

   * Stored in global state (Context API)
   * Displayed in Timeline page
4. Stats page analyzes interaction data and visualizes it

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone <your-repo-link>

# Navigate to project folder
cd keen-keeper

# Install dependencies
npm install

# Run the project
npm run dev
```

---

## 🎯 Future Improvements (Optional)

* 🔍 Search timeline entries
* ⏳ Sort by newest/oldest
* 💾 Persist data using localStorage or database
* 🔐 Authentication system

---

## 👨‍💻 Author

**Sheikh Abdul Malek**
💼 Aspiring Full-Stack Developer | Digital Marketer

---

## ⭐ Final Note

This project demonstrates:

* Real-world React routing
* State management using Context API
* UI design implementation from Figma
* Data visualization with charts

---

✨ *Keep your friendships alive with KeenKeeper!*
