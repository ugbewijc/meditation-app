# Meditation User Story

# User Story Template

**Title:**
As a <user role>, I want to <action> so that <goal or benefit>

**Acceptance Criteria:**
1. [Criteria 1]
2. [Criteria 2]
3. [Criteria 3]

**Story Points:** [Estimated Effort in Points]

## User stories for the Login/Registration page

#### 1. As a user, I want to register by entering my username, email, and password, so that I can create an account.
    Acceptance Criteria:
    - Users can enter valid details and click “Sign Up” to create an account.
    - An error message is shown if any input is invalid or missing.

####  2. As a user, I want to log in using my email and password, so that I can access my account.
    Acceptance Criteria:
    - Users can log in with correct credentials and are redirected to their dashboard.
    - An error message is displayed for incorrect credentials.

#### 3. As a user, I want to receive feedback when I attempt to sign up or log in without entering details, so that I can fix the errors.

    Acceptance Criteria:
    - Error messages are displayed for missing fields on sign-up or login attempts.

#### 4. As a user, I want my details to be stored in local storage, so that my data persists between sessions.
    Acceptance Criteria:
    - User details are saved in local storage after registration and used for authentication during login.

## User stories for the homepage
The homepage features a personalized greeting, popular meditations with images, categories such as calmness, relaxation, and duration, as well as a daily featured meditation. Navigation includes a logo and a settings icon for easy access. The layout emphasizes quick access to tailored meditation sessions.

#### 1. As a user, I want a personalized greeting with my name and a title, so that I feel welcomed and encouraged to meditate.

    Acceptance Criteria:

    - Display “Hello, [username]” followed by the title “Find your perfect meditation.”

#### 2. As a user, I want to see popular meditation cards, so that I can explore options based on my preferences.

    Acceptance Criteria:

    - Display cards with images, titles, descriptions, categories such as calmness, relaxation, and durations such as 10 or 15 minutes.

#### 3. As a user, I want a daily featured meditation, so that I can quickly access a recommended session.

    Acceptance Criteria:

    - Showcase one meditation with an image, title, category, and duration in a dedicated section.

#### 4. As a user, I want intuitive navigation icons, so that I can easily move around the app.

    Acceptance Criteria:

    - Display a logo in the top-left corner and a settings icon in the top-right corner for navigation.


## User stories for the detailed screen
When the user opens the detailed exercise page, they'll first see a large banner image representing the meditation exercise at the top. Below the image, they'll find the exercise title "Mindful Breathing" along with categories such as Calmness and the duration of the exercise.

#### 1. As a user, I want an “About” section for each exercise, so that I can understand its benefits and purpose.

    Acceptance Criteria:

    - Display a brief description of the exercise, explaining its focus and stress-reducing benefits.

#### 2. As a user, I want an “Instructions” section for each exercise, so that I can perform it correctly.

    Acceptance Criteria:

    - Provide step-by-step guidance on posture and breathing techniques for the exercise.

#### 3. As a user, I want an “Add to Favorites” button, so that I can easily save an exercise for future practice.

    Acceptance Criteria:

    - Include a prominent “Add to Favorites” button at the bottom of the page.

#### 4. As a user, I want navigation icons for sharing and going back, so that I can easily manage the exercise page.

    Acceptance Criteria:

    - Display a back icon and a share icon at the top of the page for easy navigation.

## User stories for the add to favorites functionality
From a user's perspective, the favorites feature provides a seamless and interactive way to manage personal preferences. Here's how the user experiences this feature:

#### 1. As a user, I want to add an item to my Favorites, so that I can save activities or articles I like for quick access later.

    Acceptance Criteria:

- <i>A heart icon with the text “Add to Favorites” is displayed next to each item.</i>
- <i>The outlined heart indicates the item is not in Favorites.</i>
- <i>Tapping the button adds the item to the Favorites list, updates the button text to “Remove from Favorites,” and changes the heart icon to filled.</i>

#### 2. As a user, I want to remove an item from my Favorites, so that I can manage my saved content.

    Acceptance Criteria:

- The “Remove from Favorites” button with a filled heart is displayed for items already in Favorites.
- Tapping the button removes the item from the Favorites list and reverts the heart icon to outlined.
- Users can add or remove items anytime, and the button text updates accordingly.

#### 3. As a user, I want a “My Favorites” screen, so that I can view and manage all my saved items in one place.
    Acceptance Criteria:

- The “My Favorites” screen displays a list of saved items with their title, category, and duration.
- Users can tap any item to view details or start the activity.
- The Favorites list remains organized for easy browsing and quick access.


## User stories for daily reminders
This setup allows users to manage reminders for specific activities, such as meditation, with a straightforward interface for setting dates and times.


#### 1. As a user, I want to view the calendar for the current month and navigate between months, so that I can easily select dates for reminders.

    Acceptance Criteria:

- Display the current month with all the days visible.
- Provide navigation arrows to move between months.

#### 2. As a user, I want to select a date and time for a reminder, so that I can schedule it properly.

    Acceptance Criteria:

- Display a default text “Selected Date: None” and “Selected Time: 20:44” to indicate no date has been selected but a time is chosen.
- Allow users to select a specific time and date.

#### 3. As a user, I want to add a reminder after selecting a time, so that I can schedule it for a future date and time.

    Acceptance Criteria:

- After selecting a time, users can click the “Add Reminder” button to schedule the reminder.

#### 4. As a user, I want to see a list of all my reminders, so that I can manage them easily.

    Acceptance Criteria:

- Display a list of all reminders with the selected date and time.
- Provide an option to delete a reminder by clicking the red “Delete” button next to it.


## User stories for sharing the exercises
These user stories ensure that the sharing functionality is user-friendly, accessible, and efficient.


#### 1. As a user, I want to easily share recommended exercises with friends or family, so that I can help others discover helpful activities.

    Acceptance Criteria:

- Provide a clear share button/icon on the exercise detail page for easy sharing.
- Allow users to share exercises via multiple platforms (e.g., social media, email, or messaging apps).


## User stories for logout functionality
These user stories allow users to securely log out of their accounts, clearing session data and redirecting them to the login page.

#### 1. As a user, I want a clear and visible logout button, so that I can easily log out of my account when I’m done using the app.

    Acceptance Criteria:

- Display a clear and visible “Logout” button in the app.
- Tapping the button logs the user out and redirects them to the login page.
- User session data is cleared upon logout to ensure secure access.


## User story for change settings
These user stories outline the essential features that enhance user experience and personalization within the app. A critical aspect of this experience is the ability for users to customize the app's appearance to suit their needs and preferences.


#### 1. As a user, I want to switch between light and dark themes, so that I can reduce eye strain and customize the app’s visual experience.

    Acceptance Criteria:

- Provide a “Theme” toggle or switch in the settings section for light and dark mode options.
- Allow the user to switch between light and dark mode seamlessly.
- The theme should change immediately without needing to refresh or restart the app.


