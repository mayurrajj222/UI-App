# User Info App

This is an Android app built with **Kotlin** that fetches random user information from the **Random Data API** and displays one user at a time. The user can navigate between users using **Previous** and **Next** buttons.

## Features
- Fetch user details from the **Random Data API**.
- Display user information including ID, name, username, email, and avatar.
- Navigate between users using **Previous** and **Next** buttons.
- **Stylish UI** with a **dark blue** background, gold buttons, and a clean layout.

## Technologies Used
- **Kotlin** (Android Development)
- **Retrofit** (API Requests)
- **Picasso** (Image Loading)
- **XML** (UI Design)

## Screenshots
🚀 _Add screenshots here_

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/user-info-app.git
   ```
2. Open the project in **Android Studio**.
3. Connect an emulator or an Android device.
4. Run the app.

## API Used
This app fetches random user data from:
- **Random Data API**: [https://random-data-api.com/api/users/random_user](https://random-data-api.com/api/users/random_user)

## Setup
1. **Ensure you have Internet Permission** in `AndroidManifest.xml`:
   ```xml
   <uses-permission android:name="android.permission.INTERNET" />
   ```
2. **Dependencies (build.gradle - Module)**:
   ```gradle
   dependencies {
       implementation 'com.squareup.retrofit2:retrofit:2.9.0'
       implementation 'com.squareup.retrofit2:converter-gson:2.9.0'
       implementation 'com.squareup.picasso:picasso:2.8'
   }
   ```

## How It Works
1. **Fetches 80 users from the API**.
2. **Displays the first user** when the app loads.
3. **Allows navigation** between users using buttons.
4. **Loads avatars using Picasso**.

## Contributing
Pull requests are welcome! If you find a bug or have suggestions, feel free to open an issue.

## License
MIT License. See `LICENSE` for details.
