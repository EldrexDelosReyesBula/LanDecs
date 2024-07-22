<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>https://www.eldrexdelosreyes.org.com</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <style>
        /* Global Styles */
body {
    font-family: 'Times New Roman'; 
    background: linear-gradient(45deg, #ff000a, #000000, #00abff);
    background-size: 600% 600%; /* Ensures the gradient covers a larger area */
    animation: gradientAnimation 15s ease infinite; /* Apply animation */
    margin: 0; 
    padding: 0; 
    overflow: hidden; /* Prevent scrolling */
    scroll-behavior: smooth; /* Enable smooth scrolling */
}

        .header {
            text-align: center;
            padding: 5px ;
            background-color: lightgray;
            box-shadow: 0 10px 10px rgba(3, 5, 4, 0.24);
            overflow: hidden;
        }

        .profile {
            display: flex;
            justify-content: center;
            margin-top: 100px;
        }

        .profile-card {
            background-color: skyblue;
            border-radius: 50px;
            height: auto;
            box-shadow: 0 10px 10px rgba(3, 5, 4, 0.24);
            overflow: hidden;
            width: 95%;
            max-width: 900px;
            text-align: center;
            transition: transform 1s ease-in-out;
            transform: translateY(100%);
        }

        .profile-card.visible {
            transform: translateY(0);
            height: 900px;
            overflow: hidden;
            max-width: 1000px;
            max-height: 600px;
        }
        
        .profile-picture {
            position: relative;
            overflow: hidden;
            border-width: 1px;
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.24);
        }

        .profile-card .profile-picture {
            position: relative;
            overflow: hidden;
            width: 100px;
            height: 100px;
            margin: -100px auto 0;
            border-radius: 50%;
            border-width: 1px;
            background: url('https://ucarecdn.com/64dfa8a1-3f5f-42ef-9fac-46d22249bdc9/-/preview/720x720/') no-repeat center center / cover;
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 150);
            animation: float 5s ease-in-out infinite;
        }
        
        /* Keyframes for gradient animation */
@keyframes gradientAnimation {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
}

        @keyframes float {
            50%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-30px);
            }
        }

        .profile-card .cover-photo {
            width: 100%;
            height: 200px;
            background: #0081ff;
        }

        .profile-details {
            padding: 20px;
            text-align: center;
        }

        .profile-details h1 { 
            font-size: 20px; color: #333; /* Adjust text color */ 
            display: inline-block; /* Ensures badge aligns properly */ 
            vertical-align: middle; /* Aligns text and badge vertically */ 
        }

        .profile-details p {
            margin: 2px auto;
            font-size: 10px;
            color: #888;
        }

        .profile-details .bio {
            font-family: 'Times New Roman';
            color: #888;
        }
        
        /* Profile Card Styles */
.profile-card {
    transition: transform 1s ease, opacity 10s ease;
    opacity: 10;
}

.profile-card.hide {
    transform: scale(0); /* Scaled down for hiding */
    opacity: 10;
}

/* Greeting Text Styles */
.greeting-text {
    color: #00abff; /* Initial text color */
    text-align: center;
    font-size: 24px;
    margin: 20px fixed;
    background-color: transparent; /* No background color */
    padding: 10px;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.5s ease, transform 0.5s ease;
    white-space: nowrap; /* Ensure text stays on one line */
    text-shadow: 0 0 10px #00abff; /* Neon glow effect */
    animation: colorChange 3s infinite;
}

/* Keyframes for color animation */
@keyframes colorChange {
    0% {
        color: lightblue;
    }
    33% {
        color: silver;
    }
    66% {
        color: white;
    }
    100% {
        color: gold;
    }
}

/* Body Background Transition */
body {
    transition: background-color 0.2s ease;
}
        
        .verified-badge { 
            display: inline-block; 
            width: 18px; /* Adjust size as needed */ 
            height: 18px; /* Adjust size as needed */ 
            background-color: #1877f2; /* Facebook blue background color */ 
            border-radius: 50%; /* Makes it circular */ 
            color: white; /* Text color */ 
            text-align: center; /* Center text horizontally */ 
            line-height: 18px; /* Center text vertically */ 
            font-size: 12px; /* Font size of the checkmark */ 
            font-weight: bold; /* Make the checkmark bold */ 
            margin-left: 5px; /* Adjust spacing between badge and text */ 
            vertical-align: middle; /* Align badge vertically with text */ 
        }
        
        .social-icons {
            margin-top: 20px;
            text-align: center;
        }

        .social-icons a {
            margin: 0 10px;
            color: #4267B2;
            text-decoration: none;
            font-size: 20px;
            transition: color 0.5s, transform 0.5s;
        }

        .social-icons a:hover {
            color: #ff6600;
            transform: scale(1.2);
            items-align: center;
        }

        .buttons {
            margin-top: 40px;
        }

        .buttons button, .buttons a {
            margin: 5px;
            padding: 10px 20px;
            border: none;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.24);
            border-radius: 23px;
            background-color: #00abff;
            color: white;
            font-size: 12px;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
            item-align: center;
        }

        .buttons button:hover, .buttons a:hover {
            background-color: #365899;
        }

        .notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #333;
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.5s ease, visibility 0.5s;
        }

        .notification.show {
            opacity: 1;
            visibility: visible;
        }
        
        body {
           -webkit-user-select: none; /* Safari */
           -moz-user-select: none; /* Firefox */
           -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Edge */
}
        
        body {
          -webkit-user-select: none; /* Safari */
          -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
           user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Edge */
        }

        /* Prevent text selection */
        body, input, textarea {
            user-select: none;
        }

        /* Prevent copy-paste */
        input, textarea {
            -webkit-user-select: none; /* Chrome, Safari, Opera */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
        }

        /* For all elements in the body */
        body * {
            user-select: none;
        }

        /* Dark mode styles */
        body.dark-mode {
            background-color: #121212;
            color: #ffffff;
        }

        body.dark-mode .header {
            background-color: #333333;
        }

        body.dark-mode .profile-card {
            background-color: #333333;
        }

        body.dark-mode .profile-details h1, 
        body.dark-mode .profile-details p, 
        body.dark-mode .profile-details .bio {
            color: #ffffff;
        }
    </style>
<script defer data-domain="https://eldrexdelosreyesbula.com" src="https://eldrexdelosreyesbula.com"></script><script type="text/javascript" src="https://eldrexdelosreyesbula.com"></script><script defer data-domain="https://eldrexdelosreyesbula.com" src="url"></script><script type="text/javascript" src="url"></script></head>
<body>
    <div class="header">
        <h1>“Still be the Blue”</h1>
        <p>—Eldrex Delosreyes Bula</p>
    </div>
       
       
    <div class="profile">
        <div class="profile-card">
            <div class="cover-photo"></div>
            <div class="profile-picture"></div>
            <div class="profile-details"> 
                <h1>Eldrex Delos Reyes Bula <span class="verified-badge">&#10003;</span></h1>
                <p class="bio"> <span id="follower-count"></span></p>
            </div>
            <div class="social-icons">
                <a href="https://www.instagram.com/landecs.27006?igsh=MTZtM3Z4dGR1Zzl4Yg==" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/eldrexdelosreyesbula.org.ph?mibextid=ZbWKwL" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://landecs-eldrexbula-org.tiiny.site/" target="_blank"><i class="fas fa-globe"></i></a>
                <a href="https://x.com/eldrexbula87467?t=fiUwovoiVxT3GbRKrbpphA&s=09" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/@LanDecs-org" target="_blank"><i class="fab fa-youtube"></i></a>
            </div>
            <div class="buttons">
                                <a href="mailto:eldrexdelosreyesbula@gmail.com"><i class="fas fa-envelope"></i></a>
                <a href="tel:+639516326952"><i class="fas fa-phone"></i></a>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const profileCard = document.querySelector('.profile-card');
    setTimeout(() => {
        profileCard.classList.add('visible');
    }, 500); // Delay for effect

    // Initialize localStorage for follow state and follower count
    const followKey = 'isFollowed';
    const followerCountKey = 'followerCount';

    if (!localStorage.getItem(followKey)) {
        localStorage.setItem(followKey, 'false');
    }
    if (!localStorage.getItem(followerCountKey)) {
        localStorage.setItem(followerCountKey, '0');
    }

    const followButton = document.createElement('button');
    const isFollowed = localStorage.getItem(followKey) === 'true';
    let followerCount = parseInt(localStorage.getItem(followerCountKey), 10);

    followButton.innerHTML = isFollowed
        ? '<i class="fas fa-user-check"></i>'  // Followed icon
        : '<i class="fas fa-user-plus"></i>'; // Follow icon
    followButton.classList.add('follow-button');
    followButton.disabled = isFollowed; // Disable if already followed

    followButton.addEventListener('click', () => {
        if (localStorage.getItem('buttonClicked') === 'true') {
            return; // Prevent further clicks
        }

        if (isFollowed) {
            localStorage.setItem(followKey, 'false');
            followButton.innerHTML = '<i class="fas fa-user-plus"></i>'; // Follow icon
            followerCount--;
        } else {
            localStorage.setItem(followKey, 'true');
            followButton.innerHTML = '<i class="fas fa-user-check"></i>'; // Followed icon
            followerCount++;
        }
        localStorage.setItem(followerCountKey, followerCount.toString());
        localStorage.setItem('buttonClicked', 'true'); // Record the button click
        followButton.disabled = true; // Disable button after click
        updateFollowerCount();
    });

    function updateFollowerCount() {
        document.querySelector('.follower-count').textContent = `Followers: ${followerCount}`;
    }

    const buttonsDiv = document.querySelector('.buttons');
    buttonsDiv.appendChild(followButton);

    // Update the bio section with follower count
    const bioSection = document.querySelector('.bio');
    const followerCountDiv = document.createElement('div');
    followerCountDiv.classList.add('follower-count');
    followerCountDiv.textContent = `Followers: ${followerCount}`;
    bioSection.appendChild(followerCountDiv);

    updateFollowerCount();

    // Add double click functionality to toggle between dark and light modes
    document.addEventListener('dblclick', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Check the saved theme on page load
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  
  document.addEventListener('copy', function(e) {
    e.preventDefault();
  });
  
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  document.addEventListener('keyup', function(e) {
  if (e.key === 'PrintScreen') {
    // Perform action when PrintScreen key is pressed
    console.log('PrintScreen key detected');
    // Optionally, prevent default behavior:
    e.preventDefault();
  }
});



// Define dark mode styles
const darkModeStyles = document.createElement('style');
darkModeStyles.textContent = `
    .dark-mode {
        background-color: #121212;
        color: #ffffff;
    }
    .dark-mode .header {
        background-color: #1f1f1f;
    }
    .dark-mode .profile-card {
        background-color: #1f1f1f;
    }       }
    .dark-mode .cover-photo {
        background-color: #333;
    }
    .dark-mode .social-icons a {
        color: #ffffff;
    }
    .dark-mode .buttons button, .dark-mode .buttons a {
        background-color: #333;
    }
    .dark-mode .buttons button:hover, .dark-mode .buttons a:hover {
        background-color: #555;
    }
    .dark-mode .verified-badge {
        background-color: #15a1ff;
        color: #ffffff;
    }
`;
document.head.appendChild(darkModeStyles);

document.addEventListener('DOMContentLoaded', () => {
    const profileCard = document.querySelector('.profile-card');
    let startY, endY;
    let isSwiping = false;

    // Start touch event
    document.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        startY = touch.clientY;
        isSwiping = true; // Begin swipe detection
    });

    // Move touch event
    document.addEventListener('touchmove', (e) => {
        if (isSwiping) {
            const touch = e.touches[0];
            endY = touch.clientY;
        }
    });

    // End touch event
    document.addEventListener('touchend', () => {
        if (isSwiping) {
            const deltaY = startY - endY;

            // Only handle vertical swipes
            if (Math.abs(deltaY) > 50) {
                if (deltaY > 0) { // Swiped up (push gesture)
                    hideGreeting();
                    showProfileCard();
                } else { // Swiped down (pull down gesture)
                    showGreeting();
                    hideProfileCard();
                }
            }
            isSwiping = false; // End swipe detection
        }
    });

    // Show greeting function
    function showGreeting() {
        document.body.style.transition = 'background-color 1s ease';
        document.body.style.backgroundColor = '#f0f0f0';

        const greetingTextId = 'greeting-text';
        let greetingText = document.getElementById(greetingTextId);

        if (!greetingText) {
            greetingText = document.createElement('div');
            greetingText.id = greetingTextId;
            greetingText.classList.add('greeting-text');
            greetingText.style.opacity = '0';
            document.body.appendChild(greetingText);
            typeWriter(greetingText, "How are you today?", 50); // Start typewriter effect
            setTimeout(() => {
                greetingText.style.opacity = '1';
            }, 10); // Ensure opacity transition happens after element is appended
        } else {
            greetingText.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            greetingText.style.opacity = '1';
            greetingText.style.transform = 'translateY(0)'; // Reset position
        }
    }

    // Hide greeting function
    function hideGreeting() {
        const greetingText = document.getElementById('greeting-text');
        if (greetingText) {
            greetingText.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            greetingText.style.opacity = '0';
            greetingText.style.transform = 'translateY(-50px)'; // Move text up during hide
            setTimeout(() => {
                if (greetingText) {
                    document.body.removeChild(greetingText);
                }
            }, 500); // Remove element after opacity transition
        }
    }

    // Show profile card function
    function showProfileCard() {
        profileCard.style.transition = 'transform 1s ease, opacity 0.5s ease';
        profileCard.style.transform = 'translateY(0)'; // Move down to original position
        profileCard.style.opacity = '1'; // Make visible
    }

    // Hide profile card function
    function hideProfileCard() {
        profileCard.style.transition = 'transform 2s ease, opacity 0.5s ease';
        profileCard.style.transform = 'translateY(100%)'; // Move up to hide
        profileCard.style.opacity = '0'; // Hide visibility
    }

    // Typewriter effect function
    function typeWriter(element, text, speed) {
        let i = 0;
        element.innerHTML = ''; // Clear previous text
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
});
</script>
</body>
</html>
