/* ========================================
   NOVASPACE PREMIUM JAVASCRIPT
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ========================================
       ELEMENTS
    ======================================== */

    const loginPage =
        document.getElementById("loginPage");

    const dashboardPage =
        document.getElementById("dashboardPage");

    const loginForm =
        document.getElementById("loginForm");

    const usernameInput =
        document.getElementById("username");

    const passwordInput =
        document.getElementById("password");

    const showPassword =
        document.getElementById("showPassword");

    const loginButton =
        document.getElementById("loginButton");

    const logoutButton =
        document.getElementById("logoutButton");

    const displayUsername =
        document.getElementById("displayUsername");

    const postUsername =
        document.getElementById("postUsername");

    const postInput =
        document.getElementById("postInput");

    const publishPost =
        document.getElementById("publishPost");

    const feed =
        document.getElementById("feed");

    const notificationButton =
        document.getElementById("notificationButton");

    const notificationPanel =
        document.getElementById("notificationPanel");

    const notificationBadge =
        document.getElementById("notificationBadge");

    const forgotPassword =
        document.getElementById("forgotPassword");

    const signupLink =
        document.getElementById("signupLink");

    const loginBox =
        document.querySelector(".login-box");

    const mouseLight =
        document.querySelector(".mouse-light");


    /* ========================================
       INITIAL PAGE
    ======================================== */

    loginPage.style.display = "block";
    dashboardPage.style.display = "none";


    /* ========================================
       3D LOGIN EFFECT
    ======================================== */

    document.addEventListener(
        "mousemove",
        function (event) {

            if (
                !loginBox ||
                loginPage.style.display === "none"
            ) {
                return;
            }

            const centerX =
                window.innerWidth / 2;

            const centerY =
                window.innerHeight / 2;

            const rotateY =
                (event.clientX - centerX) / 55;

            const rotateX =
                (centerY - event.clientY) / 55;

            loginBox.style.transform =
                `rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    /* ========================================
       MOUSE LIGHT
    ======================================== */

    document.addEventListener(
        "mousemove",
        function (event) {

            if (!mouseLight) {
                return;
            }

            mouseLight.style.left =
                event.clientX + "px";

            mouseLight.style.top =
                event.clientY + "px";

        }
    );


    /* ========================================
       RESET 3D EFFECT
    ======================================== */

    document.addEventListener(
        "mouseleave",
        function () {

            if (!loginBox) {
                return;
            }

            loginBox.style.transform =
                "rotateX(0deg) rotateY(0deg)";

        }
    );


    /* ========================================
       SHOW / HIDE PASSWORD
    ======================================== */

    if (showPassword) {

        showPassword.addEventListener(
            "click",
            function () {

                if (
                    passwordInput.type ===
                    "password"
                ) {

                    passwordInput.type =
                        "text";

                    showPassword.textContent =
                        "🙈";

                } else {

                    passwordInput.type =
                        "password";

                    showPassword.textContent =
                        "👁";

                }

            }
        );

    }


    /* ========================================
       LOGIN
    ======================================== */

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const username =
                    usernameInput.value.trim();

                const password =
                    passwordInput.value.trim();


                if (username === "") {

                    usernameInput.focus();

                    return;

                }


                if (password === "") {

                    passwordInput.focus();

                    return;

                }


                loginButton.disabled =
                    true;

                loginButton.style.opacity =
                    "0.7";

                loginButton.querySelector(
                    "span"
                ).textContent =
                    "Signing in...";


                setTimeout(
                    function () {

                        displayUsername.textContent =
                            username;

                        postUsername.textContent =
                            username;


                        loginPage.style.display =
                            "none";

                        dashboardPage.style.display =
                            "block";


                        loginButton.disabled =
                            false;

                        loginButton.style.opacity =
                            "1";

                        loginButton.querySelector(
                            "span"
                        ).textContent =
                            "Sign In";


                        window.scrollTo(
                            0,
                            0
                        );

                    },
                    900
                );

            }
        );

    }


    /* ========================================
       LOGOUT
    ======================================== */

    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            function () {

                dashboardPage.style.display =
                    "none";

                loginPage.style.display =
                    "block";


                usernameInput.value =
                    "";

                passwordInput.value =
                    "";


                passwordInput.type =
                    "password";


                showPassword.textContent =
                    "👁";


                window.scrollTo(
                    0,
                    0
                );

            }
        );

    }


    /* ========================================
       FORGOT PASSWORD
    ======================================== */

    if (forgotPassword) {

        forgotPassword.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                alert(
                    "Password recovery is not connected yet."
                );

            }
        );

    }


    /* ========================================
       CREATE ACCOUNT
    ======================================== */

    if (signupLink) {

        signupLink.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                alert(
                    "Create account feature is coming soon."
                );

            }
        );

    }


    /* ========================================
       NOTIFICATIONS
    ======================================== */

    if (notificationButton) {

        notificationButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                notificationPanel.classList.toggle(
                    "active"
                );

            }
        );

    }


    /* ========================================
       CLOSE NOTIFICATIONS
    ======================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                notificationPanel &&
                !notificationPanel.contains(
                    event.target
                ) &&
                event.target !==
                    notificationButton
            ) {

                notificationPanel.classList.remove(
                    "active"
                );

            }

        }
    );


    /* ========================================
       CLEAR NOTIFICATION BADGE
    ======================================== */

    if (notificationPanel) {

        notificationPanel.addEventListener(
            "click",
            function () {

                if (notificationBadge) {

                    notificationBadge.style.display =
                        "none";

                }

            }
        );

    }


    /* ========================================
       CREATE POST
    ======================================== */

    if (publishPost) {

        publishPost.addEventListener(
            "click",
            function () {

                const text =
                    postInput.value.trim();


                if (text === "") {

                    postInput.focus();

                    return;

                }


                const post =
                    document.createElement(
                        "article"
                    );

                post.className =
                    "post-card";


                post.innerHTML = `

                    <div class="post-header">

                        <div class="avatar">
                            👤
                        </div>

                        <div>

                            <strong>
                                ${escapeHTML(
                                    displayUsername.textContent
                                )}
                            </strong>

                            <small>
                                Just now · 🌎
                            </small>

                        </div>

                    </div>


                    <p class="post-text">
                        ${escapeHTML(text)}
                    </p>


                    <div class="post-stats">

                        <span class="like-count">
                            ❤️ 0
                        </span>

                        <span>
                            💬 0 comments
                        </span>

                    </div>


                    <div class="post-buttons">

                        <button
                            type="button"
                            class="like-button"
                        >
                            ❤️ Like
                        </button>

                        <button
                            type="button"
                            class="comment-button"
                        >
                            💬 Comment
                        </button>

                        <button
                            type="button"
                            class="share-button"
                        >
                            ↗ Share
                        </button>

                    </div>


                    <div class="comment-section">

                        <div
                            class="comments-list"
                        ></div>

                        <div class="comment-input">

                            <input
                                type="text"
                                placeholder="Write a comment..."
                            >

                            <button
                                type="button"
                                class="send-comment"
                            >
                                ➤
                            </button>

                        </div>

                    </div>

                `;


                feed.prepend(post);

                postInput.value = "";


                setupPost(post);


                post.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }
        );

    }


    /* ========================================
       SETUP ALL POSTS
    ======================================== */

    function setupPost(post) {

        setupLike(post);

        setupComments(post);

        setupShare(post);

    }


    /* ========================================
       LIKE SYSTEM
    ======================================== */

    function setupLike(post) {

        const button =
            post.querySelector(
                ".like-button"
            );

        const count =
            post.querySelector(
                ".like-count"
            );


        if (!button) {
            return;
        }


        button.addEventListener(
            "click",
            function () {

                button.classList.remove(
                    "pop"
                );


                void button.offsetWidth;


                button.classList.add(
                    "pop"
                );


                if (
                    button.classList.contains(
                        "liked"
                    )
                ) {

                    button.classList.remove(
                        "liked"
                    );

                    button.textContent =
                        "❤️ Like";


                    changeLikeCount(
                        count,
                        -1
                    );

                } else {

                    button.classList.add(
                        "liked"
                    );

                    button.textContent =
                        "💙 Liked";


                    changeLikeCount(
                        count,
                        1
                    );

                }

            }
        );

    }


    /* ========================================
       LIKE COUNT
    ======================================== */

    function changeLikeCount(
        element,
        amount
    ) {

        if (!element) {
            return;
        }


        const currentText =
            element.textContent;


        const match =
            currentText.match(/\d+/);


        let number =
            match
                ? parseInt(match[0], 10)
                : 0;


        number += amount;


        if (number < 0) {
            number = 0;
        }


        element.textContent =
            "❤️ " + number;

    }


    /* ========================================
       COMMENTS
    ======================================== */

    function setupComments(post) {

        const commentButton =
            post.querySelector(
                ".comment-button"
            );

        const commentSection =
            post.querySelector(
                ".comment-section"
            );

        const input =
            post.querySelector(
                ".comment-input input"
            );

        const sendButton =
            post.querySelector(
                ".send-comment"
            );

        const commentsList =
            post.querySelector(
                ".comments-list"
            );


        if (!commentButton) {
            return;
        }


        commentButton.addEventListener(
            "click",
            function () {

                commentSection.classList.toggle(
                    "active"
                );


                if (
                    commentSection.classList.contains(
                        "active"
                    )
                ) {

                    input.focus();

                }

            }
        );


        function sendComment() {

            const text =
                input.value.trim();


            if (text === "") {
                return;
            }


            const comment =
                document.createElement(
                    "div"
                );

            comment.className =
                "comment";


            comment.innerHTML =
                `<strong>
                    ${escapeHTML(
                        displayUsername.textContent
                    )}
                </strong>
                ${escapeHTML(text)}`;


            commentsList.appendChild(
                comment
            );


            input.value = "";


            commentSection.classList.add(
                "active"
            );

        }


        sendButton.addEventListener(
            "click",
            sendComment
        );


        input.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    event.preventDefault();

                    sendComment();

                }

            }
        );

    }


    /* ========================================
       SHARE
    ======================================== */

    function setupShare(post) {

        const shareButton =
            post.querySelector(
                ".share-button"
            );


        if (!shareButton) {
            return;
        }


        shareButton.addEventListener(
            "click",
            async function () {

                const text =
                    post.querySelector(
                        ".post-text"
                    )?.textContent || "";


                try {

                    if (
                        navigator.clipboard
                    ) {

                        await navigator.clipboard.writeText(
                            text
                        );

                        const original =
                            shareButton.textContent;


                        shareButton.textContent =
                            "✓ Copied";


                        setTimeout(
                            function () {

                                shareButton.textContent =
                                    original;

                            },
                            1200
                        );

                    } else {

                        alert(
                            "Post ready to share!"
                        );

                    }

                } catch (error) {

                    alert(
                        "Post ready to share!"
                    );

                }

            }
        );

    }


    /* ========================================
       PHOTO BUTTON
    ======================================== */

    const photoButton =
        document.getElementById(
            "photoButton"
        );


    if (photoButton) {

        photoButton.addEventListener(
            "click",
            function () {

                alert(
                    "Photo upload feature is ready for the next upgrade."
                );

            }
        );

    }


    /* ========================================
       VIDEO BUTTON
    ======================================== */

    const videoButton =
        document.getElementById(
            "videoButton"
        );


    if (videoButton) {

        videoButton.addEventListener(
            "click",
            function () {

                alert(
                    "Video upload feature is ready for the next upgrade."
                );

            }
        );

    }


    /* ========================================
       FEELING BUTTON
    ======================================== */

    const feelingButton =
        document.getElementById(
            "feelingButton"
        );


    if (feelingButton) {

        feelingButton.addEventListener(
            "click",
            function () {

                const feelings = [
                    "😊 Feeling happy",
                    "🔥 Feeling excited",
                    "😎 Feeling cool",
                    "🚀 Feeling motivated",
                    "❤️ Feeling loved"
                ];


                const random =
                    feelings[
                        Math.floor(
                            Math.random() *
                            feelings.length
                        )
                    ];


                postInput.value =
                    random + "\n\n";

                postInput.focus();

            }
        );

    }


    /* ========================================
       ENTER TO LOGIN
    ======================================== */

    if (passwordInput) {

        passwordInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    event.preventDefault();

                    loginButton.click();

                }

            }
        );

    }


    /* ========================================
       INPUT ANIMATION
    ======================================== */

    const inputs =
        document.querySelectorAll(
            ".input-group input"
        );


    inputs.forEach(
        function (input) {

            input.addEventListener(
                "focus",
                function () {

                    this.parentElement.style.transform =
                        "translateY(-2px)";

                }
            );


            input.addEventListener(
                "blur",
                function () {

                    this.parentElement.style.transform =
                        "translateY(0)";

                }
            );

        }
    );


    /* ========================================
       INITIALIZE EXISTING POSTS
    ======================================== */

    const existingPosts =
        document.querySelectorAll(
            ".post-card"
        );


    existingPosts.forEach(
        function (post) {

            setupPost(post);

        }
    );


    /* ========================================
       SAFE HTML
    ======================================== */

    function escapeHTML(text) {

        const element =
            document.createElement(
                "div"
            );


        element.textContent =
            text;


        return element.innerHTML;

    }


    /* ========================================
       KEYBOARD SHORTCUT
    ======================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                if (notificationPanel) {

                    notificationPanel.classList.remove(
                        "active"
                    );

                }

            }

        }
    );

});
