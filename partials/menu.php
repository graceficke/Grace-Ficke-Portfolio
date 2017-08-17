<nav id="menu">
    <ul class="links">
        <li><a href="home.php" alt="Home">Home</a></li>
        <li><a href="resume.php" alt="Resume">Resume</a></li>
        <li><a class="scrolly" id="projects_link" href="home.php#one">Projects</a></li>
    </ul>
</nav>

<script>
    // Re-write projects url for scroll behavior if we are already on home page.
    document.addEventListener("DOMContentLoaded", function(){
        
        // Get the current page.
        var path = window.location.pathname;
        var page = path.split("/").pop();
        
        const homePageName = "home.php";
        
        // Check if we are on the home page.
        if(page == homePageName){
            // rewrite the url for scroll behavior.
            document.getElementById("projects_link").setAttribute("href", "#one");
        }
    });
</script>